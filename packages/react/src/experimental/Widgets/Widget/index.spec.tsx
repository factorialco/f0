import { screen } from "@testing-library/react"
import { Fragment } from "react"
import { expect, test, vi } from "vitest"

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
