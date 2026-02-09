import { FocusScope } from "@radix-ui/react-focus-scope"
import { Editor, EditorContent, useEditor } from "@tiptap/react"
import { AnimatePresence, motion } from "motion/react"
import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import ReactDOM from "react-dom"

import {
  EditorBubbleMenu,
  MentionedUser,
  MentionsConfig,
  Toolbar,
} from "@/experimental/RichText/CoreEditor"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"

import "../index.css"
import { Skeleton } from "@/ui/skeleton"

import { AcceptChanges } from "./Enhance/AcceptChanges"
import {
  LoadingEnhanceInline,
  LoadingEnhanceOverlay,
} from "./Enhance/LoadingEnhance"
import { Error } from "./Error"
import { FileList } from "./FileList"
import { Footer } from "./Footer"
import { Head } from "./Head"
import { handleEnhanceWithAIFunction } from "./utils/enhance"
import { ExtensionsConfiguration } from "./utils/extensions"
import {
  getHeight,
  getHeightThreshold,
  handleEditorUpdate,
  setEditorContent,
  setupContainerObservers,
} from "./utils/helpers"
import {
  editorStateType,
  enhanceConfig,
  filesConfig,
  heightType,
  lastIntentType,
  primaryActionType,
  resultType,
  secondaryActionsType,
} from "./utils/types"

interface RichTextEditorProps {
  mentionsConfig?: MentionsConfig
  enhanceConfig?: enhanceConfig
  filesConfig?: filesConfig
  secondaryAction?: secondaryActionsType
  primaryAction?: primaryActionType
  onChange: (result: resultType) => void
  maxCharacters?: number
  placeholder: string
  initialEditorState?: {
    content?: string
    files?: File[]
  }
  title: string
  height?: heightType
  plainHtmlMode?: boolean
  fullScreenMode?: boolean
  onFullscreenChange?: (fullscreen: boolean) => void
}

type RichTextEditorHandle = {
  clear: () => void
  clearFiles: () => void
  focus: () => void
  setError: (error: string | null) => void
  setContent: (content: string) => void
}

const RichTextEditorComponent = forwardRef<
  RichTextEditorHandle,
  RichTextEditorProps
>(function RichTextEditor(
  {
    mentionsConfig,
    enhanceConfig,
    filesConfig,
    secondaryAction,
    primaryAction,
    maxCharacters,
    initialEditorState,
    onChange,
    placeholder,
    title,
    height = "auto",
    plainHtmlMode = false,
    fullScreenMode = true,
    onFullscreenChange,
  },
  ref
) {
  const i18n = useI18n()
  const editorId = useId()

  const fileInputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const editorContentContainerRef = useRef<HTMLDivElement>(null)

  const [hasFullHeight, setHasFullHeight] = useState(false)
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true)
  const [isLoadingEnhance, setIsLoadingEnhance] = useState(false)
  const [isFullDocumentEnhance, setIsFullDocumentEnhance] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isAcceptChangesOpen, setIsAcceptChangesOpen] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isToolbarOpen, setIsToolbarOpen] = useState(false)
  const [lastIntent, setLastIntent] = useState<lastIntentType>(null)
  const [files, setFiles] = useState<File[]>(initialEditorState?.files || [])
  const [mentionSuggestions, setMentionSuggestions] = useState<MentionedUser[]>(
    mentionsConfig?.users || []
  )
  const [editorState, setEditorState] = useState<editorStateType>({
    html: initialEditorState?.content || "",
    json: null,
  })

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden"
      setIsToolbarOpen(true)
    } else {
      document.body.style.overflow = ""
      setIsToolbarOpen(false)
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isFullscreen])

  useEffect(() => {
    const heightThreshold = isFullscreen
      ? window.innerHeight
      : getHeightThreshold(height)
    const cleanupObservers = setupContainerObservers({
      containerRef: editorContentContainerRef,
      onHeightChange: setHasFullHeight,
      onScrollChange: setIsScrolledToBottom,
      heightThreshold,
    })
    return cleanupObservers
  }, [height, isFullscreen])

  const handleToggleFullscreen = () => {
    setIsFullscreen((prev) => {
      const next = !prev
      if (onFullscreenChange) onFullscreenChange(next)
      return next
    })
  }

  const disableAllButtons = !!(isAcceptChangesOpen || isLoadingEnhance || error)

  const editor = useEditor({
    extensions: ExtensionsConfiguration({
      mentionsConfig,
      mentionSuggestions,
      setMentionSuggestions,
      placeholder,
      maxCharacters,
      plainHtmlMode,
    }),
    content: editorState.html,
    onUpdate: ({ editor }: { editor: Editor }) => {
      handleEditorUpdate({ editor, onChange, setEditorState })
    },
  })

  useEffect(() => {
    if (error && editor) {
      editor.setEditable(false)
    }
  }, [error, editor])

  useImperativeHandle(ref, () => ({
    clear: () => editor?.commands.clearContent(),
    clearFiles: () => {
      setFiles([])
      if (filesConfig) {
        filesConfig.onFiles([])
      }
    },
    focus: () => editor?.commands.focus(),
    setError: (errorMessage: string | null) => {
      setError(errorMessage)
      if (errorMessage) {
        editor?.setEditable(false)
      } else {
        editor?.setEditable(true)
      }
    },
    setContent: (content: string) => {
      if (editor) {
        setEditorContent({ editor, content })
      }
    },
  }))

  const handleEnhanceWithAI = async (
    selectedIntent?: string,
    customIntent?: string
  ) => {
    if (enhanceConfig && editor) {
      await handleEnhanceWithAIFunction({
        editor: editor,
        enhanceText: enhanceConfig.onEnhanceText,
        setIsLoadingEnhance,
        onLoadingStart: ({ range, isFullDocument }) => {
          editor.setEditable(false)
          setIsFullDocumentEnhance(isFullDocument)
          if (!isFullDocument) {
            editor.commands.setEnhanceHighlight(range.from, range.to)
          }
        },
        onSuccess: (highlightRange) => {
          setIsFullDocumentEnhance(false)
          editor.commands.setEnhanceHighlight(
            highlightRange.from,
            highlightRange.to
          )
          setIsAcceptChangesOpen(true)
        },
        onError: (error?: string) => {
          setIsFullDocumentEnhance(false)
          setIsAcceptChangesOpen(false)
          editor.commands.clearEnhanceHighlight()
          setError(error || i18n.richTextEditor.ai.defaultError)
          // editor.setEditable(false) is handled by useEffect when error is set
        },
        selectedIntent,
        customIntent,
      })
    }
  }

  if (!editor) return null

  const editorContent = (
    <FocusScope trapped={false}>
      <div
        ref={containerRef}
        id={editorId}
        className={cn(
          "rich-text-editor-container pointer-events-auto flex flex-col bg-f1-background",
          isFullscreen
            ? "fixed inset-0 z-50"
            : "relative w-full rounded-xl border border-solid border-f1-border"
        )}
      >
        {isFullscreen && (
          <div className="pointer-events-none fixed inset-0 z-40" />
        )}

        <Head
          fullScreenMode={fullScreenMode}
          isFullscreen={isFullscreen}
          handleToggleFullscreen={handleToggleFullscreen}
          disableAllButtons={disableAllButtons}
          title={title}
        />

        <div
          className="relative z-50 w-full flex-grow overflow-hidden"
          onClick={(e) => {
            // Only focus if clicking directly on the editor area, not on interactive elements
            const target = e.target as HTMLElement
            if (
              !target.closest("button") &&
              !target.closest('[role="button"]') &&
              !target.closest("input") &&
              !target.closest("textarea") &&
              !target.closest("[data-radix-popper-content-wrapper]")
            ) {
              e?.preventDefault()
              editor?.commands.focus()
            }
          }}
        >
          <div
            ref={editorContentContainerRef}
            className={cn(
              "scrollbar-macos relative flex w-full items-start justify-center overflow-y-auto pb-1 pt-3",
              isFullscreen
                ? "h-full px-10 pb-24"
                : cn(getHeight(height), "pl-3 pr-10"),
              isLoadingEnhance && isFullDocumentEnhance && "min-h-16"
            )}
          >
            <div
              className={cn(
                "w-full overflow-hidden",
                isFullscreen && "max-w-[824px]"
              )}
            >
              <EditorContent editor={editor} />
            </div>

            {isLoadingEnhance && isFullDocumentEnhance && (
              <LoadingEnhanceOverlay isFullscreen={isFullscreen} />
            )}
          </div>

          <AnimatePresence>
            {isFullscreen &&
              isToolbarOpen &&
              !isLoadingEnhance &&
              !isAcceptChangesOpen &&
              !error && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute bottom-10 left-0 right-0 z-[9998] flex w-full items-center justify-center"
                  style={{ pointerEvents: "none" }}
                >
                  <div
                    className="absolute -bottom-4 left-1/2 z-50 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-2 shadow-md"
                    style={{ pointerEvents: "auto" }}
                  >
                    <Toolbar
                      editor={editor}
                      isFullscreen={isFullscreen}
                      disableButtons={disableAllButtons}
                      onClose={() => {
                        setIsToolbarOpen(false)
                        // Restore focus after state update to trigger BubbleMenu
                        queueMicrotask(() => editor.commands.focus())
                      }}
                      plainHtmlMode={plainHtmlMode}
                    />
                  </div>
                </motion.div>
              )}
          </AnimatePresence>
        </div>

        <div
          className={cn(
            "relative z-40 rounded-b-lg bg-f1-background px-3",
            hasFullHeight && !isScrolledToBottom && "shadow-editor-tools"
          )}
        >
          <AnimatePresence>
            {(isLoadingEnhance || isAcceptChangesOpen || error) && (
              <motion.div
                key="accordion"
                initial={{ height: 0, opacity: 0, y: -20 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex w-full items-center justify-center pt-2"
              >
                {isLoadingEnhance && (
                  <LoadingEnhanceInline
                    label={i18n.richTextEditor.ai.loadingEnhanceLabel}
                  />
                )}
                {isAcceptChangesOpen && !isLoadingEnhance && (
                  <AcceptChanges
                    setLastIntent={setLastIntent}
                    setIsAcceptChangesOpen={setIsAcceptChangesOpen}
                    editor={editor}
                    handleEnhanceWithAI={handleEnhanceWithAI}
                    lastIntent={lastIntent}
                  />
                )}
                {error && !isLoadingEnhance && (
                  <Error error={error} setError={setError} editor={editor} />
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <FileList
            files={files}
            disabled={disableAllButtons}
            filesConfig={filesConfig}
            setFiles={setFiles}
            fileInputRef={fileInputRef}
          />

          <Footer
            editor={editor}
            maxCharacters={maxCharacters}
            secondaryAction={secondaryAction}
            primaryAction={primaryAction}
            fileInputRef={fileInputRef}
            canUseFiles={filesConfig ? true : false}
            isLoadingEnhance={isLoadingEnhance}
            disableButtons={disableAllButtons}
            enhanceConfig={enhanceConfig}
            isFullscreen={isFullscreen}
            onEnhanceWithAI={handleEnhanceWithAI}
            setLastIntent={setLastIntent}
            setIsToolbarOpen={setIsToolbarOpen}
            isToolbarOpen={isToolbarOpen}
            plainHtmlMode={plainHtmlMode}
          />

          <EditorBubbleMenu
            editorId={editorId}
            editor={editor}
            disableButtons={disableAllButtons}
            isToolbarOpen={isToolbarOpen}
            isFullscreen={isFullscreen}
            plainHtmlMode={plainHtmlMode}
            enhanceConfig={enhanceConfig}
            onEnhanceWithAI={handleEnhanceWithAI}
            isLoadingEnhance={isLoadingEnhance}
            setLastIntent={setLastIntent}
            isAcceptChangesOpen={isAcceptChangesOpen}
            hasError={!!error}
          />
        </div>
      </div>
    </FocusScope>
  )

  return isFullscreen
    ? ReactDOM.createPortal(editorContent, document.body)
    : editorContent
})

interface RichTextEditorSkeletonProps {
  rows?: number
}

const RichTextEditorSkeleton = ({ rows = 2 }: RichTextEditorSkeletonProps) => {
  const staticWidthPattern = ["75%", "100%", "60%", "85%", "70%"]
  const widths = Array.from(
    { length: rows },
    (_, i) => staticWidthPattern[i % staticWidthPattern.length]
  )

  return (
    <div className="relative flex w-full flex-col rounded-xl border border-solid border-f1-border bg-f1-background">
      <div className="relative w-full flex-grow overflow-hidden">
        <div className="h-auto w-full pl-3 pr-4 pt-3">
          <div className="flex flex-col gap-2">
            {widths.map((width, index) => (
              <Skeleton key={index} className="h-4" style={{ width }} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-3 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-md" />
            <Skeleton className="h-8 w-8 rounded-md" />
            <Skeleton className="h-8 w-8 rounded-md" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-24 rounded-md" />
            <Skeleton className="h-8 w-32 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}

export * from "./utils/constants"
export * from "./utils/types"
export type { RichTextEditorHandle, RichTextEditorProps }

export const RichTextEditor = withSkeleton(
  RichTextEditorComponent,
  RichTextEditorSkeleton
)
