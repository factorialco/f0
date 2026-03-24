import { BubbleMenu, Editor, isTextSelection } from "@tiptap/react"
import { NodeSelection } from "prosemirror-state"
import { useCallback, useState } from "react"

import { EnhanceActivator } from "../../RichTextEditor/Enhance"
import { enhanceConfig, lastIntentType } from "../../RichTextEditor/utils/types"
import { ToolbarDivider } from "../Toolbar/ToolbarDivider"
import { Toolbar } from "../Toolbar"
import { AiTutorConfig, AskAITutorButton } from "./AskAITutorButton"
import { AskAITutorChat } from "./AskAITutorDialog"

interface EditorBubbleMenuProps {
  editor: Editor
  disableButtons: boolean
  isToolbarOpen: boolean
  isFullscreen: boolean
  editorId: string
  plainHtmlMode?: boolean
  aiTutorConfig?: AiTutorConfig
  readonlyAiMode?: boolean
  // Optional enhance props
  enhanceConfig?: enhanceConfig
  onEnhanceWithAI?: (
    selectedOption?: string,
    customIntent?: string
  ) => Promise<void>
  isLoadingEnhance?: boolean
  setLastIntent?: (lastIntent: lastIntentType) => void
  // Hide bubble menu when enhance is active
  isAcceptChangesOpen?: boolean
  hasError?: boolean
}

export const EditorBubbleMenu = ({
  editorId,
  editor,
  disableButtons,
  isToolbarOpen,
  isFullscreen,
  plainHtmlMode = false,
  enhanceConfig,
  onEnhanceWithAI,
  isLoadingEnhance = false,
  setLastIntent,
  isAcceptChangesOpen = false,
  hasError = false,
  aiTutorConfig,
  readonlyAiMode = false,
}: EditorBubbleMenuProps) => {
  const showEnhance = enhanceConfig && onEnhanceWithAI && setLastIntent

  // Hide bubble menu during enhance flow
  const shouldHideForEnhance =
    isLoadingEnhance || isAcceptChangesOpen || hasError

  const [isAiDialogOpen, setIsAiDialogOpen] = useState(false)
  const [selectedText, setSelectedText] = useState("")
  const [chatPosition, setChatPosition] = useState<{
    top: number
    left: number
  } | null>(null)

  const handleAiOpen = useCallback(
    (text: string) => {
      // Capture selection coordinates before collapsing
      const { from, to } = editor.state.selection
      const start = editor.view.coordsAtPos(from)
      const end = editor.view.coordsAtPos(to)
      const editorEl = document.getElementById(editorId)
      if (editorEl) {
        const editorRect = editorEl.getBoundingClientRect()
        setChatPosition({
          top: end.bottom - editorRect.top + 8,
          left: Math.min(
            start.left - editorRect.left,
            editorRect.width - 370 // ensure chat doesn't overflow right
          ),
        })
      }

      setSelectedText(text)
      setIsAiDialogOpen(true)
      editor.chain().setTextSelection(from).blur().run()
    },
    [editor, editorId]
  )

  return (
    <>
      <BubbleMenu
        tippyOptions={{
          duration: 100,
          placement: "top",
          hideOnClick: false,
          appendTo: () =>
            isFullscreen
              ? document.body
              : document.getElementById(editorId) || document.body,
          zIndex: 9999,
        }}
        editor={editor}
        shouldShow={({ view, state, from, to }) => {
          const { doc, selection } = state
          const { empty } = selection

          if (selection instanceof NodeSelection) {
            return false
          }
          const isEmptyTextBlock =
            !doc.textBetween(from, to).length &&
            isTextSelection(state.selection)

          const isChildOfMenu = document
            .getElementById(editorId)
            ?.contains(document.activeElement)

          const hasEditorFocus = view.hasFocus() || isChildOfMenu

          if (readonlyAiMode) {
            // In readonly mode, only show if text is selected and focused
            return !!(hasEditorFocus && !empty && !isEmptyTextBlock)
          }

          if (
            !hasEditorFocus ||
            empty ||
            isEmptyTextBlock ||
            !editor.isEditable
          ) {
            return false
          }

          return true
        }}
      >
        {readonlyAiMode && aiTutorConfig ? (
          <div className="z-50">
            <AskAITutorButton
              editor={editor}
              config={aiTutorConfig}
              onOpen={handleAiOpen}
            />
          </div>
        ) : (
          !isToolbarOpen &&
          !shouldHideForEnhance && (
            <div className="dark z-50 flex w-max flex-row items-center gap-1 rounded-lg border border-solid border-f1-border bg-f1-background p-1 drop-shadow-sm">
              {showEnhance && (
                <>
                  <EnhanceActivator
                    editor={editor}
                    onEnhanceWithAI={onEnhanceWithAI}
                    isLoadingEnhance={isLoadingEnhance}
                    enhanceConfig={enhanceConfig}
                    disableButtons={disableButtons}
                    hideLabel
                    position="top"
                    setLastIntent={setLastIntent}
                  />

                  <ToolbarDivider />
                </>
              )}
              <Toolbar
                editor={editor}
                disableButtons={disableButtons}
                darkMode
                showEmojiPicker={false}
                plainHtmlMode={plainHtmlMode}
              />
              {aiTutorConfig && (
                <>
                  <ToolbarDivider />
                  <AskAITutorButton
                    editor={editor}
                    config={aiTutorConfig}
                    onOpen={handleAiOpen}
                  />
                </>
              )}
            </div>
          )
        )}
      </BubbleMenu>
      {aiTutorConfig && (
        <AskAITutorChat
          isOpen={isAiDialogOpen}
          selectedText={selectedText}
          chatConfig={aiTutorConfig.chatConfig}
          onClose={() => setIsAiDialogOpen(false)}
          onGoDeeper={aiTutorConfig.onGoDeeper}
          position={chatPosition}
        />
      )}
    </>
  )
}
