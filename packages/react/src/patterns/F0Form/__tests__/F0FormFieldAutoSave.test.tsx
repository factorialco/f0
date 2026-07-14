import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { z } from "zod"

import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { F0Form } from "../F0Form"
import { f0FormField } from "../f0Schema"

const schema = z.object({
  auto: f0FormField(z.string().min(1), { label: "Auto", autoSave: true }),
  manual: f0FormField(z.string().min(1), { label: "Manual" }),
})

const defaultValues = { auto: "a", manual: "m" }

describe("F0Form per-field auto-save", () => {
  it("auto-saves after a change to an autoSave field", async () => {
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="autosave-auto"
        schema={schema}
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        submitConfig={{ label: "Save" }}
      />
    )

    await userEvent.type(screen.getByLabelText("Auto"), "b")

    await waitFor(
      () => {
        expect(onSubmit).toHaveBeenCalledWith(
          expect.objectContaining({ auto: "ab", manual: "m" })
        )
      },
      { timeout: 2000 }
    )
  })

  it("does not auto-save when a non-autoSave field changes", async () => {
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    render(
      <F0Form
        name="autosave-manual"
        schema={schema}
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        submitConfig={{ label: "Save" }}
      />
    )

    await userEvent.type(screen.getByLabelText("Manual"), "x")
    // Well past the auto-save debounce (800ms).
    await new Promise((resolve) => setTimeout(resolve, 1200))

    expect(onSubmit).not.toHaveBeenCalled()
  })

  it("keeps the submit button (unlike form-level autosubmit)", () => {
    render(
      <F0Form
        name="autosave-button"
        schema={schema}
        defaultValues={defaultValues}
        onSubmit={vi.fn().mockResolvedValue({ success: true })}
        submitConfig={{ label: "Save" }}
      />
    )
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument()
  })
})
