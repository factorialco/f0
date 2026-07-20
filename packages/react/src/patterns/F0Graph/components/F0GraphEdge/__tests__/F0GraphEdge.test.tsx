import { type ComponentProps } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { F0GraphEdge } from "../F0GraphEdge"
import { edgeTypes, edgeVariants } from "../types"

const { baseEdgeRenderSpy } = vi.hoisted(() => ({
  baseEdgeRenderSpy: vi.fn(),
}))

vi.mock("@xyflow/react", async () => {
  const actual =
    await vi.importActual<typeof import("@xyflow/react")>("@xyflow/react")

  return {
    ...actual,
    BaseEdge: ({ id }: { id: string }) => {
      baseEdgeRenderSpy(id)
      return <div data-testid={`base-edge-${id}`} />
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
  })

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
})
