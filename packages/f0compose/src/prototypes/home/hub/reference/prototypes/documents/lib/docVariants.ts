import type { AppLocale } from "@/prototypes/home/hub/reference/lib/i18n"

import type { DocSection, DocType, DocVisibility } from "../mocks/documents"

/** `status` value-display variants accepted by OneDataCollection cells. */
export type CellStatus =
  | "positive"
  | "neutral"
  | "info"
  | "warning"
  | "critical"

/** Human label for a document type. */
export function docTypeLabel(type: DocType, locale: AppLocale = "en"): string {
  const labels: Record<AppLocale, Record<DocType, string>> = {
    en: {
      payroll: "Payroll",
      contract: "Contract",
      policy: "Policy",
      id: "ID",
      certificate: "Certificate",
      report: "Report",
      other: "Document",
    },
    es: {
      payroll: "Nómina",
      contract: "Contrato",
      policy: "Política",
      id: "DNI",
      certificate: "Certificado",
      report: "Informe",
      other: "Documento",
    },
  }
  return labels[locale][type]
}

/** Colour pill per document type. */
export function docTypeVariant(type: DocType): CellStatus {
  switch (type) {
    case "payroll":
      return "positive"
    case "contract":
      return "info"
    case "policy":
      return "warning"
    case "id":
    case "certificate":
      return "neutral"
    case "report":
      return "info"
    case "other":
      return "neutral"
  }
}

/** Human label for a section (also the top chip labels). */
export function sectionLabel(
  section: DocSection,
  locale: AppLocale = "en"
): string {
  const labels: Record<AppLocale, Record<DocSection, string>> = {
    en: { personal: "Personal", company: "Company" },
    es: { personal: "Personal", company: "Empresa" },
  }
  return labels[locale][section]
}

/**
 * Human label for a company document's visibility. Personal documents have no
 * visibility (`undefined`), shown as an em dash in the table.
 */
export function visibilityLabel(
  visibility: DocVisibility | undefined,
  locale: AppLocale = "en"
): string {
  if (!visibility) return "—"
  const labels: Record<AppLocale, Record<DocVisibility, string>> = {
    en: { public: "Public", private: "Private" },
    es: { public: "Público", private: "Privado" },
  }
  return labels[locale][visibility]
}

/** Colour pill per visibility — public reads as open (positive), private as
 *  restricted (warning). Personal docs have no pill. */
export function visibilityVariant(visibility: DocVisibility): CellStatus {
  return visibility === "public" ? "positive" : "warning"
}
