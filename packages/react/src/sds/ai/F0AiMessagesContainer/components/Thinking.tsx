import { useEffect, useRef, useState } from "react"

import Lightbulb from "@/icons/app/Lightbulb"
import { useI18n } from "@/lib/providers/i18n"

import { F0ActionItem } from "../../F0ActionItem"

import { CollapsibleMessage } from "./CollapsibleMessage"

import { ThinkingProps, ThinkingStep } from "../types"

export const Thinking = ({
  titles,
  items,
  title,
  inProgress,
  isWriting,
}: ThinkingProps) => {
  const translations = useI18n()
  // Force-open while the turn is in progress. Once `inProgress` flips to
  // false, auto-collapse once; the user can then toggle freely.
  const [isOpen, setIsOpen] = useState(!!inProgress)
  const prevInProgressRef = useRef(inProgress)
  useEffect(() => {
    if (prevInProgressRef.current && !inProgress) {
      setIsOpen(false)
    } else if (inProgress && !isOpen) {
      setIsOpen(true)
    }
    prevInProgressRef.current = inProgress
  }, [inProgress, isOpen])

  const headerTitle = inProgress
    ? translations.ai.thoughtsGroupTitle
    : (title ?? translations.ai.thoughtsGroupTitle)
  // `items` (rich, optional content) wins over `titles` (plain back-compat).
  const steps: ThinkingStep[] =
    items ?? (titles ?? []).map((stepTitle) => ({ title: stepTitle }))
  const lastIndex = steps.length - 1
  const itemStatus = (index: number): "executing" | "completed" => {
    if (!inProgress || isWriting) return "completed"
    return index === lastIndex ? "executing" : "completed"
  }

  return (
    <CollapsibleMessage
      icon={Lightbulb}
      title={headerTitle}
      open={isOpen}
      onOpenChange={setIsOpen}
      lockOpen={inProgress}
    >
      <div className="flex flex-col gap-3 pb-4">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <F0ActionItem
              title={step.title}
              content={step.content}
              status={itemStatus(index)}
              inGroup
            />
            {index < steps.length - 1 && (
              <div
                aria-hidden
                className="absolute -bottom-3 left-2 ml-px top-5 w-px bg-f1-border-secondary rounded"
              />
            )}
          </div>
        ))}
      </div>
    </CollapsibleMessage>
  )
}
