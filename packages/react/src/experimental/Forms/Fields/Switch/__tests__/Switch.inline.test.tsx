import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"
import { Switch } from ".."

// jsdom has no layout, so the box is asserted on its classes. The measured
// 40px height and 12px inset are asserted in Switch.inline.stories.tsx, which
// runs against real CSS.
const box = () => screen.getByTestId("switch-inline-box")

describe("Switch inline variant", () => {
  it("renders the switch itself, with no read-as-text state to enter", () => {
    render(<Switch variant="inline" title="Remote worker" checked />)

    const sw = screen.getByRole("switch", { name: "Remote worker" })
    expect(sw).toBeEnabled()
    expect(sw).toBeChecked()
  })

  it("fills the row box at the input field's 12px inset", () => {
    render(<Switch variant="inline" title="Remote worker" />)

    expect(box().className).toMatch(/\bpx-3\b/)
    expect(box().className).toMatch(/\bmin-h-\[40px\]/)
    expect(box().className).toMatch(/\bh-full\b/)
    expect(box().className).toMatch(/\bw-full\b/)
    // The transparent border is what makes the control start at the same x as
    // an input field's first glyph.
    expect(box().className).toMatch(/\bborder-transparent\b/)
  })

  it("keeps the title as the accessible name when hideLabel is set", () => {
    render(<Switch variant="inline" title="Remote worker" hideLabel />)

    expect(screen.getByRole("switch", { name: "Remote worker" })).toBeTruthy()
    expect(screen.queryByText("Remote worker")).toBeNull()
  })

  it("shows the title as a label when hideLabel is not set", () => {
    render(<Switch variant="inline" title="Remote worker" />)

    expect(screen.getByText("Remote worker")).toBeTruthy()
  })

  it("commits on a single click through onCheckedChange", async () => {
    const onCheckedChange = vi.fn()
    render(
      <Switch
        variant="inline"
        title="Remote worker"
        hideLabel
        checked={false}
        onCheckedChange={onCheckedChange}
      />
    )

    await userEvent.click(screen.getByRole("switch", { name: "Remote worker" }))

    expect(onCheckedChange).toHaveBeenCalledTimes(1)
    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  describe("read-only tier", () => {
    it("stays in the accessibility tree, named and announced, when disabled", () => {
      render(
        <Switch
          variant="inline"
          title="Remote worker"
          hideLabel
          disabled
          checked
        />
      )

      const sw = screen.getByRole("switch", { name: "Remote worker" })
      expect(sw).toBeDisabled()
      expect(sw).toBeChecked()
      expect(sw.className).toMatch(/opacity-50/)
    })

    it("does not fire onCheckedChange when disabled", async () => {
      const onCheckedChange = vi.fn()
      render(
        <Switch
          variant="inline"
          title="Remote worker"
          hideLabel
          disabled
          onCheckedChange={onCheckedChange}
        />
      )

      await userEvent.click(
        screen.getByRole("switch", { name: "Remote worker" }),
        { pointerEventsCheck: 0 }
      )

      expect(onCheckedChange).not.toHaveBeenCalled()
    })
  })

  it("leaves the field variant untouched", () => {
    render(<Switch title="Remote worker" />)

    expect(screen.getByRole("switch", { name: "Remote worker" })).toBeTruthy()
    expect(screen.queryByTestId("switch-inline-box")).toBeNull()
  })

  it("has no edit mode to enter and nothing to dismiss", () => {
    render(
      <Switch
        variant="inline"
        title="Remote worker"
        // @ts-expect-error a toggle has no separate editor
        editing
      />
    )
    render(
      <Switch
        variant="inline"
        title="Remote worker"
        // @ts-expect-error a toggle has no separate editor
        onDismiss={() => {}}
      />
    )

    expect(screen.getAllByRole("switch")).toHaveLength(2)
  })
})
