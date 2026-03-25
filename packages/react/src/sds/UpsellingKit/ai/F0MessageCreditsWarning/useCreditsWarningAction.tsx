import { useCopilotAction } from "@copilotkit/react-core"
import { F0MessageCreditsWarningArgs } from "./types"
import { F0MessageCreditsWarning } from "./F0MessageCreditsWarning"

/**
 * Hook to register the credits warning copilot action.
 * Renders an AI credits warning card with an optional action URL.
 */
export const useCreditsWarningAction = () => {
  useCopilotAction({
    name: "AiWidgets.UpsellKit.F0MessageCreditsWarning",
    description:
      "Display a warning card when the company has no AI credits left, with a call to action to get more credits.",
    parameters: [
      {
        name: "actionHref",
        type: "string",
        description: "Optional URL opened when the action button is clicked",
        required: false,
      },
    ],
    available: "frontend",
    render: (props) => {
      const args = props.args as F0MessageCreditsWarningArgs

      return <F0MessageCreditsWarning actionHref={args.actionHref} />
    },
  })
}
