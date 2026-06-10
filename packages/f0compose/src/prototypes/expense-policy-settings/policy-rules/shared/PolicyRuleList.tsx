import { F0Box, F0Card, F0Text } from "@factorialco/f0-react"
import type { CSSProperties } from "react"

import type { PolicyDoc, PolicyStatement } from "../types"
import { InlineProseValue } from "./InlineProse"
import { OneEditCard } from "./OneEditCard"

/**
 * Shared renderer for any co-created policy-rules section (Meals, Travel,
 * Reimbursements, Receipts) as an OPEN list of grouped statements.
 *
 * Two edit tiers, same as the old cards:
 *   - Each section group has an "Edit" button (OneEditCard) → hands off to One
 *     for a conversational change, scoped via `sectionLabel`.
 *   - Each statement's value is inline-editable (InlineProseValue → dotted
 *     underline + the "ask One" popover) for quick direct tweaks.
 * A statement with an empty `value` renders as a plain rule line.
 */

const NOTE: CSSProperties = { color: "#71717a", fontSize: 13 }

function StatementRow(props: {
  item: PolicyStatement
  onChangeValue: (next: string) => void
}) {
  const { item, onChangeValue } = props
  return (
    <F0Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="between"
      gap="md"
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
        <F0Text content={item.subject} variant="body" />
        {item.note ? <span style={NOTE}>· {item.note}</span> : null}
      </span>
      {item.value ? (
        <InlineProseValue
          value={item.value}
          format="text"
          ariaLabel={`${item.subject} — value`}
          onChange={(next) => onChangeValue(String(next))}
        />
      ) : null}
    </F0Box>
  )
}

function RuleGroupCard(props: {
  title: string
  sectionLabel: string
  statements: PolicyStatement[]
  onChangeValue: (statementIndex: number, next: string) => void
}) {
  if (!props.statements.length) return null
  return (
    <OneEditCard label={`${props.title} rules in ${props.sectionLabel}`}>
      <F0Card title={props.title}>
        <F0Box display="flex" flexDirection="column" gap="md">
          {props.statements.map((it, i) => (
            <StatementRow
              key={i}
              item={it}
              onChangeValue={(next) => props.onChangeValue(i, next)}
            />
          ))}
        </F0Box>
      </F0Card>
    </OneEditCard>
  )
}

export function PolicyRuleList(props: {
  policy: PolicyDoc
  onChange: (next: PolicyDoc) => void
  /** Used in the per-section Edit-button label One receives. */
  sectionLabel: string
}) {
  const editValue = (groupIndex: number, statementIndex: number, value: string) => {
    const groups = props.policy.groups.map((g, gi) =>
      gi !== groupIndex
        ? g
        : {
            ...g,
            statements: g.statements.map((s, si) =>
              si !== statementIndex ? s : { ...s, value }
            ),
          }
    )
    props.onChange({ groups })
  }

  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      {props.policy.groups.map((g, gi) => (
        <RuleGroupCard
          key={g.title}
          title={g.title}
          sectionLabel={props.sectionLabel}
          statements={g.statements}
          onChangeValue={(si, next) => editValue(gi, si, next)}
        />
      ))}
    </F0Box>
  )
}
