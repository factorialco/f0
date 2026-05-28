// Usage: pnpm tsx scripts/check-one.mjs F0Button
import data from "../src/data/components.json" with { type: "json" }
import { getIssues } from "../src/criteria.ts"

const target = process.argv[2]
if (!target) {
  console.error("Usage: pnpm tsx scripts/check-one.mjs <ComponentName>")
  process.exit(1)
}

const matches = data.components.filter(
  (c) =>
    c.id.includes(`/${target}/`) &&
    !c.id.includes(`${target}Dropdown`) &&
    !c.id.includes(`${target}Toggle`)
)

console.log(`Found ${matches.length} entries for "${target}"\n`)

for (const c of matches) {
  console.log("===", c.id)
  console.log(
    "folder:",
    c.folder,
    "| declared:",
    c.declaredMaturity,
    "| inferred:",
    c.inferredMaturity
  )
  console.log("storyTags:", (c.storyTags || []).join(", ") || "(none)")
  console.log("storyPath:", c.storyPath || "(none)")
  console.log("indexPath:", c.indexPath || "(none)")
  console.log("mdx:", JSON.stringify(c.mdx))
  console.log("hasExperimentalWrapper:", c.hasExperimentalWrapper)
  const issues = getIssues(c)
  const blocking = issues.filter((i) => i.severity === "blocking")
  const suggestion = issues.filter((i) => i.severity === "suggestion")
  const info = issues.filter((i) => i.severity === "info")
  console.log(
    `\nIssues: ${issues.length} total (${blocking.length} blocking, ${suggestion.length} suggestion, ${info.length} info)`
  )
  for (const i of issues) {
    console.log(`  [${i.severity}] ${i.id}: ${i.label}`)
    if (i.detail) console.log(`             → ${i.detail}`)
  }
  console.log()
}
