import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { Fragment, forwardRef, useMemo } from "react"

import { withDataTestId } from "@/lib/data-testid"
import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"

import { AccordionItem } from "./components/AccordionItem"
import { F0AccordionSkeleton } from "./F0AccordionSkeleton"
import { F0AccordionProps } from "./types"

export type {
  F0AccordionItem,
  F0AccordionItemAction,
  F0AccordionItemDropdownAction,
  F0AccordionItemSegmentedControlAction,
  F0AccordionProps,
} from "./types"

const F0AccordionBase = forwardRef<HTMLDivElement, F0AccordionProps>(
  (props, ref) => {
    const { items, value, defaultValue, onValueChange } = props

    const computedDefault = useMemo(() => {
      if (defaultValue !== undefined) return defaultValue
      return items.filter((item) => item.defaultOpen).map((item) => item.id)
    }, [defaultValue, items])

    const [openIds = [], setOpenIds] = useControllableState<string[]>({
      prop: value,
      defaultProp: computedDefault,
      onChange: onValueChange,
    })

    const handleItemOpenChange = (id: string, nextOpen: boolean) => {
      const isOpen = openIds.includes(id)
      if (nextOpen && !isOpen) {
        setOpenIds([...openIds, id])
      } else if (!nextOpen && isOpen) {
        setOpenIds(openIds.filter((openId) => openId !== id))
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col rounded-md border border-solid border-f1-border-secondary",
          "overflow-hidden bg-f1-background"
        )}
      >
        {items.map((item, index) => (
          <Fragment key={item.id}>
            {index > 0 && (
              <div className="h-px w-full bg-f1-border-secondary" />
            )}
            <AccordionItem
              item={item}
              open={openIds.includes(item.id)}
              onOpenChange={(nextOpen) =>
                handleItemOpenChange(item.id, nextOpen)
              }
            />
          </Fragment>
        ))}
      </div>
    )
  }
)

F0AccordionBase.displayName = "F0Accordion"

/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export const F0Accordion = withDataTestId(
  withSkeleton(F0AccordionBase, F0AccordionSkeleton)
)
