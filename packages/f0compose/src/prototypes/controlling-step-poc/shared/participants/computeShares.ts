import type { Participant, ExpenseSplit, SplitMode } from "./types"

/**
 * Round to 2 decimals using banker-safe rounding for currency.
 * `Math.round(n * 100) / 100` is good enough for prototype scale;
 * we never sum more than ~30 participants in any seeded fixture.
 */
function round2(n: number): number {
  return Math.round(n * 100) / 100
}

/**
 * People count = owner (always 1) + every participant entry, where
 * each external entry counts as one head. Internal-declined
 * participants are EXCLUDED from the headcount because they didn't
 * attend (R3). Internal-pending counts as attending until they
 * decline — submitter still pays for them up-front.
 */
export function countPeople(participants: Participant[]): number {
  let n = 1 // owner
  for (const p of participants) {
    if (p.kind === "external") {
      n += 1
      continue
    }
    if (p.confirmation === "declined") continue
    n += 1
  }
  return n
}

/**
 * Build an "equal" split's `shares` array for the non-owner
 * participants. Each share is `receiptTotal / peopleCount` rounded
 * to 2dp; the rounding remainder is absorbed by the LAST share so
 * the sum of shares + owner's implicit share equals receiptTotal
 * exactly (R5).
 *
 * Order of `shares` matches the order of `participants`. The
 * external aggregate row is appended LAST with `employeeId: null`
 * and its amount is `externalCount * perPersonShare` adjusted for
 * the residual.
 *
 * NOTE: This helper computes shares for participants ONLY. The
 * owner's share is implicit in our model — see `ownerImplicitShare`
 * below. Declined internals are skipped entirely (no share, no
 * row).
 */
export function buildEqualShares(
  receiptTotal: number,
  participants: Participant[]
): ExpenseSplit["shares"] {
  const people = countPeople(participants)
  if (people <= 1) return []

  const perPerson = round2(receiptTotal / people)

  // First pass: build raw share entries in participant order,
  // skipping declined internals. Externals are merged into a single
  // aggregate row at the end (employeeId: null).
  const internalShares: ExpenseSplit["shares"] = []
  let externalCount = 0
  for (const p of participants) {
    if (p.kind === "external") {
      externalCount += 1
      continue
    }
    if (p.confirmation === "declined") continue
    internalShares.push({ employeeId: p.employeeId, amount: perPerson })
  }

  const shares: ExpenseSplit["shares"] = [...internalShares]
  if (externalCount > 0) {
    shares.push({
      employeeId: null,
      amount: round2(externalCount * perPerson),
    })
  }

  // Reconcile the residual onto the LAST share so the totals match
  // the receipt to the cent. Residual = receipt - owner - sumShares.
  const ownerShare = perPerson
  const sumShares = shares.reduce((s, x) => s + x.amount, 0)
  const residual = round2(receiptTotal - ownerShare - sumShares)
  if (residual !== 0 && shares.length > 0) {
    const last = shares[shares.length - 1]
    shares[shares.length - 1] = {
      ...last,
      amount: round2(last.amount + residual),
    }
  }

  return shares
}

/**
 * Owner's implicit share = receiptTotal - sum(shares). For equal
 * splits this equals `receiptTotal / peopleCount` (to the cent);
 * for by-amount splits this floats to whatever the submitter typed.
 * Always derived, never stored.
 */
export function ownerImplicitShare(
  receiptTotal: number,
  shares: ExpenseSplit["shares"]
): number {
  const sum = shares.reduce((s, x) => s + x.amount, 0)
  return round2(receiptTotal - sum)
}

/**
 * Compute reconciliation for the breakdown footer. Tolerance is 1
 * cent (we treat |delta| <= 0.01 as reconciled to absorb float
 * jitter). `delta` is signed: positive = sum exceeds receipt;
 * negative = sum below receipt.
 */
export function reconcile(
  receiptTotal: number,
  shares: ExpenseSplit["shares"]
): {
  receiptTotal: number
  sumOfShares: number
  delta: number
  isReconciled: boolean
} {
  // "Sum of shares" in the UI footer means owner + non-owner shares.
  const owner = ownerImplicitShare(receiptTotal, shares)
  const nonOwner = shares.reduce((s, x) => s + x.amount, 0)
  const sumOfShares = round2(owner + nonOwner)
  const delta = round2(sumOfShares - receiptTotal)
  return {
    receiptTotal: round2(receiptTotal),
    sumOfShares,
    delta,
    isReconciled: Math.abs(delta) <= 0.01,
  }
}

/**
 * Recompute shares when something changed (receipt total,
 * participant added/removed, confirmation flipped). For
 * `mode === "equal"` we regenerate from scratch (R5). For
 * `mode === "by-amount"` we PRESERVE the user's typed amounts on
 * still-present participants and only add/remove rows as the
 * participants list changes — declined participants drop out, new
 * participants enter with amount=0 (forces a manual decision).
 */
export function recomputeShares(args: {
  mode: SplitMode
  receiptTotal: number
  participants: Participant[]
  previousShares: ExpenseSplit["shares"]
}): ExpenseSplit["shares"] {
  const { mode, receiptTotal, participants, previousShares } = args

  if (mode === "equal") {
    return buildEqualShares(receiptTotal, participants)
  }

  // by-amount: preserve typed amounts where the participant still
  // exists and isn't declined; insert new entries with amount=0.
  const byKey = new Map<string, number>()
  for (const s of previousShares) {
    byKey.set(s.employeeId ?? "__external__", s.amount)
  }

  const next: ExpenseSplit["shares"] = []
  let externalCount = 0
  for (const p of participants) {
    if (p.kind === "external") {
      externalCount += 1
      continue
    }
    if (p.confirmation === "declined") continue
    next.push({
      employeeId: p.employeeId,
      amount: byKey.get(p.employeeId) ?? 0,
    })
  }
  if (externalCount > 0) {
    next.push({
      employeeId: null,
      amount: byKey.get("__external__") ?? 0,
    })
  }
  return next
}
