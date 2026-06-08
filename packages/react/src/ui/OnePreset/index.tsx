import { AnimatePresence, motion } from "motion/react"
import { type MouseEvent, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { Pencil } from "@/icons/app"
import { Await } from "@/lib/Await"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
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
  /** When provided, an edit icon button is shown on hover. */
  onEdit?: () => void
}

const _Preset = ({
  label,
  number,
  onClick,
  selected,
  description,
  onEdit,
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
      {hasActions && (
        <AnimatePresence initial={false}>
          {showActions && (
            <motion.span
              key="preset-actions"
              className="-my-0.5 -ml-1.5 -mr-1 flex items-center gap-0.5 overflow-hidden"
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
