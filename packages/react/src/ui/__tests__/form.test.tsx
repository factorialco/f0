import { useForm } from "react-hook-form"
import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../form"

/**
 * `FormControl` used to emit `aria-describedby="<id>-form-item-description"`
 * unconditionally, but `FormDescription` renders only when a caller supplies
 * help text and `FormMessage` returns null with no body. Every control without
 * help text therefore pointed at an element that does not exist. axe reports
 * that as *incomplete* (`aria-valid-attr-value`), never as a violation, so CI
 * could not catch it.
 */
function Harness({
  description,
  message,
}: {
  description?: string
  message?: string
}) {
  const form = useForm({ defaultValues: { field: "" } })

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="field"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <input aria-label="Field" {...field} />
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            {message && <FormMessage>{message}</FormMessage>}
          </FormItem>
        )}
      />
    </Form>
  )
}

describe("FormControl aria-describedby", () => {
  it("omits the attribute when neither description nor message renders", () => {
    render(<Harness />)

    expect(screen.getByLabelText("Field")).not.toHaveAttribute(
      "aria-describedby"
    )
  })

  it("references the description when one renders, and it resolves", () => {
    render(<Harness description="Help text" />)

    const input = screen.getByLabelText("Field")
    const ids = (input.getAttribute("aria-describedby") ?? "").split(/\s+/)

    expect(ids.filter(Boolean)).toHaveLength(1)
    expect(document.getElementById(ids[0])?.textContent).toBe("Help text")
  })

  it("references both when description and message render", () => {
    render(<Harness description="Help text" message="Something is wrong" />)

    const input = screen.getByLabelText("Field")
    const ids = (input.getAttribute("aria-describedby") ?? "")
      .split(/\s+/)
      .filter(Boolean)

    expect(ids).toHaveLength(2)
    // Every referenced id must resolve — that is the whole contract.
    expect(ids.map((id) => document.getElementById(id))).not.toContain(null)
    expect(ids.map((id) => document.getElementById(id)?.textContent)).toEqual(
      expect.arrayContaining(["Help text", "Something is wrong"])
    )
  })

  it("drops the reference again when the description unmounts", () => {
    const { rerender } = render(<Harness description="Help text" />)
    expect(screen.getByLabelText("Field")).toHaveAttribute("aria-describedby")

    rerender(<Harness />)
    expect(screen.getByLabelText("Field")).not.toHaveAttribute(
      "aria-describedby"
    )
  })
})
