import { screen } from "@testing-library/react"
import "@testing-library/jest-dom/vitest"
import { describe, expect, it } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { F0Select } from "../index"

const OPTIONS = [
  { value: "tokens", label: "Tokens" },
  { value: "flows", label: "Flows" },
]

/**
 * The trigger's DOM node must SURVIVE a selection change. Wrapping it in the
 * tooltip only once there was something to say changed the element type above
 * it, so React discarded the trigger and mounted a fresh one — dropping focus
 * mid-interaction, and detaching any node a caller had already captured.
 */
describe("F0Select trigger identity", () => {
  it("keeps the same trigger node when a selection arrives", () => {
    const { rerender } = render(
      <F0Select label="Project" options={OPTIONS} onChange={() => {}} />
    )

    const trigger = screen.getByRole("combobox")

    rerender(
      <F0Select
        label="Project"
        value="tokens"
        options={OPTIONS}
        onChange={() => {}}
      />
    )

    expect(trigger).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toBe(trigger)
  })

  it("keeps the same trigger node when the selection is cleared", () => {
    const { rerender } = render(
      <F0Select
        label="Project"
        value="tokens"
        options={OPTIONS}
        onChange={() => {}}
      />
    )

    const trigger = screen.getByRole("combobox")

    rerender(<F0Select label="Project" options={OPTIONS} onChange={() => {}} />)

    expect(trigger).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toBe(trigger)
  })

  it("keeps the same trigger node when the selection changes", () => {
    const { rerender } = render(
      <F0Select
        label="Project"
        value="tokens"
        options={OPTIONS}
        onChange={() => {}}
      />
    )

    const trigger = screen.getByRole("combobox")

    rerender(
      <F0Select
        label="Project"
        value="flows"
        options={OPTIONS}
        onChange={() => {}}
      />
    )

    expect(trigger).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toBe(trigger)
  })
})
