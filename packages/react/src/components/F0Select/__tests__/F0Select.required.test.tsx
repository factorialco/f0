import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { screen, zeroRender as render } from "@/testing/test-utils"
import { F0Select } from ".."

describe("a required F0Select", () => {
  it("does not block the form it sits in from submitting", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn((event: React.FormEvent) => event.preventDefault())

    render(
      <form onSubmit={onSubmit}>
        <F0Select
          label="Address"
          name="address"
          required
          value="place-1"
          options={[]}
          onChange={() => {}}
        />
        <button type="submit">Send</button>
      </form>
    )

    await user.click(screen.getByRole("button", { name: "Send" }))

    // Handed to the select primitive, `required` reaches Radix's hidden
    // <select>, whose options exist only while the dropdown is mounted: a
    // closed select with a value then fails native constraint validation and
    // the submit event never fires
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })
})

describe("hideArrow", () => {
  // The arrow is the only element that spins with the dropdown
  const arrowIn = (container: HTMLElement) =>
    container.querySelector('[class*="origin-center"]')

  it("draws the dropdown arrow by default", () => {
    const { container } = render(
      <F0Select
        label="Country"
        options={[{ value: "es", label: "Spain" }]}
        onChange={() => {}}
      />
    )

    expect(arrowIn(container)).toBeInTheDocument()
  })

  it("leaves it out when the list is not meant to be browsed", () => {
    const { container } = render(
      <F0Select
        label="Country"
        hideArrow
        options={[{ value: "es", label: "Spain" }]}
        onChange={() => {}}
      />
    )

    expect(arrowIn(container)).not.toBeInTheDocument()
  })
})
