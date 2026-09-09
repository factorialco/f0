import type { LegalEntity } from "./types"

export const legalEntities: LegalEntity[] = [
  {
    id: "le-es",
    legalName: "Factorial S.L.",
    isMain: true,
    country: "ES",
    currency: "EUR",
    tin: "B-66758015",
  },
  {
    id: "le-de",
    legalName: "Factorial GmbH",
    isMain: false,
    country: "DE",
    currency: "EUR",
    tin: "DE-329114776",
  },
]

export function findLegalEntity(id: string): LegalEntity | undefined {
  return legalEntities.find((l) => l.id === id)
}
