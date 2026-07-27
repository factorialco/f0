import {
  F0Box,
  F0Button,
  F0Heading,
  F0TagStatus,
  F0Text,
} from "@factorialco/f0-react"
import { Cross } from "@factorialco/f0-react/icons/app"

import OneIcon from "../shared/OneIcon"
import ReceiptAiIcon from "../shared/ReceiptAiIcon"

/**
 * Awareness banner above the Submit table — the "teach" layer that
 * pairs with the New-expense dropdown's "convert" layer. Discover-card
 * structure: a visual on the left, then tag + heading + supporting line
 * + CTA, with a dismiss X top-right. (Real build maps to `F0Card` — see
 * the Part-2 spec on the PR.)
 *
 * Unlike the menu subtitle (one truncated line), the banner has room —
 * so it carries the FULL pitch: bulk ("one or a whole pile") + no typing
 * (One fills the details) + you just review. The left panel is a
 * brand-tinted hero with the colored One mark, standing in for real
 * preview art.
 *
 * Dismissable: a promo, not a fixture — production retires it after
 * dismiss / first successful One use (needs per-user persistence). Raw
 * <div>s carry the card chrome + hero; content atoms are F0 components.
 */
export function SubmitWithOnePromo(props: {
  onSubmitWithOne: () => void
  onDismiss: () => void
}) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "stretch",
        gap: 18,
        // Extra right padding reserves space for the top-right dismiss X.
        padding: "18px 48px 18px 18px",
        borderRadius: 14,
        background: "#ffffff",
        border: "1px solid rgba(5,38,87,0.07)",
        boxShadow: "0 1px 3px rgba(5,38,87,0.06)",
      }}
    >
      {/* Brand hero — tinted panel + colored One mark, stretches to the
          height of the text. Stands in for the real preview art. */}
      <div
        style={{
          flexShrink: 0,
          width: 200,
          borderRadius: 10,
          background:
            "linear-gradient(135deg, rgba(161,173,229,0.22) 0%, rgba(229,86,25,0.10) 100%)",
          border: "1px solid rgba(5,38,87,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <OneIcon style={{ width: 92, height: 92 }} />
      </div>

      <F0Box display="flex" flexDirection="column" alignItems="start" gap="lg" grow>
        <F0TagStatus text="New" variant="info" />
        {/* Heading + description stay tight as one group. */}
        <F0Box display="flex" flexDirection="column" alignItems="start" gap="xs">
          <F0Heading
            as="h3"
            variant="heading"
            content="Submit expenses automatically with One"
          />
          <F0Text
            variant="description"
            content="Upload your receipts to let One create and submit your expenses – you only have to review them."
          />
        </F0Box>
        <F0Button
          variant="outline"
          icon={ReceiptAiIcon}
          label="Upload receipts"
          onClick={props.onSubmitWithOne}
        />
      </F0Box>

      {/* Dismiss — top-right corner. */}
      <div style={{ position: "absolute", top: 12, right: 12 }}>
        <F0Button
          variant="outline"
          size="sm"
          icon={Cross}
          hideLabel
          label="Dismiss"
          tooltip="Dismiss"
          onClick={props.onDismiss}
        />
      </div>
    </div>
  )
}
