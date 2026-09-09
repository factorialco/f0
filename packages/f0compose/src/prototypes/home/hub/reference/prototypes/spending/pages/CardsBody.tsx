import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { Circle } from "@factorialco/f0-react/icons/app"
import { useMemo } from "react"

import { useNavConfig } from "@/prototypes/home/hub/reference/lib/navConfig"

import type { Card } from "../mocks/cards"

import { useCardsSource } from "../hooks/useCardsSource"
import { cardsColumns } from "../lib/cardsColumns"
import { cards as cardsData } from "../mocks/cards"
import { useSpendingState } from "../state"

/**
 * Spending → Cards. One OneDataCollection with the All cards / My cards views
 * as filter-chip presets (see useCardsSource). Both a table and a card-grid
 * visualization are offered; the table is the default and the user can switch.
 */
export function CardsBody() {
  const { t } = useSpendingState()
  const isEmployee = useNavConfig().config.role === "employee"
  const source = useCardsSource(cardsData, t, isEmployee)
  const columns = useMemo(() => cardsColumns(t), [t])

  const cardVisualization = {
    type: "card" as const,
    options: {
      title: (card: Card) => card.alias,
      description: (card: Card) => `${card.type} ${card.last4}`,
      avatar: () => ({ type: "emoji" as const, emoji: "💳" }),
      cardProperties: [
        {
          label: t.cards.colStatus,
          icon: Circle,
          render: (card: Card) => ({
            type: "status" as const,
            value: {
              label:
                card.status === "active"
                  ? t.cards.statusActive
                  : t.cards.statusInactive,
              status:
                card.status === "active"
                  ? ("positive" as const)
                  : ("neutral" as const),
            },
          }),
        },
      ],
    },
  }

  const tableVisualization = { type: "table" as const, options: { columns } }

  return (
    <OneDataCollection
      source={source}
      visualizations={[tableVisualization, cardVisualization]}
    />
  )
}
