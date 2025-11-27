import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { F0Text } from "@/components/F0Text"
import {
  DropdownInternal,
  DropdownItem,
} from "@/experimental/Navigation/Dropdown/internal.tsx"
import { CornerHandle, Ellipsis, Handle } from "@/icons/app"
import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { useEffect, useState, type ReactNode } from "react"
import { ButtonInternal } from "../F0Button/internal"

export interface WidgetProps {
  title: string
  draggable?: boolean
  onDragStart?: () => void
  onDragEnd?: () => void
  isDragging?: boolean
  resizable?: boolean
  onResizeStart?: () => void
  onResizeEnd?: () => void
  showOne?: boolean
  dropdown?: DropdownItem[]
  children: ReactNode
  selected?: boolean
}

const F0WidgetBase = ({
  title,
  draggable = false,
  onDragStart,
  onDragEnd,
  isDragging = false,
  resizable = false,
  onResizeStart,
  onResizeEnd,
  showOne = false,
  dropdown,
  children,
  selected = false,
}: WidgetProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleDropdownOpenChange = (open: boolean) => {
    setIsDropdownOpen(open)
  }

  const isInteractive = draggable || resizable

  // Handle drag end globally
  useEffect(() => {
    if (!isDragging || !onDragEnd) return

    const handleGlobalMouseUp = () => {
      onDragEnd()
    }

    document.addEventListener("mouseup", handleGlobalMouseUp)

    return () => {
      document.removeEventListener("mouseup", handleGlobalMouseUp)
    }
  }, [isDragging, onDragEnd])

  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200",
        isInteractive && isDropdownOpen
          ? "border-f1-border-hover"
          : isInteractive && "hover:border-f1-border-hover",
        selected &&
          "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]",
        isDragging &&
          "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"
      )}
    >
      <div className="flex h-12 w-full items-center justify-between gap-3">
        <div
          className={cn(
            "flex min-w-0 flex-1 items-center",
            !draggable && "pl-4",
            !dropdown && !showOne && "pr-4"
          )}
        >
          {draggable && (
            <div
              className="flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab"
              onMouseDown={onDragStart}
            >
              <F0Icon icon={Handle} size="xs" />
            </div>
          )}
          <div
            className={cn(
              "flex min-w-0 flex-1 items-center",
              draggable && "-translate-x-1.5"
            )}
          >
            <F0Text variant="label" content={title} ellipsis />
          </div>
        </div>
        {(showOne || dropdown) && (
          <div
            className={cn(
              "flex shrink-0 items-center gap-0.5 pr-2",
              !dropdown && "pr-4"
            )}
          >
            {showOne && (
              <div className="flex h-6 items-center">
                <F0Button
                  variant="outline"
                  size="sm"
                  label="Ask One"
                  onClick={() => {}}
                />
              </div>
            )}
            {dropdown && (
              <DropdownInternal
                items={dropdown}
                open={isDropdownOpen}
                onOpenChange={handleDropdownOpenChange}
                align="end"
              >
                <ButtonInternal
                  icon={Ellipsis}
                  label="Actions"
                  variant="ghost"
                  size="md"
                  hideLabel
                  noAutoTooltip
                  noTitle
                  pressed={isDropdownOpen}
                />
              </DropdownInternal>
            )}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col px-4 pb-4">{children}</div>
      {resizable && (
        <div
          className="absolute -bottom-1 right-0 text-f1-icon-secondary hover:cursor-nwse-resize"
          onMouseDown={onResizeStart}
          onMouseUp={onResizeEnd}
        >
          <F0Icon icon={CornerHandle} size="sm" />
        </div>
      )}
    </div>
  )
}

const F0WidgetSkeleton = () => {
  return (
    <div className="relative flex h-full w-full flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background">
      <div className="flex h-12 w-full items-center px-4">
        <Skeleton className="h-3 w-full max-w-16 rounded-md" />
      </div>
      <div className="flex flex-1 items-end gap-2 px-4 pb-4">
        <Skeleton className="h-1/2 w-full rounded-sm" />
        <Skeleton className="h-1/3 w-full rounded-sm" />
        <Skeleton className="h-1/5 w-full rounded-sm" />
        <Skeleton className="h-1/3 w-full rounded-sm" />
        <Skeleton className="h-full w-full rounded-sm" />
        <Skeleton className="h-3/4 w-full rounded-sm" />
      </div>
    </div>
  )
}

F0WidgetBase.displayName = "F0Widget"

export const F0Widget = withSkeleton(F0WidgetBase, F0WidgetSkeleton)
