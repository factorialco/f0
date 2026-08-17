import { describe, expect, it, vi } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

import { F0Select } from "../index"

/**
 * The tooltip, STUBBED — its real content lives behind Radix's 700ms open timer
 * and a portal, which jsdom will not open (fake timers deadlock `user.hover`,
 * real ones never settle). The wiring is covered in `F0Select.test.tsx`; what is
 * worth pinning here is the CONTENT DECISION: which of `label` / `description`
 * F0Select hands the tooltip, and when. So the stub renders both eagerly.
 */
vi.mock("@/experimental/Overlays/Tooltip", () => ({
  TooltipInternal: ({
    label,
    description,
    children,
  }: {
    label?: string
    description?: string
    children: React.ReactNode
  }) => (
    <div>
      <span data-testid="tooltip-label">{label ?? ""}</span>
      <span data-testid="tooltip-description">{description ?? ""}</span>
      {children}
    </div>
  ),
}))

const OPTIONS = [
  { value: "tokens", label: "Tokens", selectedLabel: "Tokens — Design system" },
  { value: "flows", label: "Flows" },
]

describe("F0Select trigger tooltip content", () => {
  it("names the field and the selection when the label is hidden", () => {
    render(
      <F0Select
        label="Select project"
        hideLabel
        value="tokens"
        options={OPTIONS}
        onChange={() => {}}
      />
    )

    expect(screen.getByTestId("tooltip-label")).toHaveTextContent(
      "Select project"
    )
    expect(screen.getByTestId("tooltip-description")).toHaveTextContent(
      "Tokens — Design system"
    )
  })

  it("drops the label when it is already rendered beside the field", () => {
    render(
      <F0Select
        label="Select project"
        value="tokens"
        options={OPTIONS}
        onChange={() => {}}
      />
    )

    // Repeating what is on screen would be noise.
    expect(screen.getByTestId("tooltip-label")).toHaveTextContent("")
    expect(screen.getByTestId("tooltip-description")).toHaveTextContent(
      "Tokens — Design system"
    )
  })

  it("uses the plain label when the item has no `selectedLabel`", () => {
    render(
      <F0Select
        label="Select project"
        hideLabel
        value="flows"
        options={OPTIONS}
        onChange={() => {}}
      />
    )

    expect(screen.getByTestId("tooltip-description")).toHaveTextContent("Flows")
  })

  it("has nothing to say when nothing is selected", () => {
    render(
      <F0Select
        label="Select project"
        hideLabel
        options={OPTIONS}
        onChange={() => {}}
      />
    )

    // The tooltip stays mounted so the trigger below it survives the first
    // selection — see F0Select.triggerIdentity.test.tsx. Empty opens nothing.
    expect(screen.getByTestId("tooltip-description")).toHaveTextContent("")
  })
})
