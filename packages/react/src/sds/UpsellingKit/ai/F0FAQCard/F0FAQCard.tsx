import { useCallback, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { ChevronDown, ChevronRight } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Card, CardContent, CardHeader } from "@/ui/Card"
import { cn } from "@/lib/utils"

import type { F0FAQCardProps, F0FAQItem } from "./types"

interface FAQItemRowProps {
  item: F0FAQItem
  isExpanded: boolean
  onToggle: (id: string) => void
}

const FAQItemRow = ({ item, isExpanded, onToggle }: FAQItemRowProps) => {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg transition-colors",
        isExpanded && "bg-f1-background-secondary"
      )}
    >
      <button
        type="button"
        onClick={() => onToggle(item.id)}
        className={cn(
          "flex w-full items-start justify-between gap-3 rounded-lg px-4 py-3 text-left transition-all",
          !isExpanded &&
            "hover:bg-f1-background-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)]"
        )}
        aria-expanded={isExpanded}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className="text-base font-medium text-f1-foreground">
          {item.question}
        </span>
        <span className="mt-0.5 flex-shrink-0 text-f1-foreground-secondary">
          <F0Icon
            icon={isExpanded ? ChevronDown : ChevronRight}
            size="sm"
            className={cn(
              "transition-transform duration-200",
              isExpanded && "text-f1-foreground"
            )}
          />
        </span>
      </button>
      <div
        id={`faq-answer-${item.id}`}
        role="region"
        aria-labelledby={`faq-question-${item.id}`}
        className={cn(
          "overflow-hidden px-4 transition-all duration-200",
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="pb-3 text-base text-f1-foreground-secondary">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export const F0FAQCard = ({
  items,
  defaultExpandedId,
  expandedId: controlledExpandedId,
  onExpandedChange,
  allowMultiple = false,
}: F0FAQCardProps) => {
  const translations = useI18n()
  const faqTranslations = translations?.ai?.growth?.faqCard

  const displayTitle =
    faqTranslations?.title ?? "Questions before getting started"

  // State for uncontrolled mode (single or multiple)
  const [internalExpandedIds, setInternalExpandedIds] = useState<Set<string>>(
    () => new Set(defaultExpandedId ? [defaultExpandedId] : [])
  )

  // Check if we're in controlled mode
  const isControlled = controlledExpandedId !== undefined

  const isExpanded = useCallback(
    (id: string) => {
      if (isControlled) {
        return controlledExpandedId === id
      }
      return internalExpandedIds.has(id)
    },
    [isControlled, controlledExpandedId, internalExpandedIds]
  )

  const handleToggle = useCallback(
    (id: string) => {
      if (isControlled) {
        // Controlled mode: notify parent
        const newExpandedId = controlledExpandedId === id ? null : id
        onExpandedChange?.(newExpandedId)
      } else {
        // Uncontrolled mode
        setInternalExpandedIds((prev) => {
          const newSet = new Set(prev)
          if (newSet.has(id)) {
            newSet.delete(id)
          } else {
            if (!allowMultiple) {
              newSet.clear()
            }
            newSet.add(id)
          }
          return newSet
        })
      }
    },
    [isControlled, controlledExpandedId, onExpandedChange, allowMultiple]
  )

  if (items.length === 0) {
    return null
  }

  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader className="relative -mx-4 -mt-4 mb-4 border-0 border-b border-solid border-b-f1-border-secondary p-4">
        <h3 className="text-lg font-semibold leading-6 text-f1-foreground">
          {displayTitle}
        </h3>
      </CardHeader>
      <CardContent className="flex flex-col divide-y divide-f1-border p-0">
        {items.map((item) => (
          <FAQItemRow
            key={item.id}
            item={item}
            isExpanded={isExpanded(item.id)}
            onToggle={handleToggle}
          />
        ))}
      </CardContent>
    </Card>
  )
}
