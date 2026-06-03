import { Tooltip } from "@factorialco/f0-react/dist/experimental"

import type { SpendingRow } from "./rows"

/**
 * Payhawk-style "Expense Automation Tooltips" helper.
 *
 * Surfaces a small gradient sparkle next to an AI-suggested
 * Category value, with a hover tooltip explaining where the
 * suggestion came from. The reason is deterministic per row id so
 * the same expense always reads the same explanation across
 * refreshes — designers see a stable demo, no per-row authored
 * copy needed.
 *
 * Sources mirror real expense-automation products: merchant
 * pattern, OCR receipt line items, historical coding by the same
 * user, and card transaction MCC.
 */
export function categorySuggestionReason(row: SpendingRow): string | null {
  if (row.kind !== "expense") return null
  if (!row.controlling?.category) return null
  let hash = 0
  for (let i = 0; i < row.id.length; i++) {
    hash = (hash * 31 + row.id.charCodeAt(i)) | 0
  }
  const merchant = row.name
  const category = row.controlling.category
  const reasons = [
    `Auto-coded from merchant "${merchant}" — 87% of past expenses with this supplier are categorised as ${category}.`,
    `OCR detected line items consistent with ${category} on the attached receipt.`,
    `Matches your previous coding for "${merchant}" on similar dates.`,
    `Card transaction MCC suggests ${category}; confirmed by historical pattern.`,
  ]
  const idx = ((hash % reasons.length) + reasons.length) % reasons.length
  return reasons[idx] ?? null
}

/**
 * Custom gradient sparkle icon — designer-provided artwork that
 * encodes the "AI suggested" semantic with the One brand gradient
 * (purple → pink → orange). Colors are baked into the SVG so it
 * intentionally bypasses f1 tokens.
 */
function AiSparkleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9.99121 14C11.452 14.0001 12.8895 14.4311 14.1289 15.2705C14.6275 15.6086 14.6225 16.3843 14.1221 16.7188C12.8843 17.5444 11.4491 17.9999 9.99121 18C8.49052 17.9999 7.08362 17.5285 5.88184 16.7305C5.37377 16.3931 5.37263 15.6066 5.88086 15.2695C7.11404 14.4517 8.54087 14.0001 9.99121 14ZM3.27051 5.87109C3.60858 5.37248 4.38428 5.37747 4.71875 5.87793C5.54437 7.11572 5.9999 8.55088 6 10.0088C5.99994 11.5095 5.52845 12.9164 4.73047 14.1182C4.39307 14.6262 3.60663 14.6274 3.26953 14.1191C2.45167 12.886 2.00006 11.4591 2 10.0088C2.0001 8.54803 2.43107 7.1105 3.27051 5.87109ZM15.2705 5.87109C15.6086 5.37248 16.3843 5.37747 16.7188 5.87793C17.5444 7.11572 17.9999 8.55088 18 10.0088C17.9999 11.5095 17.5285 12.9164 16.7305 14.1182C16.3931 14.6262 15.6066 14.6274 15.2695 14.1191C14.4517 12.886 14.0001 11.4591 14 10.0088C14.0001 8.54803 14.4311 7.1105 15.2705 5.87109ZM9.99121 2C11.452 2.0001 12.8895 2.43107 14.1289 3.27051C14.6275 3.60858 14.6225 4.38428 14.1221 4.71875C12.8843 5.54437 11.4491 5.9999 9.99121 6C8.49052 5.99994 7.08362 5.52845 5.88184 4.73047C5.37377 4.39307 5.37263 3.60663 5.88086 3.26953C7.11404 2.45167 8.54087 2.00006 9.99121 2Z"
        fill="url(#ai-sparkle-gradient)"
      />
      <defs>
        <linearGradient
          id="ai-sparkle-gradient"
          x1="18"
          y1="10"
          x2="2"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A1ADE5" />
          <stop offset="0.5" stopColor="#E51943" stopOpacity="0.7" />
          <stop offset="1" stopColor="#E55619" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/**
 * Inline AI-suggestion sparkle with hover tooltip. Designed to sit
 * 8px right of an AI-coded value (e.g. the Category row in the
 * expense detail page table).
 */
export function AiSuggestionBadge({ reason }: { reason: string }) {
  return (
    <Tooltip label="AI suggestion" description={reason}>
      <span
        className="inline-flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center"
        aria-label="AI-suggested value"
      >
        <AiSparkleIcon />
      </span>
    </Tooltip>
  )
}
