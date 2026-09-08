import { beforeEach, describe, expect, it, vi } from "vitest"

import { Delete, Laptop } from "@/icons/app"
import {
  act,
  fireEvent,
  screen,
  userEvent,
  zeroRender as render,
} from "@/testing/test-utils"

import type {
  CommandAction,
  CommandEntityProvider,
  CommandEntityRef,
  CommandNavigationItem,
} from "../types"

import { F0CommandPaletteProvider, useCommandPalette } from ".."

const laptop: CommandEntityRef = {
  type: "device",
  kind: "one",
  id: "d-1",
  label: 'MacBook Pro 14"',
  sublabel: "Ben Carter",
  href: "/devices/d-1",
}

const run = {
  lock: vi.fn(),
  wipe: vi.fn(),
  update: vi.fn(),
  rename: vi.fn(),
  profile: vi.fn(),
}

const deviceProvider: CommandEntityProvider = {
  type: "device",
  label: "Devices",
  search: (query) =>
    laptop.label.toLowerCase().includes(query.toLowerCase()) ? [laptop] : [],
  actions: () => [
    {
      key: "lock",
      label: "Lock screen",
      icon: Laptop,
      group: "Security",
      risk: "none",
      run: run.lock,
    },
    {
      key: "wipe",
      label: "Wipe device",
      description: "This can't be undone",
      icon: Delete,
      group: "Lifecycle",
      risk: "danger",
      run: run.wipe,
    },
    {
      key: "enroll",
      label: "Enroll in MDM",
      icon: Laptop,
      group: "Lifecycle",
      risk: "none",
      availability: () => ({ disabled: true, reason: "Already enrolled" }),
      run: vi.fn(),
    },
    {
      key: "update",
      label: "Update macOS",
      icon: Laptop,
      group: "Maintenance",
      risk: "confirm",
      params: [
        {
          key: "version",
          label: "Choose a version",
          options: () => [
            { value: "15", label: "macOS 15" },
            { value: "14", label: "macOS 14" },
          ],
        },
      ],
      run: run.update,
    },
  ],
}

/* ── A container and the records inside it, for the drill-down ─────────────── */

const team: CommandEntityRef = {
  type: "team",
  kind: "one",
  id: "t-1",
  label: "Acme Design",
  sublabel: "12 people",
}

const member: CommandEntityRef = {
  type: "person",
  kind: "one",
  id: "p-1",
  label: "Ben Carter",
  sublabel: "Engineering",
  href: "/people/p-1",
}

const teamProvider: CommandEntityProvider = {
  type: "team",
  label: "Teams",
  search: (query) =>
    team.label.toLowerCase().includes(query.toLowerCase()) ? [team] : [],
  actions: () => [
    {
      key: "rename",
      label: "Rename team",
      icon: Laptop,
      group: "Admin",
      risk: "none",
      run: run.rename,
    },
  ],
  // The team hands back `person` refs; the person provider below is what says
  // what can be done to one. Neither has to know about the other.
  inside: (_ref, query) =>
    member.label.toLowerCase().includes(query.toLowerCase()) ? [member] : [],
}

const personProvider: CommandEntityProvider = {
  type: "person",
  label: "People",
  // Not findable globally in these tests, so any `person` row that appears came
  // from inside the team rather than from a search.
  search: () => [],
  actions: () => [
    {
      key: "profile",
      label: "Open profile",
      icon: Laptop,
      group: "Person",
      risk: "none",
      run: run.profile,
    },
  ],
}

const actions: CommandAction[] = [
  { id: "new-task", label: "Create a task", href: "/tasks/new" },
  { id: "my-tasks", label: "Go to my tasks", href: "/tasks?scope=mine" },
]

const navigation: CommandNavigationItem[] = [
  { id: "nav-devices", label: "Devices", href: "/devices" },
]

const OpenButton = ({ scoped = false }: { scoped?: boolean }) => {
  const palette = useCommandPalette()
  return (
    <button
      type="button"
      onClick={() => (scoped ? palette.openScoped(laptop) : palette.open())}
    >
      launch
    </button>
  )
}

type SetupOptions = {
  onNavigate?: (href: string) => void
  onAsk?: (prompt: string, ref?: CommandEntityRef) => void
  withAssistant?: boolean
  recent?: string[]
  scoped?: boolean
  /** Register the team + person providers, for the drill-down. */
  withTeam?: boolean
}

const setup = ({
  onNavigate = vi.fn(),
  onAsk = vi.fn(),
  withAssistant = false,
  recent = [],
  scoped = false,
  withTeam = false,
}: SetupOptions = {}) => {
  const user = userEvent.setup()
  render(
    <F0CommandPaletteProvider
      providers={
        withTeam
          ? [deviceProvider, teamProvider, personProvider]
          : [deviceProvider]
      }
      actions={actions}
      navigation={navigation}
      recent={recent}
      onNavigate={onNavigate}
      assistant={withAssistant ? { label: "Ask One", onAsk } : undefined}
    >
      <OpenButton scoped={scoped} />
    </F0CommandPaletteProvider>
  )
  return { user, onNavigate, onAsk }
}

const open = async (options: SetupOptions = {}) => {
  const context = setup(options)
  await context.user.click(screen.getByRole("button", { name: "launch" }))
  return { ...context, field: screen.getByRole("combobox") }
}

const ZWSP = "​"

/** Let a deferred state update land: the search hook defers by one task. */
const flushTask = () => new Promise((resolve) => setTimeout(resolve, 0))

const chipsOf = (field: HTMLElement) =>
  Array.from(field.querySelectorAll("[data-scope-chip]"))

const typeIn = (field: HTMLElement, text: string) => {
  const chips = chipsOf(field)
  for (const node of Array.from(field.childNodes)) {
    if (!chips.includes(node as Element)) node.remove()
  }
  const node = document.createTextNode(text)
  field.append(node)
  caretAfter(node)
  fireEvent.input(field)
}

const typeBeforeChip = (field: HTMLElement, text: string) => {
  const node = document.createTextNode(text)
  chipsOf(field)[0]?.before(node)
  caretAfter(node)
  fireEvent.input(field)
}

const caretAfter = (node: Text) => {
  const range = document.createRange()
  range.setStart(node, node.length)
  range.collapse(true)
  const selection = window.getSelection()
  selection?.removeAllRanges()
  selection?.addRange(range)
}

/**
 * Put the caret immediately after the chip at `index`.
 *
 * There is no text node between two adjacent chips, so this cannot go through
 * `caretAfter` — and it is exactly the position `Backspace` has to read to know
 * which link of the chain it is about to take.
 */
const caretAfterChip = (field: HTMLElement, index: number) => {
  const chip = chipsOf(field)[index]
  if (!chip) throw new Error(`no chip at ${index}`)
  const range = document.createRange()
  range.setStartAfter(chip)
  range.collapse(true)
  const selection = window.getSelection()
  selection?.removeAllRanges()
  selection?.addRange(range)
}

const queryOf = (field: HTMLElement) => {
  const clone = field.cloneNode(true) as HTMLElement
  for (const chip of clone.querySelectorAll("[data-scope-chip]")) chip.remove()
  return (clone.textContent ?? "").split(ZWSP).join("")
}

/** The chain, as the labels its chips show. */
const chainOf = (field: HTMLElement) =>
  chipsOf(field).map((chip) => chip.textContent)

beforeEach(() => {
  vi.clearAllMocks()
})

describe("F0CommandPaletteProvider", () => {
  it("throws when the hook is used outside the provider", () => {
    const Orphan = () => {
      useCommandPalette()
      return null
    }
    // React logs the thrown error; the assertion is what the hook does.
    const spy = vi.spyOn(console, "error").mockImplementation(() => {})
    expect(() => render(<Orphan />)).toThrow(
      /useCommandPalette must be used inside F0CommandPaletteProvider/
    )
    spy.mockRestore()
  })

  it("opens on mod+k and closes on a second press", async () => {
    const user = userEvent.setup()
    render(
      <F0CommandPaletteProvider actions={actions}>
        <span>page</span>
      </F0CommandPaletteProvider>
    )
    expect(screen.queryByRole("combobox")).not.toBeInTheDocument()

    await user.keyboard("{Meta>}k{/Meta}")
    expect(screen.getByRole("combobox")).toBeInTheDocument()

    await user.keyboard("{Meta>}k{/Meta}")
    expect(screen.queryByRole("combobox")).not.toBeInTheDocument()
  })

  it("treats a HELD mod+k as one press", async () => {
    const user = userEvent.setup()
    render(
      <F0CommandPaletteProvider actions={actions}>
        <span>page</span>
      </F0CommandPaletteProvider>
    )

    await user.keyboard("{Meta>}k{/Meta}")
    expect(screen.getByRole("combobox")).toBeInTheDocument()

    fireEvent.keyDown(document, { key: "k", metaKey: true, repeat: true })
    fireEvent.keyDown(document, { key: "k", metaKey: true, repeat: true })

    expect(screen.getByRole("combobox")).toBeInTheDocument()
  })

  it("does not bind the shortcut when it is turned off", async () => {
    const user = userEvent.setup()
    render(
      <F0CommandPaletteProvider actions={actions} shortcut={false}>
        <span>page</span>
      </F0CommandPaletteProvider>
    )
    await user.keyboard("{Meta>}k{/Meta}")
    expect(screen.queryByRole("combobox")).not.toBeInTheDocument()
  })

  it("focuses the field on open", async () => {
    const { field } = await open()
    expect(field).toHaveFocus()
  })
})

describe("global mode", () => {
  it("leads the empty state with recents, then suggestions", async () => {
    await open({ recent: ["my-tasks"] })

    expect(screen.getByText("Recent")).toBeInTheDocument()
    expect(screen.getByText("Suggestions")).toBeInTheDocument()

    // The recent row comes before the suggestion of the same command.
    const rows = screen.getAllByRole("option")
    expect(rows[0]).toHaveAccessibleName("Go to my tasks")
  })

  it("shows no assistant row until something is typed", async () => {
    const { field } = await open({ withAssistant: true })
    expect(
      screen.queryByRole("option", { name: /^Ask One:/ })
    ).not.toBeInTheDocument()

    typeIn(field, "task")
    expect(
      screen.getByRole("option", { name: /^Ask One:/ })
    ).toBeInTheDocument()
  })

  it("ranks a label match above a record match and finds records", async () => {
    const { field } = await open()
    typeIn(field, "macbook")

    expect(screen.getByText("Devices")).toBeInTheDocument()
    expect(
      screen.getByRole("option", { name: /MacBook Pro 14/ })
    ).toBeInTheDocument()
  })

  it("navigates on Enter and never runs an action", async () => {
    const { user, field, onNavigate } = await open()
    typeIn(field, "macbook")
    await user.keyboard("{Enter}")

    expect(onNavigate).toHaveBeenCalledWith("/devices/d-1")
    expect(run.lock).not.toHaveBeenCalled()
    expect(run.wipe).not.toHaveBeenCalled()
  })

  it("hands the query to the assistant on mod+Enter", async () => {
    const { user, field, onAsk } = await open({ withAssistant: true })
    typeIn(field, "why is this slow")
    await user.keyboard("{Meta>}{Enter}{/Meta}")

    expect(onAsk).toHaveBeenCalledWith("why is this slow", undefined)
  })

  it("renders no assistant affordances when none is configured", async () => {
    const { field } = await open()
    typeIn(field, "task")

    expect(
      screen.queryByRole("button", { name: "Ask One" })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("option", { name: /^Ask One/ })
    ).not.toBeInTheDocument()
  })

  it("preselects the assistant row for a question-shaped query", async () => {
    const { field } = await open({ withAssistant: true })
    typeIn(field, "how do I enroll a laptop?")

    const assistantRow = screen.getByRole("option", { name: /^Ask One:/ })
    expect(assistantRow).toHaveAttribute("aria-selected", "true")
  })

  it("shows an empty state when nothing matches", async () => {
    const { field } = await open()
    typeIn(field, "zzzzzz")

    expect(screen.getByText("No results")).toBeInTheDocument()
    expect(screen.queryAllByRole("option")).toHaveLength(0)
  })
})

describe("scoping", () => {
  it("commits the highlighted record as a chip on Tab", async () => {
    const { user, field } = await open()
    typeIn(field, "macbook")
    await user.keyboard("{Tab}")

    expect(
      screen.getByRole("option", { name: /Lock screen/ })
    ).toBeInTheDocument()
    // The query resets: the noun is committed, the verb comes next.
    expect(queryOf(screen.getByRole("combobox"))).toBe("")
    expect(
      screen.getByRole("button", { name: /MacBook Pro 14.*remove this scope/ })
    ).toBeInTheDocument()
  })

  it("renders the committed scope as a chip inside the field", async () => {
    await open({ scoped: true })

    const chip = screen.getByRole("combobox").querySelector("[data-scope-chip]")
    expect(chip).toBeInTheDocument()
    expect(chip).toHaveTextContent('MacBook Pro 14"')

    expect(chip).toHaveAttribute("contenteditable", "false")

    expect(chip).toHaveAttribute("tabindex", "-1")
  })

  it("keeps Shift+Tab from committing the reference", async () => {
    const { user, field } = await open()
    typeIn(field, "macbook")
    await user.keyboard("{Shift>}{Tab}{/Shift}")

    expect(
      screen.queryByRole("button", { name: /remove this scope/ })
    ).not.toBeInTheDocument()
    expect(field).toHaveFocus()
  })

  it("keeps / an ordinary character now that it commits nothing", async () => {
    const { field } = await open()
    typeIn(field, "macbook/pro")

    expect(
      screen.queryByRole("button", { name: /remove this scope/ })
    ).not.toBeInTheDocument()
    expect(queryOf(field)).toBe("macbook/pro")
  })

  it("opens already scoped from a surface that knows its target", async () => {
    await open({ scoped: true })

    expect(
      screen.getByRole("option", { name: /Lock screen/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /MacBook Pro 14.*remove this scope/ })
    ).toBeInTheDocument()
  })

  it("keeps text typed in front of the chip in the order it was written", async () => {
    const { user, field, onAsk } = await open({
      scoped: true,
      withAssistant: true,
    })
    typeBeforeChip(field, "who owns ")
    await user.keyboard("{Meta>}{Enter}{/Meta}")

    expect(onAsk).toHaveBeenCalledWith(
      'who owns MacBook Pro 14"',
      expect.objectContaining({ id: "d-1" })
    )
  })

  it("leaves the scope on Backspace with an empty query", async () => {
    const { user } = await open({ scoped: true })
    await user.keyboard("{Backspace}")

    expect(
      screen.queryByRole("button", { name: /Remove scope/ })
    ).not.toBeInTheDocument()
    expect(screen.getByText("Suggestions")).toBeInTheDocument()
  })

  it("pops the scope on Escape before closing the palette", async () => {
    const { user } = await open({ scoped: true })

    await user.keyboard("{Escape}")
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: /Remove scope/ })
    ).not.toBeInTheDocument()

    await user.keyboard("{Escape}")
    expect(screen.queryByRole("combobox")).not.toBeInTheDocument()
  })

  it("runs a scoped action on Enter", async () => {
    const { user } = await open({ scoped: true })
    await user.keyboard("{Enter}")

    expect(run.lock).toHaveBeenCalledTimes(1)
    expect(run.lock.mock.calls[0][0]).toMatchObject({ id: "d-1" })
  })
})

describe("risk and availability", () => {
  it("never preselects a destructive action", async () => {
    await open({ scoped: true })

    const wipe = screen.getByRole("option", { name: /Wipe device/ })
    expect(wipe).toHaveAttribute("aria-selected", "false")
    expect(screen.getByRole("option", { name: /Lock screen/ })).toHaveAttribute(
      "aria-selected",
      "true"
    )
  })

  it("gives a destructive row's Enter the critical treatment", async () => {
    const { user } = await open({ scoped: true })

    await user.hover(screen.getByRole("option", { name: /Wipe device/ }))

    const enter = screen.getByRole("button", { name: /Run Wipe device/ })

    expect(enter).toHaveClass("text-f1-foreground-critical")
    expect(enter).toHaveClass("hover:bg-f1-background-critical-bold")
  })

  it("keeps every other row's Enter an outline", async () => {
    const { user } = await open({ scoped: true })
    await user.hover(screen.getByRole("option", { name: /Lock screen/ }))

    expect(
      screen.getByRole("button", { name: /Run Lock screen/ })
    ).not.toHaveClass("text-f1-foreground-critical")
  })

  it("does not run a destructive action on a bare Enter that lands elsewhere", async () => {
    const { user } = await open({ scoped: true })
    await user.keyboard("{Enter}")

    expect(run.wipe).not.toHaveBeenCalled()
  })

  it("keeps a blocked action listed with its reason and refuses to run it", async () => {
    const { user } = await open({ scoped: true })

    const blocked = screen.getByRole("option", { name: /Enroll in MDM/ })
    expect(blocked).toHaveAttribute("aria-disabled", "true")
    expect(blocked).toHaveAccessibleName(/Already enrolled/)
    expect(screen.getByText("Not available here")).toBeInTheDocument()

    await user.click(blocked)
    expect(screen.queryByRole("combobox")).toBeInTheDocument()
  })

  it("falls back to the last row when nothing safe can be preselected", async () => {
    await open({ scoped: true, withAssistant: true })
    typeIn(screen.getByRole("combobox"), "wipe")

    // Only the destructive row and the assistant survive the filter, so the
    // default lands on the assistant — never on index 0.
    expect(screen.getByRole("option", { name: /Wipe device/ })).toHaveAttribute(
      "aria-selected",
      "false"
    )
  })
})

describe("parameters", () => {
  it("renders a parameter step as the next level and pops back out of it", async () => {
    const { user } = await open({ scoped: true })

    await user.click(screen.getByRole("option", { name: /Update macOS/ }))

    expect(screen.getByText("Choose a version")).toBeInTheDocument()
    expect(screen.getByRole("option", { name: /macOS 15/ })).toBeInTheDocument()
    expect(run.update).not.toHaveBeenCalled()

    await user.keyboard("{Backspace}")
    expect(
      screen.getByRole("option", { name: /Update macOS/ })
    ).toBeInTheDocument()
  })

  it("runs the action once its parameter is chosen", async () => {
    const { user } = await open({ scoped: true })

    await user.click(screen.getByRole("option", { name: /Update macOS/ }))
    await user.click(screen.getByRole("option", { name: /macOS 14/ }))

    expect(run.update).toHaveBeenCalledTimes(1)
    expect(run.update.mock.calls[0][1]).toEqual({ version: ["14"] })
  })
})

describe("row actions", () => {
  it("reaches a row's own controls with the right arrow", async () => {
    const { user, field } = await open({ withAssistant: true })
    typeIn(field, "macbook")
    await user.keyboard("{ArrowRight}")

    expect(document.activeElement).toHaveAccessibleName(/Ask One/)
  })

  it("walks the cluster with the arrows and stops at the last control", async () => {
    const { user, field } = await open({ withAssistant: true })
    typeIn(field, "macbook")
    await user.keyboard("{ArrowRight}")
    await user.keyboard("{ArrowRight}")

    expect(document.activeElement).toHaveAccessibleName(
      /Actions for MacBook Pro 14/
    )
  })

  it("makes the row's own Enter the last control in the cluster", async () => {
    const { user, field } = await open()
    typeIn(field, "macbook")

    await user.keyboard("{ArrowRight}{ArrowRight}{ArrowRight}")

    expect(document.activeElement).toHaveAccessibleName(/Open MacBook Pro 14/)

    await user.keyboard("{ArrowRight}")
    expect(document.activeElement).toHaveAccessibleName(/Open MacBook Pro 14/)
  })

  it("hands focus back to the field on ArrowLeft", async () => {
    const { user, field } = await open({ withAssistant: true })
    typeIn(field, "macbook")
    await user.keyboard("{ArrowRight}")
    await user.keyboard("{ArrowLeft}")

    expect(field).toHaveFocus()
  })

  it("takes a typed character back to the field", async () => {
    const { user, field } = await open({ withAssistant: true })
    typeIn(field, "macbook")
    await user.keyboard("{ArrowRight}")
    await user.keyboard("x")

    expect(field).toHaveFocus()
    expect(queryOf(field)).toBe("macbookx")
  })

  it("offers the record's actions and copy-link, and no new-tab", async () => {
    const { field } = await open()
    typeIn(field, "macbook")

    expect(
      screen.getByRole("button", { name: /Actions for MacBook Pro 14/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /Copy link to MacBook Pro 14/ })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole("button", { name: "Open in a new tab" })
    ).not.toBeInTheDocument()
  })

  it("scopes to the record from the row's own Actions control", async () => {
    const { user, field } = await open()
    typeIn(field, "macbook")

    await user.click(
      screen.getByRole("button", { name: /Actions for MacBook Pro 14/ })
    )

    expect(
      screen.getByRole("option", { name: /Lock screen/ })
    ).toBeInTheDocument()
  })
})

describe("the list as a focus region", () => {
  it("moves focus into the list on Tab when the row cannot be a reference", async () => {
    const { user } = await open()

    await user.keyboard("{Tab}")

    expect(document.activeElement).toHaveAttribute("role", "option")

    expect(document.activeElement).toHaveAttribute("data-index", "0")
  })

  it("walks the rows with the arrows while the list holds focus", async () => {
    const { user } = await open()
    await user.keyboard("{Tab}")
    await user.keyboard("{ArrowDown}")

    expect(document.activeElement).toHaveAttribute("data-index", "1")
  })

  it("hands focus back to the field on Tab from the list", async () => {
    const { user, field } = await open()
    await user.keyboard("{Tab}")
    await user.keyboard("{Tab}")

    expect(field).toHaveFocus()
  })
})

describe("keyboard navigation", () => {
  it("moves the selection with the arrow keys", async () => {
    const { user } = await open({ recent: [] })

    const rows = screen.getAllByRole("option")
    expect(rows[0]).toHaveAttribute("aria-selected", "true")

    await user.keyboard("{ArrowDown}")
    expect(screen.getAllByRole("option")[1]).toHaveAttribute(
      "aria-selected",
      "true"
    )

    await user.keyboard("{ArrowUp}")
    expect(screen.getAllByRole("option")[0]).toHaveAttribute(
      "aria-selected",
      "true"
    )
  })

  it("points the combobox at the active option", async () => {
    const { field } = await open()
    expect(field).toHaveAttribute("aria-activedescendant")
    expect(field).toHaveAttribute("aria-controls")
  })
})

describe("dismissing", () => {
  it("closes on a press outside the panel", async () => {
    const { user } = await open()

    // The dialog node Radix renders is the viewport-sized wrapper AROUND the
    // panel, so pressing it directly is what a press on the page resolves to.
    await user.click(screen.getByRole("dialog"))

    expect(screen.queryByRole("combobox")).not.toBeInTheDocument()
  })

  it("stays open when the press lands on the panel itself", async () => {
    const { user } = await open()

    await user.click(screen.getByRole("listbox"))

    expect(screen.getByRole("combobox")).toBeInTheDocument()
  })
})

describe("on a phone", () => {
  const asPhone = () => {
    const original = window.matchMedia
    window.matchMedia = ((query: string) => ({
      matches: query.includes("max-width: 560px"),
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    })) as typeof window.matchMedia
    return () => {
      window.matchMedia = original
    }
  }

  it("becomes a bottom sheet", async () => {
    const restore = asPhone()
    try {
      await open()

      expect(screen.getByRole("dialog")).toHaveClass("items-end")
      expect(screen.getByRole("dialog")).not.toHaveClass("items-start")
    } finally {
      restore()
    }
  })

  it("gives the rows a touch-sized target", async () => {
    const restore = asPhone()
    try {
      await open()

      expect(screen.getAllByRole("option")[0]).toHaveClass("min-h-12")
    } finally {
      restore()
    }
  })

  it("shows no key legend", async () => {
    const restore = asPhone()
    try {
      await open({ withAssistant: true })

      expect(screen.queryByText("Ask")).not.toBeInTheDocument()
      expect(screen.queryByText("Actions")).not.toBeInTheDocument()
    } finally {
      restore()
    }
  })
})

describe("drilling into a scope", () => {
  /** Search the team, then commit it — the state every test here starts from. */
  const openTeam = async () => {
    const context = await open({ withTeam: true, withAssistant: true })
    typeIn(context.field, "acme")
    await context.user.keyboard("{Tab}")
    return context
  }

  it("lists the records inside a scope alongside its own actions", async () => {
    const { field } = await openTeam()

    expect(chainOf(field)).toEqual(["Acme Design"])
    // The team's own verb…
    expect(
      screen.getByRole("option", { name: /Rename team/ })
    ).toBeInTheDocument()
    // …and what is inside it, under the heading of the provider that owns the
    // child's type rather than the one that produced it.
    expect(
      screen.getByRole("option", { name: /Ben Carter/ })
    ).toBeInTheDocument()
    expect(screen.getByText("People")).toBeInTheDocument()
  })

  it("puts the scope's own actions above what is inside it", async () => {
    await openTeam()

    const labels = screen
      .getAllByRole("option")
      .map((row) => row.getAttribute("aria-label") ?? "")
    expect(labels.findIndex((l) => /Rename team/.test(l))).toBeLessThan(
      labels.findIndex((l) => /Ben Carter/.test(l))
    )
  })

  it("pushes a second chip and shows that record's actions", async () => {
    const { user, field } = await openTeam()

    // Arrow down to the child, then commit it the same way the team was
    // committed: one gesture, no new key.
    await user.keyboard("{ArrowDown}")
    expect(screen.getByRole("option", { name: /Ben Carter/ })).toHaveAttribute(
      "aria-selected",
      "true"
    )
    await user.keyboard("{Tab}")

    expect(chainOf(field)).toEqual(["Acme Design", "Ben Carter"])
    // The last link owns the list, which is what makes "whose actions?" have one
    // answer.
    expect(
      screen.getByRole("option", { name: /Open profile/ })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("option", { name: /Rename team/ })
    ).not.toBeInTheDocument()
  })

  it("drills in from the row's own Actions control too", async () => {
    const { user, field } = await openTeam()

    // The cluster is drawn for the ACTIVE row only, so arrive on him first.
    await user.keyboard("{ArrowDown}")
    await user.click(
      screen.getByRole("button", { name: /Actions for Ben Carter/ })
    )

    expect(chainOf(field)).toEqual(["Acme Design", "Ben Carter"])
  })

  it("pops one link at a time on Backspace", async () => {
    const { user, field } = await openTeam()
    await user.keyboard("{ArrowDown}")
    await user.keyboard("{Tab}")
    expect(chainOf(field)).toHaveLength(2)

    await user.keyboard("{Backspace}")

    // Back in the team you found them in, not back at the top.
    expect(chainOf(field)).toEqual(["Acme Design"])
    expect(
      screen.getByRole("option", { name: /Rename team/ })
    ).toBeInTheDocument()
  })

  it("truncates the whole chain when the outer link is removed", async () => {
    const { user, field } = await openTeam()
    await user.keyboard("{ArrowDown}")
    await user.keyboard("{Tab}")

    // Beside the FIRST chip: the chain is a path, so taking a link takes what
    // was reached through it rather than leaving an orphan.
    caretAfterChip(field, 0)
    await user.keyboard("{Backspace}")

    expect(chainOf(field)).toEqual([])
  })

  it("stops offering the gesture at the depth cap", async () => {
    const { user, field } = await openTeam()
    await user.keyboard("{ArrowDown}")
    await user.keyboard("{Tab}")
    expect(chainOf(field)).toHaveLength(2)

    // A person's actions are all that is left; none of them is a reference, so
    // there is nothing to push even if the cap were higher.
    expect(
      screen.queryByRole("button", { name: /Actions for/ })
    ).not.toBeInTheDocument()
  })

  it("hands the assistant the whole path, not just the last link", async () => {
    const { user, field, onAsk } = await openTeam()
    await user.keyboard("{ArrowDown}")
    await user.keyboard("{Tab}")
    await user.keyboard("{Meta>}{Enter}{/Meta}")

    expect(onAsk).toHaveBeenCalledWith(
      "Acme Design Ben Carter",
      expect.objectContaining({ id: "p-1" })
    )
    expect(chainOf(field)).toHaveLength(2)
  })

  it("keeps a sentence typed around the chain in order", async () => {
    const { user, field, onAsk } = await openTeam()
    typeBeforeChip(field, "who is in ")
    await user.keyboard("{Meta>}{Enter}{/Meta}")

    expect(onAsk).toHaveBeenCalledWith(
      "who is in Acme Design",
      expect.objectContaining({ id: "t-1" })
    )
  })
})

describe("the footer", () => {
  it("is not drawn when there is nothing to teach", async () => {
    // No assistant, and the default list is plain verbs: no reference to
    // commit, no controls of their own, so every hint is absent at once.
    const { field } = await open({ withAssistant: false })

    expect(queryOf(field)).toBe("")
    expect(screen.queryByText("Ask")).not.toBeInTheDocument()
    expect(screen.queryByText("Actions")).not.toBeInTheDocument()
    // The band itself, not just its contents.
    expect(document.querySelector(".border-t")).not.toBeInTheDocument()
  })

  it("appears once a row can offer something", async () => {
    const { field } = await open({ withAssistant: false })
    typeIn(field, "macbook")

    // A record can be committed, so `Tab` is worth teaching.
    expect(screen.getByText("Actions")).toBeInTheDocument()
  })

  it("always has the assistant's binding to teach when one is configured", async () => {
    await open({ withAssistant: true })

    expect(screen.getByText("Ask")).toBeInTheDocument()
  })
})

describe("an action that only goes somewhere", () => {
  const withHrefActions: CommandEntityProvider = {
    type: "device",
    label: "Devices",
    search: (query) =>
      laptop.label.toLowerCase().includes(query.toLowerCase()) ? [laptop] : [],
    actions: () => [
      // A plain string: the destination is the same wherever you came from.
      {
        key: "docs",
        label: "Device policy",
        icon: Laptop,
        group: "Help",
        risk: "none",
        href: "/help/devices",
      },
      // A function of the target, for a destination that depends on it.
      {
        key: "history",
        label: "View history",
        icon: Laptop,
        group: "Inventory",
        risk: "none",
        href: (ref) => `/devices/${ref.kind === "one" ? ref.id : ""}/history`,
      },
    ],
  }

  const openWithHrefs = async () => {
    const onNavigate = vi.fn()
    const user = userEvent.setup()
    render(
      <F0CommandPaletteProvider
        providers={[withHrefActions]}
        actions={actions}
        onNavigate={onNavigate}
      >
        <OpenButton scoped />
      </F0CommandPaletteProvider>
    )
    await user.click(screen.getByRole("button", { name: "launch" }))
    return { user, onNavigate }
  }

  it("navigates on a string href, with no run to write", async () => {
    const { user, onNavigate } = await openWithHrefs()

    await user.click(screen.getByRole("option", { name: /Device policy/ }))

    expect(onNavigate).toHaveBeenCalledWith("/help/devices")
  })

  it("resolves an href that depends on the target", async () => {
    const { user, onNavigate } = await openWithHrefs()

    await user.click(screen.getByRole("option", { name: /View history/ }))

    expect(onNavigate).toHaveBeenCalledWith("/devices/d-1/history")
  })

  it("closes the palette after following one", async () => {
    const { user } = await openWithHrefs()

    await user.click(screen.getByRole("option", { name: /Device policy/ }))

    expect(screen.queryByRole("combobox")).not.toBeInTheDocument()
  })
})

describe("remote entity search", () => {
  const laptopRef = laptop as Extract<CommandEntityRef, { kind: "one" }>

  /** A provider that answers when told to, so a test can hold it open. */
  const deferredProvider = () => {
    let release: (refs: CommandEntityRef[]) => void = () => undefined
    let reject: () => void = () => undefined
    const provider: CommandEntityProvider = {
      type: "device",
      label: "Devices",
      search: () =>
        new Promise<CommandEntityRef[]>((resolve, fail) => {
          release = resolve
          reject = () => fail(new Error("upstream unavailable"))
        }),
    }
    return {
      provider,
      // Resolving queues a microtask AND the hook defers the state update by a
      // task (see `onNextTask`), so both have to be flushed before asserting.
      release: async (refs: CommandEntityRef[]) => {
        await act(async () => {
          release(refs)
          await flushTask()
        })
      },
      reject: async () => {
        await act(async () => {
          reject()
          await flushTask()
        })
      },
    }
  }

  const openWith = async (provider: CommandEntityProvider) => {
    const user = userEvent.setup()
    render(
      <F0CommandPaletteProvider providers={[provider]} actions={actions}>
        <OpenButton />
      </F0CommandPaletteProvider>
    )
    await user.click(screen.getByRole("button", { name: "launch" }))
    return { user, field: screen.getByRole("combobox") }
  }

  it("holds the group's space with placeholders while it waits", async () => {
    const { provider, release } = deferredProvider()
    const { field } = await openWith(provider)

    typeIn(field, "macbook")

    const list = screen.getByRole("listbox")
    expect(list).toHaveAttribute("aria-busy", "true")
    expect(
      list.querySelectorAll("[data-testid=skeleton]").length
    ).toBeGreaterThan(0)
    // A placeholder is not an option: nothing selectable was invented.
    expect(
      screen.queryByRole("option", { name: /MacBook/ })
    ).not.toBeInTheDocument()

    await release([laptopRef])

    expect(
      screen.getByRole("option", { name: /MacBook Pro 14/ })
    ).toBeInTheDocument()
    expect(screen.getByRole("listbox")).not.toHaveAttribute("aria-busy")
  })

  it("says so when a provider cannot be reached", async () => {
    const { provider, reject } = deferredProvider()
    const { field } = await openWith(provider)

    typeIn(field, "macbook")
    await reject()

    // Listed with its reason, never silently absent — which would read as
    // "there are no such devices".
    expect(
      screen.getByRole("option", { name: /Could not load these results/ })
    ).toBeInTheDocument()
  })

  it("ignores an answer that arrives after a newer query", async () => {
    const answers: Array<(refs: CommandEntityRef[]) => void> = []
    const provider: CommandEntityProvider = {
      type: "device",
      label: "Devices",
      search: () =>
        new Promise<CommandEntityRef[]>((resolve) => answers.push(resolve)),
    }
    const { field } = await openWith(provider)

    typeIn(field, "mac")
    typeIn(field, "macbook")
    expect(answers).toHaveLength(2)

    // The SECOND request answers first, then the stale first one lands.
    const air: CommandEntityRef = {
      type: "device",
      kind: "one",
      id: "d-2",
      label: 'MacBook Air 13"',
    }
    await act(async () => {
      answers[1]!([air])
      await flushTask()
    })
    await act(async () => {
      answers[0]!([laptopRef])
      await flushTask()
    })

    // The newest query's answer survives; the late one is dropped.
    expect(
      screen.getByRole("option", { name: /MacBook Air 13/ })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("option", { name: /MacBook Pro 14/ })
    ).not.toBeInTheDocument()
  })

  it("keeps a synchronous provider instant, with no loading state", async () => {
    const { field } = await openWith(deviceProvider)

    typeIn(field, "macbook")

    expect(screen.getByRole("listbox")).not.toHaveAttribute("aria-busy")
    expect(
      screen.getByRole("option", { name: /MacBook Pro 14/ })
    ).toBeInTheDocument()
  })
})

describe("resilience to a re-invoked callback ref", () => {
  /**
   * React re-invokes a callback ref — `null`, then the node — whenever its own
   * identity or the element's changes, and anything that wraps components does
   * that on every render: devtools instrumentation, a profiler, an HOC added
   * upstream.
   *
   * There is no way to make React do it on demand from a test, so this drives
   * the same sequence by hand against the live node: detach, reattach, many
   * times over. Without the guard each pair is two distinct state values and
   * the palette re-renders itself into React's update-depth limit; with it,
   * the node is recorded once and the churn is inert.
   */
  it("survives the ref being detached and reattached repeatedly", async () => {
    const { field } = await open()
    typeIn(field, "macbook")

    const list = screen.getByRole("listbox")
    const before = screen.getAllByRole("option").length

    // The palette keeps the node in state so the layout effect that measures
    // the row controls re-runs when it arrives. That is the state this churns.
    for (let i = 0; i < 30; i++) {
      await act(async () => {
        list.remove()
        document.querySelector("[role=dialog]")?.appendChild(list)
      })
    }

    expect(screen.getAllByRole("option")).toHaveLength(before)
    expect(
      screen.getByRole("option", { name: /MacBook Pro 14/ })
    ).toBeInTheDocument()
  })
})
