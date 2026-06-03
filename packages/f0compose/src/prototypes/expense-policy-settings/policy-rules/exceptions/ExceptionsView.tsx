import { F0Box, OneEmptyState } from "@factorialco/f0-react"

import { useAiChat } from "@/copilot"

import type { PolicyRulesHandle } from "../usePolicyRulesData"

import { HeroBlock } from "./HeroBlock"

/**
 * Exceptions — intentionally an empty state for now.
 *
 * The override / audit / auto-expiry cards were pulled out (the
 * design isn't settled yet). The page keeps its hero for identity
 * and offers a single "Set up with One" entry so co-creation can
 * fill it in later, but ships no rule content today.
 */
export function ExceptionsView(_props: { rules: PolicyRulesHandle }) {
  const { sendMessage } = useAiChat()
  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <HeroBlock
        title="Exceptions"
        description="Who can override policy caps, what's logged, and how long an override lasts."
      />
      <OneEmptyState
        emoji="🚧"
        title="No exception rules yet"
        description="Exceptions let specific people override policy caps with the right justification and audit trail. We'll design this surface next — start it with One whenever you're ready."
        actions={[
          {
            label: "Set up with One",
            variant: "default",
            onClick: () =>
              sendMessage("Help me set up exception and override rules."),
          },
        ]}
      />
    </F0Box>
  )
}
