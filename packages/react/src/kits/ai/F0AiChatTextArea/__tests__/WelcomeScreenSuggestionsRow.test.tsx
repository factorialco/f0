import { describe, expect, it, vi } from "vitest"

import { ChartVerticalBars, Pencil, Search } from "@/icons/app"
import { screen, userEvent, zeroRender } from "@/testing/test-utils"

import { type WelcomeScreenSuggestion } from "../../F0AiChat/types"
import { WelcomeScreenSuggestionsRow } from "../components/WelcomeScreenSuggestionsRow"

const groups: WelcomeScreenSuggestion[] = [
  {
    icon: ChartVerticalBars,
    label: "Analyze",
    items: [
      { title: "April leave and overtime summary" },
      { title: "Current gross salary by employee" },
    ],
  },
  {
    icon: Search,
    label: "Find",
    items: [
      { title: "Who's out of office this week?" },
      { title: "Engineers based in Barcelona" },
    ],
  },
  {
    icon: Pencil,
    label: "Create",
    items: [{ title: "Draft a job description" }],
  },
]

describe("WelcomeScreenSuggestionsRow", () => {
  it("renders one accessible popup trigger per group", () => {
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
      />
    )

    for (const name of ["Analyze", "Find", "Create"]) {
      const trigger = screen.getByRole("button", { name })
      expect(trigger).toHaveAttribute("aria-haspopup", "dialog")
      expect(trigger).toHaveAttribute("aria-expanded", "false")
      expect(trigger).not.toHaveAttribute("aria-controls")
    }
  })

  it("opens the popover with the group's items when the trigger is clicked", async () => {
    const user = userEvent.setup()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
      />
    )

    expect(
      screen.queryByRole("button", { name: /april leave and overtime/i })
    ).not.toBeInTheDocument()

    const trigger = screen.getByRole("button", { name: /analyze/i })
    await user.click(trigger)

    expect(
      await screen.findByRole("button", { name: /april leave and overtime/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /current gross salary/i })
    ).toBeInTheDocument()
    const popover = screen.getByRole("dialog", { name: /analyze/i })
    expect(trigger).toHaveAttribute("aria-expanded", "true")
    expect(trigger).toHaveAttribute("aria-controls", popover.id)
  })

  it("calls onItemClick with the item and its parent group, and closes the popover", async () => {
    const user = userEvent.setup()
    const onItemClick = vi.fn()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={onItemClick}
      />
    )

    const trigger = screen.getByRole("button", { name: /analyze/i })
    await user.click(trigger)
    const item = await screen.findByRole("button", {
      name: /april leave and overtime/i,
    })
    await user.click(item)

    expect(onItemClick).toHaveBeenCalledTimes(1)
    expect(onItemClick).toHaveBeenCalledWith(
      { title: "April leave and overtime summary" },
      groups[0]
    )

    expect(
      screen.queryByRole("button", { name: /april leave and overtime/i })
    ).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
  })

  it("preserves focus when onItemClick moves it outside the popover", async () => {
    const user = userEvent.setup()
    zeroRender(
      <>
        <input aria-label="Focused destination" />
        <WelcomeScreenSuggestionsRow
          suggestions={groups}
          onItemClick={() => {
            screen
              .getByRole("textbox", { name: /focused destination/i })
              .focus()
          }}
        />
      </>
    )

    await user.click(screen.getByRole("button", { name: /analyze/i }))
    await user.click(
      await screen.findByRole("button", {
        name: /april leave and overtime/i,
      })
    )

    expect(
      screen.getByRole("textbox", { name: /focused destination/i })
    ).toHaveFocus()
  })

  it("fires onItemHover while pointing at a row and clears on leave", async () => {
    const user = userEvent.setup()
    const onItemHover = vi.fn()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
        onItemHover={onItemHover}
      />
    )

    await user.click(screen.getByRole("button", { name: /analyze/i }))
    const item = await screen.findByRole("button", {
      name: /april leave and overtime/i,
    })

    await user.hover(item)
    expect(onItemHover).toHaveBeenLastCalledWith({
      title: "April leave and overtime summary",
    })

    await user.unhover(item)
    expect(onItemHover).toHaveBeenLastCalledWith(null)
  })

  it("opens the popover above the trigger by default", async () => {
    const user = userEvent.setup()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
      />
    )

    await user.click(screen.getByRole("button", { name: /analyze/i }))
    const item = await screen.findByRole("button", {
      name: /april leave and overtime/i,
    })
    expect(item.closest("[data-side]")).toHaveAttribute("data-side", "top")
  })

  it("opens the popover below the trigger when side is bottom", async () => {
    const user = userEvent.setup()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
        side="bottom"
      />
    )

    await user.click(screen.getByRole("button", { name: /analyze/i }))
    const item = await screen.findByRole("button", {
      name: /april leave and overtime/i,
    })
    expect(item.closest("[data-side]")).toHaveAttribute("data-side", "bottom")
  })

  it("switches popover content when another group is opened", async () => {
    const user = userEvent.setup()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
      />
    )

    await user.click(screen.getByRole("button", { name: /analyze/i }))
    expect(
      await screen.findByRole("button", { name: /april leave and overtime/i })
    ).toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: /find/i }))
    expect(
      await screen.findByRole("button", { name: /out of office this week/i })
    ).toBeInTheDocument()
  })

  // Regression: buttons used to be individual Radix PopoverTriggers, and only
  // the last-mounted one was registered as THE trigger — its built-in toggle
  // fired after the button's onClick, so switching TO the last group closed
  // the popover instead of showing it.
  it("switches to the last group while another group is open", async () => {
    const user = userEvent.setup()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
      />
    )

    const analyzeTrigger = screen.getByRole("button", { name: /analyze/i })
    await user.click(analyzeTrigger)
    expect(
      await screen.findByRole("button", { name: /april leave and overtime/i })
    ).toBeInTheDocument()

    const createTrigger = screen.getByRole("button", { name: /create/i })
    await user.click(createTrigger)
    expect(
      await screen.findByRole("button", { name: /draft a job description/i })
    ).toBeInTheDocument()
    const popover = screen.getByRole("dialog", { name: /create/i })
    expect(analyzeTrigger).toHaveAttribute("aria-expanded", "false")
    expect(analyzeTrigger).not.toHaveAttribute("aria-controls")
    expect(createTrigger).toHaveAttribute("aria-expanded", "true")
    expect(createTrigger).toHaveAttribute("aria-controls", popover.id)
  })

  it("switches back from the last group to another group", async () => {
    const user = userEvent.setup()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
      />
    )

    await user.click(screen.getByRole("button", { name: /create/i }))
    expect(
      await screen.findByRole("button", { name: /draft a job description/i })
    ).toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: /analyze/i }))
    expect(
      await screen.findByRole("button", { name: /april leave and overtime/i })
    ).toBeInTheDocument()
  })

  it("closes the popover when the open group's own tag is clicked", async () => {
    const user = userEvent.setup()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
      />
    )

    await user.click(screen.getByRole("button", { name: /analyze/i }))
    expect(
      await screen.findByRole("button", { name: /april leave and overtime/i })
    ).toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: /analyze/i }))
    expect(
      screen.queryByRole("button", { name: /april leave and overtime/i })
    ).not.toBeInTheDocument()
  })

  it("restores focus to the active group when Escape closes the popover", async () => {
    const user = userEvent.setup()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
      />
    )

    const trigger = screen.getByRole("button", { name: /analyze/i })
    await user.click(trigger)
    await screen.findByRole("dialog", { name: /analyze/i })

    await user.keyboard("{Escape}")

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    expect(trigger).toHaveAttribute("aria-expanded", "false")
    expect(trigger).toHaveFocus()
  })

  it("keeps focus on an outside target when it dismisses the popover", async () => {
    const user = userEvent.setup()
    zeroRender(
      <>
        <button type="button">Outside action</button>
        <WelcomeScreenSuggestionsRow
          suggestions={groups}
          onItemClick={() => {}}
        />
      </>
    )

    const trigger = screen.getByRole("button", { name: /analyze/i })
    await user.click(trigger)
    await screen.findByRole("dialog", { name: /analyze/i })

    const outsideTarget = screen.getByRole("button", {
      name: /outside action/i,
    })
    await user.click(outsideTarget)

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    expect(trigger).toHaveAttribute("aria-expanded", "false")
    expect(outsideTarget).toHaveFocus()
  })
})
