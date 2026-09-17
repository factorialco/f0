import { describe, expect, it, vi } from "vitest"
import { screen, zeroRender as render } from "@/testing/test-utils"
import { F0Select } from ".."

/**
 * ONE tooltip per hover target.
 *
 * The `field` trigger is wrapped in a tooltip that reads out the field's label
 * and the whole selection; the selected label inside it is an `OneEllipsis`,
 * which grows a tooltip of its own once the text is clipped. Both hang off the
 * same hover, and Radix closes every open tooltip when another opens — so they
 * took turns: one bubble, a flash, then the other, with the selection read back
 * twice. The trigger's tooltip says everything the clipped-text one would, so
 * the clipped-text one is suppressed there.
 *
 * `OneEllipsis` is STUBBED because its tooltip is gated on real measurement
 * (`scrollWidth > clientWidth`), and jsdom reports both as 0 — the tooltip never
 * renders there whatever we pass. The stub surfaces the decision itself: which
 * of the two tooltips F0Select leaves switched on.
 */
vi.mock("@/lib/OneEllipsis", () => ({
  OneEllipsis: ({
    children,
    noTooltip,
  }: {
    children: string
    noTooltip?: boolean
  }) => (
    <span data-testid="ellipsis" data-no-tooltip={String(!!noTooltip)}>
      {children}
    </span>
  ),
}))

const OPTIONS = [
  { value: "tokens", label: "Tokens", selectedLabel: "Tokens — Design system" },
  { value: "flows", label: "Flows" },
]

const selectedLabelNode = (text: string) =>
  screen
    .getAllByTestId("ellipsis")
    .find((node) => node.textContent === text) as HTMLElement

describe("F0Select selected-label tooltip", () => {
  it("leaves the clipped-text tooltip out when the trigger carries its own", () => {
    render(
      <F0Select
        label="Select project"
        hideLabel
        value="tokens"
        options={OPTIONS}
        onChange={() => {}}
      />
    )

    expect(selectedLabelNode("Tokens — Design system")).toHaveAttribute(
      "data-no-tooltip",
      "true"
    )
  })

  it("keeps it on the inline variant, which has no trigger tooltip", () => {
    render(
      <F0Select
        variant="inline"
        label="Select project"
        value="tokens"
        options={OPTIONS}
        onChange={() => {}}
      />
    )

    expect(selectedLabelNode("Tokens — Design system")).toHaveAttribute(
      "data-no-tooltip",
      "false"
    )
  })
})
