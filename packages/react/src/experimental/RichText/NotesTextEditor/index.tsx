import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import {
  EditorBubbleMenu,
  Toolbar,
} from "@/experimental/RichText/CoreEditor"
import { SlashCommandGroupLabels } from "@/experimental/RichText/CoreEditor/Extensions/SlashCommand"
import { Handle, Plus } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { ScrollArea } from "@/ui/scrollarea"
import { Skeleton } from "@/ui/skeleton"
import DragHandle from "@tiptap/extension-drag-handle-react"
import { Node } from "@tiptap/pm/model"
import { Editor, EditorContent, JSONContent, useEditor } from "@tiptap/react"
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


import { AIBlockConfig, AIBlockLabels } from "../CoreEditor/Extensions/AIBlock"
import {
  ImageUploadConfig,
  ImageUploadErrorType,
  insertImageFromFile,
} from "../CoreEditor/Extensions/Image"
import { LiveCompanionLabels } from "../CoreEditor/Extensions/LiveCompanion"
import { MoodTrackerLabels } from "../CoreEditor/Extensions/MoodTracker"
import { TranscriptLabels } from "../CoreEditor/Extensions/Transcript"
import { createNotesTextEditorExtensions } from "./extensions"
import Header from "./Header"
import "./index.css"
import {
  actionType,
  MetadataItemValue,
  NotesTextEditorHandle,
  secondaryActionsType,
} from "./types"
import { F0AvatarAlert, F0Button } from "@/f0"

interface NotesTextEditorProps {
  onChange: (value: { json: JSONContent | null; html: string | null }) => void
  placeholder: string
  initialEditorState?: { content?: JSONContent | string; title?: string }
  readonly?: boolean
  aiBlockConfig?: AIBlockConfig
  imageUploadConfig?: ImageUploadConfig
  onTitleChange?: (title: string) => void
  labels: {
    slashCommandGroupLabels?: SlashCommandGroupLabels
    aiBlockLabels?: AIBlockLabels
    moodTrackerLabels?: MoodTrackerLabels
    liveCompanionLabels?: LiveCompanionLabels
    transcriptLabels?: TranscriptLabels
    titlePlaceholder?: string
  }
  actions?: actionType[]
  secondaryActions?: secondaryActionsType[]
  metadata?: MetadataItemValue[]
  withPadding?: boolean
  showBubbleMenu?: boolean
}

const NotesTextEditorComponent = forwardRef<
  NotesTextEditorHandle,
  NotesTextEditorProps
>(function NotesTextEditor(
  {
    onChange,
    placeholder,
    initialEditorState,
    readonly = false,
    labels,
    aiBlockConfig,
    imageUploadConfig,
    onTitleChange,
    actions,
    secondaryActions,
    metadata,
    withPadding = true,
    showBubbleMenu = false,
  },
  ref
) {
  const translations = useI18n()
  const toolbarLabels = translations.richTextEditor

  const {
    slashCommandGroupLabels,
    aiBlockLabels,
    moodTrackerLabels,
    liveCompanionLabels,
    transcriptLabels,
  } = labels
  const i18n = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const hoveredRef = useRef<{ pos: number; nodeSize: number } | null>(null)
  const editorId = useId()

  const [initialContent] = useState(() => initialEditorState?.content || "")
  const [title, setTitle] = useState(initialEditorState?.title || "")
  const [error, setError] = useState<ImageUploadErrorType | null>(null)

  const getErrorMessage = (errorType: ImageUploadErrorType) => {
    switch (errorType) {
      case "file-too-large":
        return i18n.imageUpload.errors.fileTooLarge
      case "invalid-type":
        return i18n.imageUpload.errors.invalidType
      case "upload-failed":
        return i18n.imageUpload.errors.uploadFailed
      default:
        return i18n.imageUpload.errors.uploadFailed
    }
  }

  useEffect(() => {
    if (onTitleChange) {
      onTitleChange(title)
    }
  }, [title, onTitleChange])

  const editor = useEditor({
    extensions: createNotesTextEditorExtensions(
      placeholder,
      toolbarLabels,
      slashCommandGroupLabels,
      aiBlockConfig
        ? {
            ...aiBlockConfig,
            toolbarLabels,
            slashCommandGroupLabels,
            moodTrackerLabels,
            liveCompanionLabels,
            transcriptLabels,
            labels: aiBlockLabels,
            placeholder,
          }
        : undefined,
      aiBlockLabels,
      moodTrackerLabels,
      liveCompanionLabels,
      transcriptLabels,
      imageUploadConfig
        ? {
            ...imageUploadConfig,
            onError: (errorType: ImageUploadErrorType) => {
              setError(errorType)
            },
          }
        : undefined
    ),
    content: initialContent,
    onUpdate: ({ editor }: { editor: Editor }) => {
      onChange(
        editor.isEmpty
          ? { json: null, html: null }
          : { json: editor.getJSON(), html: editor.getHTML() }
      )
    },
    editable: !readonly,
  })

  useImperativeHandle(ref, () => ({
    clear: () => editor?.commands.clearContent(),
    focus: () => editor?.commands.focus(),
    setContent: (content) => editor?.commands.setContent(content),
    insertAIBlock: () => {
      if (!editor || !aiBlockConfig) return
      const cfg = aiBlockLabels
        ? { ...aiBlockConfig, labels: aiBlockLabels }
        : undefined
      editor
        .chain()
        .focus()
        .insertContentAt(editor.state.doc.content.size, [
          {
            type: "aiBlock",
            attrs: {
              data: { content: null, selectedAction: undefined },
              config: cfg,
              isCollapsed: false,
            },
          },
          { type: "paragraph" },
        ])
        .run()
    },
    insertTranscript: (title, users, messages) => {
      if (!editor) return
      const cfg = transcriptLabels ? { labels: transcriptLabels } : undefined
      editor
        .chain()
        .focus()
        .insertContentAt(editor.state.doc.content.size, [
          {
            type: "transcript",
            attrs: {
              data: { title, users, messages },
              config: cfg,
              isOpen: false,
            },
          },
          { type: "paragraph" },
        ])
        .run()
    },
    pushContent: (content: string) => {
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
    (actions && actions.length > 0) ||
    (metadata && metadata.length > 0) ||
    (secondaryActions && secondaryActions.length > 0)
  const showTitle = onTitleChange || title

  if (!editor) return null

  return (
    <div
      className="relative flex h-full w-full flex-col"
      ref={containerRef}
      id={editorId}
    >
      {showHeader && (
        <Header
          actions={actions}
          metadata={metadata}
          secondaryActions={secondaryActions}
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
                label={i18n.imageUpload.errors.dismiss}
                size="sm"
              />
            </div>
          </div>
        </div>
      )}
      {!readonly && !showBubbleMenu && (
        <div className="absolute bottom-8 left-1/2 z-50 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg bg-f1-background p-2 shadow-md">
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
          <div
            className={`mx-auto flex w-full max-w-[824px] flex-col pb-4 pt-5 transition-all duration-300 ${withPadding ? "px-14" : "pl-12"}`}
          >
            <input
              disabled={!onTitleChange || readonly}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={labels.titlePlaceholder || ""}
              className="notes-text-editor-title text-[39px] font-semibold tracking-[-0.78px] text-f1-foreground placeholder-f1-foreground-tertiary"
            />
          </div>
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
            className={`pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:transition-[padding] [&>div]:duration-300 ${withPadding ? "[&>div]:px-14" : "[&>div]:pl-12"}`}
          />
        </div>
      </ScrollArea>
      {!readonly && (
        <EditorBubbleMenu
          editorId={editorId}
          editor={editor}
          disableButtons={false}
          isToolbarOpen={!showBubbleMenu}
          isFullscreen={false}
          plainHtmlMode={false}
        />
      )}
    </div>
  )
})

interface NotesTextEditorSkeletonProps {
  withHeader?: boolean
  withTitle?: boolean
  withPadding?: boolean
  withToolbar?: boolean
}

export const NotesTextEditorSkeleton = ({
  withHeader = false,
  withTitle = true,
  withPadding: _withPadding = false,
  withToolbar = true,
}: NotesTextEditorSkeletonProps) => {
  return (
    <div
      className="relative flex h-full w-full flex-col"
      aria-busy="true"
      aria-live="polite"
    >
      {withHeader && (
        <div className="flex items-center justify-between border-b border-f1-border px-6 py-3">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-20 rounded-md" />
            <Skeleton className="h-6 w-24 rounded-md" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-16 rounded-md" />
            <Skeleton className="h-8 w-12 rounded-md" />
          </div>
        </div>
      )}

      {withToolbar && (
        <div className="absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-row items-center gap-[9px] rounded-lg bg-f1-background p-2 shadow-md">
          <Skeleton className="h-8 w-8 rounded" />
          <div className="flex items-center gap-0.5">
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
          </div>
          <div className="flex items-center gap-0.5">
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
          </div>
          <div className="flex items-center gap-0.5">
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
          </div>
        </div>
      )}
      <ScrollArea className="h-full gap-6">
        {withTitle && (
          <div className="mx-auto flex w-full max-w-[824px] flex-col px-14 pb-5 pt-5">
            <Skeleton className="h-8 w-80 rounded-md" />
          </div>
        )}

        <div className="h-full">
          <div className="pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:px-14">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-5 w-full rounded-md" />
              <Skeleton className="h-5 w-4/5 rounded-md" />
              <Skeleton className="h-5 w-3/5 rounded-md" />
              <Skeleton className="h-5 w-full rounded-md" />
              <Skeleton className="h-5 w-1/2 rounded-md" />
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

export type { Message, User } from "../CoreEditor/Extensions/Transcript"
export type { ImageUploadConfig } from "./types"
export { NotesTextEditorComponent as NotesTextEditor }
export type {
  NotesTextEditorHandle,
  NotesTextEditorProps,
  NotesTextEditorSkeletonProps,
}
