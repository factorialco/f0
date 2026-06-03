import { useCallback, useState } from "react"

import type {
  AlcoholAllowance,
  AttendeeRequirement,
  ExceptionsRules,
  FlightClass,
  FxSource,
  MealsRules,
  OverrideRole,
  PerDiemSet,
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
 * Hook
 * ============================================================ */

/** Flat cap targets \u2014 i.e. those NOT nested under `solo`. */
export type SimpleMealCapTarget = "team" | "client" | "hospitality"

export type PolicyRulesHandle = PolicyRulesData & {
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
  const [travel, setTravel] = useState<TravelRules>(seedTravel)
  const [reimbursements, setReimbursements] =
    useState<ReimbursementsRules>(seedReimbursements)
  const [receipts, setReceipts] = useState<ReceiptsRules>(seedReceipts)
  const [exceptions, setExceptions] = useState<ExceptionsRules>(seedExceptions)

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
