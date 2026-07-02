export type AllowanceUnit = "working days" | "working hours"

/**
 * How an allowance fills up over the cycle. `flat` is the legacy single-grant
 * behaviour; the others are the new flexible accrual rules. `derived` covers
 * allowances that are never accrued (e.g. compensation time) — accrual config
 * is hidden/disabled for these.
 */
export type AccrualType = "flat" | "monthly" | "per-period" | "tenure"

export type Allowance = {
  id: string
  name: string
  amount: number
  unit: AllowanceUnit
  unlimited?: boolean
  /** Defaults to "flat" (no accrual) when omitted. */
  accrual?: AccrualType
  /** Ceiling reached over time, used by tenure-based accrual ("up to N"). */
  accrualMax?: number
  /** Mirrors the right-hand cards on the policy detail. */
  description?: string
}

export type Policy = {
  id: string
  name: string
  employees: number
  isDefault?: boolean
  description?: string
  allowances: Allowance[]
}

/**
 * Standard counter set for a policy, mirroring the reference screenshot:
 * Vacaciones (accrual varies per policy), Otros permisos (flat),
 * Horas Médicas (per-period, measured in hours) and Compensación por tiempo
 * adicional (unlimited / derived — not accrual-eligible).
 */
function counters(
  vacaciones: number,
  vacAccrual: AccrualType,
  vacMax?: number
): Allowance[] {
  return [
    {
      id: "vacaciones",
      name: "Vacaciones",
      amount: vacaciones,
      unit: "working days",
      accrual: vacAccrual,
      accrualMax: vacMax,
    },
    {
      id: "otros-permisos",
      name: "Otros permisos",
      amount: 5,
      unit: "working days",
      accrual: "flat",
    },
    {
      id: "horas-medicas",
      name: "Horas Médicas",
      amount: 16,
      unit: "working hours",
      accrual: "per-period",
    },
    {
      id: "compensacion",
      name: "Compensación por tiempo adicional",
      amount: 0,
      unit: "working hours",
      unlimited: true,
    },
  ]
}

export const policies: Policy[] = [
  {
    id: "clubs",
    name: "Política para Clubs",
    employees: 1005,
    isDefault: true,
    description: "Default policy for club staff.",
    allowances: counters(22, "tenure", 25),
  },
  {
    id: "head-office",
    name: "Política para Head Office",
    employees: 139,
    description: "Head office staff.",
    allowances: counters(23, "monthly"),
  },
  {
    id: "clubs-rota-fin-de-semana",
    name: "Política para Clubs (ROTA en fin de semana)",
    employees: 2,
    description: "Club staff with weekend rota.",
    allowances: counters(22, "monthly"),
  },
  {
    id: "clubs-dias-naturales",
    name: "Política para Clubs (Días Naturales)",
    employees: 12,
    description: "Club staff accruing on calendar days.",
    allowances: counters(30, "flat"),
  },
  {
    id: "5-dias-trabajados",
    name: "Política 5 días trabajados",
    employees: 282,
    description: "5 working days per week.",
    allowances: counters(22, "monthly"),
  },
  {
    id: "4-dias-trabajados",
    name: "Política 4 días trabajados",
    employees: 61,
    description: "4 working days per week.",
    allowances: counters(18, "monthly"),
  },
  {
    id: "3-dias-trabajados",
    name: "Política 3 días trabajados",
    employees: 28,
    description: "3 working days per week.",
    allowances: counters(13, "monthly"),
  },
  {
    id: "2-dias-trabajados",
    name: "Política 2 días trabajados",
    employees: 21,
    description: "2 working days per week.",
    allowances: counters(9, "monthly"),
  },
  {
    id: "1-dia-trabajado",
    name: "Política 1 día trabajado",
    employees: 4,
    description: "1 working day per week.",
    allowances: counters(4, "monthly"),
  },
]

/**
 * Summary line for an allowance row. `primary` keeps the prominent number;
 * `descriptor` is the muted accrual qualifier appended after a "·" (or omitted
 * for flat grants and unlimited allowances, where accrual does not apply).
 */
export function accrualSummary(a: Allowance): {
  primary: string
  descriptor?: string
} {
  if (a.unlimited) return { primary: "Unlimited hours" }
  const base = `${a.amount} ${a.unit}`
  switch (a.accrual) {
    case "monthly":
      return { primary: base, descriptor: "monthly accrual" }
    case "per-period":
      return { primary: base, descriptor: "per-period accrual" }
    case "tenure":
      return {
        primary: `Up to ${a.accrualMax ?? a.amount} ${a.unit}`,
        descriptor: "by tenure",
      }
    case "flat":
    default:
      return { primary: base }
  }
}

export function getPolicy(id: string): Policy | undefined {
  return policies.find((p) => p.id === id)
}

export function getAllowance(
  policyId: string,
  allowanceId: string
): { policy: Policy; allowance: Allowance } | undefined {
  const policy = getPolicy(policyId)
  if (!policy) return undefined
  const allowance = policy.allowances.find((a) => a.id === allowanceId)
  if (!allowance) return undefined
  return { policy, allowance }
}
