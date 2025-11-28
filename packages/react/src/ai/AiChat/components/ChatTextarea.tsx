import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowUp, SolidStop } from "@/icons/app"
import { cn } from "@/lib/utils"
import { type InputProps } from "@copilotkit/react-ui"
import { motion } from "motion/react"
import { useRef, useState } from "react"
import { useAiChatTranslations } from "../providers/AiChatTranslationsProvider"

export const ChatTextarea = ({ inProgress, onSend, onStop }: InputProps) => {
  const [inputValue, setInputValue] = useState("")
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const translation = useAiChatTranslations()

  const hasDataToSend = inputValue.trim().length > 0

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
      aria-busy={inProgress}
      ref={formRef}
      className={cn(
        "relative isolate m-3 mt-2 flex flex-row items-end gap-2 rounded-lg border border-solid border-f1-border transition-all hover:cursor-text sm:flex-col sm:items-stretch sm:gap-3",
        "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2] after:rounded-[inherit] after:bg-f1-foreground-secondary after:opacity-0 after:blur-[5px] after:content-['']",
        "from-[#E55619] via-[#A1ADE5] to-[#E51943] after:scale-90 after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]",
        "after:transition-all after:delay-200 after:duration-300 has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100",
        "before:pointer-events-none before:absolute before:inset-0 before:z-[-1] before:rounded-[inherit] before:bg-f1-background before:content-['']",
        "py-2 pl-3 pr-2 sm:p-0"
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
        textareaRef.current?.focus()
      }}
      onSubmit={handleSubmit}
    >
      <div className="grid min-h-[32px] flex-1 grid-cols-1 grid-rows-1">
        <div
          aria-hidden={true}
          className="pointer-events-none invisible col-start-1 row-start-1 max-h-[120px] min-h-[32px] whitespace-pre-wrap break-words text-[16px] leading-[32px] text-f1-foreground sm:mt-3 sm:max-h-[240px] sm:px-3 sm:text-base"
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
          placeholder={translation.ai.inputPlaceholder}
          className={cn(
            "col-start-1 row-start-1",
            "max-h-[120px] min-h-[32px] resize-none px-3 py-0 outline-none transition-all sm:h-auto sm:max-h-[240px]",
            "whitespace-pre-wrap break-words leading-[32px]",
            "text-f1-foreground placeholder:text-f1-foreground-secondary",
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "m-0 px-0 sm:mt-3 sm:px-3",
            "text-[16px] leading-[32px] sm:text-base"
          )}
        />
      </div>

      <div className="flex shrink-0 flex-row-reverse sm:p-3 sm:pt-0">
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
