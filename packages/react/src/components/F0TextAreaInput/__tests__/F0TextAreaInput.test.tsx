import { fireEvent, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { F0TextAreaInput } from "../F0TextAreaInput"

describe("F0TextAreaInput", () => {
  it("renders a textarea wired to its label", () => {
    render(<F0TextAreaInput label="Notes" />)

    const labelled = screen.getAllByLabelText("Notes")
    expect(labelled.length).toBeGreaterThan(0)
    expect(labelled[0].tagName).toBe("TEXTAREA")
  })

  it("calls onChange with the typed string", () => {
    const onChange = vi.fn()
    render(<F0TextAreaInput label="Editable" onChange={onChange} />)

    const textarea = screen.getAllByLabelText("Editable")[0]
    fireEvent.change(textarea, { target: { value: "multi\nline" } })

    expect(onChange).toHaveBeenCalledWith("multi\nline")
  })

  it("forwards the rows attribute to the textarea", () => {
    render(<F0TextAreaInput label="With rows" rows={4} />)

    const textarea = screen.getAllByLabelText(
      "With rows"
    )[0] as HTMLTextAreaElement
    expect(textarea.rows).toBe(4)
  })

  it("renders a hint when hint is provided", () => {
    render(<F0TextAreaInput label="With hint" hint="Be concise" />)

    expect(screen.getByText("Be concise")).toBeInTheDocument()
  })

  it("renders an error message and overrides any hint", () => {
    render(<F0TextAreaInput label="With error" hint="Hint" error="Boom" />)

    expect(screen.getByText("Boom")).toBeInTheDocument()
    expect(screen.queryByText("Hint")).not.toBeInTheDocument()
  })

  it("disables the textarea when disabled is true", () => {
    render(<F0TextAreaInput label="Disabled" disabled />)

    const textarea = screen.getAllByLabelText(
      "Disabled"
    )[0] as HTMLTextAreaElement
    expect(textarea.disabled).toBe(true)
  })

  it("renders a character counter when maxLength is set", () => {
    render(<F0TextAreaInput label="Counter" maxLength={20} value="hello" />)

    expect(screen.getByText("5/20")).toBeInTheDocument()
  })
})
