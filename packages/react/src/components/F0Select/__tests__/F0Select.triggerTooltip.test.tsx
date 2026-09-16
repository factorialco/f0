import { afterEach, describe, expect, it, vi } from "vitest"
import { screen, zeroRender as render } from "@/testing/test-utils"
import { F0Select } from ".."

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

/**
 * Whether the trigger's text is cut off is a LAYOUT question, and jsdom answers
 * every layout question with 0 — so `scrollWidth > clientWidth` is false there
 * no matter how long the label is, and the trigger always reads as fully
 * visible. These force the answer so both sides of the rule can be tested.
 */
const setClipped = (clipped: boolean) => {
  Object.defineProperty(HTMLElement.prototype, "clientWidth", {
    configurable: true,
    get: () => 100,
  })
  Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
    configurable: true,
    get: () => (clipped ? 500 : 100),
  })
}

/**
 * The multi-selection trigger asks a different question — `useLabelsOverflow`
 * measures each label against the container's `offsetWidth`, and jsdom reports
 * 0 there, which the hook reads as "no width to overflow, so everything fits".
 * Giving every element the same non-zero width makes any second label overflow,
 * which is what drops the trigger to a bare count.
 */
const setLabelsOverflowing = () => {
  Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
    configurable: true,
    get: () => 100,
  })
}

afterEach(() => {
  // @ts-expect-error -- handing the prototype back its own accessors
  delete HTMLElement.prototype.clientWidth
  // @ts-expect-error -- ditto
  delete HTMLElement.prototype.scrollWidth
  // @ts-expect-error -- ditto
  delete HTMLElement.prototype.offsetWidth
})

const label = () => screen.getByTestId("tooltip-label")
const description = () => screen.getByTestId("tooltip-description")

describe("F0Select trigger tooltip content", () => {
  describe("when the trigger already spells the selection out", () => {
    it("says nothing at all", () => {
      setClipped(false)
      render(
        <F0Select
          label="Select project"
          value="tokens"
          options={OPTIONS}
          onChange={() => {}}
        />
      )

      // The field's label is beside the field and the selection is fully
      // readable in it — a tooltip here would only read the screen back.
      expect(label()).toHaveTextContent("")
      expect(description()).toHaveTextContent("")
    })

    it("still names the field when the label is hidden", () => {
      setClipped(false)
      render(
        <F0Select
          label="Select project"
          hideLabel
          value="tokens"
          options={OPTIONS}
          onChange={() => {}}
        />
      )

      // Which field this is, is the one thing not on screen.
      expect(label()).toHaveTextContent("Select project")
      expect(description()).toHaveTextContent("")
    })
  })

  describe("when the trigger cannot show all of it", () => {
    it("spells out a selection the box has clipped", () => {
      setClipped(true)
      render(
        <F0Select
          label="Select project"
          value="tokens"
          options={OPTIONS}
          onChange={() => {}}
        />
      )

      expect(description()).toHaveTextContent("Tokens — Design system")
    })

    it("names the field and the selection when the label is hidden too", () => {
      setClipped(true)
      render(
        <F0Select
          label="Select project"
          hideLabel
          value="tokens"
          options={OPTIONS}
          onChange={() => {}}
        />
      )

      expect(label()).toHaveTextContent("Select project")
      expect(description()).toHaveTextContent("Tokens — Design system")
    })

    it("uses the plain label when the item has no `selectedLabel`", () => {
      setClipped(true)
      render(
        <F0Select
          label="Select project"
          value="flows"
          options={OPTIONS}
          onChange={() => {}}
        />
      )

      expect(description()).toHaveTextContent("Flows")
    })
  })

  it("lists a multiple selection the trigger reduced to a count", () => {
    setClipped(false)
    setLabelsOverflowing()
    render(
      <F0Select
        multiple
        label="Select project"
        value={["tokens", "flows"]}
        options={OPTIONS}
        onChange={() => {}}
      />
    )

    // The labels do not fit, so the trigger falls back to "2 selected" — which
    // names neither of them. Nothing is repeated by listing them here.
    expect(description()).toHaveTextContent("Tokens — Design system, Flows")
  })

  it("has nothing to say when nothing is selected", () => {
    setClipped(true)
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
    expect(description()).toHaveTextContent("")
  })
})
