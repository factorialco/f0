import { OneEllipsis } from "@/lib/OneEllipsis"

import { CloseCanvasButton } from "../../components/CloseCanvasButton"
import type { TicketCanvasContent } from "../../../types"

export function TicketHeader({
  content,
  onClose,
}: {
  content: TicketCanvasContent
  onClose: () => void
}) {
  return (
    <div className="flex shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary p-5">
      <OneEllipsis
        tag="h2"
        className="min-w-0 flex-1 text-2xl font-semibold text-f1-foreground"
      >
        {content.title}
      </OneEllipsis>
      <CloseCanvasButton onClick={onClose} />
    </div>
  )
}
