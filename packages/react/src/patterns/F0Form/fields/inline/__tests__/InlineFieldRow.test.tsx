import { afterEach, describe, expect, it, vi } from "vitest"
import { Pencil, Star } from "@/icons/app"
import {
  fireEvent,
  screen,
  userEvent,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"
import { InlineFieldRow } from "../InlineFieldRow"
import type { InlineFieldRowProps } from "../types"

const renderRow = (props: Partial<InlineFieldRowProps> = {}) =>
  render(
    <InlineFieldRow
      label="Job title"
      value={<span>Hello</span>}
      actions={[]}
      editing={false}
      {...props}
    />
  )

/** Define clipboard without replacing navigator prototype getters. */
const stubClipboard = (writeText: () => Promise<void>) =>
  Object.defineProperty(navigator, "clipboard", {
    value: { writeText },
    configurable: true,
  })

afterEach(() => {
  Reflect.deleteProperty(navigator, "clipboard")
})

const fakeActions = (onClick = vi.fn()) => [
  { key: "one", icon: Pencil, label: "First action", onClick },
  { key: "two", icon: Star, label: "Second action", onClick },
]

describe("InlineFieldRow", () => {
  it("renders the label and the value node", () => {
    renderRow()

    expect(screen.getByText("Job title")).toBeInTheDocument()
    expect(screen.getByText("Hello")).toBeInTheDocument()
  })

  it("names the hint affordance with the hint copy", () => {
    renderRow({ hint: "As it appears on the contract" })

    expect(
      screen.getByRole("button", { name: "As it appears on the contract" })
    ).toBeInTheDocument()
  })

  it("renders no activator when onActivate is absent", () => {
    renderRow()

    expect(screen.queryByRole("button", { name: "Job title" })).toBeNull()
    expect(document.querySelector('[tabindex="0"]')).toBeNull()
  })

  it("renders an activator when onActivate is present", () => {
    renderRow({ onActivate: vi.fn() })

    const activator = screen.getByRole("button", { name: "Job title" })
    expect(activator).toHaveAttribute("tabindex", "0")
  })

  it.each([
    ["click", (el: HTMLElement) => fireEvent.click(el)],
    ["Enter", (el: HTMLElement) => fireEvent.keyDown(el, { key: "Enter" })],
    ["Space", (el: HTMLElement) => fireEvent.keyDown(el, { key: " " })],
  ])("activates on %s", (_name, act) => {
    const onActivate = vi.fn()
    renderRow({ onActivate })

    act(screen.getByRole("button", { name: "Job title" }))

    expect(onActivate).toHaveBeenCalledTimes(1)
  })

  it("ignores other keys", () => {
    const onActivate = vi.fn()
    renderRow({ onActivate })

    fireEvent.keyDown(screen.getByRole("button", { name: "Job title" }), {
      key: "a",
    })

    expect(onActivate).not.toHaveBeenCalled()
  })

  it("renders the actions in the given order with their labels", () => {
    renderRow({ actions: fakeActions(), onActivate: vi.fn() })

    const strip = document.querySelector(
      '[data-slot="inline-field-row-actions"]'
    )
    const labels = Array.from(strip?.querySelectorAll("button") ?? []).map(
      (button) => button.getAttribute("aria-label")
    )

    expect(labels).toEqual(["First action", "Second action"])
  })

  it("calls the action back when it is pressed", async () => {
    const onClick = vi.fn()
    renderRow({ actions: fakeActions(onClick) })

    await userEvent.click(screen.getByRole("button", { name: "First action" }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("hides the strip and the activator while editing", () => {
    renderRow({
      actions: fakeActions(),
      onActivate: vi.fn(),
      copyValue: "Designer",
      editing: true,
    })

    expect(
      document.querySelector('[data-slot="inline-field-row-actions"]')
    ).toBeNull()
    expect(screen.queryByRole("button", { name: "Job title" })).toBeNull()
  })

  it("keeps the strip reachable where there is no hover to reveal it with", () => {
    renderRow({ actions: fakeActions() })

    const strip = document.querySelector(
      '[data-slot="inline-field-row-actions"]'
    )

    expect(strip?.className).toContain("[@media(hover:none)]:opacity-100")
    expect(strip?.className).toContain(
      "[@media(hover:none)]:pointer-events-auto"
    )
    expect(strip?.className).toContain("group-hover:opacity-100")
    expect(strip?.className).toContain("group-focus-within:opacity-100")
    expect(strip?.className).toContain("motion-reduce:transition-none")
  })

  it("keeps the activator a sibling of the strip, never its parent", () => {
    renderRow({ actions: fakeActions(), onActivate: vi.fn() })

    const activator = screen.getByRole("button", { name: "Job title" })
    const strip = document.querySelector(
      '[data-slot="inline-field-row-actions"]'
    )

    expect(activator.contains(strip)).toBe(false)
    expect(activator.parentElement).toBe(strip?.parentElement)
  })

  it("appends the copy action last and writes copyValue, not the text", async () => {
    // Real timers: fake ones deadlock userEvent's clipboard stub.
    const writeText = vi.fn().mockResolvedValue(undefined)
    stubClipboard(writeText)

    renderRow({
      actions: fakeActions(),
      copyValue: "Senior designer",
      value: <span>Hello</span>,
    })

    const buttons = Array.from(
      document
        .querySelector('[data-slot="inline-field-row-actions"]')
        ?.querySelectorAll("button") ?? []
    )
    expect(buttons.at(-1)).toHaveAttribute("aria-label", "Copy Job title")

    await userEvent.click(buttons.at(-1) as HTMLElement)

    expect(writeText).toHaveBeenCalledWith("Senior designer")
  })

  it("pins the confirmation for 1400ms and then drops it", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    stubClipboard(writeText)

    renderRow({ copyValue: "Senior designer" })

    await userEvent.click(
      screen.getByRole("button", { name: "Copy Job title" })
    )

    await screen.findByRole("button", { name: "Copied Job title" })

    await new Promise((resolve) => setTimeout(resolve, 900))
    expect(
      screen.getByRole("button", { name: "Copied Job title" })
    ).toBeInTheDocument()

    await waitFor(
      () =>
        expect(
          screen.getByRole("button", { name: "Copy Job title" })
        ).toBeInTheDocument(),
      { timeout: 2000 }
    )
  })

  it("confirms nothing when the clipboard refuses", async () => {
    const writeText = vi.fn().mockRejectedValue(new Error("denied"))
    stubClipboard(writeText)

    renderRow({ copyValue: "Senior designer" })

    await userEvent.click(
      screen.getByRole("button", { name: "Copy Job title" })
    )

    await waitFor(() => expect(writeText).toHaveBeenCalled())
    expect(
      screen.queryByRole("button", { name: "Copied Job title" })
    ).toBeNull()
    expect(
      screen.getByRole("button", { name: "Copy Job title" })
    ).toBeInTheDocument()
  })

  it("forwards a ref to the activator so the caller can focus it again", () => {
    const ref = { current: null as HTMLDivElement | null }
    render(
      <InlineFieldRow
        ref={ref}
        label="Job title"
        value={<span>Hello</span>}
        actions={[]}
        editing={false}
        onActivate={vi.fn()}
      />
    )

    expect(ref.current).toBe(screen.getByRole("button", { name: "Job title" }))
    ref.current?.focus()
    expect(document.activeElement).toBe(ref.current)
  })
})
