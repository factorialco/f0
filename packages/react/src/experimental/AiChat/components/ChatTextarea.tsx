import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowUp, SolidStop } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
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

export const ChatTextarea = ({ inProgress, onSend, onStop }: InputProps) => {
  const [inputValue, setInputValue] = useState("")
  const [hasScrollbar, setHasScrollbar] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const translation = useI18n()
  const { placeholders } = useAiChat()

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

  const multiplePlaceholders = placeholders.length > 1

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
          placeholder={multiplePlaceholders ? undefined : placeholders?.[0]}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
          onKeyDown={handleKeyDown}
          className={cn(
            "col-start-1 row-start-1",
            "mb-0 mt-3 max-h-[240px] flex-1 resize-none px-3 outline-none transition-all",
            "whitespace-pre-wrap break-words",
            "text-f1-foreground",
            hasScrollbar
              ? "scrollbar-macos overflow-y-scroll"
              : "overflow-y-hidden",
            inputValue || !multiplePlaceholders
              ? "caret-f1-foreground"
              : "caret-transparent",
            !multiplePlaceholders && "placeholder:text-f1-foreground-secondary"
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
