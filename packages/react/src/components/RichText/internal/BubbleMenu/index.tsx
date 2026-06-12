import { BubbleMenu, Editor, isTextSelection } from "@tiptap/react"
import { NodeSelection } from "prosemirror-state"
import { memo, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

import { EnhanceActivator } from "../Enhance/EnhanceActivator"
import type { UseEnhanceReturn } from "../Enhance/useEnhance"
import { Toolbar, ToolbarDivider } from "../Toolbar"

const POPPER_OPTIONS = {
  modifiers: [
    {
      name: "preventOverflow",
      options: {
        boundary: "viewport",
        padding: 12,
        altAxis: true,
        tether: true,
      },
    },
    {
      name: "flip",
      options: {
        fallbackPlacements: [
          "bottom-start",
          "bottom-end",
          "top",
          "top-start",
          "top-end",
        ],
      },
    },
  ],
}

interface EditorBubbleMenuProps {
  editor: Editor
  disableButtons: boolean
  isToolbarOpen: boolean
  isFullscreen: boolean
  editorId: string
  plainHtmlMode?: boolean
  /** Enhance UI state from useEnhance; omit to disable the enhance entry point */
  enhance?: UseEnhanceReturn
}

export const EditorBubbleMenu = memo(function EditorBubbleMenu({
  editorId,
  editor,
  disableButtons,
  isToolbarOpen,
  isFullscreen,
  plainHtmlMode = false,
  enhance,
}: EditorBubbleMenuProps) {
  // Hidden while enhance reports an error; kept visible mid-flow (loading/review)
  const enhanceActive = !!enhance?.error
  const shouldKeepEnhanceVisible =
    !!enhance?.config && !!(enhance.isLoading || enhance.isAcceptChangesOpen)
  const bubbleMenuContainerRef = useRef<HTMLDivElement>(null)
  const [bubbleMenuWidth, setBubbleMenuWidth] = useState<number>()

  useEffect(() => {
    if (!bubbleMenuContainerRef.current) return
    const updateWidth = () => {
      setBubbleMenuWidth(bubbleMenuContainerRef.current?.offsetWidth)
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  return (
    <BubbleMenu
      tippyOptions={{
        duration: 100,
        placement: "bottom",
        hideOnClick: false,
        interactive: true,
        maxWidth: "none",
        appendTo: () =>
          isFullscreen
            ? document.body
            : document.getElementById(editorId) || document.body,
        zIndex: 9999,
        popperOptions: POPPER_OPTIONS,
      }}
      editor={editor}
      shouldShow={({ view, state, from, to }) => {
        if (shouldKeepEnhanceVisible) {
          return true
        }

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
      {!isToolbarOpen && (!enhanceActive || shouldKeepEnhanceVisible) && (
        <div
          ref={bubbleMenuContainerRef}
          className={cn(
            "dark z-50 flex w-max flex-row items-center gap-1 rounded-md border border-solid border-f1-border bg-f1-background p-1.5 drop-shadow-sm",
            // Once the enhance flow starts (loading/review) the bubble bar
            // disappears; it stays mounted so the activator's anchored review
            // panel keeps working.
            shouldKeepEnhanceVisible && "invisible"
          )}
        >
          {enhance?.config && (
            <>
              <EnhanceActivator
                enhance={enhance}
                disabled={disableButtons}
                darkMode={true}
                menuWidth={bubbleMenuWidth}
                menuContainerRef={bubbleMenuContainerRef}
                lockToViewportOnLock
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
})
