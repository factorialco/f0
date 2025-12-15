import { BubbleMenu, Editor, isTextSelection } from "@tiptap/react"
import { NodeSelection } from "prosemirror-state"
import { Toolbar } from "../Toolbar"
import { ToolbarLabels } from "../Toolbar/types"

interface EditorBubbleMenuProps {
  editor: Editor
  disableButtons: boolean
  toolbarLabels: ToolbarLabels
  isToolbarOpen: boolean
  isFullscreen: boolean
  editorId: string
  plainHtmlMode?: boolean
}

export const EditorBubbleMenu = ({
  editorId,
  editor,
  disableButtons,
  toolbarLabels,
  isToolbarOpen,
  isFullscreen,
  plainHtmlMode = false,
}: EditorBubbleMenuProps) => {
  return (
    <BubbleMenu
      tippyOptions={{
        duration: 100,
        placement: "top",
        hideOnClick: false,
        appendTo: () =>
          isFullscreen ? document.body : document.getElementById(editorId) || document.body,
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

        const isChildOfMenu = document.getElementById(editorId)?.contains(document.activeElement)

        const hasEditorFocus = view.hasFocus() || isChildOfMenu

        if (!hasEditorFocus || empty || isEmptyTextBlock || !editor.isEditable) {
          return false
        }

        return true
      }}
    >
      {!isToolbarOpen && (
        <div className="dark z-50 flex w-max flex-row items-center rounded-lg border border-solid border-f1-border bg-f1-background p-1 drop-shadow-sm">
          <Toolbar
            labels={toolbarLabels}
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
