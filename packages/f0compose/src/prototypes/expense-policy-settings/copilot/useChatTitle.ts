import { useEffect } from "react"

/**
 * Override the F0AiChat header title (default: "New conversation")
 * with a prototype-specific string.
 *
 * Why this is a DOM hack:
 *
 *   - The header text comes from
 *     `AiChatStateProvider.currentThreadTitle`, which is internal
 *     state mutated ONLY by `loadThread(id, title)`. `loadThread`
 *     has side effects (clears pending context, closes canvas,
 *     calls the registered load function) so we can't repurpose it
 *     just to set the title.
 *   - `F0AiChatProvider` has no `initialTitle` / `conversationName`
 *     prop. The upstream surface would need patching.
 *
 * Workaround: a 250ms `setInterval` that finds the title text
 * node (the one whose `textContent.trim()` equals "New
 * conversation") inside `.copilotKitChat` and overwrites it. The
 * poll is cheap (one querySelector + a tree walk of <50 header
 * nodes) and survives React re-renders that recreate the text
 * node. A MutationObserver would create a feedback loop because
 * our own `textContent` write retriggers `characterData` events.
 *
 * Selector strategy: we don't hard-code a path inside the chat —
 * we just find any text node whose trimmed content matches the
 * default title and patch it. Resilient to F0 markup churn.
 *
 * Upstream fix would be a `conversationTitle` prop on
 * `AiChatProviderProps`. When that lands, delete this hook.
 */
export function useChatTitle(title: string): void {
  useEffect(() => {
    const DEFAULT_TITLES = ["New conversation", ""]

    // Apply the F0 typography spec the design requested: 16px,
    // medium weight. Inline styles win over the empty <h2>'s
    // default Tailwind classes without us having to inject a
    // global stylesheet.
    const applyTypography = (el: HTMLElement) => {
      el.style.fontSize = "16px"
      el.style.fontWeight = "500"
      el.style.lineHeight = "1.25"
    }

    const patchTitle = () => {
      const legacyH2 = document.querySelector<HTMLHeadingElement>(
        ".copilotKitSidebar header h2"
      )
      if (legacyH2) {
        if (legacyH2.textContent !== title) {
          legacyH2.textContent = title
        }
        applyTypography(legacyH2)
        return
      }

      const root = document.querySelector(".copilotKitChat")
      if (!root) return
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
      let node: Node | null = walker.nextNode()
      while (node) {
        const text = node.textContent?.trim() ?? ""
        if (DEFAULT_TITLES.includes(text) && text !== title) {
          node.textContent = title
          const parent = node.parentElement
          if (parent) applyTypography(parent)
          return
        }
        node = walker.nextNode()
      }
    }

    patchTitle()
    const interval = window.setInterval(patchTitle, 250)
    return () => {
      window.clearInterval(interval)
    }
  }, [title])
}
