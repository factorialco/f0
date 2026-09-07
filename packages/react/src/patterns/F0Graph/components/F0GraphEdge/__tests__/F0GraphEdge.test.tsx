import { type ComponentProps } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { F0GraphEdge } from "../F0GraphEdge"
import { edgeTypes, edgeVariants } from "../types"

const { baseEdgeRenderSpy, baseEdgePropsSpy } = vi.hoisted(() => ({
  baseEdgeRenderSpy: vi.fn(),
  baseEdgePropsSpy: vi.fn(),
}))

vi.mock("@xyflow/react", async () => {
  const actual =
    await vi.importActual<typeof import("@xyflow/react")>("@xyflow/react")

  return {
    ...actual,
    BaseEdge: (props: {
      id: string
      path: string
      markerEnd?: string
      style?: Record<string, unknown>
    }) => {
      baseEdgeRenderSpy(props.id)
      baseEdgePropsSpy(props)
      return <div data-testid={`base-edge-${props.id}`} />
    },
  }
})

function makeEdgeProps(): ComponentProps<typeof F0GraphEdge> {
  return {
    id: "edge-1",
    source: "source",
    target: "target",
    sourceX: 0,
    sourceY: 0,
    targetX: 100,
    targetY: 0,
    sourcePosition: "right",
    targetPosition: "left",
    data: {
      showDot: true,
      pathType: "smoothstep",
    },
  }
}

describe("F0GraphEdge", () => {
  beforeEach(() => {
    baseEdgeRenderSpy.mockClear()
    baseEdgePropsSpy.mockClear()
  })

  function lastStyle(): Record<string, unknown> {
    const call = baseEdgePropsSpy.mock.calls.at(-1)?.[0]
    return (call?.style ?? {}) as Record<string, unknown>
  }

  function lastPath(): string {
    return (baseEdgePropsSpy.mock.calls.at(-1)?.[0]?.path ?? "") as string
  }

  it("exports correct edge types", () => {
    expect(edgeTypes).toEqual(["smoothstep", "straight", "bezier"])
  })

  it("exports correct edge variants", () => {
    expect(edgeVariants).toEqual(["default", "hover", "highlighted", "dimmed"])
  })

  it("rerenders on style changes and skips geometry-stable noop rerenders", () => {
    const edgeProps = makeEdgeProps()

    const { rerender } = render(<F0GraphEdge {...edgeProps} />)
    expect(baseEdgeRenderSpy).toHaveBeenCalledTimes(1)

    rerender(<F0GraphEdge {...edgeProps} />)
    expect(baseEdgeRenderSpy).toHaveBeenCalledTimes(1)

    rerender(<F0GraphEdge {...edgeProps} variant="highlighted" />)
    expect(baseEdgeRenderSpy).toHaveBeenCalledTimes(2)
  })

  describe("stroke color", () => {
    it.each([
      ["default", "var(--f0-graph-edge-default)"],
      ["hover", "var(--f0-graph-edge-hover)"],
      ["highlighted", "var(--f0-graph-edge-highlighted)"],
      // dimmed reuses the default colour and separates itself by opacity
      ["dimmed", "var(--f0-graph-edge-default)"],
    ] as const)("maps the %s variant to its token", (variant, expected) => {
      render(<F0GraphEdge {...makeEdgeProps()} variant={variant} />)
      expect(lastStyle().stroke).toBe(expected)
    })

    it("falls back to data.variant when the prop is absent", () => {
      const props = makeEdgeProps()
      render(
        <F0GraphEdge
          {...props}
          data={{ ...props.data, variant: "highlighted" }}
        />
      )
      expect(lastStyle().stroke).toBe("var(--f0-graph-edge-highlighted)")
    })

    it("prefers the explicit prop over data.variant", () => {
      const props = makeEdgeProps()
      render(
        <F0GraphEdge
          {...props}
          variant="hover"
          data={{ ...props.data, variant: "highlighted" }}
        />
      )
      expect(lastStyle().stroke).toBe("var(--f0-graph-edge-hover)")
    })
  })

  describe("dimmed opacity", () => {
    it("halves the opacity when dimmed", () => {
      render(<F0GraphEdge {...makeEdgeProps()} variant="dimmed" />)
      expect(lastStyle().opacity).toBe(0.5)
    })

    it("leaves opacity unset for every other variant", () => {
      render(<F0GraphEdge {...makeEdgeProps()} variant="highlighted" />)
      expect(lastStyle().opacity).toBeUndefined()
    })
  })

  describe("path type", () => {
    // `makeEdgeProps` is cross-axis aligned, which triggers the straight snap
    // below and would mask pathType entirely, so these offset the target.
    const offset = { targetY: 60 } as const

    // A cubic segment is what separates a bezier from the rest.
    it("draws a curve for bezier", () => {
      render(
        <F0GraphEdge
          {...makeEdgeProps()}
          {...offset}
          data={{ pathType: "bezier" }}
        />
      )
      expect(lastPath()).toContain("C")
    })

    it("draws no curve for straight", () => {
      render(
        <F0GraphEdge
          {...makeEdgeProps()}
          {...offset}
          data={{ pathType: "straight" }}
        />
      )
      expect(lastPath()).not.toContain("C")
    })

    it("snaps straight when the cross-axis offset is under 2px", () => {
      render(
        <F0GraphEdge
          {...makeEdgeProps()}
          sourcePosition="bottom"
          targetPosition="top"
          sourceX={0}
          sourceY={0}
          targetX={1}
          targetY={100}
          data={{ pathType: "bezier" }}
        />
      )
      // The straight snap outranks pathType, so the curve never appears.
      expect(lastPath()).not.toContain("C")
    })

    it("honours pathType once the offset clears the snap threshold", () => {
      render(
        <F0GraphEdge
          {...makeEdgeProps()}
          sourcePosition="bottom"
          targetPosition="top"
          sourceX={0}
          sourceY={0}
          targetX={80}
          targetY={100}
          data={{ pathType: "bezier" }}
        />
      )
      expect(lastPath()).toContain("C")
    })
  })

  describe("stroke width outside a zoom context", () => {
    it("defaults to 1", () => {
      render(<F0GraphEdge {...makeEdgeProps()} />)
      expect(lastStyle().strokeWidth).toBe(1)
    })

    it("takes the prop", () => {
      render(<F0GraphEdge {...makeEdgeProps()} strokeWidth={3} />)
      expect(lastStyle().strokeWidth).toBe(3)
    })

    it("takes style.strokeWidth over the prop", () => {
      render(
        <F0GraphEdge
          {...makeEdgeProps()}
          strokeWidth={3}
          style={{ strokeWidth: 7 }}
        />
      )
      expect(lastStyle().strokeWidth).toBe(7)
    })
  })

  describe("end dot", () => {
    it("points markerEnd at the edge's own marker by default", () => {
      render(<F0GraphEdge {...makeEdgeProps()} />)
      expect(baseEdgePropsSpy.mock.calls.at(-1)?.[0].markerEnd).toBe(
        "url(#f0-edge-dot-edge-1)"
      )
    })

    it("drops the marker when data.showDot is false", () => {
      const props = makeEdgeProps()
      render(
        <F0GraphEdge {...props} data={{ ...props.data, showDot: false }} />
      )
      expect(baseEdgePropsSpy.mock.calls.at(-1)?.[0].markerEnd).toBeUndefined()
    })
  })
})
