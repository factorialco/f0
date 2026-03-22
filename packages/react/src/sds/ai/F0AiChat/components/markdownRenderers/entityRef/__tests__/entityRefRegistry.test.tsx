import { describe, expect, it } from "vitest"

import { registerEntityRef, getEntityRefRenderer } from "../entityRefRegistry"

describe("entityRefRegistry", () => {
  // The registry is module-level state shared across tests.
  // We register fresh renderers with unique keys per test to avoid collisions.

  it("registers and retrieves a renderer", () => {
    const Renderer = ({ id, label }: { id: string; label: string }) => (
      <span>{`${id}-${label}`}</span>
    )

    registerEntityRef("test-type-a", Renderer)
    expect(getEntityRefRenderer("test-type-a")).toBe(Renderer)
  })

  it("returns undefined for an unregistered type", () => {
    expect(getEntityRefRenderer("nonexistent-type")).toBeUndefined()
  })

  it("overwrites a previously registered renderer", () => {
    const First = () => <span>first</span>
    const Second = () => <span>second</span>

    registerEntityRef("test-type-b", First)
    registerEntityRef("test-type-b", Second)

    expect(getEntityRefRenderer("test-type-b")).toBe(Second)
  })
})
