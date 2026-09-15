import { useLayoutEffect, useRef, useState } from "react"
import { describe, expect, test } from "vitest"
import { act, zeroRender } from "@/testing/test-utils"
import { WidgetStage } from "./WidgetStage"

describe("WidgetStage", () => {
  let mounts = 0
  let parentOnMount: string | null = null

  const Card = () => {
    const ref = useRef<HTMLSpanElement>(null)
    useLayoutEffect(() => {
      mounts += 1
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

  test("has the card in the document by the time the card's effects run", () => {
    setup()

    expect(parentOnMount).toBe("column")
  })

  test("and in the host when it starts there", () => {
    setup(true)

    expect(parentOnMount).toBe("elsewhere")
  })

  test("draws the card in the column when nothing hosts it", () => {
    const { container } = setup()

    expect(whereIsCard(container)).toBe("column")
    expect(mounts).toBe(1)
  })

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

  test("takes its own box out of the document when the widget goes", () => {
    const { container, unmount } = setup()
    expect(container.querySelector("[data-widget-stage]")).not.toBeNull()

    unmount()

    expect(container.querySelector("[data-widget-stage]")).toBeNull()
  })
})
