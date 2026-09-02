import { Fragment, useMemo } from "react"

import { F0Button } from "@/components/F0Button"
import {
  Dropdown,
  type DropdownItemObject,
} from "@/experimental/Navigation/Dropdown"
import { Ellipsis } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

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
 * A collapsed action, as a menu row.
 *
 * The hand-rolled menu this replaces dropped two things on the floor:
 * `disabledReason` was never shown, so a disabled row gave no reason; and
 * `variant: "critical"` was lost, so "Leave" turned into an ordinary item the
 * moment the bar was narrow enough to collapse it.
 */
const toDropdownItem = (action: F0MeetingAction): DropdownItemObject => ({
  label: action.label,
  icon: action.pressed && action.activeIcon ? action.activeIcon : action.icon,
  onClick: () => action.onClick?.(),
  disabled: action.disabled,
  ...(action.disabledReason ? { disabledTooltip: action.disabledReason } : {}),
  ...(action.variant === "critical" ? { critical: true } : {}),
})

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
        !isMinimized && "h-20"
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

        {/* Only when something actually collapsed into it. A menu that is
            always there and usually empty is a control that teaches you to
            ignore it — and the empty state it used to need ("No more actions")
            is gone with it. */}
        {!isMinimized && overflow.length > 0 && (
          <Dropdown items={overflow.map(toDropdownItem)} align="end">
            <F0Button
              variant="ghost"
              size={compact ? "sm" : "md"}
              hideLabel
              icon={Ellipsis}
              label={i18n.meeting.moreActions}
            />
          </Dropdown>
        )}
      </div>
    </div>
  )
}
