import DragHandle from "@tiptap/extension-drag-handle-react"
import { Node } from "@tiptap/pm/model"
import { Editor, EditorContent, useEditor } from "@tiptap/react"
import { AnimatePresence, motion } from "motion/react"
import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react"

import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { F0Button } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import {
  EditorBubbleMenu,
  EnhanceErrorBanner,
  Toolbar,
  useEnhance,
} from "@/components/RichText/internal"
import { Handle, Plus } from "@/icons/app"
import { DataTestIdWrapper } from "@/lib/data-testid"
import { useI18n } from "@/lib/providers/i18n"
import { ScrollArea } from "@/ui/scrollarea"

import { documentHasMissingBlockIds } from "../internal/Extensions/BlockIdExtension"
import {
  ImageUploadErrorType,
  insertImageFromFile,
} from "../internal/Extensions/Image"

import "./index.css"

import {
  applyPageDocumentPatch,
  getNotesTextEditorSnapshot,
} from "./applyPageDocumentPatch"
import { NotesHeader } from "./components/NotesHeader"
import { NotesTitle } from "./components/NotesTitle"
import { createNotesTextEditorExtensions } from "./extensions"
import type { NotesTextEditorHandle, NotesTextEditorProps } from "./types"

export const NotesTextEditorInternal = forwardRef<
  NotesTextEditorHandle,
  NotesTextEditorProps
>(function F0NotesTextEditor(
  {
    onChange,
    placeholder,
    initialEditorState,
    readonly = false,
    aiBlockConfig,
    imageUploadConfig,
    enhanceConfig: enhanceConfigProp,
    onTitleChange,
    primaryAction,
    secondaryActions,
    otherActions,
    metadata,
    banner,
    showBubbleMenu = false,
    titlePlaceholder,
    dataTestId,
  },
  ref
) {
  const translations = useI18n()

  const containerRef = useRef<HTMLDivElement>(null)
  const hoveredRef = useRef<{ pos: number; nodeSize: number } | null>(null)
  const editorId = useId()

  const [initialContent] = useState(() => initialEditorState?.content || "")
  const [title, setTitle] = useState(initialEditorState?.title || "")
  const [error, setError] = useState<ImageUploadErrorType | null>(null)

  const getErrorMessage = (errorType: ImageUploadErrorType) => {
    switch (errorType) {
      case "file-too-large":
        return translations.imageUpload.errors.fileTooLarge
      case "invalid-type":
        return translations.imageUpload.errors.invalidType
      case "upload-failed":
        return translations.imageUpload.errors.uploadFailed
      default:
        return translations.imageUpload.errors.uploadFailed
    }
  }

  useEffect(() => {
    if (onTitleChange) {
      onTitleChange(title)
    }
  }, [title, onTitleChange])

  const shouldSkipOnChangeRef = useRef(false)

  const editor = useEditor({
    extensions: createNotesTextEditorExtensions({
      placeholder,
      translations,
      aiBlockConfig,
      enhanceEnabled: !!enhanceConfigProp,
      imageUploadConfig: imageUploadConfig
        ? {
            ...imageUploadConfig,
            onError: (errorType: ImageUploadErrorType) => {
              setError(errorType)
            },
          }
        : undefined,
    }),
    content: initialContent,
    onUpdate: ({ editor }: { editor: Editor }) => {
      if (shouldSkipOnChangeRef.current) {
        return
      }

      onChange(getNotesTextEditorSnapshot(editor))
    },
    onCreate: ({ editor }) => {
      // Legacy documents may contain block nodes with `id: null` because the
      // initial content load is not a `docChanged` transaction, so
      // BlockIdExtension's appendTransaction never fires for it. Re-setting
      // the content triggers a real transaction that lets the plugin assign
      // proper nanoid strings to every block that still has a null id.
      if (!documentHasMissingBlockIds(editor.state.doc)) {
        return
      }

      shouldSkipOnChangeRef.current = true
      try {
        editor.commands.setContent(editor.getJSON())
      } finally {
        shouldSkipOnChangeRef.current = false
      }

      // Only notify the consumer when IDs were actually populated, so pages
      // with already-valid content don't trigger a spurious onChange/autosave.
      if (!documentHasMissingBlockIds(editor.state.doc)) {
        onChange(getNotesTextEditorSnapshot(editor))
      }
    },
    editable: !readonly,
  })

  const enhance = useEnhance(editor, enhanceConfigProp)

  const runWithoutOnChange = useCallback(<T,>(callback: () => T): T => {
    shouldSkipOnChangeRef.current = true

    try {
      return callback()
    } finally {
      shouldSkipOnChangeRef.current = false
    }
  }, [])

  useImperativeHandle(ref, () => ({
    clear: () => editor?.commands.clearContent(),
    focus: () => editor?.commands.focus(),
    setContent: (content) => editor?.commands.setContent(content),
    applyPageDocumentPatch: (patch) => {
      if (!editor) {
        return { json: null, html: null }
      }

      return runWithoutOnChange(() => applyPageDocumentPatch(editor, patch))
    },
    insertAIBlock: () => {
      if (!editor || !aiBlockConfig) return
      editor
        .chain()
        .focus()
        .insertContentAt(editor.state.doc.content.size, [
          {
            type: "aiBlock",
            attrs: {
              data: { content: null, selectedAction: undefined },
              config: aiBlockConfig,
              isCollapsed: false,
            },
          },
          { type: "paragraph" },
        ])
        .run()
    },
    insertTranscript: (title, users, messages) => {
      if (!editor) return
      editor
        .chain()
        .focus()
        .insertContentAt(editor.state.doc.content.size, [
          {
            type: "transcript",
            attrs: {
              data: { title, users, messages },
              isOpen: false,
            },
          },
          { type: "paragraph" },
        ])
        .run()
    },
    pushContent: (content: string) => {
      // focus() must be called WITHOUT { scrollIntoView: false } — default scroll
      // behavior is intentional so the editor scrolls to the insertion point.
      if (!editor) return
      editor
        .chain()
        .focus()
        .insertContentAt(editor.state.doc.content.size, content)
        .run()
    },
    insertImage: (file: File) => {
      if (!editor || !imageUploadConfig) return
      insertImageFromFile(editor, file, {
        ...imageUploadConfig,
        onError: (errorType: ImageUploadErrorType) => {
          setError(errorType)
        },
      })
    },
  }))

  const tippyOptions = useMemo(
    () => ({
      offset: [0, 5] as [number, number],
    }),
    []
  )

  const handleNodeChange = useCallback(
    ({ node, pos }: { node: Node | null; pos: number; editor: Editor }) => {
      hoveredRef.current = node ? { pos, nodeSize: node.nodeSize } : null
    },
    []
  )

  const handlePlusClick = useCallback(() => {
    const hovered = hoveredRef.current
    if (!hovered || !editor) return

    const { pos, nodeSize } = hovered
    const node = editor.state.doc.nodeAt(pos)

    if (node && node.content.size === 0) {
      editor
        .chain()
        .focus()
        .setTextSelection(pos + 1)
        .insertContent("/")
        .run()
    } else {
      const afterBlock = pos + nodeSize

      editor
        .chain()
        .focus()
        .insertContentAt(afterBlock, { type: "paragraph" })
        .setTextSelection(afterBlock + 1)
        .insertContent("/")
        .run()
    }
  }, [editor])

  const showHeader =
    primaryAction ||
    (secondaryActions && secondaryActions.length > 0) ||
    (metadata && metadata.length > 0) ||
    (otherActions && otherActions.length > 0) ||
    banner
  const showTitle = onTitleChange || title

  if (!editor) return null

  return (
    <DataTestIdWrapper dataTestId={dataTestId}>
      <div
        className="relative flex h-full w-full flex-col"
        ref={containerRef}
        id={editorId}
      >
        {showHeader && (
          <NotesHeader
            primaryAction={primaryAction}
            secondaryActions={secondaryActions}
            metadata={metadata}
            otherActions={otherActions}
            banner={banner}
          />
        )}
        {error && (
          <div className="mx-auto flex w-full max-w-[824px] px-14 py-2">
            <div className="flex w-max max-w-full items-center gap-4 rounded-md bg-f1-background-critical p-2 drop-shadow-sm">
              <div className="flex w-full flex-row items-center gap-2">
                <div className="flex-shrink-0">
                  <F0AvatarAlert size="sm" type="critical" />
                </div>
                <p
                  className="w-full max-w-xl flex-grow truncate text-ellipsis text-sm font-semibold text-f1-foreground-critical"
                  title={getErrorMessage(error)}
                >
                  {getErrorMessage(error)}
                </p>
              </div>
              <div className="flex-shrink-0">
                <F0Button
                  variant="outline"
                  onClick={() => setError(null)}
                  label={translations.imageUpload.errors.dismiss}
                  size="sm"
                />
              </div>
            </div>
          </div>
        )}
        <AnimatePresence>
          {enhance.error && !enhance.isLoading && (
            <motion.div
              key="enhance-error"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mx-auto flex w-full max-w-[824px] px-14 py-2"
            >
              <EnhanceErrorBanner
                error={enhance.error}
                onDismiss={enhance.clearError}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {!readonly && !showBubbleMenu && (
          <div className="absolute bottom-8 left-1/2 z-50 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-2 shadow-md">
            <Toolbar
              editor={editor}
              disableButtons={false}
              showEmojiPicker={false}
              plainHtmlMode={false}
            />
          </div>
        )}
        <ScrollArea className="h-full gap-6">
          {showTitle && (
            <NotesTitle
              value={title}
              onChange={onTitleChange ? setTitle : undefined}
              placeholder={titlePlaceholder}
              disabled={!onTitleChange || readonly}
            />
          )}
          <div
            className="notes-text-editor h-full"
            onClick={() => editor.commands.focus()}
          >
            {!readonly && (
              <DragHandle
                editor={editor}
                tippyOptions={tippyOptions}
                onNodeChange={handleNodeChange}
              >
                <div className="flex flex-row">
                  <ButtonInternal
                    compact
                    variant="ghost"
                    size="sm"
                    className="text-f1-foreground-tertiary"
                    onClick={handlePlusClick}
                    label="Add paragraph"
                    hideLabel
                    icon={Plus}
                  ></ButtonInternal>

                  <div
                    className="flex cursor-move items-center justify-center p-0.5 text-f1-icon-secondary"
                    draggable
                    data-drag-handle
                  >
                    <F0Icon icon={Handle} size="xs" />
                  </div>
                </div>
              </DragHandle>
            )}

            <EditorContent
              editor={editor}
              className="pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:transition-[padding] [&>div]:duration-300 sm:[&>div]:px-14 [&>div]:px-0"
            />
          </div>
        </ScrollArea>
        {!readonly && (
          <EditorBubbleMenu
            editorId={editorId}
            editor={editor}
            disableButtons={enhance.disableButtons}
            isToolbarOpen={!showBubbleMenu}
            isFullscreen={false}
            plainHtmlMode={false}
            enhanceConfig={enhanceConfigProp}
            onEnhanceWithAI={enhance.handleEnhanceWithAI}
            isLoadingEnhance={enhance.isLoading}
            isAcceptChangesOpen={enhance.isAcceptChangesOpen}
            onAcceptChanges={enhance.acceptChanges}
            onRejectChanges={enhance.rejectChanges}
            onRetryChanges={enhance.retryChanges}
            enhanceActive={!!enhance.error}
          />
        )}
      </div>
    </DataTestIdWrapper>
  )
})
