import { forwardRef, useMemo } from "react"

import type { F0CardProps } from "@/components/F0Card"
import { Money } from "@/icons/app"

import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { ExpenseProfile } from "./types"

import { useAiChat } from "../../../../../providers/AiChatStateProvider"
import { EntityRefHoverCard } from "../../components/EntityRefHoverCard"

const ExpenseTrigger = forwardRef<HTMLButtonElement, { label: string }>(
  ({ label, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        focusRing()
      )}
      {...props}
    >
      {label}
    </button>
  )
)
ExpenseTrigger.displayName = "ExpenseTrigger"

/**
 * Inline expense entity reference with a hover card showing expense details.
 *
 * Renders the trigger as a styled link. On hover, lazily fetches
 * the expense profile via `entityRefs.resolvers.expense` and displays
 * description, amount, and status. Optionally links via `entityRefs.urls.expense`.
 */
export function ExpenseEntityRef({ id, label }: { id: string; label: string }) {
  const { entityRefs } = useAiChat()
  const resolver = entityRefs?.resolvers?.expense
  const i18n = useI18n()

  const expenseUrl = entityRefs?.urls?.expense?.(id)

  const mapToCard = useMemo(
    () =>
      (profile: ExpenseProfile): F0CardProps => ({
        avatar: {
          type: "icon",
          icon: Money,
        },
        title: profile.description || `Expense #${profile.id}`,
        description: [profile.amount, profile.status]
          .filter(Boolean)
          .join(" · "),
        ...(expenseUrl && {
          secondaryActions: {
            label: i18n.t("ai.view"),
            href: expenseUrl,
          },
        }),
      }),
    [i18n, expenseUrl]
  )

  const fallbackCard = useMemo(
    (): F0CardProps => ({
      title: label,
      ...(expenseUrl && {
        secondaryActions: {
          label: i18n.t("ai.view"),
          href: expenseUrl,
        },
      }),
    }),
    [label, i18n, expenseUrl]
  )

  if (!resolver) {
    return <span>{label}</span>
  }

  return (
    <EntityRefHoverCard
      id={id}
      trigger={<ExpenseTrigger label={label} />}
      resolver={resolver}
      mapToCard={mapToCard}
      fallbackCard={fallbackCard}
    />
  )
}
