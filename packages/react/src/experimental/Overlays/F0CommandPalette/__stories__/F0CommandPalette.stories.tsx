import type { Meta, StoryObj } from "@storybook/react-vite"

import { useEffect, type ReactNode } from "react"
import { expect, userEvent, waitFor, within } from "storybook/test"

import { F0Button } from "@/components/F0Button"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0OneIcon } from "@/kits/ai/F0OneIcon"
import {
  Calendar,
  CheckCircleLine,
  Delete,
  Download,
  Laptop,
  LockLocked,
  Person,
  Plus,
  Receipt,
  Settings,
} from "@/icons/app"
import NewHomeLayoutStories, {
  Default as NewHomeLayoutDefault,
} from "@/sds/Home/NewHomeLayout/index.stories"

import { F0CommandPaletteProvider, useCommandPalette } from ".."
import type {
  CommandAction,
  CommandEntityProvider,
  CommandEntityRef,
  CommandNavigationItem,
  F0CommandPaletteProviderProps,
} from "../types"

/* ── The mock world every story searches ──────────────────────────────────── */

/** Narrowed to single records, so a story can read `.id` without narrowing. */
type CommandEntityRecord = Extract<CommandEntityRef, { kind: "one" }>

const people: CommandEntityRecord[] = [
  {
    type: "person",
    kind: "one",
    id: "p-1",
    label: "Ben Carter",
    sublabel: "Engineering · Barcelona",
    avatar: { firstName: "Ben", lastName: "Carter" },
    href: "/people/p-1",
  },
  {
    type: "person",
    kind: "one",
    id: "p-2",
    label: "Nadia Osei",
    sublabel: "People Ops · Remote",
    avatar: { firstName: "Nadia", lastName: "Osei" },
    href: "/people/p-2",
  },
]

const devices: CommandEntityRecord[] = [
  {
    type: "device",
    kind: "one",
    id: "d-1",
    label: 'MacBook Pro 14"',
    sublabel: "Ben Carter · C02X",
    icon: Laptop,
    href: "/devices/d-1",
  },
  {
    type: "device",
    kind: "one",
    id: "d-2",
    label: 'MacBook Air 13"',
    sublabel: "Nadia Osei · FVFZ",
    icon: Laptop,
    href: "/devices/d-2",
  },
]

/** A selection, the shape a bulk bar hands over. */
const deviceSelection: CommandEntityRef = {
  type: "device",
  kind: "many",
  ids: ["d-1", "d-2", "d-3", "d-4"],
  label: "4 devices",
  icon: Laptop,
}

const matches = (ref: CommandEntityRef, query: string) =>
  `${ref.label} ${ref.kind === "one" ? (ref.sublabel ?? "") : ""}`
    .toLowerCase()
    .includes(query.toLowerCase())

/**
 * A domain with records but NO actions yet — a valid state. Its people stay
 * findable and openable, they are just not scopable, so `/` does nothing on
 * them rather than opening an empty list.
 */
const peopleProvider: CommandEntityProvider = {
  type: "person",
  label: "People",
  search: (query, limit) =>
    people.filter((person) => matches(person, query)).slice(0, limit),
}

/** A domain that has adopted the registry: its records are actionable. */
const deviceProvider: CommandEntityProvider = {
  type: "device",
  label: "Devices",
  search: (query, limit) =>
    devices.filter((device) => matches(device, query)).slice(0, limit),
  actions: () => [
    {
      key: "lock",
      label: "Lock screen",
      description: "Locks immediately and asks for the passcode",
      icon: LockLocked,
      group: "Security",
      risk: "none",
      suggested: () => true,
      run: () => undefined,
    },
    {
      key: "collect-logs",
      label: "Collect diagnostics",
      icon: Download,
      group: "Maintenance",
      badge: "Script",
      risk: "none",
      keywords: "logs sysdiagnose support bundle",
      run: () => undefined,
    },
    {
      key: "update",
      label: "Update macOS",
      icon: Settings,
      group: "Maintenance",
      risk: "confirm",
      // The parameter becomes the palette's next level rather than a dialog.
      params: [
        {
          key: "version",
          label: "Choose a version",
          options: () => [
            { value: "15.3", label: "macOS 15.3", sublabel: "Latest" },
            { value: "15.2", label: "macOS 15.2" },
            { value: "14.7", label: "macOS 14.7", sublabel: "Previous major" },
          ],
        },
      ],
      run: () => undefined,
    },
    {
      key: "reassign",
      label: "Reassign owner",
      icon: Person,
      group: "Inventory",
      risk: "none",
      params: [
        {
          key: "owner",
          label: "Choose an owner",
          options: () =>
            people.map((person) => ({
              value: person.id,
              label: person.label,
              sublabel: person.sublabel,
              avatar: person.avatar,
            })),
        },
      ],
      run: () => undefined,
    },
    {
      key: "enroll",
      label: "Enroll in MDM",
      icon: CheckCircleLine,
      group: "Lifecycle",
      risk: "none",
      // Gated, so it stays listed WITH its reason instead of disappearing.
      availability: () => ({
        disabled: true,
        reason: "Already enrolled since March",
      }),
      run: () => undefined,
    },
    {
      key: "wipe",
      label: "Wipe device",
      description: "Erases everything. This can't be undone",
      icon: Delete,
      group: "Lifecycle",
      risk: "danger",
      // The eligible/skipped split, stated on the row before the commit.
      impact: (target) =>
        target.kind === "many"
          ? {
              eligible: 3,
              total: target.ids.length,
              skipped: 1,
              reason: "1 is already wiped",
            }
          : undefined,
      run: () => undefined,
    },
  ],
}

const actions: CommandAction[] = [
  {
    id: "new-task",
    label: "Create a task",
    icon: Plus,
    keywords: "new ticket",
    href: "/tasks/new",
  },
  {
    id: "my-tasks",
    label: "Go to my tasks",
    icon: CheckCircleLine,
    keywords: "assigned pending",
    href: "/tasks?scope=mine",
  },
  {
    id: "time-off",
    label: "Request time off",
    icon: Calendar,
    keywords: "holiday absence vacation",
    href: "/time-off/new",
  },
  {
    id: "expenses",
    label: "Submit an expense",
    icon: Receipt,
    keywords: "invoice receipt reimburse",
    href: "/expenses/new",
  },
]

const navigation: CommandNavigationItem[] = [
  { id: "nav-people", label: "People", href: "/people" },
  { id: "nav-devices", label: "Devices", href: "/devices" },
  { id: "nav-time", label: "Time off", href: "/time-off" },
  { id: "nav-settings", label: "Settings", href: "/settings" },
]

const baseConfig: Omit<F0CommandPaletteProviderProps, "children"> = {
  providers: [peopleProvider, deviceProvider],
  actions,
  navigation,
  recent: ["my-tasks", "nav-settings"],
  assistant: {
    label: "Ask One",
    icon: F0OneIcon,
    onAsk: () => undefined,
  },
  onNavigate: () => undefined,
}

/* ── Story scaffolding ────────────────────────────────────────────────────── */

/** Opens the palette, and gives a story something to open it FROM. */
const Launcher = ({ scope }: { scope?: CommandEntityRef }) => {
  const palette = useCommandPalette()
  return (
    <F0Button
      label={scope ? `Actions for ${scope.label}` : "Open the palette"}
      variant="outline"
      onClick={() => (scope ? palette.openScoped(scope) : palette.open())}
    />
  )
}

/**
 * Opens the palette on mount, so a showcase story shows the panel rather than
 * the button that opens it. It goes through the same public hook a real app
 * would — `open` as a controlled prop cannot carry a scope, and a snapshot of
 * the scoped list is the whole point of one of these.
 */
const AutoOpen = ({ scope }: { scope?: CommandEntityRef }) => {
  const palette = useCommandPalette()

  useEffect(() => {
    if (scope) palette.openScoped(scope)
    else palette.open()
    // Once, on mount: re-running on every render would fight the reader closing it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

type StoryArgs = Omit<F0CommandPaletteProviderProps, "children"> & {
  /** Open the scoped entry point rather than the plain one. */
  scope?: CommandEntityRef
  children?: ReactNode
}

const meta = {
  title: "F0CommandPalette",
  // !autodocs is required to opt out — autodocs is enabled globally in
  // .storybook/preview.tsx, so dropping the tag alone has no effect. The Docs
  // tab is the MDX file beside this one.
  tags: ["!autodocs", "experimental"],
  parameters: {
    layout: "centered",
    a11y: { test: "error" },
  },
  args: baseConfig,
  render: ({ scope, ...config }: StoryArgs) => (
    <F0CommandPaletteProvider {...config}>
      <Launcher scope={scope} />
    </F0CommandPaletteProvider>
  ),
} satisfies Meta<StoryArgs>

export default meta
type Story = StoryObj<StoryArgs>

/**
 * Opens the palette and waits until the panel has actually ARRIVED.
 *
 * The entry animation fades from `opacity: 0` over 400ms, so an assertion
 * landing on the frame the click produced sees an element that is in the DOM but
 * not yet visible. Every play function goes through here, and every later
 * visibility assertion goes through `waitFor`, for the same reason.
 */
const openPalette = async (
  canvasElement: HTMLElement,
  name: string | RegExp = "Open the palette"
) => {
  await userEvent.click(within(canvasElement).getByRole("button", { name }))

  const body = within(document.body)
  const input = await body.findByRole("combobox")
  await waitFor(() => expect(input).toBeVisible())

  return { body, input }
}

/**
 * The launcher. `mod+K` opens it from anywhere, and so does the button.
 *
 * On an empty query it leads with what you were just doing, then what you might
 * do. There is no assistant row here on purpose: an offer nobody asked for is an
 * advert, and the bar button already carries that affordance without taking a
 * result's slot.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const { body, input } = await openPalette(canvasElement)

    await expect(input).toHaveFocus()
    await waitFor(() => expect(body.getByText("Recent")).toBeVisible())
    await waitFor(() => expect(body.getByText("Suggestions")).toBeVisible())
  },
}

/**
 * Typing searches everything at once: commands first, then records from every
 * provider, then destinations, and the assistant last — where the eye arrives
 * when nothing above it fit.
 *
 * Matching is fuzzy and accent-insensitive, and a hit on the LABEL always
 * outranks one on a synonym.
 */
export const Searching: Story = {
  play: async ({ canvasElement }) => {
    const { body, input } = await openPalette(canvasElement)
    await userEvent.type(input, "mac")

    await waitFor(() => expect(body.getByText("Devices")).toBeVisible())
    await waitFor(() =>
      expect(body.getByRole("option", { name: /MacBook Pro 14/ })).toBeVisible()
    )
  },
}

/**
 * `/` commits the highlighted record into the bar and turns the list into that
 * record's actions.
 *
 * The scope reads as the first words of the sentence being written, in the
 * input's own type — not as a tag. `Enter` on a record still navigates and never
 * executes; scoping is a separate gesture precisely so that stays true.
 */
export const ScopedToARecord: Story = {
  play: async ({ canvasElement }) => {
    const { body, input } = await openPalette(canvasElement)
    await userEvent.type(input, "macbook pro")

    // The record has to be the highlighted row before `/` means anything.
    await waitFor(() =>
      expect(
        body.getByRole("option", { name: /MacBook Pro 14/ })
      ).toHaveAttribute("aria-selected", "true")
    )
    await userEvent.keyboard("/")

    await waitFor(() =>
      expect(body.getByRole("option", { name: /Lock screen/ })).toBeVisible()
    )
    // The noun is committed, so the query resets and the verb comes next.
    await expect(input).toHaveValue("")
    // Suggested floats to the top on an empty query; the destructive row is
    // never the default.
    await expect(body.getByText("Suggested")).toBeVisible()
    await expect(
      body.getByRole("option", { name: /Wipe device/ })
    ).toHaveAttribute("aria-selected", "false")
  },
}

/**
 * The entry point every surface that already knows its target should use: a row
 * menu, a bulk bar, a detail header. `openScoped(ref)` opens with the scope
 * pre-filled, so the only thing left to do is name the verb.
 *
 * Note what the rows say about a SELECTION: "Wipe device" reports `3 of 4 · 1 is
 * already wiped` before the commit, rather than discovering it in a confirm
 * dialog afterwards.
 */
export const OpenedAlreadyScoped: Story = {
  args: { scope: deviceSelection },
  play: async ({ canvasElement }) => {
    const { body } = await openPalette(canvasElement, /Actions for 4 devices/)

    await waitFor(() =>
      expect(body.getByText(/3 of 4 · 1 is already wiped/)).toBeVisible()
    )
  },
}

/**
 * An action that still needs a value collects it as the NEXT LEVEL of the
 * palette rather than in a dialog. `Backspace` on an empty query walks back out
 * of the level, and out of the scope after that.
 */
export const CollectingAParameter: Story = {
  args: { scope: devices[0] },
  play: async ({ canvasElement }) => {
    const { body } = await openPalette(canvasElement, /Actions for MacBook Pro/)

    await userEvent.click(
      await body.findByRole("option", { name: /Reassign owner/ })
    )

    await waitFor(() => expect(body.getByText("Choose an owner")).toBeVisible())
    await expect(body.getByRole("option", { name: /Nadia Osei/ })).toBeVisible()
  },
}

/**
 * With no `assistant`, the bar button, the trailing row and the `mod+Enter`
 * binding all disappear rather than degrading into dead affordances. The palette
 * is a launcher on its own; the assistant is an addition, not a dependency.
 */
export const WithoutAnAssistant: Story = {
  args: { assistant: undefined },
  play: async ({ canvasElement }) => {
    const { body, input } = await openPalette(canvasElement)
    await userEvent.type(input, "task")

    await waitFor(() =>
      expect(body.getByRole("option", { name: /Create a task/ })).toBeVisible()
    )
    await expect(body.queryByRole("button", { name: "Ask One" })).toBeNull()
    await expect(body.queryByRole("option", { name: /^Ask One/ })).toBeNull()
  },
}

/**
 * Nothing matched — and note the `assistant: undefined`, because that is the only
 * way to get here.
 *
 * With an assistant configured the list is NEVER empty: its row survives every
 * query, so "nothing matched" resolves to "ask instead" rather than to a dead
 * end. This state is what remains when the palette is a pure launcher.
 */
export const NoResults: Story = {
  args: { assistant: undefined },
  play: async ({ canvasElement }) => {
    const { body, input } = await openPalette(canvasElement)
    await userEvent.type(input, "qqqq")

    await waitFor(() => expect(body.getByText("No results")).toBeVisible())
    await expect(body.queryAllByRole("option")).toHaveLength(0)
  },
}

/**
 * The same query WITH an assistant: no empty state, because the way out is
 * always offered.
 */
export const NoMatchesWithAnAssistant: Story = {
  play: async ({ canvasElement }) => {
    const { body, input } = await openPalette(canvasElement)
    await userEvent.type(input, "qqqq")

    await waitFor(() =>
      expect(body.getByRole("option", { name: /^Ask One:/ })).toBeVisible()
    )
    await expect(body.queryByText("No results")).toBeNull()
  },
}

/**
 * Clicking the page outside the panel closes it — the overlay is transparent,
 * but it is still there to catch that press.
 */
export const ClosesOnOutsideClick: Story = {
  play: async ({ canvasElement }) => {
    const { input } = await openPalette(canvasElement)

    // Straight at the body, which is what a press on the page outside the panel
    // resolves to: the overlay is transparent but still mounted, and Radix hangs
    // the dismiss-on-outside-press off it.
    await userEvent.click(document.body)
    await waitFor(() => expect(input).not.toBeInTheDocument())
  },
}

/**
 * THE PALETTE WHERE IT ACTUALLY LIVES: over a real page, with the app frame,
 * the sidebar and Home behind it.
 *
 * This is the story to look at for the visual — the frosted panel only makes
 * sense against content, since it tints nothing and blurs ONLY the region behind
 * itself. It reuses `NewHomeLayout`'s own decorator and its `Default` render
 * rather than copying that page's mock data, so this background cannot drift
 * from the real Home.
 *
 * Axe runs here too, over the palette AND the page behind it — the one place
 * the component is checked in the context it actually ships in.
 */
export const OverTheHomePage: Story = {
  parameters: {
    layout: "fullscreen",
    docsFullWidth: true,
  },
  decorators: NewHomeLayoutStories.decorators,
  render: ({ scope, ...config }, context) => (
    <F0CommandPaletteProvider {...config}>
      <AutoOpen scope={scope} />
      {NewHomeLayoutDefault.render?.(
        NewHomeLayoutDefault.args ?? ({} as never),
        context as never
      )}
    </F0CommandPaletteProvider>
  ),
}

/**
 * VISUAL REGRESSION, not a layout to copy.
 *
 * One panel, in the state carrying the MOST chrome: scoped to a selection, so
 * the snapshot covers the scope in the bar, the group headings, an origin badge,
 * the suggested row at the top, the eligible/skipped impact line, the blocked
 * row and its reason at the bottom, the assistant row and the footer. The
 * palette is a single overlay by design, so one state per snapshot is all it can
 * honestly show.
 */
export const Snapshot: Story = {
  args: { scope: deviceSelection },
  parameters: withSnapshot({ layout: "fullscreen" }),
  tags: ["!test"],
  render: ({ scope, ...config }) => (
    <F0CommandPaletteProvider {...config}>
      <AutoOpen scope={scope} />
    </F0CommandPaletteProvider>
  ),
}
