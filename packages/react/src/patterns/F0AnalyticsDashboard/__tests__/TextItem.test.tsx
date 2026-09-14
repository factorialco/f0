import { afterEach, describe, expect, it, vi } from "vitest"
import { screen, userEvent, zeroRender as render } from "@/testing/test-utils"
import { TextItem } from "../components/TextItem/TextItem"
import type { DashboardTextItem } from "../types"

const textItem = (
  overrides: Partial<DashboardTextItem> = {}
): DashboardTextItem => ({
  id: "people-summary",
  type: "text",
  title: "Headcount +5%",
  content: "Engineering hired **ten people** this week.",
  ...overrides,
})

describe("TextItem", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("renders the headline at display size and the body as markdown", () => {
    render(<TextItem item={textItem()} />)

    const heading = screen.getByRole("heading", {
      name: "Headcount +5%",
      level: 3,
    })
    expect(heading).toHaveClass("text-xl")

    const emphasis = screen.getByText("ten people")
    expect(emphasis.tagName).toBe("STRONG")
  })

  it("renders without the card border", () => {
    const { container } = render(<TextItem item={textItem()} />)

    const root = container.firstElementChild
    expect(root).toHaveClass("bg-f1-background")
    expect(root).not.toHaveClass("border-f1-border-secondary")
  })

  it("renders no buttons when actions are omitted", () => {
    render(<TextItem item={textItem()} />)

    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("renders each question as a button and forwards the click", async () => {
    const onClick = vi.fn()
    render(
      <TextItem
        item={textItem({
          actions: [{ label: "Who are those people?", onClick }],
        })}
      />
    )

    await userEvent.click(
      screen.getByRole("button", { name: "Who are those people?" })
    )

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("shows at most three questions", () => {
    render(
      <TextItem
        item={textItem({
          actions: [
            { label: "First", onClick: () => {} },
            { label: "Second", onClick: () => {} },
            { label: "Third", onClick: () => {} },
            { label: "Fourth", onClick: () => {} },
          ],
        })}
      />
    )

    expect(screen.getByRole("button", { name: "Third" })).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Fourth" })
    ).not.toBeInTheDocument()
  })

  it("renders the One mark on a question by default", () => {
    render(
      <TextItem
        item={textItem({
          actions: [{ label: "Who are those people?", onClick: () => {} }],
        })}
      />
    )

    const button = screen.getByRole("button", { name: "Who are those people?" })
    expect(button.querySelector("svg")).not.toBeNull()
  })

  it("does not offer fullscreen", () => {
    render(<TextItem item={textItem()} />)

    expect(
      screen.queryByRole("button", { name: /fullscreen|expand/i })
    ).not.toBeInTheDocument()
  })

  it("makes an overflowing body keyboard-scrollable", () => {
    vi.spyOn(HTMLElement.prototype, "scrollHeight", "get").mockReturnValue(300)
    vi.spyOn(HTMLElement.prototype, "clientHeight", "get").mockReturnValue(120)

    render(<TextItem item={textItem()} />)

    const body = screen.getByText("ten people").closest("[tabindex]")
    expect(body).toHaveAttribute("tabindex", "0")
  })

  it("keeps a body that fits out of the tab order", () => {
    render(<TextItem item={textItem()} />)

    expect(screen.getByText("ten people").closest("[tabindex]")).toBeNull()
  })
})
