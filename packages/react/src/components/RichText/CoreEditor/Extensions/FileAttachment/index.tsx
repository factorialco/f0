import type { Editor } from "@tiptap/core"

import { mergeAttributes, Node } from "@tiptap/core"
import {
  NodeViewWrapper,
  ReactNodeViewRenderer,
  type NodeViewProps,
} from "@tiptap/react"

import { FileItem } from "@/components/RichText/FileItem"
import { Spinner } from "@/ui/Spinner"
import { Delete } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

// Reuse the same error contract as the image uploader so the consumer only
// needs to reason about one set of error states.
export type FileUploadErrorType =
  | "file-too-large"
  | "invalid-type"
  | "upload-failed"

export interface FileUploadConfig {
  onUpload: (file: File) => Promise<{ url: string; signedId?: string }>
  maxFileSize?: number
  acceptedTypes?: string[]
  onError?: (errorType: FileUploadErrorType) => void
}

const DEFAULT_MAX_SIZE = 50 * 1024 * 1024 // 50MB

// `src` is round-tripped through persisted HTML (`data-src`), so a crafted
// document could smuggle a `javascript:` URL into `window.open`. Consumers are
// expected to sanitize, but validating the scheme here is cheap
// defense-in-depth.
const SAFE_URL_SCHEMES = ["https:", "http:", "blob:"]

export const isSafeAttachmentUrl = (src: string): boolean => {
  try {
    const { protocol } = new URL(src, window.location.origin)
    return SAFE_URL_SCHEMES.includes(protocol)
  } catch {
    return false
  }
}

// PoC scope: PDFs first, plus a few common document types. The consumer can
// narrow/extend this via `acceptedTypes`.
export const DEFAULT_FILE_ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "text/plain",
  "text/csv",
]

const FileAttachmentNodeView = ({
  node,
  deleteNode,
  selected,
  editor,
}: NodeViewProps) => {
  const { src, filename, mimeType, uploading } = node.attrs
  // Read at render time: React node views don't reliably re-render on
  // `editor.setEditable()`. Safe today because NotesTextEditor fixes
  // `readonly` at creation — revisit if editability ever becomes dynamic.
  const isEditable = editor.isEditable
  const translations = useI18n()

  const file = {
    name: (filename as string) || "file",
    type: (mimeType as string) || "application/octet-stream",
  }

  const openInViewer = () => {
    // The browser renders PDFs natively, so a plain new-tab open doubles as the
    // viewer. A richer in-app viewer can be wired here later.
    if (src && isSafeAttachmentUrl(src as string)) {
      window.open(src as string, "_blank", "noopener,noreferrer")
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // The delete action lives inside this container, so clicking it would
    // otherwise bubble up and re-open the document. Ignore clicks that
    // originate on an action button.
    if ((event.target as HTMLElement).closest("button")) {
      return
    }
    openInViewer()
  }

  return (
    <NodeViewWrapper className="mb-2">
      <div
        className={cn(
          "relative inline-flex w-fit max-w-full rounded-[10px]",
          selected && "ring-2 ring-f1-border-selected-bold"
        )}
      >
        {uploading ? (
          <div className="flex w-fit items-center gap-2 rounded-[10px] bg-f1-background-tertiary py-1 pl-1 pr-3">
            <Spinner size="small" />
            <span className="text-sm font-medium text-f1-foreground-secondary">
              {file.name}
            </span>
          </div>
        ) : (
          <FileItem
            file={file}
            size="lg"
            className="cursor-pointer transition-colors hover:bg-f1-background-tertiary-hover"
            onClick={handleClick}
            // Delete is only available while editing; in readonly the chip
            // stays clickable (to open) but cannot be removed.
            actions={
              isEditable
                ? [
                    {
                      label: translations.actions.delete,
                      icon: Delete,
                      onClick: deleteNode,
                      critical: true,
                    },
                  ]
                : []
            }
          />
        )}
      </div>
    </NodeViewWrapper>
  )
}

export const FileAttachmentExtension = Node.create({
  name: "fileAttachment",
  group: "block",
  atom: true,
  selectable: true,
  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
        parseHTML: (element: HTMLElement) => element.getAttribute("data-src"),
        renderHTML: (attributes: Record<string, unknown>) =>
          attributes.src ? { "data-src": attributes.src } : {},
      },
      filename: {
        default: null,
        parseHTML: (element: HTMLElement) =>
          element.getAttribute("data-filename"),
        renderHTML: (attributes: Record<string, unknown>) =>
          attributes.filename ? { "data-filename": attributes.filename } : {},
      },
      mimeType: {
        default: null,
        parseHTML: (element: HTMLElement) =>
          element.getAttribute("data-mime-type"),
        renderHTML: (attributes: Record<string, unknown>) =>
          attributes.mimeType ? { "data-mime-type": attributes.mimeType } : {},
      },
      signedId: {
        default: null,
        parseHTML: (element: HTMLElement) =>
          element.getAttribute("data-signed-id"),
        renderHTML: (attributes: Record<string, unknown>) =>
          attributes.signedId ? { "data-signed-id": attributes.signedId } : {},
      },
      // Transient UI state, never persisted.
      uploading: {
        default: false,
        renderHTML: () => ({}),
        parseHTML: () => false,
      },
      "data-upload-id": {
        default: null,
        renderHTML: () => ({}),
        parseHTML: () => null,
      },
    }
  },

  parseHTML() {
    return [{ tag: 'div[data-type="file-attachment"]' }]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, { "data-type": "file-attachment" }),
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(FileAttachmentNodeView)
  },
})

const handleFileUpload = async (
  editor: Editor,
  file: File,
  uploadConfig: FileUploadConfig,
  pos?: number
) => {
  const maxSize = uploadConfig.maxFileSize ?? DEFAULT_MAX_SIZE
  const acceptedTypes =
    uploadConfig.acceptedTypes ?? DEFAULT_FILE_ACCEPTED_TYPES
  const { onError } = uploadConfig

  if (!acceptedTypes.includes(file.type)) {
    onError?.("invalid-type")
    return
  }

  if (file.size > maxSize) {
    onError?.("file-too-large")
    return
  }

  const previewUrl = URL.createObjectURL(file)
  const uploadId = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`

  const insertPos = pos ?? editor.state.selection.anchor
  editor
    .chain()
    .focus()
    .insertContentAt(insertPos, [
      {
        type: "fileAttachment",
        attrs: {
          src: previewUrl,
          filename: file.name,
          mimeType: file.type,
          uploading: true,
          "data-upload-id": uploadId,
        },
      },
    ])
    .run()

  try {
    const { url, signedId } = await uploadConfig.onUpload(file)

    const { doc } = editor.state
    let nodePos: number | null = null
    doc.descendants((node, position) => {
      if (
        node.type.name === "fileAttachment" &&
        node.attrs["data-upload-id"] === uploadId
      ) {
        nodePos = position
        return false
      }
      return true
    })

    if (nodePos !== null) {
      editor
        .chain()
        .setNodeSelection(nodePos)
        .updateAttributes("fileAttachment", {
          src: url,
          signedId: signedId ?? null,
          uploading: false,
          "data-upload-id": null,
        })
        .run()
    }
  } catch {
    onError?.("upload-failed")

    const { doc } = editor.state
    doc.descendants((node, position) => {
      if (
        node.type.name === "fileAttachment" &&
        node.attrs["data-upload-id"] === uploadId
      ) {
        editor.chain().setNodeSelection(position).deleteSelection().run()
        return false
      }
      return true
    })
  } finally {
    URL.revokeObjectURL(previewUrl)
  }
}

export const insertFileFromFile = (
  editor: Editor,
  file: File,
  uploadConfig: FileUploadConfig
): Promise<void> => {
  return handleFileUpload(editor, file, uploadConfig)
}
