import { act, fireEvent, render, screen } from "@testing-library/react"
import { type ComponentProps, useState } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"
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
 * Every candidate row renders `OneEllipsis` and nothing else in the popover
 * does, so counting its renders counts row renders without the test having to
 * know whether a row is inline JSX or its own component.
 */
const rowRenders = { count: 0 }

vi.mock("@/lib/OneEllipsis", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/OneEllipsis")>()
  return {
    ...actual,
    OneEllipsis: (props: ComponentProps<typeof actual.OneEllipsis>) => {
      rowRenders.count++
      return <actual.OneEllipsis {...props} />
    },
  }
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
  rowRenders.count = 0
  selections.length = 0
})

describe("ChatMentionPopover row render cost", () => {
  it("mounts one row per candidate", () => {
    render(<Harness />)
    expect(screen.getAllByRole("option")).toHaveLength(50)
    expect(rowRenders.count).toBe(50)
  })

  it("re-renders only the two rows the highlight moved between", () => {
    render(<Harness />)
    rowRenders.count = 0

    act(() => controls.setSelectedIndex(1))

    expect(rowRenders.count).toBe(2)
  })

  it("re-renders no rows when a keystroke leaves the candidates unchanged", () => {
    render(<Harness />)
    rowRenders.count = 0

    act(() => controls.setQuery("An"))

    expect(rowRenders.count).toBe(0)
  })

  it("drops the rows a narrower search removed and leaves the survivors alone", () => {
    const { rerender } = render(<Harness />)
    rowRenders.count = 0

    rerender(<Harness users={members.slice(0, 10)} />)

    expect(screen.getAllByRole("option")).toHaveLength(10)
    expect(rowRenders.count).toBe(0)
  })

  it("still re-renders a row whose candidate the search replaced", () => {
    const { rerender } = render(<Harness users={members.slice(0, 10)} />)
    rowRenders.count = 0

    rerender(
      <Harness
        users={members
          .slice(0, 10)
          .map((user) => ({ ...user, name: `${user.name} (renamed)` }))}
      />
    )

    expect(rowRenders.count).toBe(10)
    expect(screen.getAllByRole("option")[0]).toHaveTextContent(
      "Member 0 (renamed)"
    )
  })
})

describe("ChatMentionPopover accessibility", () => {
  it("exposes the listbox and one option per candidate, in order, with the ids the composer points aria-activedescendant at", () => {
    render(<Harness users={members.slice(0, 3)} everyoneLabel="here" />)

    const listbox = screen.getByRole("listbox")
    expect(listbox).toHaveAttribute("id", LISTBOX_ID)

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
    const spy = vi
      .spyOn(HTMLElement.prototype, "scrollIntoView")
      .mockImplementation(function (this: HTMLElement) {
        scrolled.push(this)
      })

    render(<Harness users={members.slice(0, 5)} />)
    act(() => controls.setSelectedIndex(3))
    scrolled.length = 0

    act(() => controls.setSelectedIndex(1))

    expect(scrolled).toEqual([screen.getAllByRole("option")[1]])
    spy.mockRestore()
  })

  it("selects the pointed-at candidate without taking focus off the textarea", () => {
    render(<Harness users={members.slice(0, 3)} everyoneLabel="here" />)

    const defaultAllowed = fireEvent.mouseDown(
      screen.getAllByRole("option")[2]!
    )

    expect(defaultAllowed).toBe(false)
    expect(selections).toEqual([{ kind: "user", user: members[1] }])
  })

  it("keeps loading skeletons out of the accessible option list", () => {
    render(<Harness users={[]} everyoneLabel="here" isLoading />)

    expect(screen.getAllByRole("option")).toHaveLength(1)
    document
      .querySelectorAll('[aria-hidden="true"]')
      .forEach((skeleton) => expect(skeleton).toBeInTheDocument())
    expect(document.querySelectorAll('[aria-hidden="true"]')).toHaveLength(3)
  })

  it("renders nothing when closed, or when nothing matches and nothing is loading", () => {
    const { rerender } = render(<Harness isOpen={false} />)
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()

    rerender(<Harness users={[]} />)
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
  })
})
