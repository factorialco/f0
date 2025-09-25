import { F0Icon } from "@/components/F0Icon"
import { Toolbar, ToolbarLabels } from "@/experimental/RichText/CoreEditor"
import { SlashCommandGroupLabels } from "@/experimental/RichText/CoreEditor/Extensions/SlashCommand"
import { Handle, Plus } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
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
import { LiveCompanionLabels } from "../CoreEditor/Extensions/LiveCompanion"
import { MoodTrackerLabels } from "../CoreEditor/Extensions/MoodTracker"
import { TranscriptLabels } from "../CoreEditor/Extensions/Transcript"
import "../index.css"
import { createNotesTextEditorExtensions } from "./extensions"
import Header from "./Header"
import { actionType, MetadataItemValue, NotesTextEditorHandle } from "./types"

interface NotesTextEditorProps {
  onChange: (value: { json: JSONContent | null; html: string | null }) => void
  placeholder: string
  initialEditorState?: { content?: JSONContent | string; title?: string }
  readonly?: boolean
  aiBlockConfig?: AIBlockConfig
  onTitleChange?: (title: string) => void
  labels: {
    toolbarLabels: ToolbarLabels
    slashCommandGroupLabels?: SlashCommandGroupLabels
    aiBlockLabels?: AIBlockLabels
    moodTrackerLabels?: MoodTrackerLabels
    liveCompanionLabels?: LiveCompanionLabels
    transcriptLabels?: TranscriptLabels
    titlePlaceholder?: string
  }
  actions?: actionType[]
  metadata?: MetadataItemValue[]
  withPadding?: boolean
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
    onTitleChange,
    actions,
    metadata,
    withPadding = false,
  },
  ref
) {
  const {
    toolbarLabels,
    slashCommandGroupLabels,
    aiBlockLabels,
    moodTrackerLabels,
    liveCompanionLabels,
    transcriptLabels,
  } = labels

  const containerRef = useRef<HTMLDivElement>(null)
  const hoveredRef = useRef<{ pos: number; nodeSize: number } | null>(null)
  const editorId = useId()

  const [initialContent] = useState(() => initialEditorState?.content || "")
  const [title, setTitle] = useState(initialEditorState?.title || "")

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
      transcriptLabels
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

  if (!editor) return null

  return (
    <div
      className="relative flex h-full w-full flex-col"
      ref={containerRef}
      id={editorId}
    >
      {((actions && actions.length > 0) ||
        (metadata && metadata.length > 0)) && (
        <Header actions={actions} metadata={metadata} />
      )}
      <div className="absolute bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-f1-background p-2 shadow-md">
        <Toolbar
          labels={toolbarLabels}
          editor={editor}
          disableButtons={false}
          showEmojiPicker={false}
          plainHtmlMode={false}
        />
      </div>

      <ScrollArea className="h-full gap-6">
        {(onTitleChange || title) && (
          <div
            className={cn(
              "flex flex-col pb-5 pt-5 transition-all duration-300",
              withPadding ? "px-32" : "px-14"
            )}
          >
            <input
              disabled={!onTitleChange}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={labels.titlePlaceholder || ""}
              className="text-3xl font-semibold text-f1-foreground placeholder-f1-foreground-tertiary"
            />
          </div>
        )}
        <div
          className="basic-text-editor-container h-full"
          onClick={() => editor.commands.focus()}
        >
          <DragHandle
            editor={editor}
            tippyOptions={tippyOptions}
            onNodeChange={handleNodeChange}
          >
            <div className="flex flex-row">
              <Button
                round
                variant="ghost"
                size="sm"
                className="text-f1-foreground-tertiary"
                onClick={handlePlusClick}
              >
                <F0Icon icon={Plus} size="sm" />
              </Button>
              <Button
                round
                variant="ghost"
                size="sm"
                className="text-f1-foreground-tertiary"
                data-drag-handle
                draggable
              >
                <F0Icon icon={Handle} size="xs" />
              </Button>
            </div>
          </DragHandle>

          <EditorContent
            editor={editor}
            className={cn(
              "pb-28 [&>div]:w-full [&>div]:transition-all [&>div]:duration-300",
              withPadding ? "[&>div]:px-32" : "[&>div]:px-14"
            )}
          />
        </div>
      </ScrollArea>
    </div>
  )
})

interface NotesTextEditorSkeletonProps {
  withHeader?: boolean
  withTitle?: boolean
  withPadding?: boolean
}

export const NotesTextEditorSkeleton = ({
  withHeader = false,
  withTitle = true,
  withPadding = false,
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

      {/* Toolbar skeleton */}
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

      <ScrollArea className="h-full gap-6">
        {withTitle && (
          <div
            className={cn(
              "flex flex-col pb-5 pt-5",
              withPadding ? "px-32" : "px-14"
            )}
          >
            <Skeleton className="h-8 w-80 rounded-md" />
          </div>
        )}

        <div className="h-full">
          <div
            className={cn(
              "pb-28 [&>div]:w-full",
              withPadding ? "[&>div]:px-32" : "[&>div]:px-14"
            )}
          >
            {/* Content skeleton */}
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
export { NotesTextEditorComponent as NotesTextEditor }
export type {
  NotesTextEditorHandle,
  NotesTextEditorProps,
  NotesTextEditorSkeletonProps,
}
