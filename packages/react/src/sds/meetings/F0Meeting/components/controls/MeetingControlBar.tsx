import { Fragment, useMemo } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Ellipsis } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"

import { useMeasuredBox } from "../../layout/useMeasuredBox"
import { useF0MeetingRoster } from "../../providers/F0MeetingProvider"
import { useMeetingSurface } from "../../providers/MeetingSurfaceProvider"
import { type F0MeetingAction } from "../../types"
import { collapseActions, PICKER_IDS } from "./collapse-actions"
import { MeetingActionButton } from "./MeetingActionButton"
import { MeetingMediaControl } from "./MeetingMediaControl"

export type MeetingControlBarProps = {
  actions: F0MeetingAction[]
}

/**
 * The action bar. Everything about it is host-extensible: F0 only guarantees
 * that the core controls exist and that the bar degrades sensibly as it narrows.
 *
 * Capacity comes from the bar's own measured width, not the viewport, so the
 * same component works in fullscreen and inside a 300px floating window.
 *
 * The bar has no surface of its own. It sits on the room's own background,
 * which is what the design shows and what keeps a translucent plate from
 * floating over the video for no reason.
 */
export const MeetingControlBar = ({ actions }: MeetingControlBarProps) => {
  const i18n = useI18n()
  const { effectiveMode } = useMeetingSurface()
  const { localMedia } = useF0MeetingRoster()
  const [containerRef, box] = useMeasuredBox<HTMLDivElement>()

  const { visible, overflow } = useMemo(
    () => collapseActions(actions, box.width, effectiveMode),
    [actions, box.width, effectiveMode]
  )

  const compact = effectiveMode === "minimized" || box.width < 320
  const isMinimized = effectiveMode === "minimized"

  const byId = useMemo(
    () => new Map(visible.map((action) => [action.id, action])),
    [visible]
  )

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex w-full items-center justify-center",
        !isMinimized && "h-16"
      )}
      data-testid="meeting-control-bar"
    >
      <div
        className={cn("flex items-center", compact ? "gap-1" : "gap-2")}
        role="toolbar"
        aria-label={i18n.meeting.meetingWindow}
      >
        {visible.map((action) => {
          // A picker never renders on its own: it is the chevron half of the
          // control it configures, drawn by that control below.
          if (PICKER_IDS.has(action.id)) return null

          if (action.id === "core:microphone" || action.id === "core:camera") {
            const isMicrophone = action.id === "core:microphone"
            const pickerId = isMicrophone
              ? "core:microphoneSettings"
              : "core:cameraSettings"
            const source = isMicrophone
              ? localMedia.microphone
              : localMedia.camera

            return (
              <Fragment key={action.id}>
                <MeetingMediaControl
                  action={action}
                  // Without its picker action the chevron must not appear —
                  // that is how a host removes the device menu.
                  source={
                    byId.has(pickerId) ? source : { ...source, devices: [] }
                  }
                  pickerLabel={
                    isMicrophone
                      ? i18n.meeting.selectMicrophone
                      : i18n.meeting.selectCamera
                  }
                  compact={compact}
                />
              </Fragment>
            )
          }

          return (
            <MeetingActionButton
              key={action.id}
              action={action}
              compact={compact}
            />
          )
        })}

        {/* Always present, not only when something has collapsed: the design
            gives the room a permanent "more" affordance, and a control that
            appears and disappears as the window resizes is worse than one that
            is sometimes short. */}
        {!isMinimized && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label={i18n.meeting.moreActions}
                className={cn(
                  "flex items-center justify-center rounded-xl bg-f1-background-secondary text-f1-foreground hover:bg-f1-background-secondary-hover",
                  compact ? "h-8 w-8" : "h-10 w-10",
                  focusRing()
                )}
              >
                <F0Icon icon={Ellipsis} size={compact ? "sm" : "md"} />
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
              {overflow.length === 0 && (
                <DropdownMenuItem disabled>
                  {i18n.meeting.noMoreActions}
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  )
}
