import { F0OneSwitch } from "@factorialco/f0-react/dist/ai"
import { createContext, useContext } from "react"

export const AgentEntryContext = createContext<{
  visible: boolean
  open: () => void
}>({ visible: false, open: () => {} })

export function AskFactorialButton() {
  const entry = useContext(AgentEntryContext)
  if (!entry.visible) return null
  return <AskFactorialAction onClick={entry.open} />
}

/**
 * f0's own One switch, back where the "Ask One" button was (Angel,
 * 2026-09-14). It is the control the rest of Factorial uses to summon
 * One, and the page headers here were hiding their native one to make
 * room for a bespoke button that said the same thing.
 */
export function AskFactorialAction({ onClick }: { onClick: () => void }) {
  return <F0OneSwitch onToggle={onClick} data-testid="ask-factorial" />
}
