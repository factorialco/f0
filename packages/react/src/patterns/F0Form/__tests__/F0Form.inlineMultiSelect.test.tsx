import userEvent from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { z } from "zod"
import {
  zeroRender as render,
  screen,
  waitFor,
  within,
} from "@/testing/test-utils"
import { F0Form } from "../F0Form"
import { f0FormField } from "../f0Schema"
import { resetInlineWarnings } from "../fields/inline/support"

const COMMUTES = [
  { value: "bicycle", label: "Bicycle" },
  { value: "walking", label: "Walking" },
  { value: "train", label: "Train" },
]

const commuteSchema = z.object({
  commute: f0FormField(z.array(z.string()), {
    label: "Commute",
    multiple: true,
    options: COMMUTES,
  }),
})

/** Define clipboard without replacing navigator prototype getters. */
const stubClipboard = (writeText: () => Promise<void>) =>
  Object.defineProperty(navigator, "clipboard", {
    value: { writeText },
    configurable: true,
  })

function renderCommute(props: Record<string, unknown> = {}) {
  return render(
    <F0Form
      name="inline-multi-select"
      inline
      schema={commuteSchema}
      defaultValues={{ commute: ["bicycle", "walking"] }}
      onSubmit={async () => ({ success: true })}
      {...props}
    />
  )
}

const row = () => screen.getByTestId("select-inline-value") as HTMLElement

describe("F0Form inline mode, multi-select rows", () => {
  global.ResizeObserver = class MockResizeObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  } as typeof ResizeObserver

  beforeEach(() => {
    resetInlineWarnings()
    // The select's list is virtualised and measures itself; jsdom reports 0.
    Object.defineProperty(HTMLElement.prototype, "offsetHeight", { value: 800 })
  })
  afterEach(() => vi.restoreAllMocks())

  it("reads the selection as text instead of falling back to a standard field", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {})
    renderCommute()

    expect(row()).toHaveTextContent("Bicycle, Walking")
    expect(screen.queryByTestId("input-field-wrapper")).toBeNull()
    expect(screen.queryByRole("combobox")).toBeNull()
    expect(warn).not.toHaveBeenCalled()
  })

  it("leaves the chevron as the row's only affordance, with no edit action", () => {
    renderCommute()

    expect(screen.queryByRole("button", { name: "Edit Commute" })).toBeNull()
    expect(row().lastElementChild?.querySelector("svg")).toBeInTheDocument()
  })

  it("copies the selected labels joined with a comma", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    stubClipboard(writeText)

    renderCommute({
      schema: z.object({
        commute: f0FormField(z.array(z.string()), {
          label: "Commute",
          multiple: true,
          options: COMMUTES,
          copyable: true,
        }),
      }),
    })

    await userEvent.click(screen.getByRole("button", { name: "Copy Commute" }))

    await waitFor(() =>
      expect(writeText).toHaveBeenCalledWith("Bicycle, Walking")
    )
  })

  it("offers no copy action when nothing is selected", () => {
    renderCommute({
      schema: z.object({
        commute: f0FormField(z.array(z.string()), {
          label: "Commute",
          multiple: true,
          options: COMMUTES,
          copyable: true,
        }),
      }),
      defaultValues: { commute: [] },
    })

    expect(screen.queryByRole("button", { name: "Copy Commute" })).toBeNull()
  })

  it("keeps a read-only multi-select inert", () => {
    renderCommute({
      schema: z.object({
        commute: f0FormField(z.array(z.string()), {
          label: "Commute",
          multiple: true,
          options: COMMUTES,
          editable: false,
        }),
      }),
    })

    expect(within(row()).getByText("Bicycle, Walking")).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: "Commute" })).toBeNull()
    expect(row().querySelector("svg")).toBeNull()
  })
})
