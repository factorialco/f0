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
            raw: "p-1.25 p-2.25 p-70 p-75 p-90 p-100 w-1.25 w-2.25 w-70 w-75 w-90 w-100 p-140 w-140 p-35 w-35",
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
    expect(declarations.get(".p-70:padding")).toBe("280px")
    expect(declarations.get(".p-90:padding")).toBe("360px")
    expect(declarations.get(".w-70:width")).toBe("17.5rem")
    expect(declarations.get(".w-90:width")).toBe("22.5rem")
    expect(declarations.get(".p-1\\.25:padding")).toBe("5px")
    expect(declarations.get(".p-2\\.25:padding")).toBe("9px")
    expect(declarations.get(".p-75:padding")).toBe("300px")
    expect(declarations.get(".p-100:padding")).toBe("400px")
    expect(declarations.get(".w-1\\.25:width")).toBe("0.3125rem")
    expect(declarations.get(".w-2\\.25:width")).toBe("0.5625rem")
    expect(declarations.get(".w-75:width")).toBe("18.75rem")
    expect(declarations.get(".w-100:width")).toBe("25rem")
    expect(declarations.get(".p-140:padding")).toBe("560px")
    expect(declarations.get(".p-35:padding")).toBe("140px")
    expect(declarations.get(".w-35:width")).toBe("8.75rem")
    expect(declarations.get(".w-140:width")).toBe("35rem")
  })
})
