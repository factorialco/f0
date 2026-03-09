/**
 * Canonical frontend tool names shared across the AI chat system.
 *
 * These names form the contract between the backend (factorial-agent)
 * and the frontend (f0). The backend emits frontend tool calls using
 * these exact strings, and the frontend registers CopilotKit actions
 * with matching names.
 *
 * Always reference this constant instead of hardcoding tool name strings
 * so typos are caught at compile time.
 */
export const FRONTEND_TOOL_NAMES = {
  orchestratorThinking: "orchestratorThinking",
  messageSources: "messageSources",
  downloadData: "downloadData",
  displayChart: "displayChart",
  displayDashboard: "displayDashboard",
} as const

export type FrontendToolName =
  (typeof FRONTEND_TOOL_NAMES)[keyof typeof FRONTEND_TOOL_NAMES]
