import type { CanvasEntityDefinition } from "../../types"

import { TicketContent } from "./TicketContent"
import { TicketHeader } from "./TicketHeader"
import type { TicketCanvasContent } from "../../../types"

export const ticketCanvasEntity: CanvasEntityDefinition<TicketCanvasContent> = {
  type: "ticket",
  renderContent: ({ content }) => <TicketContent content={content} />,
  renderHeader: ({ content, onClose }) => (
    <TicketHeader content={content} onClose={onClose} />
  ),
}

export type { TicketCanvasContent } from "../../../types"
export { TicketCard } from "./TicketCard"
export type { TicketCardProps } from "./TicketCard"
