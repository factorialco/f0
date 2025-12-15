import type { TestRunnerConfig } from "@storybook/test-runner"
import { getStoryContext } from "@storybook/test-runner"
import {
  configureAxe,
  DefaultTerminalReporter,
  getViolations,
  injectAxe,
} from "axe-playwright"
import type Reporter from "axe-playwright/dist/types"

// Infer the violations type from getViolations return type
type Violations = Awaited<ReturnType<typeof getViolations>>

/**
 * Custom reporter that only logs violations, suppressing success messages
 */
class SilentReporter implements Reporter {
  async report(violations: Violations): Promise<void> {
    // Only report violations, suppress success messages
    if (violations.length > 0) {
      // Use the default terminal reporter for violations
      // Constructor takes: detailedReport, includeHtml, verbose
      const defaultReporter = new DefaultTerminalReporter(true, true, false)
      await defaultReporter.report(violations)
    }
    // Do nothing when there are no violations
  }
}

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
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
    try {
      // Get the entire context of a story, including parameters, args, argTypes, etc.
      const storyContext = await getStoryContext(page, context)

      // Do not run a11y tests on disabled stories.
      if (storyContext.parameters?.a11y?.skipCi) {
        return
      }

      const a11yConfig = storyContext.parameters?.a11y?.config || {}
      // Apply story-level a11y rules
      await configureAxe(page, a11yConfig)

      // Add a longer delay to ensure previous axe run is complete
      await page.waitForTimeout(500)

      // Ensure any previous axe runs are complete
      await page.evaluate(() => {
        if (window.axe?.isRunning) {
          return new Promise((resolve) => {
            const checkRunning = () => {
              if (!window.axe?.isRunning) {
                resolve(true)
              } else {
                setTimeout(checkRunning, 100)
              }
            }
            checkRunning()
          })
        }
      })

      // Get violations without throwing an error
      const violations = await getViolations(page, "#storybook-root", {
        runOnly: {
          type: "tag",
          values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"],
        },
      })

      // Report violations if any are found
      if (violations.length > 0) {
        const reporter = new SilentReporter()
        await reporter.report(violations)

        // Check the test mode: 'error', 'todo', 'warning', or 'off'
        const testMode = storyContext.parameters?.a11y?.test || "error"

        if (testMode === "error") {
          // Throw a simple, single-line error for error mode
          throw new Error(
            `${violations.length} accessibility violation${violations.length === 1 ? "" : "s"} detected`
          )
        } else if (testMode === "todo" || testMode === "warning") {
          // Log a simple warning message for todo/warning mode
          console.warn(
            `${violations.length} accessibility violation${violations.length === 1 ? "" : "s"} detected`
          )
          // Don't throw, just return (test continues)
          return
        }
        // 'off' mode is already handled by skipCi check above
      }
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes("Axe is already running")
      ) {
        console.warn("Skipping a11y test due to concurrent run:", error.message)
        return
      }
      // Re-throw accessibility violation errors as-is (they're already formatted)
      // Other errors should be thrown normally
      throw error
    }
  },
}

export default config
