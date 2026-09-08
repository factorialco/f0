import "@testing-library/jest-dom/vitest"
import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"
import { F0AiChatUsageLimitsButton } from "../F0AiChatUsageLimitsButton"

const openPopover = async () => {
  await userEvent.click(
    screen.getByRole("button", { name: /your usage limits/i })
  )
  return screen.findByRole("dialog")
}

describe("F0AiChatUsageLimitsButton", () => {
  it("names the ring trigger with the percentage used", () => {
    render(<F0AiChatUsageLimitsButton usage={{ usedPercentage: 30 }} />)

    expect(
      screen.getByRole("button", { name: "Your usage limits: 30% used" })
    ).toBeInTheDocument()
  })

  it("shows only the personal row for a plain employee", async () => {
    render(<F0AiChatUsageLimitsButton usage={{ usedPercentage: 30 }} />)
    const dialog = await openPopover()

    expect(dialog).toHaveTextContent("Your usage limits")
    expect(dialog).toHaveTextContent("30% used")
    expect(
      screen.queryByRole("button", { name: /your team/i })
    ).not.toBeInTheDocument()
    expect(screen.getAllByRole("progressbar")).toHaveLength(1)
  })

  it("renders the team link and extra sections for admins", async () => {
    const onSeeTeam = vi.fn()
    render(
      <F0AiChatUsageLimitsButton
        usage={{
          usedPercentage: 30,
          onSeeTeam,
          sections: [
            { id: "company", label: "Company pool", usedPercentage: 70 },
            { id: "current", label: "Current usage", usedPercentage: 12 },
          ],
        }}
      />
    )
    await openPopover()

    expect(screen.getByText("Company pool")).toBeInTheDocument()
    expect(screen.getByText("70% used")).toBeInTheDocument()
    expect(screen.getByText("12% used")).toBeInTheDocument()
    await userEvent.click(screen.getByRole("button", { name: /your team/i }))
    expect(onSeeTeam).toHaveBeenCalledTimes(1)
  })

  it("clamps percentages into 0–100 and exposes them on the bar", async () => {
    render(<F0AiChatUsageLimitsButton usage={{ usedPercentage: 137 }} />)
    await openPopover()

    const bar = screen.getByRole("progressbar", { name: "Your usage limits" })
    expect(bar).toHaveAttribute("aria-valuenow", "100")
    expect(screen.getByText("100% used")).toBeInTheDocument()
  })

  it("shows a skeleton while usage is loading and an error line on failure", async () => {
    const { rerender } = render(<F0AiChatUsageLimitsButton usage={null} />)
    const dialog = await openPopover()

    expect(dialog.querySelector("[aria-busy='true']")).not.toBeNull()

    rerender(<F0AiChatUsageLimitsButton usage={null} error />)
    expect(screen.getByText("Could not load usage")).toBeInTheDocument()
  })

  it("reports open and close so the host can refetch", async () => {
    const onOpenChange = vi.fn()
    render(
      <F0AiChatUsageLimitsButton
        usage={{ usedPercentage: 30 }}
        onOpenChange={onOpenChange}
      />
    )
    await openPopover()

    expect(onOpenChange).toHaveBeenCalledWith(true)
    await userEvent.keyboard("{Escape}")
    expect(onOpenChange).toHaveBeenLastCalledWith(false)
  })
})
