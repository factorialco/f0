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
        content: [
          {
            raw: "p-1.25 p-2.25 p-75 p-100 w-1.25 w-2.25 w-75 w-100",
            extension: "html",
          },
        ],
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
    expect(declarations.get(".p-1\\.25:padding")).toBe("5px")
    expect(declarations.get(".p-2\\.25:padding")).toBe("9px")
    expect(declarations.get(".p-75:padding")).toBe("300px")
    expect(declarations.get(".p-100:padding")).toBe("400px")
    expect(declarations.get(".w-1\\.25:width")).toBe("0.3125rem")
    expect(declarations.get(".w-2\\.25:width")).toBe("0.5625rem")
    expect(declarations.get(".w-75:width")).toBe("18.75rem")
    expect(declarations.get(".w-100:width")).toBe("25rem")
  })
})
