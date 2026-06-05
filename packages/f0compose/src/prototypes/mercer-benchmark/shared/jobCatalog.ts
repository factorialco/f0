/**
 * Internal job catalog — mock data representing a mid-size company's roles.
 * Each "role" is a specific title + level combination (e.g. "Software Engineer · Senior").
 * Roles are grouped by Function → Family for the org chart and nested table.
 *
 * Swap this file when the real catalog arrives.
 */
import type { InternalRole } from "./types"

export const jobCatalog: InternalRole[] = [
  // ── Engineering / Software Development ─────────────────────────────
  { id: "eng-sw-junior", title: "Software Engineer", function: "Engineering", family: "Software Development", level: "Junior", status: "unmapped" },
  { id: "eng-sw-mid", title: "Software Engineer", function: "Engineering", family: "Software Development", level: "Mid", status: "suggested", suggestedMercerCode: "CCA.02.001.P30", confidence: 0.88 },
  { id: "eng-sw-senior", title: "Software Engineer", function: "Engineering", family: "Software Development", level: "Senior", status: "suggested", suggestedMercerCode: "CCA.02.001.P40", confidence: 0.95 },
  { id: "eng-sw-staff", title: "Software Engineer", function: "Engineering", family: "Software Development", level: "Staff", status: "suggested", suggestedMercerCode: "CCA.02.001.P50", confidence: 0.92 },
  { id: "eng-sw-principal", title: "Software Engineer", function: "Engineering", family: "Software Development", level: "Principal", status: "unmapped" },

  // ── Engineering / Engineering Leadership ────────────────────────────
  { id: "eng-lead-mgr", title: "Engineering Manager", function: "Engineering", family: "Engineering Leadership", level: "Manager", status: "unmapped" },
  { id: "eng-lead-dir", title: "Engineering Director", function: "Engineering", family: "Engineering Leadership", level: "Director", status: "unmapped" },
  { id: "eng-lead-vp", title: "VP of Engineering", function: "Engineering", family: "Engineering Leadership", level: "VP", status: "unmapped" },

  // ── Engineering / Quality Assurance ─────────────────────────────────
  { id: "eng-qa-mid", title: "QA Engineer", function: "Engineering", family: "Quality Assurance", level: "Mid", status: "unmapped" },
  { id: "eng-qa-senior", title: "QA Engineer", function: "Engineering", family: "Quality Assurance", level: "Senior", status: "unmapped" },
  { id: "eng-qa-lead", title: "QA Engineer", function: "Engineering", family: "Quality Assurance", level: "Lead", status: "unmapped" },

  // ── Engineering / Infrastructure ────────────────────────────────────
  { id: "eng-infra-mid", title: "DevOps Engineer", function: "Engineering", family: "Infrastructure", level: "Mid", status: "unmapped" },
  { id: "eng-infra-senior", title: "DevOps Engineer", function: "Engineering", family: "Infrastructure", level: "Senior", status: "unmapped" },

  // ── Engineering / Data Engineering ──────────────────────────────────
  { id: "eng-data-mid", title: "Data Engineer", function: "Engineering", family: "Data Engineering", level: "Mid", status: "unmapped" },
  { id: "eng-data-senior", title: "Data Engineer", function: "Engineering", family: "Data Engineering", level: "Senior", status: "unmapped" },

  // ── Product & Design / Product Management ──────────────────────────
  { id: "prod-pm-mid", title: "Product Manager", function: "Product & Design", family: "Product Management", level: "Mid", status: "unmapped" },
  { id: "prod-pm-senior", title: "Product Manager", function: "Product & Design", family: "Product Management", level: "Senior", status: "suggested", suggestedMercerCode: "SMP.04.015.P40", confidence: 0.82 },
  { id: "prod-pm-dir", title: "Product Manager", function: "Product & Design", family: "Product Management", level: "Director", status: "unmapped" },
  { id: "prod-pm-vp", title: "VP of Product", function: "Product & Design", family: "Product Management", level: "VP", status: "unmapped" },

  // ── Product & Design / Design ──────────────────────────────────────
  { id: "prod-des-mid", title: "Product Designer", function: "Product & Design", family: "Design", level: "Mid", status: "unmapped" },
  { id: "prod-des-senior", title: "Product Designer", function: "Product & Design", family: "Design", level: "Senior", status: "unmapped" },
  { id: "prod-des-lead", title: "Product Designer", function: "Product & Design", family: "Design", level: "Lead", status: "unmapped" },

  // ── Product & Design / UX Research ─────────────────────────────────
  { id: "prod-ux-mid", title: "UX Researcher", function: "Product & Design", family: "UX Research", level: "Mid", status: "unmapped" },
  { id: "prod-ux-senior", title: "UX Researcher", function: "Product & Design", family: "UX Research", level: "Senior", status: "unmapped" },

  // ── Sales / Account Management ─────────────────────────────────────
  { id: "sales-ae-junior", title: "Account Executive", function: "Sales", family: "Account Management", level: "Junior", status: "unmapped" },
  { id: "sales-ae-mid", title: "Account Executive", function: "Sales", family: "Account Management", level: "Mid", status: "unmapped" },
  { id: "sales-ae-senior", title: "Account Executive", function: "Sales", family: "Account Management", level: "Senior", status: "suggested", suggestedMercerCode: "SMP.02.001.P40", confidence: 0.78 },

  // ── Sales / Sales Leadership ───────────────────────────────────────
  { id: "sales-lead-mgr", title: "Sales Manager", function: "Sales", family: "Sales Leadership", level: "Manager", status: "unmapped" },
  { id: "sales-lead-dir", title: "Sales Director", function: "Sales", family: "Sales Leadership", level: "Director", status: "unmapped" },
  { id: "sales-lead-vp", title: "VP of Sales", function: "Sales", family: "Sales Leadership", level: "VP", status: "unmapped" },

  // ── Sales / Business Development ───────────────────────────────────
  { id: "sales-bdr-junior", title: "Sales Development Rep", function: "Sales", family: "Business Development", level: "Junior", status: "unmapped" },
  { id: "sales-bdr-mid", title: "Sales Development Rep", function: "Sales", family: "Business Development", level: "Mid", status: "unmapped" },

  // ── Marketing / Content ────────────────────────────────────────────
  { id: "mkt-content-mid", title: "Content Marketer", function: "Marketing", family: "Content", level: "Mid", status: "unmapped" },
  { id: "mkt-content-mgr", title: "Content Marketing Manager", function: "Marketing", family: "Content", level: "Manager", status: "suggested", suggestedMercerCode: "DAW.07.006.M30", confidence: 0.85 },

  // ── Marketing / Growth ─────────────────────────────────────────────
  { id: "mkt-growth-mid", title: "Growth Marketer", function: "Marketing", family: "Growth", level: "Mid", status: "unmapped" },
  { id: "mkt-growth-senior", title: "Growth Marketer", function: "Marketing", family: "Growth", level: "Senior", status: "unmapped" },

  // ── Marketing / Marketing Leadership ───────────────────────────────
  { id: "mkt-lead-dir", title: "Marketing Director", function: "Marketing", family: "Marketing Leadership", level: "Director", status: "unmapped" },
  { id: "mkt-lead-vp", title: "VP of Marketing", function: "Marketing", family: "Marketing Leadership", level: "VP", status: "unmapped" },

  // ── Finance / Financial Analysis ───────────────────────────────────
  { id: "fin-analyst-mid", title: "Financial Analyst", function: "Finance", family: "Financial Analysis", level: "Mid", status: "unmapped" },
  { id: "fin-analyst-senior", title: "Financial Analyst", function: "Finance", family: "Financial Analysis", level: "Senior", status: "suggested", suggestedMercerCode: "CCA.04.006.M40", confidence: 0.91 },

  // ── Finance / Finance Leadership ───────────────────────────────────
  { id: "fin-lead-dir", title: "Finance Director", function: "Finance", family: "Finance Leadership", level: "Director", status: "unmapped" },
  { id: "fin-lead-cfo", title: "CFO", function: "Finance", family: "Finance Leadership", level: "C-Level", status: "unmapped" },

  // ── Finance / Payroll ──────────────────────────────────────────────
  { id: "fin-payroll-spec", title: "Payroll Specialist", function: "Finance", family: "Payroll", level: "Mid", status: "unmapped" },
  { id: "fin-payroll-mgr", title: "Payroll Manager", function: "Finance", family: "Payroll", level: "Manager", status: "unmapped" },

  // ── People / HR Business Partnering ────────────────────────────────
  { id: "hr-bp-mid", title: "HR Business Partner", function: "People", family: "HR Business Partnering", level: "Mid", status: "unmapped" },
  { id: "hr-bp-senior", title: "HR Business Partner", function: "People", family: "HR Business Partnering", level: "Senior", status: "suggested", suggestedMercerCode: "CCA.02.001.M40", confidence: 0.87 },

  // ── People / Talent Acquisition ────────────────────────────────────
  { id: "hr-ta-mid", title: "Recruiter", function: "People", family: "Talent Acquisition", level: "Mid", status: "unmapped" },
  { id: "hr-ta-senior", title: "Recruiter", function: "People", family: "Talent Acquisition", level: "Senior", status: "unmapped" },

  // ── People / Compensation & Benefits ───────────────────────────────
  { id: "hr-comp-mid", title: "Compensation Analyst", function: "People", family: "Compensation & Benefits", level: "Mid", status: "suggested", suggestedMercerCode: "CRT.01.001.P30", confidence: 0.90 },
  { id: "hr-comp-senior", title: "Compensation Analyst", function: "People", family: "Compensation & Benefits", level: "Senior", status: "unmapped" },

  // ── People / People Leadership ─────────────────────────────────────
  { id: "hr-lead-dir", title: "HR Director", function: "People", family: "People Leadership", level: "Director", status: "unmapped" },
  { id: "hr-lead-vp", title: "VP of People", function: "People", family: "People Leadership", level: "VP", status: "unmapped" },

  // ── Customer Success / Account Management ──────────────────────────
  { id: "cs-csm-mid", title: "Customer Success Manager", function: "Customer Success", family: "Account Management", level: "Mid", status: "unmapped" },
  { id: "cs-csm-senior", title: "Customer Success Manager", function: "Customer Success", family: "Account Management", level: "Senior", status: "unmapped" },

  // ── Customer Success / Support ─────────────────────────────────────
  { id: "cs-support-mid", title: "Technical Support Engineer", function: "Customer Success", family: "Support", level: "Mid", status: "unmapped" },
  { id: "cs-support-lead", title: "Support Team Lead", function: "Customer Success", family: "Support", level: "Lead", status: "unmapped" },

  // ── Operations / IT ────────────────────────────────────────────────
  { id: "ops-it-mid", title: "IT Support Specialist", function: "Operations", family: "IT", level: "Mid", status: "unmapped" },
  { id: "ops-it-mgr", title: "IT Manager", function: "Operations", family: "IT", level: "Manager", status: "unmapped" },

  // ── Legal / Compliance ─────────────────────────────────────────────
  { id: "legal-comp-mgr", title: "Compliance Manager", function: "Legal", family: "Compliance", level: "Manager", status: "suggested", suggestedMercerCode: "CCA.02.001.M30", confidence: 0.80 },
  { id: "legal-comp-dir", title: "Compliance Director", function: "Legal", family: "Compliance", level: "Director", status: "unmapped" },

  // ── Executive ──────────────────────────────────────────────────────
  { id: "exec-ceo", title: "CEO", function: "Executive", family: "Executive", level: "C-Level", status: "unmapped" },
  { id: "exec-cto", title: "CTO", function: "Executive", family: "Executive", level: "C-Level", status: "unmapped" },
  { id: "exec-coo", title: "COO", function: "Executive", family: "Executive", level: "C-Level", status: "unmapped" },
]
