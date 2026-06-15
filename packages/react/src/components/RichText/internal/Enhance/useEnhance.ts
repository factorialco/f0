import { Editor } from "@tiptap/react"
import { useCallback, useEffect, useMemo, useState } from "react"

import { useI18n } from "@/lib/providers/i18n/i18n-provider"

import { handleEnhanceWithAIFunction } from "./enhance"
import { enhanceConfig, lastIntentType } from "./types"

interface UseEnhanceReturn {
  /** The enhance configuration passed by the consumer (undefined disables enhance) */
  config?: enhanceConfig
  /** Whether an AI enhancement request is in progress */
  isLoading: boolean
  /** Whether the accept/reject UI should be shown */
  isAcceptChangesOpen: boolean
  /** Current error message, if any */
  error: string | null
  /** Whether all editor buttons should be disabled */
  disableButtons: boolean
  /** Trigger an AI enhancement with the given intent */
  handleEnhanceWithAI: (
    selectedIntent?: string,
    customIntent?: string
  ) => Promise<void>
  /** Accept the current AI-enhanced changes */
  acceptChanges: () => void
  /** Reject the current AI-enhanced changes and undo */
  rejectChanges: () => void
  /** Reject current changes and retry with the last intent */
  retryChanges: () => void
  /** Set an error message (disables editor when non-null, re-enables when null) */
  setError: (message: string | null) => void
  /** Clear the current error and re-enable the editor */
  clearError: () => void
  /**
   * Viewport bottom coordinate of the generated content when the review
   * opened, so floating review UIs can position themselves below it instead
   * of over it. Null when it couldn't be measured.
   */
  reviewAnchorTop: number | null
}

const clearNativeSelection = () => {
  const selection = window.getSelection()
  if (selection && selection.rangeCount > 0) {
    selection.removeAllRanges()
  }
}

function useEnhance(
  editor: Editor | null,
  config?: enhanceConfig
): UseEnhanceReturn {
  const i18n = useI18n()

  const [isLoading, setIsLoading] = useState(false)
  const [isAcceptChangesOpen, setIsAcceptChangesOpen] = useState(false)
  const [lastIntent, setLastIntent] = useState<lastIntentType>(null)
  const [error, setErrorInternal] = useState<string | null>(null)
  const [reviewAnchorTop, setReviewAnchorTop] = useState<number | null>(null)

  useEffect(() => {
    if (error && editor) {
      editor.setEditable(false)
    }
  }, [error, editor])

  const setError = useCallback(
    (message: string | null) => {
      setErrorInternal(message)
      if (!message && editor) {
        editor.setEditable(true)
      }
    },
    [editor]
  )

  const clearError = useCallback(() => setError(null), [setError])

  const handleEnhanceWithAI = useCallback(
    async (selectedIntent?: string, customIntent?: string) => {
      if (!config || !editor) return

      setLastIntent({ selectedIntent, customIntent })

      await handleEnhanceWithAIFunction({
        editor,
        enhanceText: config.onEnhanceText,
        setIsLoadingEnhance: setIsLoading,
        onLoadingStart: ({ range }) => {
          editor.setEditable(false)
          // Highlight the affected range while loading — for a full-document
          // enhance the range spans the whole content, so everything shines.
          // The placeholder is what shines instead when there is no text yet.
          editor.commands.setEnhanceHighlight(range.from, range.to, {
            placeholder: i18n.richTextEditor.ai.loadingEnhanceLabel,
          })
          ;(editor.view.dom as HTMLElement).blur()
          clearNativeSelection()
        },
        onSuccess: ({ to }) => {
          // The shine highlight is only a loading affordance: drop it once the
          // enhancement is ready, leaving the text untouched (no selection).
          editor.commands.clearEnhanceHighlight()
          // Anchor floating review UIs below the generated content so they
          // never cover it. coordsAtPos needs a real layout (throws in jsdom).
          try {
            const pos = Math.max(0, Math.min(to, editor.state.doc.content.size))
            setReviewAnchorTop(editor.view.coordsAtPos(pos).bottom)
          } catch {
            setReviewAnchorTop(null)
          }
          setIsAcceptChangesOpen(true)
        },
        onError: (errorMsg?: string) => {
          setIsAcceptChangesOpen(false)
          editor.commands.clearEnhanceHighlight()
          setErrorInternal(errorMsg || i18n.richTextEditor.ai.defaultError)
        },
        selectedIntent,
        customIntent,
      })
    },
    [
      config,
      editor,
      i18n.richTextEditor.ai.defaultError,
      i18n.richTextEditor.ai.loadingEnhanceLabel,
    ]
  )

  const acceptChanges = useCallback(() => {
    if (!editor) return
    editor.commands.clearEnhanceHighlight()
    setIsAcceptChangesOpen(false)
    editor.setEditable(true)
    setLastIntent(null)
    config?.onAcceptChanges?.()
  }, [editor, config])

  const rejectChanges = useCallback(() => {
    if (!editor) return
    editor.commands.clearEnhanceHighlight()
    editor.chain().focus().undo().run()
    setIsAcceptChangesOpen(false)
    editor.setEditable(true)
    setLastIntent(null)
    config?.onRejectChanges?.()
  }, [editor, config])

  const retryChanges = useCallback(() => {
    if (!editor) return
    editor.commands.clearEnhanceHighlight()
    editor.chain().focus().undo().run()
    config?.onRetryChanges?.()
    handleEnhanceWithAI(lastIntent?.selectedIntent, lastIntent?.customIntent)
  }, [editor, config, handleEnhanceWithAI, lastIntent])

  const disableButtons = !!(isAcceptChangesOpen || isLoading || error)

  // Stable identity so memoized consumers (BubbleMenu, EnhanceActivator) only
  // re-render when the enhance state actually changes.
  return useMemo(
    () => ({
      config,
      isLoading,
      isAcceptChangesOpen,
      error,
      disableButtons,
      handleEnhanceWithAI,
      acceptChanges,
      rejectChanges,
      retryChanges,
      setError,
      clearError,
      reviewAnchorTop,
    }),
    [
      config,
      isLoading,
      isAcceptChangesOpen,
      error,
      disableButtons,
      handleEnhanceWithAI,
      acceptChanges,
      rejectChanges,
      retryChanges,
      setError,
      clearError,
      reviewAnchorTop,
    ]
  )
}

export { useEnhance }
export type { UseEnhanceReturn }
