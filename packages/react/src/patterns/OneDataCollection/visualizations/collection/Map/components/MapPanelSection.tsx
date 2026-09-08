import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { type ReactNode } from "react"
import { F0Icon } from "@/components/F0Icon"
import { F0Text } from "@/components/F0Text"
import { ChevronDown } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/ui/collapsible"
import { Counter } from "@/ui/Counter"

export interface MapPanelSectionProps {
  title: string
  /** How many rows the section holds. Shown in the header, so a collapsed section still says what is inside. */
  count: number
  /** Controlled open state; leave unset to let the section keep its own. */
  open?: boolean
  onOpenChange?: (open: boolean) => void
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
  open: openProp,
  onOpenChange,
  defaultOpen = true,
  children,
  dataTestId,
}: MapPanelSectionProps) => {
  const [open = defaultOpen, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  })

  return (
    <Collapsible open={open} onOpenChange={setOpen} data-testid={dataTestId}>
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left",
            "hover:bg-f1-background-hover",
            focusRing()
          )}
        >
          <span className="min-w-0 flex-1">
            <F0Text variant="label" content={title} markdown={false} ellipsis />
          </span>
          <Counter value={count} size="sm" />
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
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  )
}
