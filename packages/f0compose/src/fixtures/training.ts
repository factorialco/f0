/**
 * Training fixtures for f0compose prototypes.
 */

import { avatarFor } from "./helpers"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type TrainingStatus = "active" | "draft"
export type TrainingType = "mandatory" | "non-mandatory"

export type Training = {
  id: string
  name: string
  code: string
  status: TrainingStatus
  type: TrainingType
  participants: number
  expiredParticipants: number
  catalogVisible: boolean
  categories: string[]
  competencies: string[]
  createdAt: string
  updatedAt: string
}

export type TrainingRequestStatus =
  | "pending"
  | "approved"
  | "rejected"
  | "cancelled"

export type TrainingRequest = {
  id: string
  employeeName: string
  employeeAvatarUrl: string
  trainingName: string
  status: TrainingRequestStatus
  requestedAt: string
  reason: string
  estimatedCost: number
  currency: string
}

export type TrainingBudget = {
  id: string
  teamName: string
  totalBudget: number
  spent: number
  remaining: number
  currency: string
  year: number
  employeeCount: number
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const trainings: Training[] = [
  {
    id: "tr-1",
    name: "Onboarding Essentials",
    code: "ONB-001",
    status: "active",
    type: "mandatory",
    participants: 45,
    expiredParticipants: 3,
    catalogVisible: true,
    categories: ["Onboarding", "Culture"],
    competencies: ["Communication"],
    createdAt: "2025-09-15",
    updatedAt: "2026-04-20",
  },
  {
    id: "tr-2",
    name: "Data Privacy & GDPR Compliance",
    code: "SEC-010",
    status: "active",
    type: "mandatory",
    participants: 120,
    expiredParticipants: 12,
    catalogVisible: true,
    categories: ["Compliance", "Security"],
    competencies: ["Data management"],
    createdAt: "2025-06-01",
    updatedAt: "2026-03-10",
  },
  {
    id: "tr-3",
    name: "Leadership Fundamentals",
    code: "LDR-100",
    status: "active",
    type: "non-mandatory",
    participants: 18,
    expiredParticipants: 0,
    catalogVisible: true,
    categories: ["Leadership", "Management"],
    competencies: ["Leadership", "Team management"],
    createdAt: "2026-01-10",
    updatedAt: "2026-04-28",
  },
  {
    id: "tr-4",
    name: "React Advanced Patterns",
    code: "DEV-201",
    status: "active",
    type: "non-mandatory",
    participants: 12,
    expiredParticipants: 0,
    catalogVisible: true,
    categories: ["Technical", "Engineering"],
    competencies: ["Frontend development"],
    createdAt: "2026-02-14",
    updatedAt: "2026-04-30",
  },
  {
    id: "tr-5",
    name: "Workplace Safety Training",
    code: "SAF-050",
    status: "active",
    type: "mandatory",
    participants: 95,
    expiredParticipants: 8,
    catalogVisible: false,
    categories: ["Compliance", "Safety"],
    competencies: [],
    createdAt: "2025-03-20",
    updatedAt: "2026-01-15",
  },
  {
    id: "tr-6",
    name: "Effective Communication Skills",
    code: "SKL-030",
    status: "active",
    type: "non-mandatory",
    participants: 32,
    expiredParticipants: 2,
    catalogVisible: true,
    categories: ["Soft skills"],
    competencies: ["Communication", "Presentation"],
    createdAt: "2025-11-01",
    updatedAt: "2026-04-05",
  },
  {
    id: "tr-7",
    name: "Diversity & Inclusion Workshop",
    code: "DIV-020",
    status: "active",
    type: "mandatory",
    participants: 110,
    expiredParticipants: 5,
    catalogVisible: true,
    categories: ["Culture", "Compliance"],
    competencies: [],
    createdAt: "2025-08-15",
    updatedAt: "2026-02-28",
  },
  {
    id: "tr-8",
    name: "Project Management with Agile",
    code: "PM-150",
    status: "active",
    type: "non-mandatory",
    participants: 22,
    expiredParticipants: 0,
    catalogVisible: true,
    categories: ["Management", "Technical"],
    competencies: ["Project management", "Agile"],
    createdAt: "2026-03-01",
    updatedAt: "2026-05-01",
  },
  {
    id: "tr-9",
    name: "Sales Negotiation Techniques",
    code: "SLS-080",
    status: "draft",
    type: "non-mandatory",
    participants: 0,
    expiredParticipants: 0,
    catalogVisible: false,
    categories: ["Sales"],
    competencies: ["Negotiation", "Sales"],
    createdAt: "2026-04-20",
    updatedAt: "2026-04-20",
  },
  {
    id: "tr-10",
    name: "Customer Support Excellence",
    code: "SUP-060",
    status: "draft",
    type: "non-mandatory",
    participants: 0,
    expiredParticipants: 0,
    catalogVisible: false,
    categories: ["Support", "Soft skills"],
    competencies: ["Customer service"],
    createdAt: "2026-05-01",
    updatedAt: "2026-05-01",
  },
  {
    id: "tr-11",
    name: "Python for Data Analysis",
    code: "DEV-300",
    status: "active",
    type: "non-mandatory",
    participants: 8,
    expiredParticipants: 0,
    catalogVisible: true,
    categories: ["Technical", "Data"],
    competencies: ["Data analysis", "Programming"],
    createdAt: "2026-03-15",
    updatedAt: "2026-04-25",
  },
  {
    id: "tr-12",
    name: "Anti-Harassment Policy Training",
    code: "SEC-015",
    status: "active",
    type: "mandatory",
    participants: 130,
    expiredParticipants: 15,
    catalogVisible: false,
    categories: ["Compliance", "Culture"],
    competencies: [],
    createdAt: "2025-01-10",
    updatedAt: "2026-03-20",
  },
  {
    id: "tr-13",
    name: "Time Management Masterclass",
    code: "SKL-040",
    status: "active",
    type: "non-mandatory",
    participants: 27,
    expiredParticipants: 1,
    catalogVisible: true,
    categories: ["Soft skills", "Productivity"],
    competencies: ["Time management"],
    createdAt: "2025-10-05",
    updatedAt: "2026-04-10",
  },
  {
    id: "tr-14",
    name: "Financial Literacy for Employees",
    code: "FIN-010",
    status: "active",
    type: "non-mandatory",
    participants: 14,
    expiredParticipants: 0,
    catalogVisible: true,
    categories: ["Finance", "Soft skills"],
    competencies: ["Financial literacy"],
    createdAt: "2026-01-20",
    updatedAt: "2026-04-15",
  },
  {
    id: "tr-15",
    name: "Cloud Infrastructure Basics",
    code: "DEV-250",
    status: "draft",
    type: "non-mandatory",
    participants: 0,
    expiredParticipants: 0,
    catalogVisible: false,
    categories: ["Technical", "Engineering"],
    competencies: ["Cloud", "DevOps"],
    createdAt: "2026-05-02",
    updatedAt: "2026-05-02",
  },
]

export const trainingRequests: TrainingRequest[] = [
  {
    id: "req-1",
    employeeName: "Laura García",
    employeeAvatarUrl: avatarFor("laura-garcia"),
    trainingName: "AWS Solutions Architect Certification",
    status: "pending",
    requestedAt: "2026-04-28",
    reason: "Need cloud certification for upcoming infrastructure migration project",
    estimatedCost: 1200,
    currency: "EUR",
  },
  {
    id: "req-2",
    employeeName: "Marc Fernández",
    employeeAvatarUrl: avatarFor("marc-fernandez"),
    trainingName: "Leadership Fundamentals",
    status: "approved",
    requestedAt: "2026-04-15",
    reason: "Recently promoted to team lead, need management training",
    estimatedCost: 800,
    currency: "EUR",
  },
  {
    id: "req-3",
    employeeName: "Anna Müller",
    employeeAvatarUrl: avatarFor("anna-muller"),
    trainingName: "Advanced Excel & Data Visualization",
    status: "pending",
    requestedAt: "2026-05-01",
    reason: "Quarterly reporting requires advanced data skills",
    estimatedCost: 450,
    currency: "EUR",
  },
  {
    id: "req-4",
    employeeName: "Pedro Santos",
    employeeAvatarUrl: avatarFor("pedro-santos"),
    trainingName: "Scrum Master Certification",
    status: "rejected",
    requestedAt: "2026-03-20",
    reason: "Want to improve agile facilitation skills",
    estimatedCost: 1500,
    currency: "EUR",
  },
  {
    id: "req-5",
    employeeName: "Sofia Rossi",
    employeeAvatarUrl: avatarFor("sofia-rossi"),
    trainingName: "UX Research Methods",
    status: "approved",
    requestedAt: "2026-04-10",
    reason: "Transitioning to UX role, need foundational research training",
    estimatedCost: 600,
    currency: "EUR",
  },
  {
    id: "req-6",
    employeeName: "Tomás López",
    employeeAvatarUrl: avatarFor("tomas-lopez"),
    trainingName: "Python for Data Analysis",
    status: "pending",
    requestedAt: "2026-05-03",
    reason: "Want to automate team reporting workflows",
    estimatedCost: 350,
    currency: "EUR",
  },
  {
    id: "req-7",
    employeeName: "Emma Johansson",
    employeeAvatarUrl: avatarFor("emma-johansson"),
    trainingName: "Conflict Resolution Workshop",
    status: "cancelled",
    requestedAt: "2026-03-05",
    reason: "Team conflict management improvement",
    estimatedCost: 500,
    currency: "EUR",
  },
  {
    id: "req-8",
    employeeName: "David Chen",
    employeeAvatarUrl: avatarFor("david-chen"),
    trainingName: "React Advanced Patterns",
    status: "approved",
    requestedAt: "2026-04-22",
    reason: "Need to upskill on React performance patterns for product rewrite",
    estimatedCost: 0,
    currency: "EUR",
  },
]

export const trainingBudgets: TrainingBudget[] = [
  {
    id: "bud-1",
    teamName: "Engineering",
    totalBudget: 25000,
    spent: 12400,
    remaining: 12600,
    currency: "EUR",
    year: 2026,
    employeeCount: 35,
  },
  {
    id: "bud-2",
    teamName: "Product & Design",
    totalBudget: 15000,
    spent: 6200,
    remaining: 8800,
    currency: "EUR",
    year: 2026,
    employeeCount: 18,
  },
  {
    id: "bud-3",
    teamName: "Sales",
    totalBudget: 18000,
    spent: 9500,
    remaining: 8500,
    currency: "EUR",
    year: 2026,
    employeeCount: 22,
  },
  {
    id: "bud-4",
    teamName: "People & Culture",
    totalBudget: 10000,
    spent: 3800,
    remaining: 6200,
    currency: "EUR",
    year: 2026,
    employeeCount: 10,
  },
  {
    id: "bud-5",
    teamName: "Finance & Legal",
    totalBudget: 8000,
    spent: 2100,
    remaining: 5900,
    currency: "EUR",
    year: 2026,
    employeeCount: 8,
  },
  {
    id: "bud-6",
    teamName: "Customer Support",
    totalBudget: 12000,
    spent: 7800,
    remaining: 4200,
    currency: "EUR",
    year: 2026,
    employeeCount: 15,
  },
]

// ---------------------------------------------------------------------------
// Policies (Handbook Pages)
// ---------------------------------------------------------------------------

export type PolicyVisibility = "company" | "custom_group" | "private"

export type Policy = {
  id: string
  title: string
  ownerName: string
  ownerAvatarUrl: string
  folder: string
  visibility: PolicyVisibility
  mandatory: boolean
  acknowledgedCount: number
  totalEmployees: number
  lastPublishedAt: string | null
  updatedAt: string
}

export const policies: Policy[] = [
  {
    id: "pol-1",
    title: "Code of Conduct",
    ownerName: "María López",
    ownerAvatarUrl: avatarFor("maria-lopez"),
    folder: "Company policies",
    visibility: "company",
    mandatory: true,
    acknowledgedCount: 112,
    totalEmployees: 130,
    lastPublishedAt: "2026-01-15",
    updatedAt: "2026-01-15",
  },
  {
    id: "pol-2",
    title: "Remote Work Policy",
    ownerName: "Carlos Ruiz",
    ownerAvatarUrl: avatarFor("carlos-ruiz"),
    folder: "Company policies",
    visibility: "company",
    mandatory: true,
    acknowledgedCount: 98,
    totalEmployees: 130,
    lastPublishedAt: "2026-03-01",
    updatedAt: "2026-03-01",
  },
  {
    id: "pol-3",
    title: "Data Protection & Privacy",
    ownerName: "María López",
    ownerAvatarUrl: avatarFor("maria-lopez"),
    folder: "Compliance",
    visibility: "company",
    mandatory: true,
    acknowledgedCount: 125,
    totalEmployees: 130,
    lastPublishedAt: "2025-11-20",
    updatedAt: "2026-02-10",
  },
  {
    id: "pol-4",
    title: "Expense Reimbursement Guide",
    ownerName: "Ana Martín",
    ownerAvatarUrl: avatarFor("ana-martin"),
    folder: "Finance",
    visibility: "company",
    mandatory: false,
    acknowledgedCount: 0,
    totalEmployees: 130,
    lastPublishedAt: "2026-02-15",
    updatedAt: "2026-02-15",
  },
  {
    id: "pol-5",
    title: "Engineering On-Call Runbook",
    ownerName: "David Chen",
    ownerAvatarUrl: avatarFor("david-chen"),
    folder: "Engineering",
    visibility: "custom_group",
    mandatory: false,
    acknowledgedCount: 0,
    totalEmployees: 35,
    lastPublishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
  },
  {
    id: "pol-6",
    title: "Anti-Harassment Policy",
    ownerName: "María López",
    ownerAvatarUrl: avatarFor("maria-lopez"),
    folder: "Compliance",
    visibility: "company",
    mandatory: true,
    acknowledgedCount: 118,
    totalEmployees: 130,
    lastPublishedAt: "2025-09-01",
    updatedAt: "2025-09-01",
  },
  {
    id: "pol-7",
    title: "Travel & Accommodation Policy",
    ownerName: "Ana Martín",
    ownerAvatarUrl: avatarFor("ana-martin"),
    folder: "Finance",
    visibility: "company",
    mandatory: false,
    acknowledgedCount: 0,
    totalEmployees: 130,
    lastPublishedAt: "2026-01-20",
    updatedAt: "2026-04-05",
  },
  {
    id: "pol-8",
    title: "Benefits Overview 2026",
    ownerName: "Carlos Ruiz",
    ownerAvatarUrl: avatarFor("carlos-ruiz"),
    folder: "Company policies",
    visibility: "company",
    mandatory: false,
    acknowledgedCount: 0,
    totalEmployees: 130,
    lastPublishedAt: "2026-01-05",
    updatedAt: "2026-01-05",
  },
  {
    id: "pol-9",
    title: "Sales Compensation Plan",
    ownerName: "Pedro Santos",
    ownerAvatarUrl: avatarFor("pedro-santos"),
    folder: "Sales",
    visibility: "custom_group",
    mandatory: false,
    acknowledgedCount: 0,
    totalEmployees: 22,
    lastPublishedAt: "2026-03-15",
    updatedAt: "2026-03-15",
  },
  {
    id: "pol-10",
    title: "New Office Seating Guide",
    ownerName: "Carlos Ruiz",
    ownerAvatarUrl: avatarFor("carlos-ruiz"),
    folder: "Company policies",
    visibility: "private",
    mandatory: false,
    acknowledgedCount: 0,
    totalEmployees: 0,
    lastPublishedAt: null,
    updatedAt: "2026-05-02",
  },
  {
    id: "pol-11",
    title: "Parental Leave Policy",
    ownerName: "María López",
    ownerAvatarUrl: avatarFor("maria-lopez"),
    folder: "Company policies",
    visibility: "company",
    mandatory: true,
    acknowledgedCount: 105,
    totalEmployees: 130,
    lastPublishedAt: "2025-06-15",
    updatedAt: "2026-01-10",
  },
  {
    id: "pol-12",
    title: "IT Security Guidelines",
    ownerName: "David Chen",
    ownerAvatarUrl: avatarFor("david-chen"),
    folder: "Compliance",
    visibility: "company",
    mandatory: true,
    acknowledgedCount: 90,
    totalEmployees: 130,
    lastPublishedAt: "2026-04-01",
    updatedAt: "2026-04-01",
  },
]
