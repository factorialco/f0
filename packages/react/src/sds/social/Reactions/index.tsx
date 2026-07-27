import { F0Button } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import { experimentalComponent } from "@/lib/experimental"

import { Picker } from "./Picker"
import { Reaction, ReactionProps } from "./reaction"

export interface ReactionsProps {
  items: ReactionProps[]
  onInteraction?: (emoji: string) => void
  locale?: string
  action?: {
    label: string
    icon: IconType
    onClick: () => void
  }
}

function _Reactions({ items, onInteraction, locale, action }: ReactionsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {action && (
        <F0Button
          label={action.label}
          icon={action.icon}
          onClick={action.onClick}
          variant="outline"
          hideLabel
        />
      )}
      <Picker onSelect={onInteraction} locale={locale} />
      {items.map((item) => (
        <Reaction
          key={item.emoji}
          emoji={item.emoji}
          initialCount={item.initialCount}
          hasReacted={item.hasReacted}
          users={item.users}
          onInteraction={onInteraction}
        />
      ))}
    </div>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const Reactions = experimentalComponent("Reactions", _Reactions)
