import { fireEvent, screen } from "@testing-library/react"
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

    it("keeps password visibility independent of focus", () => {
      render(<F0TextInput label="Password" type="password" value="secret" />)
      const input = screen.getByLabelText("Password", { selector: "input" })
      fireEvent.focus(input)
      expect(input).toHaveAttribute("type", "password")
      fireEvent.click(screen.getByRole("button", { name: /show password/i }))
      fireEvent.blur(input)
      expect(input).toHaveAttribute("type", "text")
    })

    it("renders an eye toggle that reveals the value when clicked", () => {
      render(<F0TextInput label="Password" type="password" />)

      const toggle = screen.getByRole("button", { name: /show password/i })
      fireEvent.click(toggle)

      const input = screen.getAllByLabelText("Password")[0] as HTMLInputElement
      expect(input.type).toBe("text")
    })

    it("flips back to masked when the toggle is clicked twice", () => {
      render(<F0TextInput label="Password" type="password" />)

      const initialToggle = screen.getByRole("button", {
        name: /show password/i,
      })
      fireEvent.click(initialToggle)
      const hideToggle = screen.getByRole("button", { name: /hide password/i })
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

    it("reveals while focused and masks when focus leaves", () => {
      const onBlur = vi.fn()
      render(
        <F0TextInput
          label="SSN"
          type="private"
          value="123-45-6789"
          onBlur={onBlur}
        />
      )
      const input = screen.getByLabelText("SSN", { selector: "input" })
      fireEvent.focus(input)
      expect(input).toHaveAttribute("type", "text")
      fireEvent.blur(input)
      expect(input).toHaveAttribute("type", "password")
      expect(input).toHaveValue("123-45-6789")
      expect(onBlur).toHaveBeenCalledTimes(1)
    })

    it("does not render an eye toggle", () => {
      render(<F0TextInput label="SSN" type="private" />)
      expect(screen.queryByRole("button")).toBeNull()
    })

    it("does not render the lock icon that password forces", () => {
      // password forces a leading lock icon IN ADDITION to the eye toggle;
      // private has no toggle or forced icon, so it must have
      // strictly fewer rendered icons. This fails if a lock icon ever regresses
      // back onto the private field.
      const countIcons = (c: HTMLElement) => c.querySelectorAll("svg").length

      const privateRender = render(<F0TextInput label="SSN" type="private" />)
      const passwordRender = render(<F0TextInput label="Pwd" type="password" />)

      expect(countIcons(privateRender.container)).toBeLessThan(
        countIcons(passwordRender.container)
      )
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
})
