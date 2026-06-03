import { F0Alert, F0Box, F0Card, F0Text } from "@factorialco/f0-react"
import { CheckCircle, Shield } from "@factorialco/f0-react/icons/app"

import { countryCopy, regimeCopy } from "./seeds"
import type { CertificationData } from "./useCertificationData"

/**
 * Step 4 of the Expense Policy: Certified documents.
 *
 * Surface admins use to authorize Factorial to act as their digital
 * certifying agent for invoices issued / received by each legal
 * entity. Authorization is *one-way* (per PM): once enabled it stays
 * enabled for the session. The chat is the gate — clicking "Enable
 * certification" on a card asks One to walk the admin through it, and
 * the actual flip lives in `useAuthorizeCertificationAction.tsx`.
 *
 * Layout:
 *  - Top: section title + one-line description.
 *  - Hero: shield-iconed F0Box explaining the feature in plain English.
 *  - Grid of `F0Card`s, one per entity. Cards differ by status:
 *      · inactive → primary action "Enable certification" (calls
 *        `onRequestAuthorize` which routes through the chat).
 *      · active   → checkmark + "Authorized {date}" in metadata.
 *
 * Scope: visual-only. No persistence (BR-008). No revoke (per PM).
 */
export function CertifiedDocumentsSection(props: {
  certificationData: CertificationData
  /**
   * Called when an admin clicks "Enable certification" on a card.
   * Routes the request to the One chat which renders an inline
   * Authorize panel. The actual state mutation happens inside the
   * copilot action's render callback.
   */
  onRequestAuthorize: (entityId: string) => void
}) {
  const { entities } = props.certificationData

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      {/* Section subtitle. The page-level `BreadcrumbBar` upstream
          renders the "Certified documents" leaf which doubles as
          the H1 (same pattern as Expense types + Approval flows).
          We keep just a one-line description below the breadcrumb
          so the landing stays calm. */}
      <F0Text
        content="Authorize Factorial to digitally certify your expense invoices with each country's tax authority."
        variant="description"
      />

      {/* Hero — plain-English summary of what this does. Rendered
          as an `F0Alert` with `variant="info"` so it picks up the
          canonical info-alert avatar + tinted background instead of
          a hand-rolled `F0Box`. Title + description are kept short
          to fit on a single horizontal block; the alert handles
          icon, spacing, and colour tokens. */}
      <F0Alert
        variant="info"
        title="Make your invoices legally valid for tax audits"
        description="Once you authorize Factorial as your certifying agent, every expense invoice for that legal entity is signed, chained, and transmitted to the local tax authority on your behalf. The signed copy is stored against the expense for audits."
      />

      {/* Entities grid. CSS-grid via F0Box `columns` so cards reflow
          naturally on narrow widths — desktop will show 2-up, the
          chat panel rarely leaves room for 3-up. */}
      <F0Box
        display="grid"
        columns="2"
        gap="md"
      >
        {entities.map((entity) => {
          const country = countryCopy[entity.country]
          const regime = regimeCopy[entity.regime]
          const isActive = entity.certificationStatus === "active"

          return (
            <F0Card
              key={entity.id}
              avatar={{ type: "emoji", emoji: country.flag }}
              title={entity.legalName}
              description={`${country.name} · ${regime.name}`}
              metadata={
                isActive
                  ? [
                      {
                        icon: CheckCircle,
                        property: {
                          type: "text",
                          label: "Status",
                          value: `Authorized ${formatActivatedDate(
                            entity.activatedAt
                          )}`,
                        },
                      },
                    ]
                  : [
                      {
                        icon: Shield,
                        property: {
                          type: "text",
                          label: "Authority",
                          value: regime.authority,
                        },
                      },
                    ]
              }
              primaryAction={
                isActive
                  ? undefined
                  : {
                      label: "Enable certification",
                      onClick: () => props.onRequestAuthorize(entity.id),
                    }
              }
            />
          )
        })}
      </F0Box>
    </F0Box>
  )
}

/**
 * Format the `activatedAt` ISO date for the card metadata. Falls back
 * to "just now" if the timestamp is missing (shouldn't happen, but the
 * type allows it).
 */
function formatActivatedDate(iso: string | undefined): string {
  if (!iso) return "just now"
  const d = new Date(iso)
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}
