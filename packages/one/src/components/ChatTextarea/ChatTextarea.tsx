import { type InputProps } from "@copilotkit/react-ui"
import { ArrowUp, SolidStop } from "@factorialco/f0-react/icons/app"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { useI18n } from "../../lib/providers/i18n"
import { cn } from "../../lib/utils"
import { ButtonInternal } from "../F0Button/internal"

export type ChatTextareaProps = InputProps

export const ChatTextarea = ({
  inProgress,
  onSend,
  onStop,
}: ChatTextareaProps) => {
  const [inputValue, setInputValue] = useState("")
  const [hasScrollbar, setHasScrollbar] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const translation = useI18n()

  const hasDataToSend = inputValue.trim().length > 0

  useEffect(() => {
    if (textareaRef.current && inputValue.length > 0) {
      const { scrollHeight } = textareaRef.current
      const maxHeight = 240
      setHasScrollbar(scrollHeight > maxHeight)
    } else {
      setHasScrollbar(false)
    }
  }, [inputValue])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inProgress) {
      onStop?.()
    } else if (hasDataToSend) {
      onSend(inputValue.trim())
      setInputValue("")
    }

    textareaRef.current?.focus()
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
      layout
      aria-busy={inProgress}
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
          duration: 0.3,
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
            "mb-0 mt-3 max-h-[240px] flex-1 resize-none px-3 outline-none transition-all",
            "whitespace-pre-wrap break-words",
            "text-f1-foreground placeholder:text-f1-foreground-secondary",
            hasScrollbar
              ? "scrollbar-macos overflow-y-scroll"
              : "overflow-y-hidden"
          )}
        />
      </div>

      <div className="flex flex-row-reverse p-3 pt-0">
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
            label={translation.ai.sendMessage}
            icon={ArrowUp}
            hideLabel
          />
        )}
      </div>
    </motion.form>
  )
}
