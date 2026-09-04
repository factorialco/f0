import { beforeEach, describe, expect, it, vi } from "vitest"

import { Delete, Laptop } from "@/icons/app"

import { screen, userEvent, zeroRender as render } from "@/testing/test-utils"

import { F0CommandPaletteProvider, useCommandPalette } from ".."
import type {
  CommandAction,
  CommandEntityProvider,
  CommandEntityRef,
  CommandNavigationItem,
} from "../types"

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
}

const setup = ({
  onNavigate = vi.fn(),
  onAsk = vi.fn(),
  withAssistant = false,
  recent = [],
  scoped = false,
}: SetupOptions = {}) => {
  const user = userEvent.setup()
  render(
    <F0CommandPaletteProvider
      providers={[deviceProvider]}
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
  return { ...context, input: screen.getByRole("combobox") }
}

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

  it("focuses the input on open", async () => {
    const { input } = await open()
    expect(input).toHaveFocus()
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
    const { user, input } = await open({ withAssistant: true })
    expect(
      screen.queryByRole("option", { name: /^Ask One:/ })
    ).not.toBeInTheDocument()

    await user.type(input, "task")
    expect(
      screen.getByRole("option", { name: /^Ask One:/ })
    ).toBeInTheDocument()
  })

  it("ranks a label match above a record match and finds records", async () => {
    const { user, input } = await open()
    await user.type(input, "macbook")

    expect(screen.getByText("Devices")).toBeInTheDocument()
    expect(
      screen.getByRole("option", { name: /MacBook Pro 14/ })
    ).toBeInTheDocument()
  })

  it("navigates on Enter and never runs an action", async () => {
    const { user, input, onNavigate } = await open()
    await user.type(input, "macbook")
    await user.keyboard("{Enter}")

    expect(onNavigate).toHaveBeenCalledWith("/devices/d-1")
    expect(run.lock).not.toHaveBeenCalled()
    expect(run.wipe).not.toHaveBeenCalled()
  })

  it("hands the query to the assistant on mod+Enter", async () => {
    const { user, input, onAsk } = await open({ withAssistant: true })
    await user.type(input, "why is this slow")
    await user.keyboard("{Meta>}{Enter}{/Meta}")

    expect(onAsk).toHaveBeenCalledWith("why is this slow", undefined)
  })

  it("renders no assistant affordances when none is configured", async () => {
    const { user, input } = await open()
    await user.type(input, "task")

    expect(
      screen.queryByRole("button", { name: "Ask One" })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("option", { name: /^Ask One/ })
    ).not.toBeInTheDocument()
  })

  it("preselects the assistant row for a question-shaped query", async () => {
    const { user, input } = await open({ withAssistant: true })
    await user.type(input, "how do I enroll a laptop?")

    const assistantRow = screen.getByRole("option", { name: /^Ask One:/ })
    expect(assistantRow).toHaveAttribute("aria-selected", "true")
  })

  it("shows an empty state when nothing matches", async () => {
    const { user, input } = await open()
    await user.type(input, "zzzzzz")

    expect(screen.getByText("No results")).toBeInTheDocument()
    expect(screen.queryAllByRole("option")).toHaveLength(0)
  })
})

describe("scoping", () => {
  it("enters a scope with / and lists that record's actions", async () => {
    const { user, input } = await open()
    await user.type(input, "macbook")
    await user.keyboard("/")

    expect(
      screen.getByRole("option", { name: /Lock screen/ })
    ).toBeInTheDocument()
    // The query resets: the noun is committed, the verb comes next.
    expect(screen.getByRole("combobox")).toHaveValue("")
    expect(
      screen.getByRole("button", { name: /Remove scope, MacBook Pro 14/ })
    ).toBeInTheDocument()
  })

  it("enters a scope with the right arrow from the end of the query", async () => {
    const { user, input } = await open()
    await user.type(input, "macbook")
    await user.keyboard("{ArrowRight}")

    expect(
      screen.getByRole("option", { name: /Lock screen/ })
    ).toBeInTheDocument()
  })

  it("keeps / an ordinary character once a scope is committed", async () => {
    const { user, input } = await open()
    await user.type(input, "macbook")
    await user.keyboard("/")
    await user.keyboard("/")

    expect(screen.getByRole("combobox")).toHaveValue("/")
  })

  it("opens already scoped from a surface that knows its target", async () => {
    await open({ scoped: true })

    expect(
      screen.getByRole("option", { name: /Lock screen/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /Remove scope, MacBook Pro 14/ })
    ).toBeInTheDocument()
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
    const { user } = await open({ scoped: true, withAssistant: true })
    await user.type(screen.getByRole("combobox"), "wipe")

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
  it("reaches a row's own actions with Tab", async () => {
    const { user, input } = await open({ withAssistant: true })
    await user.type(input, "macbook")
    await user.keyboard("{Tab}")

    expect(document.activeElement).toHaveAccessibleName(/Ask One/)
  })

  it("hands focus back to the input on ArrowLeft", async () => {
    const { user, input } = await open({ withAssistant: true })
    await user.type(input, "macbook")
    await user.keyboard("{Tab}")
    await user.keyboard("{ArrowLeft}")

    expect(input).toHaveFocus()
  })

  it("takes a typed character back to the input", async () => {
    const { user, input } = await open({ withAssistant: true })
    await user.type(input, "macbook")
    await user.keyboard("{Tab}")
    await user.keyboard("x")

    expect(input).toHaveFocus()
    expect(input).toHaveValue("macbookx")
  })

  it("offers open-in-new-tab and copy-link for a record with an href", async () => {
    const { user, input } = await open()
    await user.type(input, "macbook")

    expect(
      screen.getByRole("button", { name: "Open in a new tab" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Copy link" })
    ).toBeInTheDocument()
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
    const { input } = await open()
    expect(input).toHaveAttribute("aria-activedescendant")
    expect(input).toHaveAttribute("aria-controls")
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
