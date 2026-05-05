import { avatarFor } from "./helpers"

/**
 * Recruitment fixtures: job openings + candidates.
 * Used by the recruitment-jobs and recruitment-candidates prototypes.
 */

export type JobStatus = "published" | "unlisted" | "draft" | "archived"
export type JobType = "Hybrid" | "Onsite" | "Remote"

export type CandidateStageCount = {
  /** Stage label (e.g., "Applied", "Screening", "Interview") */
  stage: string
  /** Visual dot color for this stage */
  color: "info" | "positive" | "warning" | "critical" | "neutral"
  count: number
}

export type Job = {
  id: string
  title: string
  status: JobStatus
  location: string
  jobType: JobType
  vacancies: number | null
  hiringManagerIds: string[]
  candidates: CandidateStageCount[]
  publishedAt: string | null
  startDate: string | null
  postedDaysAgo: number | null
  pinned: boolean
  /** FK to departments fixture — used as the "team" tag in card metadata. */
  departmentId?: string
  /** Public company-page URL for this opening (external-link action). */
  publicUrl?: string
}

export const jobs: Job[] = [
  {
    id: "job-001",
    title: "Customer Experience agent",
    status: "published",
    location: "Paris office 6",
    jobType: "Hybrid",
    vacancies: null,
    hiringManagerIds: ["emp-002", "emp-011", "emp-016"],
    candidates: [
      { stage: "Applied", color: "info", count: 13 },
      { stage: "Screening", color: "warning", count: 1 },
      { stage: "Interview", color: "positive", count: 2 },
      { stage: "Offer", color: "critical", count: 3 },
    ],
    publishedAt: "2026-03-05",
    startDate: null,
    postedDaysAgo: 60,
    pinned: true,
    departmentId: "dept-cs",
    publicUrl: "https://factorial.example/careers/customer-experience-agent",
  },
  {
    id: "job-002",
    title: "Software developer",
    status: "draft",
    location: "London office 13",
    jobType: "Remote",
    vacancies: 1,
    hiringManagerIds: ["emp-001", "emp-004"],
    candidates: [],
    publishedAt: null,
    startDate: null,
    postedDaysAgo: null,
    pinned: true,
    departmentId: "dept-eng",
  },
  {
    id: "job-003",
    title: "Sales assistant (Marketing)",
    status: "published",
    location: "New York office 10",
    jobType: "Onsite",
    vacancies: null,
    hiringManagerIds: ["emp-014", "emp-013", "emp-012"],
    candidates: [
      { stage: "Applied", color: "info", count: 13 },
      { stage: "Screening", color: "positive", count: 3 },
      { stage: "Interview", color: "warning", count: 1 },
      { stage: "Offer", color: "critical", count: 2 },
    ],
    publishedAt: "2026-03-05",
    startDate: null,
    postedDaysAgo: 60,
    pinned: false,
    departmentId: "dept-sales",
    publicUrl: "https://factorial.example/careers/sales-assistant-marketing",
  },
  {
    id: "job-004",
    title: "Software developer (Development)",
    status: "draft",
    location: "London office 13",
    jobType: "Remote",
    vacancies: null,
    hiringManagerIds: ["emp-001", "emp-003"],
    candidates: [],
    publishedAt: null,
    startDate: null,
    postedDaysAgo: null,
    pinned: false,
    departmentId: "dept-eng",
  },
  // ───── Internal opportunities (employee-facing card grid) ─────
  // Spread across 4 locations to make the grouping visible. publishedAt
  // staggered across days/weeks/months to exercise the relativeDate helper.
  {
    id: "job-101",
    title: "Senior Backend Engineer",
    status: "published",
    location: "Barcelona HQ",
    jobType: "Hybrid",
    vacancies: 2,
    hiringManagerIds: ["emp-001"],
    candidates: [],
    publishedAt: "2026-05-03",
    startDate: null,
    postedDaysAgo: 2,
    pinned: false,
    departmentId: "dept-eng",
    publicUrl: "https://factorial.example/careers/senior-backend-engineer",
  },
  {
    id: "job-102",
    title: "Product Designer",
    status: "published",
    location: "Barcelona HQ",
    jobType: "Hybrid",
    vacancies: 1,
    hiringManagerIds: ["emp-008"],
    candidates: [],
    publishedAt: "2026-04-22",
    startDate: null,
    postedDaysAgo: 13,
    pinned: false,
    departmentId: "dept-design",
    publicUrl: "https://factorial.example/careers/product-designer",
  },
  {
    id: "job-103",
    title: "People Partner",
    status: "published",
    location: "Barcelona HQ",
    jobType: "Onsite",
    vacancies: 1,
    hiringManagerIds: ["emp-002"],
    candidates: [],
    publishedAt: "2026-04-08",
    startDate: null,
    postedDaysAgo: 27,
    pinned: false,
    departmentId: "dept-people",
    publicUrl: "https://factorial.example/careers/people-partner",
  },
  {
    id: "job-104",
    title: "Frontend Engineer",
    status: "published",
    location: "Madrid office",
    jobType: "Hybrid",
    vacancies: 2,
    hiringManagerIds: ["emp-001", "emp-003"],
    candidates: [],
    publishedAt: "2026-04-29",
    startDate: null,
    postedDaysAgo: 6,
    pinned: false,
    departmentId: "dept-eng",
    publicUrl: "https://factorial.example/careers/frontend-engineer",
  },
  {
    id: "job-105",
    title: "Account Executive (Mid-Market)",
    status: "published",
    location: "Madrid office",
    jobType: "Onsite",
    vacancies: 3,
    hiringManagerIds: ["emp-014"],
    candidates: [],
    publishedAt: "2026-04-15",
    startDate: null,
    postedDaysAgo: 20,
    pinned: false,
    departmentId: "dept-sales",
    publicUrl: "https://factorial.example/careers/account-executive",
  },
  {
    id: "job-106",
    title: "Senior Product Manager",
    status: "published",
    location: "Remote — EU",
    jobType: "Remote",
    vacancies: 1,
    hiringManagerIds: ["emp-010"],
    candidates: [],
    publishedAt: "2026-05-01",
    startDate: null,
    postedDaysAgo: 4,
    pinned: false,
    departmentId: "dept-product",
    publicUrl: "https://factorial.example/careers/senior-product-manager",
  },
  {
    id: "job-107",
    title: "Customer Success Manager",
    status: "published",
    location: "Remote — EU",
    jobType: "Remote",
    vacancies: 2,
    hiringManagerIds: ["emp-002"],
    candidates: [],
    publishedAt: "2026-03-18",
    startDate: null,
    postedDaysAgo: 48,
    pinned: false,
    departmentId: "dept-cs",
    publicUrl: "https://factorial.example/careers/customer-success-manager",
  },
  {
    id: "job-108",
    title: "UX Researcher",
    status: "published",
    location: "Paris office 6",
    jobType: "Hybrid",
    vacancies: 1,
    hiringManagerIds: ["emp-008"],
    candidates: [],
    publishedAt: "2026-04-25",
    startDate: null,
    postedDaysAgo: 10,
    pinned: false,
    departmentId: "dept-design",
    publicUrl: "https://factorial.example/careers/ux-researcher",
  },
]

export type CandidateRating = 1 | 2 | 3 | 4 | 5

export type CandidateState = "active" | "talent-pool" | "archived"

export type Candidate = {
  id: string
  fullName: string
  firstName: string
  lastName: string
  email: string
  phone: string
  avatarUrl: string
  jobApplied: string
  source: string
  rating: CandidateRating
  appliedOn: string
  categories: string[]
  state: CandidateState
}

const sources = [
  "Employee referral",
  "Welcome to the Jungle",
  "LinkedIn",
  "Company page",
  "JobTarget",
  "HelloWork",
  "Open application",
  "VONQ",
] as const

const categories = [
  "Management",
  "Teamwork",
  "Accountability",
  "Empathy",
  "Storytelling",
  "Cultural fit",
  "Technical Background",
  "Creativity",
] as const

const candidateNames = [
  "Mechelle Xavier",
  "Mahalia Oliveira",
  "Rebecca Oliveira",
  "Claude Moreira",
  "Jasmin Ercoura",
  "Lorretta Santos",
  "Bella Trapana",
  "Micaella Saraiva",
  "Brittney Pereira",
  "Diane Mendes",
  "Elliena Santos",
  "Heriz Lemos",
  "Marian Macedo",
  "Lloyd Pereira",
  "Mecyhowa Silva",
  "Sarquma Aroza",
  "Mirona Bahirzo",
] as const

export const candidates: Candidate[] = candidateNames.map((fullName, i) => {
  const [firstName, ...lastParts] = fullName.split(" ")
  const lastName = lastParts.join(" ")
  const jobApplied =
    i % 3 === 0 ? jobs[2].title : i % 3 === 1 ? jobs[0].title : jobs[3].title
  const source = sources[i % sources.length]
  const rating = ((i % 5) + 1) as CandidateRating
  const day = String(((i * 3) % 28) + 1).padStart(2, "0")
  const cats: string[] = [
    categories[i % categories.length],
    categories[(i + 3) % categories.length],
  ]
  const state: CandidateState =
    i % 11 === 0 ? "archived" : i % 7 === 0 ? "talent-pool" : "active"
  return {
    id: `cand-${String(i + 1).padStart(3, "0")}`,
    fullName,
    firstName,
    lastName,
    email: `${fullName.toLowerCase().replace(/\s+/g, ".")}-app-x83564${i}@factorial.example`,
    phone: `+34 ${600 + i}${(123456 + i * 17) % 1000000}`.padEnd(15, "0").slice(0, 15),
    avatarUrl: avatarFor(`cand-${i}`),
    jobApplied,
    source,
    rating,
    appliedOn: `2026-05-${day}`,
    categories: cats,
    state,
  }
})
