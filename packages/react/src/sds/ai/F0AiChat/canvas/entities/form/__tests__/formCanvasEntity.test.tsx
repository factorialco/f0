import { describe, expect, it } from "vitest"

import { formCanvasEntity } from "../index"

describe("formCanvasEntity", () => {
  it("sets overflowHidden to true so the form's internal scroll container handles scrolling and sticky sidebar works", () => {
    expect(formCanvasEntity.overflowHidden).toBe(true)
  })
})
