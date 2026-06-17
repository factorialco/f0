import type { Editor } from "@tiptap/core"

// Shared error contract for every attachment-style block (image, file, ...).
export type UploadErrorType =
  | "file-too-large"
  | "invalid-type"
  | "upload-failed"

export interface BaseUploadConfig {
  onUpload: (file: File) => Promise<{ url: string; signedId?: string }>
  maxFileSize?: number
  onError?: (errorType: UploadErrorType) => void
}

export const DEFAULT_MAX_SIZE = 50 * 1024 * 1024 // 50MB

interface OptimisticUploadParams {
  /** Tiptap node name to insert and reconcile (e.g. "image", "fileAttachment"). */
  nodeName: string
  /** Per-node type validation. Return an error type to reject, or null to accept. */
  validate: (file: File) => UploadErrorType | null
  /** Node-specific attrs for the optimistic placeholder (src, alt, filename, ...). */
  buildInsertAttrs: (ctx: {
    previewUrl: string
    file: File
  }) => Record<string, unknown>
  /** Node-specific attrs to write once the upload resolves (src, signedId, ...). */
  buildSettledAttrs: (result: {
    url: string
    signedId?: string
  }) => Record<string, unknown>
}

/**
 * Optimistic-insert + reconcile-by-upload-id machinery shared by attachment
 * blocks. Inserts a placeholder node immediately, uploads in the background,
 * then swaps in the server URL (or removes the node on failure) by locating it
 * via its `data-upload-id` — so it survives the document shifting mid-upload.
 *
 * Reconciliation updates the node by position (not `setNodeSelection`) and
 * bails if the editor was destroyed while the upload was in flight, so a user
 * who keeps typing or navigates away mid-upload is never disrupted.
 *
 * Any unexpected failure (createObjectURL, the insert, or the upload itself)
 * is funnelled through `onError("upload-failed")` rather than escaping as an
 * unhandled rejection — the caller does not need to `.catch` the returned
 * promise.
 */
export const handleOptimisticUpload = async (
  editor: Editor,
  file: File,
  config: BaseUploadConfig,
  params: OptimisticUploadParams,
  pos?: number
) => {
  const maxSize = config.maxFileSize ?? DEFAULT_MAX_SIZE
  const { onError } = config

  const typeError = params.validate(file)
  if (typeError) {
    onError?.(typeError)
    return
  }

  if (file.size > maxSize) {
    onError?.("file-too-large")
    return
  }

  let previewUrl: string | null = null
  let uploadId: string | null = null

  const findNodePos = (): number | null => {
    if (uploadId === null) return null
    let nodePos: number | null = null
    editor.state.doc.descendants((node, position) => {
      if (
        node.type.name === params.nodeName &&
        node.attrs["data-upload-id"] === uploadId
      ) {
        nodePos = position
        return false
      }
      return true
    })
    return nodePos
  }

  try {
    previewUrl = URL.createObjectURL(file)
    uploadId = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`

    const insertPos = pos ?? editor.state.selection.anchor
    editor
      .chain()
      .focus()
      .insertContentAt(insertPos, [
        {
          type: params.nodeName,
          attrs: {
            ...params.buildInsertAttrs({ previewUrl, file }),
            uploading: true,
            "data-upload-id": uploadId,
          },
        },
      ])
      .run()

    const result = await config.onUpload(file)

    // The upload is async: the editor may have been destroyed (component
    // unmounted) while it was in flight. Touching `editor.state` then throws.
    if (editor.isDestroyed) return

    const nodePos = findNodePos()
    if (nodePos !== null) {
      const node = editor.state.doc.nodeAt(nodePos)
      if (node) {
        // Update in place by position rather than via `setNodeSelection`,
        // which would yank the user's caret onto the node if they kept typing.
        editor.view.dispatch(
          editor.state.tr.setNodeMarkup(nodePos, undefined, {
            ...node.attrs,
            ...params.buildSettledAttrs(result),
            uploading: false,
            "data-upload-id": null,
          })
        )
      }
    }
  } catch {
    onError?.("upload-failed")

    if (editor.isDestroyed) return

    // Remove the placeholder if it made it into the document (it may not have,
    // if createObjectURL or the insert itself threw).
    const nodePos = findNodePos()
    if (nodePos !== null) {
      const node = editor.state.doc.nodeAt(nodePos)
      if (node) {
        // Delete by position so we don't move the user's caret onto the node.
        editor.view.dispatch(
          editor.state.tr.delete(nodePos, nodePos + node.nodeSize)
        )
      }
    }
  } finally {
    if (previewUrl) URL.revokeObjectURL(previewUrl)
  }
}
