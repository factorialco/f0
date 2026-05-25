import { useEffect, useRef, useState } from "react"

import Lightbulb from "@/icons/app/Lightbulb"
import { useI18n } from "@/lib/providers/i18n"

import { F0ActionItem } from "../../F0ActionItem"

import { CollapsibleMessage } from "./CollapsibleMessage"

import { ThinkingProps } from "../types"

export const Thinking = ({ titles, title, inProgress }: ThinkingProps) => {
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
    ? "Reflection"
    : (title ?? translations.ai.thoughtsGroupTitle)
  const lastIndex = titles.length - 1
  const itemStatus = (index: number): "executing" | "completed" => {
    if (!inProgress) return "completed"
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
      <div className="flex flex-col gap-3 pb-6">
        {titles.map((stepTitle, index) => (
          <div key={index} className="relative">
            <F0ActionItem
              title={stepTitle}
              status={itemStatus(index)}
              inGroup
            />
            {index < titles.length - 1 && (
              <div
                aria-hidden
                className="absolute -bottom-3 left-2 ml-px top-6 w-px bg-f1-border-secondary rounded"
              />
            )}
          </div>
        ))}
      </div>
    </CollapsibleMessage>
  )
}
