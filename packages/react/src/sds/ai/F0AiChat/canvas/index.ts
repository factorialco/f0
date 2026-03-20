// Registry
export { registerCanvasEntity, getCanvasEntity } from "./registry"

// Types
export type { CanvasEntityDefinition } from "./types"

// Shared components
export { CanvasCard } from "./components/CanvasCard"
export type { CanvasCardProps } from "./components/CanvasCard"

// Entity registrations — import to trigger side-effect registration.
// When adding a new entity, add its import here.
import "./entities/dashboard"

export type { DashboardCanvasContent } from "./entities/dashboard"
export { savedDashboardConfigStore } from "./entities/dashboard"
