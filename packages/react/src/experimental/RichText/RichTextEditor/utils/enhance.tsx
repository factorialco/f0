import { Editor } from "@tiptap/react"
import { enhancedTextResponse, enhanceTextParams } from ".."

function extractTextToEnhance(editor: Editor) {
  const selectedRange =
    editor.state.selection.to !== editor.state.selection.from ? editor.state.selection : null

  const fullContent = editor.getHTML()
  const from = selectedRange?.from ?? 0
  const to = selectedRange?.to ?? editor.state.doc.content.size

  // Get text based on selection or full content
  let textToEnhance = selectedRange ? editor.state.doc.textBetween(from, to, " ") : fullContent

  // Limit text to 5000 characters
  if (textToEnhance.length > 5000) {
    textToEnhance = textToEnhance.substring(0, 5000)
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
  if (fullContent.length < 10000) {
    return fullContent
  }

  // For larger documents, extract text around the selection
  const beforeChars = 2500
  const afterChars = 2500
  const contextStart = Math.max(0, from - beforeChars)
  const beforeText = editor.state.doc.textBetween(contextStart, from, " ")

  const contextEnd = Math.min(editor.state.doc.content.size, to + afterChars)
  const afterText = editor.state.doc.textBetween(to, contextEnd, " ")

  return beforeText + " " + afterText
}

function applyEnhancedText(
  editor: Editor,
  enhancedText: string,
  from: number,
  to: number,
  isFullDocumentSelected: boolean
) {
  if (isFullDocumentSelected) {
    editor.chain().focus().setContent(enhancedText).run()
  } else {
    editor.chain().focus().deleteRange({ from, to }).insertContent(enhancedText).run()
  }
}

function isValidForEnhancement(text: string): boolean {
  return text.trim().length > 0
}

export interface EnhanceWithAIParams {
  editor: Editor
  enhanceText: (params: enhanceTextParams) => Promise<enhancedTextResponse>
  setIsLoadingEnhance: (loading: boolean) => void
  selectedIntent?: string
  customIntent?: string
  onSuccess: () => void
  onError: (error?: string) => void
}

async function handleEnhanceWithAIFunction({
  editor,
  enhanceText,
  setIsLoadingEnhance,
  selectedIntent,
  customIntent,
  onSuccess,
  onError,
}: EnhanceWithAIParams): Promise<void> {
  const { text: textToEnhance, from, to, isFullDocumentSelected } = extractTextToEnhance(editor)

  if (!isValidForEnhancement(textToEnhance)) return

  const context = prepareEnhancementContext(editor, from, to)

  try {
    setIsLoadingEnhance(true)

    const { success, text, error } = await enhanceText({
      text: textToEnhance,
      selectedIntent: selectedIntent,
      customIntent: customIntent,
      context: context,
    })

    if (success) {
      applyEnhancedText(
        editor,
        text,
        from,
        to,
        isFullDocumentSelected || textToEnhance.toString() === editor.getHTML().toString()
      )
      onSuccess()
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
