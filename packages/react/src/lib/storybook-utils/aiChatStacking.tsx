import { ComponentProps, ReactNode, useState } from "react"
import { expect, waitFor, within } from "storybook/test"

import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import { Page } from "@/patterns/Navigation/Page"
import * as PageStories from "@/patterns/Navigation/Page/index.stories"
import * as SidebarStories from "@/patterns/Navigation/Sidebar/index.stories"
import { Sidebar } from "@/patterns/Navigation/Sidebar/Sidebar"
import {
  MockAiChatRuntimeProvider,
  MockConnectedChatHeader,
  MockConnectedChatInput,
  MockConnectedMessagesContainer,
} from "@/kits/ai/F0AiChat/__stories__/_mock"

// AI chat locked open in fullscreen. In ApplicationFrame the fullscreen chat
// paints at `z-20` inside a `relative isolate`, as a sibling of `#content`
// (`z-10`) — so it covers the whole content area. A dialog opened here must
// still render above it.
const fullscreenChatAi: ComponentProps<typeof ApplicationFrame>["ai"] = {
  enabled: true,
  resizable: true,
  initialMessage: [
    "Operational work, automated by One",
    "Ask anything about your company",
  ],
  defaultVisualizationMode: "fullscreen",
  lockVisualizationMode: true,
  chatHeader: <MockConnectedChatHeader />,
  chatMessages: <MockConnectedMessagesContainer />,
  chatInput: <MockConnectedChatInput />,
}

// The chat's open + visualization-mode state is persisted to localStorage, so
// a `sidepanel`/closed value left over from browsing other stories would
// override `defaultVisualizationMode: "fullscreen"`. Clearing the keys before
// the Ai provider initializes lets the fullscreen default take effect — with
// no flash, since this runs in the parent's render before the provider mounts.
const CHAT_OPEN_STORAGE_KEY = "ONE-ai-chat-open"
const CHAT_VISUALIZATION_MODE_STORAGE_KEY = "ONE-ai-chat-visualization-mode"

/**
 * Renders the app shell with the AI chat locked open in fullscreen, then drops
 * `children` (the dialog under test) into the main content area. Pair with
 * {@link expectDialogPaintsAboveChat} in a `play` function to assert the dialog
 * stays on top of the chat.
 */
export const FullscreenChatFrame = ({ children }: { children: ReactNode }) => {
  // Lazy initializer runs once, before the Ai provider reads localStorage.
  useState(() => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(CHAT_OPEN_STORAGE_KEY)
      window.localStorage.removeItem(CHAT_VISUALIZATION_MODE_STORAGE_KEY)
    }
    return null
  })

  return (
    <MockAiChatRuntimeProvider>
      <ApplicationFrame
        ai={fullscreenChatAi}
        sidebar={<Sidebar {...SidebarStories.default.args} />}
      >
        <Page {...PageStories.Default.args} />
        {children}
      </ApplicationFrame>
    </MockAiChatRuntimeProvider>
  )
}

/**
 * Verifies (in a real browser, via the Storybook test runner) that a center /
 * fullscreen dialog paints above the fullscreen AI chat.
 *
 * The dialog escapes the ApplicationFrame isolate by portaling to the
 * top-level `#f0-overlay-root`. We assert that structurally (the dialog lives
 * in the overlay root) and visually: hit-testing the centre of the dialog card
 * returns an element inside the overlay root, so nothing from the chat is
 * painted over it.
 */
export async function expectDialogPaintsAboveChat({
  title,
}: {
  title: string
}) {
  const doc = document
  const overlayRoot = doc.getElementById("f0-overlay-root")
  expect(
    overlayRoot,
    "#f0-overlay-root should exist (story must run under F0Provider)"
  ).not.toBeNull()

  // Structural guarantee: the dialog portals into the overlay root, outside the
  // isolate where the fullscreen chat paints.
  const titleEl = await within(overlayRoot!).findByText(title)

  // The interactive dialog surface (`pointer-events-auto`) is the card we
  // hit-test — the overlay/content wrappers are `pointer-events-none`.
  const card =
    titleEl.closest<HTMLElement>("[class*='pointer-events-auto']") ?? titleEl

  await waitFor(
    () => {
      const rect = card.getBoundingClientRect()
      expect(rect.width).toBeGreaterThan(0)
      expect(rect.height).toBeGreaterThan(0)

      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const topmost = doc.elementFromPoint(cx, cy)
      expect(topmost).not.toBeNull()
      // Whatever paints on top at the dialog's centre belongs to the dialog
      // portal — not the chat behind it.
      expect(overlayRoot!.contains(topmost)).toBe(true)
    },
    { timeout: 3000 }
  )
}
