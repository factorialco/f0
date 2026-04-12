import { FocusScope } from "@radix-ui/react-focus-scope"
import { Editor, EditorContent, useEditor } from "@tiptap/react"
import { AnimatePresence, motion } from "motion/react"
import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import ReactDOM from "react-dom"

import {
  EditorBubbleMenu,
  EnhanceActivator,
  EnhanceErrorBanner,
  MentionedUser,
  MentionsConfig,
  Toolbar,
  ToolbarDivider,
  useEnhance,
} from "@/components/RichText/internal"

import { F0Button } from "@/components/F0Button"
import { Cross } from "@/icons/app"
import { DataTestIdWrapper } from "@/lib/data-testid"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"

import "../index.css"
import { Skeleton } from "@/ui/skeleton"

import { FileList } from "./FileList"
import { Footer } from "./Footer"
import { Head } from "./Head"
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
  onBlur?: () => void
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
  /** Whether the editor is disabled */
  disabled?: boolean
  /** Whether the editor has an error state */
  error?: boolean
  /** Whether the editor is in a loading state */
  loading?: boolean
  dataTestId?: string
}

type RichTextEditorHandle = {
  clear: () => void
  clearFiles: () => void
  focus: () => void
  setError: (error: string | null) => void
  setContent: (content: string) => void
}

const F0RichTextEditorComponent = forwardRef<
  RichTextEditorHandle,
  RichTextEditorProps
>(function F0RichTextEditor(
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
    disabled = false,
    error: errorProp = false,
    loading = false,
    onBlur,
    dataTestId,
  },
  ref
) {
  const i18n = useI18n()
  const editorId = useId()

  const fileInputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const editorContentContainerRef = useRef<HTMLDivElement>(null)
  const fullscreenToolbarRef = useRef<HTMLDivElement>(null)

  const [hasFullHeight, setHasFullHeight] = useState(false)
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isToolbarOpen, setIsToolbarOpen] = useState(false)
  const [fullscreenToolbarWidth, setFullscreenToolbarWidth] = useState(0)
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

  useEffect(() => {
    if (!isFullscreen || !isToolbarOpen) return

    const updateWidth = () => {
      if (fullscreenToolbarRef.current) {
        setFullscreenToolbarWidth(fullscreenToolbarRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [isFullscreen, isToolbarOpen])

  const handleToggleFullscreen = () => {
    setIsFullscreen((prev) => {
      const next = !prev
      if (onFullscreenChange) onFullscreenChange(next)
      return next
    })
  }

  const onEditorUpdate = useCallback(
    ({ editor }: { editor: Editor }) => {
      handleEditorUpdate({ editor, onChange, setEditorState })
    },
    [onChange]
  )

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
    editable: !disabled,
    onUpdate: onEditorUpdate,
    onBlur: () => {
      onBlur?.()
    },
  })

  const enhance = useEnhance(editor, enhanceConfig)

  useEffect(() => {
    if ((enhance.error || disabled) && editor) {
      editor.setEditable(false)
    } else if (editor && !enhance.error && !disabled) {
      editor.setEditable(true)
    }
  }, [enhance.error, disabled, editor])

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
      enhance.setError(errorMessage)
    },
    setContent: (content: string) => {
      if (editor) {
        setEditorContent({ editor, content })
      }
    },
  }))

  if (!editor) return null

  const disableAllButtons = enhance.disableButtons || disabled

  const editorContent = (
    <FocusScope trapped={false}>
      <div
        ref={containerRef}
        id={editorId}
        aria-busy={loading}
        className={cn(
          "rich-text-editor-container pointer-events-auto flex flex-col",
          disabled ? "bg-f1-background-tertiary" : "bg-f1-background",
          isFullscreen
            ? "fixed inset-0 z-50"
            : [
                "relative w-full rounded-xl border border-solid",
                enhance.error || errorProp
                  ? "border-f1-border-critical-bold focus-within:border-f1-border-critical-bold focus-within:ring-f1-border-critical bg-f1-background-critical bg-opacity-10"
                  : "border-f1-border",
              ]
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
                : cn(getHeight(height), "pl-3 pr-10")
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
          </div>

          <AnimatePresence>
            {isFullscreen &&
              isToolbarOpen &&
              (!disableAllButtons ||
                enhance.isLoading ||
                enhance.isAcceptChangesOpen) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute bottom-10 left-0 right-0 z-[9998] flex w-full items-center justify-center"
                  style={{ pointerEvents: "none" }}
                >
                  <div
                    ref={fullscreenToolbarRef}
                    className="absolute -bottom-4 left-1/2 z-50 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-2 shadow-md"
                    style={{ pointerEvents: "auto" }}
                  >
                    <div className="flex items-center gap-1">
                      <F0Button
                        onClick={(e) => {
                          e.preventDefault()
                          setIsToolbarOpen(false)
                          // Restore focus after state update to trigger BubbleMenu
                          queueMicrotask(() => editor.commands.focus())
                        }}
                        variant="neutral"
                        size="md"
                        disabled={disableAllButtons}
                        hideLabel
                        label={i18n.actions.close}
                        icon={Cross}
                      />
                      <ToolbarDivider />
                      {enhanceConfig && (
                        <>
                          <EnhanceActivator
                            onEnhanceWithAI={enhance.handleEnhanceWithAI}
                            enhanceConfig={enhanceConfig}
                            disabled={disableAllButtons}
                            menuWidth={fullscreenToolbarWidth}
                            menuContainerRef={fullscreenToolbarRef}
                            isLoadingEnhance={enhance.isLoading}
                            isAcceptChangesOpen={enhance.isAcceptChangesOpen}
                            onAcceptChanges={enhance.acceptChanges}
                            onRejectChanges={enhance.rejectChanges}
                            onRetryChanges={enhance.retryChanges}
                          />
                          <ToolbarDivider />
                        </>
                      )}
                      <Toolbar
                        editor={editor}
                        isFullscreen={isFullscreen}
                        disableButtons={disableAllButtons}
                        plainHtmlMode={plainHtmlMode}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
          </AnimatePresence>
        </div>

        <div
          className={cn(
            "relative z-40 rounded-b-lg px-3",
            !disabled && !enhance.error && !errorProp && "bg-f1-background",
            hasFullHeight && !isScrolledToBottom && "shadow-editor-tools"
          )}
        >
          <AnimatePresence>
            {enhance.error && !enhance.isLoading && (
              <motion.div
                key="accordion"
                initial={{ height: 0, opacity: 0, y: -20 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex w-full items-center justify-center pt-2"
              >
                <EnhanceErrorBanner
                  error={enhance.error}
                  onDismiss={enhance.clearError}
                />
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
            canUseFiles={!!filesConfig}
            disableButtons={disableAllButtons}
            disabled={disabled}
            enhanceConfig={enhanceConfig}
            isFullscreen={isFullscreen}
            onEnhanceWithAI={enhance.handleEnhanceWithAI}
            isLoadingEnhance={enhance.isLoading}
            isAcceptChangesOpen={enhance.isAcceptChangesOpen}
            onAcceptChanges={enhance.acceptChanges}
            onRejectChanges={enhance.rejectChanges}
            onRetryChanges={enhance.retryChanges}
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
            onEnhanceWithAI={enhance.handleEnhanceWithAI}
            isLoadingEnhance={enhance.isLoading}
            isAcceptChangesOpen={enhance.isAcceptChangesOpen}
            onAcceptChanges={enhance.acceptChanges}
            onRejectChanges={enhance.rejectChanges}
            onRetryChanges={enhance.retryChanges}
            enhanceActive={!!enhance.error}
          />
        </div>
      </div>
    </FocusScope>
  )

  return isFullscreen ? (
    ReactDOM.createPortal(
      <DataTestIdWrapper dataTestId={dataTestId}>
        {editorContent}
      </DataTestIdWrapper>,
      document.body
    )
  ) : (
    <DataTestIdWrapper dataTestId={dataTestId}>
      {editorContent}
    </DataTestIdWrapper>
  )
})

interface RichTextEditorSkeletonProps {
  rows?: number
}

const F0RichTextEditorSkeleton = ({
  rows = 2,
}: RichTextEditorSkeletonProps) => {
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
export type {
  RichTextEditorHandle,
  RichTextEditorProps,
  RichTextEditorSkeletonProps,
}

export const F0RichTextEditor = withSkeleton(
  F0RichTextEditorComponent,
  F0RichTextEditorSkeleton
)
