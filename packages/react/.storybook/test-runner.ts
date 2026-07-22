import type { TestRunnerConfig } from "@storybook/test-runner"
import { getStoryContext } from "@storybook/test-runner"
import {
  configureAxe,
  DefaultTerminalReporter,
  getViolations,
  injectAxe,
} from "axe-playwright"
import type Reporter from "axe-playwright/dist/types"
import { appendFileSync, readFileSync } from "fs"

// Story files grandfathered to skip axe while their violations are burned
// down (Path to AA). The list may only shrink — see the JSON file.
const a11ySkipAllowlist: Set<string> = new Set(
  JSON.parse(
    readFileSync(
      new URL("./a11y-skip-allowlist.json", import.meta.url),
      "utf-8"
    )
  ).files
)

const A11Y_TEST_MODES = ["error", "todo", "warning"] as const

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

      const a11yParams = storyContext.parameters?.a11y ?? {}
      // Storybook reports the CSF file as "./src/...", the allowlist stores "src/..."
      const storyFile = (storyContext.parameters?.fileName ?? "").replace(
        /^\.\//,
        ""
      )

      if (a11yParams.skipCi) {
        // Grandfathered files keep skipping while their violations are burned
        // down (Path to AA). The allowlist may only shrink.
        if (a11ySkipAllowlist.has(storyFile)) {
          return
        }
        throw new Error(
          `[a11y] "a11y.skipCi" is not allowed for new stories (story: ${context.id}, file: ${storyFile || "unknown"}). ` +
            `Every new story must run axe in CI — use a11y: { test: "todo" } for known-failing stories, ` +
            `or fix the violations and use test: "error".`
        )
      }

      // Resolve the test mode up front. "off" (or anything unknown) is not
      // allowed in CI — it used to silently fall through without warning.
      const testMode = a11yParams.test ?? "error"
      if (!A11Y_TEST_MODES.includes(testMode)) {
        throw new Error(
          `[a11y] Unsupported a11y.test mode "${testMode}" (story: ${context.id}). ` +
            `Allowed modes: ${A11Y_TEST_MODES.join(", ")}. Use "todo" for known-failing stories.`
        )
      }

      const a11yConfig = a11yParams.config || {}
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

        if (testMode === "error") {
          // Throw a simple, single-line error for error mode
          throw new Error(
            `${violations.length} accessibility violation${violations.length === 1 ? "" : "s"} detected`
          )
        }

        // 'todo' / 'warning': log without failing the test
        console.warn(
          `${violations.length} accessibility violation${violations.length === 1 ? "" : "s"} detected`
        )
        // Surface the debt in the GitHub Actions job summary
        if (process.env.GITHUB_STEP_SUMMARY) {
          appendFileSync(
            process.env.GITHUB_STEP_SUMMARY,
            `- ⚠️ ${context.title} / ${context.name}: ${violations.length} a11y violation${violations.length === 1 ? "" : "s"} (test: "${testMode}")\n`
          )
        }
        return
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
