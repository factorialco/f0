import { ButtonInternal } from "@/components/F0Button/internal"
import { FileItem } from "@/experimental/RichText/FileItem"
import { ArrowUp, CrossedCircle, Paperclip, SolidStop } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/ui/scrollarea"
import { type InputProps } from "@copilotkit/react-ui"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { useAiChat } from "../providers/AiChatStateProvider"

interface TypewriterPlaceholderProps {
  placeholders: string[]
  defaultPlaceholder: string
  inputValue: string
  inProgress: boolean
}

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
          "pointer-events-none col-start-1 row-start-1",
          "mb-0 mt-3 max-h-[240px] whitespace-pre-wrap break-words px-3",
          "text-f1-foreground-secondary"
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
      </motion.div>
    </AnimatePresence>
  )
}

export type AttachedFile = {
  file: File
  id: string
}

type ChatTextareaProps = InputProps & {
  submitLabel?: string
}

export const ChatTextarea = ({
  submitLabel,
  inProgress,
  onSend,
  onStop,
}: ChatTextareaProps) => {
  const [inputValue, setInputValue] = useState("")
  const [hasScrollbar, setHasScrollbar] = useState(false)
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([])
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const translation = useI18n()
  const { placeholders } = useAiChat()

  const hasDataToSend = inputValue.trim().length > 0 || attachedFiles.length > 0
  const multiplePlaceholders = placeholders.length > 1

  useEffect(() => {
    if (textareaRef.current && inputValue.length > 0) {
      const { scrollHeight } = textareaRef.current
      const maxHeight = 240
      setHasScrollbar(scrollHeight > maxHeight)
    } else {
      setHasScrollbar(false)
    }
  }, [inputValue])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])

    // Limit file size to 2MB per file to avoid performance issues
    const MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB
    const rejectedFiles: string[] = []
    const validFiles = files.filter((file) => {
      if (file.size > MAX_FILE_SIZE) {
        rejectedFiles.push(file.name)
        return false
      }
      return true
    })

    // Show warning if any files were rejected
    if (rejectedFiles.length > 0) {
      const maxSizeMB = MAX_FILE_SIZE / 1024 / 1024
      const message =
        rejectedFiles.length === 1
          ? translation.ai.fileTooLarge
              .replace("{fileName}", rejectedFiles[0])
              .replace("{maxSize}", maxSizeMB.toString())
          : translation.ai.filesTooLarge
              .replace("{count}", rejectedFiles.length.toString())
              .replace("{maxSize}", maxSizeMB.toString())

      // Show a user-friendly error message
      // TODO: Replace with a proper toast notification when available
      alert(message)
    }

    if (validFiles.length > 0) {
      const newFiles: AttachedFile[] = validFiles.map((file) => ({
        file,
        id: Math.random().toString(36).substring(7),
      }))

      setAttachedFiles((prev) => [...prev, ...newFiles])
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const removeFile = (id: string) => {
    setAttachedFiles((prev) => prev.filter((f) => f.id !== id))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inProgress) {
      onStop?.()
    } else if (hasDataToSend) {
      let messageContent = inputValue.trim()

      if (attachedFiles.length > 0) {
        // Generate unique message ID
        const messageId = `msg-${Date.now()}-${Math.random().toString(36).substring(7)}`

        const filesList = attachedFiles
          .map((f) => `[File: ${f.file.name}]`)
          .join("\n")
        messageContent = messageContent
          ? `${messageContent}\n\n[MessageId: ${messageId}]\n${filesList}`
          : `[MessageId: ${messageId}]\n${filesList}`

        // Convert files to base64 for Mastra - do this asynchronously to avoid blocking UI
        const filesDataPromise = Promise.all(
          attachedFiles.map(async (attachedFile) => {
            const base64 = await fileToBase64(attachedFile.file)
            return {
              name: attachedFile.file.name,
              type: attachedFile.file.type,
              size: attachedFile.file.size,
              data: base64,
            }
          })
        )

        // Initialize storage if needed
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (!(window as any).__copilot_message_files_map__) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ;(window as any).__copilot_message_files_map__ = new Map()
        }

        // Store the promise initially, then resolve it
        const filesData = await filesDataPromise

        // Store files data for backend (via headers)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(window as any).__copilot_files__ = filesData

        // Store files data for frontend (to display in UserMessage)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(window as any).__copilot_message_files_map__.set(messageId, filesData)

        // Clean up files data for headers after a short delay
        setTimeout(() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          delete (window as any).__copilot_files__
        }, 1000)
      }

      onSend(messageContent)
      setInputValue("")
      setAttachedFiles([])
    }

    textareaRef.current?.focus()
  }

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const result = reader.result as string
        // Remove the data URL prefix (e.g., "data:image/png;base64,")
        const base64 = result.split(",")[1]
        resolve(base64)
      }
      reader.onerror = (error) => reject(error)
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (!inProgress) {
        formRef.current?.requestSubmit()
      }
    }
  }

  return (
    <motion.form
      aria-busy={inProgress}
      ref={formRef}
      className={cn(
        "relative isolate m-3 mt-2 flex flex-col items-stretch gap-3 rounded-lg border border-solid border-f1-border transition-all hover:cursor-text",
        "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2] after:rounded-[inherit] after:bg-f1-foreground-secondary after:opacity-0 after:blur-[5px] after:content-['']",
        "from-[#E55619] via-[#A1ADE5] to-[#E51943] after:scale-90 after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]",
        "after:transition-all after:delay-200 after:duration-300 has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100",
        "before:pointer-events-none before:absolute before:inset-0 before:z-[-1] before:rounded-[inherit] before:bg-f1-background before:content-['']"
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
        {attachedFiles.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
            }}
            className="overflow-hidden"
          >
            <ScrollArea className="px-3 py-3">
              <div className="flex w-full flex-row gap-2">
                <AnimatePresence initial={false}>
                  {attachedFiles.map((attachedFile) => (
                    <motion.div
                      key={attachedFile.id}
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
                        file={attachedFile.file}
                        actions={[
                          {
                            icon: CrossedCircle,
                            label: translation.ai.removeFile,
                            onClick: () => removeFile(attachedFile.id),
                          },
                        ]}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 grid-rows-1">
        <div
          aria-hidden={true}
          className="pointer-events-none invisible col-start-1 row-start-1 max-h-[240px] min-h-[40px] whitespace-pre-wrap break-words px-3 text-base"
        >
          {inputValue.endsWith("\n") ? inputValue + "_" : inputValue}
        </div>
        <textarea
          autoFocus={true}
          name="one-ai-input"
          rows={1}
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
          onKeyDown={handleKeyDown}
          placeholder={multiplePlaceholders ? "" : translation.ai.inputPlaceholder}
          className={cn(
            "col-start-1 row-start-1",
            "mb-0 max-h-[240px] flex-1 resize-none px-3 outline-none transition-all",
            "whitespace-pre-wrap break-words",
            "text-f1-foreground placeholder:text-f1-foreground-secondary",
            hasScrollbar
              ? "scrollbar-macos overflow-y-scroll"
              : "overflow-y-hidden",
            attachedFiles.length === 0 ? "mt-3" : "mt-0",
            inputValue || !multiplePlaceholders
              ? "caret-f1-foreground"
              : "caret-transparent"
          )}
        />
        {multiplePlaceholders && (
          <TypewriterPlaceholder
            placeholders={placeholders}
            defaultPlaceholder={translation.ai.inputPlaceholder}
            inputValue={inputValue}
            inProgress={inProgress}
          />
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileSelect}
        className="hidden"
        aria-label={translation.ai.attachFiles}
      />

      <div className="flex items-center justify-between p-3 pt-0">
        <ButtonInternal
          type="button"
          variant="outline"
          label={translation.ai.attachFiles}
          icon={Paperclip}
          hideLabel
          onClick={() => fileInputRef.current?.click()}
        />
        <div className="flex gap-2">
          {inProgress ? (
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
