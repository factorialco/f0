import { beforeEach, describe, expect, test } from "vitest"

import { useState } from "react"

import { Calendar } from "@/icons/app"
import { zeroRender } from "@/testing/test-utils"

import { type HomeWidgetItem, type SlotRenderers } from "../slotRenderers"
import { takeCardGhost, takePageSurface } from "./dragGhost"
import { WidgetContainer } from "./index"

/**
 * The ghost is a COPY of the card's DOM rather than a second render of the
 * widget, which is the whole point: a second render is a second mount, and
 * everything the card had built up — which page of its carousel you were on,
 * what its clock said — started over for the length of the drag.
 */
const card = (html: string): HTMLElement => {
  const node = document.createElement("div")
  node.className = "cursor-grab invisible"
  node.dataset.widgetId = "communities"
  node.style.transform = "translate3d(0, 40px, 0)"
  node.style.transition = "transform 200ms"
  node.innerHTML = html

  return node
}

/** How many times the counting tile has been built from scratch. */
let tileMounts = 0

/**
 * A tile with STATE OF ITS OWN, the way the real ones have: a carousel on its
 * third page, a clock mid-tick, a list scrolled down. It counts its mounts and
 * shows what it counted to, so a second mount is visible rather than silent.
 */
const CountingTile = () => {
  const [mounted] = useState(() => (tileMounts += 1))

  return <span>page {mounted}</span>
}

const RENDERERS: SlotRenderers = { counting: () => <CountingTile /> }

const statefulWidget = (id: string): HomeWidgetItem => ({
  id,
  icon: Calendar,
  header: { title: id },
  slots: [{ visualization: "counting", params: {} }],
})

/**
 * THE REGRESSION. The ghost used to be `render(active, { isDragging: true })` —
 * the widget a second time — so the card the pointer carried had mounted afresh:
 * a carousel on its third page showed its first for the length of the drag and
 * snapped back on release. Copying the card cannot do that, and this is the
 * assertion that says so: the copy shows what the card showed, and building it
 * mounted nothing.
 */
describe("the ghost of a card with state in it", () => {
  beforeEach(() => {
    tileMounts = 0
  })

  test("shows what the card showed, and mounts nothing to do it", () => {
    const { container } = zeroRender(
      <WidgetContainer
        widgets={[statefulWidget("communities"), statefulWidget("events")]}
        slotRenderers={RENDERERS}
        onReorder={() => {}}
      />
    )

    expect(tileMounts).toBe(2)
    const card = container.querySelector('[data-widget-id="communities"]')
    // The card is on its first page here; a real one would be on its third.
    expect(card?.textContent).toContain("page 1")

    const ghost = takeCardGhost(card)

    // The SAME page, not a fresh tile — and no third mount anywhere.
    expect(ghost?.textContent).toContain("page 1")
    expect(tileMounts).toBe(2)
  })
})

describe("takeCardGhost", () => {
  test("copies the card as it looks, subtree and all", () => {
    const ghost = takeCardGhost(
      card("<h3>Community posts</h3><p>page three</p>")
    )

    expect(ghost?.textContent).toBe("Community postspage three")
    expect(ghost?.dataset.widgetId).toBe("communities")
  })

  test("is VISIBLE and STILL, whatever the card it copied was doing", () => {
    // The original goes invisible for the drag and carries the sortable's
    // transform; the copy is the one you see, and it does not move on its own.
    const ghost = takeCardGhost(card("<span>x</span>"))

    expect(ghost?.classList.contains("invisible")).toBe(false)
    expect(ghost?.style.transform).toBe("none")
    expect(ghost?.style.transition).toBe("none")
  })

  test("takes no ids with it", () => {
    // Two nodes with one id breaks every `aria-*` and label pointing at it,
    // and `document.getElementById` would start answering with the ghost.
    const source = card('<button id="menu">…</button><div id="panel"></div>')
    source.id = "widget-card"

    const ghost = takeCardGhost(source)

    expect(ghost?.hasAttribute("id")).toBe(false)
    expect(ghost?.querySelectorAll("[id]")).toHaveLength(0)
    // The original is untouched: it is still the card in the column.
    expect(source.id).toBe("widget-card")
    expect(source.querySelectorAll("[id]")).toHaveLength(2)
  })

  test("is a picture, not a control", () => {
    const ghost = takeCardGhost(card("<button>Actions</button>"))

    expect(ghost?.getAttribute("aria-hidden")).toBe("true")
    expect(ghost?.hasAttribute("inert")).toBe(true)
  })

  test("has nothing to copy when the card is gone", () => {
    // A column that scrolled the card out from under the pointer, or an id no
    // longer in the DOM: no ghost rather than a crash.
    expect(takeCardGhost(null)).toBeNull()
    expect(takeCardGhost(undefined)).toBeNull()
  })
})

describe("takePageSurface", () => {
  const at = (node: HTMLElement, top: number, left: number) => {
    node.getBoundingClientRect = () =>
      ({ top, left, width: 1200, height: 800 }) as DOMRect
    return node
  }

  const surface = () => {
    const node = document.createElement("div")
    node.className = "-z-10 bg-f1-special-page"
    node.innerHTML = '<div id="wash" class="bg-gradient-to-bl"></div>'
    return at(node, 0, 0)
  }

  test("places the copy where the page's own surface is", () => {
    const taken = takePageSurface(surface(), at(card(""), 300, 840))

    expect(taken?.offset).toEqual({
      top: -300,
      left: -840,
      width: 1200,
      height: 800,
    })
  })

  test("fills the box it is given, whatever the original was placed by", () => {
    const taken = takePageSurface(surface(), at(card(""), 0, 0))

    expect(taken?.node.style.width).toBe("100%")
    expect(taken?.node.style.height).toBe("100%")
    expect(taken?.node.className).not.toContain("-z-10")
  })

  test("is a picture, not a control — and takes no ids with it", () => {
    const taken = takePageSurface(surface(), at(card(""), 0, 0))

    expect(taken?.node.querySelector("#wash")).toBeNull()
    expect(taken?.node.getAttribute("aria-hidden")).toBe("true")
    expect(taken?.node.hasAttribute("inert")).toBe(true)
  })

  test("has nothing to copy without both halves", () => {
    expect(takePageSurface(null, card(""))).toBeNull()
    expect(takePageSurface(surface(), null)).toBeNull()
  })
})
