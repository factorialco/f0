import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { CHAT_COMPOSER_HEIGHT_PROPERTY } from "../../utils/chat-layout"
import { ChatViewportOverlays } from "../ChatViewportOverlays"

describe("ChatViewportOverlays", () => {
  it("keeps the jump control above the floating composer", () => {
    render(
      <ChatViewportOverlays
        atTop={false}
        scrolledUp
        hasMoreOlder={false}
        loadingOlder={false}
        stickyDate={null}
        showJumpButton
        unreadCount={0}
        hasMoreNewer={false}
        reducedMotion
        onJumpToBottom={vi.fn()}
      />
    )

    expect(screen.getByTestId("chat-jump-overlay").style.bottom).toContain(
      CHAT_COMPOSER_HEIGHT_PROPERTY
    )
    expect(
      screen.getByRole("button", { name: "Scroll to bottom" })
    ).toBeInTheDocument()
  })
})
