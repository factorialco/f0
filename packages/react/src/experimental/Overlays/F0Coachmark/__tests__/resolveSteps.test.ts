import { afterEach, describe, expect, it, vi } from "vitest"

import { resolveSteps } from "../imperative"

afterEach(() => {
  vi.restoreAllMocks()
})

describe("resolveSteps", () => {
  it("turns a single coachmark into a one-step sequence", () => {
    expect(
      resolveSteps({
        targetElement: "#filters",
        title: "Filters got smarter",
        description: "Stack filters on jobs and candidates.",
        action: { label: "Learn more" },
      })
    ).toEqual([
      {
        title: "Filters got smarter",
        description: "Stack filters on jobs and candidates.",
        action: { label: "Learn more" },
        targetElement: "#filters",
        arrow: undefined,
        side: undefined,
        align: undefined,
        sideOffset: undefined,
      },
    ])
  })

  it("gives every step the shared target and placement", () => {
    const steps = resolveSteps({
      targetElement: "#filters",
      side: "top",
      align: "start",
      arrow: false,
      sideOffset: 12,
      steps: [{ title: "One" }, { title: "Two" }],
    })

    expect(steps).toHaveLength(2)
    for (const step of steps) {
      expect(step).toMatchObject({
        targetElement: "#filters",
        side: "top",
        align: "start",
        arrow: false,
        sideOffset: 12,
      })
    }
  })

  it("lets a step override the shared target and placement", () => {
    const [first, second] = resolveSteps({
      targetElement: "#filters",
      side: "top",
      steps: [
        { title: "One" },
        { title: "Two", targetElement: "#views", side: "right", arrow: false },
      ],
    })

    expect(first).toMatchObject({ targetElement: "#filters", side: "top" })
    expect(second).toMatchObject({
      targetElement: "#views",
      side: "right",
      arrow: false,
    })
  })

  // Merged per key rather than by spreading: `{...shared, ...step}` would let a
  // step that spells out `side: undefined` erase the shared value.
  it("falls back to the shared value when a step spells out undefined", () => {
    const [step] = resolveSteps({
      targetElement: "#filters",
      side: "top",
      arrow: false,
      steps: [{ title: "One", side: undefined, arrow: undefined }],
    })

    expect(step).toMatchObject({ side: "top", arrow: false })
  })

  it("drops a step that has no target anywhere, and warns", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

    const steps = resolveSteps({
      steps: [
        { title: "Anchored", targetElement: "#filters" },
        { title: "Adrift" },
      ],
    })

    expect(steps.map((step) => step.title)).toEqual(["Anchored"])
    expect(warn).toHaveBeenCalledWith(expect.stringContaining("Adrift"))
  })

  it("returns nothing when no step can be anchored", () => {
    vi.spyOn(console, "warn").mockImplementation(() => {})

    expect(resolveSteps({ steps: [{ title: "Adrift" }] })).toEqual([])
    expect(resolveSteps({ steps: [] })).toEqual([])
  })
})
