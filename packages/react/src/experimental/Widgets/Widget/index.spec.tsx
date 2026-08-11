import { screen } from "@testing-library/react"
import { Fragment } from "react"
import { expect, test } from "vitest"

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

test("the header link names itself: its title is the accessible name AND the tooltip", async () => {
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

  // Icon-only, so the title is all a screen reader has to go on.
  const link = screen.getByRole("button", { name: "Go to Communications" })

  await userEvent.hover(link)
  expect(
    await screen.findByRole("tooltip", { name: /Go to Communications/ })
  ).toBeInTheDocument()
})
