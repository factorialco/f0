import { useChatImagePreview } from "../providers/ChatUIProvider"
import { useF0ChatEmit } from "../providers/F0ChatProvider"
import { triggerDownload } from "../utils/download"
import { F0ChatMediaPreview } from "./F0ChatMediaPreview"

export const ChatImagePreview = () => {
  const { imagePreview, closeImagePreview, setImagePreviewIndex } =
    useChatImagePreview()
  const emit = useF0ChatEmit()
  if (!imagePreview) {
    return null
  }

  return (
    <F0ChatMediaPreview
      images={imagePreview.images}
      index={imagePreview.index}
      onIndexChange={setImagePreviewIndex}
      onClose={closeImagePreview}
      onDownload={(file) => {
        triggerDownload(file.url, file.name)
        emit.onAttachmentDownloaded({ kind: "image" })
      }}
    />
  )
}
