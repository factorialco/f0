import { type ReactNode, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { F0Text } from "@/components/F0Text"
import { ChevronDown } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/ui/collapsible"

export type MapPanelSectionTone = "neutral" | "attention"

export interface MapPanelSectionProps {
  title: string
  /** How many rows the section holds. Shown in the header, so a collapsed section still says what is inside. */
  count: number
  /**
   * `attention` marks a section whose rows want acting on - records that should
   * be on the map and are not. Colours the count, nothing else: the rows are the
   * consumer's and keep their own look.
   */
  tone?: MapPanelSectionTone
  /** One line under the header saying why these rows are grouped here. */
  hint?: string
  defaultOpen?: boolean
  children: ReactNode
  dataTestId?: string
}

/**
 * A titled, collapsible group of rows in the map's side panel. Built on the same
 * Radix collapsible the app sidebar's sections use, but not on that component:
 * it carries drag and unread concerns that have no meaning here.
 */
export const MapPanelSection = ({
  title,
  count,
  tone = "neutral",
  hint,
  defaultOpen = true,
  children,
  dataTestId,
}: MapPanelSectionProps) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      data-testid={dataTestId}
      data-tone={tone}
    >
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left",
            "text-f1-foreground hover:bg-f1-background-hover",
            focusRing()
          )}
        >
          <span className="min-w-0 flex-1 truncate text-sm font-medium">
            {title}
          </span>
          <span
            className={cn(
              "shrink-0 rounded-xs px-1 text-xs font-medium tabular-nums",
              tone === "attention"
                ? "bg-f1-background-warning text-f1-foreground-warning"
                : "text-f1-foreground-secondary"
            )}
          >
            {count}
          </span>
          {/* Radix stamps `data-state` on the trigger, so the chevron can
              follow it without a second piece of state. */}
          <span
            className={cn(
              "flex shrink-0 text-f1-icon transition-transform duration-200 motion-reduce:transition-none",
              open && "rotate-180"
            )}
          >
            <F0Icon icon={ChevronDown} size="sm" />
          </span>
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        {hint && (
          <div className="px-2 pb-1">
            <F0Text variant="description" content={hint} markdown={false} />
          </div>
        )}
        {children}
      </CollapsibleContent>
    </Collapsible>
  )
}
