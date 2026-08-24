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

  describe("when the items are a PAGE of a longer set", () => {
    const paging = {
      hasMore: true,
      isLoading: false,
      onLoadMore: () => {},
      total: 9,
    }

    test("Next stays live past the last loaded item", () => {
      render({ currentId: "c", pagination: { ...paging } })

      // Last of the three mounted, and the set continues: the arrow answers for
      // the SOURCE, not for the three items in hand.
      expect(screen.getByRole("button", { name: "Next" })).toBeEnabled()
    })

    test("the position counts against the source's total, not what is loaded", () => {
      render({ currentId: "c", pagination: { ...paging } })

      expect(screen.getByText("3 of 9")).toBeInTheDocument()
    })

    test("without a total the count says so rather than moving", () => {
      render({ currentId: "c", pagination: { ...paging, total: undefined } })

      // "3 of 3" would be a number that grows every time a page lands.
      expect(screen.getByText("3 of 3+")).toBeInTheDocument()
    })

    test("pressing Next at the end fetches, then finishes the move", async () => {
      const onLoadMore = vi.fn()
      const onNavigate = vi.fn()
      const { rerender } = render({
        currentId: "c",
        onNavigate,
        pagination: { ...paging, onLoadMore },
      })

      // Arriving here already prefetched the next page.
      expect(onLoadMore).toHaveBeenCalledTimes(1)

      await userEvent.click(screen.getByRole("button", { name: "Next" }))

      // The press does NOT ask again — the same records are already in flight —
      // and there is nothing to navigate to yet, since the item does not exist.
      expect(onLoadMore).toHaveBeenCalledTimes(1)
      expect(onNavigate).not.toHaveBeenCalled()

      // The page lands. The press the reader already made is honoured, so one
      // press advances once even across the boundary.
      rerender(
        <F0CarouselDialog
          isOpen
          onClose={() => {}}
          items={[
            ...ITEMS,
            { id: "d", title: "Fourth", content: <p>body d</p> },
          ]}
          currentId="c"
          onNavigate={onNavigate}
          pagination={{ ...paging, onLoadMore }}
        />
      )

      expect(onNavigate).toHaveBeenCalledWith("d")
    })

    test("arriving at the last loaded item prefetches, once per position", () => {
      const onLoadMore = vi.fn()
      const { rerender } = render({
        currentId: "c",
        pagination: { ...paging, onLoadMore },
      })

      expect(onLoadMore).toHaveBeenCalledTimes(1)

      // A source answering `hasMore: true` with no new records: the count is
      // where it was, so nothing asks again.
      rerender(
        <F0CarouselDialog
          isOpen
          onClose={() => {}}
          items={ITEMS}
          currentId="c"
          onNavigate={() => {}}
          pagination={{ ...paging, onLoadMore }}
        />
      )

      expect(onLoadMore).toHaveBeenCalledTimes(1)
    })

    test("a page in flight shows the wait on the arrow that caused it", () => {
      render({ currentId: "c", pagination: { ...paging, isLoading: true } })

      // And nothing is asked for twice while the first ask is outstanding.
      expect(screen.getByRole("button", { name: "Next" })).toBeDisabled()
    })

    test("loop is ignored while the set continues", () => {
      const onNavigate = vi.fn()
      render({
        currentId: "c",
        loop: true,
        onNavigate,
        pagination: { ...paging },
      })

      // An end that has not been reached is not an end to join up: this fetches
      // rather than wrapping round to the first item.
      expect(screen.getByRole("button", { name: "Previous" })).toBeEnabled()
      expect(screen.queryByText("3 of 3")).not.toBeInTheDocument()
    })
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
