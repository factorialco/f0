import "@testing-library/jest-dom/vitest"
import { fireEvent, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { zeroRender as render } from "@/testing/test-utils"
import { F0Select } from ".."
import type { F0SelectItemProps, SelectInlineDismissReason } from "../types"

type Role = "owner" | "editor" | "viewer"

const roleOptions: F0SelectItemProps<Role>[] = [
  { value: "owner", label: "Owner" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
]

const peopleOptions: F0SelectItemProps<Role>[] = [
  {
    value: "viewer",
    label: "Ada Lovelace",
    avatar: {
      type: "person",
      firstName: "Ada",
      lastName: "Lovelace",
      "aria-label": "Ada Lovelace",
    },
  },
  { value: "editor", label: "Grace Hopper" },
]

const inlineValue = () => screen.getByTestId("select-inline-value")

/** An open dropdown puts the trigger under `aria-hidden`. */
const inlineTrigger = () =>
  screen.getByRole("combobox", { name: "Access level", hidden: true })

const waitForDropdown = async () => {
  await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
  fireEvent.animationStart(screen.getByRole("listbox"))
}

describe("F0Select inline variant", () => {
  global.ResizeObserver = class MockResizeObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  } as typeof ResizeObserver

  beforeEach(() => {
    Object.defineProperty(HTMLElement.prototype, "offsetHeight", { value: 800 })
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { value: 800 })
  })

  describe("at rest", () => {
    it("prints the selection as text, with nothing to press", () => {
      render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          onChange={() => {}}
        />
      )

      expect(within(inlineValue()).getByText("Viewer")).toBeInTheDocument()
      expect(screen.queryByRole("combobox")).not.toBeInTheDocument()
      expect(screen.queryByRole("button")).not.toBeInTheDocument()
    })

    it("prints the selection in medium body text at the 13px inset", () => {
      render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          onChange={() => {}}
        />
      )

      const value = inlineValue()
      expect(value).toHaveClass("text-base")
      expect(value).toHaveClass("font-medium")
      expect(value).toHaveClass("px-3")
      expect(value).toHaveClass("border-transparent")
    })

    it("keeps the chevron at the trailing edge, away from the value", () => {
      render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          onChange={() => {}}
        />
      )

      const value = inlineValue()
      expect(value.className).toContain("justify-between")

      const [text, chevron] = Array.from(value.children)
      expect(text).toContainElement(screen.getByText("Viewer"))

      expect(text?.className).toContain("flex-1")
      expect(text?.className).toContain("min-w-0")
      expect(chevron?.className).toContain("shrink-0")
      expect(chevron?.querySelector("svg")).toBeInTheDocument()
    })

    it("hides the chevron until the row is hovered or holds focus", () => {
      render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          onChange={() => {}}
        />
      )

      const chevron = inlineValue().lastElementChild
      expect(chevron).toHaveAttribute("aria-hidden", "true")
      expect(chevron?.className).toContain("opacity-0")
      expect(chevron?.className).toContain("group-hover:opacity-100")
      expect(chevron?.className).toContain("group-focus-within:opacity-100")

      expect(chevron?.className).toContain("[@media(hover:none)]:opacity-100")
    })

    it("draws no chevron when there is no list to open", () => {
      render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          disabled
          onChange={() => {}}
        />
      )

      expect(within(inlineValue()).getByText("Viewer")).toBeInTheDocument()
      expect(inlineValue().querySelector("svg")).toBeNull()
    })

    it("keeps the option's avatar beside the text", () => {
      render(
        <F0Select
          variant="inline"
          label="Access level"
          options={peopleOptions}
          value="viewer"
          onChange={() => {}}
        />
      )

      const value = inlineValue()
      expect(within(value).getByText("Ada Lovelace")).toBeInTheDocument()
      expect(
        value.querySelector("[aria-label='Ada Lovelace']")
      ).toBeInTheDocument()
    })

    it("prints the placeholder in the secondary foreground when empty", () => {
      render(
        <F0Select
          variant="inline"
          label="Access level"
          placeholder="Select role"
          options={roleOptions}
          onChange={() => {}}
        />
      )

      const placeholder = within(inlineValue()).getByText("Select role")
      expect(placeholder.className).toContain("text-f1-foreground-secondary")
    })

    it("names itself with the label when the label is hidden", () => {
      const { rerender } = render(
        <F0Select
          variant="inline"
          label="Access level"
          hideLabel
          options={roleOptions}
          value="viewer"
          onChange={() => {}}
        />
      )

      expect(inlineValue()).toHaveAttribute("aria-label", "Access level")

      rerender(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          onChange={() => {}}
        />
      )

      expect(inlineValue()).not.toHaveAttribute("aria-label")
    })

    it("fills its container in both axes", () => {
      render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          onChange={() => {}}
        />
      )

      expect(inlineValue().className).toContain("h-full")
      expect(inlineValue().className).toContain("w-full")
      expect(inlineValue().className).not.toContain("w-fit")
    })
  })

  describe("editing", () => {
    it("opens the dropdown and keeps the trigger's accessible name", async () => {
      render(
        <F0Select
          variant="inline"
          label="Access level"
          hideLabel
          options={roleOptions}
          value="viewer"
          editing
          onChange={() => {}}
        />
      )

      await waitForDropdown()
      expect(inlineTrigger()).toHaveAttribute("aria-expanded", "true")
      expect(
        screen.queryByTestId("select-inline-value")
      ).not.toBeInTheDocument()
    })

    it("starts the text at the same inset as the read presentation", () => {
      const rest = render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          onChange={() => {}}
        />
      )
      const restInset = inlineValue().className.includes("px-3")
      rest.unmount()

      render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          editing
          onChange={() => {}}
        />
      )

      expect(restInset).toBe(true)
      expect(inlineTrigger().className).toContain("px-3")
    })

    it("keeps the chevron at the trailing edge while the list is open", async () => {
      render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          editing
          onChange={() => {}}
        />
      )

      await waitForDropdown()
      const trigger = inlineTrigger()
      expect(trigger.className).toContain("justify-between")

      const [text, chevron] = Array.from(trigger.children)
      expect(text?.className).toContain("flex-1")
      expect(chevron?.className).toContain("shrink-0")

      expect(chevron?.className).not.toContain("opacity-0")
    })
  })

  describe("dismissal", () => {
    const renderEditing = (onDismiss: (r: SelectInlineDismissReason) => void) =>
      render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          editing
          onDismiss={onDismiss}
          onChange={() => {}}
        />
      )

    it("reports a selection as a commit and still emits the value", async () => {
      const user = userEvent.setup()
      const onDismiss = vi.fn()
      const onChange = vi.fn()

      render(
        <F0Select
          variant="inline"
          label="Access level"
          options={roleOptions}
          value="viewer"
          editing
          onDismiss={onDismiss}
          onChange={onChange}
        />
      )

      await waitForDropdown()
      await user.keyboard("{ArrowUp}{Enter}")

      await waitFor(() => {
        expect(onDismiss).toHaveBeenCalledWith("commit")
      })
      expect(onChange).toHaveBeenCalledWith(
        "editor",
        undefined,
        expect.objectContaining({ value: "editor" })
      )
    })

    it("reports Escape", async () => {
      const user = userEvent.setup()
      const onDismiss = vi.fn()
      renderEditing(onDismiss)

      await waitForDropdown()
      await user.keyboard("{Escape}")

      await waitFor(() => {
        expect(onDismiss).toHaveBeenCalledWith("escape")
      })
    })

    it("reports an outside click as a popup close", async () => {
      const user = userEvent.setup()
      const onDismiss = vi.fn()
      renderEditing(onDismiss)

      await waitForDropdown()
      await user.click(document.body)

      await waitFor(() => {
        expect(onDismiss).toHaveBeenCalledWith("popupClose")
      })
    })

    it("keeps drawing the dropdown until the owner changes editing", async () => {
      const user = userEvent.setup()
      const onDismiss = vi.fn()
      renderEditing(onDismiss)

      await waitForDropdown()

      await user.keyboard("{Escape}")
      await waitFor(() => expect(onDismiss).toHaveBeenCalledWith("escape"))
      expect(screen.getByRole("listbox")).toBeInTheDocument()

      await user.click(document.body)
      await waitFor(() => expect(onDismiss).toHaveBeenCalledWith("popupClose"))
      expect(screen.getByRole("listbox")).toBeInTheDocument()
      expect(
        screen.queryByTestId("select-inline-value")
      ).not.toBeInTheDocument()
    })

    it("goes back to text when the owner turns editing off", async () => {
      const user = userEvent.setup()

      const Row = () => {
        const [editing, setEditing] = useState(true)
        return (
          <>
            <button type="button" onClick={() => setEditing(false)}>
              Stop editing
            </button>
            <F0Select
              variant="inline"
              label="Access level"
              options={roleOptions}
              value="viewer"
              editing={editing}
              onChange={() => {}}
            />
          </>
        )
      }

      render(<Row />)
      await waitForDropdown()

      // The open dropdown aria-hides the rest of the page.
      await user.click(
        screen.getByRole("button", { name: "Stop editing", hidden: true })
      )

      await waitFor(() => {
        expect(inlineValue()).toBeInTheDocument()
      })
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    })
  })

  it("leaves the field variant alone", async () => {
    const onDismiss = vi.fn()
    render(
      <F0Select
        label="Access level"
        options={roleOptions}
        value="viewer"
        onChange={() => {}}
      />
    )

    expect(screen.getByTestId("input-field-wrapper")).toBeInTheDocument()
    expect(screen.queryByTestId("select-inline-value")).not.toBeInTheDocument()
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(onDismiss).not.toHaveBeenCalled()
  })
})
