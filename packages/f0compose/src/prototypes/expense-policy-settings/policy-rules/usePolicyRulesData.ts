import { useCallback, useState } from "react"

import type {
  AlcoholAllowance,
  AttendeeRequirement,
  ExceptionsRules,
  FlightClass,
  FxSource,
  MealsPolicyDoc,
  MealsRules,
  OverrideRole,
  PerDiemSet,
  PolicyDoc,
  PolicyRulesData,
  ReceiptsRules,
  ReimbursementsRules,
  TravelRules,
} from "./types"

/**
 * State + setters for every Policy-rules section.
 *
 * Mirrors the shape of `usePolicyData` (the core-setup hook) so
 * the two surfaces feel symmetrical: read fields off the hook,
 * call setters to mutate, no persistence (BR-008 \u2014 state
 * resets on refresh).
 *
 * Setter granularity: one per logical field. The Meals slice now
 * exposes per-cap setters typed to the simple cap targets
 * ("team" | "client" | "hospitality") plus two dedicated setters
 * for the nested Solo cap (`setSoloInOfficeCap`,
 * `setSoloTravellingCap`). This keeps the UI's call sites narrow
 * and lets the future agent skill schema map one setter to one
 * tool call without union-typed payloads.
 *
 * Default seeds match the spec exactly (PSPEC \u00a72 \u2014 Meals
 * & hospitality). Numbers in EUR.
 */

/* ============================================================
 * Seeds \u2014 PSPEC defaults
 * ============================================================ */

const seedMeals: MealsRules = {
  caps: {
    solo: { inOffice: 25, travelling: 40 },
    team: 50,
    client: 75,
    hospitality: 100,
  },
  alcohol: {
    allowance: "client-only",
    capPercent: 20,
  },
  attendees: {
    client: "always",
    team: "over-threshold",
    teamMealThreshold: 100,
  },
  notReimbursable: [
    "In-flight purchases (food/drink)",
    "Mini-bar",
    "Room service alcohol",
    "Movies / personal entertainment at hotels",
    "Snacks at airports outside meal times",
  ],
  documentation: {
    itemizedForClientMeals: true,
    itemizedThreshold: 150,
  },
}

/**
 * Seed the OPEN meals model (Direction A) from the fixed `seedMeals` so the
 * rule-list view shows the standard policy before any co-creation. Custom /
 * one-off rules only appear once the user describes them to One.
 */
function deriveMealsPolicy(m: MealsRules): MealsPolicyDoc {
  const alcohol =
    m.alcohol.allowance === "never"
      ? "Not reimbursable"
      : `${m.alcohol.allowance === "client-only" ? "Client meals only" : "Any meal"} · ≤ ${m.alcohol.capPercent}%`
  const attendee = (req: AttendeeRequirement, threshold?: number) =>
    req === "always"
      ? "Always log attendees"
      : req === "never"
        ? "No logging required"
        : `Log when over €${threshold}`
  return {
    groups: [
      {
        title: "Spending caps",
        statements: [
          { subject: "Solo meal — in office", value: `€${m.caps.solo.inOffice}`, note: "" },
          { subject: "Solo meal — travelling", value: `€${m.caps.solo.travelling}`, note: "" },
          { subject: "Team meal", value: `€${m.caps.team}`, note: "" },
          { subject: "Client meal", value: `€${m.caps.client}`, note: "" },
          { subject: "Hospitality / events", value: `€${m.caps.hospitality}`, note: "" },
        ],
      },
      { title: "Alcohol", statements: [{ subject: "Alcohol", value: alcohol, note: "" }] },
      {
        title: "Attendees & logging",
        statements: [
          { subject: "Client meals", value: attendee(m.attendees.client), note: "" },
          {
            subject: "Team meals",
            value: attendee(m.attendees.team, m.attendees.teamMealThreshold),
            note: "",
          },
        ],
      },
      {
        title: "Documentation",
        statements: [
          {
            subject: "Client meals",
            value: m.documentation.itemizedForClientMeals ? "Itemized receipt" : "Standard receipt",
            note: "",
          },
          {
            subject: `Any meal ≥ €${m.documentation.itemizedThreshold}`,
            value: "Itemized receipt",
            note: "",
          },
        ],
      },
      {
        title: "Not reimbursable",
        statements: m.notReimbursable.map((s) => ({ subject: s, value: "", note: "" })),
      },
    ],
  }
}

/** Seed the OPEN Travel / Reimbursements / Receipts models from their fixed
 * seeds, so each rule-list shows the standard policy before any co-creation. */
function deriveTravelPolicy(t: TravelRules): PolicyDoc {
  return {
    groups: [
      {
        title: "Per diems",
        statements: [
          { subject: "Domestic — meals", value: `€${t.perDiems.domestic.meals}`, note: "" },
          { subject: "Domestic — lodging", value: `€${t.perDiems.domestic.lodging}`, note: "" },
          { subject: "Domestic — incidentals", value: `€${t.perDiems.domestic.incidentals}`, note: "" },
          { subject: "International — meals", value: `€${t.perDiems.international.meals}`, note: "" },
          { subject: "International — lodging", value: `€${t.perDiems.international.lodging}`, note: "" },
          { subject: "International — incidentals", value: `€${t.perDiems.international.incidentals}`, note: "" },
        ],
      },
      {
        title: "Booking",
        statements: [
          { subject: "Flights — book ahead", value: `${t.booking.flightAdvanceDays} days`, note: "" },
          { subject: "Highest flight class", value: t.booking.flightClass, note: "" },
          { subject: "Highest hotel rating", value: `${t.booking.hotelMaxStars}★`, note: "" },
        ],
      },
      {
        title: "Mileage",
        statements: [{ subject: "Mileage rate", value: `€${t.mileage.rate} / km`, note: "" }],
      },
    ],
  }
}

function deriveReimbursementsPolicy(r: ReimbursementsRules): PolicyDoc {
  return {
    groups: [
      {
        title: "Timing",
        statements: [
          { subject: "Submission window", value: `${r.timing.submissionWindowDays} days`, note: "" },
          { subject: "Approval SLA", value: `${r.timing.approvalSlaDays} days`, note: "" },
        ],
      },
      {
        title: "Currency",
        statements: [
          { subject: "Default currency", value: r.currency.defaultCurrency, note: "" },
          { subject: "FX rate source", value: r.currency.fxSource, note: "" },
        ],
      },
      {
        title: "Payment methods",
        statements: [
          { subject: "Corporate card", value: r.paymentMethods.corporateCardAutoImport ? "Auto-imported" : "Manual entry", note: "" },
          { subject: "Personal card", value: r.paymentMethods.personalCardManual ? "Manual entry" : "Auto-imported", note: "" },
        ],
      },
    ],
  }
}

function deriveReceiptsPolicy(rc: ReceiptsRules): PolicyDoc {
  return {
    groups: [
      {
        title: "Thresholds",
        statements: [
          { subject: "Receipt required above", value: `€${rc.requiredAbove}`, note: "" },
          { subject: "Itemized receipt above", value: `€${rc.itemizedAbove}`, note: "" },
        ],
      },
      {
        title: "Accepted formats",
        statements: [
          { subject: "Photo", value: rc.formats.photo ? "Allowed" : "Not allowed", note: "" },
          { subject: "PDF", value: rc.formats.pdf ? "Allowed" : "Not allowed", note: "" },
          { subject: "Email forward", value: rc.formats.emailForward ? "Allowed" : "Not allowed", note: "" },
        ],
      },
      {
        title: "Retention",
        statements: [
          { subject: "Keep receipts", value: `${rc.retentionYears} years`, note: "" },
          { subject: "Missing-receipt affidavit", value: rc.affidavitAllowed ? "Allowed" : "Not allowed", note: "" },
        ],
      },
    ],
  }
}

const seedTravel: TravelRules = {
  perDiems: {
    domestic: { meals: 50, lodging: 150, incidentals: 25 },
    international: { meals: 80, lodging: 250, incidentals: 40 },
  },
  booking: {
    flightAdvanceDays: 14,
    flightClass: "economy",
    hotelMaxStars: 4,
  },
  mileage: {
    rate: 0.32,
  },
}

const seedReimbursements: ReimbursementsRules = {
  timing: {
    submissionWindowDays: 30,
    approvalSlaDays: 7,
  },
  currency: {
    defaultCurrency: "EUR",
    fxSource: "expense-date",
  },
  paymentMethods: {
    corporateCardAutoImport: true,
    personalCardManual: true,
  },
}

const seedReceipts: ReceiptsRules = {
  requiredAbove: 25,
  itemizedAbove: 75,
  retentionYears: 7,
  formats: {
    photo: true,
    pdf: true,
    emailForward: false,
  },
  affidavitAllowed: true,
}

const seedExceptions: ExceptionsRules = {
  overrides: {
    approverRole: "finance",
    justificationRequired: true,
  },
  audit: {
    logRetentionDays: 365,
    visibleTo: "admin",
    autoExpiryDays: 90,
  },
}

/* ============================================================
 * Co-creation merge
 * ============================================================ */

/** Normalize a title/subject for fuzzy matching (case- and
 *  punctuation-insensitive) so "Spending caps" == "spending caps". */
function normKey(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
}

/**
 * MERGE a generated DELTA doc into the current section doc instead of
 * REPLACING it.
 *
 * The co-creation tools are stateless \u2014 they generate only the rule(s)
 * the user is adding/changing right now. Replacing wholesale wiped the
 * rest of the section (the reported bug). Instead we merge:
 *   - group matched by normalized title \u2192 merge its statements in
 *   - statement matched by normalized subject \u2192 update value/note (edit)
 *   - otherwise append the statement (add)
 *   - an incoming group with no title match \u2192 appended as a new group
 *
 * Existing groups/statements are preserved, and the merge is idempotent
 * for a repeated identical delta (same subject updates in place rather
 * than duplicating), which also makes it loop-safe.
 */
function mergePolicyDoc(prev: PolicyDoc, incoming: PolicyDoc): PolicyDoc {
  const groups = prev.groups.map((g) => ({
    ...g,
    statements: g.statements.map((s) => ({ ...s })),
  }))
  for (const ig of incoming.groups ?? []) {
    const eg = groups.find((g) => normKey(g.title) === normKey(ig.title))
    if (!eg) {
      groups.push({
        title: ig.title,
        statements: (ig.statements ?? []).map((s) => ({ ...s })),
      })
      continue
    }
    for (const is of ig.statements ?? []) {
      const idx = eg.statements.findIndex(
        (s) => normKey(s.subject) === normKey(is.subject)
      )
      if (idx >= 0) eg.statements[idx] = { ...eg.statements[idx], ...is }
      else eg.statements.push({ ...is })
    }
  }
  return { ...prev, groups }
}

/* ============================================================
 * Hook
 * ============================================================ */

/** Flat cap targets \u2014 i.e. those NOT nested under `solo`. */
export type SimpleMealCapTarget = "team" | "client" | "hospitality"

export type PolicyRulesHandle = PolicyRulesData & {
  // OPEN meals model (Direction A) — the rule-list view renders this, and
  // co-creation (generateMealsPolicy → setMealsPolicy) replaces it wholesale.
  mealsPolicy: MealsPolicyDoc
  applyMealsPolicy: (next: MealsPolicyDoc) => void
  travelPolicy: PolicyDoc
  applyTravelPolicy: (next: PolicyDoc) => void
  reimbursementsPolicy: PolicyDoc
  applyReimbursementsPolicy: (next: PolicyDoc) => void
  receiptsPolicy: PolicyDoc
  applyReceiptsPolicy: (next: PolicyDoc) => void
  // Bulk apply — replace the whole (fixed-model) Meals section at once
  applyMeals: (next: MealsRules) => void
  // Meal caps
  setSoloInOfficeCap: (amount: number) => void
  setSoloTravellingCap: (amount: number) => void
  setMealCap: (type: SimpleMealCapTarget, amount: number) => void
  // Alcohol
  setAlcoholAllowance: (next: AlcoholAllowance) => void
  setAlcoholCapPercent: (percent: number) => void
  // Attendees
  setAttendeeRequirement: (
    target: "client" | "team",
    next: AttendeeRequirement
  ) => void
  setTeamMealThreshold: (amount: number) => void
  // Not-reimbursable list
  addNotReimbursable: (label: string) => void
  removeNotReimbursable: (label: string) => void
  // Documentation
  setItemizedForClientMeals: (next: boolean) => void
  setItemizedThreshold: (amount: number) => void
  // \u2014\u2014\u2014 Travel \u2014\u2014\u2014
  setPerDiem: (
    region: "domestic" | "international",
    field: keyof PerDiemSet,
    amount: number
  ) => void
  setFlightAdvanceDays: (days: number) => void
  setFlightClass: (next: FlightClass) => void
  setHotelMaxStars: (stars: number) => void
  setMileageRate: (rate: number) => void
  // \u2014\u2014\u2014 Reimbursements \u2014\u2014\u2014
  setSubmissionWindowDays: (days: number) => void
  setApprovalSlaDays: (days: number) => void
  setDefaultCurrency: (code: string) => void
  setFxSource: (next: FxSource) => void
  setCorporateCardAutoImport: (next: boolean) => void
  setPersonalCardManual: (next: boolean) => void
  // \u2014\u2014\u2014 Receipts \u2014\u2014\u2014
  setReceiptsRequiredAbove: (amount: number) => void
  setReceiptsItemizedAbove: (amount: number) => void
  setReceiptsRetentionYears: (years: number) => void
  setReceiptFormat: (
    format: "photo" | "pdf" | "emailForward",
    enabled: boolean
  ) => void
  setAffidavitAllowed: (next: boolean) => void
  // \u2014\u2014\u2014 Exceptions \u2014\u2014\u2014
  setOverrideApproverRole: (role: OverrideRole) => void
  setJustificationRequired: (next: boolean) => void
  setLogRetentionDays: (days: number) => void
  setAuditVisibleTo: (role: OverrideRole) => void
  setAutoExpiryDays: (days: number) => void
}

export function usePolicyRulesData(): PolicyRulesHandle {
  const [meals, setMeals] = useState<MealsRules>(seedMeals)
  const [mealsPolicy, setMealsPolicyState] = useState<MealsPolicyDoc>(() =>
    deriveMealsPolicy(seedMeals)
  )
  const [travelPolicy, setTravelPolicyState] = useState<PolicyDoc>(() =>
    deriveTravelPolicy(seedTravel)
  )
  const [reimbursementsPolicy, setReimbursementsPolicyState] = useState<PolicyDoc>(() =>
    deriveReimbursementsPolicy(seedReimbursements)
  )
  const [receiptsPolicy, setReceiptsPolicyState] = useState<PolicyDoc>(() =>
    deriveReceiptsPolicy(seedReceipts)
  )
  const [travel, setTravel] = useState<TravelRules>(seedTravel)
  const [reimbursements, setReimbursements] =
    useState<ReimbursementsRules>(seedReimbursements)
  const [receipts, setReceipts] = useState<ReceiptsRules>(seedReceipts)
  const [exceptions, setExceptions] = useState<ExceptionsRules>(seedExceptions)

  // MERGE the generated delta into the current section (add/update rules
  // in place) rather than replacing wholesale — co-creation generates only
  // the rule(s) being added/changed, so a wholesale swap wiped the rest of
  // the section. See `mergePolicyDoc`.
  const applyMealsPolicy = useCallback((next: MealsPolicyDoc) => {
    setMealsPolicyState((prev) => mergePolicyDoc(prev, next))
  }, [])
  const applyTravelPolicy = useCallback((next: PolicyDoc) => {
    setTravelPolicyState((prev) => mergePolicyDoc(prev, next))
  }, [])
  const applyReimbursementsPolicy = useCallback((next: PolicyDoc) => {
    setReimbursementsPolicyState((prev) => mergePolicyDoc(prev, next))
  }, [])
  const applyReceiptsPolicy = useCallback((next: PolicyDoc) => {
    setReceiptsPolicyState((prev) => mergePolicyDoc(prev, next))
  }, [])

  // Replace the entire (fixed-model) Meals section at once.
  const applyMeals = useCallback((next: MealsRules) => {
    setMeals(next)
  }, [])

  const setSoloInOfficeCap = useCallback((amount: number) => {
    setMeals((prev) => ({
      ...prev,
      caps: {
        ...prev.caps,
        solo: { ...prev.caps.solo, inOffice: amount },
      },
    }))
  }, [])

  const setSoloTravellingCap = useCallback((amount: number) => {
    setMeals((prev) => ({
      ...prev,
      caps: {
        ...prev.caps,
        solo: { ...prev.caps.solo, travelling: amount },
      },
    }))
  }, [])

  const setMealCap = useCallback(
    (type: SimpleMealCapTarget, amount: number) => {
      setMeals((prev) => ({
        ...prev,
        caps: { ...prev.caps, [type]: amount },
      }))
    },
    []
  )

  const setAlcoholAllowance = useCallback((next: AlcoholAllowance) => {
    setMeals((prev) => ({ ...prev, alcohol: { ...prev.alcohol, allowance: next } }))
  }, [])

  const setAlcoholCapPercent = useCallback((percent: number) => {
    setMeals((prev) => ({
      ...prev,
      alcohol: { ...prev.alcohol, capPercent: percent },
    }))
  }, [])

  const setAttendeeRequirement = useCallback(
    (target: "client" | "team", next: AttendeeRequirement) => {
      setMeals((prev) => ({
        ...prev,
        attendees: { ...prev.attendees, [target]: next },
      }))
    },
    []
  )

  const setTeamMealThreshold = useCallback((amount: number) => {
    setMeals((prev) => ({
      ...prev,
      attendees: { ...prev.attendees, teamMealThreshold: amount },
    }))
  }, [])

  const addNotReimbursable = useCallback((label: string) => {
    const trimmed = label.trim()
    if (trimmed === "") return
    setMeals((prev) => {
      if (prev.notReimbursable.includes(trimmed)) return prev
      return { ...prev, notReimbursable: [...prev.notReimbursable, trimmed] }
    })
  }, [])

  const removeNotReimbursable = useCallback((label: string) => {
    setMeals((prev) => ({
      ...prev,
      notReimbursable: prev.notReimbursable.filter((x) => x !== label),
    }))
  }, [])

  const setItemizedForClientMeals = useCallback((next: boolean) => {
    setMeals((prev) => ({
      ...prev,
      documentation: { ...prev.documentation, itemizedForClientMeals: next },
    }))
  }, [])

  const setItemizedThreshold = useCallback((amount: number) => {
    setMeals((prev) => ({
      ...prev,
      documentation: { ...prev.documentation, itemizedThreshold: amount },
    }))
  }, [])

  /* ------------ Travel ------------ */

  const setPerDiem = useCallback(
    (
      region: "domestic" | "international",
      field: keyof PerDiemSet,
      amount: number
    ) => {
      setTravel((prev) => ({
        ...prev,
        perDiems: {
          ...prev.perDiems,
          [region]: { ...prev.perDiems[region], [field]: amount },
        },
      }))
    },
    []
  )

  const setFlightAdvanceDays = useCallback((days: number) => {
    setTravel((prev) => ({
      ...prev,
      booking: { ...prev.booking, flightAdvanceDays: days },
    }))
  }, [])

  const setFlightClass = useCallback((next: FlightClass) => {
    setTravel((prev) => ({
      ...prev,
      booking: { ...prev.booking, flightClass: next },
    }))
  }, [])

  const setHotelMaxStars = useCallback((stars: number) => {
    setTravel((prev) => ({
      ...prev,
      booking: { ...prev.booking, hotelMaxStars: stars },
    }))
  }, [])

  const setMileageRate = useCallback((rate: number) => {
    setTravel((prev) => ({ ...prev, mileage: { rate } }))
  }, [])

  /* ------------ Reimbursements ------------ */

  const setSubmissionWindowDays = useCallback((days: number) => {
    setReimbursements((prev) => ({
      ...prev,
      timing: { ...prev.timing, submissionWindowDays: days },
    }))
  }, [])

  const setApprovalSlaDays = useCallback((days: number) => {
    setReimbursements((prev) => ({
      ...prev,
      timing: { ...prev.timing, approvalSlaDays: days },
    }))
  }, [])

  const setDefaultCurrency = useCallback((code: string) => {
    setReimbursements((prev) => ({
      ...prev,
      currency: { ...prev.currency, defaultCurrency: code },
    }))
  }, [])

  const setFxSource = useCallback((next: FxSource) => {
    setReimbursements((prev) => ({
      ...prev,
      currency: { ...prev.currency, fxSource: next },
    }))
  }, [])

  const setCorporateCardAutoImport = useCallback((next: boolean) => {
    setReimbursements((prev) => ({
      ...prev,
      paymentMethods: { ...prev.paymentMethods, corporateCardAutoImport: next },
    }))
  }, [])

  const setPersonalCardManual = useCallback((next: boolean) => {
    setReimbursements((prev) => ({
      ...prev,
      paymentMethods: { ...prev.paymentMethods, personalCardManual: next },
    }))
  }, [])

  /* ------------ Receipts ------------ */

  const setReceiptsRequiredAbove = useCallback((amount: number) => {
    setReceipts((prev) => ({ ...prev, requiredAbove: amount }))
  }, [])

  const setReceiptsItemizedAbove = useCallback((amount: number) => {
    setReceipts((prev) => ({ ...prev, itemizedAbove: amount }))
  }, [])

  const setReceiptsRetentionYears = useCallback((years: number) => {
    setReceipts((prev) => ({ ...prev, retentionYears: years }))
  }, [])

  const setReceiptFormat = useCallback(
    (format: "photo" | "pdf" | "emailForward", enabled: boolean) => {
      setReceipts((prev) => ({
        ...prev,
        formats: { ...prev.formats, [format]: enabled },
      }))
    },
    []
  )

  const setAffidavitAllowed = useCallback((next: boolean) => {
    setReceipts((prev) => ({ ...prev, affidavitAllowed: next }))
  }, [])

  /* ------------ Exceptions ------------ */

  const setOverrideApproverRole = useCallback((role: OverrideRole) => {
    setExceptions((prev) => ({
      ...prev,
      overrides: { ...prev.overrides, approverRole: role },
    }))
  }, [])

  const setJustificationRequired = useCallback((next: boolean) => {
    setExceptions((prev) => ({
      ...prev,
      overrides: { ...prev.overrides, justificationRequired: next },
    }))
  }, [])

  const setLogRetentionDays = useCallback((days: number) => {
    setExceptions((prev) => ({
      ...prev,
      audit: { ...prev.audit, logRetentionDays: days },
    }))
  }, [])

  const setAuditVisibleTo = useCallback((role: OverrideRole) => {
    setExceptions((prev) => ({
      ...prev,
      audit: { ...prev.audit, visibleTo: role },
    }))
  }, [])

  const setAutoExpiryDays = useCallback((days: number) => {
    setExceptions((prev) => ({
      ...prev,
      audit: { ...prev.audit, autoExpiryDays: days },
    }))
  }, [])

  return {
    meals,
    travel,
    reimbursements,
    receipts,
    exceptions,
    mealsPolicy,
    applyMealsPolicy,
    travelPolicy,
    applyTravelPolicy,
    reimbursementsPolicy,
    applyReimbursementsPolicy,
    receiptsPolicy,
    applyReceiptsPolicy,
    applyMeals,
    setSoloInOfficeCap,
    setSoloTravellingCap,
    setMealCap,
    setAlcoholAllowance,
    setAlcoholCapPercent,
    setAttendeeRequirement,
    setTeamMealThreshold,
    addNotReimbursable,
    removeNotReimbursable,
    setItemizedForClientMeals,
    setItemizedThreshold,
    setPerDiem,
    setFlightAdvanceDays,
    setFlightClass,
    setHotelMaxStars,
    setMileageRate,
    setSubmissionWindowDays,
    setApprovalSlaDays,
    setDefaultCurrency,
    setFxSource,
    setCorporateCardAutoImport,
    setPersonalCardManual,
    setReceiptsRequiredAbove,
    setReceiptsItemizedAbove,
    setReceiptsRetentionYears,
    setReceiptFormat,
    setAffidavitAllowed,
    setOverrideApproverRole,
    setJustificationRequired,
    setLogRetentionDays,
    setAuditVisibleTo,
    setAutoExpiryDays,
  }
}
