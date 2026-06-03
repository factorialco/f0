import type { ExpenseCategory } from "@/fixtures"

/**
 * Short rotating "user-written" descriptions, seeded per row id +
 * category so the same row always renders the same line. Picked to
 * read like a real submitter's note on a receipt — terse, business-
 * contextual, sometimes including attendees or trip context.
 *
 * Used in the Submit > Expenses To-Do preset to fill in the summary-
 * view Description field on every draft / changes-requested row
 * that ISN'T already gated by the required-fields rule (those have
 * to stay blank so the "Can't send" alert + Review CTA actually
 * have something to gate on).
 *
 * Why a hand-curated pool rather than something fancier (templated
 * from provider / amount / etc.):
 *   - Cheap and stable. Deterministic hash → constant output across
 *     renders, no Date-based jitter, no Math.random.
 *   - Reads convincingly. Templated copy ("Lunch at $PROVIDER for
 *     $AMOUNT") tends to look robotic; hand-written variants are
 *     more believable in a screen recording / design review.
 */

const BY_CATEGORY: Record<ExpenseCategory, readonly string[]> = {
  Meals: [
    "Client lunch — Q3 renewal kickoff",
    "Team dinner after offsite, 6 attendees",
    "Coffee with prospect (Acme intro)",
    "Working lunch with David and Marta",
    "Breakfast meeting — partnership chat",
    "Dinner with new hire during onboarding",
  ],
  Taxis: [
    "Airport → office after vendor visit",
    "Late ride home after on-call incident",
    "To client HQ for contract signing",
    "Hotel → conference venue, day 2",
    "Cross-town meeting with finance team",
  ],
  Travel: [
    "Train to Madrid for sales review",
    "Flight change fee — meeting rescheduled",
    "Baggage fee, customer visit Berlin",
    "Bus pass — week of conference",
    "Ferry to vendor site, day trip",
  ],
  Shopping: [
    "Notebook + pens for team workshop",
    "Cables / adapters for new monitor setup",
    "Whiteboard markers for planning room",
    "Power strip + USB hub, hot-desk",
    "Snacks for the team during release week",
  ],
  Hotel: [
    "2 nights — onsite with customer in Lisbon",
    "Conference accommodation, FactorialCon",
    "Late checkout fee, flight delay",
    "1 night — early arrival for kickoff",
    "Hotel parking, customer visit",
  ],
  Office: [
    "Coworking day pass — remote week",
    "Printing for board pack",
    "Monitor mount for home setup",
    "Desk lamp replacement",
    "Office plant replacement (the basil died)",
  ],
  Software: [
    "Figma seat — design review",
    "Notion AI add-on for the quarter",
    "Loom upgrade — customer demos",
    "Domain renewal — internal tool",
    "1Password family share for the team",
  ],
  Mileage: [
    "Drive to client HQ — 42 km round trip",
    "Site visit to vendor warehouse",
    "Cross-town drive for partner meeting",
    "Conference venue ↔ hotel, 3 days",
    "Customer onsite, 60 km each way",
  ],
  "Per diem": [
    "2 days onsite — domestic per diem",
    "Customer visit, lunch + dinner allowance",
    "Conference week — meals not covered by venue",
    "Travel day per diem (international)",
    "Team offsite — daily food allowance",
  ],
}

/**
 * Tiny stable hash on the row id. Same logic the rest of the
 * prototype uses for deterministic per-row jitter.
 */
function hashRowId(rowId: string): number {
  let h = 0
  for (let i = 0; i < rowId.length; i++) h = (h * 31 + rowId.charCodeAt(i)) | 0
  return Math.abs(h)
}

/**
 * Picks a short description for a row, rotating through the per-
 * category pool by row-id hash. Falls back to a generic phrase if
 * the category isn't in the pool (shouldn't happen with the current
 * fixture categories — kept as a safety net).
 */
export function mockDescriptionFor(
  rowId: string,
  category: ExpenseCategory
): string {
  const pool = BY_CATEGORY[category]
  if (!pool || pool.length === 0) return "Business expense, see receipt."
  return pool[hashRowId(rowId) % pool.length]
}
