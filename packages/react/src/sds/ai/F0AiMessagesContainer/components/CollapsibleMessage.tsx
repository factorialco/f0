import { motion } from "motion/react"
import { useState, ReactNode } from "react"

import { F0Icon, IconType } from "@/components/F0Icon"
import ChevronRight from "@/icons/app/ChevronRight"
import { useReducedMotion } from "@/lib/a11y"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/ui/collapsible"
import { cn } from "@/lib/utils"

interface CollapsibleMessageProps {
  icon: IconType
  title: string
  children: ReactNode
  /** Controlled open state. When set, the parent owns the open state. */
  open?: boolean
  /** Initial open state when uncontrolled. */
  defaultOpen?: boolean
  /** Fires on user toggle. Required when `open` is provided. */
  onOpenChange?: (open: boolean) => void
  /**
   * When true, the chevron is hidden and the trigger does not toggle —
   * the section stays open regardless of user clicks. The parent must
   * keep `open` true while locked.
   */
  lockOpen?: boolean
}

export const CollapsibleMessage = ({
  icon,
  title,
  children,
  open,
  defaultOpen = false,
  onOpenChange,
  lockOpen = false,
}: CollapsibleMessageProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const shouldReduceMotion = useReducedMotion()
  const isControlled = open !== undefined
  const isExpanded = isControlled ? open : uncontrolledOpen
  const handleOpenChange = (next: boolean) => {
    if (lockOpen) return
    if (!isControlled) setUncontrolledOpen(next)
    onOpenChange?.(next)
  }

  return (
    <Collapsible
      className="mb-1 w-full"
      open={isExpanded}
      onOpenChange={handleOpenChange}
    >
      <CollapsibleTrigger
        disabled={lockOpen}
        className={cn(
          "gap-1",
          lockOpen
            ? "flex w-full items-center text-base text-f1-foreground-secondary"
            : "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90"
        )}
      >
        <span className="flex items-center justify-start h-6 w-6">
          <F0Icon icon={icon} className="block" />
        </span>
        <div className="min-h-6 flex items-center">
          <span>{title}</span>
        </div>
        {!lockOpen && (
          <F0Icon
            icon={ChevronRight}
            // className="h-6 w-6 transition-transform duration-200"
          />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent forceMount className="data-[state=open]:mt-3">
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
            visibility: isExpanded ? "visible" : "hidden",
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.15,
            ease: [0.165, 0.84, 0.44, 1],
          }}
          className="flex flex-col gap-2"
        >
          {children}
        </motion.div>
      </CollapsibleContent>
    </Collapsible>
  )
}
