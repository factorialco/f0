import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { Fragment, forwardRef, useMemo } from "react"

import { cn } from "@/lib/utils"

import { AccordionItem } from "./components/AccordionItem"
import { F0AccordionProps } from "./types"

export const F0Accordion = forwardRef<HTMLDivElement, F0AccordionProps>(
  ({ items, value, defaultValue, onValueChange }, ref) => {
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

F0Accordion.displayName = "F0Accordion"
