import type { TicketCanvasContent } from "../../../types"

import { DetailsItemsList } from "@/experimental/Lists/DetailsItemsList"

export function TicketContent({ content }: { content: TicketCanvasContent }) {
  const details = [
    {
      title: "Category",
      content: { type: "item" as const, text: content.categoryName },
    },
    content.priority
      ? {
          title: "Priority",
          content: { type: "item" as const, text: content.priority },
        }
      : null,
    content.description
      ? {
          title: "Description",
          content: { type: "item" as const, text: content.description },
        }
      : null,
  ].filter(Boolean) as Array<{
    title: string
    content: { type: "item"; text: string }
  }>

  return (
    <div className="flex flex-col gap-4 p-5">
      <DetailsItemsList details={details} tableView />
    </div>
  )
}
