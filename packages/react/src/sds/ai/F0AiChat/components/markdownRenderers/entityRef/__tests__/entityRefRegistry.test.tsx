import { describe, expect, it } from "vitest"

import { getEntityRefRenderer } from "../entityRefRegistry"

describe("entityRefRegistry", () => {
  it("returns the person renderer", () => {
    const renderer = getEntityRefRenderer("person")
    expect(renderer).toBeDefined()
  })

  it("returns undefined for an unregistered type", () => {
    expect(getEntityRefRenderer("nonexistent-type")).toBeUndefined()
  })
})
