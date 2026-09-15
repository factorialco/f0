import { useChatDocumentPreview } from "../providers/ChatUIProvider"
import { F0ChatMediaPreview } from "./F0ChatMediaPreview"

export const ChatDocumentPreview = () => {
  const { documentPreview, closeDocumentPreview } = useChatDocumentPreview()
  if (!documentPreview) {
    return null
  }

  return (
    <F0ChatMediaPreview
      document={{ ...documentPreview.file, kind: documentPreview.kind }}
      onClose={closeDocumentPreview}
    />
  )
}
