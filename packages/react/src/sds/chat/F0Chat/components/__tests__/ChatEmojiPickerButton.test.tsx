import { userEvent } from "@testing-library/user-event"
import {
  type ComponentProps,
  createElement,
  forwardRef,
  type ReactNode,
  useRef,
} from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { screen, waitFor, zeroRender as render } from "@/testing/test-utils"

// jsdom has no layout: without the mock context Virtuoso renders no rows and
// there is no emoji to click.
vi.mock("react-virtuoso", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-virtuoso")>()
  const Mocked = forwardRef<
    unknown,
    ComponentProps<typeof actual.GroupedVirtuoso>
  >(function MockedGroupedVirtuoso(props, ref): ReactNode {
    return createElement(
      actual.VirtuosoMockContext.Provider,
      { value: { viewportHeight: 100_000, itemHeight: 32 } },
      createElement(actual.GroupedVirtuoso, { ...props, ref })
    )
  })
  return {
    ...actual,
    GroupedVirtuoso: Mocked as typeof actual.GroupedVirtuoso,
  }
})

const { ChatEmojiPickerButton } = await import("../ChatEmojiPickerButton")

/** The cell the search box points at — index 0 on open, so the first of the
 * frequently-used row. */
const activeOption = () =>
  document.getElementById(
    screen.getByRole("combobox").getAttribute("aria-activedescendant") ?? ""
  )

/**
 * Opens and picks the first cell.
 *
 * Deliberately no searching: F0SearchInput debounces and re-focuses the field
 * inside that timeout, which drops keystrokes under `userEvent`. This suite is
 * about where focus lands after a pick, and a fresh picker always opens on the
 * same seeded cell — 👍, the first of {@link DEFAULT_EMOJI_IDS}.
 */
const openAndPick = async () => {
  const user = userEvent.setup()
  await user.click(screen.getByRole("button", { name: "Add emoji" }))
  await waitFor(() => expect(activeOption()).toHaveAccessibleName("Thumbs Up"))
  await user.click(activeOption()!)
}

/** Stands in for the composer: takes the caret back after a pick. */
const ComposerHarness = ({ onSelect }: { onSelect: (e: string) => void }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  return (
    <>
      <textarea ref={textareaRef} aria-label="Message" />
      <ChatEmojiPickerButton
        label="Add emoji"
        onSelect={(emoji) => {
          onSelect(emoji)
          requestAnimationFrame(() => textareaRef.current?.focus())
        }}
      />
    </>
  )
}

beforeEach(() => {
  // The frequently-used row is persisted, and this suite depends on the picker
  // opening on its seeded first cell.
  localStorage.clear()
})

describe("ChatEmojiPickerButton", () => {
  it("hands focus back to the trigger after a pick, by default", async () => {
    const onSelect = vi.fn()
    render(<ChatEmojiPickerButton label="Add emoji" onSelect={onSelect} />)

    await openAndPick()

    expect(onSelect).toHaveBeenCalledWith("👍")
    // Right for the reaction pickers: the trigger is where you came from.
    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Add emoji" })).toHaveFocus()
    )
  })

  it("lets the composer keep the caret so you can carry on typing", async () => {
    const onSelect = vi.fn()
    render(<ComposerHarness onSelect={onSelect} />)

    await openAndPick()

    expect(onSelect).toHaveBeenCalledWith("👍")
    // The point of the whole thing: after picking, the caret is back in the
    // message box so you can carry on typing. Radix does restore the trigger on
    // close, but from a `setTimeout`, which runs before the next animation
    // frame — so the consumer's rAF has the last word.
    await waitFor(() => expect(screen.getByLabelText("Message")).toHaveFocus())
  })

  it("returns to the trigger on Escape, where nobody moved the caret", async () => {
    const user = userEvent.setup()
    render(<ComposerHarness onSelect={vi.fn()} />)

    const trigger = screen.getByRole("button", { name: "Add emoji" })
    await user.click(trigger)
    await user.keyboard("{Escape}")

    // Dismissing is not picking: nobody moved the caret, so the trigger is the
    // only sensible place for focus to land.
    await waitFor(() => expect(trigger).toHaveFocus())
  })
})
