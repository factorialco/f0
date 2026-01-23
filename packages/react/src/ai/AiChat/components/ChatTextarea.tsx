import { type InputProps } from "@copilotkit/react-ui"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowUp, SolidStop } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

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
          "col-start-1 row-start-1",
          "pointer-events-none",
          "text-f1-foreground-secondary",
          "text-[14px] leading-[20px] font-normal",
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
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const translation = useI18n()
  const { placeholders, visualizationMode } = useAiChat()
  const isFullscreen = visualizationMode === "fullscreen"

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

  const multiplePlaceholders = placeholders.length > 1

  return (
    <motion.form
      aria-busy={inProgress}
      ref={formRef}
      className={cn(
        "relative isolate",
        "flex flex-row items-end gap-2 sm:flex-col sm:items-stretch sm:gap-3",
        "rounded-lg border border-solid border-f1-border",
        "transition-all hover:cursor-text",
        "py-1 pl-3 pr-1 sm:p-0",
        "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]",
        "before:rounded-[inherit] before:bg-f1-background before:content-['']",
        "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]",
        "after:rounded-[inherit] after:blur-[5px] after:content-['']",
        "after:scale-90 after:opacity-0",
        "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]",
        "from-[#E55619] via-[#A1ADE5] to-[#E51943]",
        "after:transition-all after:delay-200 after:duration-300",
        "has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100",
        !isFullscreen && "m-3"
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
      <div
        className={cn(
          "grid flex-1 grid-cols-1 grid-rows-1",
          "min-h-[20px] py-2.5 sm:min-h-[40px] sm:py-0"
        )}
      >
        <div
          aria-hidden={true}
          className={cn(
            "col-start-1 row-start-1",
            "pointer-events-none invisible",
            "min-h-[20px] max-h-[120px] sm:min-h-[40px] sm:max-h-[240px]",
            "whitespace-pre-wrap break-words",
            "text-[16px] text-f1-foreground sm:text-base",
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
              "text-[14px] leading-[20px] font-normal",
              "sm:pt-3 sm:px-3",
              "overflow-hidden text-ellipsis whitespace-nowrap",
              "sm:whitespace-normal sm:overflow-visible"
            )}
          >
            {translation.ai.inputPlaceholder}
          </p>
        )}
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
          className={cn(
            "col-start-1 row-start-1",
            "min-h-[20px] max-h-[120px] sm:min-h-[40px] sm:max-h-[240px] sm:h-auto",
            "resize-none",
            "whitespace-pre-wrap break-words",
            "text-[14px] leading-[20px] font-normal text-f1-foreground",
            "px-0 sm:mt-3 sm:px-3",
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "outline-none transition-all",
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

      <div className="flex shrink-0 flex-row-reverse p-1 sm:p-2 sm:pt-0">
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
    </motion.form>
  )
}
