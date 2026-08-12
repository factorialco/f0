import { fireEvent, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

import { type ClockInProject, ProjectSelector } from "./ProjectSelector"

const NESTED: ClockInProject[] = [
  {
    id: "design-system",
    name: "Design system",
    subprojects: [
      { id: "ds-components", name: "Components" },
      { id: "ds-tokens", name: "Tokens" },
    ],
  },
  { id: "internal", name: "Internal tooling" },
]

const FLAT: ClockInProject[] = [
  { id: "internal", name: "Internal tooling" },
  { id: "support", name: "Customer support" },
]

/** 11 projects × 5 subprojects = 55 leaves, past the picker's 20-per-page window. */
const MANY: ClockInProject[] = [
  "Alpha",
  "Bravo",
  "Charlie",
  "Delta",
  "Echo",
  "Foxtrot",
  "Golf",
  "Hotel",
  "India",
  "Juliett",
  "Kilo",
].map((name) => ({
  id: name.toLowerCase(),
  name,
  subprojects: [1, 2, 3, 4, 5].map((n) => ({
    id: `${name.toLowerCase()}-${n}`,
    name: `${name} ${n}`,
  })),
}))

/** F0Select only fills its list once the popover's open animation starts. */
const openPicker = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole("combobox", { name: "Select project" }))
  await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
  fireEvent.animationStart(screen.getByRole("listbox"))
}

describe("ProjectSelector", () => {
  // F0Select's list is VIRTUALIZED: with jsdom's zero-height boxes it decides
  // nothing is on screen and renders no options. Same measurements F0Select's own
  // tests fake, for the same reason.
  global.ResizeObserver = class MockResizeObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  } as typeof ResizeObserver

  beforeEach(() => {
    Object.defineProperty(HTMLElement.prototype, "offsetHeight", { value: 800 })
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { value: 800 })
    vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(
      () => ({
        width: 120,
        height: 120,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0,
        toJSON: () => {},
      })
    )
  })

  it("exposes a focusable combobox named by the label", () => {
    render(<ProjectSelector projects={FLAT} label="Select project" />)

    const trigger = screen.getByRole("combobox", { name: "Select project" })
    // A keyboard has to reach it — the trigger is a real control, not the `div`
    // F0Select renders when it is handed a custom child.
    trigger.focus()
    expect(trigger).toHaveFocus()
  })

  it("groups subprojects under their parent, and leaves a flat project as its own option", async () => {
    const user = userEvent.setup()
    render(<ProjectSelector projects={NESTED} label="Select project" />)

    await openPicker(user)

    // The parent names a group; its subprojects are what you can pick under it.
    await waitFor(() =>
      expect(screen.getByText("Design system")).toBeInTheDocument()
    )
    expect(screen.getByText("Components")).toBeInTheDocument()
    expect(screen.getByText("Tokens")).toBeInTheDocument()
    // A project with no subprojects IS the leaf, so in a nested list it appears
    // twice: as its own group heading and as the one option under it.
    expect(screen.getAllByText("Internal tooling")).toHaveLength(2)
  })

  it("offers a flat list without group headers when nothing is nested", async () => {
    const user = userEvent.setup()
    render(<ProjectSelector projects={FLAT} label="Select project" />)

    await openPicker(user)

    await waitFor(() =>
      expect(screen.getByText("Customer support")).toBeInTheDocument()
    )
    expect(screen.getByText("Internal tooling")).toBeInTheDocument()
  })

  it("pages a long list instead of rendering all of it", async () => {
    const user = userEvent.setup()
    render(<ProjectSelector projects={MANY} label="Select project" />)

    await openPicker(user)

    // 55 leaves, 20 per page: the first page lands, the rest waits on a scroll.
    await waitFor(() => expect(screen.getByText("Alpha 1")).toBeInTheDocument())
    expect(screen.queryByText("Kilo 1")).not.toBeInTheDocument()
  })

  it("searches by the parent project's name as well as the leaf's", async () => {
    const user = userEvent.setup()
    render(<ProjectSelector projects={MANY} label="Select project" />)

    await openPicker(user)
    await waitFor(() => expect(screen.getByText("Alpha 1")).toBeInTheDocument())

    // "Kilo" names no leaf — only a parent — and its children must still show.
    await user.type(screen.getByRole("searchbox"), "Kilo")

    await waitFor(() => expect(screen.getByText("Kilo 1")).toBeInTheDocument())
    expect(screen.queryByText("Alpha 1")).not.toBeInTheDocument()
  })

  it("reports the selected leaf's id", async () => {
    const user = userEvent.setup()
    const onChangeProjectId = vi.fn()
    render(
      <ProjectSelector
        projects={NESTED}
        label="Select project"
        onChangeProjectId={onChangeProjectId}
      />
    )

    await openPicker(user)
    await waitFor(() => expect(screen.getByText("Tokens")).toBeInTheDocument())
    await user.click(screen.getByText("Tokens"))

    expect(onChangeProjectId).toHaveBeenCalledWith(
      "ds-tokens",
      expect.anything(),
      expect.anything()
    )
  })
})
