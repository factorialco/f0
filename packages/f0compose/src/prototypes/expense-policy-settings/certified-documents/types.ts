/**
 * Certified documents — types.
 *
 * Models the company's legal entities and whether they have been
 * authorized to have Factorial act as their digital certifying agent
 * with the local tax regulator.
 *
 * Authorization is one-way in the prototype (per PM direction):
 * once an entity is authorized, it stays authorized for the session.
 * Mirrors the real-world legal-binding semantics — revoking
 * certification is a contractual process, not a UI toggle.
 */

export type CountryCode = "ES" | "IT" | "FR"

/**
 * Certification regimes supported. Each maps to a real-world tax-
 * authority programme:
 *  - aeat-verifactu: Spain — AEAT Veri*factu (mandated 2025+).
 *  - sdi-fatturapa:  Italy — Sistema di Interscambio / FatturaPA.
 *  - factur-x:       France — Factur-X via Plateforme Publique de
 *                    Facturation (PPF) and partner platforms.
 */
export type CertificationRegime =
  | "aeat-verifactu"
  | "sdi-fatturapa"
  | "factur-x"

export type Entity = {
  id: string
  legalName: string
  country: CountryCode
  regime: CertificationRegime
  certificationStatus: "inactive" | "active"
  /** ISO date string. Set when the admin authorizes via the chat. */
  activatedAt?: string
}
