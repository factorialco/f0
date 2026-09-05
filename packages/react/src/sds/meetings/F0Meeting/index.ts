export { F0Meeting } from "./F0Meeting"
export { F0MeetingRoom, type F0MeetingRoomProps } from "./F0MeetingRoom"
export { F0MeetingSlot } from "./F0MeetingSlot"
export { F0MeetingSurface } from "./F0MeetingSurface"

export {
  F0MeetingProvider,
  useF0Meeting,
  useF0MeetingRoster,
  useF0MeetingStable,
  type F0MeetingRoster,
  type F0MeetingStable,
} from "./providers/F0MeetingProvider"
export {
  MeetingSurfaceProvider,
  useMeetingSurface,
  useMeetingSurfaceOptional,
} from "./providers/MeetingSurfaceProvider"
export {
  createMeetingSignalStore,
  type MeetingSignalStore,
} from "./providers/MeetingSignalStore"
export {
  useMeetingSignal,
  useMeetingSpeakers,
} from "./providers/useMeetingSignal"
export { useTrackBinding } from "./providers/useTrackBinding"

export { MeetingSidePanel } from "./components/panel/MeetingSidePanel"
export { MeetingRoomChat } from "./components/panel/MeetingRoomChat"
export { MeetingTranscript } from "./components/panel/MeetingTranscript"
export { MeetingNotes } from "./components/panel/MeetingNotes"

export { solveGrid, layoutGrid } from "./layout/grid-solver"
export type { GridSolution, GridSolverInput } from "./layout/grid-solver"
export { solveSpotlight } from "./layout/spotlight-solver"
export type {
  SpotlightSolution,
  SpotlightSolverInput,
} from "./layout/spotlight-solver"
export { resolveAutoFocus } from "./layout/auto-focus"
export { reorderForSpeakers } from "./layout/speaker-order"
export { buildTiles, tileAspectRatio, tileKey } from "./layout/tiles"
export type { F0MeetingTile } from "./layout/tiles"

export {
  nearestCorner,
  placementFromRect,
  resolvePlacement,
  settlePlacement,
} from "./window/placement"
export { panelRect, panelWidthFor, viewportRect } from "./window/panel"

export * from "./types"
