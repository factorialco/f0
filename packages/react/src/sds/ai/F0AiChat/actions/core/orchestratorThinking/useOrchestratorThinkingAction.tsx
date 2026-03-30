import { useCopilotAction } from "@copilotkit/react-core"

import { F0ActionItem } from "../../../../F0ActionItem"
import type { OrchestratorThinkingResult } from "./types"

/**
 * Hook to register the orchestrator thinking action.
 * Displays the orchestrator's thinking process as a non-blocking UI element.
 */
export const useOrchestratorThinkingAction = () => {
  useCopilotAction({
    name: "orchestratorThinking",
    description: "Display orchestrator thinking process (non-blocking)",
    parameters: [
      {
        name: "message",
        description: "User-friendly progress message",
        required: true,
      },
    ],
    // render only when backend wants to display the thinking
    available: "frontend",
    render: (props) => {
      const title: string = props.args.message ?? "thinking"
      const result: OrchestratorThinkingResult | undefined = props.result
      // In v1.51+ ToolCallRenderer always passes "inProgress" for frontend-only
      // actions (no toolMessage, not in executingToolCallIds). Map it to
      // "executing" to show the spinner, matching the original v1.10 behavior
      // where AssistantMessage passed {status: "executing"} via generativeUI args.
      const status =
        props.status === "complete"
          ? "completed"
          : props.status === "inProgress"
            ? "executing"
            : props.status
      return (
        <F0ActionItem title={title} status={status} inGroup={result?.inGroup} />
      )
    },
  })
}
