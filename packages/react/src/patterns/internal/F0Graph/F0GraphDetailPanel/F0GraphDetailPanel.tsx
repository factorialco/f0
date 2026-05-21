import { FocusScope } from "@radix-ui/react-focus-scope"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import {
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"

import type { F0AlertProps } from "@/components/F0Alert/types"
import type { F0ButtonProps } from "@/components/F0Button/F0Button"

import { F0Alert } from "@/components/F0Alert"
import { F0Button } from "@/components/F0Button"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { F0Text } from "@/components/F0Text"
import { Dropdown, type DropdownItem } from "@/experimental/Navigation/Dropdown"
import { Cross, EllipsisHorizontal } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

// ─── Constants ───────────────────────────────────────────────────

const MIN_WIDTH = 320
const MAX_WIDTH_RATIO = 0.4
const KEYBOARD_STEP = 16
const KEYBOARD_STEP_LARGE = 64
const BORDER_HOVER_DELAY = 80

function storageKey(graphId: string): string {
  return `f0graph:detailPanelWidth:${graphId}`
}

function getMaxWidth(): number {
  return typeof window !== "undefined"
    ? Math.round(window.innerWidth * MAX_WIDTH_RATIO)
    : 576
}

function clampWidth(width: number): number {
  const maxWidth = getMaxWidth()
  return Math.round(Math.min(Math.max(width, MIN_WIDTH), maxWidth))
}

function readPersistedWidth(graphId: string): number | null {
  try {
    const raw = localStorage.getItem(storageKey(graphId))
    if (raw === null) return null
    const parsed = Number(raw)
    if (Number.isNaN(parsed) || parsed <= 0) return null
    return clampWidth(parsed)
  } catch {
    return null
  }
}

function persistWidth(graphId: string, width: number): void {
  try {
    localStorage.setItem(storageKey(graphId), String(width))
  } catch {
    // localStorage may be full or disabled — silently ignore
  }
}

// ─── Shared types ────────────────────────────────────────────────

interface BaseProps {
  /** Whether the panel is open. */
  open: boolean
  /** Initial pixel width of the panel. Defaults to 384. The user's persisted width (via localStorage) takes precedence. */
  initialWidth?: number
  /** Stable identifier scoping the persisted width in localStorage. Defaults to `"default"`. */
  graphId?: string
  /** @deprecated Use `initialWidth` instead. Kept for backward compat — treated as `initialWidth`. */
  width?: number
  /** Called when the panel should close (X button or Escape). */
  onClose: () => void
  /** Optional landmark label for screen readers. */
  ariaLabel?: string
  /** Optional className override on the panel <aside>. */
  className?: string
  /**
   * Body content (typically the section list rendered by the consumer).
   * Rendered below the variant-specific header chrome.
   */
  children?: ReactNode
}

type ActionConfig = Pick<
  F0ButtonProps,
  "label" | "icon" | "disabled" | "loading"
> & {
  onClick?: {
    bivarianceHack(
      event?: ReactMouseEvent<HTMLElement, MouseEvent>
    ): void | Promise<unknown>
  }["bivarianceHack"]
}

interface DefaultVariantProps extends BaseProps {
  variant?: "default"
  /** Optional icon shown next to the title. */
  icon?: IconType
  /** Title text rendered in the header. */
  title: string
  /** Optional short description rendered below the title. */
  description?: string
  /** Optional inline alert rendered below the description. */
  alert?: F0AlertProps
  /**
   * Customizable header action button (e.g. "Edit", "Save"). Rendered to the
   * left of the menu and close buttons.
   */
  action?: ActionConfig
  /**
   * Items for the ··· menu in the header. When omitted, the menu button is
   * hidden.
   */
  menuActions?: DropdownItem[]
  /**
   * Footer action buttons pinned to the bottom of the panel.
   * Renders right-aligned. The last button uses the primary style;
   * preceding buttons use outline style.
   */
  footer?: ActionConfig[]
}

interface ResourceVariantProps extends BaseProps {
  variant: "resource"
  /**
   * Custom-rendered header content (e.g. avatar + name + role). The consumer
   * fully controls this area.
   */
  header: ReactNode
  /**
   * Ordered list of actions for the row below the header.
   *
   * Layout is automatic:
   * - 1 action → full width
   * - 2 actions → split 50/50
   * - 3+ actions → first two render as buttons, the rest fold into a
   *   trailing `···` dropdown
   */
  actions?: ActionConfig[]
}

export type F0GraphDetailPanelProps = DefaultVariantProps | ResourceVariantProps

// ─── Resize handle ───────────────────────────────────────────────

function ResizeHandle({
  width,
  onResize,
  onResizeEnd,
}: {
  width: number
  onResize: (newWidth: number) => void
  onResizeEnd: (finalWidth: number) => void
}) {
  const prefersReducedMotion = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const draggingRef = useRef(false)
  const startXRef = useRef(0)
  const startWidthRef = useRef(0)

  const clearHoverTimer = useCallback(() => {
    if (hoverTimerRef.current !== null) {
      clearTimeout(hoverTimerRef.current)
      hoverTimerRef.current = null
    }
  }, [])

  const handlePointerEnter = useCallback(() => {
    if (prefersReducedMotion) {
      setHovered(true)
      return
    }
    clearHoverTimer()
    hoverTimerRef.current = setTimeout(() => {
      setHovered(true)
    }, BORDER_HOVER_DELAY)
  }, [prefersReducedMotion, clearHoverTimer])

  const handlePointerLeave = useCallback(() => {
    clearHoverTimer()
    if (!draggingRef.current) {
      setHovered(false)
    }
  }, [clearHoverTimer])

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault()
      draggingRef.current = true
      startXRef.current = e.clientX
      startWidthRef.current = width
      try {
        ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
      } catch {
        // setPointerCapture may not be available in test environments
      }
      setHovered(true)
    },
    [width]
  )

  const computeWidth = useCallback(
    (clientX: number) =>
      clampWidth(startWidthRef.current + (startXRef.current - clientX)),
    []
  )

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!draggingRef.current) return
      onResize(computeWidth(e.clientX))
    },
    [onResize, computeWidth]
  )

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!draggingRef.current) return
      draggingRef.current = false
      // Persist the current width. The last pointerMove already set the
      // visual width via onResize; pointerUp only needs to commit it.
      onResizeEnd(width)
      // Check if pointer is still over the handle
      const rect = (e.target as HTMLElement).getBoundingClientRect()
      const cx = e.clientX || 0
      const cy = e.clientY || 0
      if (
        cx < rect.left ||
        cx > rect.right ||
        cy < rect.top ||
        cy > rect.bottom
      ) {
        setHovered(false)
      }
    },
    [width, onResizeEnd]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      let delta = 0
      const step = e.shiftKey ? KEYBOARD_STEP_LARGE : KEYBOARD_STEP
      if (e.key === "ArrowLeft") {
        delta = step // expand (panel grows leftward)
      } else if (e.key === "ArrowRight") {
        delta = -step // shrink
      }
      if (delta === 0) return
      e.preventDefault()
      const newWidth = clampWidth(width + delta)
      onResize(newWidth)
      onResizeEnd(newWidth)
    },
    [width, onResize, onResizeEnd]
  )

  const maxWidth = getMaxWidth()

  return (
    <div
      role="separator"
      aria-orientation="vertical"
      aria-valuenow={width}
      aria-valuemin={MIN_WIDTH}
      aria-valuemax={maxWidth}
      aria-label="Resize detail panel"
      tabIndex={0}
      className={cn(
        "absolute -left-2 bottom-0 top-0 z-30 w-4 cursor-ew-resize select-none",
        "border-0 border-l-2 border-solid transition-colors",
        hovered ? "border-f1-border-default" : "border-transparent"
      )}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onKeyDown={handleKeyDown}
      data-testid="detail-panel-resize-handle"
    />
  )
}

// ─── Component ───────────────────────────────────────────────────

export const F0GraphDetailPanel = (props: F0GraphDetailPanelProps) => {
  const {
    open,
    initialWidth,
    width: legacyWidth,
    graphId = "default",
    ariaLabel,
    onClose,
    className,
    children,
  } = props
  const baseWidth = initialWidth ?? legacyWidth ?? 384
  const prefersReducedMotion = useReducedMotion()
  const triggerRef = useRef<Element | null>(null)

  // ── Resizable width state ──
  const [panelWidth, setPanelWidth] = useState<number>(() => {
    const persisted = readPersistedWidth(graphId)
    return persisted ?? baseWidth
  })

  // When graphId changes, re-read persisted width
  useEffect(() => {
    const persisted = readPersistedWidth(graphId)
    setPanelWidth(persisted ?? baseWidth)
  }, [graphId, baseWidth])

  const handleResize = useCallback((newWidth: number) => {
    setPanelWidth(newWidth)
  }, [])

  const handleResizeEnd = useCallback(
    (finalWidth: number) => {
      setPanelWidth(finalWidth)
      persistWidth(graphId, finalWidth)
    },
    [graphId]
  )

  // Save the element that had focus before the panel opened
  useEffect(() => {
    if (open) {
      triggerRef.current = document.activeElement
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation()
        onClose()
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [open, onClose])

  const springTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 320, damping: 36 }

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          tabIndex={-1}
          key="f0-graph-detail-panel"
          role="complementary"
          aria-label={ariaLabel ?? "Graph details"}
          initial={
            prefersReducedMotion ? false : { x: panelWidth + 16, opacity: 0 }
          }
          animate={{ x: 0, opacity: 1 }}
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : { x: panelWidth + 16, opacity: 0 }
          }
          transition={springTransition}
          style={{ width: panelWidth }}
          className={cn(
            "absolute bottom-0 right-0 top-0 z-20 flex flex-col overflow-hidden outline-none",
            "border-0 border-l border-solid border-f1-border-secondary",
            "bg-f1-background-inverse-secondary",
            "shadow-[0_4px_20px_0_hsl(var(--shadow)/0.08)]",
            "backdrop-blur-[20px]",
            className
          )}
        >
          <ResizeHandle
            width={panelWidth}
            onResize={handleResize}
            onResizeEnd={handleResizeEnd}
          />
          <FocusScope
            trapped
            loop
            className="flex min-h-0 flex-1 flex-col"
            onMountAutoFocus={(e) => {
              // Don't yank focus into the panel (it would land on the close
              // button). Tab still loops inside the panel once the user
              // chooses to enter it.
              e.preventDefault()
            }}
            onUnmountAutoFocus={(e) => {
              e.preventDefault()
              if (triggerRef.current instanceof HTMLElement) {
                triggerRef.current.focus()
              }
            }}
          >
            {props.variant === "resource" ? (
              <ResourceHeader {...props} onClose={onClose} />
            ) : (
              <DefaultHeader {...props} onClose={onClose} />
            )}
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
              {children}
            </div>
            {props.variant !== "resource" &&
              props.footer &&
              props.footer.length > 0 && (
                <div className="flex items-center justify-end gap-2 border-0 border-t border-solid border-f1-border-secondary bg-f1-background-inverse-secondary/40 px-4 py-3 backdrop-blur-[20px]">
                  {props.footer.map((a, i) => (
                    <F0Button
                      key={i}
                      variant={
                        i === props.footer!.length - 1 ? "default" : "outline"
                      }
                      size="sm"
                      label={a.label}
                      icon={a.icon}
                      onClick={a.onClick}
                      disabled={a.disabled}
                      loading={a.loading}
                    />
                  ))}
                </div>
              )}
          </FocusScope>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

// ─── Default variant header ──────────────────────────────────────

const DefaultHeader = ({
  icon,
  title,
  description,
  alert,
  action,
  menuActions,
  onClose,
}: DefaultVariantProps) => {
  const i18n = useI18n()

  return (
    <div className="flex flex-col">
      <header className="flex items-center gap-2 px-4 pb-3 pt-4">
        {icon && <F0Icon icon={icon} size="md" color="default" aria-hidden />}
        <h2 className="min-w-0 flex-1">
          <F0Text as="span" variant="label" content={title} ellipsis />
        </h2>
        {action && (
          <F0Button
            variant="outline"
            size="sm"
            label={action.label}
            icon={action.icon}
            onClick={action.onClick}
            disabled={action.disabled}
            loading={action.loading}
          />
        )}
        {menuActions && menuActions.length > 0 && (
          <Dropdown items={menuActions}>
            <F0Button
              variant="outline"
              size="sm"
              hideLabel
              label={i18n.actions.more}
              icon={EllipsisHorizontal}
            />
          </Dropdown>
        )}
        <CloseButton onClose={onClose} />
      </header>
      {description && (
        <div className="px-4 pb-3">
          <F0Text variant="description" content={description} />
        </div>
      )}
      {alert && (
        <div className="px-4 pb-3">
          <F0Alert {...alert} />
        </div>
      )}
    </div>
  )
}

// ─── Resource variant header ─────────────────────────────────────

const ResourceHeader = ({ header, actions, onClose }: ResourceVariantProps) => {
  const i18n = useI18n()
  const visible = actions?.slice(0, 2) ?? []
  const overflow = actions?.slice(2) ?? []

  const invokeAction = (
    action: ActionConfig,
    event?: ReactMouseEvent<HTMLElement, MouseEvent>
  ) => {
    action.onClick?.(event)
  }

  const overflowItems: DropdownItem[] = overflow.map((a) => ({
    label: a.label ?? "",
    icon: a.icon,
    onClick: () => invokeAction(a),
  }))

  return (
    <div className="relative flex flex-col">
      <CloseButton onClose={onClose} className="absolute right-2 top-2 z-10" />
      <div className="flex flex-col">{header}</div>
      {visible.length > 0 && (
        <div className="flex items-center gap-2 px-4 pb-6 pt-2">
          {visible.map((a, i) => (
            <div
              key={i}
              className="flex min-w-0 flex-1 [&>a]:w-full [&>button]:w-full"
            >
              <F0Button
                variant="outline"
                size="md"
                label={a.label}
                icon={a.icon}
                onClick={(event) => invokeAction(a, event)}
                disabled={a.disabled}
                loading={a.loading}
              />
            </div>
          ))}
          {overflowItems.length > 0 && (
            <Dropdown items={overflowItems}>
              <F0Button
                variant="outline"
                size="md"
                hideLabel
                label={i18n.actions.more}
                icon={EllipsisHorizontal}
              />
            </Dropdown>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Close button ────────────────────────────────────────────────

const CloseButton = ({
  onClose,
  className,
}: {
  onClose: () => void
  className?: string
}) => {
  const i18n = useI18n()

  return (
    <div className={cn("shrink-0", className)}>
      <F0Button
        variant="outline"
        size="md"
        hideLabel
        label={i18n.actions.close}
        icon={Cross}
        onClick={onClose}
      />
    </div>
  )
}
