import { AnimatePresence, motion } from "motion/react"

import { F0Button } from "@/components/F0Button"
import { ChevronDown, ChevronUp } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/ui/collapsible"

import { F0AccordionItem } from "../types"

import { AccordionActions } from "./AccordionActions"

interface AccordionItemProps {
  item: F0AccordionItem
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const AccordionItem = ({
  item,
  open,
  onOpenChange,
}: AccordionItemProps) => {
  const shouldReduceMotion = useReducedMotion()
  const i18n = useI18n()
  const triggerLabel = i18n.t(
    open ? "actions.collapseItem" : "actions.expandItem",
    { title: item.title }
  )
  const hasActions = !!item.actions && item.actions.length > 0

  return (
    <Collapsible open={open} onOpenChange={onOpenChange} asChild>
      <div className="flex flex-col">
        <div className="flex items-center">
          <CollapsibleTrigger asChild>
            <button
              type="button"
              className={cn(
                "flex flex-1 min-w-0 items-center py-3 pl-4 pr-2 text-left",
                focusRing()
              )}
            >
              <span className="flex-1 truncate font-medium text-f1-foreground">
                {item.title}
              </span>
            </button>
          </CollapsibleTrigger>
          <div className="flex items-center gap-2 py-3 pl-2 pr-4">
            {hasActions && <AccordionActions actions={item.actions!} />}
            <CollapsibleTrigger asChild>
              <F0Button
                variant="outline"
                size="sm"
                icon={open ? ChevronUp : ChevronDown}
                label={triggerLabel}
                hideLabel
              />
            </CollapsibleTrigger>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
              className="overflow-hidden"
            >
              <CollapsibleContent forceMount asChild>
                <div className="px-4 pb-4 text-f1-foreground-secondary">
                  {item.description}
                </div>
              </CollapsibleContent>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Collapsible>
  )
}
