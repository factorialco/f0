/**
 * Mock data specific to the Documents prototype — a file-browser style
 * document library. Nodes are either FOLDERS or DOCUMENTS arranged in a tree
 * via `parentId` (null = library root).
 *
 * Two orthogonal concepts drive the views:
 *  - `section` (Personal | Company) → the top chips (All / Personal / Company).
 *  - `visibility` (Public | Private) → ONLY exists for COMPANY documents. It
 *    decides whether employees can see a company document (public) or whether it
 *    is internal and reachable only by people with access to private documents.
 *    Personal documents belong to the employee, so they carry no visibility.
 *
 * Nothing here is real — IDs are stable so the prototype renders deterministically.
 */

import type { AppLocale } from "@/prototypes/home/hub/reference/lib/i18n"

/** Top-level section — one chip per section at the top of the Library. */
export type DocSection = "personal" | "company"

/** Visibility — COMPANY documents only. Personal docs leave this undefined. */
export type DocVisibility = "public" | "private"

/** A node is a folder you drill into, or a document leaf. */
export type DocKind = "folder" | "document"

/** Document category — payroll = nóminas, etc. */
export type DocType =
  | "payroll"
  | "contract"
  | "policy"
  | "id"
  | "certificate"
  | "report"
  | "other"

export type FileFormat = "pdf" | "docx" | "xlsx" | "image"

export type DocNode = {
  id: string
  name: string
  /** Spanish display name — shown when the global locale is "es". */
  name_es?: string
  kind: DocKind
  /** Personal (the employee's own) vs Company (owned by the organization). */
  section: DocSection
  /** Public / Private — set ONLY on company nodes; undefined for personal. */
  visibility?: DocVisibility
  /** Parent folder id; null means the library root. */
  parentId: string | null
  /** Document-only metadata. */
  docType?: DocType
  format?: FileFormat
  sizeKb?: number
  /** Owning employee (shared mock id) — company docs have none. */
  ownerId?: string
  /** ISO date the node was last updated. */
  updatedAt: string
  /** Soft-delete flag — deleted nodes live in the Trash tab. */
  deleted?: boolean
  deletedAt?: string
}

export const documents: DocNode[] = [
  // ── PERSONAL — folders ─────────────────────────────────────────────────────
  // The employee's own documents. No visibility: they belong to the employee.
  {
    id: "fol-payroll",
    name: "Payroll",
    name_es: "Nóminas",
    kind: "folder",
    section: "personal",
    parentId: null,
    updatedAt: "2026-06-01",
  },
  {
    id: "fol-contracts",
    name: "Contracts",
    name_es: "Contratos",
    kind: "folder",
    section: "personal",
    parentId: null,
    updatedAt: "2026-05-18",
  },
  {
    id: "fol-personal",
    name: "Personal documents",
    name_es: "Documentos personales",
    kind: "folder",
    section: "personal",
    parentId: null,
    updatedAt: "2026-06-12",
  },

  // ── COMPANY — folders ──────────────────────────────────────────────────────
  // Owned by the organization. Each carries a visibility: public folders are
  // visible to all employees, private folders only to those with access.
  {
    id: "fol-policies",
    name: "Company policies",
    name_es: "Políticas de empresa",
    kind: "folder",
    section: "company",
    visibility: "public",
    parentId: null,
    updatedAt: "2026-04-22",
  },
  {
    id: "fol-onboarding",
    name: "Onboarding",
    name_es: "Incorporación",
    kind: "folder",
    section: "company",
    visibility: "public",
    parentId: null,
    updatedAt: "2026-03-30",
  },
  {
    id: "fol-internal",
    name: "Internal (HR)",
    name_es: "Interno (RRHH)",
    kind: "folder",
    section: "company",
    visibility: "private",
    parentId: null,
    updatedAt: "2026-06-15",
  },
  {
    id: "fol-finance",
    name: "Finance",
    name_es: "Finanzas",
    kind: "folder",
    section: "company",
    visibility: "private",
    parentId: null,
    updatedAt: "2026-06-09",
  },

  // ── COMPANY — loose root documents ─────────────────────────────────────────
  {
    id: "doc-handbook",
    name: "Employee handbook 2026.pdf",
    name_es: "Manual del empleado 2026.pdf",
    kind: "document",
    section: "company",
    visibility: "public",
    parentId: null,
    docType: "policy",
    format: "pdf",
    sizeKb: 2480,
    updatedAt: "2026-02-10",
  },
  {
    id: "doc-orgchart",
    name: "Org chart Q2.pdf",
    name_es: "Organigrama T2.pdf",
    kind: "document",
    section: "company",
    visibility: "public",
    parentId: null,
    docType: "report",
    format: "pdf",
    sizeKb: 540,
    updatedAt: "2026-04-02",
  },
  {
    id: "doc-holiday-cal",
    name: "Holiday calendar 2026.pdf",
    name_es: "Calendario de festivos 2026.pdf",
    kind: "document",
    section: "company",
    visibility: "public",
    parentId: null,
    docType: "other",
    format: "pdf",
    sizeKb: 120,
    updatedAt: "2026-01-03",
  },
  {
    id: "doc-strategy",
    name: "Strategic plan 2026–2028.pdf",
    name_es: "Plan estratégico 2026–2028.pdf",
    kind: "document",
    section: "company",
    visibility: "private",
    parentId: null,
    docType: "report",
    format: "pdf",
    sizeKb: 1860,
    updatedAt: "2026-05-28",
  },

  // ── PERSONAL — Payroll (nóminas) ───────────────────────────────────────────
  {
    id: "doc-pay-jan",
    name: "Payslip – January 2026.pdf",
    name_es: "Nómina – enero 2026.pdf",
    kind: "document",
    section: "personal",
    parentId: "fol-payroll",
    docType: "payroll",
    format: "pdf",
    sizeKb: 184,
    ownerId: "emp-002",
    updatedAt: "2026-01-31",
  },
  {
    id: "doc-pay-feb",
    name: "Payslip – February 2026.pdf",
    name_es: "Nómina – febrero 2026.pdf",
    kind: "document",
    section: "personal",
    parentId: "fol-payroll",
    docType: "payroll",
    format: "pdf",
    sizeKb: 186,
    ownerId: "emp-002",
    updatedAt: "2026-02-28",
  },
  {
    id: "doc-pay-mar",
    name: "Payslip – March 2026.pdf",
    name_es: "Nómina – marzo 2026.pdf",
    kind: "document",
    section: "personal",
    parentId: "fol-payroll",
    docType: "payroll",
    format: "pdf",
    sizeKb: 188,
    ownerId: "emp-002",
    updatedAt: "2026-03-31",
  },
  {
    id: "doc-pay-apr",
    name: "Payslip – April 2026.pdf",
    name_es: "Nómina – abril 2026.pdf",
    kind: "document",
    section: "personal",
    parentId: "fol-payroll",
    docType: "payroll",
    format: "pdf",
    sizeKb: 187,
    ownerId: "emp-002",
    updatedAt: "2026-04-30",
  },
  {
    id: "doc-tax-145",
    name: "IRPF model 145.pdf",
    name_es: "Modelo 145 IRPF.pdf",
    kind: "document",
    section: "personal",
    parentId: "fol-payroll",
    docType: "certificate",
    format: "pdf",
    sizeKb: 96,
    ownerId: "emp-002",
    updatedAt: "2026-01-15",
  },
  {
    id: "doc-tax-summary",
    name: "Annual tax summary 2025.pdf",
    name_es: "Resumen fiscal anual 2025.pdf",
    kind: "document",
    section: "personal",
    parentId: "fol-payroll",
    docType: "report",
    format: "pdf",
    sizeKb: 312,
    ownerId: "emp-002",
    updatedAt: "2026-02-05",
  },

  // ── PERSONAL — Contracts ───────────────────────────────────────────────────
  {
    id: "doc-contract",
    name: "Employment contract.pdf",
    name_es: "Contrato de trabajo.pdf",
    kind: "document",
    section: "personal",
    parentId: "fol-contracts",
    docType: "contract",
    format: "pdf",
    sizeKb: 420,
    ownerId: "emp-002",
    updatedAt: "2024-09-01",
  },
  {
    id: "doc-addendum",
    name: "Contract addendum – remote work.pdf",
    name_es: "Anexo al contrato – teletrabajo.pdf",
    kind: "document",
    section: "personal",
    parentId: "fol-contracts",
    docType: "contract",
    format: "pdf",
    sizeKb: 168,
    ownerId: "emp-002",
    updatedAt: "2025-11-20",
  },
  {
    id: "doc-nda",
    name: "NDA – signed.pdf",
    name_es: "Acuerdo de confidencialidad – firmado.pdf",
    kind: "document",
    section: "personal",
    parentId: "fol-contracts",
    docType: "contract",
    format: "pdf",
    sizeKb: 142,
    ownerId: "emp-002",
    updatedAt: "2024-09-01",
  },
  {
    id: "doc-consent",
    name: "Data processing consent.pdf",
    name_es: "Consentimiento de tratamiento de datos.pdf",
    kind: "document",
    section: "personal",
    parentId: "fol-contracts",
    docType: "other",
    format: "pdf",
    sizeKb: 78,
    ownerId: "emp-002",
    updatedAt: "2024-09-01",
  },

  // ── PERSONAL — Personal documents ──────────────────────────────────────────
  {
    id: "doc-id",
    name: "National ID.pdf",
    name_es: "DNI.pdf",
    kind: "document",
    section: "personal",
    parentId: "fol-personal",
    docType: "id",
    format: "pdf",
    sizeKb: 88,
    ownerId: "emp-002",
    updatedAt: "2025-10-04",
  },
  {
    id: "doc-bank",
    name: "Bank certificate.pdf",
    name_es: "Certificado bancario.pdf",
    kind: "document",
    section: "personal",
    parentId: "fol-personal",
    docType: "certificate",
    format: "pdf",
    sizeKb: 72,
    ownerId: "emp-002",
    updatedAt: "2026-06-12",
  },
  {
    id: "doc-diploma",
    name: "Diploma – BSc.pdf",
    name_es: "Título – Grado.pdf",
    kind: "document",
    section: "personal",
    parentId: "fol-personal",
    docType: "certificate",
    format: "pdf",
    sizeKb: 410,
    ownerId: "emp-002",
    updatedAt: "2024-06-20",
  },
  {
    id: "doc-license",
    name: "Driving license.pdf",
    name_es: "Carné de conducir.pdf",
    kind: "document",
    section: "personal",
    parentId: "fol-personal",
    docType: "id",
    format: "pdf",
    sizeKb: 90,
    ownerId: "emp-002",
    updatedAt: "2025-07-19",
  },

  // ── COMPANY / PUBLIC — Company policies ────────────────────────────────────
  {
    id: "doc-pol-remote",
    name: "Remote work policy.pdf",
    name_es: "Política de teletrabajo.pdf",
    kind: "document",
    section: "company",
    visibility: "public",
    parentId: "fol-policies",
    docType: "policy",
    format: "pdf",
    sizeKb: 220,
    updatedAt: "2026-04-22",
  },
  {
    id: "doc-pol-conduct",
    name: "Code of conduct.pdf",
    name_es: "Código de conducta.pdf",
    kind: "document",
    section: "company",
    visibility: "public",
    parentId: "fol-policies",
    docType: "policy",
    format: "pdf",
    sizeKb: 260,
    updatedAt: "2026-01-08",
  },
  {
    id: "doc-pol-expense",
    name: "Expense policy.pdf",
    name_es: "Política de gastos.pdf",
    kind: "document",
    section: "company",
    visibility: "public",
    parentId: "fol-policies",
    docType: "policy",
    format: "pdf",
    sizeKb: 198,
    updatedAt: "2025-12-12",
  },
  {
    id: "doc-pol-travel",
    name: "Travel policy.pdf",
    name_es: "Política de viajes.pdf",
    kind: "document",
    section: "company",
    visibility: "public",
    parentId: "fol-policies",
    docType: "policy",
    format: "pdf",
    sizeKb: 176,
    updatedAt: "2026-03-05",
  },
  // A private document living inside a public folder — visibility is per-document,
  // not inherited from the folder.
  {
    id: "doc-pol-mgr-pay",
    name: "Manager pay guidelines.pdf",
    name_es: "Guía salarial para managers.pdf",
    kind: "document",
    section: "company",
    visibility: "private",
    parentId: "fol-policies",
    docType: "policy",
    format: "pdf",
    sizeKb: 210,
    updatedAt: "2026-05-02",
  },

  // ── COMPANY / PUBLIC — Onboarding ──────────────────────────────────────────
  {
    id: "doc-onb-welcome",
    name: "Welcome guide.pdf",
    name_es: "Guía de bienvenida.pdf",
    kind: "document",
    section: "company",
    visibility: "public",
    parentId: "fol-onboarding",
    docType: "other",
    format: "pdf",
    sizeKb: 1340,
    updatedAt: "2026-03-30",
  },
  {
    id: "doc-onb-equipment",
    name: "Equipment checklist.xlsx",
    name_es: "Checklist de equipamiento.xlsx",
    kind: "document",
    section: "company",
    visibility: "public",
    parentId: "fol-onboarding",
    docType: "other",
    format: "xlsx",
    sizeKb: 64,
    updatedAt: "2026-03-28",
  },
  {
    id: "doc-onb-firstweek",
    name: "First week plan.pdf",
    name_es: "Plan de la primera semana.pdf",
    kind: "document",
    section: "company",
    visibility: "public",
    parentId: "fol-onboarding",
    docType: "other",
    format: "pdf",
    sizeKb: 150,
    updatedAt: "2026-03-30",
  },

  // ── COMPANY / PRIVATE — Internal (HR) ──────────────────────────────────────
  {
    id: "doc-int-bands",
    name: "Compensation bands 2026.xlsx",
    name_es: "Bandas salariales 2026.xlsx",
    kind: "document",
    section: "company",
    visibility: "private",
    parentId: "fol-internal",
    docType: "report",
    format: "xlsx",
    sizeKb: 240,
    updatedAt: "2026-06-15",
  },
  {
    id: "doc-int-board",
    name: "Board meeting minutes – Q1.pdf",
    name_es: "Acta del consejo – T1.pdf",
    kind: "document",
    section: "company",
    visibility: "private",
    parentId: "fol-internal",
    docType: "report",
    format: "pdf",
    sizeKb: 320,
    updatedAt: "2026-04-10",
  },
  {
    id: "doc-int-headcount",
    name: "Headcount plan 2026.xlsx",
    name_es: "Plan de plantilla 2026.xlsx",
    kind: "document",
    section: "company",
    visibility: "private",
    parentId: "fol-internal",
    docType: "report",
    format: "xlsx",
    sizeKb: 198,
    updatedAt: "2026-05-22",
  },
  {
    id: "doc-int-calibration",
    name: "Performance calibration.pdf",
    name_es: "Calibración de desempeño.pdf",
    kind: "document",
    section: "company",
    visibility: "private",
    parentId: "fol-internal",
    docType: "report",
    format: "pdf",
    sizeKb: 286,
    updatedAt: "2026-06-01",
  },

  // ── COMPANY / PRIVATE — Finance ────────────────────────────────────────────
  {
    id: "doc-fin-budget",
    name: "Annual budget 2026.xlsx",
    name_es: "Presupuesto anual 2026.xlsx",
    kind: "document",
    section: "company",
    visibility: "private",
    parentId: "fol-finance",
    docType: "report",
    format: "xlsx",
    sizeKb: 412,
    updatedAt: "2026-01-20",
  },
  {
    id: "doc-fin-forecast",
    name: "Financial forecast – Q3.xlsx",
    name_es: "Previsión financiera – T3.xlsx",
    kind: "document",
    section: "company",
    visibility: "private",
    parentId: "fol-finance",
    docType: "report",
    format: "xlsx",
    sizeKb: 356,
    updatedAt: "2026-06-09",
  },
  {
    id: "doc-fin-investor",
    name: "Investor report.pdf",
    name_es: "Informe para inversores.pdf",
    kind: "document",
    section: "company",
    visibility: "private",
    parentId: "fol-finance",
    docType: "report",
    format: "pdf",
    sizeKb: 980,
    updatedAt: "2026-05-15",
  },

  // ── Already in trash (seed content for the Trash tab) ───────────────────────
  {
    id: "doc-old-pay",
    name: "Payslip – December 2025.pdf",
    name_es: "Nómina – diciembre 2025.pdf",
    kind: "document",
    section: "personal",
    parentId: "fol-payroll",
    docType: "payroll",
    format: "pdf",
    sizeKb: 182,
    ownerId: "emp-002",
    updatedAt: "2025-12-31",
    deleted: true,
    deletedAt: "2026-06-05",
  },
  {
    id: "doc-draft-contract",
    name: "Draft contract.docx",
    name_es: "Borrador de contrato.docx",
    kind: "document",
    section: "personal",
    parentId: "fol-contracts",
    docType: "contract",
    format: "docx",
    sizeKb: 58,
    ownerId: "emp-002",
    updatedAt: "2025-08-10",
    deleted: true,
    deletedAt: "2026-06-18",
  },
  {
    id: "doc-old-bands",
    name: "Compensation bands 2025.xlsx",
    name_es: "Bandas salariales 2025.xlsx",
    kind: "document",
    section: "company",
    visibility: "private",
    parentId: "fol-internal",
    docType: "report",
    format: "xlsx",
    sizeKb: 232,
    updatedAt: "2025-06-15",
    deleted: true,
    deletedAt: "2026-06-15",
  },
]

/** Locale-aware display name for a node (falls back to the English name). */
export function nodeName(node: DocNode, locale: AppLocale = "en"): string {
  return locale === "es" && node.name_es ? node.name_es : node.name
}
