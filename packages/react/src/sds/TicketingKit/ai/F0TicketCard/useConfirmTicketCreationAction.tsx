import { useCopilotAction } from "@copilotkit/react-core"

import { TicketCard } from "../../../ai/F0AiChat/canvas/entities/ticket/TicketCard"
import type { TicketCardProps } from "../../../ai/F0AiChat/canvas/entities/ticket/TicketCard"

/**
 * Copilot action that renders a ticket preview card inline in the chat.
 * The card auto-opens a canvas panel with full ticket details.
 */
export const useConfirmTicketCreationAction = () => {
  useCopilotAction({
    name: "confirmTicketCreation",
    description:
      "Display a ticket preview card with category, priority, and description. Opens a canvas panel for review.",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "The ticket title",
        required: true,
      },
      {
        name: "categoryName",
        type: "string",
        description: "The ticket category name",
        required: true,
      },
      {
        name: "priority",
        type: "string",
        description: "The ticket priority (critical, high, medium, low)",
        required: false,
      },
      {
        name: "description",
        type: "string",
        description: "The ticket description",
        required: true,
      },
    ],
    available: "frontend",
    render: (props) => {
      const args = props.args as Partial<TicketCardProps>
      if (!args.title || !args.categoryName) return <></>

      return (
        <TicketCard
          title={args.title}
          categoryName={args.categoryName}
          priority={args.priority}
          description={args.description}
        />
      )
    },
  })
}
