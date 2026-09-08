import "@testing-library/jest-dom/vitest"
import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"
import { F0AiChatUsageLimitsButton } from "../F0AiChatUsageLimitsButton"

const openPopover = async () => {
  await userEvent.click(
    screen.getByRole("button", { name: /personal allowance/i })
  )
  return screen.findByRole("dialog")
}

describe("F0AiChatUsageLimitsButton", () => {
  it("names the ring trigger with the percentage used", () => {
    render(<F0AiChatUsageLimitsButton usage={{ usedPercentage: 30 }} />)

    expect(
      screen.getByRole("button", { name: "Personal allowance: 30% used" })
    ).toBeInTheDocument()
  })

  it("shows only the personal row for a plain employee", async () => {
    render(<F0AiChatUsageLimitsButton usage={{ usedPercentage: 30 }} />)
    const dialog = await openPopover()

    expect(dialog).toHaveTextContent("Personal allowance")
    expect(dialog).toHaveTextContent("30% used")
    expect(
      screen.queryByRole("button", { name: /your company/i })
    ).not.toBeInTheDocument()
    expect(screen.getAllByRole("progressbar")).toHaveLength(1)
  })

  it("renders the company link and extra sections for admins", async () => {
    const onSeeCompany = vi.fn()
    render(
      <F0AiChatUsageLimitsButton
        usage={{
          usedPercentage: 30,
          onSeeCompany,
          sections: [
            { id: "company", label: "Company allowance", usedPercentage: 70 },
            { id: "team", label: "Personal allowance", usedPercentage: 12 },
          ],
        }}
      />
    )
    await openPopover()

    expect(screen.getByText("Company allowance")).toBeInTheDocument()
    expect(screen.getByText("70% used")).toBeInTheDocument()
    expect(screen.getByText("12% used")).toBeInTheDocument()
    await userEvent.click(screen.getByRole("button", { name: /your company/i }))
    expect(onSeeCompany).toHaveBeenCalledTimes(1)
  })

  it("clamps percentages into 0–100 and exposes them on the bar", async () => {
    render(<F0AiChatUsageLimitsButton usage={{ usedPercentage: 137 }} />)
    await openPopover()

    const bar = screen.getByRole("progressbar", { name: "Personal allowance" })
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

  it('renders a neutral ring and "Unlimited" instead of a percentage when uncapped', async () => {
    render(
      <F0AiChatUsageLimitsButton
        usage={{
          usedPercentage: 250,
          unlimited: true,
          sections: [
            {
              id: "company",
              label: "Company allowance",
              usedPercentage: 0,
              unlimited: true,
            },
          ],
        }}
      />
    )

    expect(
      screen.getByRole("button", { name: "Personal allowance: Unlimited" })
    ).toBeInTheDocument()
    await openPopover()

    expect(screen.getAllByText("Unlimited")).toHaveLength(2)
    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument()
    expect(screen.queryByText(/% used/)).not.toBeInTheDocument()
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
