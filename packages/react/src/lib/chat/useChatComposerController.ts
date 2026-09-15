import { useCallback, useRef, type ClipboardEvent } from "react"
import { handleComposerPaste } from "./composerPaste"
import { useComposerDraftText } from "./useComposerDraftText"
import {
  useComposerFiles,
  type ComposerFile,
  type ComposerFilesOptions,
} from "./useComposerFiles"

export type ComposerSnapshot<T> = {
  scopeKey: string
  text: string
  files: ComposerFile<T>[]
}

export function useChatComposerController<T>(
  options: ComposerFilesOptions<T> & { scopeKey: string }
) {
  const draft = useComposerDraftText(options.scopeKey)
  const files = useComposerFiles(options)
  const submittingRef = useRef(false)
  const activeScope = useRef(options.scopeKey)
  activeScope.current = options.scopeKey

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

  const submit = useCallback(
    (
      accept: (
        snapshot: ComposerSnapshot<T>
      ) => boolean | void | Promise<boolean | void>,
      selected?: ComposerSnapshot<T>
    ): boolean | Promise<boolean> => {
      if (
        submittingRef.current ||
        activeScope.current !== options.scopeKey ||
        draft.renderedScopeKey !== options.scopeKey
      ) {
        return false
      }
      submittingRef.current = true
      const snapshot: ComposerSnapshot<T> = selected ?? {
        scopeKey: options.scopeKey,
        text: draft.value,
        files: files.files,
      }
      const complete = (result: boolean | void) => {
        if (result === false) {
          return false
        }
        if (!selected) {
          draft.updateValueForScope(snapshot.scopeKey, (current) =>
            current === snapshot.text ? "" : current
          )
        }
        files.clearFiles(
          snapshot.files.map((file) => file.id),
          snapshot.scopeKey
        )
        return true
      }
      try {
        const result = accept(snapshot)
        if (result instanceof Promise) {
          return result.then(complete).finally(() => {
            submittingRef.current = false
          })
        }
        const accepted = complete(result)
        submittingRef.current = false
        return accepted
      } catch (error) {
        submittingRef.current = false
        throw error
      }
    },
    [
      draft.renderedScopeKey,
      draft.updateValueForScope,
      draft.value,
      files.clearFiles,
      files.files,
      options.scopeKey,
    ]
  )

  return { ...draft, ...files, paste, submit }
}
