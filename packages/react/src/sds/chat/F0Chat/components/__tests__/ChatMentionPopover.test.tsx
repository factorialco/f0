import {
  forwardRef,
  startTransition,
  StrictMode,
  Suspense,
  useState,
} from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import {
  act,
  fireEvent,
  screen,
  zeroRender as render,
} from "@/testing/test-utils"
import {
  type MentionCandidate,
  type PopoverPosition,
} from "../../hooks/useMentions"
import { type F0ChatUser } from "../../types"
import {
  ChatMentionPopover,
  getChatMentionOptionId,
} from "../ChatMentionPopover"

/**
 * Rows are the only thing in the popover that renders `OneEllipsis` — one per
 * member row, two for the `@here` row — so recording its renders records row
 * renders without the test knowing whether a row is inline JSX or its own
 * component, which is what lets one test produce both the before and the after
 * number. Keeping the text says *which* rows re-rendered, not just how many.
 */
const rowRenders = vi.hoisted(() => ({ texts: [] as string[] }))

vi.mock("@/lib/OneEllipsis", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/OneEllipsis")>()
  const Counted = forwardRef<
    HTMLElement,
    React.ComponentProps<typeof actual.OneEllipsis>
  >((props, ref) => {
    rowRenders.texts.push(props.children)
    return <actual.OneEllipsis {...props} ref={ref} />
  })
  Counted.displayName = "CountedOneEllipsis"
  return { ...actual, OneEllipsis: Counted }
})

const LISTBOX_ID = "mention-listbox"
const EVERYONE_DESCRIPTION = "Notify everyone in this group"

const members: F0ChatUser[] = Array.from({ length: 50 }, (_, i) => ({
  id: `user-${i}`,
  name: `Member ${i}`,
}))

type Controls = {
  setQuery: (query: string) => void
  setSelectedIndex: (index: number) => void
}

let controls: Controls
const selections: MentionCandidate[] = []

/**
 * Stands in for `ChatComposer` + `useMentions`: a keystroke re-renders the
 * host, which hands the popover a fresh `results` array, fresh candidate
 * wrappers, a fresh `position` and a fresh `onSelect` — while the underlying
 * `F0ChatUser` objects keep their identity until a search resolves.
 */
function Harness({
  users = members,
  everyoneLabel,
  isLoading = false,
  isOpen = true,
}: {
  users?: F0ChatUser[]
  everyoneLabel?: string
  isLoading?: boolean
  isOpen?: boolean
}) {
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  controls = { setQuery, setSelectedIndex }

  const results: MentionCandidate[] = [
    ...(everyoneLabel
      ? [{ kind: "everyone" as const, label: everyoneLabel }]
      : []),
    ...users.map((user) => ({ kind: "user" as const, user })),
  ]
  const position: PopoverPosition = { left: 0, bottom: query.length }

  return (
    <ChatMentionPopover
      isOpen={isOpen}
      listboxId={LISTBOX_ID}
      results={results}
      isLoading={isLoading}
      selectedIndex={selectedIndex}
      position={position}
      onSelect={(candidate) => selections.push(candidate)}
      everyoneDescription={EVERYONE_DESCRIPTION}
    />
  )
}

beforeEach(() => {
  rowRenders.texts = []
  selections.length = 0
  controls = undefined as unknown as Controls
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe("ChatMentionPopover row render cost", () => {
  it("mounts one row per candidate", () => {
    render(<Harness />)

    expect(screen.getAllByRole("option")).toHaveLength(50)
    expect(rowRenders.texts).toHaveLength(50)
  })

  it("re-renders only the two rows the highlight moved between", () => {
    render(<Harness />)
    rowRenders.texts = []

    act(() => controls.setSelectedIndex(1))

    expect(rowRenders.texts).toEqual(["Member 0", "Member 1"])
  })

  it("re-renders no rows when a keystroke leaves the candidates unchanged", () => {
    render(<Harness everyoneLabel="here" />)
    rowRenders.texts = []

    act(() => controls.setQuery("An"))

    expect(rowRenders.texts).toEqual([])
  })

  it("re-renders no rows when the keystroke lands under StrictMode's double render", () => {
    render(
      <StrictMode>
        <Harness everyoneLabel="here" />
      </StrictMode>
    )
    rowRenders.texts = []

    act(() => controls.setQuery("An"))

    expect(rowRenders.texts).toEqual([])
  })

  it("drops the rows a narrower search removed and leaves the survivors alone", () => {
    const { rerender } = render(<Harness />)
    rowRenders.texts = []

    rerender(<Harness users={members.slice(0, 10)} />)

    expect(screen.getAllByRole("option")).toHaveLength(10)
    expect(rowRenders.texts).toEqual([])
  })

  it("still re-renders a row whose candidate the search replaced", () => {
    const { rerender } = render(<Harness users={members.slice(0, 10)} />)
    rowRenders.texts = []

    rerender(
      <Harness
        users={members
          .slice(0, 10)
          .map((user) => ({ ...user, name: `${user.name} (renamed)` }))}
      />
    )

    expect(rowRenders.texts).toHaveLength(10)
    expect(rowRenders.texts[0]).toBe("Member 0 (renamed)")
  })
})

describe("ChatMentionPopover committed-render safety", () => {
  /**
   * F0Chat is a library, so the host owns concurrency. A transition render that
   * suspends is thrown away: React keeps the committed rows on screen and never
   * runs that render's effects. The candidates the click path resolves against
   * have to follow the rows the user can see, so a click cannot insert someone
   * the popover never displayed.
   */
  it("selects a displayed candidate when a transition render is discarded", () => {
    let settled = false
    let release: () => void = () => {}
    const pending = new Promise<void>((resolve) => {
      release = () => {
        settled = true
        resolve()
      }
    })

    function Suspender({ suspend }: { suspend: boolean }) {
      if (suspend && !settled) {
        throw pending
      }
      return null
    }

    let search: () => void = () => {}

    function SuspendingHarness() {
      const [users, setUsers] = useState(members.slice(0, 3))
      const [suspend, setSuspend] = useState(false)
      search = () =>
        startTransition(() => {
          setUsers(members.slice(10, 13))
          setSuspend(true)
        })

      return (
        <Suspense fallback={<div data-testid="fallback" />}>
          <ChatMentionPopover
            isOpen
            listboxId={LISTBOX_ID}
            results={users.map((user) => ({ kind: "user" as const, user }))}
            isLoading={false}
            selectedIndex={0}
            position={{ left: 0, bottom: 0 }}
            onSelect={(candidate) => selections.push(candidate)}
            everyoneDescription={EVERYONE_DESCRIPTION}
          />
          <Suspender suspend={suspend} />
        </Suspense>
      )
    }

    render(<SuspendingHarness />)

    act(() => search())

    expect(screen.queryByTestId("fallback")).not.toBeInTheDocument()
    const options = screen.getAllByRole("option")
    expect(options[0]).toHaveTextContent("Member 0")

    fireEvent.mouseDown(options[0]!)

    expect(selections).toEqual([{ kind: "user", user: members[0] }])

    act(() => release())
  })

  it("leaves no option selected when a narrower search drops the highlighted row", () => {
    const scrolled: HTMLElement[] = []
    vi.spyOn(HTMLElement.prototype, "scrollIntoView").mockImplementation(
      function (this: HTMLElement) {
        scrolled.push(this)
      }
    )

    const { rerender } = render(<Harness users={members.slice(0, 5)} />)
    act(() => controls.setSelectedIndex(4))
    const dropped = screen.getAllByRole("option")[4]!
    scrolled.length = 0

    rerender(<Harness users={members.slice(0, 2)} />)

    expect(screen.getAllByRole("option")).toHaveLength(2)
    expect(screen.queryAllByRole("option", { selected: true })).toHaveLength(0)
    expect(scrolled).not.toContain(dropped)
  })
})

describe("ChatMentionPopover accessibility", () => {
  it("exposes the listbox and one option per candidate, in order, with the ids the composer points aria-activedescendant at", () => {
    render(<Harness users={members.slice(0, 3)} everyoneLabel="here" />)

    expect(screen.getByRole("listbox")).toHaveAttribute("id", LISTBOX_ID)

    const options = screen.getAllByRole("option")
    expect(options).toHaveLength(4)
    expect(options.map((option) => option.id)).toEqual([
      getChatMentionOptionId(LISTBOX_ID, { kind: "everyone", label: "here" }),
      ...members
        .slice(0, 3)
        .map((user) =>
          getChatMentionOptionId(LISTBOX_ID, { kind: "user", user })
        ),
    ])
    expect(options[0]).toHaveTextContent("here")
    expect(options[0]).toHaveTextContent(EVERYONE_DESCRIPTION)
    expect(options[1]).toHaveTextContent("Member 0")
    expect(options[3]).toHaveTextContent("Member 2")
  })

  it("marks exactly one option selected and moves it with the highlight", () => {
    render(<Harness users={members.slice(0, 3)} />)

    expect(screen.getAllByRole("option", { selected: true })).toHaveLength(1)
    expect(screen.getAllByRole("option")[0]).toHaveAttribute(
      "aria-selected",
      "true"
    )

    act(() => controls.setSelectedIndex(2))

    const options = screen.getAllByRole("option")
    expect(screen.getAllByRole("option", { selected: true })).toHaveLength(1)
    expect(options[0]).toHaveAttribute("aria-selected", "false")
    expect(options[2]).toHaveAttribute("aria-selected", "true")
  })

  it("scrolls the newly highlighted option into view, including when the highlight moves up", () => {
    const scrolled: HTMLElement[] = []
    vi.spyOn(HTMLElement.prototype, "scrollIntoView").mockImplementation(
      function (this: HTMLElement) {
        scrolled.push(this)
      }
    )

    render(<Harness users={members.slice(0, 5)} />)
    act(() => controls.setSelectedIndex(3))
    scrolled.length = 0

    act(() => controls.setSelectedIndex(1))

    expect(scrolled).toHaveLength(1)
    expect(scrolled[0]).toBe(screen.getAllByRole("option")[1])
  })

  it("selects the pointed-at candidate without taking focus off the textarea", () => {
    render(<Harness users={members.slice(0, 3)} everyoneLabel="here" />)

    const defaultAllowed = fireEvent.mouseDown(
      screen.getAllByRole("option")[2]!
    )

    expect(defaultAllowed).toBe(false)
    expect(selections).toEqual([{ kind: "user", user: members[1] }])
  })

  it("selects from the candidates on screen after a narrower search", () => {
    const { rerender } = render(
      <Harness users={members.slice(0, 5)} everyoneLabel="here" />
    )

    rerender(<Harness users={members.slice(2, 5)} everyoneLabel="here" />)
    fireEvent.mouseDown(screen.getAllByRole("option")[1]!)

    expect(selections).toEqual([{ kind: "user", user: members[2] }])
  })

  it("keeps loading skeletons out of the accessible option list", () => {
    render(<Harness users={[]} everyoneLabel="here" isLoading />)

    expect(screen.getAllByRole("option")).toHaveLength(1)
    const skeletons = screen.getAllByTestId("skeleton")
    expect(skeletons).toHaveLength(6)
    skeletons.forEach((skeleton) =>
      expect(skeleton.closest('[aria-hidden="true"]')).not.toBeNull()
    )
  })

  it("renders nothing when closed, or when nothing matches and nothing is loading", () => {
    const { rerender } = render(<Harness isOpen={false} />)
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()

    rerender(<Harness users={[]} />)
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
  })
})
