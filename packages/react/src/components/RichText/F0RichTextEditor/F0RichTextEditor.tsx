import { FocusScope } from "@radix-ui/react-focus-scope"
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
import ReactDOM from "react-dom"

import {
  EditorBubbleMenu,
  MentionedUser,
  Toolbar,
  ToolbarDivider,
} from "@/components/RichText/internal"
import { F0Button } from "@/components/F0Button"
import { Cross } from "@/icons/app"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"

import "../index.css"
import { Skeleton } from "@/ui/skeleton"

import {
  AIEnhanceMenu,
  EnhanceActivator,
  useEnhance,
} from "@/components/RichText/internal/Enhance"
import { EnhanceErrorBanner } from "@/components/RichText/internal/Error"
import {
  type RecorderError,
  useAudioRecorder,
} from "@/sds/ai/F0AiChatTextArea/useAudioRecorder"
import { FileList } from "./components/FileList"
import { Footer } from "./components/Footer"
import { Head } from "./components/Head"
import { ExtensionsConfiguration } from "./utils/extensions"
import {
  getHeight,
  getHeightThreshold,
  handleEditorUpdate,
  setupContainerObservers,
} from "./utils/helpers"
import type { MentionsConfig } from "@/components/RichText/internal"
import type { TranscribeFn } from "@/sds/ai/F0AiChat/types"
import type {
  enhanceConfig,
  filesConfig,
  heightType,
  primaryActionType,
  resultType,
  secondaryActionsType,
} from "./utils/types"

// Declared next to the component (not in a sibling types.ts) so api-extractor
// rolls them into the bundled d.ts instead of emitting a broken relative import.
export interface F0RichTextEditorProps {
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
  /** Whether the editor is disabled */
  disabled?: boolean
  /** Whether the editor has an error state */
  error?: boolean
  /** Whether the editor is in a loading state */
  loading?: boolean
  /**
   * Voice dictation: transcribes a recorded audio blob into text inserted at
   * the cursor. Same contract as F0AiChatTextArea — when omitted, the
   * microphone button is not rendered.
   */
  onTranscribe?: TranscribeFn
}

export type F0RichTextEditorHandle = {
  clear: () => void
  clearFiles: () => void
  focus: () => void
  setError: (error: string | null) => void
  setContent: (content: string) => void
}

export interface F0RichTextEditorSkeletonProps {
  rows?: number
}

/** @deprecated Use F0RichTextEditorProps */
export type RichTextEditorProps = F0RichTextEditorProps
/** @deprecated Use F0RichTextEditorHandle */
export type RichTextEditorHandle = F0RichTextEditorHandle
/** @deprecated Use F0RichTextEditorSkeletonProps */
export type RichTextEditorSkeletonProps = F0RichTextEditorSkeletonProps

/** How long dictation errors stay visible (mirrors F0AiChatTextArea) */
const DICTATION_ERROR_MS = 4000

const F0RichTextEditorComponent = forwardRef<
  F0RichTextEditorHandle,
  F0RichTextEditorProps
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
    onTranscribe,
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
      handleEditorUpdate({ editor, onChange })
    },
    [onChange]
  )

  // Extensions are only read at editor creation; memo just avoids rebuilding
  // the config array (and its closures) on every render.
  const extensions = useMemo(
    () =>
      ExtensionsConfiguration({
        mentionsConfig,
        mentionSuggestions,
        setMentionSuggestions,
        placeholder,
        maxCharacters,
        plainHtmlMode,
      }),
    [
      mentionsConfig,
      mentionSuggestions,
      setMentionSuggestions,
      placeholder,
      maxCharacters,
      plainHtmlMode,
    ]
  )

  const editor = useEditor({
    extensions,
    content: initialEditorState?.content || "",
    editable: !disabled,
    onUpdate: onEditorUpdate,
    // Give the contenteditable an explicit textbox role and an accessible name;
    // without this the editor is unnamed for screen readers and role+name queries.
    editorProps: {
      attributes: {
        role: "textbox",
        "aria-multiline": "true",
        "aria-label": title,
      },
    },
    // Children subscribe to the editor state they need via useEditorState;
    // re-rendering the whole editor tree on every transaction is wasteful.
    shouldRerenderOnTransaction: false,
  })

  const enhance = useEnhance(editor, enhanceConfig)

  useEffect(() => {
    if ((enhance.error || disabled) && editor) {
      editor.setEditable(false)
    } else if (editor && !enhance.error && !disabled) {
      editor.setEditable(true)
    }
  }, [enhance.error, disabled, editor])

  // Voice dictation (same contract as F0AiChatTextArea). Transcripts are
  // written into the range captured when recording starts, so each cumulative
  // partial replaces the previous one instead of stacking.
  const dictationRangeRef = useRef<{ from: number; to: number } | null>(null)
  const [dictationError, setDictationError] = useState<string | null>(null)
  const dictationErrorTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  )
  const showDictationError = useCallback((message: string) => {
    if (dictationErrorTimeoutRef.current) {
      clearTimeout(dictationErrorTimeoutRef.current)
    }
    setDictationError(message)
    dictationErrorTimeoutRef.current = setTimeout(() => {
      setDictationError(null)
      dictationErrorTimeoutRef.current = null
    }, DICTATION_ERROR_MS)
  }, [])
  const dismissDictationError = useCallback(() => {
    if (dictationErrorTimeoutRef.current) {
      clearTimeout(dictationErrorTimeoutRef.current)
      dictationErrorTimeoutRef.current = null
    }
    setDictationError(null)
  }, [])
  useEffect(
    () => () => {
      if (dictationErrorTimeoutRef.current) {
        clearTimeout(dictationErrorTimeoutRef.current)
      }
    },
    []
  )

  const applyDictation = useCallback(
    (text: string) => {
      const range = dictationRangeRef.current
      if (!editor || !range) return
      const docSize = editor.state.doc.content.size
      const from = Math.min(range.from, docSize)
      const to = Math.min(range.to, docSize)
      editor.chain().deleteRange({ from, to }).insertContentAt(from, text).run()
      dictationRangeRef.current = { from, to: from + text.length }
    },
    [editor]
  )

  const recorderErrorMessage: Record<RecorderError, string> = {
    "permission-denied": i18n.ai.micPermissionDenied,
    "device-error": i18n.ai.micError,
    "transcription-failed": i18n.ai.transcriptionError,
  }
  const recorder = useAudioRecorder({
    onTranscribe,
    onPartial: applyDictation,
    onFinal: (text) => {
      applyDictation(text)
      editor?.commands.focus()
    },
    onError: (error) => showDictationError(recorderErrorMessage[error]),
  })
  const canRecord = !!onTranscribe && recorder.isSupported
  const handleStartRecording = useCallback(() => {
    if (!editor) return
    dictationRangeRef.current = {
      from: editor.state.selection.to,
      to: editor.state.selection.to,
    }
    void recorder.start()
  }, [editor, recorder])

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
      editor?.commands.setContent(content)
    },
  }))

  if (!editor) return null

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
            : "relative w-full rounded-xl border border-solid border-f1-border-secondary",
          !isFullscreen &&
            errorProp &&
            "border-f1-border-critical-bold bg-f1-background-critical bg-opacity-10"
        )}
      >
        {isFullscreen && (
          <div className="pointer-events-none fixed inset-0 z-40" />
        )}

        <Head
          fullScreenMode={fullScreenMode}
          isFullscreen={isFullscreen}
          handleToggleFullscreen={handleToggleFullscreen}
          disableAllButtons={enhance.disableButtons}
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
              "scrollbar-macos relative flex w-full items-start justify-center overflow-y-auto py-3",
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
            {/* The floating toolbar disappears the moment an enhance kicks off
                (disableButtons covers loading, review and error). */}
            {isFullscreen && isToolbarOpen && !enhance.disableButtons && (
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
                  className="absolute -bottom-4 left-1/2 z-50 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-1.5 shadow-md"
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
                      disabled={enhance.disableButtons}
                      hideLabel
                      label={i18n.actions.close}
                      icon={Cross}
                    />
                    <ToolbarDivider />
                    {enhanceConfig && (
                      <>
                        <EnhanceActivator
                          enhance={enhance}
                          disabled={enhance.disableButtons}
                          menuWidth={fullscreenToolbarWidth}
                          menuContainerRef={fullscreenToolbarRef}
                        />
                        <ToolbarDivider />
                      </>
                    )}
                    <Toolbar
                      editor={editor}
                      isFullscreen={isFullscreen}
                      disableButtons={enhance.disableButtons}
                      plainHtmlMode={plainHtmlMode}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* In review the floating toolbar disappears entirely and the
              compact accept/discard menu takes its place. */}
          <AnimatePresence>
            {isFullscreen && isToolbarOpen && enhance.isAcceptChangesOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute bottom-10 left-0 right-0 z-[9998] flex w-full items-center justify-center"
                style={{ pointerEvents: "none" }}
              >
                <div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                  style={{ pointerEvents: "auto" }}
                >
                  <AIEnhanceMenu
                    onSelect={() => {}}
                    enhancementOptions={[]}
                    inputPlaceholder=""
                    menuState="review"
                    compactReview
                    onAccept={enhance.acceptChanges}
                    onReject={enhance.rejectChanges}
                    onRetry={enhance.retryChanges}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className={cn(
            "relative z-40 rounded-b-lg px-3",
            !disabled && "bg-f1-background",
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

          <AnimatePresence initial={false}>
            {dictationError && (
              <motion.div
                key="dictation-error"
                role="alert"
                aria-live="polite"
                className="flex w-full items-center justify-center pt-2"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
              >
                <EnhanceErrorBanner
                  error={dictationError}
                  onDismiss={dismissDictationError}
                  dismissLabel={i18n.actions.close}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <FileList
            files={files}
            disabled={enhance.disableButtons}
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
            disableButtons={enhance.disableButtons || disabled}
            disabled={disabled}
            enhance={enhance}
            isFullscreen={isFullscreen}
            setIsToolbarOpen={setIsToolbarOpen}
            isToolbarOpen={isToolbarOpen}
            plainHtmlMode={plainHtmlMode}
            canRecord={canRecord}
            recordingStatus={recorder.status}
            recordingStream={recorder.stream}
            onStartRecording={handleStartRecording}
            onStopRecording={recorder.stop}
            onCancelRecording={recorder.cancel}
          />

          <EditorBubbleMenu
            editorId={editorId}
            editor={editor}
            disableButtons={enhance.disableButtons}
            isToolbarOpen={isToolbarOpen}
            isFullscreen={isFullscreen}
            plainHtmlMode={plainHtmlMode}
            enhance={enhance}
          />
        </div>
      </div>
    </FocusScope>
  )

  return isFullscreen
    ? ReactDOM.createPortal(editorContent, document.body)
    : editorContent
})

const F0RichTextEditorSkeleton = ({
  rows = 2,
}: F0RichTextEditorSkeletonProps) => {
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

/**
 * @experimental This is an experimental component, use it at your own risk
 */
export const F0RichTextEditor = experimentalComponent(
  "F0RichTextEditor",
  withSkeleton(F0RichTextEditorComponent, F0RichTextEditorSkeleton)
)

/** @deprecated Use F0RichTextEditor */
export const RichTextEditor = F0RichTextEditor

export * from "./utils/constants"
export * from "./utils/types"
export type {
  MentionedUser,
  MentionsConfig,
} from "@/components/RichText/internal/Extensions/Mention/types"
