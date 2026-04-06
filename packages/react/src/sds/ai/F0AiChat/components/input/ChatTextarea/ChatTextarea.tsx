import { useCopilotChatInternal } from "@copilotkit/react-core"
import { randomId } from "@copilotkit/shared"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useAiChat } from "../../../providers/AiChatStateProvider"
import { ClarifyingQuestionPanel } from "../ClarifyingQuestionPanel"
import { MentionPopover } from "../MentionPopover"
import { useMentions } from "../useMentions"
import { buildHighlightSegments } from "../utils"

import { ActionBar } from "./ActionBar"
import { AttachedFilesList } from "./AttachedFilesList"
import { CreditWarningWrapper } from "./CreditWarningWrapper"
import { DropOverlay } from "./DropOverlay"
import { TextareaField } from "./TextareaField"
import {
  type ChatTextareaProps,
  type UserBinaryPart,
  type UserTextPart,
} from "./types"
import { useFileAttachments } from "./useFileAttachments"

export const ChatTextarea = ({
  submitLabel,
  inProgress,
  onSend,
  onStop,
  creditWarning,
  onDismissCreditWarning,
  onGetCredits,
}: ChatTextareaProps) => {
  const {
    placeholders,
    entityRefs,
    toolHints,
    activeToolHint,
    setActiveToolHint,
    fileAttachments,
    sendMessage,
    clarifyingQuestion,
    fileDragOver,
  } = useAiChat()
  const { messages, setMessages } = useCopilotChatInternal()
  const translation = useI18n()
  const shouldReduceMotion = useReducedMotion()
  const messagesRef = useRef(messages)
  messagesRef.current = messages
  const [inputValue, setInputValue] = useState("")
  const [cursorPosition, setCursorPosition] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)

  const isClarifying = clarifyingQuestion !== null

  const {
    attachedFiles,
    fileInputRef,
    onUploadFiles,
    acceptValue,
    isAtMaxFiles,
    processFiles,
    handleFileSelect,
    handleRemoveFile,
    clearFiles,
  } = useFileAttachments(fileAttachments)

  const mentions = useMentions({
    inputValue,
    setInputValue,
    cursorPosition,
    searchPersons: entityRefs?.resolvers?.searchPersons,
    textareaRef,
  })

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash.length === 0) {
      textareaRef.current?.focus()
    }
  }, [])

  const handleStop = useCallback(async () => {
    await onStop?.()
    setMessages([
      ...messagesRef.current,
      {
        id: randomId(),
        role: "assistant" as const,
        content: `*<!--response-stopped-->${translation.ai.responseStopped}*`,
      },
    ])
  }, [onStop, setMessages, translation.ai.responseStopped])

  const resolvedDefaultPlaceholder = translation.ai.inputPlaceholder
  const uploadedFiles = attachedFiles.filter((f) => f.status === "uploaded")
  const isUploading = attachedFiles.some((f) => f.status === "uploading")
  const hasDataToSend = inputValue.trim().length > 0

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // When clarifying, form submit is a no-op — the panel handles its own confirm
    if (isClarifying) return

    mentions.close()
    if (inProgress) {
      handleStop()
    } else if (hasDataToSend && !isUploading) {
      const transformed = mentions.transformMentions(inputValue.trim())

      const withToolHint = activeToolHint
        ? `<tool-context tool="${activeToolHint.id}">${activeToolHint.prompt}</tool-context>\n\n${transformed}`
        : transformed

      const files = uploadedFiles.flatMap((f) =>
        f.uploadedFile ? [f.uploadedFile] : []
      )

      if (files.length > 0) {
        const contentParts: Array<UserTextPart | UserBinaryPart> = [
          ...files.map((file) => ({
            type: "binary" as const,
            url: file.url,
            filename: file.filename,
            mimeType: file.mimetype,
          })),
          { type: "text" as const, text: withToolHint },
        ]

        sendMessage({
          id: crypto.randomUUID(),
          role: "user",
          content: contentParts,
        })
      } else {
        onSend(withToolHint)
      }

      setInputValue("")
      clearFiles()
    }

    textareaRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (isClarifying) return
    if (mentions.handleKeyDown(e)) return

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (!inProgress) {
        formRef.current?.requestSubmit()
      }
    }
  }

  const updateCursorPosition = () => {
    setCursorPosition(textareaRef.current?.selectionStart ?? 0)
  }

  const syncHighlightScroll = () => {
    if (highlightRef.current && textareaRef.current) {
      highlightRef.current.scrollTop = textareaRef.current.scrollTop
    }
  }

  const multiplePlaceholders = (placeholders ?? []).length > 1

  const highlightSegments = useMemo(() => {
    return buildHighlightSegments(inputValue, mentions.mentions, {
      cursorPosition,
      inlineCompletion: mentions.inlineCompletion,
    })
  }, [inputValue, mentions.mentions, cursorPosition, mentions.inlineCompletion])

  const hasOverlay =
    mentions.mentions.length > 0 || mentions.inlineCompletion !== null

  return (
    <CreditWarningWrapper
      creditWarning={creditWarning}
      onDismissCreditWarning={onDismissCreditWarning}
      onGetCredits={onGetCredits}
    >
      <motion.form
        aria-busy={inProgress}
        ref={formRef}
        className={cn(
          "relative isolate z-20",
          "flex flex-col items-stretch md:gap-3 gap-2",
          "rounded-lg border border-solid border-f1-border",
          "transition-all hover:cursor-text",
          "p-0",
          "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]",
          "before:rounded-[inherit] before:bg-f1-background before:content-['']",
          "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]",
          "after:rounded-[inherit] after:blur-[5px] after:content-['']",
          "after:scale-90 after:opacity-0",
          "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]",
          "from-[#E55619] via-[#A1ADE5] to-[#E51943]",
          "after:transition-all after:delay-200 after:duration-300",
          "has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100",
          isClarifying && "after:scale-100 after:opacity-100"
        )}
        animate={{
          "--gradient-angle": ["0deg", "360deg"],
        }}
        transition={{
          duration: 6,
          ease: "linear",
          repeat: Infinity,
        }}
        style={
          {
            "--gradient-angle": "180deg",
          } as React.CSSProperties
        }
        onClick={() => {
          if (!isClarifying) {
            textareaRef.current?.focus()
          }
        }}
        onSubmit={handleSubmit}
      >
        <DropOverlay
          visible={fileDragOver}
          shouldReduceMotion={shouldReduceMotion}
          onFilesDropped={(files) => {
            void processFiles(files)
          }}
        />
        <MentionPopover
          isOpen={mentions.isOpen}
          results={mentions.results}
          isLoading={mentions.isLoading}
          selectedIndex={mentions.selectedIndex}
          position={mentions.popoverPosition}
          onSelect={mentions.selectPerson}
        />

        <AnimatePresence mode="popLayout">
          {isClarifying ? (
            <ClarifyingQuestionPanel
              key="clarifying"
              clarifyingQuestion={clarifyingQuestion}
            />
          ) : (
            <motion.div
              key="input"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                // Exit instantly to avoid a visible empty-form gap (white line)
                // before the clarifying panel begins its height animation.
                transition: { duration: 0 },
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.15,
              }}
            >
              <AttachedFilesList
                attachedFiles={attachedFiles}
                isUploading={isUploading}
                onRemove={handleRemoveFile}
                removeLabel={translation.ai.removeFile}
              />

              <TextareaField
                textareaRef={textareaRef}
                highlightRef={highlightRef}
                inputValue={inputValue}
                onInputChange={(value, cursorPos) => {
                  setInputValue(value)
                  setCursorPosition(cursorPos)
                }}
                onKeyDown={handleKeyDown}
                onCursorUpdate={updateCursorPosition}
                onScroll={syncHighlightScroll}
                highlightSegments={highlightSegments}
                hasOverlay={hasOverlay}
                multiplePlaceholders={multiplePlaceholders}
                placeholders={placeholders ?? []}
                resolvedDefaultPlaceholder={resolvedDefaultPlaceholder}
                inProgress={inProgress}
              />

              <ActionBar
                onUploadFiles={onUploadFiles}
                isAtMaxFiles={isAtMaxFiles}
                acceptValue={acceptValue}
                fileInputRef={fileInputRef}
                handleFileSelect={handleFileSelect}
                toolHints={toolHints}
                activeToolHint={activeToolHint}
                setActiveToolHint={setActiveToolHint}
                inProgress={inProgress}
                hasDataToSend={hasDataToSend}
                isUploading={isUploading}
                submitLabel={submitLabel}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </CreditWarningWrapper>
  )
}
