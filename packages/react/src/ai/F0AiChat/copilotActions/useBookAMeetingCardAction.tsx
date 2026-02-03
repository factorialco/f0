import { useCopilotAction } from "@copilotkit/react-core"

import { F0BookAMeetingCard } from "../../F0UpsellKit/F0BookAMeetingCard"
import { BookAMeetingCardArgs } from "./types"

/**
 * Hook to register the book a meeting card copilot action.
 * Renders a card with expert avatars, title, schedule, and a primary CTA when the backend requests it.
 */
export const useBookAMeetingCardAction = () => {
  useCopilotAction({
    name: "bookAMeetingCard",
    description:
      "Display a card to book a meeting with experts: avatars, title (e.g. 'Talk with an expert'), schedule (e.g. 'Mon-Fri · 09:00-21:00 (CEST)'), and a primary action button (e.g. 'Book a meeting').",
    parameters: [
      {
        name: "actionHref",
        type: "string",
        description: "Optional URL for the action button (e.g. booking page)",
        required: false,
      },
      {
        name: "avatars",
        type: "object[]",
        description:
          "Optional list of expert avatars. Each object: { firstName, lastName, src? }",
        required: false,
        attributes: [
          {
            name: "lastName",
            type: "string",
            description: "Last name of the expert",
            required: true,
          },
          {
            name: "src",
            type: "string",
            description: "Optional avatar image URL",
            required: false,
          },
        ],
      },
    ],
    available: "disabled",
    render: (props) => {
      const args = props.args as BookAMeetingCardArgs

      return (
        <F0BookAMeetingCard
          actionHref={args.actionHref}
          onAction={args.actionHref ? undefined : () => {}}
        />
      )
    },
  })
}
