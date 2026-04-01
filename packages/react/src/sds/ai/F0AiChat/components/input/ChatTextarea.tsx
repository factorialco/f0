import { useCopilotChatInternal } from "@copilotkit/react-core"
import { type InputProps } from "@copilotkit/react-ui"
import { randomId } from "@copilotkit/shared"
import { motion } from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowUp, Cross, SolidStop } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useAiChat } from "../../providers/AiChatStateProvider"
import { MentionPopover } from "./MentionPopover"
import { ToolHintSelector } from "./ToolHintSelector"
import { TypewriterPlaceholder } from "./TypewriterPlaceholder"
import { useMentions } from "./useMentions"
import { buildHighlightSegments } from "./utils"

type ChatTextareaProps = InputProps & {
  submitLabel?: string
  creditWarning?: "soft"
  onDismissCreditWarning?: () => void
  onGetCredits?: () => void
}

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
    entityResolvers,
    toolHints,
    activeToolHint,
    setActiveToolHint,
  } = useAiChat()
  const { messages, setMessages } = useCopilotChatInternal()
  const translation = useI18n()
  const messagesRef = useRef(messages)
  messagesRef.current = messages

  const [inputValue, setInputValue] = useState("")
  const [cursorPosition, setCursorPosition] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)

  const mentions = useMentions({
    inputValue,
    setInputValue,
    cursorPosition,
    entityResolvers,
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
  const hasDataToSend = inputValue.trim().length > 0

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mentions.close()
    if (inProgress) {
      handleStop()
    } else if (hasDataToSend) {
      const transformed = mentions.transformMentions(inputValue.trim())
      const withToolHint = activeToolHint
        ? `<tool-context tool="${activeToolHint.id}">${activeToolHint.prompt}</tool-context>\n\n${transformed}`
        : transformed
      onSend(withToolHint)
      setInputValue("")
    }

    textareaRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
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

  const creditWarningConfig = {
    soft: {
      text: translation.ai.creditWarning.soft,
      bg: "bg-f1-background-info",
      fontColor: "text-f1-foreground-info",
      formBorder: "[&_form]:border-f1-border-info",
    },
  }

  const form = (
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
        "has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100"
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
      <MentionPopover
        isOpen={mentions.isOpen}
        results={mentions.results}
        isLoading={mentions.isLoading}
        selectedIndex={mentions.selectedIndex}
        position={mentions.popoverPosition}
        onSelect={mentions.selectPerson}
      />

      <div
        className={cn(
          "grid flex-1 grid-cols-1 grid-rows-1",
          "min-h-[20px] py-0"
        )}
      >
        <div
          aria-hidden={true}
          className={cn(
            "col-start-1 row-start-1",
            "pointer-events-none invisible",
            "min-h-[20px] max-h-[240px]",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground",
            "mt-3 px-3"
          )}
        >
          {inputValue.endsWith("\n") ? inputValue + "_" : inputValue}
        </div>
        {hasOverlay && (
          <div
            ref={highlightRef}
            aria-hidden={true}
            className={cn(
              "col-start-1 row-start-1",
              "pointer-events-none",
              "min-h-[20px] max-h-[240px]",
              "whitespace-pre-wrap break-words",
              "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground",
              "mt-3 px-3",
              "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            )}
          >
            {highlightSegments.map((seg, i) =>
              seg.type === "mention" ? (
                <span
                  key={i}
                  className="font-medium text-f1-foreground-secondary"
                >
                  {seg.text}
                </span>
              ) : seg.type === "ghost" ? (
                <span
                  key={i}
                  className="text-f1-foreground-secondary opacity-50"
                >
                  {seg.text}
                </span>
              ) : (
                <span key={i}>{seg.text}</span>
              )
            )}
          </div>
        )}
        {!inputValue && !multiplePlaceholders && (
          <p
            className={cn(
              "col-start-1 row-start-1",
              "pointer-events-none",
              "text-f1-foreground-secondary",
              "text-[16px] sm:text-[14px] leading-[20px] font-normal",
              "pt-3 px-3",
              "overflow-hidden text-ellipsis whitespace-nowrap"
            )}
          >
            {resolvedDefaultPlaceholder}
          </p>
        )}
        <textarea
          autoFocus={false}
          name="one-ai-input"
          rows={1}
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
            setCursorPosition(e.target.selectionStart ?? 0)
          }}
          onKeyDown={handleKeyDown}
          onKeyUp={updateCursorPosition}
          onClick={updateCursorPosition}
          onSelect={updateCursorPosition}
          onScroll={syncHighlightScroll}
          className={cn(
            "col-start-1 row-start-1",
            "min-h-[20px] max-h-[240px] h-auto",
            "resize-none",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal",
            "mt-3 px-3",
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "outline-none",
            hasOverlay
              ? "text-transparent caret-f1-foreground"
              : "text-f1-foreground",
            !hasOverlay &&
              (inputValue || !multiplePlaceholders
                ? "caret-f1-foreground"
                : "caret-transparent")
          )}
        />
        {multiplePlaceholders && (
          <TypewriterPlaceholder
            placeholders={placeholders ?? []}
            defaultPlaceholder={resolvedDefaultPlaceholder}
            inputValue={inputValue}
            inProgress={inProgress}
          />
        )}
      </div>

      <div className="flex shrink-0 items-center justify-between p-3">
        <div className="flex items-center">
          {toolHints && toolHints.length > 0 && setActiveToolHint && (
            <ToolHintSelector
              toolHints={toolHints}
              activeToolHint={activeToolHint ?? null}
              onChange={setActiveToolHint}
            />
          )}
        </div>
        <div className="flex items-center">
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

  if (!creditWarning) return form

  const config = creditWarningConfig[creditWarning]

  return (
    <div
      className={cn("flex flex-col rounded-xl", config.bg, config.formBorder)}
    >
      <div className="flex items-center justify-between gap-2 px-4 pb-1.5 pt-2">
        <p
          className={cn("min-w-0 flex-1 text-sm font-medium", config.fontColor)}
        >
          {config.text}
        </p>
        <div className="flex shrink-0 items-center gap-1">
          {onGetCredits && (
            <F0Button
              label={translation.ai.creditWarning.getCredits ?? ""}
              size="sm"
              variant="outline"
              tooltip={translation.ai.creditWarning.getCredits ?? ""}
              onClick={onGetCredits}
            />
          )}
          {onDismissCreditWarning && (
            <F0Button
              label={translation.ai.creditWarning.dismiss ?? ""}
              size="sm"
              variant="ghost"
              icon={Cross}
              hideLabel
              onClick={onDismissCreditWarning}
            />
          )}
        </div>
      </div>
      {form}
    </div>
  )
}
