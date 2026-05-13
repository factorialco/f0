import { Cross } from "@/icons/app"
import { ResourceHeader } from "@/patterns/ResourceHeader"

import type { DynamicCanvasContent } from "./types"

export function DynamicCanvasHeader({
  content,
  onClose,
}: {
  content: DynamicCanvasContent
  onClose: () => void
}) {
  return (
    <ResourceHeader
      title={content.title}
      description={content.description}
      secondaryActions={[
        {
          label: "Close",
          icon: Cross,
          hideLabel: true,
          onClick: onClose,
        },
      ]}
    />
  )
}
