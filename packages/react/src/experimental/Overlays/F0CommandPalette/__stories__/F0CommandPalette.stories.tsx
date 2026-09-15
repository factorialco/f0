import type { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect, type ReactNode } from "react"
import { expect, userEvent, waitFor, within } from "storybook/test"
import { F0Button } from "@/components/F0Button"
import type {
  InFilterDefinition,
  PaginatedDataAdapter,
  PaginatedFetchOptions,
} from "@/hooks/datasource"
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
import { F0OneIcon } from "@/kits/ai/F0OneIcon"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import NewHomeLayoutStories, {
  Default as NewHomeLayoutDefault,
} from "@/sds/Home/NewHomeLayout/index.stories"
import { F0CommandPaletteProvider, useCommandPalette } from ".."
import { englishLabels } from "../labels.fixture"
import type {
  CommandAction,
  CommandEntityProvider,
  CommandEntityRef,
  CommandGroup,
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

const teams: CommandEntityRecord[] = [
  {
    type: "team",
    kind: "one",
    id: "t-1",
    label: "Acme Design",
    sublabel: "2 people",
    icon: Person,
  },
]

/**
 * Who is in which team. Fixture bookkeeping, deliberately NOT a field on the
 * ref: `CommandEntityRef` describes what the palette has to render, and a
 * provider's own data model stays its own business.
 */
const teamOf: Record<string, string> = { "p-1": "t-1", "p-2": "t-1" }

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

/**
 * A slow answer, faked with a timer over the SAME in-memory fixtures every
 * other story uses. No requests, nothing external, nothing to be offline for —
 * `setTimeout` is the whole mock, so the loading stories are as deterministic
 * as the instant ones.
 */
const afterDelay = <T,>(value: T, ms: number): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms))

const matches = (ref: CommandEntityRef, query: string) =>
  `${ref.label} ${ref.kind === "one" ? (ref.sublabel ?? "") : ""}`
    .toLowerCase()
    .includes(query.toLowerCase())

/** The domain a team's members resolve to: what can be done to a person. */
const peopleProvider: CommandEntityProvider = {
  type: "person",
  label: "People",
  search: (query, limit) =>
    people.filter((person) => matches(person, query)).slice(0, limit),
  actions: () => [
    {
      label: "Person",
      items: [
        {
          key: "time-off",
          label: "Request time off for them",
          icon: Calendar,
          risk: "none",
          suggested: () => true,
          run: () => undefined,
        },
      ],
    },
    {
      label: "Lifecycle",
      items: [
        {
          key: "offboard",
          label: "Start offboarding",
          description: "Revokes every access. This can't be undone",
          icon: Delete,
          risk: "danger",
          run: () => undefined,
        },
      ],
    },
  ],
}

/**
 * A CONTAINER: a record whose point is the records inside it.
 *
 * `inside` is what makes the palette able to narrow before it acts — search a
 * team, list its people, then act on one of them. The refs it returns are
 * `person`s, and the person provider above is what says what can be done to
 * one, so neither domain has to know about the other.
 */
const teamProvider: CommandEntityProvider = {
  type: "team",
  label: "Teams",
  search: (query, limit) =>
    teams.filter((entry) => matches(entry, query)).slice(0, limit),
  // BOTH under one heading, written once — the shape's whole point.
  actions: () => [
    {
      label: "Admin",
      items: [
        {
          key: "rename",
          label: "Rename team",
          icon: Settings,
          risk: "none",
          run: () => undefined,
        },
        // A DESTINATION, not a behaviour: `href` says so directly rather than
        // burying a route in a callback. A function of the target where the
        // destination depends on it, a plain string where it does not.
        {
          key: "directory",
          label: "Open the team directory",
          icon: Person,
          risk: "none",
          href: (ref) => `/teams/${ref.kind === "one" ? ref.id : ""}`,
        },
      ],
    },
  ],
  inside: (ref, query, limit) =>
    people
      .filter(
        (person) => teamOf[person.id] === (ref.kind === "one" ? ref.id : "")
      )
      .filter((person) => matches(person, query))
      .slice(0, limit),
}

/** A domain that has adopted the registry: its records are actionable. */
const deviceProvider: CommandEntityProvider = {
  type: "device",
  label: "Devices",
  search: (query, limit) =>
    devices.filter((device) => matches(device, query)).slice(0, limit),
  /**
   * Grouped by INTENT, and each heading written once.
   *
   * Two maintenance actions and two lifecycle ones share a heading here — under
   * the old shape that string appeared on every action that belonged to it.
   */
  actions: () => [
    {
      label: "Security",
      items: [
        {
          key: "lock",
          label: "Lock screen",
          description: "Locks immediately and asks for the passcode",
          icon: LockLocked,
          risk: "none",
          suggested: () => true,
          run: () => undefined,
        },
      ],
    },
    {
      label: "Maintenance",
      items: [
        {
          key: "collect-logs",
          label: "Collect diagnostics",
          icon: Download,
          badge: "Script",
          risk: "none",
          keywords: "logs sysdiagnose support bundle",
          run: () => undefined,
        },
        {
          key: "update",
          label: "Update macOS",
          icon: Settings,
          risk: "confirm",
          // The parameter becomes the palette's next level rather than a dialog.
          params: [
            {
              key: "version",
              label: "Choose a version",
              options: () => [
                { value: "15.3", label: "macOS 15.3", sublabel: "Latest" },
                { value: "15.2", label: "macOS 15.2" },
                {
                  value: "14.7",
                  label: "macOS 14.7",
                  sublabel: "Previous major",
                },
              ],
            },
          ],
          run: () => undefined,
        },
      ],
    },
    {
      label: "Inventory",
      items: [
        {
          key: "reassign",
          label: "Reassign owner",
          icon: Person,
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
      ],
    },
    {
      label: "Lifecycle",
      items: [
        {
          key: "enroll",
          label: "Enroll in MDM",
          icon: CheckCircleLine,
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

const destinations: CommandAction[] = [
  { id: "nav-people", label: "People", href: "/people" },
  { id: "nav-devices", label: "Devices", href: "/devices" },
  { id: "nav-time", label: "Time off", href: "/time-off" },
  { id: "nav-settings", label: "Settings", href: "/settings" },
]

/**
 * The whole list, in the order it appears: commands, then records, then
 * destinations.
 *
 * That order is DATA here, not a rule inside the palette. A product that wants
 * its people above its shortcuts writes them above its shortcuts, and the
 * heading over each group is the product's own word rather than one the
 * component invented — which is what "Actions" and "Go to" used to be.
 */
const groups: CommandGroup[] = [
  { label: "Actions", items: actions },
  { provider: teamProvider },
  { provider: peopleProvider },
  { provider: deviceProvider },
  { label: "Go to", items: destinations },
]

const baseConfig: Omit<F0CommandPaletteProviderProps, "children"> = {
  labels: englishLabels,
  groups,
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
    if (scope) {
      palette.openScoped(scope)
    } else {
      palette.open()
    }
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
  const field = await body.findByRole("combobox")
  await waitFor(() => expect(field).toBeVisible())

  return { body, field }
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
    const { body, field } = await openPalette(canvasElement)

    await expect(field).toHaveFocus()
    // "Recent" is the palette's own bucket, so it comes from `labels`. Every
    // other heading is the one the consumer wrote on its group.
    //
    // Scoped to the LISTBOX: the key legend also says "Actions", so a document
    // -wide `getByText` would be ambiguous the moment a row offers controls.
    await waitFor(() => expect(body.getByText("Recent")).toBeVisible())
    const list = () => within(body.getByRole("listbox"))
    await waitFor(() => expect(list().getByText("Actions")).toBeVisible())
    await waitFor(() => expect(list().getByText("Go to")).toBeVisible())
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
    const { body, field } = await openPalette(canvasElement)
    await userEvent.type(field, "mac")

    await waitFor(() => expect(body.getByText("Devices")).toBeVisible())
    await waitFor(() =>
      expect(body.getByRole("option", { name: /MacBook Pro 14/ })).toBeVisible()
    )
  },
}

/**
 * `Tab` commits the highlighted record into the field as a CHIP and turns the
 * list into that record's actions.
 *
 * The field is one editable box with the chip inline in it — a token field — so
 * `Tab` means there what it means in every token field: take the highlighted
 * suggestion and make it a token. `Enter` on a record still navigates and never
 * executes; committing is a separate gesture precisely so that stays true.
 */
export const ScopedToARecord: Story = {
  play: async ({ canvasElement }) => {
    const { body, field } = await openPalette(canvasElement)
    await userEvent.type(field, "macbook pro")

    await waitFor(() =>
      expect(
        body.getByRole("option", { name: /MacBook Pro 14/ })
      ).toHaveAttribute("aria-selected", "true")
    )
    await userEvent.keyboard("{Tab}")

    await waitFor(() =>
      expect(body.getByRole("option", { name: /Lock screen/ })).toBeVisible()
    )

    const chip = field.querySelector("[data-scope-chip]")
    await expect(chip).toBeVisible()
    await expect(chip).toHaveAttribute("contenteditable", "false")
    // Suggested floats to the top on an empty query; the destructive row is
    // never the default.
    await expect(body.getByText("Suggested")).toBeVisible()
    await expect(
      body.getByRole("option", { name: /Wipe device/ })
    ).toHaveAttribute("aria-selected", "false")
  },
}

/**
 * NARROWING BEFORE ACTING: search a team, list the people inside it, then act on
 * one of them.
 *
 * The chain is what makes this resolve. Two references sit in the field as
 * chips, and "whose actions?" still has one answer — the last link — which is
 * why drilling in works where two parallel subjects would not.
 *
 * `Tab` needs no new meaning: it pushes another link, the same gesture that
 * committed the first. `Backspace` pops one at a time, so backing out of a
 * person lands in the team you found them in rather than at the top. The chain
 * is capped at two: deeper than that stops being a reference and starts being
 * navigation, which the product has screens for.
 */
export const DrillingIntoATeam: Story = {
  play: async ({ canvasElement }) => {
    const { body, field } = await openPalette(canvasElement)
    await userEvent.type(field, "acme")

    await waitFor(() =>
      expect(body.getByRole("option", { name: /Acme Design/ })).toBeVisible()
    )
    await userEvent.keyboard("{Tab}")

    // Inside the team: its own verbs, then the people in it.
    await waitFor(() =>
      expect(body.getByRole("option", { name: /Rename team/ })).toBeVisible()
    )
    await expect(body.getByRole("option", { name: /Ben Carter/ })).toBeVisible()

    /*
      Down to a person and in again — the second link.

      Walked rather than counted: the team's own verbs come first, so a fixed
      number of presses breaks the moment the fixture gains an action. Arrowing
      until the person is highlighted says what the step means instead.
    */
    const selected = () =>
      body
        .getAllByRole("option")
        .find((row) => row.getAttribute("aria-selected") === "true")
        ?.getAttribute("aria-label") ?? ""
    for (let step = 0; step < 8 && !selected().includes("Ben Carter"); step++) {
      await userEvent.keyboard("{ArrowDown}")
    }
    await expect(
      body.getByRole("option", { name: /Ben Carter/ })
    ).toHaveAttribute("aria-selected", "true")

    await userEvent.keyboard("{Tab}")

    await waitFor(() =>
      expect(
        body.getByRole("option", { name: /Request time off for them/ })
      ).toBeVisible()
    )
    await expect(field.querySelectorAll("[data-scope-chip]")).toHaveLength(2)
  },
}

export const TypingAroundTheChip: Story = {
  args: { scope: devices[0] },
  play: async ({ canvasElement }) => {
    const { body, field } = await openPalette(
      canvasElement,
      /Actions for MacBook Pro/
    )

    await userEvent.type(field, "lock")
    await waitFor(() =>
      expect(body.getByRole("option", { name: /Lock screen/ })).toBeVisible()
    )

    // The chip survives typing rather than being edited into: it is one atom,
    // so the characters land beside it and not inside somebody's name.
    const chip = field.querySelector("[data-scope-chip]")
    await expect(chip).toBeVisible()
    await expect(chip).toHaveTextContent('MacBook Pro 14"')

    // Walking the caret PAST the chip and typing in front of it works in a
    // browser and cannot be driven from here: arrow keys move a caret as a
    // default action of a trusted event, and `userEvent` dispatches synthetic
    // ones — which is also why it reports `{Home}` as not implemented. The
    // typed order that behaviour guarantees is asserted in the unit tests,
    // where the selection can be placed directly.
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
    const { body, field } = await openPalette(canvasElement)
    await userEvent.type(field, "task")

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
    const { body, field } = await openPalette(canvasElement)
    await userEvent.type(field, "qqqq")

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
    const { body, field } = await openPalette(canvasElement)
    await userEvent.type(field, "qqqq")

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
    const { body, field } = await openPalette(canvasElement)

    // The dialog node Radix renders is the viewport-sized wrapper AROUND the
    // panel, so pressing it directly is what a press on the page resolves to.
    // Not the body: Radix sets `pointer-events: none` on it in modal mode, and
    // user-event refuses to click through that.
    await userEvent.click(body.getByRole("dialog"))
    await waitFor(() => expect(field).not.toBeInTheDocument())
  },
}

/**
 * ON A PHONE the palette is a BOTTOM SHEET, below F0's own dialog breakpoint
 * (560px) — the same width at which `F0Dialog` and `F0Drawer` become sheets, so
 * it changes shape where everything else in the product does.
 *
 * The field sits at the FOOT and the results run up from it: the thumb is at the
 * bottom of the device and so is the keyboard, so a panel under the eyeline puts
 * the field as far from both as the screen allows. Rows are 48px with the
 * context on a second line, because at 390px a label and its context cannot
 * share a line without one truncating to nothing — and the context is the half
 * that tells two similar records apart.
 *
 * There is no key legend: a centred row teaching `TAB` and `⌘↵` to a device with
 * neither is decoration that costs a row of the list. The gestures the phone
 * does have are visible controls on the rows instead.
 *
 * The play function below deliberately asserts NONE of that. The breakpoint is a
 * media query against the window, and the viewport addon resizes the preview
 * iframe in Storybook's own UI — where this story does render as a sheet — while
 * the test runner renders the story in a fixed-size page, so the query does not
 * match there. Asserting the sheet here would pass by describing the desktop
 * panel. The sheet's own rules are asserted in the unit tests instead, where
 * `matchMedia` can be answered directly; what runs here is the part that is true
 * at any width, plus axe.
 */
export const OnAPhone: Story = {
  parameters: {
    viewport: {
      options: {
        phone: { name: "Phone", styles: { width: "390px", height: "780px" } },
      },
    },
  },
  globals: { viewport: { value: "phone", isRotated: false } },
  play: async ({ canvasElement }) => {
    const { body, field } = await openPalette(canvasElement)
    await userEvent.type(field, "mac")

    await waitFor(() =>
      expect(body.getByRole("option", { name: /MacBook Pro 14/ })).toBeVisible()
    )
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

/* ── Remote providers, for the loading stories ─────────────────────────────── */

/** Answers slowly, the way an API does. */
const slowDeviceProvider: CommandEntityProvider = {
  ...deviceProvider,
  search: (query, limit) =>
    afterDelay(
      devices.filter((device) => matches(device, query)).slice(0, limit),
      1200
    ),
}

/** Answers quickly, so one group can land while another is still loading. */
const quickTeamProvider: CommandEntityProvider = {
  ...teamProvider,
  search: (query, limit) =>
    afterDelay(
      teams.filter((team) => matches(team, query)).slice(0, limit),
      150
    ),
}

/** Cannot be reached at all. */
const brokenAppProvider: CommandEntityProvider = {
  type: "app",
  label: "Apps",
  search: () => Promise.reject(new Error("upstream unavailable")),
}

/**
 * SEARCH CAN BE ASYNC, and the palette shows it.
 *
 * `search` may return a promise, and every other story in this file pretends
 * otherwise — they resolve from a local array, so nothing ever loads and every
 * result is instant. That is not what a module talking to an API looks like.
 *
 * Here `Devices` takes 1.2s, `Teams` takes 150ms, and `Apps` rejects — all
 * mocked in memory with a timer, so this story makes no requests. Each
 * domain shows its own state in its own group: skeleton rows hold the space a
 * result will fill, a group that has answered renders immediately rather than
 * waiting for its neighbours, and the one that failed says so instead of
 * contributing nothing — which would be indistinguishable from "there are no
 * apps called that".
 *
 * The palette does not debounce: it calls `search` on every query change and
 * applies only the newest answer, so a slow reply to `mac` can never overwrite
 * a fast one to `macbook`. A provider that wants fewer round trips debounces
 * inside its own `search`, since only it knows what one costs.
 */
export const LoadingAndFailingProviders: Story = {
  args: {
    groups: [
      { provider: quickTeamProvider },
      { provider: slowDeviceProvider },
      { provider: brokenAppProvider },
    ],
  },
  play: async ({ canvasElement }) => {
    const { body, field } = await openPalette(canvasElement)
    await userEvent.type(field, "a")

    // Placeholders first: the slow provider's space is held, not skipped.
    await waitFor(() =>
      expect(body.getByRole("listbox")).toHaveAttribute("aria-busy", "true")
    )
    await expect(
      body.getByRole("listbox").querySelectorAll("[data-testid=skeleton]")
        .length
    ).toBeGreaterThan(0)

    // Then the results, once the slowest has answered.
    await waitFor(
      () =>
        expect(
          body.getByRole("option", { name: /MacBook Pro 14/ })
        ).toBeVisible(),
      { timeout: 4000 }
    )
    await expect(body.getByRole("listbox")).not.toHaveAttribute("aria-busy")

    // And the domain that could not be reached explains itself.
    await expect(
      body.getByRole("option", { name: /Could not load these results/ })
    ).toBeVisible()
  },
}

/* ── A collection's own DataAdapter, reused by the palette ─────────────────── */

/**
 * The record a device COLLECTION renders — the domain's own shape, with the
 * domain's own field names. That the palette never sees it is the point: what
 * bridges the two is a mapping function, not a shared type.
 */
type DeviceRecord = {
  id: string
  name: string
  serial: string
  owner: string
}

const deviceRecords: DeviceRecord[] = [
  { id: "d-1", name: 'MacBook Pro 14"', serial: "C02X", owner: "Ben Carter" },
  { id: "d-2", name: 'MacBook Air 13"', serial: "FVFZ", owner: "Nadia Osei" },
  { id: "d-3", name: 'iPad Air 11"', serial: "DMPV", owner: "Ben Carter" },
]

type DeviceFilters = { owner: InFilterDefinition<string> }

/**
 * The adapter a device collection page already has, and the palette reuses.
 *
 * Written out here because a story has no app around it; in a real module it is
 * imported from wherever the collection lives. It answers over a timer against
 * the array above, so this story makes no requests.
 *
 * `satisfies` rather than a `:` annotation, and that is load-bearing. A
 * `DataAdapter`'s `fetchData` is DECLARED as three channels at once — a
 * response, a promise of one, or an observable of loading states — so annotating
 * the const widens the call site to that union and `answer.records` stops
 * type-checking. `satisfies` checks the object against the adapter contract
 * while keeping this `fetchData`'s own narrower type, which is a promise.
 */
const deviceCollectionAdapter = {
  paginationType: "pages",
  fetchData: ({
    search = "",
    filters,
    pagination,
  }: PaginatedFetchOptions<DeviceFilters>) => {
    const perPage = pagination.perPage ?? 20
    const page = pagination.currentPage ?? 1
    const owners = filters.owner
    const found = deviceRecords.filter(
      (record) =>
        (!owners?.length || owners.includes(record.owner)) &&
        `${record.name} ${record.owner} ${record.serial}`
          .toLowerCase()
          .includes(search.toLowerCase())
    )
    return afterDelay(
      {
        type: "pages" as const,
        records: found.slice((page - 1) * perPage, page * perPage),
        total: found.length,
        perPage,
        currentPage: page,
        pagesCount: Math.max(1, Math.ceil(found.length / perPage)),
      },
      900
    )
  },
} satisfies PaginatedDataAdapter<DeviceRecord, DeviceFilters>

/** The domain's record, as the palette needs to render it. */
const toDeviceRef = (record: DeviceRecord): CommandEntityRef => ({
  type: "device",
  kind: "one",
  id: record.id,
  label: record.name,
  sublabel: `${record.owner} · ${record.serial}`,
  icon: Laptop,
  href: `/devices/${record.id}`,
})

/**
 * A provider that is nothing but a translation layer over that adapter.
 *
 * Two mappings and no third thing: the palette's `(query, limit)` into fetch
 * options, and the collection's records into refs.
 */
const deviceProviderFromAdapter: CommandEntityProvider = {
  type: "device",
  label: "Devices",
  search: async (query, limit) => {
    const answer = await deviceCollectionAdapter.fetchData({
      // The WHOLE collection, not the reader's current view of it: a filter
      // they left on a list page is not something they asked the palette for.
      filters: {},
      // Unsorted, so the backend stays free to rank by relevance to `query`.
      sortings: [],
      search: query,
      // The palette's `limit` IS the page size — it wants a global top-N.
      pagination: { currentPage: 1, perPage: limit },
    })
    return answer.records.map(toDeviceRef)
  },
  actions: deviceProvider.actions,
}

/**
 * THE RECORDS CAN COME FROM A COLLECTION'S ADAPTER, and usually should.
 *
 * A domain that already renders a device list has an adapter carrying the
 * search its backend understands, and a second lookup written for the palette
 * is a second thing to keep in step. Reuse `fetchData` — but CALL it rather
 * than handing the adapter over, because the two ask different questions: a
 * collection asks for the current page of a list under the filters the reader
 * has set, and the palette asks for the best few records for a string across
 * everything.
 *
 * The loading states then come for free. The adapter is remote, so `search`
 * returns a promise, so the group holds its space with skeleton rows until it
 * lands and says so if it rejects — none of which this provider has to
 * implement. Nothing here is palette-specific except `toDeviceRef`.
 */
export const FromACollectionDataAdapter: Story = {
  args: {
    groups: [
      { provider: deviceProviderFromAdapter },
      { provider: peopleProvider },
    ],
  },
  play: async ({ canvasElement }) => {
    const { body, field } = await openPalette(canvasElement)
    await userEvent.type(field, "mac")

    // Remote, so the group loads before it lands.
    await waitFor(() =>
      expect(body.getByRole("listbox")).toHaveAttribute("aria-busy", "true")
    )

    // Then the adapter's records, rendered through `toDeviceRef`.
    await waitFor(
      () =>
        expect(
          body.getByRole("option", { name: /MacBook Pro 14/ })
        ).toBeVisible(),
      { timeout: 4000 }
    )
    await expect(body.getByRole("listbox")).not.toHaveAttribute("aria-busy")

    // The owner reached the row's sublabel, so the mapping ran, not a fixture.
    await expect(
      body.getByRole("option", { name: /Ben Carter · C02X/ })
    ).toBeVisible()
  },
}
