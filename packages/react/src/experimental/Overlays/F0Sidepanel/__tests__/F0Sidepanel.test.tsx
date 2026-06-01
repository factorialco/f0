import { describe, expect, it, vi } from "vitest"

import { Delete, Pencil } from "@/icons/app"
import {
  screen,
  userEvent,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"

import { F0Sidepanel } from "../index"

describe("F0Sidepanel", () => {
  describe("mounting", () => {
    it("renders content when open", () => {
      render(
        <F0Sidepanel open onClose={() => {}}>
          <p>Inside body</p>
        </F0Sidepanel>
      )
      expect(screen.getByText("Inside body")).toBeInTheDocument()
    })

    it("does not render content when closed", () => {
      render(
        <F0Sidepanel open={false} onClose={() => {}}>
          <p>Inside body</p>
        </F0Sidepanel>
      )
      expect(screen.queryByText("Inside body")).not.toBeInTheDocument()
    })
  })

  describe("close timing", () => {
    it("fires onCloseClicked immediately and onClose after the exit animation", async () => {
      const onCloseClicked = vi.fn()
      const onClose = vi.fn()

      render(
        <F0Sidepanel
          open
          onClose={onClose}
          onCloseClicked={onCloseClicked}
          title="Resource"
        >
          <p>Inside</p>
        </F0Sidepanel>
      )

      await userEvent.click(screen.getByRole("button", { name: /close/i }))

      expect(onCloseClicked).toHaveBeenCalledTimes(1)
      expect(onClose).not.toHaveBeenCalled()

      await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1), {
        timeout: 500,
      })
    })

    it("cancels the pending onClose if the parent re-opens the panel before the exit animation fires", async () => {
      const onClose = vi.fn()

      const { rerender } = render(
        <F0Sidepanel open onClose={onClose} title="Resource">
          <p>Inside</p>
        </F0Sidepanel>
      )

      await userEvent.click(screen.getByRole("button", { name: /close/i }))

      // Parent closes (e.g. from onCloseClicked) and immediately re-opens,
      // simulating a quick toggle within the 200ms exit-animation window.
      rerender(
        <F0Sidepanel open={false} onClose={onClose} title="Resource">
          <p>Inside</p>
        </F0Sidepanel>
      )
      rerender(
        <F0Sidepanel open onClose={onClose} title="Resource">
          <p>Inside</p>
        </F0Sidepanel>
      )

      // Wait past the original exit window — onClose must not fire because the
      // pending timeout was cleared on re-open.
      await new Promise((resolve) => setTimeout(resolve, 300))
      expect(onClose).not.toHaveBeenCalled()
    })

    it("fires onClose on Escape (not locked)", async () => {
      const onClose = vi.fn()

      render(
        <F0Sidepanel open onClose={onClose} title="Resource">
          <p>Inside</p>
        </F0Sidepanel>
      )

      await userEvent.keyboard("{Escape}")

      await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1), {
        timeout: 500,
      })
    })
  })

  describe("locked", () => {
    it("does not call onClose on Escape when locked", async () => {
      const onClose = vi.fn()
      const onCloseClicked = vi.fn()

      render(
        <F0Sidepanel
          open
          locked
          onClose={onClose}
          onCloseClicked={onCloseClicked}
          title="Resource"
        >
          <p>Inside</p>
        </F0Sidepanel>
      )

      await userEvent.keyboard("{Escape}")
      // Wait past the exit animation window to be sure nothing fires later.
      await new Promise((resolve) => setTimeout(resolve, 300))

      expect(onCloseClicked).not.toHaveBeenCalled()
      expect(onClose).not.toHaveBeenCalled()
    })

    it("still allows close via the X button when locked", async () => {
      const onClose = vi.fn()

      render(
        <F0Sidepanel open locked onClose={onClose} title="Resource">
          <p>Inside</p>
        </F0Sidepanel>
      )

      await userEvent.click(screen.getByRole("button", { name: /close/i }))

      await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1), {
        timeout: 500,
      })
    })
  })

  describe("navigation", () => {
    it("fires previous and next onClick callbacks", async () => {
      const onPrev = vi.fn()
      const onNext = vi.fn()

      render(
        <F0Sidepanel
          open
          onClose={() => {}}
          title="Resource"
          navigation={{
            counter: { current: 2, total: 5 },
            previous: { onClick: onPrev, title: "Previous resource" },
            next: { onClick: onNext, title: "Next resource" },
          }}
        >
          <p>Inside</p>
        </F0Sidepanel>
      )

      await userEvent.click(
        screen.getByRole("button", { name: /previous resource/i })
      )
      expect(onPrev).toHaveBeenCalledTimes(1)

      await userEvent.click(
        screen.getByRole("button", { name: /next resource/i })
      )
      expect(onNext).toHaveBeenCalledTimes(1)
    })

    it("disables the previous chevron when previous is omitted", () => {
      render(
        <F0Sidepanel
          open
          onClose={() => {}}
          title="Resource"
          navigation={{
            next: { onClick: () => {}, title: "Next resource" },
          }}
        >
          <p>Inside</p>
        </F0Sidepanel>
      )

      expect(screen.getByRole("button", { name: /previous/i })).toBeDisabled()
      expect(
        screen.getByRole("button", { name: /next resource/i })
      ).not.toBeDisabled()
    })

    it("renders the counter when provided", () => {
      render(
        <F0Sidepanel
          open
          onClose={() => {}}
          title="Resource"
          navigation={{ counter: { current: 2, total: 5 } }}
        >
          <p>Inside</p>
        </F0Sidepanel>
      )

      expect(screen.getByText("2/5")).toBeInTheDocument()
    })
  })

  describe("options menu", () => {
    it("opens the kebab dropdown and invokes the selected item's onClick", async () => {
      const onEdit = vi.fn()

      render(
        <F0Sidepanel
          open
          onClose={() => {}}
          title="Resource"
          options={[
            { label: "Edit", icon: Pencil, onClick: onEdit },
            {
              label: "Delete",
              icon: Delete,
              critical: true,
              onClick: () => {},
            },
          ]}
        >
          <p>Inside</p>
        </F0Sidepanel>
      )

      await userEvent.click(
        screen.getByRole("button", { name: /more actions/i })
      )

      const editItem = await screen.findByRole("menuitem", { name: /edit/i })
      await userEvent.click(editItem)

      // f0 Dropdown delays onClick by ~200ms (Radix dialog animation workaround).
      await waitFor(() => expect(onEdit).toHaveBeenCalledTimes(1), {
        timeout: 500,
      })
    })
  })

  describe("loading", () => {
    it("renders skeleton placeholders for the title and navigation when loading", () => {
      render(
        <F0Sidepanel open onClose={() => {}} title="Resource" loading>
          <p>Inside</p>
        </F0Sidepanel>
      )

      expect(screen.getByTestId("sidepanel-title-skeleton")).toBeInTheDocument()
      expect(
        screen.getByTestId("sidepanel-navigation-skeleton")
      ).toBeInTheDocument()

      // Real title text should not render while loading.
      expect(screen.queryByText("Resource")).not.toBeInTheDocument()
    })

    it("keeps the close button functional while loading", async () => {
      const onClose = vi.fn()

      render(
        <F0Sidepanel open onClose={onClose} title="Resource" loading>
          <p>Inside</p>
        </F0Sidepanel>
      )

      await userEvent.click(screen.getByRole("button", { name: /close/i }))

      await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1), {
        timeout: 500,
      })
    })
  })

  describe("title", () => {
    it("renders a string title", () => {
      render(
        <F0Sidepanel open onClose={() => {}} title="Ainhoa López">
          <p>Inside</p>
        </F0Sidepanel>
      )

      expect(screen.getByText("Ainhoa López")).toBeInTheDocument()
    })

    it("does not render the title slot when null", () => {
      render(
        <F0Sidepanel open onClose={() => {}} title={null}>
          <p>Inside</p>
        </F0Sidepanel>
      )

      // No title text rendered; close button still present.
      expect(screen.queryByText("Ainhoa López")).not.toBeInTheDocument()
      expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument()
    })
  })
})
