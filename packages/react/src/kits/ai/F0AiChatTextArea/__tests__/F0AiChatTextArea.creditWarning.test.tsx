import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { Upsell } from "@/icons/app"
import { zeroRender as render, screen } from "@/testing/test-utils"
import { F0AiChatTextArea } from "../F0AiChatTextArea"

describe("F0AiChatTextArea creditWarning", () => {
  it("falls back to the i18n copy", () => {
    render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        creditWarning={{
          level: "soft",
          onGetCredits: vi.fn(),
          getCreditsIcon: Upsell,
        }}
      />
    )

    expect(
      screen.getByText("You're running low on AI credits.")
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Get credits" })
    ).toBeInTheDocument()
  })

  it("renders the host copy and wires the actions", async () => {
    const onGetCredits = vi.fn()
    const onDismiss = vi.fn()
    const user = userEvent.setup()
    render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        creditWarning={{
          level: "soft",
          text: "You've run out of One",
          actionLabel: "Request",
          onGetCredits,
          onDismiss,
          getCreditsIcon: Upsell,
        }}
      />
    )

    expect(screen.getByText("You've run out of One")).toBeInTheDocument()
    await user.click(screen.getByRole("button", { name: "Request" }))
    await user.click(screen.getByRole("button", { name: "Dismiss" }))

    expect(onGetCredits).toHaveBeenCalledTimes(1)
    expect(onDismiss).toHaveBeenCalledTimes(1)
  })
})
