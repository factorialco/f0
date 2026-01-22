import { useEffect, useState } from "react"

import { F0Checkbox } from "@/components/F0Checkbox"
import { Await } from "@/components/Utilities/Await"
import { Counter } from "@/experimental/Information/Counter"
import { cn } from "@/lib/utils"
import { ChevronToggle } from "@/ui/ChevronToggle/ChevronToggle"
import { Skeleton } from "@/ui/skeleton"

type GroupHeaderProps = {
  label: string | Promise<string>
  itemCount: number | Promise<number | undefined> | undefined
  open?: boolean
  onOpenChange?: (open: boolean) => void
  showOpenChange?: boolean
  selectable?: boolean
  select?: true | false | "indeterminate"
  onSelectChange?: (selected: boolean) => void
  className?: string
}

export const GroupHeader = ({
  label,
  itemCount,
  open,
  onOpenChange,
  showOpenChange,
  selectable,
  select,
  onSelectChange,
  className,
}: GroupHeaderProps) => {
  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const handleOpenChange = () => {
    setIsOpen(!isOpen)
    onOpenChange?.(!isOpen)
  }

  const handleGroupClick = () => {
    if (showOpenChange) {
      handleOpenChange()
    } else if (selectable) {
      onSelectChange?.(!select)
    }
  }

  return (
    <div
      className={cn("pointer-events-auto flex items-center gap-2", className)}
      onClick={handleGroupClick}
    >
      {selectable && (
        <F0Checkbox
          checked={!!select}
          indeterminate={select === "indeterminate"}
          title="Select all"
          hideLabel
          onCheckedChange={(checked) => onSelectChange?.(checked)}
          stopPropagation
        />
      )}
      <Await resolve={label} fallback={<Skeleton className="h-4 w-24" />}>
        {(label) => (
          <h6 className="text-base font-semibold text-f1-foreground">
            {label}
          </h6>
        )}
      </Await>
      <Await resolve={itemCount} fallback={<Skeleton className="h-4 w-5" />}>
        {(count) => count !== undefined && <Counter value={count} />}
      </Await>
      {showOpenChange && (
        <span className="text-f1-icon-secondary">
          <ChevronToggle open={isOpen} size="sm" />
        </span>
      )}
    </div>
  )
}
