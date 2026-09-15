import { useCallback, type ClipboardEvent } from "react"
import { handleComposerPaste } from "./composerPaste"
import { useComposerDraftText } from "./useComposerDraftText"
import { useComposerFiles, type ComposerFilesOptions } from "./useComposerFiles"
import { useComposerSubmission } from "./useComposerSubmission"

export type { ComposerSnapshot } from "./useComposerSubmission"

export function useChatComposerController<T>(
  options: ComposerFilesOptions<T> & {
    scopeKey: string
    onSubmitBlocked?: () => void
  }
) {
  const draft = useComposerDraftText(options.scopeKey)
  const files = useComposerFiles(options)
  const paste = useCallback(
    (
      event: ClipboardEvent<HTMLTextAreaElement>,
      onTextChange?: (text: string, caret: number) => void
    ) => {
      if (!options.uploadFiles) {
        return
      }
      handleComposerPaste(
        event,
        (items) => void files.addFiles(items),
        onTextChange ??
          ((text, caret) => {
            draft.setValue(text)
            draft.setCursorPosition(caret)
          })
      )
    },
    [
      draft.setCursorPosition,
      draft.setValue,
      files.addFiles,
      options.uploadFiles,
    ]
  )

  const submission = useComposerSubmission({
    snapshot: {
      scopeKey: options.scopeKey,
      text: draft.value,
      files: files.files,
    },
    renderedScopeKey: draft.renderedScopeKey,
    onBlocked: options.onSubmitBlocked ?? (() => options.onError("upload")),
    onError: (error) => options.onError("upload", error),
    onAccepted: (snapshot, selected) => {
      if (!selected) {
        draft.updateValueForScope(snapshot.scopeKey, (current) =>
          current === snapshot.text ? "" : current
        )
      }
      files.clearFiles(
        snapshot.files.map((file) => file.id),
        snapshot.scopeKey
      )
    },
  })

  return { ...draft, ...files, paste, ...submission }
}
