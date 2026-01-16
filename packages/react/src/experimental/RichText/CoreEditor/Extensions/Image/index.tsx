import { ButtonInternal } from "@/components/F0Button/internal"
import { Delete, AlertCircle, Spinner } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Node, mergeAttributes } from "@tiptap/core"
import { NodeViewWrapper, ReactNodeViewRenderer } from "@tiptap/react"
import type { NodeViewProps } from "@tiptap/react"
import { Plugin, PluginKey } from "@tiptap/pm/state"
import React, { useCallback, useRef } from "react"

// Types
export interface ImageUploadConfig {
  onUpload: (file: File) => Promise<{ url: string; signedId?: string }>
  maxSize?: number // bytes, default 10MB
  acceptedTypes?: string[] // default image types
  labels?: ImageUploadLabels
}

export interface ImageUploadLabels {
  uploadError?: string
  uploading?: string
  insertImage?: string
  deleteImage?: string
}

interface ImageAttributes {
  src: string | null
  alt: string
  title: string
  signedId?: string
  uploadStatus: "idle" | "uploading" | "success" | "error"
  uploadProgress: number
}

// Default configuration
const DEFAULT_MAX_SIZE = 10 * 1024 * 1024 // 10MB
const DEFAULT_ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
]

// Extend TipTap commands
declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    imageBlock: {
      insertImageBlock: (file: File) => ReturnType
      insertImageFromUrl: (url: string, alt?: string) => ReturnType
    }
  }
}

// React component for rendering the image node
const ImageBlockView: React.FC<NodeViewProps> = ({
  node,
  deleteNode,
  selected,
  extension,
}) => {
  const { src, uploadStatus, alt } = node.attrs as ImageAttributes
  const config = extension.options.uploadConfig as ImageUploadConfig | undefined
  const labels = config?.labels

  const imgRef = useRef<HTMLImageElement>(null)

  const handleDelete = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      deleteNode()
    },
    [deleteNode]
  )

  return (
    <NodeViewWrapper contentEditable={false}>
      <div
        className={cn("image-block group relative my-4", {
          "is-selected": selected,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Uploading state */}
        {uploadStatus === "uploading" && (
          <div className="image-upload-overlay">
            <Spinner className="h-8 w-8 animate-spin" />
            <span className="text-sm text-white">
              {labels?.uploading || "Uploading..."}
            </span>
          </div>
        )}

        {/* Error state */}
        {uploadStatus === "error" && (
          <div className="image-error">
            <AlertCircle className="h-8 w-8 text-f1-foreground-critical" />
            <span className="text-sm text-f1-foreground-critical">
              {labels?.uploadError || "Upload failed"}
            </span>
            <ButtonInternal
              onClick={handleDelete}
              variant="outline"
              size="sm"
              label={labels?.deleteImage || "Remove"}
            />
          </div>
        )}

        {/* Image display */}
        {src && uploadStatus !== "error" && (
          <img
            ref={imgRef}
            src={src}
            alt={alt || ""}
            className={cn(
              "max-w-full rounded-lg transition-opacity",
              uploadStatus === "uploading" && "opacity-50"
            )}
            draggable={false}
          />
        )}

        {/* Placeholder during upload before src is set */}
        {!src && uploadStatus === "uploading" && (
          <div className="flex h-48 w-full items-center justify-center rounded-lg bg-f1-background-secondary">
            <Spinner className="h-8 w-8 animate-spin" />
          </div>
        )}

        {/* Toolbar - visible on hover via CSS */}
        {uploadStatus === "success" && (
          <div className="image-toolbar">
            <button
              type="button"
              onClick={handleDelete}
              className="flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-f1-background-secondary"
              title={labels?.deleteImage || "Delete"}
            >
              <Delete className="h-5 w-5 text-f1-foreground-secondary" />
            </button>
          </div>
        )}
      </div>
    </NodeViewWrapper>
  )
}

// Create the Image extension
export const ImageBlockExtension = Node.create({
  name: "imageBlock",
  group: "block",
  atom: true,
  selectable: true,
  draggable: true,

  addOptions() {
    return {
      uploadConfig: null as ImageUploadConfig | null,
    }
  },

  addAttributes() {
    return {
      src: {
        default: null,
        parseHTML: (element) => element.getAttribute("src"),
        renderHTML: (attributes) => {
          if (!attributes.src) return {}
          return { src: attributes.src }
        },
      },
      alt: {
        default: "",
        parseHTML: (element) => element.getAttribute("alt") || "",
        renderHTML: (attributes) => {
          if (!attributes.alt) return {}
          return { alt: attributes.alt }
        },
      },
      title: {
        default: "",
        parseHTML: (element) => element.getAttribute("title") || "",
        renderHTML: (attributes) => {
          if (!attributes.title) return {}
          return { title: attributes.title }
        },
      },
      signedId: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-signed-id"),
        renderHTML: (attributes) => {
          if (!attributes.signedId) return {}
          return { "data-signed-id": attributes.signedId }
        },
      },
      uploadStatus: {
        default: "idle",
        parseHTML: () => "success", // Loaded images are already uploaded
        renderHTML: () => ({}), // Don't render upload status to HTML
      },
      uploadProgress: {
        default: 0,
        parseHTML: () => 100,
        renderHTML: () => ({}),
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: "img[src]",
      },
      {
        tag: "div[data-image-block]",
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "img",
      mergeAttributes(HTMLAttributes, {
        class: "image-block-img",
      }),
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(ImageBlockView)
  },

  addCommands() {
    return {
      insertImageBlock:
        (file: File) =>
        ({ commands, editor }) => {
          const config = this.options.uploadConfig as ImageUploadConfig | null
          if (!config) {
            console.error("Image upload config not provided")
            return false
          }

          // Validate file type
          const acceptedTypes = config.acceptedTypes || DEFAULT_ACCEPTED_TYPES
          if (!acceptedTypes.includes(file.type)) {
            console.error("File type not accepted:", file.type)
            return false
          }

          // Validate file size
          const maxSize = config.maxSize || DEFAULT_MAX_SIZE
          if (file.size > maxSize) {
            console.error("File too large:", file.size)
            return false
          }

          // Create a local URL for immediate preview
          const localUrl = URL.createObjectURL(file)

          // Insert the image node with uploading status
          const result = commands.insertContent({
            type: this.name,
            attrs: {
              src: localUrl,
              alt: file.name,
              uploadStatus: "uploading",
              uploadProgress: 0,
            },
          })

          // Start the upload process
          config
            .onUpload(file)
            .then(({ url, signedId }) => {
              // Find and update the node with the uploaded URL
              const { state } = editor
              const { doc } = state

              doc.descendants((node, pos) => {
                if (
                  node.type.name === this.name &&
                  node.attrs.src === localUrl
                ) {
                  const tr = state.tr.setNodeMarkup(pos, undefined, {
                    ...node.attrs,
                    src: url,
                    signedId,
                    uploadStatus: "success",
                    uploadProgress: 100,
                  })
                  editor.view.dispatch(tr)

                  // Revoke the local URL
                  URL.revokeObjectURL(localUrl)
                  return false // Stop searching
                }
              })
            })
            .catch((error) => {
              console.error("Image upload failed:", error)

              // Find and update the node with error status
              const { state } = editor
              const { doc } = state

              doc.descendants((node, pos) => {
                if (
                  node.type.name === this.name &&
                  node.attrs.src === localUrl
                ) {
                  const tr = state.tr.setNodeMarkup(pos, undefined, {
                    ...node.attrs,
                    uploadStatus: "error",
                  })
                  editor.view.dispatch(tr)

                  // Revoke the local URL
                  URL.revokeObjectURL(localUrl)
                  return false
                }
              })
            })

          return result
        },

      insertImageFromUrl:
        (url: string, alt?: string) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: {
              src: url,
              alt: alt || "",
              uploadStatus: "success",
              uploadProgress: 100,
            },
          })
        },
    }
  },

  addProseMirrorPlugins() {
    const extension = this

    return [
      new Plugin({
        key: new PluginKey("imageBlockDropPaste"),
        props: {
          handleDrop(view, event) {
            const config = extension.options
              .uploadConfig as ImageUploadConfig | null
            if (!config) return false

            const files = event.dataTransfer?.files
            if (!files || files.length === 0) return false

            const imageFiles = Array.from(files).filter((file) =>
              (config.acceptedTypes || DEFAULT_ACCEPTED_TYPES).includes(
                file.type
              )
            )

            if (imageFiles.length === 0) return false

            event.preventDefault()

            // Get drop position
            const coordinates = view.posAtCoords({
              left: event.clientX,
              top: event.clientY,
            })

            if (!coordinates) return false

            // Insert images at drop position
            const { state, dispatch } = view
            let tr = state.tr

            imageFiles.forEach((file, index) => {
              const localUrl = URL.createObjectURL(file)
              const node = state.schema.nodes.imageBlock.create({
                src: localUrl,
                alt: file.name,
                uploadStatus: "uploading",
                uploadProgress: 0,
              })

              tr = tr.insert(coordinates.pos + index, node)

              // Start upload
              config
                .onUpload(file)
                .then(({ url, signedId }) => {
                  const { state: currentState } = view
                  currentState.doc.descendants((n, pos) => {
                    if (
                      n.type.name === "imageBlock" &&
                      n.attrs.src === localUrl
                    ) {
                      const updateTr = currentState.tr.setNodeMarkup(
                        pos,
                        undefined,
                        {
                          ...n.attrs,
                          src: url,
                          signedId,
                          uploadStatus: "success",
                          uploadProgress: 100,
                        }
                      )
                      view.dispatch(updateTr)
                      URL.revokeObjectURL(localUrl)
                      return false
                    }
                  })
                })
                .catch(() => {
                  const { state: currentState } = view
                  currentState.doc.descendants((n, pos) => {
                    if (
                      n.type.name === "imageBlock" &&
                      n.attrs.src === localUrl
                    ) {
                      const updateTr = currentState.tr.setNodeMarkup(
                        pos,
                        undefined,
                        {
                          ...n.attrs,
                          uploadStatus: "error",
                        }
                      )
                      view.dispatch(updateTr)
                      URL.revokeObjectURL(localUrl)
                      return false
                    }
                  })
                })
            })

            dispatch(tr)
            return true
          },

          handlePaste(view, event) {
            const config = extension.options
              .uploadConfig as ImageUploadConfig | null
            if (!config) return false

            const items = event.clipboardData?.items
            if (!items) return false

            const imageItems = Array.from(items).filter(
              (item) =>
                item.kind === "file" &&
                (config.acceptedTypes || DEFAULT_ACCEPTED_TYPES).includes(
                  item.type
                )
            )

            if (imageItems.length === 0) return false

            event.preventDefault()

            const { state, dispatch } = view
            let tr = state.tr
            const pos = state.selection.from

            imageItems.forEach((item, index) => {
              const file = item.getAsFile()
              if (!file) return

              const localUrl = URL.createObjectURL(file)
              const node = state.schema.nodes.imageBlock.create({
                src: localUrl,
                alt: file.name,
                uploadStatus: "uploading",
                uploadProgress: 0,
              })

              tr = tr.insert(pos + index, node)

              // Start upload
              config
                .onUpload(file)
                .then(({ url, signedId }) => {
                  const { state: currentState } = view
                  currentState.doc.descendants((n, nodePos) => {
                    if (
                      n.type.name === "imageBlock" &&
                      n.attrs.src === localUrl
                    ) {
                      const updateTr = currentState.tr.setNodeMarkup(
                        nodePos,
                        undefined,
                        {
                          ...n.attrs,
                          src: url,
                          signedId,
                          uploadStatus: "success",
                          uploadProgress: 100,
                        }
                      )
                      view.dispatch(updateTr)
                      URL.revokeObjectURL(localUrl)
                      return false
                    }
                  })
                })
                .catch(() => {
                  const { state: currentState } = view
                  currentState.doc.descendants((n, nodePos) => {
                    if (
                      n.type.name === "imageBlock" &&
                      n.attrs.src === localUrl
                    ) {
                      const updateTr = currentState.tr.setNodeMarkup(
                        nodePos,
                        undefined,
                        {
                          ...n.attrs,
                          uploadStatus: "error",
                        }
                      )
                      view.dispatch(updateTr)
                      URL.revokeObjectURL(localUrl)
                      return false
                    }
                  })
                })
            })

            dispatch(tr)
            return true
          },
        },
      }),
    ]
  },
})

export type { ImageAttributes }
