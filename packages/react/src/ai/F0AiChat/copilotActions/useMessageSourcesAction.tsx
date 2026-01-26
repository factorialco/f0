import { useCopilotAction } from "@copilotkit/react-core"

import { F0MessageSources as MessageSources } from "../../F0MessageSources"
import { MessageSourceItem } from "./types"

/**
 * Hook to register the message sources action.
 * Attaches information sources to the assistant's response to show where the AI got its information from.
 */
export const useMessageSourcesAction = () => {
  useCopilotAction({
    name: "messageSources",
    description:
      "Attach information sources to the assistant's response. Use this to show where the AI got its information from.",
    parameters: [
      {
        name: "sources",
        type: "object[]",
        description:
          "Array of source objects with title and link properties. Example: [{title: 'Documentation', link: 'https://example.com'}]",
        required: true,
        attributes: [
          {
            name: "title",
            type: "string",
            description: "The title or name of the source",
            required: true,
          },
          {
            name: "link",
            type: "string",
            description: "The URL link to the source",
            required: true,
          },
          {
            name: "icon",
            type: "string",
            description: "The icon name to display for the source",
            required: false,
          },
          {
            name: "targetBlank",
            type: "boolean",
            description: "Whether to open the link in a new tab",
            required: false,
          },
        ],
      },
    ],
    // render only when backend wants to attach sources
    available: "disabled",
    render: (props) => {
      const sources: MessageSourceItem[] = props.args.sources ?? []
      return <MessageSources sources={sources} />
    },
  })
}
