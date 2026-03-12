import { useEffect, useState } from "react"

import { F0Checkbox } from "@/components/F0Checkbox"
import { Await } from "@/components/Utilities/Await"
import { cn } from "@/lib/utils"
import { ChevronToggle } from "@/ui/ChevronToggle/ChevronToggle"
import { Counter } from "@/ui/Counter"
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
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex min-w-0 items-center gap-2">
          <Await resolve={label} fallback={<Skeleton className="h-4 w-24" />}>
            {(label) => (
              <h6 className="truncate text-base font-semibold text-f1-foreground">
                {label}
              </h6>
            )}
          </Await>
          <Await
            resolve={itemCount}
            fallback={<Skeleton className="h-4 w-5" />}
          >
            {(count) => count !== undefined && <Counter value={count} />}
          </Await>
        </div>
      </div>
      {showOpenChange && (
        <span className="text-f1-icon-secondary">
          <ChevronToggle open={isOpen} size="sm" />
        </span>
      )}
    </div>
  )
}
