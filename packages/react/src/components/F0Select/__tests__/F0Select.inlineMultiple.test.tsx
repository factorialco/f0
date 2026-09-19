import "@testing-library/jest-dom/vitest"
import { readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { fireEvent, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { zeroRender as render } from "@/testing/test-utils"
import { F0Select } from ".."
import type { F0SelectItemProps, SelectInlineDismissReason } from "../types"

type Commute = "bicycle" | "walking" | "train"

const commuteOptions: F0SelectItemProps<Commute>[] = [
  { value: "bicycle", label: "Bicycle" },
  { value: "walking", label: "Walking" },
  { value: "train", label: "Train" },
]

const inlineValue = () => screen.getByTestId("select-inline-value")

/** An open dropdown puts the trigger under `aria-hidden`. */
const inlineTrigger = () =>
  screen.getByRole("combobox", { name: "Commute", hidden: true })

const waitForDropdown = async () => {
  await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
  fireEvent.animationStart(screen.getByRole("listbox"))
  await screen.findAllByRole("option")
}

type MultiProps = {
  value?: Commute[]
  editing?: boolean
  placeholder?: string
  disabled?: boolean
  hideLabel?: boolean
  onChange?: (value: Commute[]) => void
  onDismiss?: (reason: SelectInlineDismissReason) => void
}

const renderMulti = ({
  value = ["bicycle", "walking"],
  onChange = () => {},
  ...props
}: MultiProps = {}) =>
  render(
    <F0Select
      variant="inline"
      multiple
      label="Commute"
      options={commuteOptions}
      value={value}
      onChange={onChange}
      {...props}
    />
  )

describe("F0Select inline variant, multiple selection", () => {
  global.ResizeObserver = class MockResizeObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  } as typeof ResizeObserver

  beforeEach(() => {
    Object.defineProperty(HTMLElement.prototype, "offsetHeight", { value: 800 })
  })

  describe("at rest", () => {
    it("prints the selected labels as one comma-separated line", () => {
      renderMulti()

      expect(inlineValue()).toHaveTextContent("Bicycle, Walking")
    })

    it("offers nothing to press: no trigger, no clear button", () => {
      renderMulti()

      expect(screen.queryByRole("combobox")).not.toBeInTheDocument()
      expect(screen.queryByRole("button")).not.toBeInTheDocument()
    })

    it("prints the summary in medium body text at the 13px inset", () => {
      renderMulti()

      const value = inlineValue()
      expect(value).toHaveClass("text-base")
      expect(value).toHaveClass("font-medium")
      expect(value).toHaveClass("px-3")
      expect(value).toHaveClass("border-transparent")
    })

    it("hides the chevron until the row is hovered or holds a focus ring", () => {
      renderMulti()

      const chevron = inlineValue().lastElementChild
      expect(chevron).toHaveAttribute("aria-hidden", "true")
      expect(chevron?.querySelector("svg")).toBeInTheDocument()
      expect(chevron?.className).toContain("opacity-0")
      expect(chevron?.className).toContain("group-hover:opacity-100")
      expect(chevron?.className).toContain("[:focus-visible_&]:opacity-100")
      expect(chevron?.className).toContain("[@media(hover:none)]:opacity-100")
    })

    it("prints the placeholder when nothing is selected", () => {
      renderMulti({ value: [], placeholder: "Add a commute" })

      const placeholder = within(inlineValue()).getByText("Add a commute")
      expect(placeholder.className).toContain("text-f1-foreground-secondary")
    })

    it("names itself with the label when the label is hidden", () => {
      renderMulti({ hideLabel: true })

      expect(inlineValue()).toHaveAttribute("aria-label", "Commute")
    })

    it("fills its container in both axes", () => {
      renderMulti()

      expect(inlineValue().className).toContain("h-full")
      expect(inlineValue().className).toContain("w-full")
      expect(inlineValue().className).not.toContain("w-fit")
    })
  })

  describe("editing", () => {
    it("opens the dropdown with a checkbox per option", async () => {
      renderMulti({ editing: true, hideLabel: true })

      await waitForDropdown()

      expect(inlineTrigger()).toHaveAttribute("aria-expanded", "true")
      expect(
        screen.queryByTestId("select-inline-value")
      ).not.toBeInTheDocument()
      expect(screen.getAllByRole("checkbox").length).toBeGreaterThanOrEqual(
        commuteOptions.length
      )
    })

    it("keeps the summary on the trigger at the same inset", async () => {
      renderMulti({ editing: true })

      await waitForDropdown()

      const trigger = inlineTrigger()
      expect(trigger.className).toContain("px-3")
      expect(trigger).toHaveTextContent("Bicycle, Walking")
    })
  })

  describe("dismissal", () => {
    it("keeps the dropdown open while options are taken, then commits on close", async () => {
      const user = userEvent.setup()
      const onDismiss = vi.fn()
      const onChange = vi.fn()

      renderMulti({ editing: true, onDismiss, onChange })
      await waitForDropdown()

      await user.click(screen.getByRole("option", { name: /Train/ }))

      await waitFor(() => {
        expect(onChange).toHaveBeenCalledWith(
          expect.arrayContaining(["bicycle", "walking", "train"]),
          expect.anything(),
          expect.anything()
        )
      })
      expect(onDismiss).not.toHaveBeenCalled()
      expect(screen.getByRole("listbox")).toBeInTheDocument()

      fireEvent.pointerDown(document.body)

      await waitFor(() => {
        expect(onDismiss).toHaveBeenCalledWith("commit")
      })
    })

    it("reports a close with no change as a popup close", async () => {
      const onDismiss = vi.fn()

      renderMulti({ editing: true, onDismiss })
      await waitForDropdown()

      fireEvent.pointerDown(document.body)

      await waitFor(() => {
        expect(onDismiss).toHaveBeenCalledWith("popupClose")
      })
    })

    it("reports Escape even after the selection changed", async () => {
      const user = userEvent.setup()
      const onDismiss = vi.fn()

      renderMulti({ editing: true, onDismiss })
      await waitForDropdown()

      await user.click(screen.getByRole("option", { name: /Train/ }))
      await user.keyboard("{Escape}")

      await waitFor(() => {
        expect(onDismiss).toHaveBeenCalledWith("escape")
      })
      expect(onDismiss).not.toHaveBeenCalledWith("commit")
    })

    it("commits through the apply button", async () => {
      const user = userEvent.setup()
      const onDismiss = vi.fn()

      renderMulti({ editing: true, onDismiss })
      await waitForDropdown()

      await user.click(screen.getByRole("option", { name: /Train/ }))
      await user.click(screen.getByRole("button", { name: /apply/i }))

      await waitFor(() => {
        expect(onDismiss).toHaveBeenCalledWith("commit")
      })
    })

    it("keeps drawing the dropdown until the owner changes editing", async () => {
      const onDismiss = vi.fn()

      renderMulti({ editing: true, onDismiss })
      await waitForDropdown()

      fireEvent.pointerDown(document.body)
      await waitFor(() => expect(onDismiss).toHaveBeenCalledWith("popupClose"))

      expect(screen.getByRole("listbox")).toBeInTheDocument()
      expect(
        screen.queryByTestId("select-inline-value")
      ).not.toBeInTheDocument()
    })

    it("goes back to the summary when the owner turns editing off", async () => {
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
              multiple
              label="Commute"
              options={commuteOptions}
              value={["bicycle", "walking"]}
              editing={editing}
              onChange={() => {}}
            />
          </>
        )
      }

      render(<Row />)
      await waitForDropdown()

      await user.click(
        screen.getByRole("button", { name: "Stop editing", hidden: true })
      )

      await waitFor(() => {
        expect(inlineValue()).toHaveTextContent("Bicycle, Walking")
      })
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    })
  })

  it("leaves the multiple field variant alone", () => {
    render(
      <F0Select
        label="Commute"
        multiple
        options={commuteOptions}
        value={["bicycle", "walking"]}
        onChange={() => {}}
      />
    )

    expect(screen.getByTestId("input-field-wrapper")).toBeInTheDocument()
    expect(screen.queryByTestId("select-inline-value")).not.toBeInTheDocument()
    expect(screen.getByRole("combobox")).toBeInTheDocument()
  })
})

/** Source-check the inline prop boundary because test files are excluded from tsc. */
describe("F0Select inline prop boundary", () => {
  const TYPES = readFileSync(
    join(dirname(fileURLToPath(import.meta.url)), "../types.ts"),
    "utf8"
  )

  const inlineBlock = () => {
    const start = TYPES.indexOf("type F0SelectInlineProps<")
    expect(start).toBeGreaterThan(-1)
    return TYPES.slice(start)
  }

  it.each([
    "size",
    "withApplySelection",
    "error",
    "status",
    "asList",
    "showPreview",
    "hideArrow",
    "children",
  ])("keeps %s off the inline variant", (prop) => {
    expect(inlineBlock()).toContain(`${prop}?: never`)
  })

  it("takes its selection from a union that carries a multiple branch", () => {
    expect(inlineBlock()).toContain("F0SelectInlineSelectionProps<T, R>")
    expect(TYPES).toContain("| F0SelectInlineMultipleProps<T, R>")
    expect(TYPES).toMatch(
      /type F0SelectInlineMultipleProps<[^>]*> = \{\s*multiple: true/
    )
  })

  it("names the row with a label it may hide", () => {
    expect(inlineBlock()).toContain(
      '"label" | "placeholder" | "disabled" | "hideLabel"'
    )
  })
})
