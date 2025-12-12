import type { TestRunnerConfig } from "@storybook/test-runner"
import { getStoryContext } from "@storybook/test-runner"
import { checkA11y, configureAxe, injectAxe } from "axe-playwright"

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */

// Maximum timeout for axe polling (10 seconds)
const AXE_POLLING_TIMEOUT = 10000
// Polling interval (100ms)
const AXE_POLLING_INTERVAL = 100
// Timeout for checkA11y call (20 seconds)
const CHECK_A11Y_TIMEOUT = 20000
// Global timeout for entire postVisit hook (60 seconds)
const POST_VISIT_TIMEOUT = 60000

/**
 * Creates a promise that rejects after the specified timeout
 */
function timeoutPromise<T>(
  promise: Promise<T>,
  timeoutMs: number,
  errorMessage: string
): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(errorMessage)), timeoutMs)
    ),
  ])
}

const config: TestRunnerConfig = {
  async preVisit(page) {
    try {
      await injectAxe(page)
    } catch (error) {
      console.error("Failed to inject axe:", error)
      throw error
    }
  },
  async postVisit(page, context) {
    let storyContext: Awaited<ReturnType<typeof getStoryContext>> | undefined
    const storyId = context.id || "unknown"
    const storyTitle = context.title || "unknown"

    // Wrap entire postVisit in a timeout to prevent hanging
    try {
      await timeoutPromise(
        (async () => {
          try {
            // Get the entire context of a story, including parameters, args, argTypes, etc.
            storyContext = await getStoryContext(page, context)

            // Do not run a11y tests on disabled stories.
            if (storyContext.parameters?.a11y?.skipCi) {
              return
            }

            // Apply story-level a11y rules
            await configureAxe(
              page,
              storyContext.parameters?.a11y?.config || {}
            )

            // Add a longer delay to ensure previous axe run is complete
            await page.waitForTimeout(500)

            // Ensure any previous axe runs are complete with timeout
            await timeoutPromise(
              page.evaluate(
                ({ maxWaitTime, pollingInterval }) => {
                  if (window.axe?.isRunning) {
                    return new Promise<boolean>((resolve, reject) => {
                      const startTime = Date.now()

                      const checkRunning = () => {
                        const elapsed = Date.now() - startTime

                        if (!window.axe?.isRunning) {
                          resolve(true)
                        } else if (elapsed >= maxWaitTime) {
                          reject(
                            new Error(
                              `Axe polling timeout: axe.isRunning remained true after ${maxWaitTime}ms`
                            )
                          )
                        } else {
                          setTimeout(checkRunning, pollingInterval)
                        }
                      }
                      checkRunning()
                    })
                  }
                  return Promise.resolve(true)
                },
                {
                  maxWaitTime: AXE_POLLING_TIMEOUT,
                  pollingInterval: AXE_POLLING_INTERVAL,
                }
              ),
              AXE_POLLING_TIMEOUT,
              `Axe polling timeout for story "${storyTitle}" (${storyId})`
            )

            // Wrap checkA11y with timeout
            await timeoutPromise(
              checkA11y(page, "#storybook-root", {
                detailedReport: true,
                detailedReportOptions: {
                  html: true,
                },
                axeOptions: {
                  runOnly: {
                    type: "tag",
                    values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"],
                  },
                },
              }),
              CHECK_A11Y_TIMEOUT,
              `A11y check timeout for story "${storyTitle}" (${storyId}) after ${CHECK_A11Y_TIMEOUT}ms`
            )
          } catch (error) {
            const storyInfo = storyContext
              ? `Story: "${storyContext.title || "unknown"}" (${storyContext.id || "unknown"})`
              : `Story: "${storyTitle}" (${storyId})`

            if (
              error instanceof Error &&
              error.message.includes("Axe is already running")
            ) {
              console.warn(
                `Skipping a11y test due to concurrent run: ${error.message} - ${storyInfo}`
              )
              return
            }

            if (error instanceof Error && error.message.includes("timeout")) {
              console.error(`A11y test timeout - ${storyInfo}:`, error.message)
              throw new Error(
                `A11y test timeout - ${storyInfo}: ${error.message}`
              )
            }

            console.error(`A11y test failed - ${storyInfo}:`, error)
            throw error
          }
        })(),
        POST_VISIT_TIMEOUT,
        `Story "${storyTitle}" (${storyId}) exceeded global timeout of ${POST_VISIT_TIMEOUT}ms. The story may be hanging or taking too long to initialize.`
      )
    } catch (error) {
      const storyInfo = storyContext
        ? `Story: "${storyContext?.title || "unknown"}" (${storyContext?.id || "unknown"})`
        : `Story: "${storyTitle}" (${storyId})`

      if (
        error instanceof Error &&
        error.message.includes("exceeded global timeout")
      ) {
        console.error(`Global timeout exceeded - ${storyInfo}:`, error.message)
        throw new Error(
          `Story "${storyTitle}" (${storyId}) timed out after ${POST_VISIT_TIMEOUT}ms. This may indicate the story is hanging or has an infinite loop. Check the story's beforeEach hooks, decorators, or component logic.`
        )
      }

      throw error
    }
  },
}

export default config
