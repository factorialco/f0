// FUNDAE deadlines per Orden TMS/368/2019 and operational practice:
//
// - Inicio (IIF): must be communicated BEFORE the group's start date.
//   Strict rule: until 23:59 of the day before fechaInicio.
//   After that, the group is no longer bonifiable.
//
// - Fin (Finalización): must be communicated within 2 natural months
//   after the group's end date.
//   After that, the group cannot be bonified in payroll.
//
// - Acción formativa: no hard deadline. Must exist in FUNDAE before
//   any of its groups communicates inicio, but no time pressure on
//   the alta itself.

export const DIAS_ANTES_INICIO = 1
export const MESES_DESPUES_FIN = 2

export type UrgencyLevel = "info" | "warning" | "critical" | "expired"

export type DeadlineInfo = {
  /** The official FUNDAE deadline date (last day you can submit) */
  deadlineDate: Date
  /** Days from today until the deadline (negative = past) */
  daysRemaining: number
  /** Urgency bucket for UI styling */
  level: UrgencyLevel
  /** Long human description, suitable for an alert body */
  message: string
  /** Short label, e.g. "3 días" or "Vencido" */
  shortMessage: string
  /** Formatted deadline date, e.g. "27 de febrero de 2026" */
  formattedDeadline: string
}

// ── Date helpers ─────────────────────────────────────────────────────────

/** Parse "DD/MM/AAAA" Spanish format. Returns null if invalid. */
export function parseSpanishDate(input: string): Date | null {
  const match = input.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
  if (!match) return null
  const day = Number(match[1])
  const month = Number(match[2])
  const year = Number(match[3])
  const d = new Date(year, month - 1, day)
  if (
    d.getFullYear() !== year ||
    d.getMonth() !== month - 1 ||
    d.getDate() !== day
  ) {
    return null
  }
  return d
}

export function formatSpanishDate(d: Date): string {
  return d.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function diffInDays(from: Date, to: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24
  const fromUTC = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate())
  const toUTC = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate())
  return Math.floor((toUTC - fromUTC) / msPerDay)
}

function addDays(d: Date, days: number): Date {
  const next = new Date(d)
  next.setDate(next.getDate() + days)
  return next
}

/** Add natural months (calendar months, not 30-day approximations). */
function addMonths(d: Date, months: number): Date {
  const next = new Date(d)
  const targetMonth = next.getMonth() + months
  next.setMonth(targetMonth)
  // Handle month overflow (e.g., Jan 31 + 1 month → Feb 28)
  if (next.getMonth() !== ((targetMonth % 12) + 12) % 12) {
    next.setDate(0)
  }
  return next
}

function pluralize(n: number, singular: string, plural: string): string {
  return `${n} ${n === 1 ? singular : plural}`
}

// ── Inicio deadline (1 día natural antes del inicio del grupo) ──────────

export function computeInicioDeadline(
  fechaInicio: string,
  today: Date = new Date()
): DeadlineInfo | null {
  const startDate = parseSpanishDate(fechaInicio)
  if (!startDate) return null

  const deadlineDate = addDays(startDate, -DIAS_ANTES_INICIO)
  const daysRemaining = diffInDays(today, deadlineDate)
  const formattedDeadline = formatSpanishDate(deadlineDate)

  if (daysRemaining < 0) {
    return {
      deadlineDate,
      daysRemaining,
      level: "expired",
      message: `Plazo FUNDAE vencido. La comunicación de inicio debió enviarse antes del ${formattedDeadline}. El grupo puede no ser bonificable.`,
      shortMessage: "Vencido",
      formattedDeadline,
    }
  }
  if (daysRemaining === 0) {
    return {
      deadlineDate,
      daysRemaining,
      level: "critical",
      message: `Último día de plazo: hoy es la fecha límite FUNDAE para comunicar el inicio (${formattedDeadline}).`,
      shortMessage: "Hoy vence",
      formattedDeadline,
    }
  }
  if (daysRemaining <= 2) {
    return {
      deadlineDate,
      daysRemaining,
      level: "critical",
      message: `Plazo FUNDAE crítico: ${pluralize(daysRemaining, "día", "días")} para comunicar el inicio (hasta el ${formattedDeadline}).`,
      shortMessage: `${daysRemaining}d`,
      formattedDeadline,
    }
  }
  if (daysRemaining <= 7) {
    return {
      deadlineDate,
      daysRemaining,
      level: "warning",
      message: `Te ${daysRemaining === 1 ? "queda" : "quedan"} ${pluralize(daysRemaining, "día", "días")} para comunicar el inicio (plazo FUNDAE: ${formattedDeadline}).`,
      shortMessage: `${daysRemaining}d`,
      formattedDeadline,
    }
  }
  return {
    deadlineDate,
    daysRemaining,
    level: "info",
    message: `Plazo FUNDAE para comunicar el inicio: hasta el ${formattedDeadline} (${daysRemaining} días).`,
    shortMessage: `${daysRemaining}d`,
    formattedDeadline,
  }
}

// ── Fin deadline (2 meses naturales después del fin del grupo) ──────────

export function computeFinDeadline(
  fechaFin: string,
  today: Date = new Date()
): DeadlineInfo | null {
  const endDate = parseSpanishDate(fechaFin)
  if (!endDate) return null

  const deadlineDate = addMonths(endDate, MESES_DESPUES_FIN)
  const daysRemaining = diffInDays(today, deadlineDate)
  const formattedDeadline = formatSpanishDate(deadlineDate)

  if (daysRemaining < 0) {
    return {
      deadlineDate,
      daysRemaining,
      level: "expired",
      message: `Plazo FUNDAE vencido. La comunicación de fin debió enviarse antes del ${formattedDeadline}.`,
      shortMessage: "Vencido",
      formattedDeadline,
    }
  }
  if (daysRemaining <= 7) {
    return {
      deadlineDate,
      daysRemaining,
      level: "critical",
      message: `Plazo FUNDAE crítico: ${pluralize(daysRemaining, "día", "días")} para comunicar el fin (hasta el ${formattedDeadline}).`,
      shortMessage: `${daysRemaining}d`,
      formattedDeadline,
    }
  }
  if (daysRemaining <= 30) {
    return {
      deadlineDate,
      daysRemaining,
      level: "warning",
      message: `Te ${daysRemaining === 1 ? "queda" : "quedan"} ${pluralize(daysRemaining, "día", "días")} para comunicar el fin (plazo FUNDAE: ${formattedDeadline}).`,
      shortMessage: `${daysRemaining}d`,
      formattedDeadline,
    }
  }
  return {
    deadlineDate,
    daysRemaining,
    level: "info",
    message: `Plazo FUNDAE para comunicar el fin: hasta el ${formattedDeadline} (${daysRemaining} días, 2 meses tras el fin del grupo).`,
    shortMessage: `${daysRemaining}d`,
    formattedDeadline,
  }
}

// ── Variant mapping for F0Alert ──────────────────────────────────────────

export function urgencyToAlertVariant(
  level: UrgencyLevel
): "info" | "warning" | "critical" {
  switch (level) {
    case "critical":
    case "expired":
      return "critical"
    case "warning":
      return "warning"
    case "info":
      return "info"
  }
}
