import type { FormCanvasContent } from "../../../types"
import type { CanvasEntityDefinition } from "../../types"

import { FormContent } from "./FormCanvasContent"
import { FormHeader } from "./FormHeader"

export const formCanvasEntity: CanvasEntityDefinition<FormCanvasContent> = {
  type: "form",
  renderContent: () => <FormContent />,
  renderHeader: ({ content, onClose }) => (
    <FormHeader
      title={content.title}
      description={content.description}
      module={content.formModule}
      onClose={onClose}
    />
  ),
}

export type { FormCanvasContent } from "../../../types"
export { FormCard } from "./FormCard"
export type { FormCardProps } from "./FormCard"
