import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useRef, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { FileItem } from "@/experimental/RichText/FileItem"
import { ArrowUp, CrossedCircle, Paperclip, SolidStop } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/ui/scrollarea"

import type { F0AiChatTextAreaProps, TypewriterPlaceholderProps } from "./types"

const TypewriterPlaceholder = ({
  placeholders,
  defaultPlaceholder,
  inputValue,
  inProgress,
}: TypewriterPlaceholderProps) => {
  const [displayedPlaceholder, setDisplayedPlaceholder] = useState("")
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const placeholderTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const typeIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const deleteIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const placeholderText =
    placeholders[currentPlaceholderIndex] ?? defaultPlaceholder

  useEffect(() => {
    const clearAllIntervals = () => {
      if (typeIntervalRef.current) {
        clearInterval(typeIntervalRef.current)
        typeIntervalRef.current = null
      }
      if (deleteIntervalRef.current) {
        clearInterval(deleteIntervalRef.current)
        deleteIntervalRef.current = null
      }
      if (placeholderTimeoutRef.current) {
        clearTimeout(placeholderTimeoutRef.current)
        placeholderTimeoutRef.current = null
      }
    }

    if (inputValue.length > 0 || inProgress) {
      setIsTyping(false)
      setDisplayedPlaceholder("")
      clearAllIntervals()
      return
    }

    setIsTyping(true)
    setDisplayedPlaceholder("")

    let currentIndex = 0
    const typeSpeed = 50
    const deleteSpeed = 30
    const pauseBeforeDelete = 2000
    const pauseBeforeNext = 1000

    typeIntervalRef.current = setInterval(() => {
      if (currentIndex < placeholderText.length) {
        setDisplayedPlaceholder(placeholderText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        if (typeIntervalRef.current) {
          clearInterval(typeIntervalRef.current)
          typeIntervalRef.current = null
        }
        placeholderTimeoutRef.current = setTimeout(() => {
          deleteIntervalRef.current = setInterval(() => {
            if (currentIndex > 0) {
              currentIndex--
              setDisplayedPlaceholder(placeholderText.slice(0, currentIndex))
            } else {
              if (deleteIntervalRef.current) {
                clearInterval(deleteIntervalRef.current)
                deleteIntervalRef.current = null
              }
              placeholderTimeoutRef.current = setTimeout(() => {
                const nextIndex =
                  (currentPlaceholderIndex + 1) %
                  Math.max(placeholders.length, 1)
                setCurrentPlaceholderIndex(nextIndex)
              }, pauseBeforeNext)
            }
          }, deleteSpeed)
        }, pauseBeforeDelete)
      }
    }, typeSpeed)

    return () => {
      clearAllIntervals()
    }
  }, [
    inputValue,
    inProgress,
    placeholderText,
    currentPlaceholderIndex,
    placeholders.length,
  ])

  if (inputValue.length > 0 || inProgress) {
    return null
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "col-start-1 row-start-1",
          "pointer-events-none",
          "text-f1-foreground-secondary",
          "sm:text-[14px] text-[16px] leading-[20px] font-normal",
          "sm:pt-3 sm:px-3"
        )}
      >
        <div
          className={cn(
            "overflow-hidden text-ellipsis whitespace-nowrap",
            "sm:whitespace-pre-wrap sm:break-words sm:overflow-visible"
          )}
        >
          {displayedPlaceholder}
          {isTyping && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              |
            </motion.span>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export const F0AiChatTextArea = ({
  submitLabel,
  inProgress,
  onSend,
  onStop,
  placeholders = [],
  defaultPlaceholder,
  autoFocus = true,
  fileUploadsEnabled = false,
  attachments = [],
  onAddFiles,
  onRemoveAttachment,
  onFileInputRef,
  onSendWithAttachments,
}: F0AiChatTextAreaProps) => {
  const [inputValue, setInputValue] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const translation = useI18n()

  const resolvedDefaultPlaceholder =
    defaultPlaceholder ?? translation.ai.inputPlaceholder

  const hasDataToSend = inputValue.trim().length > 0 || attachments.length > 0
  const multiplePlaceholders = placeholders.length > 1

  useEffect(() => {
    if (onFileInputRef) {
      onFileInputRef(fileInputRef.current)
      return () => onFileInputRef(null)
    }
  }, [onFileInputRef])

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || [])
      if (files.length > 0 && onAddFiles) {
        onAddFiles(files)
      }
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    },
    [onAddFiles]
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inProgress) {
      onStop?.()
      return
    }

    if (!hasDataToSend || isProcessing) {
      return
    }

    const messageContent = inputValue.trim()

    if (onSendWithAttachments) {
      setIsProcessing(true)
      try {
        await onSendWithAttachments(messageContent)
        setInputValue("")
      } finally {
        setIsProcessing(false)
        textareaRef.current?.focus()
      }
    } else {
      onSend(messageContent)
      setInputValue("")
      textareaRef.current?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (!inProgress && !isProcessing) {
        formRef.current?.requestSubmit()
      }
    }
  }

  return (
    <motion.form
      layout
      aria-busy={inProgress || isProcessing}
      ref={formRef}
      className={cn(
        "relative isolate",
        "flex flex-row items-end sm:flex-col sm:items-stretch gap-3",
        "rounded-lg border border-solid border-f1-border",
        "transition-all hover:cursor-text",
        "py-px pl-3 pr-1 sm:p-0",
        "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]",
        "before:rounded-[inherit] before:bg-f1-background before:content-['']",
        "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]",
        "after:rounded-[inherit] after:blur-[5px] after:content-['']",
        "after:scale-90 after:opacity-0",
        "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]",
        "from-[#E55619] via-[#A1ADE5] to-[#E51943]",
        "after:transition-all after:delay-200 after:duration-300",
        "has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100"
      )}
      animate={{
        "--gradient-angle": ["0deg", "360deg"],
      }}
      transition={{
        default: {
          duration: 6,
          ease: "linear",
          repeat: Infinity,
        },
        layout: {
          duration: 0.2,
          ease: [0.4, 0, 0.2, 1],
        },
      }}
      style={
        {
          "--gradient-angle": "180deg",
        } as React.CSSProperties
      }
      onClick={() => {
        textareaRef.current?.focus()
      }}
      onSubmit={handleSubmit}
    >
      <AnimatePresence>
        {attachments.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
            }}
            className="overflow-hidden sm:px-3 sm:pt-3"
          >
            <ScrollArea>
              <div className="flex w-full flex-row gap-2">
                <AnimatePresence initial={false}>
                  {attachments.map((file, index) => (
                    <motion.div
                      key={`${file.name}-${index}`}
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="flex-1"
                    >
                      <FileItem
                        file={file}
                        actions={
                          onRemoveAttachment
                            ? [
                                {
                                  icon: CrossedCircle,
                                  label: translation.ai.removeFile,
                                  onClick: () => onRemoveAttachment(index),
                                },
                              ]
                            : []
                        }
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={cn(
          "grid flex-1 grid-cols-1 grid-rows-1",
          "min-h-[20px] py-2.5 sm:min-h-[20px] sm:py-0"
        )}
      >
        <div
          aria-hidden={true}
          className={cn(
            "col-start-1 row-start-1",
            "pointer-events-none invisible",
            "min-h-[20px] max-h-[120px] sm:min-h-[20px] sm:max-h-[240px]",
            "whitespace-pre-wrap break-words",
            "sm:text-[14px] text-[16px] leading-[20px] font-normal text-f1-foreground",
            "sm:mt-3 sm:px-3"
          )}
        >
          {inputValue.endsWith("\n") ? inputValue + "_" : inputValue}
        </div>
        {!inputValue && !multiplePlaceholders && (
          <p
            className={cn(
              "col-start-1 row-start-1",
              "pointer-events-none",
              "text-f1-foreground-secondary",
              "sm:text-[14px] text-[16px] leading-[20px] font-normal",
              "sm:pt-3 sm:px-3",
              "overflow-hidden text-ellipsis whitespace-nowrap"
            )}
          >
            {resolvedDefaultPlaceholder}
          </p>
        )}
        <textarea
          autoFocus={autoFocus}
          name="one-ai-input"
          rows={1}
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
          onKeyDown={handleKeyDown}
          className={cn(
            "col-start-1 row-start-1",
            "min-h-[20px] max-h-[120px] sm:min-h-[20px] sm:max-h-[240px] sm:h-auto",
            "resize-none",
            "whitespace-pre-wrap break-words",
            "sm:text-[14px] text-[16px] leading-[20px] font-normal text-f1-foreground",
            "px-0 sm:mt-3 sm:px-3",
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "outline-none",
            inputValue || !multiplePlaceholders
              ? "caret-f1-foreground"
              : "caret-transparent"
          )}
        />
        {multiplePlaceholders && (
          <TypewriterPlaceholder
            placeholders={placeholders}
            defaultPlaceholder={resolvedDefaultPlaceholder}
            inputValue={inputValue}
            inProgress={inProgress}
          />
        )}
      </div>

      {fileUploadsEnabled && (
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileSelect}
          className="hidden"
          aria-label={translation.ai.attachFiles}
        />
      )}

      <div className="flex shrink-0 flex-row-reverse gap-2 p-1 sm:flex-row sm:justify-between sm:p-2 sm:pt-0">
        {fileUploadsEnabled ? (
          <ButtonInternal
            type="button"
            variant="outline"
            label={translation.ai.attachFiles}
            icon={Paperclip}
            hideLabel
            onClick={() => fileInputRef.current?.click()}
          />
        ) : (
          <div />
        )}
        <div className="flex gap-2">
          {inProgress || isProcessing ? (
            <ButtonInternal
              type="submit"
              variant="neutral"
              label={translation.ai.stopAnswerGeneration}
              icon={SolidStop}
              hideLabel
            />
          ) : (
            <ButtonInternal
              type="submit"
              disabled={!hasDataToSend}
              variant={hasDataToSend ? "default" : "neutral"}
              label={submitLabel || translation.ai.sendMessage}
              icon={submitLabel ? undefined : ArrowUp}
              hideLabel={!submitLabel}
            />
          )}
        </div>
      </div>
    </motion.form>
  )
}
