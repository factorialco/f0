import { useCallback, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { ChevronDown, ChevronRight, Question } from "@/icons/app"
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
        "flex flex-col rounded-lg px-3 -mx-3 transition-colors duration-200",
        isExpanded && "bg-f1-background-secondary"
      )}
    >
      <button
        type="button"
        onClick={() => onToggle(item.id)}
        className="flex w-full items-start justify-between gap-3 py-3 text-left transition-colors hover:opacity-80"
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
          "overflow-hidden transition-all duration-200",
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
  headerIcon,
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
  const displayIcon = headerIcon ?? Question

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
      <CardHeader className="-mx-4 -mt-4 mb-2 flex flex-row items-center gap-2 rounded-t-xl bg-f1-background-secondary px-4 py-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-f1-border-secondary">
          <F0Icon
            icon={displayIcon}
            size="sm"
            className="text-f1-foreground-secondary"
          />
        </div>
        <h3 className="text-base font-semibold text-f1-foreground">
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
