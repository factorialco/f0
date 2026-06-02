import { useAiChat } from "./AiChatStateProvider"

/**
 * Narrow read of the AiChat context for components that only need to
 * toggle the chat open/closed (e.g. F0OneSwitch). Reduces the surface
 * those components have on the full provider so future decoupling
 * stays simpler.
 */
export function useAiChatToggle(): {
  enabled: boolean
  open: boolean
  setOpen: (open: boolean) => void
} {
  const { enabled, open, setOpen } = useAiChat()
  return { enabled, open, setOpen }
}
