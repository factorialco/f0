import { Cross } from "@/icons/app"
import { ResourceHeader } from "@/patterns/ResourceHeader"

import type { GeneratedCanvasContent } from "../../../types"

export function GeneratedCanvasHeader({
  content,
  onClose,
}: {
  content: GeneratedCanvasContent
  onClose: () => void
}) {
  return (
    <ResourceHeader
      title={content.title}
      description={content.description}
      secondaryActions={[
        {
          label: "Close generated canvas",
          icon: Cross,
          hideLabel: true,
          onClick: onClose,
        },
      ]}
    />
  )
}
