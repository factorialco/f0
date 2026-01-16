import { ButtonInternal } from "@/components/F0Button/internal"
import { FileItem } from "@/experimental/RichText/FileItem"
import { ArrowUp, CrossedCircle, Paperclip, SolidStop } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/ui/scrollarea"
import { type InputProps } from "@copilotkit/react-ui"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useRef, useState } from "react"
import { useAiChat } from "../providers/AiChatStateProvider"

export const ChatTextarea = ({ inProgress, onSend, onStop }: InputProps) => {
  const [inputValue, setInputValue] = useState("")
  const [hasScrollbar, setHasScrollbar] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const translation = useI18n()

  // Use centralized attachment state from context
  const { attachments, addAttachments, removeAttachment, clearAttachments } =
    useAiChat()

  const hasDataToSend = inputValue.trim().length > 0 || attachments.length > 0

  useEffect(() => {
    if (textareaRef.current && inputValue.length > 0) {
      const { scrollHeight } = textareaRef.current
      const maxHeight = 240
      setHasScrollbar(scrollHeight > maxHeight)
    } else {
      setHasScrollbar(false)
    }
  }, [inputValue])

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || [])

      if (files.length > 0) {
        // Validation is handled by the context (fileValidation config)
        // If files are rejected, onFilesRejected callback will be called
        addAttachments(files)
      }

      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    },
    [addAttachments]
  )

  const handleRemoveFile = useCallback(
    (index: number) => {
      removeAttachment(index)
    },
    [removeAttachment]
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

    setIsProcessing(true)

    try {
      const messageContent = inputValue.trim()

      // If there are attachments, add file markers to the message
      // The actual processing happens via onBeforeSend in the context
      let finalMessage = messageContent

      if (attachments.length > 0) {
        const fileMarkers = attachments
          .map((file) => `[Attachment: ${file.name}]`)
          .join("\n")

        finalMessage = messageContent
          ? `${messageContent}\n\n${fileMarkers}`
          : fileMarkers
      }

      // Send the message through CopilotKit
      // Note: If onBeforeSend is registered in the context, it will process
      // attachments before the message is actually sent to the agent
      onSend(finalMessage)

      // Clear input and attachments
      setInputValue("")
      clearAttachments()
    } finally {
      setIsProcessing(false)
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
        "relative isolate m-3 mt-2 flex flex-col gap-3 rounded-lg border border-solid border-f1-border hover:cursor-text",
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
        {attachments.length > 0 && (
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
                        actions={[
                          {
                            icon: CrossedCircle,
                            label: translation.ai.removeFile,
                            onClick: () => handleRemoveFile(index),
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
          className="pointer-events-none invisible col-start-1 row-start-1 mb-0 mt-3 max-h-[240px] whitespace-pre-wrap break-words px-3 text-f1-foreground"
        >
          {inputValue.endsWith("\n") ? inputValue + "_" : inputValue}
        </div>
        <AnimatePresence>
          {hasScrollbar && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={cn(
                "pointer-events-none absolute inset-x-0 z-10 h-3 rounded-t-xl after:absolute after:inset-x-0 after:h-px after:bg-f1-background-inverse after:opacity-[0.04] after:content-['']",
                "-top-px bg-gradient-to-b from-f1-background-selected to-transparent after:-top-px"
              )}
            />
          )}
        </AnimatePresence>
        <textarea
          autoFocus={true}
          name="one-ai-input"
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
          onKeyDown={handleKeyDown}
          placeholder={translation.ai.inputPlaceholder}
          className={cn(
            "col-start-1 row-start-1",
            "mb-0 max-h-[240px] flex-1 resize-none px-3 outline-none transition-all",
            "whitespace-pre-wrap break-words",
            "text-f1-foreground placeholder:text-f1-foreground-secondary",
            hasScrollbar
              ? "scrollbar-macos overflow-y-scroll"
              : "overflow-y-hidden",
            attachments.length === 0 ? "mt-3" : "mt-0"
          )}
        />
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
              label={translation.ai.sendMessage}
              icon={ArrowUp}
              hideLabel
            />
          )}
        </div>
      </div>
    </motion.form>
  )
}
