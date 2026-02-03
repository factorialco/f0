import { useCopilotAction } from "@copilotkit/react-core"

import { F0ActionItem } from "../../F0ActionItem"
import { OrchestratorThinkingResult } from "./types"

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
    available: "disabled",
    render: (props) => {
      const title: string = props.args.message ?? "thinking"
      const result: OrchestratorThinkingResult | undefined = props.result
      return (
        <div className={props.status ? "-ml-1" : undefined}>
          <F0ActionItem
            title={title}
            status={props.status === "complete" ? "completed" : props.status}
            inGroup={result?.inGroup}
          />
        </div>
      )
    },
  })
}
