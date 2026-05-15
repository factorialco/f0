import type { CertificationRegime, CountryCode, Entity } from "./types"

/**
 * Per-regime copy.
 *
 * Each regime has:
 *  - `name`: short marketing-friendly name (e.g. "AEAT Veri*factu")
 *  - `authority`: the tax authority's full name (used in legal copy)
 *  - `summary`: one-sentence plain-English explanation
 *  - `legalBlurb`: the text One quotes in chat before asking the
 *    admin to authorize. Kept short and direct — no waffling.
 */
export const regimeCopy: Record<
  CertificationRegime,
  {
    name: string
    authority: string
    summary: string
    legalBlurb: string
  }
> = {
  "aeat-verifactu": {
    name: "AEAT Veri*factu",
    authority: "Agencia Estatal de Administración Tributaria (AEAT)",
    summary:
      "Spanish invoices are digitally signed, chained, and reported to AEAT in real time.",
    legalBlurb:
      "You authorize Factorial to act as your certifying agent under Spanish Royal Decree 1007/2023 (Veri*factu). Factorial will sign and transmit expense invoices to the AEAT on your behalf. Authorization is binding and cannot be revoked from this screen.",
  },
  "sdi-fatturapa": {
    name: "SDI FatturaPA",
    authority: "Agenzia delle Entrate",
    summary:
      "Italian invoices are issued as FatturaPA XML and routed through the Sistema di Interscambio.",
    legalBlurb:
      "You authorize Factorial to issue and route your electronic invoices through Italy's Sistema di Interscambio (SDI) on your behalf, in compliance with Decreto Legislativo 127/2015. Authorization is binding and cannot be revoked from this screen.",
  },
  "factur-x": {
    name: "Factur-X",
    authority: "Direction Générale des Finances Publiques (DGFiP)",
    summary:
      "French invoices are exchanged as Factur-X hybrid PDFs through the Plateforme Publique de Facturation.",
    legalBlurb:
      "You authorize Factorial to issue your electronic invoices in the Factur-X format and transmit them through the Plateforme Publique de Facturation (PPF) on your behalf, in compliance with the French e-invoicing reform. Authorization is binding and cannot be revoked from this screen.",
  },
}

/**
 * Country names + flag emojis. Kept separate from the regime so we
 * can show "Spain · AEAT Veri*factu" cleanly even when other countries
 * adopt the same regime (e.g. when Portugal eventually joins SDI).
 */
export const countryCopy: Record<CountryCode, { name: string; flag: string }> = {
  ES: { name: "Spain", flag: "🇪🇸" },
  IT: { name: "Italy", flag: "🇮🇹" },
  FR: { name: "France", flag: "🇫🇷" },
}

/**
 * Initial entity list. Three entities so One can recommend
 * authorizing the still-inactive ones and confirm what's done.
 */
export const seedEntities: Entity[] = [
  {
    id: "entity-es",
    legalName: "Factorial España SL",
    country: "ES",
    regime: "aeat-verifactu",
    certificationStatus: "inactive",
  },
  {
    id: "entity-it",
    legalName: "Factorial Italia Srl",
    country: "IT",
    regime: "sdi-fatturapa",
    certificationStatus: "inactive",
  },
  {
    id: "entity-fr",
    legalName: "Factorial France SAS",
    country: "FR",
    regime: "factur-x",
    certificationStatus: "inactive",
  },
]
