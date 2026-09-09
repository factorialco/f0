import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Plus } from "@factorialco/f0-react/icons/app"

import { findEmployee } from "@/prototypes/home/hub/reference/mocks"

import type { Card } from "../mocks/cards"

import { CURRENT_USER_ID, type SpendingStrings } from "../state"

/**
 * useDataCollectionSource for company cards. The All cards / My cards views are
 * modelled as `presets` (filter chips above the collection) rather than tabs;
 * "My cards" applies `scope: ["mine"]`, keeping only the current user's cards.
 * Employees are pinned to their own cards (no chips). Search matches cardholder
 * name + alias.
 */
export function useCardsSource(
  cards: Card[],
  t: SpendingStrings,
  isEmployee = false
) {
  return useDataCollectionSource<Card>(
    {
      search: { enabled: true, sync: true },
      // The preset chips reference this `scope` filter, so it must be declared.
      filters: isEmployee
        ? {}
        : {
            scope: {
              type: "in",
              label: t.cards.scope,
              options: { options: [{ value: "mine", label: t.cards.myCards }] },
            },
          },
      presets: isEmployee
        ? []
        : [
            { label: t.cards.allCards, filter: {} },
            { label: t.cards.myCards, filter: { scope: ["mine"] } },
          ],
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, pagination }) => {
          const scope = Array.isArray(filters?.scope)
            ? (filters.scope as string[])
            : []
          const onlyMine = isEmployee || scope.includes("mine")
          const term = (search ?? "").toLowerCase().trim()

          const filtered = cards
            .filter((card) =>
              onlyMine ? card.holderId === CURRENT_USER_ID : true
            )
            .filter((card) => {
              if (term === "") return true
              const holder =
                findEmployee(card.holderId)?.fullName.toLowerCase() ?? ""
              return (
                holder.includes(term) || card.alias.toLowerCase().includes(term)
              )
            })

          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = filtered.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          return {
            type: "pages" as const,
            records: filtered.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      primaryActions: () => ({
        label: t.cards.newCard,
        icon: Plus,
        onClick: () => {},
      }),
    },
    [cards, t, isEmployee]
  )
}
