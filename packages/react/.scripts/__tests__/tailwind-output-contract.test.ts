import postcss from "postcss"
import tailwindcss from "tailwindcss"
import { beforeAll, describe, expect, it } from "vitest"

import tailwindConfig from "../../tailwind.config"

async function compileUtilities(): Promise<string> {
  const result = await postcss([tailwindcss(tailwindConfig)]).process(
    "@tailwind utilities;",
    { from: undefined }
  )

  return result.css
}

const iconColorClasses = [
  "text-f1-icon",
  "text-f1-icon-secondary",
  "text-f1-icon-inverse",
  "text-f1-icon-bold",
  "text-f1-icon-critical",
  "text-f1-icon-critical-bold",
  "text-f1-icon-accent",
  "text-f1-icon-info",
  "text-f1-icon-warning",
  "text-f1-icon-positive",
  "text-f1-icon-promote",
  "text-f1-icon-selected",
  "text-f1-icon-selected-hover",
  "text-f1-icon-mood-super-negative",
  "text-f1-icon-mood-negative",
  "text-f1-icon-mood-neutral",
  "text-f1-icon-mood-positive",
  "text-f1-icon-mood-super-positive",
] as const

describe("published Tailwind output", () => {
  let css: string

  beforeAll(async () => {
    css = await compileUtilities()
  }, 15_000)

  it("keeps semantic color generation proportional to real usage", () => {
    let semanticColorRuleCount = 0

    postcss.parse(css).walkRules((rule) => {
      if (rule.selector.includes("f1-")) semanticColorRuleCount += 1
    })

    expect(semanticColorRuleCount).toBeLessThan(1_000)
  })

  it("includes every public semantic icon color", () => {
    for (const className of iconColorClasses) {
      expect(css).toContain(`.${className}`)
    }
  })
})
