import type { Editor } from "@tiptap/core"

import { mergeAttributes, Node } from "@tiptap/core"
import {
  NodeViewWrapper,
  ReactNodeViewRenderer,
  type NodeViewProps,
} from "@tiptap/react"

import { FileItem } from "@/components/RichText/FileItem"
import { Delete } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Spinner } from "@/ui/Spinner"

import {
  type BaseUploadConfig,
  handleOptimisticUpload,
  type UploadErrorType,
} from "../shared/optimisticUpload"

// Reuse the same error contract as the image uploader so the consumer only
// needs to reason about one set of error states.
export type FileUploadErrorType = UploadErrorType

export interface FileUploadConfig extends BaseUploadConfig {
  acceptedTypes?: string[]
}

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

// Browsers report `file.type` inconsistently (empty string, or an alternate
// MIME like `application/vnd.ms-excel` for a `.csv`), so we fall back to the
// file extension. Extensions are derived from the accepted MIME types, keeping
// `acceptedTypes` the single source of truth.
const MIME_TO_EXTENSIONS: Record<string, string[]> = {
  "application/pdf": [".pdf"],
  "application/msword": [".doc"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
    ".docx",
  ],
  "application/vnd.ms-excel": [".xls", ".csv"],
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
    ".xlsx",
  ],
  "text/plain": [".txt"],
  "text/csv": [".csv"],
}

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
            className="hover:bg-f1-background-tertiary-hover cursor-pointer transition-colors"
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
        // Sanitize at the data boundary: an unsafe scheme (e.g. `javascript:`)
        // never enters the document model, so it cannot be persisted or
        // re-rendered by any other consumer of the stored HTML.
        parseHTML: (element: HTMLElement) => {
          const raw = element.getAttribute("data-src")
          return raw && isSafeAttachmentUrl(raw) ? raw : null
        },
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

// Browsers report `file.type` inconsistently (empty string, or an alternate
// MIME), so we accept a file when either its MIME or its extension matches.
const isAcceptedFileType = (file: File, acceptedTypes: string[]): boolean => {
  const acceptedExtensions = acceptedTypes.flatMap(
    (type) => MIME_TO_EXTENSIONS[type] ?? []
  )
  const extension = file.name.includes(".")
    ? file.name.slice(file.name.lastIndexOf(".")).toLowerCase()
    : ""
  const typeOk = file.type !== "" && acceptedTypes.includes(file.type)
  const extOk = extension !== "" && acceptedExtensions.includes(extension)
  return typeOk || extOk
}

const handleFileUpload = (
  editor: Editor,
  file: File,
  uploadConfig: FileUploadConfig,
  pos?: number
) =>
  handleOptimisticUpload(
    editor,
    file,
    uploadConfig,
    {
      nodeName: "fileAttachment",
      validate: (f) =>
        isAcceptedFileType(
          f,
          uploadConfig.acceptedTypes ?? DEFAULT_FILE_ACCEPTED_TYPES
        )
          ? null
          : "invalid-type",
      buildInsertAttrs: ({ previewUrl, file: f }) => ({
        src: previewUrl,
        filename: f.name,
        mimeType: f.type,
      }),
      buildSettledAttrs: ({ url, signedId }) => ({
        src: url,
        signedId: signedId ?? null,
      }),
    },
    pos
  )

export const insertFileFromFile = (
  editor: Editor,
  file: File,
  uploadConfig: FileUploadConfig
): Promise<void> => {
  return handleFileUpload(editor, file, uploadConfig)
}
