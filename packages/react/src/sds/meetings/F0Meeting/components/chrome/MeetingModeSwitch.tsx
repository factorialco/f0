import {
  F0ButtonToggleGroup,
  type F0ButtonToggleGroupItem,
} from "@/components/F0ButtonToggleGroup"
import { F0Icon } from "@/components/F0Icon"
import { Kanban, LayersFront, Maximize, Minimize } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { useMeetingSurface } from "../../providers/MeetingSurfaceProvider"
import { type F0MeetingSurfaceMode } from "../../types"

const isSurfaceMode = (value: string): value is F0MeetingSurfaceMode =>
  value === "panel" || value === "floating" || value === "fullscreen"

/**
 * The three places a call can live, one toggle each.
 *
 * `minimized` deliberately has no toggle: it is derived automatically on small
 * viewports and is not a destination the user picks on desktop.
 */
export const MeetingModeSwitch = () => {
  const i18n = useI18n()
  const { mode, effectiveMode, setMode, isCompactViewport } =
    useMeetingSurface()

  // On a small viewport there is no window to place and no room for a panel:
  // the only meaningful choice is pill or full screen.
  if (isCompactViewport) {
    const isFullscreen = effectiveMode === "fullscreen"
    return (
      <button
        type="button"
        onClick={() => setMode(isFullscreen ? "minimized" : "fullscreen")}
        aria-label={
          isFullscreen
            ? i18n.meeting.exitFullscreen
            : i18n.meeting.enterFullscreen
        }
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-md text-f1-foreground hover:bg-f1-background-secondary-hover",
          focusRing()
        )}
      >
        <F0Icon icon={isFullscreen ? Minimize : Maximize} size="sm" />
      </button>
    )
  }

  const items: F0ButtonToggleGroupItem[] = [
    // TODO: `Kanban` is the closest glyph the generated icon set has to a left
    // side panel. Ask design for a real `PanelLeft` in f0-core.
    { value: "panel", icon: Kanban, label: i18n.meeting.modeSidePanel },
    { value: "floating", icon: LayersFront, label: i18n.meeting.modeFloating },
    { value: "fullscreen", icon: Maximize, label: i18n.meeting.modeFullscreen },
  ]

  return (
    <div role="group" aria-label={i18n.meeting.modeSwitch}>
      <F0ButtonToggleGroup
        items={items}
        // Fullscreen is a room, not a widget in the corner: its chrome scales up
        // with it so the controls stay reachable from across the screen.
        size={effectiveMode === "fullscreen" ? "md" : "sm"}
        value={mode}
        required
        withBorder={false}
        onChange={(next) => {
          // The group emits on mount as well; committing an unchanged mode
          // would rewrite the stored placement for nothing.
          if (isSurfaceMode(next) && next !== mode) setMode(next)
        }}
      />
    </div>
  )
}
