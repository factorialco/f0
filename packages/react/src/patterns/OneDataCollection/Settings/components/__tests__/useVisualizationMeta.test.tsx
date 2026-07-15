import { describe, expect, it } from "vitest"

import { IconType } from "@/components/F0Icon"
import { zeroRenderHook as renderHook } from "@/testing/test-utils"

import { useVisualizationMeta } from "../useVisualizationMeta"

// A stand-in IconType value; the resolver only compares identity.
const CustomIcon = (() => null) as unknown as IconType

// The resolver only reads `type`, `label` and (for custom) `icon` at runtime, so
// we cast minimal fixtures to the visualization union to avoid rebuilding the full
// options shape of each view.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const viz = (v: Record<string, unknown>): any => v

const renderResolver = () =>
  renderHook(() => useVisualizationMeta()).result.current

describe("useVisualizationMeta", () => {
  it("uses the localized built-in label when no override is provided", () => {
    const resolve = renderResolver()

    expect(resolve(viz({ type: "table", options: {} })).label).toBe("Table")
    expect(resolve(viz({ type: "graph", options: {} })).label).toBe("Graph")
  })

  it("uses the per-instance label override for built-in visualizations", () => {
    const resolve = renderResolver()

    expect(
      resolve(viz({ type: "table", label: "Teams", options: {} })).label
    ).toBe("Teams")
    expect(
      resolve(viz({ type: "graph", label: "Org chart", options: {} })).label
    ).toBe("Org chart")
  })

  it("keeps the built-in icon even when the label is overridden", () => {
    const resolve = renderResolver()

    const withoutOverride = resolve(viz({ type: "graph", options: {} }))
    const withOverride = resolve(
      viz({ type: "graph", label: "Org chart", options: {} })
    )

    expect(withOverride.icon).toBe(withoutOverride.icon)
  })

  it("honors the label and icon of a custom visualization", () => {
    const resolve = renderResolver()

    const meta = resolve(
      viz({
        type: "custom",
        label: "My view",
        icon: CustomIcon,
        component: () => null,
      })
    )

    expect(meta.label).toBe("My view")
    expect(meta.icon).toBe(CustomIcon)
  })
})
