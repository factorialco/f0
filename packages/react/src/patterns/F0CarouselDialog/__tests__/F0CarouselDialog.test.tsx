import { describe, expect, test, vi } from "vitest"

import { screen, userEvent, zeroRender } from "@/testing/test-utils"

import { F0CarouselDialog, type F0CarouselDialogItem } from "../index"

const ITEMS: F0CarouselDialogItem[] = [
  { id: "a", title: "First post", content: <p>body a</p> },
  { id: "b", title: "Second post", content: <p>body b</p> },
  { id: "c", title: "Third post", content: <p>body c</p> },
]

const render = (props = {}) =>
  zeroRender(
    <F0CarouselDialog
      isOpen
      onClose={() => {}}
      items={ITEMS}
      currentId="b"
      onNavigate={() => {}}
      {...props}
    />
  )

describe("F0CarouselDialog", () => {
  test("shows the page it was opened on, and only that one", () => {
    render()

    expect(screen.getByText("body b")).toBeInTheDocument()
    // One page mounted at a time: a dialog over a hundred posts costs one post.
    expect(screen.queryByText("body a")).not.toBeInTheDocument()
    expect(screen.queryByText("body c")).not.toBeInTheDocument()
  })

  test("the title and the position follow the content", () => {
    render()

    expect(screen.getByText("Second post")).toBeInTheDocument()
    expect(screen.getByText("2 of 3")).toBeInTheDocument()
  })

  test("the arrows walk the set", async () => {
    const onNavigate = vi.fn()
    render({ onNavigate })

    await userEvent.click(screen.getByRole("button", { name: "Next" }))
    expect(onNavigate).toHaveBeenCalledWith("c")

    await userEvent.click(screen.getByRole("button", { name: "Previous" }))
    expect(onNavigate).toHaveBeenCalledWith("a")
  })

  test("at the ends the arrows stay put and go disabled", () => {
    const { unmount } = render({ currentId: "a" })

    // Not removed: an arrow that vanishes takes the reader's aim with it, and on
    // the first page the one that vanished is the one they are about to want.
    expect(screen.getByRole("button", { name: "Previous" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "Next" })).toBeEnabled()
    unmount()

    render({ currentId: "c" })
    expect(screen.getByRole("button", { name: "Next" })).toBeDisabled()
  })

  test("loop joins the ends up", async () => {
    const onNavigate = vi.fn()
    render({ currentId: "c", loop: true, onNavigate })

    await userEvent.click(screen.getByRole("button", { name: "Next" }))

    expect(onNavigate).toHaveBeenCalledWith("a")
  })

  test("the arrow keys drive it", async () => {
    const onNavigate = vi.fn()
    render({ onNavigate })

    await userEvent.keyboard("{ArrowRight}")
    expect(onNavigate).toHaveBeenCalledWith("c")

    await userEvent.keyboard("{ArrowLeft}")
    expect(onNavigate).toHaveBeenCalledWith("a")
  })

  test("a lone item is not a carousel", () => {
    render({ items: [ITEMS[0]], currentId: "a" })

    // No arrows and no "1 of 1" — a reading nobody needs, on a dialog that has
    // nowhere to go.
    expect(
      screen.queryByRole("button", { name: "Next" })
    ).not.toBeInTheDocument()
    expect(screen.queryByText("1 of 1")).not.toBeInTheDocument()
  })

  test("an id that names nothing falls back to the first page", () => {
    // A post deleted underneath you, a filter changed: the dialog stays on
    // something rather than going blank.
    render({ currentId: "gone" })

    expect(screen.getByText("body a")).toBeInTheDocument()
  })

  test("the arrows are inside the dialog, so the focus trap can reach them", () => {
    render()

    // The reason they are children of the panel rather than portalled beside it:
    // anything outside a modal's content is `aria-hidden` and inert.
    const dialog = screen.getByRole("dialog")
    expect(dialog.contains(screen.getByRole("button", { name: "Next" }))).toBe(
      true
    )
  })
})
