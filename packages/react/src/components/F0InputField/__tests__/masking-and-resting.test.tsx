import "@testing-library/jest-dom/vitest"
import { screen, waitFor } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { useState } from "react"
import { describe, expect, it, vi } from "vitest"
import { zeroRender as render } from "@/testing/test-utils"
import { F0InputField } from "../F0InputField"

const renderField = (
  props: Partial<React.ComponentProps<typeof F0InputField>> = {}
) =>
  render(
    <F0InputField label="Email" value="ada@example.com" {...props}>
      <input type="text" />
    </F0InputField>
  )

describe("F0InputField masking", () => {
  it("renders no eye unless the value is masked", () => {
    renderField()

    expect(
      screen.queryByTestId("input-field-mask-toggle")
    ).not.toBeInTheDocument()
  })

  it("masks an input child as a password field and toggles it back", async () => {
    const { container } = renderField({ masked: true })

    const input = container.querySelector("input")!
    expect(input.type).toBe("password")

    await userEvent.click(screen.getByRole("button", { name: "Show Email" }))
    expect(input.type).toBe("text")

    await userEvent.click(screen.getByRole("button", { name: "Hide Email" }))
    expect(input.type).toBe("password")
  })

  it("leaves the child's own type alone once revealed", async () => {
    const { container } = render(
      <F0InputField label="Email" value="ada@example.com" masked>
        <input type="email" />
      </F0InputField>
    )

    const input = container.querySelector("input")!
    expect(input.type).toBe("password")

    await userEvent.click(screen.getByRole("button", { name: "Show Email" }))
    expect(input.type).toBe("email")
  })

  it("masks a non-input child with dots instead of forcing a type", async () => {
    // `type="password"` on a `<button>` is silently treated as `submit`, which
    // would turn F0Select's trigger into a form submit.
    const { container } = render(
      <F0InputField label="Legal gender" value="Female" masked>
        <button type="button" />
      </F0InputField>
    )

    const trigger = container.querySelector("button[type=button]")!
    expect(container.querySelector("button[type=password]")).toBeNull()
    expect(trigger).toHaveValue("••••••")

    await userEvent.click(
      screen.getByRole("button", { name: "Show Legal gender" })
    )
    expect(trigger).toHaveValue("Female")
  })

  it("renders the eye after the clear button and before append", () => {
    renderField({ clearable: true, masked: true, appendTag: "EUR" })

    const clear = screen.getByTestId("clear-button")
    const eye = screen.getByTestId("input-field-mask-toggle")
    const tag = screen.getByText("EUR")

    expect(
      clear.compareDocumentPosition(eye) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
    expect(
      eye.compareDocumentPosition(tag) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("keeps the eye but drops the clear button when readonly", () => {
    renderField({ readonly: true, clearable: true, masked: true })

    // A value you cannot type into is still one you can unmask.
    expect(screen.getByRole("button", { name: "Show Email" })).toBeEnabled()
    expect(screen.queryByTestId("clear-button")).not.toBeInTheDocument()
  })

  it("disables the eye when the field is disabled", () => {
    renderField({ disabled: true, masked: true })

    expect(screen.getByRole("button", { name: "Show Email" })).toBeDisabled()
  })
})

describe("F0InputField resting value (readonly + transparent)", () => {
  it("drops the border and the disabled-form background", () => {
    renderField({ readonly: true, transparent: true })

    const wrapper = screen.getByTestId("input-field-wrapper")
    expect(wrapper).not.toHaveClass("border-[1px]")
    expect(wrapper).not.toHaveClass("bg-f1-background-secondary")
  })

  it("keeps the height and radius of the field it turns into", () => {
    // A row that changes height on click moves the record under the reader, so
    // the resting cell is the same box the editable field will occupy.
    const resting = renderField({ readonly: true, transparent: true })
    const editable = renderField({})

    const wrapper = (result: ReturnType<typeof renderField>) =>
      result.container.querySelector('[data-testid="input-field-wrapper"]')

    expect(wrapper(resting)).toHaveClass("h-[32px]")
    expect(wrapper(editable)).toHaveClass("h-[32px]")
    expect(wrapper(resting)).not.toHaveClass("h-full")
  })

  it("makes the whole cell the click target and tints it when the click does something", async () => {
    const onClickContent = vi.fn()
    const { container } = renderField({
      readonly: true,
      transparent: true,
      onClickContent,
    })

    const wrapper = screen.getByTestId("input-field-wrapper")
    expect(wrapper).toHaveClass("cursor-text")
    expect(wrapper).toHaveClass("hover:bg-f1-background-secondary")
    // `readonly` disables the inner input, and a disabled control swallows the
    // mouse event instead of letting it bubble — so the input has to stop being
    // the pointer target.
    expect(container.querySelector("input")).toHaveClass("pointer-events-none")

    // jsdom does no hit-testing, so the pass-through itself is verified by the
    // `RestingValue` play function in a real browser.
    await userEvent.click(screen.getByTestId("input-field-content"))
    expect(onClickContent).toHaveBeenCalledTimes(1)
  })

  it("stays inert when the click does nothing", () => {
    const { container } = renderField({ readonly: true, transparent: true })

    const wrapper = screen.getByTestId("input-field-wrapper")
    expect(wrapper).not.toHaveClass("cursor-text")
    expect(wrapper).not.toHaveClass("hover:bg-f1-background-secondary")
    expect(container.querySelector("input")).not.toHaveClass(
      "pointer-events-none"
    )
  })
})

describe("F0InputField click-to-focus", () => {
  it("puts the caret in an editable field when the value is clicked", async () => {
    const { container } = renderField()

    await userEvent.click(screen.getByTestId("input-field-content"))

    expect(container.querySelector("input")).toHaveFocus()
  })

  it("does not take focus when the eye is clicked", async () => {
    const { container } = renderField({ masked: true })

    await userEvent.click(screen.getByRole("button", { name: "Show Email" }))

    expect(container.querySelector("input")).not.toHaveFocus()
  })

  it("waits for readonly to lift before focusing a resting value", async () => {
    // While readonly the input is disabled, so `focus()` is a no-op. The caret
    // has to land after the consumer flips readonly off.
    const Harness = () => {
      const [editing, setEditing] = useState(false)
      return (
        <F0InputField
          label="Email"
          value="ada@example.com"
          readonly={!editing}
          transparent={!editing}
          onClickContent={() => setEditing(true)}
        >
          <input type="text" />
        </F0InputField>
      )
    }

    const { container } = render(<Harness />)

    await userEvent.click(screen.getByTestId("input-field-content"))

    await waitFor(() => expect(container.querySelector("input")).toHaveFocus())
  })

  it("takes no focus and fires nothing while disabled", async () => {
    const onClickContent = vi.fn()
    const { container } = renderField({ disabled: true, onClickContent })

    await userEvent.click(screen.getByTestId("input-field-content"))

    expect(onClickContent).not.toHaveBeenCalled()
    expect(container.querySelector("input")).not.toHaveFocus()
  })
})
