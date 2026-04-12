import { BubbleMenu, Editor, isTextSelection } from "@tiptap/react";
import { NodeSelection } from "prosemirror-state";
import { useEffect, useRef, useState } from "react";

import { EnhanceActivator } from "../Enhance/EnhanceActivator";
import { enhanceConfig } from "../Enhance/types";
import { Toolbar, ToolbarDivider } from "../Toolbar";

interface EditorBubbleMenuProps {
  editor: Editor;
  disableButtons: boolean;
  isToolbarOpen: boolean;
  isFullscreen: boolean;
  editorId: string;
  plainHtmlMode?: boolean;
  // Optional enhance props
  enhanceConfig?: enhanceConfig;
  onEnhanceWithAI?: (
    selectedOption?: string,
    customIntent?: string,
  ) => Promise<void>;
  isLoadingEnhance?: boolean;
  isAcceptChangesOpen?: boolean;
  onAcceptChanges?: () => void;
  onRejectChanges?: () => void;
  onRetryChanges?: () => void;
  /** When true, the bubble menu is hidden for the active enhance state (for example, on error). */
  enhanceActive?: boolean;
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
  isAcceptChangesOpen = false,
  onAcceptChanges,
  onRejectChanges,
  onRetryChanges,
  enhanceActive = false,
}: EditorBubbleMenuProps) => {
  const showEnhance = enhanceConfig && onEnhanceWithAI;
  const shouldKeepEnhanceVisible =
    !!showEnhance && (isLoadingEnhance || isAcceptChangesOpen);
  const bubbleMenuContainerRef = useRef<HTMLDivElement>(null);
  const [bubbleMenuWidth, setBubbleMenuWidth] = useState<number>();

  useEffect(() => {
    if (!bubbleMenuContainerRef.current) return;
    const updateWidth = () => {
      setBubbleMenuWidth(bubbleMenuContainerRef.current?.offsetWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

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
        popperOptions: {
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
        },
      }}
      editor={editor}
      shouldShow={({ view, state, from, to }) => {
        if (shouldKeepEnhanceVisible) {
          return true;
        }

        const { doc, selection } = state;
        const { empty } = selection;

        if (selection instanceof NodeSelection) {
          return false;
        }
        const isEmptyTextBlock =
          !doc.textBetween(from, to).length && isTextSelection(state.selection);

        const isChildOfMenu = document
          .getElementById(editorId)
          ?.contains(document.activeElement);

        const hasEditorFocus = view.hasFocus() || isChildOfMenu;

        if (
          !hasEditorFocus ||
          empty ||
          isEmptyTextBlock ||
          !editor.isEditable
        ) {
          return false;
        }

        return true;
      }}
    >
      {!isToolbarOpen && (!enhanceActive || shouldKeepEnhanceVisible) && (
        <div
          ref={bubbleMenuContainerRef}
          className="dark z-50 flex w-max flex-row items-center gap-1 rounded-lg border border-solid border-f1-border bg-f1-background p-1.5 drop-shadow-sm"
        >
          {showEnhance && (
            <>
              <EnhanceActivator
                onEnhanceWithAI={onEnhanceWithAI}
                enhanceConfig={enhanceConfig}
                disabled={disableButtons}
                darkMode={true}
                menuWidth={bubbleMenuWidth}
                menuContainerRef={bubbleMenuContainerRef}
                isLoadingEnhance={isLoadingEnhance}
                isAcceptChangesOpen={isAcceptChangesOpen}
                onAcceptChanges={onAcceptChanges}
                onRejectChanges={onRejectChanges}
                onRetryChanges={onRetryChanges}
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
  );
};
