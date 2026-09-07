import { format } from "date-fns"
import { type ReactNode } from "react"

import { F0Icon } from "@/components/F0Icon"
import { EyeVisible } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { useDateFnsLocale } from "@/lib/providers/l10n"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import { type MockPostVisitList } from "./mockPostDetailTypes"

/**
 * "Who has opened this post", as a count that opens a list.
 *
 * The COUNT is always shown, even where the reader may not see the list — the
 * number is the post's own reach, and hiding it would make an unremarkable post
 * look broken. Only the names are gated.
 *
 * A popover rather than a hover tooltip: the list scrolls, and a surface you
 * have to keep the pointer inside to scroll is one you cannot scroll.
 */
export const MockPostVisits = ({
  visits,
}: {
  visits: MockPostVisitList
}): ReactNode => {
  const i18n = useI18n()
  const locale = useDateFnsLocale()

  const counter = (
    <span className="flex items-center gap-1 text-f1-foreground-secondary">
      <F0Icon icon={EyeVisible} size="sm" />
      <span className="font-medium text-f1-foreground-secondary">
        {visits.count}
      </span>
      <span>
        {i18n.t(
          visits.count === 1
            ? "communities.detail.visits.one"
            : "communities.detail.visits.other"
        )}
      </span>
    </span>
  )

  const canOpen = visits.canSee && visits.count > 0 && !!visits.items?.length
  if (!canOpen) return <div className="py-4 text-sm">{counter}</div>

  return (
    <div className="py-4 text-sm">
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="rounded-xs text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-f1-border-selected"
          >
            {counter}
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-72 p-0">
          <p className="border-b border-solid border-f1-border-secondary px-3 py-2 text-sm font-medium text-f1-foreground">
            {i18n.t("communities.detail.postViews")}
          </p>
          {/* 240px, like the product's own list: enough for a handful of rows,
              short enough that it never becomes the page. */}
          <ul className="max-h-60 overflow-y-auto p-1">
            {visits.items?.map((visit) => (
              <li
                key={visit.id}
                className="flex items-center justify-between gap-3 px-2 py-1.5 text-sm"
              >
                <span className="truncate text-f1-foreground">
                  {visit.author?.name ?? i18n.t("communities.detail.anonymous")}
                </span>
                <span className="shrink-0 text-f1-foreground-secondary">
                  {format(new Date(visit.createdAt), "P", { locale })}
                </span>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  )
}
