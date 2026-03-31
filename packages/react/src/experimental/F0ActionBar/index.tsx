import { AnimatePresence, motion } from "motion/react"
import {
  forwardRef,
  Fragment,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react"

import { F0Button } from "@/components/F0Button"
import {
  ButtonDropdownGroup,
  F0ButtonDropdown,
} from "@/components/F0ButtonDropdown"
import { F0Icon, IconType } from "@/components/F0Icon"
import { Dropdown, MobileDropdown } from "@/experimental/Navigation/Dropdown"
import CheckCircleAnimated from "@/icons/animated/CheckCircle"
import { AlertCircleLine } from "@/icons/app"
import { withDataTestId } from "@/lib/data-testid"
import { cn } from "@/lib/utils"
import { Spinner } from "@/ui/Spinner"

type ActionType = {
  label: string
  icon?: IconType
  onClick?: () => void
  disabled?: boolean
  critical?: boolean
  description?: string
}

export type ActionBarGroup = {
  label?: string
  items: ActionBarItem[]
}

export type ActionBarItem = ActionType

function isActionGroup(
  item: ActionBarItem | ActionBarGroup
): item is ActionBarGroup {
  return "items" in item
}

/**
 * Normalize the items to an array of DropdownButtonGroup
 */
const normalizeItems = (
  items: ActionType[] | ActionBarGroup[] | ActionBarGroup
): ActionBarGroup[] => {
  if (Array.isArray(items)) {
    if (items.every((item) => isActionGroup(item))) {
      // ActionBarGroup[]
      return items
    } else {
      // ActionType[]
      return [
        {
          items: items,
        },
      ]
    }
  } else {
    // ActionBarGroup
    return [items]
  }
}

export type ActionBarStatus = "idle" | "loading" | "success"

interface WiggleOptions {
  errorHighlight?: boolean
}

export interface F0ActionBarRef {
  wiggle: (options?: WiggleOptions) => void
}

const errorNavigateClassName = "f0-action-bar-error-navigate"
const WIGGLE_DURATION_MS = 600

interface F0ActionBarProps {
  /**
   * Whether the action bar is open
   */
  isOpen: boolean

  /**
   * The primary action
   */
  primaryActions?: ActionBarItem[] | ActionBarGroup[] | ActionBarGroup

  /**
   * The secondary actions
   */
  secondaryActions?: ActionBarItem[]

  /**
   * The label of the action bar
   */
  label?: string

  /**
   * Visual variant of the action bar
   * - "dark": Dark background with light text (default)
   * - "light": Light background with dark text
   * @default "dark"
   */
  variant?: "dark" | "light"

  /**
   * Custom content to render on the left side (e.g., error navigation)
   */
  leftContent?: React.ReactNode

  /**
   * The current status of the action bar.
   * - "idle": Default state, shows an alert icon (pending changes)
   * - "loading": Shows a spinner and disables all actions
   * - "success": Shows a checkmark icon and disables all actions
   * @default "idle"
   */
  status?: ActionBarStatus
}

const StatusIcon = ({
  status,
  isLight,
}: {
  status: ActionBarStatus
  isLight: boolean
}) => {
  if (status === "loading") {
    return (
      <Spinner
        size="small"
        className={cn(!isLight && "text-f1-foreground-inverse")}
      />
    )
  }

  if (status === "success") {
    return (
      <CheckCircleAnimated
        animate="animate"
        className="h-5 w-5 text-f1-icon-positive"
      />
    )
  }

  return (
    <F0Icon
      icon={AlertCircleLine}
      size="md"
      color={isLight ? "currentColor" : "inverse"}
    />
  )
}

const _F0ActionBar = forwardRef<F0ActionBarRef, F0ActionBarProps>(
  (
    {
      isOpen,
      secondaryActions = [],
      label,
      variant = "dark",
      leftContent,
      status = "idle",
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const wiggleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const [contentRect, setContentRect] = useState<{
      left: number
      width: number
    } | null>(null)

    useEffect(() => {
      const el = document.getElementById("content")
      if (!el) return

      const update = () => {
        const rect = el.getBoundingClientRect()
        const left = rect.left
        const width = rect.width

        setContentRect((prev) => {
          if (prev && prev.left === left && prev.width === width) {
            return prev
          }

          return { left, width }
        })
      }

      update()

      const observer = new ResizeObserver(update)
      observer.observe(el)

      return () => observer.disconnect()
    }, [])

    useEffect(() => {
      return () => {
        if (wiggleTimeoutRef.current) {
          clearTimeout(wiggleTimeoutRef.current)
        }
      }
    }, [])

    useImperativeHandle(ref, () => ({
      wiggle(options?: WiggleOptions) {
        const el = containerRef.current
        if (!el) return

        const className = options?.errorHighlight ? errorNavigateClassName : ""
        if (!className) return

        if (wiggleTimeoutRef.current) {
          clearTimeout(wiggleTimeoutRef.current)
        }

        el.classList.remove(className)
        void el.offsetWidth // Force reflow to restart animation
        el.classList.add(className)

        wiggleTimeoutRef.current = setTimeout(() => {
          el.classList.remove(className)
          wiggleTimeoutRef.current = null
        }, WIGGLE_DURATION_MS)
      },
    }))
    const visibleSecondaryActions = secondaryActions.slice(0, 2)
    const dropdownActions = secondaryActions.slice(2).map((action) => ({
      ...action,
      critical: action.critical || false,
    }))

    const isLight = variant === "light"
    const isInteractionDisabled = status === "loading" || status === "success"

    /**
     * Normalize the primary actions to be a list of groups
     */
    const primaryActions = useMemo(
      () => normalizeItems(props.primaryActions ?? []),
      [props.primaryActions]
    )

    /**
     * Transforms the normalized primary actions into a format suitable for dropdown components.
     * Each action group and its items are mapped to the expected dropdown item structure.
     */
    const primaryActionsDropdownItems = useMemo<ButtonDropdownGroup[]>(() => {
      return primaryActions.map((group) => ({
        ...group,
        items: group.items.map((item) => ({
          value: item.label,
          label: item.label,
          icon: item.icon,
          critical: item.critical,
          description: item.description,
          disabled: item.disabled,
        })),
      }))
    }, [primaryActions])

    const singlePrimaryAction = useMemo(() => {
      return primaryActions.length === 1 && primaryActions[0].items.length === 1
        ? primaryActions[0].items[0]
        : null
    }, [primaryActions])

    const getActionByValue = useCallback(
      (value: string) => {
        return primaryActions
          .flatMap((group) => group.items)
          .find((item) => item.label === value)
      },
      [primaryActions]
    )

    // Wrapper class for buttons - only apply dark theme wrapper for dark variant
    const buttonWrapperClass = isLight ? "" : "dark"

    const actionBarContent = (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={containerRef}
            data-variant={variant}
            initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 32, filter: "blur(6px)" }}
            transition={{ ease: [0.175, 0.885, 0.32, 1.275], duration: 0.3 }}
            style={
              contentRect
                ? {
                    left: contentRect.left,
                    right:
                      window.innerWidth - contentRect.left - contentRect.width,
                  }
                : undefined
            }
            className={cn(
              "fixed bottom-2 left-2 right-2 z-50 flex h-fit flex-col items-center gap-2 rounded-xl p-2 shadow-lg backdrop-blur-sm sm:bottom-5 sm:h-12 sm:w-max sm:flex-row sm:gap-4 sm:min-w-[475px] sm:justify-between",
              contentRect
                ? "sm:left-auto sm:right-auto sm:mx-auto"
                : "sm:left-2 sm:right-2 sm:mx-auto",
              isLight
                ? "border border-solid border-f1-border-secondary bg-f1-background text-f1-foreground"
                : "bg-f1-background-inverse text-f1-foreground dark:bg-f1-background-inverse-secondary"
            )}
          >
            {leftContent}
            {(!!label || (status && status !== "idle")) && (
              <div className="ml-2 flex items-center gap-2">
                {status && status !== "idle" && (
                  <StatusIcon status={status} isLight={isLight} />
                )}
                {!!label && (
                  <span
                    className={cn(
                      "font-medium",
                      isLight
                        ? "text-f1-foreground"
                        : "text-f1-foreground-inverse"
                    )}
                  >
                    {label}
                  </span>
                )}
              </div>
            )}
            <div>
              <div
                className={cn(
                  buttonWrapperClass,
                  "flex flex-col items-center gap-2 sm:hidden [&_button]:w-full [&_div]:w-full"
                )}
              >
                <Fragment key="mobile-actions">
                  <MobileDropdown items={secondaryActions} />
                  {!singlePrimaryAction ? (
                    <F0ButtonDropdown
                      items={primaryActionsDropdownItems}
                      onClick={(value) => {
                        const action = getActionByValue(value)
                        ;(action as ActionType)?.onClick?.()
                      }}
                      size="lg"
                      disabled={isInteractionDisabled}
                    />
                  ) : (
                    <F0Button
                      label={singlePrimaryAction.label}
                      icon={singlePrimaryAction.icon}
                      onClick={singlePrimaryAction.onClick}
                      disabled={
                        isInteractionDisabled || singlePrimaryAction.disabled
                      }
                      loading={status === "loading"}
                      size="lg"
                    />
                  )}
                </Fragment>
              </div>
              <div
                className={cn(
                  buttonWrapperClass,
                  "hidden items-center gap-2 sm:flex"
                )}
              >
                <Fragment key="desktop-actions">
                  {dropdownActions.length > 0 && (
                    <Dropdown items={dropdownActions} />
                  )}
                  {visibleSecondaryActions
                    .slice()
                    .reverse()
                    .map((action) => (
                      <F0Button
                        variant={action.critical ? "critical" : "outline"}
                        key={action.label}
                        label={action.label}
                        icon={action.icon}
                        onClick={action.onClick}
                        disabled={isInteractionDisabled || action.disabled}
                      />
                    ))}
                  {!singlePrimaryAction ? (
                    <>
                      <F0ButtonDropdown
                        items={primaryActionsDropdownItems}
                        onClick={(value) => {
                          const action = getActionByValue(value)
                          ;(action as ActionType)?.onClick?.()
                        }}
                        disabled={isInteractionDisabled}
                      />
                    </>
                  ) : (
                    <F0Button
                      label={singlePrimaryAction.label}
                      icon={singlePrimaryAction.icon}
                      onClick={singlePrimaryAction.onClick}
                      disabled={
                        isInteractionDisabled || singlePrimaryAction.disabled
                      }
                      loading={status === "loading"}
                    />
                  )}
                </Fragment>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )

    return actionBarContent
  }
)

_F0ActionBar.displayName = "F0ActionBar"

export const F0ActionBar = withDataTestId(_F0ActionBar)
