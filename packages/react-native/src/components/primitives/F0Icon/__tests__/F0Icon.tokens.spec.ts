import fs from "fs"
import path from "path"

import { ICON_COLORS } from "../F0Icon.types"

describe("F0Icon token sync", () => {
  it("ICON_COLORS matches f0-icon-* tokens in theme.css", () => {
    const css = fs.readFileSync(
      path.resolve(__dirname, "../../../../styles/theme.css"),
      "utf-8"
    )

    // Extract all --color-f0-icon-<name> tokens, excluding sub-tokens
    // that are already captured (e.g. --color-f0-icon-mood-positive
    // but not --color-f0-icon which maps to "default")
    const tokenRegex = /--color-f0-icon-([a-z0-9][a-z0-9-]*):/g
    const tokensFromCSS = new Set<string>()
    let match
    while ((match = tokenRegex.exec(css)) !== null) {
      tokensFromCSS.add(match[1])
    }

    // "default" in ICON_COLORS maps to the base --color-f0-icon token
    const colorsFromType = new Set<string>(
      ICON_COLORS.filter((c) => c !== "default")
    )

    const missingInType = [...tokensFromCSS].filter(
      (t) => !colorsFromType.has(t)
    )
    const extraInType = [...colorsFromType].filter((t) => !tokensFromCSS.has(t))

    expect(missingInType).toEqual([])
    expect(extraInType).toEqual([])
  })
})
