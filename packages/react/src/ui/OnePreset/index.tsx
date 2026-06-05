import { AnimatePresence, motion } from "motion/react"
import { type MouseEvent, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { Pencil, Save } from "@/icons/app"
import { Await } from "@/lib/Await"
import { EmojiImage } from "@/lib/emojis"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Counter } from "@/ui/Counter"
import { Skeleton } from "@/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"

interface PresetProps {
  label: string
  number?: number | Promise<number | undefined>
  onClick?: () => void
  selected?: boolean
  /** Optional longer description, shown as a tooltip on hover. */
  description?: string
  /** Optional emoji shown on the left of the label. */
  emoji?: string
  /** When provided, an edit icon button is shown on hover. */
  onEdit?: () => void
  /**
   * When provided, a persist icon button is shown on the preset — always
   * visible (not hover-gated), in the selected color. Used to save the current
   * view into the selected preset.
   */
  onPersist?: () => void
}

const _Preset = ({
  label,
  number,
  onClick,
  selected,
  description,
  emoji,
  onEdit,
  onPersist,
}: PresetProps) => {
  const i18n = useI18n()
  const hasActions = !!onEdit
  const [showActions, setShowActions] = useState(false)

  // Stop the click from toggling the preset's selection (the checkbox/label).
  const actionHandler =
    (handler: () => void) => (e: MouseEvent<HTMLElement>) => {
      e.preventDefault()
      e.stopPropagation()
      handler()
    }

  const box = (
    <motion.label
      layout
      transition={{ duration: 0.15, ease: "easeOut" }}
      onMouseEnter={hasActions ? () => setShowActions(true) : undefined}
      onMouseLeave={hasActions ? () => setShowActions(false) : undefined}
      className={cn(
        "group flex cursor-default appearance-none items-center gap-2 rounded px-2.5 py-1.5 font-medium text-f1-foreground outline outline-1 outline-f1-border transition-all",
        onClick &&
          "focus-within:ring-2 focus-within:ring-f1-border-selected focus-within:ring-offset-2",
        number && "pr-1.5",
        onClick && "cursor-pointer hover:outline-f1-border-hover",
        selected &&
          "bg-f1-background-selected-secondary text-f1-foreground-selected outline-f1-border-selected hover:outline-f1-border-selected"
      )}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={selected}
        onChange={() => onClick?.()}
      />
      {emoji && <EmojiImage size="sm" emoji={emoji} />}
      <span className="whitespace-nowrap">{label}</span>
      {number !== undefined && (
        <Await resolve={number} fallback={<Skeleton className="h-4 w-4" />}>
          {(number) =>
            number !== undefined && (
              <Counter
                value={number}
                type={selected ? "selected" : "default"}
              />
            )
          }
        </Await>
      )}
      {onPersist && (
        // Custom (not F0Button) so it can use the preset's selected color and
        // stay always-visible (not hover-gated).
        <button
          type="button"
          aria-label={i18n.actions.persistInPreset}
          className={cn(
            "-my-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-xs text-f1-foreground-selected transition-colors hover:bg-f1-background-selected hover:text-f1-foreground-inverse",
            focusRing()
          )}
          onClick={actionHandler(onPersist)}
        >
          <F0Icon icon={Save} size="sm" />
        </button>
      )}
      {hasActions && (
        <AnimatePresence initial={false}>
          {showActions && (
            <motion.span
              key="preset-actions"
              className="-my-0.5 -mr-1.5 flex items-center gap-0.5 overflow-hidden"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              {onEdit && (
                <F0Button
                  variant="ghost"
                  size="sm"
                  hideLabel
                  label={i18n.actions.editPreset}
                  icon={Pencil}
                  onClick={actionHandler(onEdit)}
                />
              )}
            </motion.span>
          )}
        </AnimatePresence>
      )}
    </motion.label>
  )

  // Show the description in a tooltip after a short hover delay (400ms).
  if (description) {
    return (
      <TooltipProvider delayDuration={400}>
        <Tooltip>
          <TooltipTrigger asChild>{box}</TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p className="font-normal">{description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return box
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const Preset = experimentalComponent("Preset", _Preset)
