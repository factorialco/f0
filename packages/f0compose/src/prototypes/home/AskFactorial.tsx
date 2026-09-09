import { F0Button } from "@factorialco/f0-react"
import { Comment } from "@factorialco/f0-react/icons/app"
import { createContext, useContext } from "react"

export const AgentEntryContext = createContext<{
  visible: boolean
  open: () => void
}>({ visible: false, open: () => {} })

export function AskFactorialButton() {
  const entry = useContext(AgentEntryContext)
  if (!entry.visible) return null
  return (
    <F0Button
      label="Ask Factorial"
      icon={Comment}
      variant="outline"
      size="md"
      onClick={entry.open}
      data-testid="ask-factorial"
    />
  )
}
