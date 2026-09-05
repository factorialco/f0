import { F0Button } from "@/components/F0Button"
import { Floating, Kanban, Maximize, Minimize } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { useMeetingSurface } from "../../providers/MeetingSurfaceProvider"
import { type F0MeetingSurfaceMode } from "../../types"

/**
 * Where the call can go from here.
 *
 * Deliberately NOT a toggle group. A toggle group says "pick one of three" and
 * draws all three, including the one you are already looking at — a button that
 * does nothing. This offers only the destinations: the mode you are in is
 * omitted, and which one that is, is obvious from the window itself.
 *
 * `minimized` is never offered on desktop: it is derived automatically on small
 * viewports, not a place you choose.
 */
export const MeetingModeSwitch = () => {
  const i18n = useI18n()
  const { effectiveMode, setMode, isCompactViewport } = useMeetingSurface()

  // On a small viewport there is no window to place and no room for a panel:
  // the only meaningful choice is pill or full screen. Same rule as below —
  // show the place you are not — which is why it is no longer a special case.
  if (isCompactViewport) {
    const isFullscreen = effectiveMode === "fullscreen"
    return (
      <F0Button
        variant="ghost"
        size="md"
        hideLabel
        icon={isFullscreen ? Minimize : Maximize}
        label={
          isFullscreen
            ? i18n.meeting.exitFullscreen
            : i18n.meeting.enterFullscreen
        }
        onClick={() => setMode(isFullscreen ? "minimized" : "fullscreen")}
      />
    )
  }

  const destinations: {
    mode: F0MeetingSurfaceMode
    icon: typeof Kanban
    label: string
  }[] = [
    // TODO: `Kanban` is the closest glyph the generated icon set has to a left
    // side panel. Ask design for a real `PanelLeft` in f0-core.
    { mode: "panel", icon: Kanban, label: i18n.meeting.modeSidePanel },
    { mode: "floating", icon: Floating, label: i18n.meeting.modeFloating },
    { mode: "fullscreen", icon: Maximize, label: i18n.meeting.modeFullscreen },
  ]

  return (
    <div
      role="group"
      aria-label={i18n.meeting.modeSwitch}
      className="flex gap-1"
    >
      {destinations
        .filter((destination) => destination.mode !== effectiveMode)
        .map((destination) => (
          <F0Button
            key={destination.mode}
            variant="ghost"
            size="md"
            hideLabel
            icon={destination.icon}
            label={destination.label}
            onClick={() => setMode(destination.mode)}
          />
        ))}
    </div>
  )
}
