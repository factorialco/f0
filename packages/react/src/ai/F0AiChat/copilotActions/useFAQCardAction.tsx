import { useCopilotAction } from "@copilotkit/react-core"

import { F0FAQCard } from "../../F0UpsellKit/F0FAQCard"
import { FAQCardArgs } from "./types"

/**
 * Hook to register the FAQ card copilot action.
 * Renders an accordion-style FAQ card with questions and answers when the backend requests it.
 */
export const useFAQCardAction = () => {
  useCopilotAction({
    name: "faqCard",
    description:
      "Display an FAQ card with expandable questions and answers. Use this to show common questions and their answers in an accordion format.",
    parameters: [
      {
        name: "title",
        type: "string",
        description:
          "Optional title for the card header (default: 'Questions before getting started')",
        required: false,
      },
      {
        name: "items",
        type: "object[]",
        description:
          "Array of FAQ items. Each object: { id, question, answer }",
        required: true,
        attributes: [
          {
            name: "id",
            type: "string",
            description: "Unique identifier for the FAQ item",
            required: true,
          },
          {
            name: "question",
            type: "string",
            description: "The question text",
            required: true,
          },
          {
            name: "answer",
            type: "string",
            description: "The answer text",
            required: true,
          },
        ],
      },
      {
        name: "defaultExpandedId",
        type: "string",
        description: "Optional ID of the item to expand by default",
        required: false,
      },
      {
        name: "allowMultiple",
        type: "boolean",
        description:
          "Whether multiple items can be expanded at once (default: false)",
        required: false,
      },
    ],
    available: "disabled",
    render: (props) => {
      const args = props.args as FAQCardArgs
      return (
        <F0FAQCard
          title={args.title}
          items={args.items ?? []}
          defaultExpandedId={args.defaultExpandedId}
          allowMultiple={args.allowMultiple}
        />
      )
    },
  })
}
