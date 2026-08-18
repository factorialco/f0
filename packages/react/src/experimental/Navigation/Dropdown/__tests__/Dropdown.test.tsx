import { useState } from "react"
import { describe, expect, expectTypeOf, it, vi } from "vitest"

import { Add, Pencil } from "@/icons/app"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { Dropdown, type MobileDropdownItem } from "../index"

const items = [
  { label: "Create", onClick: vi.fn(), icon: Add },
  { label: "Edit", onClick: vi.fn(), icon: Pencil },
]

describe("Dropdown (experimental) — disabled", () => {
  it("renders the default trigger as a disabled button", () => {
    render(<Dropdown items={items} disabled />)
    const trigger = screen.getByRole("button")
    expect(trigger).toBeDisabled()
  })

  it("does not open on click when disabled (default trigger)", async () => {
    render(<Dropdown items={items} disabled />)
    const trigger = screen.getByRole("button")
    await userEvent.click(trigger)
    expect(screen.queryByText("Create")).not.toBeInTheDocument()
  })

  it("does not open on keyboard activation when disabled", async () => {
    render(<Dropdown items={items} disabled />)
    const trigger = screen.getByRole("button")
    trigger.focus()
    await userEvent.keyboard("{Enter}")
    await userEvent.keyboard(" ")
    await userEvent.keyboard("{ArrowDown}")
    expect(screen.queryByText("Create")).not.toBeInTheDocument()
  })

  it("forwards disabled and aria-disabled to a custom React element trigger", () => {
    render(
      <Dropdown items={items} disabled>
        <button aria-label="Open menu">Custom</button>
      </Dropdown>
    )
    const trigger = screen.getByRole("button", { name: "Open menu" })
    expect(trigger).toBeDisabled()
    expect(trigger).toHaveAttribute("aria-disabled", "true")
  })

  it("does not open on click when custom trigger is disabled", async () => {
    render(
      <Dropdown items={items} disabled>
        <button aria-label="Open menu">Custom</button>
      </Dropdown>
    )
    const trigger = screen.getByRole("button", { name: "Open menu" })
    await userEvent.click(trigger)
    expect(screen.queryByText("Create")).not.toBeInTheDocument()
  })

  it("respects consumer-supplied disabled value when rendering a custom trigger", () => {
    render(
      <Dropdown items={items} disabled>
        <button aria-label="Open menu" disabled={false}>
          Custom
        </button>
      </Dropdown>
    )
    const trigger = screen.getByRole("button", { name: "Open menu" })
    expect(trigger).not.toBeDisabled()
  })

  it("ignores controlled open=true when disabled", () => {
    const onOpenChange = vi.fn()
    render(<Dropdown items={items} disabled open onOpenChange={onOpenChange} />)
    expect(screen.queryByText("Create")).not.toBeInTheDocument()
  })

  it("calls onOpenChange(false) when disabled flips to true while controlled open=true", () => {
    const onOpenChange = vi.fn()
    const { rerender } = render(
      <Dropdown items={items} open onOpenChange={onOpenChange} />
    )
    expect(screen.getByText("Create")).toBeInTheDocument()
    rerender(
      <Dropdown items={items} disabled open onOpenChange={onOpenChange} />
    )
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it("does not reopen after disable→enable cycle (uncontrolled)", async () => {
    const { rerender } = render(<Dropdown items={items} />)
    const trigger = screen.getByRole("button")
    await userEvent.click(trigger)
    expect(await screen.findByText("Create")).toBeInTheDocument()
    rerender(<Dropdown items={items} disabled />)
    expect(screen.queryByText("Create")).not.toBeInTheDocument()
    rerender(<Dropdown items={items} />)
    expect(screen.queryByText("Create")).not.toBeInTheDocument()
  })
})

describe("Dropdown (experimental) — enabled regression", () => {
  it("opens on click when enabled (default trigger)", async () => {
    render(<Dropdown items={items} />)
    const trigger = screen.getByRole("button")
    expect(trigger).not.toBeDisabled()
    await userEvent.click(trigger)
    expect(await screen.findByText("Create")).toBeInTheDocument()
  })

  it("runs a delayed action after closing unmounts the Dropdown", async () => {
    const handleAction = vi.fn()

    function UnmountOnCloseDropdown() {
      const [mounted, setMounted] = useState(true)
      const [open, setOpen] = useState(false)

      return mounted ? (
        <Dropdown
          items={[{ label: "Remove access", onClick: handleAction }]}
          open={open}
          onOpenChange={(nextOpen) => {
            setOpen(nextOpen)
            if (!nextOpen) setMounted(false)
          }}
        >
          <button>Access level</button>
        </Dropdown>
      ) : (
        <span>Dropdown unmounted</span>
      )
    }

    render(<UnmountOnCloseDropdown />)
    await userEvent.click(screen.getByRole("button", { name: "Access level" }))
    await userEvent.click(
      screen.getByRole("menuitem", { name: "Remove access" })
    )

    expect(await screen.findByText("Dropdown unmounted")).toBeInTheDocument()
    await vi.waitFor(() => {
      expect(handleAction).toHaveBeenCalledOnce()
    })
  })
})

describe("Dropdown (experimental) — selectable items", () => {
  it("keeps selectable state out of MobileDropdown items", () => {
    type MobileDropdownItemObject = Exclude<
      MobileDropdownItem,
      { type: "separator" } | { type: "label" }
    >

    expectTypeOf<
      MobileDropdownItemObject["selected"]
    >().toEqualTypeOf<undefined>()
  })

  it("exposes selected state with menuitemradio semantics", async () => {
    const selectEditor = vi.fn()
    render(
      <Dropdown
        items={[
          { label: "Viewer", selected: true, onClick: vi.fn() },
          { label: "Editor", selected: false, onClick: selectEditor },
        ]}
      >
        <button>Access level</button>
      </Dropdown>
    )

    await userEvent.click(screen.getByRole("button", { name: "Access level" }))

    expect(
      screen.getByRole("menuitemradio", { name: "Viewer" })
    ).toHaveAttribute("aria-checked", "true")
    expect(
      screen.getByRole("menuitemradio", { name: "Editor" })
    ).toHaveAttribute("aria-checked", "false")

    const selectedItem = screen.getByRole("menuitemradio", { name: "Viewer" })
    const selectionIndicator = selectedItem.querySelector(
      '[aria-hidden="true"]'
    )
    expect(selectionIndicator).toHaveClass("ml-auto", "self-center")
    expect(selectedItem.lastElementChild).toBe(selectionIndicator)
    expect(selectionIndicator?.querySelector("svg")).toBeInTheDocument()
    expect(
      screen
        .getByRole("menuitemradio", { name: "Editor" })
        .querySelector('[aria-hidden="true"]')
    ).not.toBeInTheDocument()

    await userEvent.click(screen.getByRole("menuitemradio", { name: "Editor" }))
    expect(selectEditor).toHaveBeenCalledOnce()
  })

  it("renders content in a supplied portal container", () => {
    const portalContainer = document.createElement("div")
    document.body.append(portalContainer)

    try {
      render(
        <Dropdown
          items={items}
          open
          onOpenChange={() => {}}
          portalContainer={portalContainer}
        />
      )

      expect(portalContainer).toContainElement(screen.getByRole("menu"))
    } finally {
      portalContainer.remove()
    }
  })
})
