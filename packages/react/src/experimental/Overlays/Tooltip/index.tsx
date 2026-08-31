import React, {
  ComponentProps,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { stripNativeTitle } from "@/lib/strip-native-title"
import {
  TooltipContent,
  Tooltip as TooltipPrimitive,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"

import { cn } from "../../../lib/utils"
import { Shortcut } from "@/ui/Shortcut"

/**
 * One bullet of a tooltip's list. The object form gets a semibold lead so a
 * list of named things (alerts, broken rules) reads as a list rather than a run
 * of sentences.
 */
export type TooltipListItem = string | { title: string; description?: string }

/**
 * The copy a tooltip shows. At least one of the three must be present — a
 * tooltip with nothing to say never opens.
 */
export type TooltipCopyProps =
  | { label: string; description?: string; items?: TooltipListItem[] }
  | { label?: string; description: string; items?: TooltipListItem[] }
  | { label?: string; description?: string; items: TooltipListItem[] }

type TooltipInternalProps = {
  children: React.ReactNode
  shortcut?: ComponentProps<typeof Shortcut>["keys"]
  delay?: number
  instant?: boolean
  onOpen?: () => void
} & TooltipCopyProps

export function TooltipInternal({
  label,
  description,
  items,
  children,
  shortcut,
  instant = false,
  delay = 700,
  onOpen,
}: TooltipInternalProps) {
  const [open, setOpen] = useState(false)
  const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openDelayMs = useMemo(() => (instant ? 100 : delay), [delay, instant])

  /**
   * A tooltip with nothing to say must not open. Deciding it here lets callers
   * whose text can be empty keep it mounted — unmounting it instead changes the
   * element type above the trigger, and React then remounts the trigger.
   */
  const hasContent = Boolean(label || description || items?.length || shortcut)

  const clearOpenTimeout = useCallback(() => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current)
      openTimeoutRef.current = null
    }
  }, [])

  const close = useCallback(() => {
    clearOpenTimeout()
    setOpen(false)
  }, [clearOpenTimeout])

  const scheduleOpen = useCallback(() => {
    if (!hasContent) return
    onOpen?.()
    clearOpenTimeout()
    openTimeoutRef.current = setTimeout(() => setOpen(true), openDelayMs)
  }, [clearOpenTimeout, hasContent, onOpen, openDelayMs])

  useEffect(() => close, [close])

  const isFocusVisible = useCallback((el: Element) => {
    try {
      return el.matches(":focus-visible")
    } catch {
      return false
    }
  }, [])

  /**
   * The trigger mounts through Radix's `asChild` Slot, which clones its single
   * child element and merges the hover/focus handlers and the anchoring ref
   * into it. A Fragment, a string, or an array can't carry props or a ref, so
   * Slot drops them SILENTLY — the tooltip renders no trigger and never opens.
   * Wrap those children in a real inline element instead. It must produce a
   * box (`inline-flex`, not `contents`): Radix positions the bubble from the
   * trigger's bounding rect.
   */
  const slottableTrigger =
    React.isValidElement(children) && children.type !== React.Fragment

  return (
    <>
      <TooltipProvider
        delayDuration={openDelayMs}
        disableHoverableContent={instant}
      >
        <TooltipPrimitive
          open={hasContent && open}
          onOpenChange={(nextOpen) => {
            // We control when the tooltip opens so it doesn't show on mouse click
            // focus/programmatic focus. Still allow Radix to request closing (e.g. escape).
            if (!nextOpen) close()
          }}
        >
          <TooltipTrigger
            asChild
            className="pointer-events-auto"
            onPointerEnter={(e) => {
              if (e.pointerType === "touch") return
              scheduleOpen()
            }}
            onPointerLeave={() => close()}
            onPointerDown={() => close()}
            onFocus={(e) => {
              if (!hasContent) return
              if (isFocusVisible(e.currentTarget)) {
                onOpen?.()
                setOpen(true)
              } else {
                // If focus comes from mouse/touch/programmatic focus, keep closed.
                close()
              }
            }}
            onBlur={() => close()}
          >
            {slottableTrigger ? (
              stripNativeTitle(children)
            ) : (
              <span className="inline-flex h-fit w-fit">{children}</span>
            )}
          </TooltipTrigger>
          <TooltipContent
            className={cn(
              "max-w-xs",
              shortcut && "pr-1.5",
              instant && "pointer-events-none"
            )}
          >
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                {label && <p className="font-semibold">{label}</p>}
                {shortcut && <Shortcut keys={shortcut} variant="inverse" />}
              </div>
              {description && (
                <p className="font-normal">{description.toString()}</p>
              )}
              {items && items.length > 0 && (
                <ul className="m-0 flex list-disc flex-col gap-0.5 pl-4 font-normal">
                  {items.map((item, index) => (
                    <li
                      key={`${index}-${typeof item === "string" ? item : item.title}`}
                    >
                      {typeof item === "string" ? (
                        item
                      ) : (
                        <>
                          <span className="font-semibold">{item.title}</span>
                          {item.description && <> {item.description}</>}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </TooltipContent>
        </TooltipPrimitive>
      </TooltipProvider>
    </>
  )
}

const privateProps = ["delay", "onOpen"] as const

export type TooltipProps = Omit<
  TooltipInternalProps,
  (typeof privateProps)[number]
>

const _Tooltip = (props: TooltipProps) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as TooltipInternalProps)

  return <TooltipInternal {...publicProps} />
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const Tooltip = withDataTestId(
  experimentalComponent("Tooltip", _Tooltip)
)
