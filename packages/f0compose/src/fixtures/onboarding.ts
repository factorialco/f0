import type {
  OnboardingProgress,
  OnboardingStep,
  OnboardingTemplate,
} from "./types"

const engSteps: OnboardingStep[] = [
  {
    id: "step-eng-1",
    title: "Sign employment contract",
    ownerRole: "hr",
    daysFromStart: -7,
    category: "paperwork",
  },
  {
    id: "step-eng-2",
    title: "Provide tax forms and ID",
    ownerRole: "employee",
    daysFromStart: -5,
    category: "paperwork",
  },
  {
    id: "step-eng-3",
    title: "Order laptop and peripherals",
    ownerRole: "it",
    daysFromStart: -10,
    category: "equipment",
  },
  {
    id: "step-eng-4",
    title: "Welcome breakfast with team",
    ownerRole: "manager",
    daysFromStart: 0,
    category: "intro",
  },
  {
    id: "step-eng-5",
    title: "Complete codebase walkthrough",
    ownerRole: "buddy",
    daysFromStart: 2,
    category: "training",
  },
  {
    id: "step-eng-6",
    title: "Setup dev environment",
    ownerRole: "employee",
    daysFromStart: 1,
    category: "training",
  },
  {
    id: "step-eng-7",
    title: "Submit first PR",
    ownerRole: "employee",
    daysFromStart: 7,
    category: "training",
  },
  {
    id: "step-eng-8",
    title: "Access to staging and production",
    ownerRole: "it",
    daysFromStart: 3,
    category: "access",
  },
  {
    id: "step-eng-9",
    title: "30-day check-in with manager",
    ownerRole: "manager",
    daysFromStart: 30,
    category: "intro",
  },
]

const desSteps: OnboardingStep[] = [
  {
    id: "step-des-1",
    title: "Sign employment contract",
    ownerRole: "hr",
    daysFromStart: -7,
    category: "paperwork",
  },
  {
    id: "step-des-2",
    title: "Order Mac + tablet",
    ownerRole: "it",
    daysFromStart: -10,
    category: "equipment",
  },
  {
    id: "step-des-3",
    title: "Figma + Notion access",
    ownerRole: "it",
    daysFromStart: 0,
    category: "access",
  },
  {
    id: "step-des-4",
    title: "Design system overview",
    ownerRole: "buddy",
    daysFromStart: 2,
    category: "training",
  },
  {
    id: "step-des-5",
    title: "Shadow a discovery session",
    ownerRole: "manager",
    daysFromStart: 5,
    category: "training",
  },
  {
    id: "step-des-6",
    title: "Deliver first design review",
    ownerRole: "employee",
    daysFromStart: 14,
    category: "training",
  },
  {
    id: "step-des-7",
    title: "30-day check-in",
    ownerRole: "manager",
    daysFromStart: 30,
    category: "intro",
  },
]

const salSteps: OnboardingStep[] = [
  {
    id: "step-sal-1",
    title: "Sign employment contract",
    ownerRole: "hr",
    daysFromStart: -7,
    category: "paperwork",
  },
  {
    id: "step-sal-2",
    title: "Order laptop",
    ownerRole: "it",
    daysFromStart: -7,
    category: "equipment",
  },
  {
    id: "step-sal-3",
    title: "CRM access",
    ownerRole: "it",
    daysFromStart: 0,
    category: "access",
  },
  {
    id: "step-sal-4",
    title: "Pitch certification",
    ownerRole: "manager",
    daysFromStart: 5,
    category: "training",
  },
  {
    id: "step-sal-5",
    title: "Shadow 3 sales calls",
    ownerRole: "buddy",
    daysFromStart: 7,
    category: "training",
  },
  {
    id: "step-sal-6",
    title: "First solo discovery call",
    ownerRole: "employee",
    daysFromStart: 14,
    category: "training",
  },
  {
    id: "step-sal-7",
    title: "30-day quota review",
    ownerRole: "manager",
    daysFromStart: 30,
    category: "intro",
  },
]

export const onboardingTemplates: OnboardingTemplate[] = [
  {
    id: "tpl-eng",
    name: "Engineering onboarding",
    role: "Engineer",
    steps: engSteps,
  },
  {
    id: "tpl-des",
    name: "Design onboarding",
    role: "Designer",
    steps: desSteps,
  },
  { id: "tpl-sal", name: "Sales onboarding", role: "Sales", steps: salSteps },
]

export const onboardingProgress: OnboardingProgress[] = [
  {
    id: "onb-001",
    employeeId: "emp-017",
    templateId: "tpl-eng",
    startDate: "2025-09-01",
    completedStepIds: engSteps.map((s) => s.id),
    pendingStepIds: [],
    blockedStepIds: [],
  },
  {
    id: "onb-002",
    employeeId: "emp-019",
    templateId: "tpl-eng",
    startDate: "2024-03-11",
    completedStepIds: engSteps.map((s) => s.id),
    pendingStepIds: [],
    blockedStepIds: [],
  },
  {
    id: "onb-003-incoming",
    employeeId: "emp-new-001",
    templateId: "tpl-eng",
    startDate: "2026-05-12",
    completedStepIds: ["step-eng-1", "step-eng-2", "step-eng-3"],
    pendingStepIds: [
      "step-eng-4",
      "step-eng-5",
      "step-eng-6",
      "step-eng-7",
      "step-eng-8",
      "step-eng-9",
    ],
    blockedStepIds: [],
  },
  {
    id: "onb-004-incoming",
    employeeId: "emp-new-002",
    templateId: "tpl-des",
    startDate: "2026-05-26",
    completedStepIds: ["step-des-1"],
    pendingStepIds: [
      "step-des-3",
      "step-des-4",
      "step-des-5",
      "step-des-6",
      "step-des-7",
    ],
    blockedStepIds: ["step-des-2"],
  },
]
