import { F0Box, F0Card, F0Icon, F0Text } from "@factorialco/f0-react"
import { CheckDouble, Receipt } from "@factorialco/f0-react/icons/app"
import type React from "react"

import { InlineToggle } from "../../shared/InlineSelect"
import { InlineValue } from "../../shared/InlineValue"
import type { MealsRules } from "../../types"

/**
 * "Documentation" card.
 *
 * Two settings rows, same SummaryRow shape as the rest of Meals:
 *
 *   \ud83e\udde9  **Itemized for client meals:**  [Required / Optional]
 *   \ud83d\udcc4  **Itemized over:**              [\u20ac150]
 */
export function DocumentationCard(props: {
  documentation: MealsRules["documentation"]
  setItemizedForClientMeals: (next: boolean) => void
  setItemizedThreshold: (amount: number) => void
}) {
  return (
    <F0Card title="Documentation">
      <F0Box display="flex" flexDirection="column" gap="md">
        <F0Text
          content="Receipt rules specific to meals & hospitality. Other expenses follow the global Receipts policy."
          variant="body"
        />

        <Row icon={CheckDouble} label="Itemized for client meals">
          <InlineToggle
            value={props.documentation.itemizedForClientMeals}
            onChange={(v) => props.setItemizedForClientMeals(v)}
            onLabel="Required"
            offLabel="Optional"
            ariaLabel="Itemized receipts for client meals"
          />
        </Row>

        <Row icon={Receipt} label="Itemized over">
          <InlineValue
            value={props.documentation.itemizedThreshold}
            onChange={(v) => props.setItemizedThreshold(v as number)}
            format="currency"
            ariaLabel="Itemized receipt threshold"
            suggestions={["\u20ac75", "\u20ac100", "\u20ac150", "\u20ac200"]}
          />
        </Row>
      </F0Box>
    </F0Card>
  )
}

function Row(props: {
  icon: React.ComponentProps<typeof F0Icon>["icon"]
  label: string
  children: React.ReactNode
}) {
  return (
    <F0Box display="flex" alignItems="center" gap="sm" flexWrap="nowrap">
      <F0Icon icon={props.icon} color="default" size="md" />
      <F0Text content={`**${props.label}:**`} variant="body" />
      {props.children}
    </F0Box>
  )
}
