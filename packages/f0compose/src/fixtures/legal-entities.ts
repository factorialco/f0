/**
 * Legal Entities fixture.
 *
 * Mirrors the production shape used in Factorial (Finance / Trainings
 * budgets): each company has multiple legal entities, each with its own
 * currency. Used by the `multi-entity-budget` prototype to drive the
 * legalEntity selector in the New training budget wizard, the
 * "Legal entities" column in the Budget detail, and the cost breakdown
 * sidepanels.
 *
 * Additive fixture: no other prototype references it yet, so it cannot
 * break Trainings or anything else.
 */

import { employees } from "./employees"

export type LegalEntity = {
  id: string
  legalName: string
  countryCode: string
  currency: string
}

export const legalEntities: LegalEntity[] = [
  {
    id: "le-factorial-spain",
    legalName: "Factorial Spain",
    countryCode: "ES",
    currency: "EUR",
  },
  {
    id: "le-casa-tarraee",
    legalName: "Acme France",
    countryCode: "FR",
    currency: "EUR",
  },
  {
    id: "le-bcn-casa-ee",
    legalName: "Northstar BCN",
    countryCode: "ES",
    currency: "EUR",
  },
  {
    id: "le-001",
    legalName: "Luma Iberia",
    countryCode: "ES",
    currency: "EUR",
  },
  {
    id: "le-002",
    legalName: "Cobalt France",
    countryCode: "FR",
    currency: "EUR",
  },
  {
    id: "le-003",
    legalName: "Atlas Portugal",
    countryCode: "PT",
    currency: "EUR",
  },
]

export function findLegalEntity(id: string | null | undefined): LegalEntity | null {
  if (!id) return null
  return legalEntities.find((le) => le.id === id) ?? null
}

// ── Employee → Legal Entity assignment ─────────────────────────────────────
// Deterministic so the same employee always maps to the same LE between
// renders. Production reads this from `Employee.legal_entity_id`; here we
// derive it from a hash of the employee id to avoid mutating the existing
// employees fixture array.

function hashCode(str: string): number {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) | 0
  }
  return Math.abs(h)
}

export function legalEntityIdForEmployee(employeeId: string): string {
  const explicitAssignments: Record<string, string> = {
    "emp-008": "le-factorial-spain",
    "emp-013": "le-factorial-spain",
    "emp-014": "le-bcn-casa-ee",
    "emp-017": "le-bcn-casa-ee",
    "emp-015": "le-factorial-spain",
    "emp-019": "le-factorial-spain",
  }
  const explicit = explicitAssignments[employeeId]
  if (explicit) return explicit

  const idx = hashCode(employeeId) % legalEntities.length
  return legalEntities[idx]!.id
}

export function legalEntityForEmployee(employeeId: string): LegalEntity {
  return findLegalEntity(legalEntityIdForEmployee(employeeId))!
}

// Helpful for prototypes that want to enumerate "all LEs for the current
// company" (matches `useBudgetsPage(companyId).legalEntities` upstream).
export function legalEntitiesForCompany(): LegalEntity[] {
  return legalEntities
}

// Currency lookup map keyed by legal entity id — mirrors `currencyMap`
// argument upstream in `useTrainingsBudgetForm`.
export const legalEntityCurrencyMap: Record<string, string> = Object.fromEntries(
  legalEntities.map((le) => [le.id, le.currency])
)

// Sanity check at module load: ensure every employee maps to a valid LE.
// Kept out of the export surface; consumed only as a side-effectful guard
// in dev builds.
const _sanity = employees.every((e) => !!legalEntityForEmployee(e.id))
if (!_sanity) {
  // Defensive: this should never trip given the deterministic hash.
  // eslint-disable-next-line no-console
  console.warn("[legal-entities] sanity check failed")
}
