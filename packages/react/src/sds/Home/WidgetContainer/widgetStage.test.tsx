import { describe, expect, test } from "vitest"

import { useLayoutEffect, useRef, useState } from "react"

import { act, zeroRender } from "@/testing/test-utils"

import { WidgetStage } from "./WidgetStage"

/**
 * WHAT A STAGE IS FOR: drawing one widget's card somewhere its container is not,
 * without the card being built again. `stackedRemount.test.tsx` holds the
 * behaviour a reader would notice; these hold the three properties it rests on.
 */
describe("WidgetStage", () => {
  /** How many times the card has been built, and what it could measure. */
  let mounts = 0
  let parentOnMount: string | null = null

  const Card = () => {
    const ref = useRef<HTMLSpanElement>(null)
    useLayoutEffect(() => {
      mounts += 1
      // What the card's own layout effect can see of the document — where a
      // widget that measures itself would do it.
      parentOnMount =
        ref.current?.closest("[data-where]")?.getAttribute("data-where") ?? null
    }, [])
    return (
      <span ref={ref} data-card>
        card
      </span>
    )
  }

  const Harness = ({ startHosted = false }: { startHosted?: boolean }) => {
    const [hosted, setHosted] = useState(startHosted)
    const [host, setHost] = useState<HTMLElement | null>(null)
    move = setHosted
    return (
      <>
        {/* The host FIRST, and the card only once it is known. That is the
            layout's own order too: it draws its hosts at every width precisely
            so a card is never asking for one that does not exist yet. */}
        <div data-where="elsewhere" ref={setHost} />
        <div data-where="column">
          {host || !startHosted ? (
            <WidgetStage host={hosted ? host : null}>
              <Card />
            </WidgetStage>
          ) : null}
        </div>
      </>
    )
  }

  let move: (hosted: boolean) => void = () => {}

  const setup = (startHosted = false) => {
    mounts = 0
    parentOnMount = null
    return zeroRender(<Harness startHosted={startHosted} />)
  }

  const whereIsCard = (root: HTMLElement) =>
    root
      .querySelector("[data-card]")
      ?.closest("[data-where]")
      ?.getAttribute("data-where")

  /**
   * THE STAGE IS ATTACHED IN THE COMMIT, before the card's own layout effects.
   * Appended from an effect instead, this one would run AFTER the card's, and
   * every widget that measures itself on mount would measure a detached tree —
   * a height of zero, from a card that is really on screen.
   */
  test("has the card in the document by the time the card's effects run", () => {
    setup()

    expect(parentOnMount).toBe("column")
  })

  /** …including when it starts out hosted somewhere else. */
  test("and in the host when it starts there", () => {
    setup(true)

    expect(parentOnMount).toBe("elsewhere")
  })

  test("draws the card in the column when nothing hosts it", () => {
    const { container } = setup()

    expect(whereIsCard(container)).toBe("column")
    expect(mounts).toBe(1)
  })

  /**
   * THE ONE THAT MATTERS. React cannot be handed a different portal container —
   * it rebuilds the subtree into it — so the container never changes and the
   * DOM node moves instead. Moving a node does not touch a fiber, so the card
   * is the same render on the other side.
   */
  test("moves the card to its host without building it again", () => {
    const { container } = setup()
    expect(whereIsCard(container)).toBe("column")

    act(() => move(true))

    expect(whereIsCard(container)).toBe("elsewhere")
    expect(mounts).toBe(1)
  })

  test("and brings it back the same way", () => {
    const { container } = setup()

    act(() => move(true))
    act(() => move(false))

    expect(whereIsCard(container)).toBe("column")
    expect(mounts).toBe(1)
  })

  /**
   * The stage is OURS, not React's: React empties it when the portal goes, but
   * the div itself was appended by hand and has to be taken out by hand — left
   * behind, every unmounted widget would leak an empty box into whatever it was
   * drawn in.
   */
  test("takes its own box out of the document when the widget goes", () => {
    const { container, unmount } = setup()
    expect(container.querySelector("[data-widget-stage]")).not.toBeNull()

    unmount()

    expect(container.querySelector("[data-widget-stage]")).toBeNull()
  })
})
