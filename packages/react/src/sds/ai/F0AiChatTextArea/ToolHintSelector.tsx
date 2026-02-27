import { AnimatePresence, motion } from "motion/react"
import { useCallback, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import { Cross, Sliders } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Action } from "@/ui/Action"
import { actionVariants } from "@/ui/Action/variants"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import type { AiChatToolHint } from "../F0AiChat/types"

type ToolHintSelectorProps = {
  /** Available tool hints to choose from */
  toolHints: AiChatToolHint[]
  /** The currently active tool hint, or null */
  activeToolHint: AiChatToolHint | null
  /** Callback when the user selects or clears a tool hint */
  onChange: (toolHint: AiChatToolHint | null) => void
}

/**
 * Tool hint selector: a button that opens a popover to pick a tool hint,
 * plus an inline chip showing the active selection with a dismiss button.
 *
 * Layout (rendered inline in the button bar):
 *   [tool-btn] [chip: icon Data analysis ×]
 */
export function ToolHintSelector({
  toolHints,
  activeToolHint,
  onChange,
}: ToolHintSelectorProps) {
  const [open, setOpen] = useState(false)
  const i18n = useI18n()
  const shouldReduceMotion = useReducedMotion()

  const handleSelect = useCallback(
    (hint: AiChatToolHint) => {
      if (activeToolHint?.id === hint.id) {
        onChange(null)
      } else {
        onChange(hint)
      }
      setOpen(false)
    },
    [activeToolHint, onChange]
  )

  const handleClear = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      onChange(null)
    },
    [onChange]
  )

  return (
    <div className="flex items-center gap-1.5">
      {/* Selector button + popover */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <ButtonInternal
            pressed={open}
            label={i18n.t("ai.tools")}
            hideLabel={!!activeToolHint}
            icon={Sliders}
            variant="outline"
            size="md"
          />
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="start"
          sideOffset={8}
          className="w-56 rounded-lg p-1"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 5 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
                className="flex flex-col gap-0.5"
              >
                {toolHints.map((hint) => {
                  const isActive = activeToolHint?.id === hint.id
                  return (
                    <Action
                      key={hint.id}
                      variant="ghost"
                      size="md"
                      onClick={() => handleSelect(hint)}
                      aria-label={hint.label}
                      className={cn(
                        actionVariants({
                          variant: isActive ? "selected" : "ghost",
                        }),
                        "justify-start"
                      )}
                    >
                      <div className="flex w-full items-start gap-1">
                        {hint.icon && (
                          <F0Icon
                            icon={hint.icon}
                            color={isActive ? "selected" : "default"}
                          />
                        )}
                        <span className="text-base">{hint.label}</span>
                      </div>
                    </Action>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </PopoverContent>
      </Popover>

      {/* Active tool hint chip */}
      <AnimatePresence>
        {activeToolHint && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
            onClick={handleClear}
            className={cn(
              "flex items-center gap-1 rounded-sm px-2 py-1.5",
              "bg-f1-background-selected",
              "text-base font-medium text-f1-foreground-selected",
              "transition-colors",
              "hover:bg-f1-background-selected-hover"
            )}
            aria-label={`Remove ${activeToolHint.label}`}
          >
            {activeToolHint.icon && (
              <F0Icon icon={activeToolHint.icon} color="currentColor" />
            )}
            <OneEllipsis>{activeToolHint.label}</OneEllipsis>
            <F0Icon icon={Cross} size="md" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
