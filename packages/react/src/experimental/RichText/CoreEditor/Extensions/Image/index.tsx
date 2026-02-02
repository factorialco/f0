import type { Editor } from "@tiptap/core"

import { mergeAttributes } from "@tiptap/core"
import { FileHandler } from "@tiptap/extension-file-handler"
import { Image } from "@tiptap/extension-image"
import {
  NodeViewWrapper,
  ReactNodeViewRenderer,
  type NodeViewProps,
} from "@tiptap/react"
import { useCallback, useEffect, useRef, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { Spinner } from "@/experimental/Information/Spinner"
import { CornerHandle, Delete } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

export type ImageUploadErrorType =
  | "file-too-large"
  | "invalid-type"
  | "upload-failed"

export interface ImageUploadConfig {
  onUpload: (file: File) => Promise<{ url: string; signedId?: string }>
  maxFileSize?: number
  onError?: (errorType: ImageUploadErrorType) => void
}

const DEFAULT_MAX_SIZE = 15 * 1024 * 1024 // 15MB
export const DEFAULT_ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
]

const MIN_WIDTH = 100

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
  const imgRef = useRef<HTMLImageElement>(null)
  const [isResizing, setIsResizing] = useState(false)
  const [isDarkImage, setIsDarkImage] = useState(false)

  useEffect(() => {
    const img = imgRef.current
    if (!img || !img.complete) {
      const handleLoad = () => {
        detectImageBrightness(img!)
      }
      img?.addEventListener("load", handleLoad)
      return () => img?.removeEventListener("load", handleLoad)
    }
    detectImageBrightness(img)

    function detectImageBrightness(imgEl: HTMLImageElement) {
      try {
        const canvas = document.createElement("canvas")
        const size = 32
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext("2d", { willReadFrequently: true })
        if (!ctx) return
        ctx.drawImage(imgEl, 0, 0, size, size)
        const data = ctx.getImageData(0, 0, size, size).data
        let totalBrightness = 0
        const pixelCount = data.length / 4
        for (let i = 0; i < data.length; i += 4) {
          totalBrightness +=
            (data[i] * 299 + data[i + 1] * 587 + data[i + 2] * 114) / 1000
        }
        setIsDarkImage(totalBrightness / pixelCount < 128)
      } catch {
        // Cross-origin images will fail — default to light
      }
    }
  }, [src])

  const handleResizeStart = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()

      const startX = event.clientX
      const startWidth = imgRef.current?.offsetWidth ?? 0

      const handleMouseMove = (e: MouseEvent) => {
        const newWidth = Math.max(MIN_WIDTH, startWidth + (e.clientX - startX))
        if (imgRef.current) {
          imgRef.current.style.width = `${newWidth}px`
        }
      }

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
        setIsResizing(false)

        const finalWidth = imgRef.current?.offsetWidth ?? startWidth
        updateAttributes({ width: finalWidth })
      }

      setIsResizing(true)
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    },
    [updateAttributes]
  )

  const showResizeHandle = isEditable && !uploading && (selected || isResizing)

  return (
    <NodeViewWrapper className="mb-2" data-drag-handle>
      <div
        className={cn(
          "relative inline-block rounded-lg outline-none transition-shadow duration-200 ease-out",
          selected &&
            "ring-[1.5px] ring-black ring-offset-1 shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_2px_8px_rgba(0,0,0,0.12)] dark:ring-white dark:ring-offset-0 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.3)]"
        )}
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          title={title}
          draggable={false}
          style={width ? { width: `${width}px` } : undefined}
          className={cn(
            "block h-auto rounded-md outline-none",
            !width && "max-w-full",
            !isResizing && "transition-all duration-150 ease-out"
          )}
        />
        {showResizeHandle && (
          <div
            tabIndex={-1}
            aria-hidden="true"
            className="absolute -bottom-1 -right-1 flex h-5 w-5 cursor-se-resize items-center justify-center rounded-sm bg-white text-black outline-none shadow-[0_0_0_1px_rgba(0,0,0,0.15),0_2px_6px_rgba(0,0,0,0.2)] transition-transform duration-150 ease-out hover:scale-110 focus:outline-none focus-visible:outline-none active:scale-95 dark:bg-white dark:text-black dark:shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_2px_6px_rgba(0,0,0,0.4)]"
            onMouseDown={handleResizeStart}
          >
            <CornerHandle className="h-3 w-3" />
          </div>
        )}
        {uploading && (
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-f1-background-secondary backdrop-blur-[2px] transition-opacity duration-200">
            <Spinner size="medium" />
          </div>
        )}
        {isEditable && !uploading && (
          <div
            className={cn(
              "absolute right-2 top-2 rounded-md backdrop-blur-sm transition-colors",
              isDarkImage
                ? "bg-black/60 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_2px_6px_rgba(0,0,0,0.3)]"
                : "bg-white/90 text-black shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.15)]"
            )}
          >
            <F0Button
              onClick={deleteNode}
              label={translations.actions.delete}
              icon={Delete}
              variant="ghost"
              hideLabel
              size="sm"
            />
          </div>
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
        default: null,
        renderHTML: (attributes) => {
          if (!attributes.width) return {}
          return { width: attributes.width }
        },
        parseHTML: (element) => {
          const width = element.getAttribute("width")
          return width ? Number(width) : null
        },
      },
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

const handleImageUpload = async (
  editor: Editor,
  file: File,
  uploadConfig: ImageUploadConfig,
  pos?: number
) => {
  const maxSize = uploadConfig.maxFileSize ?? DEFAULT_MAX_SIZE
  const { onError } = uploadConfig

  // Validate file type
  if (!DEFAULT_ACCEPTED_TYPES.includes(file.type)) {
    onError?.("invalid-type")
    return
  }

  // Validate file size
  if (file.size > maxSize) {
    onError?.("file-too-large")
    return
  }

  // Create a local preview to make a smoother experience for the user
  const previewUrl = URL.createObjectURL(file)
  const uploadId = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`

  const insertPos = pos ?? editor.state.selection.anchor
  editor
    .chain()
    .focus()
    .insertContentAt(insertPos, [
      {
        type: "image",
        attrs: {
          src: previewUrl,
          alt: file.name,
          uploading: true,
          "data-upload-id": uploadId,
        },
      },
    ])
    .run()

  try {
    const { url } = await uploadConfig.onUpload(file)

    // We need to udpate the URL local with the URL from the server
    const { doc } = editor.state
    let nodePos: number | null = null

    doc.descendants((node, position) => {
      if (
        node.type.name === "image" &&
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
        .updateAttributes("image", {
          src: url,
          uploading: false,
          "data-upload-id": null,
        })
        .run()
    }
  } catch {
    onError?.("upload-failed")

    // Remove the placeholder on failure
    const { doc } = editor.state
    doc.descendants((node, position) => {
      if (
        node.type.name === "image" &&
        node.attrs["data-upload-id"] === uploadId
      ) {
        editor.chain().setNodeSelection(position).deleteSelection().run()
        return false
      }
      return true
    })
  } finally {
    // Clean up the blob URL
    URL.revokeObjectURL(previewUrl)
  }
}

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
