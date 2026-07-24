import type { Editor } from "@tiptap/core"

import { mergeAttributes } from "@tiptap/core"
import { FileHandler } from "@tiptap/extension-file-handler"
import { Image } from "@tiptap/extension-image"
import {
  NodeViewWrapper,
  ReactNodeViewRenderer,
  type NodeViewProps,
} from "@tiptap/react"
import { useCallback, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { Delete } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Spinner } from "@/ui/Spinner"

import {
  type BaseUploadConfig,
  handleOptimisticUpload,
  type UploadErrorType,
} from "../shared/optimisticUpload"

export type ImageUploadErrorType = UploadErrorType
export type ImageUploadConfig = BaseUploadConfig

export const DEFAULT_ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
]

const MIN_WIDTH_PERCENT = 10
const MAX_WIDTH_PERCENT = 100

const ImageNodeView = ({
  node,
  deleteNode,
  selected,
  editor,
  updateAttributes,
}: NodeViewProps) => {
  const { src, alt, title, uploading, width } = node.attrs
  const isEditable = editor.isEditable
  const translations = useI18n()
  const [isResizing, setIsResizing] = useState(false)

  const handleResizeStart = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()

      const startX = event.clientX
      const startWidth = (width as number) ?? MAX_WIDTH_PERCENT
      const editorWidth = editor.view.dom.clientWidth

      const handleMouseMove = (e: MouseEvent) => {
        const deltaX = e.clientX - startX
        const deltaPercent = (deltaX / editorWidth) * 100
        const newWidth = Math.min(
          MAX_WIDTH_PERCENT,
          Math.max(MIN_WIDTH_PERCENT, startWidth + deltaPercent)
        )
        updateAttributes({ width: Math.round(newWidth) })
      }

      const handleMouseUp = () => {
        setIsResizing(false)
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }

      setIsResizing(true)
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    },
    [editor, width, updateAttributes]
  )

  return (
    <NodeViewWrapper className="mb-2">
      <div
        style={{ width: `${(width as number) ?? MAX_WIDTH_PERCENT}%` }}
        className={cn(
          "image-resizable-wrapper group/image relative rounded-lg",
          selected && "border-2 border-f1-border-selected-bold border-solid",
          isResizing && "select-none"
        )}
      >
        <img
          src={src}
          alt={alt}
          title={title}
          draggable={false}
          className="block h-auto w-full rounded-md transition-all duration-150 ease-out"
        />
        {uploading && (
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-f1-background-secondary backdrop-blur-[2px] transition-opacity duration-200">
            <Spinner size="medium" />
          </div>
        )}
        {isEditable && !uploading && (
          <div className="absolute right-2 top-2 opacity-0 transition-opacity group-hover/image:opacity-100">
            <F0Button
              onClick={deleteNode}
              label={translations.actions.delete}
              icon={Delete}
              variant="default"
              hideLabel
            />
          </div>
        )}
        {isEditable && !uploading && (
          <div
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 flex cursor-col-resize items-center justify-center",
              "h-12 w-2 rounded-sm border border-solid border-f1-border bg-f1-foreground-inverse-secondary",
              "opacity-0 transition-opacity group-hover/image:opacity-100",
              isResizing && "opacity-100"
            )}
            onMouseDown={handleResizeStart}
            role="separator"
            aria-orientation="vertical"
            aria-label="Resize image"
            tabIndex={0}
          />
        )}
      </div>
    </NodeViewWrapper>
  )
}

export const ImageExtension = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: MAX_WIDTH_PERCENT,
        parseHTML: (element: HTMLElement) => {
          const widthStyle = element.style.width
          if (widthStyle?.endsWith("%")) {
            return parseInt(widthStyle, 10) || MAX_WIDTH_PERCENT
          }
          return MAX_WIDTH_PERCENT
        },
        renderHTML: (attributes: Record<string, unknown>) => {
          if (!attributes.width || attributes.width === MAX_WIDTH_PERCENT) {
            return {}
          }
          return { style: `width: ${attributes.width}%` }
        },
      },
      // We need it to track the uploading state and visual feedback
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
  addNodeView() {
    return ReactNodeViewRenderer(ImageNodeView)
  },
  renderHTML({ HTMLAttributes }) {
    return ["img", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)]
  },
}).configure({
  inline: false,
  allowBase64: true,
})

const handleImageUpload = (
  editor: Editor,
  file: File,
  uploadConfig: ImageUploadConfig,
  pos?: number
) =>
  handleOptimisticUpload(
    editor,
    file,
    uploadConfig,
    {
      nodeName: "image",
      validate: (f) =>
        DEFAULT_ACCEPTED_TYPES.includes(f.type) ? null : "invalid-type",
      buildInsertAttrs: ({ previewUrl, file: f }) => ({
        src: previewUrl,
        alt: f.name,
      }),
      buildSettledAttrs: ({ url }) => ({ src: url }),
    },
    pos
  )

export const createFileHandlerExtension = (uploadConfig: ImageUploadConfig) =>
  FileHandler.configure({
    allowedMimeTypes: DEFAULT_ACCEPTED_TYPES,
    onDrop: (currentEditor, files, pos) => {
      files.forEach((file) => {
        handleImageUpload(currentEditor, file, uploadConfig, pos)
      })
    },
    onPaste: (currentEditor, files) => {
      files.forEach((file) => {
        handleImageUpload(currentEditor, file, uploadConfig)
      })
    },
  })

export const insertImageFromFile = (
  editor: Editor,
  file: File,
  uploadConfig: ImageUploadConfig
) => {
  handleImageUpload(editor, file, uploadConfig)
}
