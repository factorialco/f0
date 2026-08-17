import { screen } from "@testing-library/react"
import { Fragment } from "react"
import { afterEach, describe, expect, test, vi } from "vitest"

/* eslint-disable no-constant-binary-expression */
import { userEvent, zeroRender } from "@/testing/test-utils"

import { Widget } from "./index"

const renderWidget = () => {
  return zeroRender(
    <Widget>
      <></>
      <Fragment></Fragment>
      {false && <p>asd</p>}
      {null}
      {undefined}
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <></>
      <Fragment></Fragment>
      {false && <p>asd</p>}
      {null}
      {undefined}
    </Widget>
  )
}

test("only valid elements are rendered", async () => {
  renderWidget()

  const paragraphs = screen.getAllByText(/.+/)
  expect(paragraphs).toHaveLength(3)
})

test("there is one separator between each valid element", async () => {
  renderWidget()

  const separators = screen.queryAllByRole("separator")
  expect(separators).toHaveLength(2)
})

test("the link IS the title: the widget's name is what you click", async () => {
  const onClick = vi.fn()
  zeroRender(
    <Widget
      header={{
        title: "Communications",
        link: { title: "Go to Communications", onClick },
      }}
    >
      <p>body</p>
    </Widget>
  )

  // Named for the DESTINATION (a title alone can't say where it goes), while
  // the visible text is the title itself.
  const link = screen.getByRole("button", { name: "Go to Communications" })
  expect(link).toHaveTextContent("Communications")

  await userEvent.click(link)
  expect(onClick).toHaveBeenCalled()
})

test("hovering the title says where it goes", async () => {
  zeroRender(
    <Widget
      header={{
        title: "Communications",
        link: { title: "Go to Communications", onClick: () => {} },
      }}
    >
      <p>body</p>
    </Widget>
  )

  await userEvent.hover(
    screen.getByRole("button", { name: "Go to Communications" })
  )

  // The title alone says WHAT you are looking at; the tooltip says what
  // clicking it does.
  expect(
    await screen.findByRole("tooltip", { name: /Go to Communications/ })
  ).toBeInTheDocument()
})

test("a link with a url is a real anchor, and only another host opens a tab", () => {
  const { rerender } = zeroRender(
    <Widget
      header={{
        title: "Resources",
        link: { title: "Go to factorial.co", url: "https://factorial.co" },
      }}
    >
      <p>body</p>
    </Widget>
  )

  const external = screen.getByRole("link", { name: "Go to factorial.co" })
  expect(external).toHaveAttribute("href", "https://factorial.co")
  expect(external).toHaveAttribute("target", "_blank")

  rerender(
    <Widget
      header={{
        title: "Events",
        link: { title: "Go to Calendar", url: "/calendar#core.events" },
      }}
    >
      <p>body</p>
    </Widget>
  )

  expect(
    screen.getByRole("link", { name: "Go to Calendar" })
  ).not.toHaveAttribute("target")
})

describe("a wider card speaks up", () => {
  /**
   * jsdom lays nothing out — every box is 0×0 — so the card's width is what this
   * says it is. `clientWidth` rather than a bounding rect, because that is the
   * metric the card reads (transforms must not change its type scale).
   */
  const withCardWidth = (width: number) => {
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockImplementation(
      function (this: HTMLElement) {
        // `role="article"` is the Card's own — nothing else in the tree has it.
        return this.getAttribute("role") === "article" ? width : 0
      }
    )
  }

  afterEach(() => vi.restoreAllMocks())

  test("in a rail-width card the title and the footer button are unchanged", () => {
    withCardWidth(396)
    zeroRender(
      <Widget
        header={{ title: "Team" }}
        action={{ label: "Go to Team", onClick: () => {} }}
      >
        <p>body</p>
      </Widget>
    )

    expect(screen.getByRole("heading", { name: "Team" })).not.toHaveClass(
      "text-lg"
    )
    // The chosen size lands on the button's INNER box, so the arbitrary
    // variant on the root is what says which size it was given.
    expect(
      screen.getByRole("button", { name: "Go to Team" }).className
    ).toContain("[&_.main]:h-6")
  })

  test("past 480px the title steps up a size, and so does the footer button", () => {
    withCardWidth(600)
    zeroRender(
      <Widget
        header={{ title: "Team" }}
        action={{ label: "Go to Team", onClick: () => {} }}
      >
        <p>body</p>
      </Widget>
    )

    expect(screen.getByRole("heading", { name: "Team" })).toHaveClass("text-lg")
    expect(
      screen.getByRole("button", { name: "Go to Team" }).className
    ).toContain("[&_.main]:h-8")
  })

  test("a widget that asks for a button size still gets it", () => {
    withCardWidth(600)
    zeroRender(
      <Widget
        header={{ title: "Team" }}
        action={{ label: "Go to Team", onClick: () => {}, size: "sm" }}
      >
        <p>body</p>
      </Widget>
    )

    expect(
      screen.getByRole("button", { name: "Go to Team" }).className
    ).toContain("[&_.main]:h-6")
  })
})
