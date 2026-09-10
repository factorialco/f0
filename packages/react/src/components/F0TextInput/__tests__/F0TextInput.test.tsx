import { fireEvent, screen, within } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { zeroRender as render } from "@/testing/test-utils"
import { F0TextInput } from "../F0TextInput"

describe("F0TextInput", () => {
  it("renders an input wired to its label", () => {
    render(<F0TextInput label="Email" />)

    expect(screen.getAllByLabelText("Email").length).toBeGreaterThan(0)
  })

  it("calls onChange with the typed string", () => {
    const onChange = vi.fn()
    render(<F0TextInput label="Editable" onChange={onChange} />)

    const input = screen.getAllByLabelText("Editable")[0] as HTMLInputElement
    fireEvent.change(input, { target: { value: "hello" } })

    expect(onChange).toHaveBeenCalledWith("hello")
  })

  describe("type", () => {
    it("defaults to text", () => {
      render(<F0TextInput label="Default type" />)

      const input = screen.getAllByLabelText(
        "Default type"
      )[0] as HTMLInputElement
      expect(input.type).toBe("text")
    })

    it("forwards explicit types like email and url", () => {
      render(<F0TextInput label="Email" type="email" />)

      const input = screen.getAllByLabelText("Email")[0] as HTMLInputElement
      expect(input.type).toBe("email")
    })
  })

  describe("password mode", () => {
    it("renders the input as password by default", () => {
      render(<F0TextInput label="Password" type="password" />)

      const input = screen.getAllByLabelText("Password")[0] as HTMLInputElement
      expect(input.type).toBe("password")
    })

    it("renders an eye toggle that reveals the value when clicked", () => {
      render(<F0TextInput label="Password" type="password" />)

      const toggle = screen.getByRole("button", { name: "Show Password" })
      fireEvent.click(toggle)

      const input = screen.getAllByLabelText("Password")[0] as HTMLInputElement
      expect(input.type).toBe("text")
    })

    it("flips back to masked when the toggle is clicked twice", () => {
      render(<F0TextInput label="Password" type="password" />)

      const initialToggle = screen.getByRole("button", {
        name: "Show Password",
      })
      fireEvent.click(initialToggle)
      const hideToggle = screen.getByRole("button", { name: "Hide Password" })
      fireEvent.click(hideToggle)

      const input = screen.getAllByLabelText("Password")[0] as HTMLInputElement
      expect(input.type).toBe("password")
    })
  })

  describe("private mode", () => {
    it("renders masked (type=password) by default", () => {
      render(<F0TextInput label="SSN" type="private" />)

      const input = screen.getAllByLabelText("SSN")[0] as HTMLInputElement
      expect(input.type).toBe("password")
    })

    it("renders an eye toggle that reveals and re-masks the value", () => {
      render(<F0TextInput label="SSN" type="private" />)

      const input = screen.getAllByLabelText("SSN")[0] as HTMLInputElement
      fireEvent.click(screen.getByRole("button", { name: /show/i }))
      expect(input.type).toBe("text")

      fireEvent.click(screen.getByRole("button", { name: /hide/i }))
      expect(input.type).toBe("password")
    })

    it("builds the eye-toggle accessible name from the field label", () => {
      // So screen-reader users can tell multiple private fields apart.
      render(<F0TextInput label="Social security number" type="private" />)

      expect(
        screen.getByRole("button", { name: "Show Social security number" })
      ).toBeInTheDocument()
    })

    it("does not render the lock icon that password forces", () => {
      // password forces a leading lock icon IN ADDITION to the eye toggle;
      // private renders only the eye toggle (no forced icon), so it must have
      // strictly fewer rendered icons. This fails if a lock icon ever regresses
      // back onto the private field.
      const countIcons = (c: HTMLElement) => c.querySelectorAll("svg").length

      const privateRender = render(<F0TextInput label="SSN" type="private" />)
      const passwordRender = render(<F0TextInput label="Pwd" type="password" />)

      expect(countIcons(privateRender.container)).toBeLessThan(
        countIcons(passwordRender.container)
      )
      // Every masked field names its eye after its own label, so the two
      // renders here get different names rather than a shared fixed string.
      expect(
        within(privateRender.container).queryByRole("button", {
          name: "Show Pwd",
        })
      ).not.toBeInTheDocument()
      expect(
        within(privateRender.container).getByRole("button", { name: /show/i })
      ).toBeInTheDocument()
    })

    it("disables password managers", () => {
      render(<F0TextInput label="SSN" type="private" />)

      const input = screen.getAllByLabelText("SSN")[0] as HTMLInputElement
      expect(input).toHaveAttribute("autocomplete", "off")
      expect(input).toHaveAttribute("data-1p-ignore", "true")
      expect(input).toHaveAttribute("data-lpignore", "true")
      expect(input).toHaveAttribute("data-form-type", "other")
      expect(input).toHaveAttribute("data-bwignore", "true")
    })
  })

  describe("onPressEnter", () => {
    it("fires when Enter is pressed", () => {
      const onPressEnter = vi.fn()
      render(<F0TextInput label="Submit" onPressEnter={onPressEnter} />)

      const input = screen.getAllByLabelText("Submit")[0]
      fireEvent.keyDown(input, { key: "Enter" })

      expect(onPressEnter).toHaveBeenCalledTimes(1)
    })

    it("does not fire on other keys", () => {
      const onPressEnter = vi.fn()
      render(<F0TextInput label="Submit" onPressEnter={onPressEnter} />)

      const input = screen.getAllByLabelText("Submit")[0]
      fireEvent.keyDown(input, { key: "a" })
      fireEvent.keyDown(input, { key: "Escape" })

      expect(onPressEnter).not.toHaveBeenCalled()
    })
  })

  describe("onPressEscape", () => {
    it("fires when Escape is pressed", () => {
      const onPressEscape = vi.fn()
      render(<F0TextInput label="Revert" onPressEscape={onPressEscape} />)

      fireEvent.keyDown(screen.getAllByLabelText("Revert")[0], {
        key: "Escape",
      })

      expect(onPressEscape).toHaveBeenCalledTimes(1)
    })

    it("does not fire on other keys", () => {
      const onPressEscape = vi.fn()
      render(<F0TextInput label="Revert" onPressEscape={onPressEscape} />)

      const input = screen.getAllByLabelText("Revert")[0]
      fireEvent.keyDown(input, { key: "Enter" })
      fireEvent.keyDown(input, { key: "Tab" })
      fireEvent.keyDown(input, { key: "a" })

      expect(onPressEscape).not.toHaveBeenCalled()
    })
  })

  describe("onKeyDown", () => {
    it("receives every key, including the two with shortcuts", () => {
      const onKeyDown = vi.fn()
      render(<F0TextInput label="Keys" onKeyDown={onKeyDown} />)

      const input = screen.getAllByLabelText("Keys")[0]
      fireEvent.keyDown(input, { key: "a" })
      fireEvent.keyDown(input, { key: "Enter" })
      fireEvent.keyDown(input, { key: "Escape" })

      expect(onKeyDown.mock.calls.map(([event]) => event.key)).toEqual([
        "a",
        "Enter",
        "Escape",
      ])
    })

    it("runs before the shortcuts, which still fire", () => {
      const calls: string[] = []
      render(
        <F0TextInput
          label="Order"
          onKeyDown={() => calls.push("onKeyDown")}
          onPressEnter={() => calls.push("onPressEnter")}
        />
      )

      fireEvent.keyDown(screen.getAllByLabelText("Order")[0], { key: "Enter" })

      expect(calls).toEqual(["onKeyDown", "onPressEnter"])
    })

    it("suppresses both shortcuts when it calls preventDefault", () => {
      const onPressEnter = vi.fn()
      const onPressEscape = vi.fn()
      render(
        <F0TextInput
          label="Handled"
          onKeyDown={(event) => event.preventDefault()}
          onPressEnter={onPressEnter}
          onPressEscape={onPressEscape}
        />
      )

      const input = screen.getAllByLabelText("Handled")[0]
      fireEvent.keyDown(input, { key: "Enter" })
      fireEvent.keyDown(input, { key: "Escape" })

      expect(onPressEnter).not.toHaveBeenCalled()
      expect(onPressEscape).not.toHaveBeenCalled()
    })
  })

  describe("masked", () => {
    it("renders one eye for type=private, not two", () => {
      render(<F0TextInput label="SSN" type="private" value="123-45-6789" />)

      expect(screen.getAllByRole("button", { name: /^show/i })).toHaveLength(1)
    })

    it("masks a plain text field when `masked` is set on its own", () => {
      render(<F0TextInput label="IBAN" value="ES91 2100" masked />)

      const input = screen.getAllByLabelText("IBAN")[0] as HTMLInputElement
      expect(input.type).toBe("password")

      fireEvent.click(screen.getByRole("button", { name: "Show IBAN" }))
      expect(input.type).toBe("text")
    })

    it("keeps the eye on a readonly field while dropping its clear button", () => {
      render(
        <F0TextInput
          label="Email"
          value="ada@example.com"
          masked
          readonly
          clearable
        />
      )

      expect(
        screen.getByRole("button", { name: "Show Email" })
      ).toBeInTheDocument()
      expect(screen.queryByTestId("clear-button")).not.toBeInTheDocument()
    })
  })

  describe("resting value", () => {
    it("drops the field chrome but keeps its height with readonly + transparent", () => {
      render(
        <F0TextInput
          label="Email"
          value="ada@example.com"
          readonly
          transparent
        />
      )

      const wrapper = screen.getByTestId("input-field-wrapper")
      expect(wrapper).not.toHaveClass("border-[1px]")
      expect(wrapper).toHaveClass("h-[32px]")
    })
  })
})
