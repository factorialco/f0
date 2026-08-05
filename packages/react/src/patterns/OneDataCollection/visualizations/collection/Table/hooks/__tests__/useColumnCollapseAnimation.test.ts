import { renderHook } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { useColumnCollapseAnimation } from "../useColumnCollapseAnimation"

const CELL_CLASS = "f0-collapsing-group-0"
/** What the table resolves for the column while nothing is pinned to zero. */
const NATURAL_WIDTH = 120
/** What a later cell would measure once an earlier one has been pinned. */
const REFLOWED_WIDTH = 80

type Recorded = { keyframes: Keyframe[]; options: KeyframeAnimationOptions }

describe("useColumnCollapseAnimation", () => {
  const originalAnimate = HTMLElement.prototype.animate
  const originalGetBoundingClientRect =
    HTMLElement.prototype.getBoundingClientRect
  const originalGetComputedStyle = globalThis.getComputedStyle

  let container: HTMLElement
  let recorded: Recorded[]
  /** Set once any cell is pinned to zero, standing in for the table reflow. */
  let anyCellPinned: boolean

  beforeEach(() => {
    recorded = []
    anyCellPinned = false

    container = document.createElement("div")
    // Three cells of one column: the header cell and two body cells.
    for (let index = 0; index < 3; index++) {
      const cell = document.createElement("div")
      cell.className = CELL_CLASS
      container.appendChild(cell)
    }
    document.body.appendChild(container)

    HTMLElement.prototype.getBoundingClientRect = function () {
      return {
        width: anyCellPinned ? REFLOWED_WIDTH : NATURAL_WIDTH,
      } as DOMRect
    }

    globalThis.getComputedStyle = (() => ({
      paddingLeft: "12px",
      paddingRight: "12px",
    })) as unknown as typeof globalThis.getComputedStyle

    HTMLElement.prototype.animate = function (
      keyframes: Keyframe[],
      options: KeyframeAnimationOptions
    ) {
      recorded.push({ keyframes, options })
      anyCellPinned = true

      return {
        finished: Promise.resolve(),
        cancel: vi.fn(),
      } as unknown as Animation
    } as typeof HTMLElement.prototype.animate
  })

  afterEach(() => {
    HTMLElement.prototype.animate = originalAnimate
    HTMLElement.prototype.getBoundingClientRect = originalGetBoundingClientRect
    globalThis.getComputedStyle = originalGetComputedStyle
    container.remove()
  })

  const renderOpening = () =>
    renderHook(() =>
      useColumnCollapseAnimation(
        { current: container },
        [{ groupId: "january", cellClass: CELL_CLASS, direction: "open" }],
        vi.fn()
      )
    )

  it("animates every cell of a column towards the same width", () => {
    renderOpening()

    // Two animations per cell: the size one first, then the fade.
    const targets = recorded
      .filter(({ keyframes }) => "width" in keyframes[0])
      .map(({ keyframes }) => keyframes[1].width)

    expect(targets).toEqual([
      `${NATURAL_WIDTH}px`,
      `${NATURAL_WIDTH}px`,
      `${NATURAL_WIDTH}px`,
    ])
  })

  it("reads every cell before pinning any of them", () => {
    renderOpening()

    // A cell measured after a sibling was pinned would carry the reflowed
    // width, which is what leaves the header and the body out of step.
    const sizeKeyframes = recorded.filter(
      ({ keyframes }) => "width" in keyframes[0]
    )

    expect(
      sizeKeyframes.some(
        ({ keyframes }) => keyframes[1].width === `${REFLOWED_WIDTH}px`
      )
    ).toBe(false)
  })
})
