import { describe, expect, it } from "vitest"

import { sanitizePasted } from "../index"

describe("sanitizePasted", () => {
  it("replaces every NBSP form with a regular space", () => {
    expect(sanitizePasted("a\xA0b&nbsp;c&#160;d&#xA0;e")).toBe("a b c d e")
  })

  it("leaves content without NBSPs untouched", () => {
    expect(sanitizePasted("<p>Hello world</p>")).toBe("<p>Hello world</p>")
  })
})
