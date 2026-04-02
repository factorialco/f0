import { BubbleMenu, Editor, isTextSelection } from "@tiptap/react"
import { NodeSelection } from "prosemirror-state"

import { EnhanceActivator } from "../../RichTextEditor/Enhance"
import { enhanceConfig, lastIntentType } from "../../RichTextEditor/utils/types"
import { Toolbar, ToolbarDivider } from "../Toolbar"

interface EditorBubbleMenuProps {
  editor: Editor
  disableButtons: boolean
  isToolbarOpen: boolean
  isFullscreen: boolean
  editorId: string
  plainHtmlMode?: boolean
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
}: EditorBubbleMenuProps) => {
  const showEnhance = enhanceConfig && onEnhanceWithAI && setLastIntent

  // Hide bubble menu during enhance flow
  const shouldHideForEnhance =
    isLoadingEnhance || isAcceptChangesOpen || hasError

  return (
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
          !doc.textBetween(from, to).length && isTextSelection(state.selection)

        const isChildOfMenu = document
          .getElementById(editorId)
          ?.contains(document.activeElement)

        const hasEditorFocus = view.hasFocus() || isChildOfMenu

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
      {!isToolbarOpen && !shouldHideForEnhance && (
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
        </div>
      )}
    </BubbleMenu>
  )
}
