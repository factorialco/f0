import { candidates } from "@/fixtures"

/** Pipeline phases matching the Factorial ATS. */
export const pipelinePhases = [
  "New",
  "Screening Rejection",
  "CV Reviewed",
  "Portfolio Reviewed",
  "Phone Screen",
  "Challenge",
  "Interview",
  "Offer",
  "Hired",
  "Rejected",
] as const

export type PipelinePhase = (typeof pipelinePhases)[number]

export type PipelineCandidate = {
  id: string
  fullName: string
  firstName: string
  lastName: string
  avatarUrl: string
  phase: PipelinePhase
  addedOn: string
  source: string
  alerts: number
  rating: number
  match: boolean
  jobId: string
}

/** Assign candidates to jobs with specific phases. */
export const pipelineCandidates: PipelineCandidate[] = [
  // job-001: Customer Experience agent
  {
    id: "pc-001", fullName: "Carlos Matilla", firstName: "Carlos", lastName: "Matilla",
    avatarUrl: "", phase: "New", addedOn: "2026-04-20", source: "LinkedIn",
    alerts: 0, rating: 0, match: true, jobId: "job-001",
  },
  {
    id: "pc-002", fullName: "Sobhan Rabbani Chokami", firstName: "Sobhan", lastName: "Rabbani",
    avatarUrl: "", phase: "Challenge", addedOn: "2026-02-05", source: "LinkedIn",
    alerts: 3, rating: 0, match: true, jobId: "job-001",
  },
  {
    id: "pc-003", fullName: "Elena García", firstName: "Elena", lastName: "García",
    avatarUrl: "", phase: "CV Reviewed", addedOn: "2026-03-15", source: "Company page",
    alerts: 0, rating: 4, match: true, jobId: "job-001",
  },
  {
    id: "pc-004", fullName: "Marco Rossi", firstName: "Marco", lastName: "Rossi",
    avatarUrl: "", phase: "Phone Screen", addedOn: "2026-03-20", source: "Employee referral",
    alerts: 0, rating: 3, match: false, jobId: "job-001",
  },
  {
    id: "pc-005", fullName: "Aisha Nkomo", firstName: "Aisha", lastName: "Nkomo",
    avatarUrl: "", phase: "New", addedOn: "2026-04-25", source: "Welcome to the Jungle",
    alerts: 0, rating: 0, match: true, jobId: "job-001",
  },

  // job-002: Senior Software Engineer
  {
    id: "pc-006", fullName: "Liam Chen", firstName: "Liam", lastName: "Chen",
    avatarUrl: "", phase: "Interview", addedOn: "2026-02-10", source: "LinkedIn",
    alerts: 0, rating: 5, match: true, jobId: "job-002",
  },
  {
    id: "pc-007", fullName: "Sophie Müller", firstName: "Sophie", lastName: "Müller",
    avatarUrl: "", phase: "CV Reviewed", addedOn: "2026-03-01", source: "Company page",
    alerts: 1, rating: 4, match: true, jobId: "job-002",
  },
  {
    id: "pc-008", fullName: "Tomás Fernández", firstName: "Tomás", lastName: "Fernández",
    avatarUrl: "", phase: "New", addedOn: "2026-04-18", source: "Open application",
    alerts: 0, rating: 0, match: false, jobId: "job-002",
  },
  {
    id: "pc-009", fullName: "Priya Sharma", firstName: "Priya", lastName: "Sharma",
    avatarUrl: "", phase: "Offer", addedOn: "2026-01-20", source: "Employee referral",
    alerts: 0, rating: 5, match: true, jobId: "job-002",
  },
  {
    id: "pc-010", fullName: "Viktor Novak", firstName: "Viktor", lastName: "Novak",
    avatarUrl: "", phase: "Screening Rejection", addedOn: "2026-03-12", source: "LinkedIn",
    alerts: 0, rating: 1, match: false, jobId: "job-002",
  },
  {
    id: "pc-011", fullName: "Yuki Tanaka", firstName: "Yuki", lastName: "Tanaka",
    avatarUrl: "", phase: "Phone Screen", addedOn: "2026-03-28", source: "LinkedIn",
    alerts: 0, rating: 3, match: true, jobId: "job-002",
  },

  // job-003: Product Designer
  {
    id: "pc-012", fullName: "Anna Kowalski", firstName: "Anna", lastName: "Kowalski",
    avatarUrl: "", phase: "New", addedOn: "2026-04-22", source: "Welcome to the Jungle",
    alerts: 0, rating: 0, match: true, jobId: "job-003",
  },
  {
    id: "pc-013", fullName: "David Kim", firstName: "David", lastName: "Kim",
    avatarUrl: "", phase: "Portfolio Reviewed", addedOn: "2026-03-05", source: "Company page",
    alerts: 0, rating: 4, match: true, jobId: "job-003",
  },

  // job-005: Data Analyst (published)
  {
    id: "pc-014", fullName: "Fatima Al-Hassan", firstName: "Fatima", lastName: "Al-Hassan",
    avatarUrl: "", phase: "Interview", addedOn: "2026-02-28", source: "LinkedIn",
    alerts: 0, rating: 4, match: true, jobId: "job-005",
  },
  {
    id: "pc-015", fullName: "Lucas Dupont", firstName: "Lucas", lastName: "Dupont",
    avatarUrl: "", phase: "New", addedOn: "2026-04-30", source: "JobTarget",
    alerts: 0, rating: 0, match: false, jobId: "job-005",
  },

  // Add some from existing candidates pool to other jobs
  ...candidates.slice(0, 3).map((c, i) => ({
    id: `pc-ext-${i}`,
    fullName: c.fullName,
    firstName: c.firstName,
    lastName: c.lastName,
    avatarUrl: c.avatarUrl,
    phase: (["New", "CV Reviewed", "Phone Screen"] as const)[i],
    addedOn: c.appliedOn,
    source: c.source,
    alerts: 0,
    rating: c.rating >= 4 ? 5 : c.rating >= 3 ? 4 : c.rating <= 1 ? 1 : 0,
    match: c.rating >= 4,
    jobId: "job-004",
  })),
]

/** Get pipeline candidates for a specific job. */
export function getCandidatesForJob(jobId: string): PipelineCandidate[] {
  return pipelineCandidates.filter((c) => c.jobId === jobId)
}

/** Count candidates per phase for a job. */
export function getPhaseCounts(jobId: string): Map<PipelinePhase, number> {
  const counts = new Map<PipelinePhase, number>()
  for (const phase of pipelinePhases) {
    counts.set(phase, 0)
  }
  for (const c of getCandidatesForJob(jobId)) {
    counts.set(c.phase, (counts.get(c.phase) ?? 0) + 1)
  }
  return counts
}
