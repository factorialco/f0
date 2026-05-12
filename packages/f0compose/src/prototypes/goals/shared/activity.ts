import type { GoalRecord } from "./types"

/**
 * Activity entry for the goal detail timeline. Each entry represents an
 * action a user took on a goal — currently only "progress update"; the
 * structure leaves room for status changes / comments later.
 */
export type GoalActivity = {
  id: string
  goalId: string
  authorId: string
  date: string
  type: "progress-update"
  /** Numeric "current value" before the update. */
  previousValue: number
  /** Numeric "current value" after the update. */
  newValue: number
  note: string
  /**
   * Lifecycle of the entry. Defaults to `"completed"` (already happened).
   * Use `"in-progress"` for drafts the author is still working on, and
   * `"not-started"` for scheduled future check-ins that haven't begun yet.
   */
  status?: "completed" | "in-progress" | "not-started"
}

/**
 * Hand-crafted activity log. We seed enough entries for the highest-traffic
 * goals to mirror the design (Factorial ARR, Ship payroll integration, etc.)
 * and add a couple of entries for assorted goals so navigating around the
 * tree always shows something meaningful.
 */
export const goalActivityFixtures: GoalActivity[] = [
  // ─── g-001 — Factorial ARR ─────────────────────────────────────────
  {
    id: "act-000b",
    goalId: "g-001",
    authorId: "emp-002",
    date: "2026-05-12",
    type: "progress-update",
    previousValue: 10_000_000,
    newValue: 10_000_000,
    note: "Pending check-in with the EMEA sales lead before publishing May numbers.",
    status: "not-started",
  },
  {
    id: "act-000a",
    goalId: "g-001",
    authorId: "emp-002",
    date: "2026-05-05",
    type: "progress-update",
    previousValue: 10_000_000,
    newValue: 10_650_000,
    note: "Draft — waiting on finance to confirm the two enterprise renewals.",
    status: "in-progress",
  },
  {
    id: "act-001",
    goalId: "g-001",
    authorId: "emp-002",
    date: "2026-04-28",
    type: "progress-update",
    previousValue: 9_203_000,
    newValue: 10_000_000,
    note: "French sales team closed 20 big deals past week.",
  },
  {
    id: "act-002",
    goalId: "g-001",
    authorId: "emp-003",
    date: "2026-03-30",
    type: "progress-update",
    previousValue: 8_920_504,
    newValue: 9_203_000,
    note: "Jennifer retained 5 clients and closed 5 new deals.",
  },
  {
    id: "act-003",
    goalId: "g-001",
    authorId: "emp-003",
    date: "2026-03-02",
    type: "progress-update",
    previousValue: 8_400_000,
    newValue: 8_920_504,
    note: "Renewed two enterprise contracts in DACH region.",
  },
  {
    id: "act-004",
    goalId: "g-001",
    authorId: "emp-002",
    date: "2026-02-04",
    type: "progress-update",
    previousValue: 7_950_000,
    newValue: 8_400_000,
    note: "Kicked off Q1 outbound campaign — early pipeline up 18%.",
  },

  // ─── g-002 — Enhance store operations ──────────────────────────────
  {
    id: "act-004b",
    goalId: "g-002",
    authorId: "emp-003",
    date: "2026-05-10",
    type: "progress-update",
    previousValue: 35,
    newValue: 35,
    note: "Site visit scheduled for Lisbon flagship — will measure post-rollout impact.",
    status: "not-started",
  },
  {
    id: "act-005",
    goalId: "g-002",
    authorId: "emp-002",
    date: "2026-04-20",
    type: "progress-update",
    previousValue: 25,
    newValue: 35,
    note: "Rolled out new POS workflow across 3 flagship stores.",
  },

  // ─── g-003 — Close €1M in Q1 ───────────────────────────────────────
  {
    id: "act-006",
    goalId: "g-003",
    authorId: "emp-002",
    date: "2026-03-31",
    type: "progress-update",
    previousValue: 95,
    newValue: 100,
    note: "Hit Q1 target on the last working day — 🎯",
  },

  // ─── g-101 — Ship payroll integration ──────────────────────────────
  {
    id: "act-009",
    goalId: "g-101",
    authorId: "emp-001",
    date: "2026-05-08",
    type: "progress-update",
    previousValue: 60,
    newValue: 70,
    note: "Drafting QA notes — will publish once the staging deploy is green.",
    status: "in-progress",
  },
  {
    id: "act-010",
    goalId: "g-101",
    authorId: "emp-001",
    date: "2026-04-22",
    type: "progress-update",
    previousValue: 50,
    newValue: 60,
    note: "Backend endpoints scaffolded; webhook layer next.",
  },
  {
    id: "act-011",
    goalId: "g-101",
    authorId: "emp-001",
    date: "2026-03-15",
    type: "progress-update",
    previousValue: 35,
    newValue: 50,
    note: "API spec signed off by partner team.",
  },

  // ─── g-103 — Backend implementation ────────────────────────────────
  {
    id: "act-012",
    goalId: "g-103",
    authorId: "emp-001",
    date: "2026-04-25",
    type: "progress-update",
    previousValue: 30,
    newValue: 50,
    note: "6/12 endpoints shipped behind the feature flag.",
  },

  // ─── g-201 — Achieve SOC2 compliance ───────────────────────────────
  {
    id: "act-020",
    goalId: "g-201",
    authorId: "emp-016",
    date: "2026-04-12",
    type: "progress-update",
    previousValue: 60,
    newValue: 75,
    note: "Closed 12 of the 18 outstanding control gaps.",
  },
  {
    id: "act-021",
    goalId: "g-201",
    authorId: "emp-016",
    date: "2026-02-28",
    type: "progress-update",
    previousValue: 40,
    newValue: 60,
    note: "Vendor risk review completed; auditor scheduled for May.",
  },

  // ─── g-205 — Build analytics dashboard ─────────────────────────────
  {
    id: "act-030",
    goalId: "g-205",
    authorId: "emp-019",
    date: "2026-04-18",
    type: "progress-update",
    previousValue: 65,
    newValue: 80,
    note: "Dashboards live in beta with first 5 design partners.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // FACTORIAL COMPANY GOALS (f-* IDs)
  // ═══════════════════════════════════════════════════════════════════

  // ─── f-001 — Factorial ARR (root, progress: 14) ────────────────────
  {
    id: "act-f-001a",
    goalId: "f-001",
    authorId: "emp-002",
    date: "2026-05-10",
    type: "progress-update",
    previousValue: 18_500_000,
    newValue: 18_500_000,
    note: "Waiting on Finance to confirm May numbers before publishing.",
    status: "not-started",
  },
  {
    id: "act-f-001b",
    goalId: "f-001",
    authorId: "emp-002",
    date: "2026-04-28",
    type: "progress-update",
    previousValue: 16_200_000,
    newValue: 18_500_000,
    note: "Strong April across all verticals — Time and Compensation leading.",
  },
  {
    id: "act-f-001c",
    goalId: "f-001",
    authorId: "emp-002",
    date: "2026-03-31",
    type: "progress-update",
    previousValue: 12_800_000,
    newValue: 16_200_000,
    note: "Q1 closed above plan — 12% over forecast driven by enterprise deals.",
  },
  {
    id: "act-f-001d",
    goalId: "f-001",
    authorId: "emp-002",
    date: "2026-02-15",
    type: "progress-update",
    previousValue: 7_400_000,
    newValue: 12_800_000,
    note: "February pipeline converting well; DACH expansion on track.",
  },
  {
    id: "act-f-001e",
    goalId: "f-001",
    authorId: "emp-002",
    date: "2026-01-28",
    type: "progress-update",
    previousValue: 0,
    newValue: 7_400_000,
    note: "January renewals batch processed — baseline ARR captured.",
  },

  // ─── f-020 — Factorial ARR - Product & Eng (progress: 17) ─────────
  {
    id: "act-f-020a",
    goalId: "f-020",
    authorId: "emp-001",
    date: "2026-04-10",
    type: "progress-update",
    previousValue: 58_000_000,
    newValue: 62_000_000,
    note: "New expansion revenue from mid-market segment pushed ARR up.",
  },
  {
    id: "act-f-020b",
    goalId: "f-020",
    authorId: "emp-001",
    date: "2026-02-20",
    type: "progress-update",
    previousValue: 53_500_000,
    newValue: 58_000_000,
    note: "Q1 product launches driving upsell across 3 tiers.",
  },

  // ─── f-030 — Factorial ARR - Talent (progress: 20) ────────────────
  {
    id: "act-f-030a",
    goalId: "f-030",
    authorId: "emp-002",
    date: "2026-04-15",
    type: "progress-update",
    previousValue: 17_500_000,
    newValue: 18_600_000,
    note: "Performance module renewals stronger than forecast.",
  },
  {
    id: "act-f-030b",
    goalId: "f-030",
    authorId: "emp-002",
    date: "2026-02-10",
    type: "progress-update",
    previousValue: 16_200_000,
    newValue: 17_500_000,
    note: "Engagement add-on uptake above plan.",
  },

  // ─── f-031 — Factorial ARR - Performance (progress: 43) ───────────
  {
    id: "act-f-031a",
    goalId: "f-031",
    authorId: "emp-004",
    date: "2026-04-20",
    type: "progress-update",
    previousValue: 2_500_000,
    newValue: 2_900_000,
    note: "Q2 pipeline converting well — mid-market deals closing.",
  },
  {
    id: "act-f-031b",
    goalId: "f-031",
    authorId: "emp-004",
    date: "2026-03-15",
    type: "progress-update",
    previousValue: 1_800_000,
    newValue: 2_500_000,
    note: "Q1 target exceeded — new logos in DACH and Nordics.",
  },
  {
    id: "act-f-031c",
    goalId: "f-031",
    authorId: "emp-004",
    date: "2026-01-31",
    type: "progress-update",
    previousValue: 900_000,
    newValue: 1_800_000,
    note: "January renewals batch processed — strong start to the year.",
  },

  // ─── f-032 — Performance Q1 (progress: 158 — overachieved) ────────
  {
    id: "act-f-032a",
    goalId: "f-032",
    authorId: "emp-004",
    date: "2026-03-28",
    type: "progress-update",
    previousValue: 1_300_000,
    newValue: 1_596_451,
    note: "Exceeded Q1 target by 58% — two large enterprise deals landed late March.",
  },
  {
    id: "act-f-032b",
    goalId: "f-032",
    authorId: "emp-004",
    date: "2026-02-15",
    type: "progress-update",
    previousValue: 600_000,
    newValue: 1_300_000,
    note: "February batch — mid-market pipeline accelerating.",
  },

  // ─── f-033 — Performance Q2 (progress: 15) ────────────────────────
  {
    id: "act-f-033a",
    goalId: "f-033",
    authorId: "emp-004",
    date: "2026-04-18",
    type: "progress-update",
    previousValue: 0,
    newValue: 222_374,
    note: "First Q2 deals closing — mostly expansions.",
  },

  // ─── f-040 — Engagement (progress: 12) ─────────────────────────────
  {
    id: "act-f-040a",
    goalId: "f-040",
    authorId: "emp-012",
    date: "2026-03-30",
    type: "progress-update",
    previousValue: 350_000,
    newValue: 690_338,
    note: "Pulse survey module driving new ARR from existing accounts.",
  },

  // ─── f-041 — Trust channel (progress: 42) ──────────────────────────
  {
    id: "act-f-041a",
    goalId: "f-041",
    authorId: "emp-016",
    date: "2026-04-05",
    type: "progress-update",
    previousValue: 500_000,
    newValue: 820_348,
    note: "Whistleblower compliance requirement boosting adoption in EU.",
  },
  {
    id: "act-f-041b",
    goalId: "f-041",
    authorId: "emp-016",
    date: "2026-02-18",
    type: "progress-update",
    previousValue: 200_000,
    newValue: 500_000,
    note: "New directive deadline driving urgent purchases.",
  },

  // ─── f-060 — Finance (progress: 11) ────────────────────────────────
  {
    id: "act-f-060a",
    goalId: "f-060",
    authorId: "emp-010",
    date: "2026-03-25",
    type: "progress-update",
    previousValue: 500_000,
    newValue: 990_979,
    note: "Expense module cross-sell ramping up with payroll bundle.",
  },

  // ─── f-070 — Compensation (progress: 19) ──────────────────────────
  {
    id: "act-f-070a",
    goalId: "f-070",
    authorId: "emp-006",
    date: "2026-04-12",
    type: "progress-update",
    previousValue: 1_100_000,
    newValue: 1_866_786,
    note: "Comp review cycle feature landing well with enterprise clients.",
  },
  {
    id: "act-f-070b",
    goalId: "f-070",
    authorId: "emp-006",
    date: "2026-02-05",
    type: "progress-update",
    previousValue: 400_000,
    newValue: 1_100_000,
    note: "Early adopters on-boarded during January push.",
  },

  // ─── f-080 — Time (progress: 20) ──────────────────────────────────
  {
    id: "act-f-080a",
    goalId: "f-080",
    authorId: "emp-003",
    date: "2026-04-08",
    type: "progress-update",
    previousValue: 4_800_000,
    newValue: 6_103_000,
    note: "Clock-in/out adoption growing after mobile release.",
  },
  {
    id: "act-f-080b",
    goalId: "f-080",
    authorId: "emp-003",
    date: "2026-02-12",
    type: "progress-update",
    previousValue: 2_000_000,
    newValue: 4_800_000,
    note: "Time-off + shifts bundle proving popular in retail vertical.",
  },

  // ─── f-110 — SLA (progress: 40) ───────────────────────────────────
  {
    id: "act-f-110a",
    goalId: "f-110",
    authorId: "emp-001",
    date: "2026-04-22",
    type: "progress-update",
    previousValue: 30,
    newValue: 40,
    note: "Response time improved after on-call rotation change.",
  },
  {
    id: "act-f-110b",
    goalId: "f-110",
    authorId: "emp-001",
    date: "2026-03-10",
    type: "progress-update",
    previousValue: 15,
    newValue: 30,
    note: "New alerting pipeline reduced MTTR from 4h to 2h.",
  },
  {
    id: "act-f-110c",
    goalId: "f-110",
    authorId: "emp-001",
    date: "2026-01-25",
    type: "progress-update",
    previousValue: 0,
    newValue: 15,
    note: "Baseline SLA dashboard deployed.",
  },

  // ─── f-200 — Ship Goals v1 (progress: 70) ─────────────────────────
  {
    id: "act-f-200a",
    goalId: "f-200",
    authorId: "emp-001",
    date: "2026-05-05",
    type: "progress-update",
    previousValue: 55,
    newValue: 70,
    note: "Detail page, activity timeline, and sidebar charts done.",
    status: "in-progress",
  },
  {
    id: "act-f-200b",
    goalId: "f-200",
    authorId: "emp-001",
    date: "2026-04-15",
    type: "progress-update",
    previousValue: 35,
    newValue: 55,
    note: "List view with presets and company switcher working end-to-end.",
  },
  {
    id: "act-f-200c",
    goalId: "f-200",
    authorId: "emp-001",
    date: "2026-03-01",
    type: "progress-update",
    previousValue: 10,
    newValue: 35,
    note: "Core data model, fixtures, and tree rendering in place.",
  },
  {
    id: "act-f-200d",
    goalId: "f-200",
    authorId: "emp-001",
    date: "2026-01-20",
    type: "progress-update",
    previousValue: 0,
    newValue: 10,
    note: "Kicked off prototype — initial wireframes reviewed with design.",
  },

  // ─── f-042 — Recruitment (progress: 11) ───────────────────────────
  {
    id: "act-f-042a",
    goalId: "f-042",
    authorId: "emp-003",
    date: "2026-03-20",
    type: "progress-update",
    previousValue: 200_000,
    newValue: 530_373,
    note: "ATS add-on uptake accelerating in Southern Europe.",
  },

  // ─── f-043 — Training (progress: 18) ──────────────────────────────
  {
    id: "act-f-043a",
    goalId: "f-043",
    authorId: "emp-007",
    date: "2026-04-02",
    type: "progress-update",
    previousValue: 600_000,
    newValue: 1_173_444,
    note: "LMS-adjacent training bundles picked up by 12 new clients.",
  },

  // ─── f-044 — LMS (progress: 30) ───────────────────────────────────
  {
    id: "act-f-044a",
    goalId: "f-044",
    authorId: "emp-005",
    date: "2026-04-10",
    type: "progress-update",
    previousValue: 400_000,
    newValue: 739_859,
    note: "Content marketplace launch drove net-new logos.",
  },
  {
    id: "act-f-044b",
    goalId: "f-044",
    authorId: "emp-005",
    date: "2026-02-01",
    type: "progress-update",
    previousValue: 0,
    newValue: 400_000,
    note: "Initial batch of LMS contracts migrated from legacy system.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // LEFEBVRE COMPANY GOALS (lf-* IDs)
  // ═══════════════════════════════════════════════════════════════════

  // ─── lf-010 — Acelerar roadmap GenIA-L (progress: 50) ─────────────
  {
    id: "act-lf-010a",
    goalId: "lf-010",
    authorId: "emp-003",
    date: "2026-03-20",
    type: "progress-update",
    previousValue: 25,
    newValue: 50,
    note: "Entregados 3 de los 6 módulos del roadmap — RAG pipeline en producción.",
  },
  {
    id: "act-lf-010b",
    goalId: "lf-010",
    authorId: "emp-003",
    date: "2026-02-10",
    type: "progress-update",
    previousValue: 0,
    newValue: 25,
    note: "Primer módulo de GenIA-L desplegado en entorno staging.",
  },

  // ─── lf-020 — Migración WEB a Cloud (progress: 100) ──────────────
  {
    id: "act-lf-020a",
    goalId: "lf-020",
    authorId: "emp-003",
    date: "2026-03-28",
    type: "progress-update",
    previousValue: 75,
    newValue: 100,
    note: "Último bloque de servicios migrados — 100% en cloud.",
  },
  {
    id: "act-lf-020b",
    goalId: "lf-020",
    authorId: "emp-003",
    date: "2026-02-15",
    type: "progress-update",
    previousValue: 40,
    newValue: 75,
    note: "Migrados los servicios de búsqueda y rendering documental.",
  },

  // ─── lf-030 — Integración IA Procesos internos (progress: 100) ───
  {
    id: "act-lf-030a",
    goalId: "lf-030",
    authorId: "emp-003",
    date: "2026-03-15",
    type: "progress-update",
    previousValue: 70,
    newValue: 100,
    note: "Automatización de clasificación documental completada.",
  },
  {
    id: "act-lf-030b",
    goalId: "lf-030",
    authorId: "emp-003",
    date: "2026-02-01",
    type: "progress-update",
    previousValue: 30,
    newValue: 70,
    note: "Chatbot interno para soporte legal operativo.",
  },

  // ─── lf-040 — Resultado neto del grupo (progress: 100) ───────────
  {
    id: "act-lf-040a",
    goalId: "lf-040",
    authorId: "emp-010",
    date: "2026-03-31",
    type: "progress-update",
    previousValue: 8_200,
    newValue: 10_702,
    note: "Cierre Q1 — resultado neto alcanzado gracias a la contención de costes.",
  },
  {
    id: "act-lf-040b",
    goalId: "lf-040",
    authorId: "emp-010",
    date: "2026-02-28",
    type: "progress-update",
    previousValue: 4_500,
    newValue: 8_200,
    note: "Febrero fuerte — ingresos recurrentes por encima de plan.",
  },

  // ─── lf-050 — 5 casos de uso Ecosistema (progress: 60) ───────────
  {
    id: "act-lf-050a",
    goalId: "lf-050",
    authorId: "emp-004",
    date: "2026-03-10",
    type: "progress-update",
    previousValue: 2,
    newValue: 3,
    note: "Tercer caso de uso documentado: integración fiscal cross-producto.",
  },
  {
    id: "act-lf-050b",
    goalId: "lf-050",
    authorId: "emp-004",
    date: "2026-02-05",
    type: "progress-update",
    previousValue: 0,
    newValue: 2,
    note: "Identificados y documentados los 2 primeros casos: workflow editorial y portal cliente.",
  },

  // ─── lf-060 — Comunicación clara (progress: 100) ──────────────────
  {
    id: "act-lf-060a",
    goalId: "lf-060",
    authorId: "emp-005",
    date: "2026-03-25",
    type: "progress-update",
    previousValue: 60,
    newValue: 100,
    note: "Guía de estilo corporativa aprobada y distribuida a todos los departamentos.",
  },

  // ─── lf-110 — 800k€ ventas BBDD online (progress: 100) ───────────
  {
    id: "act-lf-110a",
    goalId: "lf-110",
    authorId: "emp-008",
    date: "2026-03-30",
    type: "progress-update",
    previousValue: 620_000,
    newValue: 812_000,
    note: "Superado el objetivo — cierre de 3 contratos enterprise en la última semana de Q1.",
  },
  {
    id: "act-lf-110b",
    goalId: "lf-110",
    authorId: "emp-008",
    date: "2026-02-20",
    type: "progress-update",
    previousValue: 340_000,
    newValue: 620_000,
    note: "Campaña de renovaciones anticipadas con descuento generó 280k€ adicionales.",
  },

  // ─── lf-200 — Certificación derecho digital (progress: 40) ───────
  {
    id: "act-lf-200a",
    goalId: "lf-200",
    authorId: "emp-001",
    date: "2026-03-15",
    type: "progress-update",
    previousValue: 15,
    newValue: 40,
    note: "Completados módulos 1-4 de 10. Examen parcial superado.",
  },

  // ─── lf-201 — Migración módulo fiscal (progress: 65) ─────────────
  {
    id: "act-lf-201a",
    goalId: "lf-201",
    authorId: "emp-001",
    date: "2026-04-05",
    type: "progress-update",
    previousValue: 40,
    newValue: 65,
    note: "API de liquidaciones migrada y validada con datos reales.",
  },
  {
    id: "act-lf-201b",
    goalId: "lf-201",
    authorId: "emp-001",
    date: "2026-02-20",
    type: "progress-update",
    previousValue: 10,
    newValue: 40,
    note: "Esquema de datos fiscal migrado; endpoints de consulta operativos.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // GOFIT COMPANY GOALS (gf-* IDs)
  // ═══════════════════════════════════════════════════════════════════

  // ─── gf-015 — NPS Centro 5 (progress: 17) ─────────────────────────
  {
    id: "act-gf-015a",
    goalId: "gf-015",
    authorId: "emp-007",
    date: "2026-03-20",
    type: "progress-update",
    previousValue: 0,
    newValue: 17,
    note: "Primera medición NPS del centro 5 — resultado positivo tras apertura.",
  },

  // ─── gf-200 — Certificación entrenador (progress: 50) ────────────
  {
    id: "act-gf-200a",
    goalId: "gf-200",
    authorId: "emp-001",
    date: "2026-03-20",
    type: "progress-update",
    previousValue: 20,
    newValue: 50,
    note: "Módulos prácticos completados — pendiente examen teórico final.",
  },

  // ─── gf-201 — Dashboard KPIs (progress: 75) ──────────────────────
  {
    id: "act-gf-201a",
    goalId: "gf-201",
    authorId: "emp-001",
    date: "2026-04-10",
    type: "progress-update",
    previousValue: 45,
    newValue: 75,
    note: "Dashboard con métricas de ocupación, bajas y NPS en producción.",
  },
  {
    id: "act-gf-201b",
    goalId: "gf-201",
    authorId: "emp-001",
    date: "2026-02-10",
    type: "progress-update",
    previousValue: 10,
    newValue: 45,
    note: "Conectores de datos de los 3 centros principales operativos.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // PLEXUS COMPANY GOALS (px-* IDs)
  // ═══════════════════════════════════════════════════════════════════

  // ─── px-001 — Objetivos formativos 2026 (progress: 18) ────────────
  {
    id: "act-px-001a",
    goalId: "px-001",
    authorId: "emp-002",
    date: "2026-03-30",
    type: "progress-update",
    previousValue: 8,
    newValue: 18,
    note: "Sergio completó formación ágil; Tania y Lucia avanzando en sus módulos.",
  },

  // ─── px-010 — Formación metodologías ágiles - Sergio (progress: 100)
  {
    id: "act-px-010a",
    goalId: "px-010",
    authorId: "emp-003",
    date: "2026-03-15",
    type: "progress-update",
    previousValue: 60,
    newValue: 100,
    note: "Certificación obtenida — examen superado con nota 92/100.",
  },
  {
    id: "act-px-010b",
    goalId: "px-010",
    authorId: "emp-003",
    date: "2026-02-10",
    type: "progress-update",
    previousValue: 0,
    newValue: 60,
    note: "Completados 6 de 10 módulos del curso.",
  },

  // ─── px-013 — Formación ágiles - Tania (progress: 20) ─────────────
  {
    id: "act-px-013a",
    goalId: "px-013",
    authorId: "emp-004",
    date: "2026-03-20",
    type: "progress-update",
    previousValue: 0,
    newValue: 20,
    note: "Completados módulos 1 y 2 — introducción y Kanban.",
  },

  // ─── px-014 — Formación ágiles - Lucia (progress: 40) ─────────────
  {
    id: "act-px-014a",
    goalId: "px-014",
    authorId: "emp-005",
    date: "2026-04-01",
    type: "progress-update",
    previousValue: 10,
    newValue: 40,
    note: "Completados 4 módulos — Scrum framework y sprint planning.",
  },

  // ─── px-053 — Certificación ISO 9001 (progress: 35) ──────────────
  {
    id: "act-px-053a",
    goalId: "px-053",
    authorId: "emp-006",
    date: "2026-03-25",
    type: "progress-update",
    previousValue: 15,
    newValue: 35,
    note: "Auditoría interna completada — plan de acción para gaps identificados.",
  },

  // ─── px-200 — Certificación Scrum Master (progress: 60) ──────────
  {
    id: "act-px-200a",
    goalId: "px-200",
    authorId: "emp-001",
    date: "2026-03-18",
    type: "progress-update",
    previousValue: 25,
    newValue: 60,
    note: "Simulacros de examen completados — fecha de examen reservada para mayo.",
  },
]

export function getActivityForGoal(goalId: string): GoalActivity[] {
  return goalActivityFixtures
    .filter((a) => a.goalId === goalId)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

/**
 * Build the "progress over time" series for the sidebar chart. Anchors
 * the first point at the goal's start (progress 0) and the last point at
 * the current progress, with intermediate points derived from the
 * activity log if available.
 */
export function getProgressSeriesForGoal(
  goal: GoalRecord
): Array<{ date: string; progress: number }> {
  const activity = [...getActivityForGoal(goal.id)]
    .filter((a) => (a.status ?? "completed") === "completed")
    .reverse()
  if (activity.length === 0) {
    return [
      { date: goal.startDate, progress: 0 },
      { date: goal.dueDate, progress: goal.progress },
    ]
  }

  // Map activity to a 0–100 progress curve. For numeric goals the activity
  // stores raw values, so we normalise against the latest value as 100%.
  const latestNumeric = activity[activity.length - 1].newValue
  const normalize = (n: number) =>
    latestNumeric === 0
      ? 0
      : Math.round((n / latestNumeric) * goal.progress)

  const points = activity.map((a) => ({
    date: a.date,
    progress: normalize(a.newValue),
  }))

  return [{ date: goal.startDate, progress: 0 }, ...points]
}
