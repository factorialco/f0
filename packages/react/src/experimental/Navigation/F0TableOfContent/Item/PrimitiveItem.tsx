import { OneEllipsis } from "@/components/OneEllipsis/OneEllipsis"
import { Icon } from "@/components/Utilities/Icon"
import { Counter } from "@/experimental"
import { ChevronDown, ChevronRight, Handle } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Button } from "@/ui/button"
import { AnimatePresence, DragControls, motion } from "motion/react"
import { ReactNode } from "react"
import { TOCItem } from "../types"
import { ItemDropDown } from "./ItemDropDown"

interface PrimitiveItemProps {
  item: TOCItem
  counter?: number
  isActive?: boolean
  sortable: boolean
  collapsible?: boolean
  isExpanded?: boolean
  onToggleExpanded?: (id: string) => void
  dragControls: DragControls
  children?: ReactNode
  open: boolean
  setOpen: (open: boolean) => void
  isHovered: boolean
  setIsHovered: (hovered: boolean) => void
}

export function PrimitiveItem({
  item,
  counter,
  isActive,
  sortable,
  collapsible = false,
  isExpanded = false,
  onToggleExpanded = () => {},
  dragControls,
  children,
  open,
  setOpen,
  isHovered,
  setIsHovered,
}: PrimitiveItemProps) {
  const translations = useI18n()
  const { label, onClick, icon, disabled, otherActions } = item

  // Logic: show dropdown on hover only if counter exists, always visible if no counter
  // Keep dropdown visible while it's open to prevent flickering
  const shouldShowDropdown =
    otherActions &&
    otherActions.length > 0 &&
    (counter ? isHovered || open : true)

  // Show handle icon on hover or when dropdown is open
  const showHandleIcon = sortable && (isHovered || open)

  return (
    <div className="flex w-full min-w-0 items-center">
      {collapsible && (
        <Button
          round
          size="sm"
          variant="ghost"
          onClick={(e) => {
            e.stopPropagation()
            onToggleExpanded?.(item.id)
          }}
          aria-label={translations.actions.toggle}
          className="text-f1-icon"
        >
          <Icon icon={isExpanded ? ChevronDown : ChevronRight} size="sm" />
        </Button>
      )}
      <div
        className={cn(
          focusRing("focus:border-f1-border-focus"),
          "relative flex h-[36px] min-w-0 flex-grow items-center gap-1 rounded-[10px] border border-solid border-transparent px-1.5 text-sm transition-colors",
          isActive && "bg-f1-background-selected",
          onClick && !disabled && "cursor-pointer hover:bg-f1-background-hover",
          disabled && "cursor-not-allowed opacity-30"
        )}
        onClick={disabled ? undefined : () => onClick?.(item.id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {(sortable || icon) && (
          <div className="absolute left-1.5 top-1/2 -translate-y-1/2">
            <AnimatePresence mode="wait">
              {showHandleIcon ? (
                <motion.div
                  key="handle"
                  initial={{ opacity: 0, scale: 0.8, x: 0 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 0 }}
                  transition={{
                    duration: 0.15,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="flex flex-shrink-0 items-center justify-center"
                >
                  <Button
                    round
                    size="sm"
                    variant="ghost"
                    className="flex-shrink-0 cursor-grab text-f1-icon active:cursor-grabbing"
                    onPointerDown={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      dragControls?.start(e)
                    }}
                    aria-label="Drag to reorder"
                  >
                    <Icon icon={Handle} size="xs" />
                  </Button>
                </motion.div>
              ) : (
                icon && (
                  <motion.div
                    key="icon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.15,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="flex flex-shrink-0 items-center justify-center p-0.5 text-f1-icon"
                  >
                    <Icon icon={icon} size="md" />
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        )}
        <OneEllipsis
          lines={1}
          className={cn(
            "flex-grow text-[14px] font-medium text-f1-foreground transition-all",
            showHandleIcon || icon ? "pl-7" : "pl-0"
          )}
        >
          {label}
        </OneEllipsis>

        {(counter || (otherActions && otherActions.length > 0)) && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {counter && !shouldShowDropdown ? (
                <motion.div
                  key="counter"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.15,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="flex items-center justify-center"
                >
                  <Counter value={counter} />
                </motion.div>
              ) : (
                otherActions &&
                otherActions.length > 0 && (
                  <motion.div
                    key="dropdown"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.15,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="flex items-center justify-center"
                  >
                    <ItemDropDown
                      otherActions={otherActions}
                      open={open}
                      setOpen={setOpen}
                      disabled={disabled}
                    />
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
      {children}
    </div>
  )
}
