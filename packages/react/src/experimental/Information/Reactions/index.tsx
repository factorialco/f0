import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/F0Icon"
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

export function Reactions({
  items,
  onInteraction,
  locale,
  action,
}: ReactionsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {action && (
        <Button
          label={action.label}
          icon={action.icon}
          onClick={action.onClick}
          variant="outline"
          round
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
