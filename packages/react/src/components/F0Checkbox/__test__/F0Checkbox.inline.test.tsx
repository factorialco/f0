import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"
import { F0Checkbox } from "../F0Checkbox"

// jsdom has no layout, so the box is asserted on its classes. The measured
// 40px height and 12px inset are asserted in F0Checkbox.inline.stories.tsx,
// which runs against real CSS.
const box = () => screen.getByTestId("checkbox-inline-box")

describe("F0Checkbox inline variant", () => {
  it("renders the checkbox itself, with no read-as-text state to enter", () => {
    render(<F0Checkbox variant="inline" title="Receives payslips" checked />)

    const checkbox = screen.getByRole("checkbox", { name: "Receives payslips" })
    expect(checkbox).toBeEnabled()
    expect(checkbox).toBeChecked()
  })

  it("fills the row box at the input field's 12px inset", () => {
    render(<F0Checkbox variant="inline" title="Receives payslips" />)

    expect(box().className).toMatch(/\bpx-3\b/)
    expect(box().className).toMatch(/\bmin-h-\[40px\]/)
    expect(box().className).toMatch(/\bh-full\b/)
    expect(box().className).toMatch(/\bw-full\b/)
    // The transparent border is what makes the control start at the same x as
    // an input field's first glyph.
    expect(box().className).toMatch(/\bborder-transparent\b/)
  })

  it("keeps the title as the accessible name when hideLabel is set", () => {
    render(<F0Checkbox variant="inline" title="Receives payslips" hideLabel />)

    expect(
      screen.getByRole("checkbox", { name: "Receives payslips" })
    ).toBeTruthy()
    expect(screen.queryByText("Receives payslips")).toBeNull()
  })

  it("shows the title as a label when hideLabel is not set", () => {
    render(<F0Checkbox variant="inline" title="Receives payslips" />)

    expect(screen.getByText("Receives payslips")).toBeTruthy()
  })

  it("commits on a single click through onCheckedChange", async () => {
    const onCheckedChange = vi.fn()
    render(
      <F0Checkbox
        variant="inline"
        title="Receives payslips"
        hideLabel
        checked={false}
        onCheckedChange={onCheckedChange}
      />
    )

    await userEvent.click(
      screen.getByRole("checkbox", { name: "Receives payslips" })
    )

    expect(onCheckedChange).toHaveBeenCalledTimes(1)
    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  describe("read-only tier", () => {
    it("stays in the accessibility tree, named and announced, when disabled", () => {
      render(
        <F0Checkbox
          variant="inline"
          title="Receives payslips"
          hideLabel
          disabled
          checked
        />
      )

      const checkbox = screen.getByRole("checkbox", {
        name: "Receives payslips",
      })
      expect(checkbox).toBeDisabled()
      expect(checkbox).toBeChecked()
      expect(checkbox.className).toMatch(/opacity-50/)
    })

    it("does not fire onCheckedChange when disabled", async () => {
      const onCheckedChange = vi.fn()
      render(
        <F0Checkbox
          variant="inline"
          title="Receives payslips"
          hideLabel
          disabled
          onCheckedChange={onCheckedChange}
        />
      )

      await userEvent.click(
        screen.getByRole("checkbox", { name: "Receives payslips" }),
        { pointerEventsCheck: 0 }
      )

      expect(onCheckedChange).not.toHaveBeenCalled()
    })
  })

  it("leaves the field variant untouched", () => {
    render(<F0Checkbox title="Receives payslips" />)

    expect(
      screen.getByRole("checkbox", { name: "Receives payslips" })
    ).toBeTruthy()
    expect(screen.queryByTestId("checkbox-inline-box")).toBeNull()
  })

  it("has no edit mode to enter and nothing to dismiss", () => {
    render(
      <F0Checkbox
        variant="inline"
        title="Receives payslips"
        // @ts-expect-error a toggle has no separate editor
        editing
      />
    )
    render(
      <F0Checkbox
        variant="inline"
        title="Receives payslips"
        // @ts-expect-error a toggle has no separate editor
        onDismiss={() => {}}
      />
    )

    expect(screen.getAllByRole("checkbox")).toHaveLength(2)
  })
})
