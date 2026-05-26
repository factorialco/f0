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
  it("renders one outline trigger per group", () => {
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
      />
    )

    expect(screen.getByRole("button", { name: /analyze/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /find/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /create/i })).toBeInTheDocument()
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

    await user.click(screen.getByRole("button", { name: /analyze/i }))

    expect(
      await screen.findByRole("button", { name: /april leave and overtime/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /current gross salary/i })
    ).toBeInTheDocument()
  })

  it("calls onItemClick with the item and closes the popover", async () => {
    const user = userEvent.setup()
    const onItemClick = vi.fn()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={onItemClick}
      />
    )

    await user.click(screen.getByRole("button", { name: /analyze/i }))
    const item = await screen.findByRole("button", {
      name: /april leave and overtime/i,
    })
    await user.click(item)

    expect(onItemClick).toHaveBeenCalledTimes(1)
    expect(onItemClick).toHaveBeenCalledWith({
      title: "April leave and overtime summary",
    })

    expect(
      screen.queryByRole("button", { name: /april leave and overtime/i })
    ).not.toBeInTheDocument()
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
})
