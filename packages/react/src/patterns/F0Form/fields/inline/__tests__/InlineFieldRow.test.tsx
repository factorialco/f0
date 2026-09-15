import { useState } from "react"
import { describe, expect, it, vi } from "vitest"
import { F0FormField } from "@/patterns/F0FormField"
import {
  screen,
  userEvent,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"
import type { F0Field } from "../../types"

const textField: F0Field = {
  id: "employeeNumber",
  type: "text",
  label: "Employee number",
  inline: true,
}

const selectField: F0Field = {
  id: "contract",
  type: "select",
  label: "Contract type",
  inline: true,
  options: [
    { value: "full", label: "Full time" },
    { value: "part", label: "Part time" },
  ],
}

const dateField: F0Field = {
  id: "seniority",
  type: "date",
  label: "Seniority date",
  inline: true,
}

/** A row that holds its own value, the way a detail screen's row does. */
function Row({
  field,
  initialValue,
  onChange,
}: {
  field: F0Field
  initialValue?: unknown
  onChange?: (value: unknown) => void
}) {
  const [value, setValue] = useState(initialValue)
  return (
    <F0FormField
      field={field as never}
      value={value}
      onChange={(next) => {
        setValue(next)
        onChange?.(next)
      }}
    />
  )
}

const editButton = (label: string) =>
  screen.getByRole("button", { name: `Edit ${label}` })

describe("InlineFieldRow", () => {
  describe("reading", () => {
    it("prints the value where a read-only row would", () => {
      render(<Row field={textField} initialValue="EMP-0042" />)

      expect(editButton("Employee number")).toHaveTextContent("EMP-0042")
      expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
    })

    it("falls back to the placeholder when there is no value", () => {
      render(
        <Row
          field={{ ...textField, placeholder: "not set" }}
          initialValue={undefined}
        />
      )

      expect(editButton("Employee number")).toHaveTextContent("not set")
    })

    it("reads a select as its option's label", () => {
      render(<Row field={selectField} initialValue="part" />)

      expect(editButton("Contract type")).toHaveTextContent("Part time")
    })
  })

  describe("activating the row", () => {
    it("swaps in the editor and puts the caret in it", async () => {
      const user = userEvent.setup()
      render(<Row field={textField} initialValue="EMP-0042" />)

      await user.click(editButton("Employee number"))

      const input = screen.getByRole("textbox")
      expect(document.activeElement).toBe(input)
      expect(input).toHaveValue("EMP-0042")
    })

    it("commits the new value and goes back to text", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(
        <Row field={textField} initialValue="EMP-0042" onChange={onChange} />
      )

      await user.click(editButton("Employee number"))
      await user.clear(screen.getByRole("textbox"))
      await user.type(screen.getByRole("textbox"), "EMP-0043{Enter}")

      expect(onChange).toHaveBeenLastCalledWith("EMP-0043")
      expect(editButton("Employee number")).toHaveTextContent("EMP-0043")
    })

    it("goes back to text on Escape", async () => {
      const user = userEvent.setup()
      render(<Row field={textField} initialValue="EMP-0042" />)

      await user.click(editButton("Employee number"))
      await user.keyboard("{Escape}")

      expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
      expect(editButton("Employee number")).toHaveTextContent("EMP-0042")
    })

    it("lands focus back on the value it came from", async () => {
      const user = userEvent.setup()
      render(<Row field={textField} initialValue="EMP-0042" />)

      await user.click(editButton("Employee number"))
      await user.keyboard("{Escape}")

      // A frame late by design, so the key that ended the edit is not still in
      // flight when the value takes focus back.
      await waitFor(() =>
        expect(document.activeElement).toBe(editButton("Employee number"))
      )
    })

    it("goes back to text when focus leaves the editor", async () => {
      const user = userEvent.setup()
      render(
        <>
          <Row field={textField} initialValue="EMP-0042" />
          <button type="button">Elsewhere</button>
        </>
      )

      await user.click(editButton("Employee number"))
      await user.click(screen.getByRole("button", { name: "Elsewhere" }))

      expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
    })
  })

  describe("popup-backed editors", () => {
    it("opens the calendar as the date is activated", async () => {
      const user = userEvent.setup()
      render(<Row field={dateField} initialValue={new Date(2025, 8, 15)} />)

      await user.click(editButton("Seniority date"))

      expect(await screen.findByRole("grid")).toBeInTheDocument()
    })

    it("opens the dropdown as the select is activated", async () => {
      const user = userEvent.setup()
      render(<Row field={selectField} initialValue="full" />)

      await user.click(editButton("Contract type"))

      // Queried off the DOM, not by role: the open dropdown puts everything
      // behind it under `aria-hidden`, trigger included, so an accessible
      // query cannot see it. The options are virtualised and measure to
      // nothing under jsdom, so the claim worth making is that it is up.
      await waitFor(() =>
        expect(document.querySelector('[role="combobox"]')).toHaveAttribute(
          "aria-expanded",
          "true"
        )
      )
    })
  })

  describe("a readonly row", () => {
    const readonlyField: F0Field = {
      ...textField,
      inline: { readonly: true },
    }

    it("offers no way in, but stays reachable and announced", () => {
      render(<Row field={readonlyField} initialValue="EMP-0042" />)

      const value = screen.getByRole("textbox", { name: "Employee number" })
      expect(value).toHaveAttribute("aria-readonly", "true")
      expect(value).toHaveAttribute("tabindex", "0")
      expect(value).toHaveTextContent("EMP-0042")
      expect(
        screen.queryByRole("button", { name: /Edit/ })
      ).not.toBeInTheDocument()
    })
  })

  describe("copying", () => {
    const copyableField: F0Field = {
      ...textField,
      inline: { copyable: true },
    }

    it("puts the value on the clipboard and confirms it", async () => {
      const user = userEvent.setup()
      render(<Row field={copyableField} initialValue="EMP-0042" />)

      await user.click(
        screen.getByRole("button", { name: "Copy Employee number" })
      )

      expect(await navigator.clipboard.readText()).toBe("EMP-0042")
      const confirmation = await screen.findByRole("button", {
        name: "Copied Employee number",
      })
      expect(confirmation).toHaveAttribute("aria-live", "polite")

      // Real timers, because faking them here deadlocks userEvent's own
      // clipboard stub. The confirmation outlasts a pointer moving away — held
      // well past the moment a hover would have ended — and is gone by 1400ms.
      await new Promise((resolve) => setTimeout(resolve, 400))
      expect(
        screen.getByRole("button", { name: "Copied Employee number" })
      ).toBeInTheDocument()

      await waitFor(
        () =>
          expect(
            screen.getByRole("button", { name: "Copy Employee number" })
          ).toBeInTheDocument(),
        { timeout: 2000 }
      )
    })

    it("confirms nothing when the clipboard refuses the write", async () => {
      const user = userEvent.setup()
      const writeText = vi
        .spyOn(navigator.clipboard, "writeText")
        .mockRejectedValue(new Error("denied"))
      render(<Row field={copyableField} initialValue="EMP-0042" />)

      await user.click(
        screen.getByRole("button", { name: "Copy Employee number" })
      )

      expect(
        screen.queryByRole("button", { name: "Copied Employee number" })
      ).not.toBeInTheDocument()
      writeText.mockRestore()
    })
  })

  describe("the hover reveal", () => {
    it("keeps the affordance in the DOM, hidden and inert until the row is engaged", () => {
      render(<Row field={textField} initialValue="EMP-0042" />)

      const affordance = document.querySelector(
        '[data-slot="edit-affordance"]'
      ) as HTMLElement

      // `:hover` is native browser state that synthetic pointer events never
      // enter, so the reveal is asserted on the classes here and on pixels in
      // the Snapshot story. The focus half is driven for real by the tests above.
      expect(affordance).toHaveClass("opacity-0")
      expect(affordance).toHaveClass("group-hover:opacity-100")
      expect(affordance).toHaveClass("group-focus-within:opacity-100")
      expect(affordance).toHaveClass("[@media(hover:none)]:pointer-events-auto")
    })
  })
})
