import { Editor, JSONContent } from "@tiptap/react"

import { enhancedTextResponse, enhanceTextParams } from "./types"

/** Maximum characters sent to the AI for enhancement */
const MAX_ENHANCE_TEXT_LENGTH = 5000
/** Documents shorter than this are sent whole as context */
const FULL_CONTEXT_THRESHOLD = 10000
/** Characters of surrounding text used as context on large documents */
const CONTEXT_WINDOW_CHARS = 2500

function extractTextToEnhance(editor: Editor) {
  const selectedRange =
    editor.state.selection.to !== editor.state.selection.from
      ? editor.state.selection
      : null

  const fullContent = editor.getHTML()
  const from = selectedRange?.from ?? 0
  const to = selectedRange?.to ?? editor.state.doc.content.size

  // Get text based on selection or full content
  let textToEnhance = selectedRange
    ? editor.state.doc.textBetween(from, to, " ")
    : fullContent

  if (textToEnhance.length > MAX_ENHANCE_TEXT_LENGTH) {
    textToEnhance = textToEnhance.substring(0, MAX_ENHANCE_TEXT_LENGTH)
  }

  return {
    text: textToEnhance,
    from,
    to,
    isFullDocumentSelected: !selectedRange,
  }
}

function prepareEnhancementContext(editor: Editor, from: number, to: number) {
  const fullContent = editor.getHTML()

  // For small documents, use the full content as context
  if (fullContent.length < FULL_CONTEXT_THRESHOLD) {
    return fullContent
  }

  // For larger documents, extract text around the selection
  const contextStart = Math.max(0, from - CONTEXT_WINDOW_CHARS)
  const beforeText = editor.state.doc.textBetween(contextStart, from, " ")

  const contextEnd = Math.min(
    editor.state.doc.content.size,
    to + CONTEXT_WINDOW_CHARS
  )
  const afterText = editor.state.doc.textBetween(to, contextEnd, " ")

  return beforeText + " " + afterText
}

interface ApplyEnhancedTextResult {
  highlightFrom: number
  highlightTo: number
}

function applyEnhancedText(
  editor: Editor,
  enhancedText: string | JSONContent,
  from: number,
  to: number,
  isFullDocumentSelected: boolean
): ApplyEnhancedTextResult {
  if (isFullDocumentSelected) {
    editor.chain().focus().setContent(enhancedText).run()
    // For full document, highlight everything (1 to avoid the start, content.size - 1 to avoid the end)
    const docSize = editor.state.doc.content.size
    return {
      highlightFrom: 1,
      highlightTo: Math.max(1, docSize - 1),
    }
  } else {
    editor
      .chain()
      .focus()
      .deleteRange({ from, to })
      .insertContent(enhancedText)
      .run()
    // After insertion, cursor is at the end of inserted content
    const highlightTo = editor.state.selection.to
    return {
      highlightFrom: from,
      highlightTo,
    }
  }
}

function isValidForEnhancement(text: string): boolean {
  return text.trim().length > 0
}

export interface EnhanceHighlightRange {
  from: number
  to: number
}

export interface EnhanceLoadingInfo {
  range: EnhanceHighlightRange
  isFullDocument: boolean
}

export interface EnhanceWithAIParams {
  editor: Editor
  enhanceText: (params: enhanceTextParams) => Promise<enhancedTextResponse>
  setIsLoadingEnhance: (loading: boolean) => void
  selectedIntent?: string
  customIntent?: string
  onLoadingStart: (info: EnhanceLoadingInfo) => void
  onSuccess: (highlightRange: EnhanceHighlightRange) => void
  onError: (error?: string) => void
}

async function handleEnhanceWithAIFunction({
  editor,
  enhanceText,
  setIsLoadingEnhance,
  selectedIntent,
  customIntent,
  onLoadingStart,
  onSuccess,
  onError,
}: EnhanceWithAIParams): Promise<void> {
  const {
    text: textToEnhance,
    from,
    to,
    isFullDocumentSelected,
  } = extractTextToEnhance(editor)

  if (!isValidForEnhancement(textToEnhance)) return

  const context = prepareEnhancementContext(editor, from, to)

  // Set highlight on selected text before starting the API call
  const initialFrom = isFullDocumentSelected ? 1 : from
  const initialTo = isFullDocumentSelected
    ? Math.max(1, editor.state.doc.content.size - 1)
    : to
  onLoadingStart({
    range: { from: initialFrom, to: initialTo },
    isFullDocument: isFullDocumentSelected,
  })

  try {
    setIsLoadingEnhance(true)

    const { success, text, error } = await enhanceText({
      text: textToEnhance,
      selectedIntent: selectedIntent,
      customIntent: customIntent,
      context: context,
    })

    if (success) {
      const { highlightFrom, highlightTo } = applyEnhancedText(
        editor,
        text,
        from,
        to,
        isFullDocumentSelected ||
          textToEnhance.toString() === editor.getHTML().toString()
      )
      onSuccess({ from: highlightFrom, to: highlightTo })
    } else {
      onError(error)
    }
  } catch {
    onError()
  } finally {
    setIsLoadingEnhance(false)
  }
}

export { handleEnhanceWithAIFunction }
