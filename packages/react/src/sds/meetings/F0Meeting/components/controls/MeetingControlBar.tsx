import { Fragment, useMemo } from "react"

import { F0Icon } from "@/components/F0Icon"
import { EllipsisHorizontal } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"

import { useMeasuredBox } from "../../layout/useMeasuredBox"
import { useMeetingSurface } from "../../providers/MeetingSurfaceProvider"
import { type F0MeetingAction } from "../../types"
import { collapseActions } from "./collapse-actions"
import { MeetingActionButton } from "./MeetingActionButton"

export type MeetingControlBarProps = {
  actions: F0MeetingAction[]
}

/**
 * The action bar. Everything about it is host-extensible: F0 only guarantees
 * that the core controls exist and that the bar degrades sensibly as it narrows.
 *
 * Capacity comes from the bar's own measured width, not the viewport, so the
 * same component works in fullscreen and inside a 300px floating window.
 */
export const MeetingControlBar = ({ actions }: MeetingControlBarProps) => {
  const i18n = useI18n()
  const { effectiveMode } = useMeetingSurface()
  const [containerRef, box] = useMeasuredBox<HTMLDivElement>()

  const { visible, overflow } = useMemo(
    () => collapseActions(actions, box.width, effectiveMode),
    [actions, box.width, effectiveMode]
  )

  const compact = effectiveMode === "minimized" || box.width < 320

  return (
    <div
      ref={containerRef}
      className="flex w-full items-center justify-center"
      data-testid="meeting-control-bar"
    >
      <div
        className={cn(
          "flex items-center rounded-xl bg-f1-background/95 backdrop-blur border border-solid border-f1-border-secondary",
          compact ? "gap-1 p-1" : "gap-1 p-2"
        )}
        role="toolbar"
        aria-label={i18n.meeting.meetingWindow}
      >
        {visible.map((action, index) => {
          const previous = visible[index - 1]
          const needsSeparator =
            previous !== undefined &&
            previous.group !== undefined &&
            action.group !== undefined &&
            previous.group !== action.group

          return (
            <Fragment key={action.id}>
              {needsSeparator && (
                <div
                  aria-hidden
                  className="mx-1 h-4 w-px shrink-0 bg-f1-border-secondary"
                />
              )}
              <MeetingActionButton action={action} compact={compact} />
            </Fragment>
          )
        })}

        {overflow.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label={i18n.meeting.moreActions}
                className={cn(
                  "flex items-center justify-center rounded-md bg-f1-background-secondary text-f1-foreground hover:bg-f1-background-secondary-hover",
                  compact ? "h-8 w-8" : "h-10 w-10",
                  focusRing()
                )}
              >
                <F0Icon
                  icon={EllipsisHorizontal}
                  size={compact ? "sm" : "md"}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="top">
              {overflow.map((action) => (
                <DropdownMenuItem
                  key={action.id}
                  onSelect={action.onClick}
                  disabled={action.disabled}
                >
                  <F0Icon
                    icon={
                      action.pressed && action.activeIcon
                        ? action.activeIcon
                        : action.icon
                    }
                    size="sm"
                  />
                  {action.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  )
}
