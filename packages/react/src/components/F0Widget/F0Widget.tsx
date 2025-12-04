import { AIButton as AIButtonComponent } from "@/components/AIButton"
import { F0Icon } from "@/components/F0Icon"
import { F0Text } from "@/components/F0Text"
import {
  DropdownInternal,
  DropdownItem,
} from "@/experimental/Navigation/Dropdown/internal.tsx"
import { One as OneIcon } from "@/icons/ai"
import { Ellipsis, Handle } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState, type ReactNode } from "react"
import { ButtonInternal } from "../F0Button/internal"

export interface WidgetProps {
  title: string
  draggable?: boolean
  onDragStart?: () => void
  onDragEnd?: () => void
  isDragging?: boolean
  AIButton?: () => void
  actions?: DropdownItem[]
  children: ReactNode
  selected?: boolean
}

const F0WidgetBase = ({
  title,
  draggable = false,
  onDragStart,
  onDragEnd,
  isDragging = false,
  AIButton,
  actions,
  children,
  selected = false,
}: WidgetProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const t = useI18n()

  const handleDropdownOpenChange = (open: boolean) => {
    setIsDropdownOpen(open)
  }

  const isActive = isHovered || isDropdownOpen

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
        "group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200",
        draggable && isDropdownOpen
          ? "border-f1-border-hover"
          : draggable && "hover:border-f1-border-hover",
        selected &&
          "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]",
        isDragging &&
          "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-12 w-full items-center justify-between gap-3">
        <div
          className={cn(
            "flex min-w-0 flex-1 items-center",
            !draggable && "pl-4",
            !actions && !AIButton && "pr-4"
          )}
        >
          {draggable && (
            <div
              className="flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab"
              onMouseDown={onDragStart}
              data-gs-handle="true"
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
        <AnimatePresence>
          {(AIButton || actions) && isActive && (
            <motion.div
              className={cn(
                "flex shrink-0 items-center gap-0.5 pr-2",
                !actions && "pr-4"
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.2,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {AIButton && (
                <div className="flex h-6 items-center">
                  <AIButtonComponent
                    size="sm"
                    label={t.ai.ask}
                    onClick={AIButton}
                    icon={OneIcon}
                  />
                </div>
              )}
              {actions && (
                <DropdownInternal
                  items={actions}
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex max-h-full flex-1 flex-col overflow-y-auto px-4 pb-4">
        {children}
      </div>
    </div>
  )
}

const F0WidgetSkeleton = () => {
  return (
    <div className="relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background">
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
