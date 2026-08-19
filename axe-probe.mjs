// Reproduce the CI axe run for specific stories and print the failing nodes.
// Mirrors .storybook/test-runner.ts: same runOnly tags, same #storybook-root scope.
import { createRequire } from "node:module"
import { chromium } from "playwright"

const require = createRequire(
  "/Users/albert.prieto/.claude/worktrees/f0/chore-filterpicker-stable-dod/packages/react/"
)
const axePath = require.resolve("axe-core")

const BASE = "http://127.0.0.1:6017"
const RUN_ONLY = {
  type: "tag",
  values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22a", "wcag22aa"],
}
const stories = process.argv.slice(2)

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })

for (const id of stories) {
  await page.goto(`${BASE}/iframe.html?id=${id}&viewMode=story`, {
    waitUntil: "networkidle",
  })
  await page.waitForSelector("#storybook-root", { timeout: 30000 })
  await page.waitForTimeout(1200)
  await page.addScriptTag({ path: axePath })

  const res = await page.evaluate(
    async ({ runOnly }) => {
      const r = await window.axe.run("#storybook-root", { runOnly })
      return r.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        help: v.help,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
          html: n.html.slice(0, 220),
        })),
      }))
    },
    { runOnly: RUN_ONLY }
  )

  console.log(`\n=== ${id} — ${res.length} violation(s) ===`)
  for (const v of res) {
    console.log(`  ${v.id} [${v.impact}] ${v.help}`)
    for (const n of v.nodes) {
      console.log(`    target: ${JSON.stringify(n.target)}`)
      console.log(`    html:   ${n.html}`)
      console.log(`    why:    ${(n.summary || "").replace(/\n+/g, " | ")}`)
    }
  }
}

await browser.close()
