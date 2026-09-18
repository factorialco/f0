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
        content: [{ raw: "p-70 p-90 w-70 w-90", extension: "html" }],
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
    expect(declarations.get(".p-70:padding")).toBe("280px")
    expect(declarations.get(".p-90:padding")).toBe("360px")
    expect(declarations.get(".w-70:width")).toBe("17.5rem")
    expect(declarations.get(".w-90:width")).toBe("22.5rem")
  })
})
