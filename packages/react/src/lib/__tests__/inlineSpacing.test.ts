import postcss from "postcss"
import tailwindcss from "tailwindcss"
import { describe, expect, it } from "vitest"
import { baseConfig } from "../../../../core/tailwind"

describe("inline layout spacing tokens", () => {
  it("generates dimensions from the shared scale", async () => {
    const { root } = await postcss([
      tailwindcss({
        ...baseConfig,
        safelist: [],
        content: [{ raw: "p-140 w-140", extension: "html" }],
      }),
    ]).process("@tailwind utilities;", { from: undefined })

    const declarations = new Map<string, string>()
    root.walkRules((rule) => {
      rule.walkDecls((declaration) => {
        declarations.set(
          `${rule.selector}:${declaration.prop}`,
          declaration.value
        )
      })
    })
    expect(declarations.get(".p-140:padding")).toBe("560px")
    expect(declarations.get(".w-140:width")).toBe("35rem")
  })
})
