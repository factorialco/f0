import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { F0ResourcePage } from "../index"

describe("F0ResourcePage", () => {
  it("renders the notice, header and content in a fixed order", () => {
    render(
      <F0ResourcePage
        title="Payroll"
        alert={<div>Sync paused</div>}
        aside={<div>Rail</div>}
      >
        <div>Members</div>
      </F0ResourcePage>
    )

    const rendered = [
      screen.getByText("Sync paused"),
      // BaseHeader renders the title as a styled span, not a heading element.
      screen.getByText("Payroll"),
      screen.getByText("Members"),
    ]

    // Each node must precede the next one in document order.
    rendered.forEach((node, index) => {
      const next = rendered[index + 1]
      if (!next) return
      expect(
        node.compareDocumentPosition(next) & Node.DOCUMENT_POSITION_FOLLOWING
      ).toBeTruthy()
    })
  })

  it("renders the rail beside the content when `aside` is set", () => {
    render(
      <F0ResourcePage title="Payroll" aside={<div>Rail</div>}>
        <div>Members</div>
      </F0ResourcePage>
    )

    expect(screen.getByText("Rail")).toBeDefined()
    expect(screen.getByRole("complementary")).toBeDefined()
  })

  it("stays single column when `aside` is omitted", () => {
    render(
      <F0ResourcePage title="Payroll">
        <div>Members</div>
      </F0ResourcePage>
    )

    expect(screen.getByText("Members")).toBeDefined()
    expect(screen.queryByRole("complementary")).toBeNull()
  })

  it("renders tabs only when they are provided", () => {
    const { unmount } = render(
      <F0ResourcePage title="Payroll">
        <div>Members</div>
      </F0ResourcePage>
    )
    expect(screen.queryByRole("link", { name: "People" })).toBeNull()
    unmount()

    render(
      <F0ResourcePage
        title="Payroll"
        tabs={[
          { id: "overview", label: "Overview" },
          { id: "people", label: "People" },
        ]}
        activeTabId="overview"
      >
        <div>Members</div>
      </F0ResourcePage>
    )
    expect(screen.getByText("People")).toBeDefined()
  })

  it("calls onHistoryClick from the history button", async () => {
    const user = userEvent.setup()
    const onHistoryClick = vi.fn()

    render(
      <F0ResourcePage title="Payroll" onHistoryClick={onHistoryClick}>
        <div>Members</div>
      </F0ResourcePage>
    )

    // BaseHeader renders a mobile and a desktop action cluster, so the button
    // exists twice in the DOM.
    const historyButtons = screen.getAllByRole("button", { name: "History" })
    expect(historyButtons).toHaveLength(2)

    await user.click(historyButtons[0])
    expect(onHistoryClick).toHaveBeenCalledTimes(1)
  })

  it("omits the history button when no handler is given", () => {
    render(
      <F0ResourcePage title="Payroll">
        <div>Members</div>
      </F0ResourcePage>
    )

    expect(screen.queryByRole("button", { name: "History" })).toBeNull()
  })
})
