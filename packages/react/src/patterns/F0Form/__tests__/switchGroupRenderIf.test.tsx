import { describe, expect, it } from "vitest"
import { z } from "zod"

import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"
import { f0FormField, F0Form } from "@/patterns/F0Form"
import { useF0FormDefinition } from "@/patterns/F0WizardForm"

/**
 * Flipping the first switch SPLITS a contiguous switch group: fields appear
 * between the two switches and the second switch disappears at the same time.
 * `groupContiguousSwitches` therefore renders a structurally different tree at
 * the same position.
 */
const Probe = () => {
  const schema = z.object({
    first: f0FormField.boolean({ label: "First", optional: true }),
    between: f0FormField.text({
      label: "Between",
      optional: true,
      renderIf: ({ values }) => values.first === true,
    }),
    second: f0FormField.boolean({
      label: "Second",
      optional: true,
      renderIf: ({ values }) => values.first !== true,
    }),
  })
  const def = useF0FormDefinition({
    name: "switch-group-split-probe",
    schema,
    defaultValues: { first: false, between: "", second: false },
    onSubmit: async () => ({ success: true }),
  })
  return <F0Form formDefinition={def} />
}

describe("a switch that splits its own group", () => {
  it("does not crash when fields appear between two switches", async () => {
    render(<Probe />)
    expect(screen.getByText("Second")).toBeVisible()

    await userEvent.click(screen.getByRole("switch", { name: /first/i }))

    await waitFor(() =>
      expect(screen.getByRole("textbox", { name: /between/i })).toBeVisible()
    )
    expect(screen.queryByText("Second")).toBeNull()
  })
})
