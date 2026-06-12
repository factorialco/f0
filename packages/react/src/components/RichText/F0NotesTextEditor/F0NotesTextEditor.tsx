import DragHandle from "@tiptap/extension-drag-handle-react"
import { Node } from "@tiptap/pm/model"
import {
  Editor,
  EditorContent,
  type JSONContent,
  useEditor,
} from "@tiptap/react"
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

import { F0Alert } from "@/components/F0Alert"
import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import { EditorBubbleMenu } from "@/components/RichText/internal"
import { useEnhance } from "@/components/RichText/internal/Enhance"
import { Handle, Plus } from "@/icons/app"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"
import { withSkeleton } from "@/lib/skeleton"
import { ScrollArea } from "@/ui/scrollarea"
import { Skeleton } from "@/ui/skeleton"

import { documentHasMissingBlockIds } from "../internal/Extensions/BlockIdExtension"
import {
  type ImageUploadConfig,
  ImageUploadErrorType,
  insertImageFromFile,
} from "../internal/Extensions/Image"
import { EnhanceErrorBanner } from "../internal/Error"
import "./index.css"
import {
  applyPageDocumentPatch,
  getNotesTextEditorSnapshot,
} from "./applyPageDocumentPatch"
import { createNotesTextEditorExtensions } from "./extensions"
import { Header } from "./components/Header"
import { ImageUploadError } from "./components/ImageUploadError"
import { Title } from "./components/Title"
import type { F0AlertProps } from "@/components/F0Alert"
import type { HeaderSecondaryAction } from "@/experimental/Information/Headers/BaseHeader"
import type { MetadataItem } from "@/experimental/Information/Headers/Metadata"
import type {
  PrimaryActionButton,
  PrimaryDropdownAction,
} from "@/experimental/Information/utils"
import type { DropdownItem } from "@/experimental/Navigation/Dropdown"
import type { enhanceConfig } from "../internal/Enhance/types"
import type { AIBlockConfig } from "../internal/Extensions/AIBlock"
import type { Message, User } from "../internal/Extensions/Transcript"
import type { HeaderStatusProps } from "./components/Header"
import type {
  NotesTextEditorPageDocumentPatch,
  NotesTextEditorSnapshot,
} from "./types"

// Declared next to the component (not in the sibling types.ts) so api-extractor
// rolls them into the bundled d.ts instead of emitting a broken relative import.
export interface F0NotesTextEditorProps {
  onChange: (value: { json: JSONContent | null; html: string | null }) => void
  placeholder: string
  initialEditorState?: { content?: JSONContent | string; title?: string }
  readonly?: boolean
  aiBlockConfig?: AIBlockConfig
  imageUploadConfig?: ImageUploadConfig
  enhanceConfig?: enhanceConfig
  onTitleChange?: (title: string) => void
  titlePlaceholder?: string
  primaryAction?: PrimaryActionButton | PrimaryDropdownAction<string>
  secondaryActions?: HeaderSecondaryAction[]
  otherActions?: DropdownItem[]
  metadata?: MetadataItem[]
  status?: HeaderStatusProps
  alert?: F0AlertProps
}

export interface F0NotesTextEditorSkeletonProps {
  withHeader?: boolean
  withTitle?: boolean
  withToolbar?: boolean
}

export type F0NotesTextEditorHandle = {
  clear: () => void
  focus: () => void
  setContent: (content: string) => void
  applyPageDocumentPatch: (
    patch: NotesTextEditorPageDocumentPatch
  ) => NotesTextEditorSnapshot
  insertAIBlock: () => void
  insertTranscript: (title: string, users: User[], messages: Message[]) => void
  pushContent: (content: string) => void
  insertImage: (file: File) => void
}

/** @deprecated Use F0NotesTextEditorProps */
export type NotesTextEditorProps = F0NotesTextEditorProps
/** @deprecated Use F0NotesTextEditorHandle */
export type NotesTextEditorHandle = F0NotesTextEditorHandle
/** @deprecated Use F0NotesTextEditorSkeletonProps */
export type NotesTextEditorSkeletonProps = F0NotesTextEditorSkeletonProps

const F0NotesTextEditorComponent = forwardRef<
  F0NotesTextEditorHandle,
  F0NotesTextEditorProps
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
    status,
    alert,
    titlePlaceholder,
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

  useEffect(() => {
    if (onTitleChange) {
      onTitleChange(title)
    }
  }, [title, onTitleChange])

  const shouldSkipOnChangeRef = useRef(false)

  // Surface upload errors through local state while keeping the consumer's
  // config object intact.
  const imageUploadConfigWithError = useMemo(
    () =>
      imageUploadConfig
        ? {
            ...imageUploadConfig,
            onError: (errorType: ImageUploadErrorType) => {
              setError(errorType)
            },
          }
        : undefined,
    [imageUploadConfig]
  )

  // Extensions are only read at editor creation; memo just avoids rebuilding
  // the config array (and its closures) on every render.
  const extensions = useMemo(
    () =>
      createNotesTextEditorExtensions({
        placeholder,
        translations,
        aiBlockConfig,
        imageUploadConfig: imageUploadConfigWithError,
        enhanceEnabled: !!enhanceConfigProp,
      }),
    [
      placeholder,
      translations,
      aiBlockConfig,
      imageUploadConfigWithError,
      enhanceConfigProp,
    ]
  )

  const editor = useEditor({
    extensions,
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
    // Children subscribe to the editor state they need via useEditorState;
    // re-rendering the whole editor tree on every transaction is wasteful.
    shouldRerenderOnTransaction: false,
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
      if (!editor) return
      editor
        .chain()
        .focus()
        .insertContentAt(editor.state.doc.content.size, content)
        .run()
    },
    insertImage: (file: File) => {
      if (!editor || !imageUploadConfigWithError) return
      insertImageFromFile(editor, file, imageUploadConfigWithError)
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
    status
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
          primaryAction={primaryAction}
          secondaryActions={secondaryActions}
          metadata={metadata}
          otherActions={otherActions}
          status={status}
        />
      )}
      {error && (
        <ImageUploadError errorType={error} onDismiss={() => setError(null)} />
      )}
      <AnimatePresence>
        {enhance.error && !enhance.isLoading && (
          <motion.div
            key="enhance-error"
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mx-auto flex w-full max-w-[824px] items-center justify-center px-14 py-2"
          >
            <EnhanceErrorBanner
              error={enhance.error}
              onDismiss={enhance.clearError}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <ScrollArea className="h-full gap-6">
        {alert && (
          <div className="mx-auto w-full max-w-[824px] sm:px-14 px-0">
            <F0Alert {...alert} />
          </div>
        )}
        {showTitle && (
          <Title
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
          isToolbarOpen={false}
          isFullscreen={false}
          plainHtmlMode={false}
          enhance={enhance}
        />
      )}
    </div>
  )
})

export const F0NotesTextEditorSkeleton = ({
  withHeader = false,
  withTitle = true,
  withToolbar = true,
}: F0NotesTextEditorSkeletonProps) => {
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

/**
 * @experimental This is an experimental component, use it at your own risk
 */
export const F0NotesTextEditor = experimentalComponent(
  "F0NotesTextEditor",
  withSkeleton(F0NotesTextEditorComponent, F0NotesTextEditorSkeleton)
)

/** @deprecated Use F0NotesTextEditor */
export const NotesTextEditor = F0NotesTextEditor
/** @deprecated Use F0NotesTextEditorSkeleton */
export const NotesTextEditorSkeleton = F0NotesTextEditorSkeleton
