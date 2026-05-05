import type { CommentThread } from "./types"

export const commentThreads: CommentThread[] = [
  {
    id: "thread-001",
    topic: "Q1 Review — Lin Chen",
    context: "Performance review of Lin Chen, Q1 2026",
    comments: [
      {
        id: "c-001-1",
        authorId: "emp-004",
        body: "Lin shipped the F0DataChart migration ahead of schedule. Quality bar consistently high.",
        createdAt: "2026-04-08T10:24:00Z",
      },
      {
        id: "c-001-2",
        authorId: "emp-001",
        body: "Agreed. Worth highlighting the bundle size work even if it's at-risk — measurable impact already.",
        createdAt: "2026-04-08T13:12:00Z",
        mentionsIds: ["emp-004"],
      },
      {
        id: "c-001-3",
        authorId: "emp-004",
        body: "Will lift it into the rating discussion. Calibration is on Friday.",
        createdAt: "2026-04-08T14:01:00Z",
      },
    ],
  },
  {
    id: "thread-002",
    topic: "Time off rejection — Elena Voronova",
    context: "Time off request for 2026-07-13 to 2026-07-22",
    comments: [
      {
        id: "c-002-1",
        authorId: "emp-014",
        body: "Conflicts with EOQ push. Suggesting Elena moves to Aug.",
        createdAt: "2026-04-15T09:30:00Z",
      },
      {
        id: "c-002-2",
        authorId: "emp-013",
        body: "Understood — already replanning. Will resubmit for Aug 17–24.",
        createdAt: "2026-04-15T11:18:00Z",
      },
    ],
  },
  {
    id: "thread-003",
    topic: "Onboarding — incoming designer",
    context: "Onboarding plan for new designer (2026-05-26 start)",
    comments: [
      {
        id: "c-003-1",
        authorId: "emp-008",
        body: "Buddy assignment: Priya. Day-1 morning blocked for design system overview.",
        createdAt: "2026-04-22T16:00:00Z",
        mentionsIds: ["emp-007"],
      },
      {
        id: "c-003-2",
        authorId: "emp-007",
        body: "Confirmed. Will prepare a curated tour of f0 components and recent product reviews.",
        createdAt: "2026-04-22T17:42:00Z",
      },
      {
        id: "c-003-3",
        authorId: "emp-002",
        body: "IT flagged the laptop is delayed 5 days. May need to rearrange day-1.",
        createdAt: "2026-04-26T15:42:00Z",
      },
    ],
  },
  {
    id: "thread-004",
    topic: "Payroll concept discrepancy",
    context: "March 2026 payroll — Diego's calculation",
    comments: [
      {
        id: "c-004-1",
        authorId: "emp-002",
        body: "March net for Diego is off by ~150 EUR vs Feb. Bonus issue?",
        createdAt: "2026-04-09T09:00:00Z",
      },
      {
        id: "c-004-2",
        authorId: "emp-004",
        body: "Looking. Looks like a wedding bonus concept double-applied. Will fix in payroll v2.4.1.",
        createdAt: "2026-04-09T10:14:00Z",
      },
      {
        id: "c-004-3",
        authorId: "emp-004",
        body: "Fixed and reissued. Diego's adjusted payslip is now in his Documents.",
        createdAt: "2026-04-09T16:30:00Z",
      },
    ],
  },
  {
    id: "thread-005",
    topic: "Hiring — backfill needed",
    context: "Noah Müller offboarding — SDR backfill",
    comments: [
      {
        id: "c-005-1",
        authorId: "emp-014",
        body: "Need to open SDR backfill. Pipeline is thin for Q3.",
        createdAt: "2026-04-18T12:00:00Z",
      },
      {
        id: "c-005-2",
        authorId: "emp-012",
        body: "Will draft the role and post Monday. Already 2 warm leads from inbound.",
        createdAt: "2026-04-18T14:25:00Z",
      },
    ],
  },
  {
    id: "thread-006",
    topic: "Design system feedback",
    context: "F0DataChart — empty state behavior",
    comments: [
      {
        id: "c-006-1",
        authorId: "emp-007",
        body: "The empty state size in F0DataChart feels too generous on small dashboards. Can we cap it?",
        createdAt: "2026-04-27T10:30:00Z",
      },
      {
        id: "c-006-2",
        authorId: "emp-018",
        body: "Agreed — capping the height proportionally makes sense. PR coming this week.",
        createdAt: "2026-04-27T11:42:00Z",
      },
    ],
  },
  {
    id: "thread-007",
    topic: "Customer expansion — Acme Corp",
    context: "Hana — strategic account review",
    comments: [
      {
        id: "c-007-1",
        authorId: "emp-016",
        body: "Acme is growing fast. Worth discussing an enterprise upgrade?",
        createdAt: "2026-04-20T09:14:00Z",
      },
      {
        id: "c-007-2",
        authorId: "emp-015",
        body: "Yes — already raised internally. Their HR team is asking about Performance module.",
        createdAt: "2026-04-20T10:00:00Z",
      },
    ],
  },
  {
    id: "thread-008",
    topic: "Q2 OKRs — Engineering",
    context: "Eng leadership — Q2 OKR draft",
    comments: [
      {
        id: "c-008-1",
        authorId: "emp-001",
        body: "Top 3 for Q2: ship Time Off v3 alpha, reduce p95 latency by 20%, hire 2 senior engineers.",
        createdAt: "2026-04-12T08:30:00Z",
      },
      {
        id: "c-008-2",
        authorId: "emp-004",
        body: "Latency target is aggressive given the migration in flight. Suggest 15%.",
        createdAt: "2026-04-12T09:45:00Z",
      },
    ],
  },
]
