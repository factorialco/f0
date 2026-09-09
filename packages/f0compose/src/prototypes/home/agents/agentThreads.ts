/**
 * The agents' threads and their run log, written to Oskar's mock-content
 * brief (2026-09-02).
 *
 * TWO IDEAS FROM THAT BRIEF DRIVE THE SHAPE HERE:
 *
 * 1. **An agent's thread IS its activity log.** There is no separate
 *    feed: every run is an entry in the thread. So `entries` lives on the
 *    agent and the nav panel's activity row DERIVES from the most recent
 *    one — the `activity` string this file replaces was exactly the
 *    "log aparte" the brief rules out.
 *
 * 2. **The last line of a reply asks for the ONE thing the agent needs.**
 *    One question, never two — which is why each reply's question is a
 *    real clarifying panel with options, not a rhetorical flourish.
 *
 * VOICE (from the brief, and it is the product's): dry, concrete, short
 * sentences. No "great!", no exclamation marks, no emoji in the body.
 * Real numbers rather than vagueness. English, because the fixtures are.
 *
 * People are only ever the ones the mock data already contains (the
 * shared `employees` fixture: Ada Lovelace, Marie Curie, Alan Turing,
 * Grace Hopper, Lin Chen, Diego Hernández, Priya Patel), and they repeat
 * ACROSS entries on purpose — the log has to be groupable by person.
 */

export type RunOutcome = "done" | "needs_input" | "blocked" | "failed"

/** Colour of the dot beside an activity line in the nav panel. */
export type ActivityTone = "warning" | "critical" | "idle"

export type RunEntity = {
  type: "person" | "team" | "report" | "vendor"
  id: string
  label: string
}

export type RunEntry = {
  /** ISO, staggered backwards — rendered as a short absolute stamp. */
  at: string
  trigger: "schedule" | "event" | "manual"
  summary: string
  outcome: RunOutcome
  /** How many things this run covers, when it groups several. */
  count?: number
  /**
   * Deterministic checks that justify a `done` — never a `needs_input`.
   *
   * No longer rendered on its own: it is the GROUND TRUTH that `log` is
   * written against (every check here must be traceable in the trace), and
   * the trace is what the UI shows. Kept because the checks are the
   * semantic claim and the trace is only one presentation of it.
   */
  evidence?: string[]
  /**
   * Level 2 of the history disclosure — the card's title, and the only
   * thing visible until you open it.
   *
   * A COMMAND, not a status: "Audited decisions", not "Flagged 3 decisions
   * with no owner" (per Oskar, 2026-09-02 — a log reads as machine output,
   * a logbook reads as someone having done the work). Past tense, two to
   * four words, no numbers: the figures belong in `result`, where there is
   * room to qualify them.
   */
  command?: string
  /**
   * Level 3, first — what the run CONCLUDED, in plain language and with
   * the real figures. The "why" on the surface, so you never have to read
   * a trace to find out what happened.
   */
  result?: string
  /**
   * Level 3, second — the receipt. Raw trace lines in a monospace block,
   * for the operator who wants to see the rule that actually ran.
   *
   * Prefixes are ASCII in the data and glyphs in the component, so the
   * content file never carries presentation: `$ ` invoked, `-> `
   * intermediate result, `OK ` a check that passed, `!  ` a caveat.
   *
   * OMITTED on a run that genuinely did nothing worth tracing — the UI
   * says so rather than faking depth.
   */
  log?: string[]
  /** Why it fell out of policy, with the figure or the reason. */
  reason?: string
  /**
   * The agent's own READ on the blocker — what it worked out before
   * asking. Without this it is a messenger: it hands the whole decision
   * back untouched when it is the one holding the context (per Oskar's
   * review, 2026-09-02). Rendered above the actions, and it is what makes
   * one of them the recommended one.
   */
  analysis?: string
  /**
   * What you can DO about it, right where it is reported. Only runs that
   * stopped for a reason carry these: a `done` needs nothing from you, and
   * giving it buttons would bury the ones that do.
   *
   * Each action carries the reply it produces, so the agent's answer is
   * written in its own voice rather than generated from a label.
   *
   * EXACTLY ONE is `recommended`, and it renders as the primary button.
   * Two equal-weight buttons make you do the agent's thinking for it.
   */
  actions?: {
    label: string
    reply: string
    recommended?: boolean
    /**
     * The durable rule this choice teaches the agent, surfaced with a pin
     * once you pick it. Present ONLY where the decision changes what the
     * agent does next time — setting a source of truth, granting or
     * refusing an access, accepting a threshold. Re-running a failed job
     * or asking a colleague for context teaches nothing, and if every
     * action carried a pin the pin would mean nothing.
     */
    learned?: string
  }[]
  entities: RunEntity[]
}

/** `tone` follows the outcome, so the two can never disagree. */
export function toneFor(outcome: RunOutcome): ActivityTone {
  if (outcome === "done") return "idle"
  if (outcome === "needs_input") return "warning"
  return "critical"
}

/**
 * The scripted turns an agent plays after you brief it. `reply` ends on
 * its one question, `question` is that same question as options, and
 * `plan` is what lands once you answer it.
 */
export type AgentThread = {
  reasoning: string[]
  reply: string[]
  /** The reply's closing question, as the clarifying panel's options. */
  question: { text: string; options: string[] }
  /** Four numbered steps with explicit thresholds. */
  plan: string[]
  /** Offered after the plan: save what was agreed as a policy. */
  policyOffer: { text: string; options: string[] }
}

/**
 * "New agent" does not go back to the templates — it opens a conversation
 * and lets One work out what you need (per Oskar, 2026-09-02). The prompt
 * is put in the user's mouth deliberately: it is what the button MEANS,
 * and the alternative (a blank composer) makes you write the request for
 * help before you can get any.
 *
 * "A few questions" and the voice rule "one question, never two" are
 * reconciled by asking them IN SEQUENCE, one per turn — which is the
 * chain the agent threads already run: what to delegate → how it should
 * work → save it as policy.
 */
export const NEW_AGENT_PROMPT =
  "I want to set up an agent. Briefly explain how agents work in Factorial, then ask me a few questions to figure out what I'd like Factorial to do."

export const NEW_AGENT_THREAD = {
  reasoning: [
    "Checking which of your tools I can already reach.",
    "Looking at what the existing templates cover.",
    "Working out which question actually matters before asking any.",
  ],
  reply: [
    "An agent is a conversation with a job. You brief it once, it runs on a schedule, and every run lands back in its thread — that thread is its whole record.",
    "It only ever acts within your permissions, and anything outside the limits you set comes to you instead of happening quietly.",
    "What should it take off your plate?",
  ],
  question: {
    text: "What should it take off your plate?",
    /** Each option maps to a template — see NEW_AGENT_ROUTES. */
    options: [
      "Keep me on top of what changed",
      "Reconcile expenses and chase receipts",
      "Watch performance and find regressions",
      "Source candidates for open roles",
    ],
  },
}

/** Which template each answer above becomes. */
export const NEW_AGENT_ROUTES: Record<string, string> = {
  "Keep me on top of what changed": "chief-of-staff",
  "Reconcile expenses and chase receipts": "expense-manager",
  "Watch performance and find regressions": "product-performance",
  "Source candidates for open roles": "talent-scout",
}

const person = (id: string, label: string): RunEntity => ({
  type: "person",
  id,
  label,
})

export const AGENT_THREADS: Record<
  string,
  { thread: AgentThread; entries: RunEntry[] }
> = {
  "chief-of-staff": {
    thread: {
      reasoning: [
        "Reading what is already connected: calendar, docs, the inbox queue.",
        "Looking at last week's decisions to see which ones never closed.",
        "Setting the scope: priorities and coordination, nothing executive-assistant.",
      ],
      reply: [
        "Got it. I'll run this as CoS: priorities, coordination, no theater.",
        "Blank slate on this side. Me, one unused bot, nothing connected yet.",
        "What's the one thing this team has to get right this week?",
      ],
      question: {
        text: "What matters most this week?",
        options: [
          "Close the 4 contract renewals",
          "Get hiring back on plan",
          "Cut the inbox backlog",
        ],
      },
      plan: [
        "Every morning at 08:00, list what changed since yesterday and flag only items with a date inside 7 days.",
        "Chase any decision older than 3 days with no owner — one nudge, then it comes to you.",
        "Hold anything that would commit more than €10,000 or touch someone's contract for your approval.",
        "Friday 16:00, one summary: what closed, what slipped, and the single thing at risk for next week.",
      ],
      policyOffer: {
        text: "Save this as your standing policy?",
        options: ["Yes", "With changes", "No"],
      },
    },
    entries: [
      {
        at: "2026-09-01T08:02:00Z",
        trigger: "schedule",
        summary: "Notion is already connected",
        outcome: "needs_input",
        reason:
          "Two of your workspaces both hold a 'Q3 priorities' page, so I can't tell which one you actually keep up to date.",
        analysis:
          "I compared them: Ops was edited today and has all 11 items dated, Leadership was last touched on 12 Aug and is missing dates on 4. Ops looks like the live one.",
        actions: [
          {
            label: "Use Ops",
            recommended: true,
            reply:
              "I've set Ops as your source of truth for priorities and read all 11 dated items from it. The Leadership copy of the page is out of my reads.",
            learned: "Ops workspace is the source of truth for priorities",
          },
          {
            label: "Use Leadership",
            reply:
              "I've set Leadership as your source of truth for priorities and stopped treating the Ops edits as newer. The 4 items with no date are flagged for you.",
            learned:
              "Leadership workspace is the source of truth for priorities",
          },
        ],
        entities: [person("emp-002", "Marie Curie")],
      },
      {
        at: "2026-08-31T08:01:00Z",
        trigger: "schedule",
        summary: "Flagged 3 decisions with no owner",
        outcome: "done",
        count: 3,
        evidence: [
          "all older than 3 days",
          "no assignee on any of them",
          "one nudge sent, none escalated",
        ],
        command: "Audited decisions",
        result:
          "All 3 had sat for more than 3 days with no assignee. I sent one nudge on each and escalated none.",
        log: [
          "$ decisions.scan --older-than 3d --no-assignee",
          "-> 3 matched",
          "OK assignee empty on 3 of 3",
          "$ decisions.nudge --once",
          "-> nudges sent: 3 of 3",
          "OK escalated: 0",
        ],
        entities: [
          person("emp-001", "Ada Lovelace"),
          person("emp-006", "Diego Hernández"),
        ],
      },
      {
        at: "2026-08-29T16:00:00Z",
        trigger: "schedule",
        summary: "Weekly summary sent",
        outcome: "done",
        evidence: [
          "9 of 11 items closed",
          "2 slipped with a new date",
          "nothing above the €10,000 threshold",
        ],
        command: "Compiled weekly summary",
        result:
          "9 of the 11 items closed and 2 slipped, each with a new date. Nothing sat above the €10,000 threshold, so I sent it as written.",
        log: [
          "$ priorities.rollup --scope week",
          "-> 11 items in scope, 9 closed",
          "-> 2 slipped, new date on 2 of 2",
          "OK above €10,000 threshold: 0",
          "$ summary.send --to leadership",
          "OK delivered",
        ],
        entities: [person("emp-002", "Marie Curie")],
      },
      {
        at: "2026-08-28T08:03:00Z",
        trigger: "event",
        summary: "Held a €14,200 bonus list for approval",
        outcome: "done",
        evidence: [
          "over the €10,000 threshold",
          "matched February's formula",
          "held, not sent",
        ],
        command: "Vetted bonus list",
        result:
          "The list totals €14,200, over the €10,000 threshold, so I did not send it. The split matches February's formula, so nothing needs changing before you sign it off.",
        log: [
          "$ bonus.review --threshold-eur 10000",
          "-> list totals €14,200",
          "!  above the €10,000 threshold",
          "OK split matches February's formula",
          "-> held for approval, not sent",
        ],
        entities: [
          person("emp-001", "Ada Lovelace"),
          person("emp-004", "Grace Hopper"),
        ],
      },
      {
        at: "2026-08-27T08:01:00Z",
        trigger: "schedule",
        summary: "I lost access to your leadership calendar",
        outcome: "blocked",
        reason:
          "I can't see which decisions have a meeting behind them any more — the access went away on 26 Aug.",
        analysis:
          "I can keep going without it by flagging on age alone. That over-reports: last week it would have chased 3 decisions that were already settled in a meeting I couldn't see.",
        actions: [
          {
            label: "Give me access again",
            recommended: true,
            reply:
              "Access is back. I re-read the last week and dropped 2 decisions that a meeting had already closed.",
          },
          {
            label: "Carry on without it",
            reply:
              "Flagging now runs on age alone, with the calendar out of my checks. That over-reports: on last week's data it would have chased 3 settled decisions.",
            learned:
              "Decisions are flagged on age alone, with no calendar check",
          },
        ],
        entities: [person("emp-001", "Ada Lovelace")],
      },
      {
        at: "2026-08-26T08:02:00Z",
        trigger: "schedule",
        summary: "Closed 6 items from last week",
        outcome: "done",
        count: 6,
        evidence: [
          "each had a dated outcome",
          "owners confirmed in thread",
          "no item reopened since",
        ],
        command: "Closed out last week's items",
        result:
          "The 6 each had a dated outcome and an owner confirmed in thread, so I closed them. None has reopened since.",
        log: [
          "$ items.close --scope last-week --dry-run",
          "-> 6 candidates",
          "OK dated outcome on 6 of 6",
          "OK owner confirmed in thread on 6 of 6",
          "$ items.close --commit",
          "OK reopened since: 0",
        ],
        entities: [
          person("emp-006", "Diego Hernández"),
          person("emp-003", "Alan Turing"),
        ],
      },
    ],
  },

  "expense-manager": {
    thread: {
      reasoning: [
        "Checking which expense sources I can read.",
        "Reading last month's 212 claims to learn what usually goes missing.",
        "Working out what I chase on my own and what has to reach you.",
      ],
      reply: [
        "Right. I'll reconcile the week's expenses and chase whatever is missing a receipt or a category.",
        "34 of last month's 212 claims came in without a receipt. That is where the back-and-forth lives.",
        "Do you want me chasing people directly, or holding everything for your approval first?",
      ],
      question: {
        text: "How should I chase what's missing?",
        options: [
          "Chase people directly",
          "Hold everything for my approval",
          "Chase under €50, hold the rest",
        ],
      },
      plan: [
        "Every Monday at 08:00, reconcile the week's claims against the €50 policy and the category list.",
        "Auto-approve anything under €50 with a receipt and a matching category, and log the checks that passed.",
        "Chase a missing receipt once after 48 hours, then once more after 5 days, then stop and tell you.",
        "Anything over €50, a duplicate merchant, or a claim older than 30 days comes to you instead.",
      ],
      policyOffer: {
        text: "Save this as your standing policy?",
        options: ["Yes", "With changes", "No"],
      },
    },
    entries: [
      {
        at: "2026-09-01T08:04:00Z",
        trigger: "schedule",
        summary: "Approved 12 expenses under €50",
        outcome: "done",
        count: 12,
        evidence: [
          "all within the €50 policy",
          "categories matched",
          "no duplicate merchants",
        ],
        command: "Cleared under-limit expenses",
        result:
          "Every one of the 12 came in under the €50 limit with a category that matched, and no merchant showed up twice. Nothing to weigh up, so the batch went through in one pass and nothing was held.",
        entities: [
          person("emp-002", "Marie Curie"),
          person("emp-007", "Priya Patel"),
        ],
      },
      {
        at: "2026-08-25T08:04:00Z",
        trigger: "schedule",
        summary: "Held a €320 dinner for approval",
        outcome: "needs_input",
        reason:
          "€320 is over the €50 limit you set, so this one is yours rather than mine.",
        analysis:
          "It is filed as a team event with 8 attendees, which works out at €40 a head — inside the per-person limit, and in line with the last three team dinners. Diego attached the receipt.",
        actions: [
          {
            label: "Approve €320",
            recommended: true,
            reply:
              "The €320 is approved and logged as a team event at €40 a head, inside the per-person limit. From now on I clear team dinners at that shape myself and only ask when the per-head figure goes over it.",
            learned:
              "Team dinners inside the per-person limit clear without approval",
          },
          {
            label: "Reject",
            reply:
              "I've rejected the €320 claim and told Diego why. The claim stays open in case he wants to split it per attendee.",
          },
          {
            label: "Ask Diego why",
            reply:
              "I've asked Diego for the context behind the €320 and held the claim while I wait. His answer comes to you — I won't decide on it myself.",
          },
        ],
        entities: [
          person("emp-006", "Diego Hernández"),
          person("emp-007", "Priya Patel"),
        ],
      },
      {
        at: "2026-08-18T08:03:00Z",
        trigger: "schedule",
        summary: "Chased 7 missing receipts",
        outcome: "done",
        count: 7,
        evidence: [
          "each over 48 hours old",
          "one reminder each, none twice",
          "5 came back within a day",
        ],
        command: "Chased missing receipts",
        result:
          "The 7 claims with no receipt were all past 48 hours, so each got a single reminder and nobody was chased twice. 5 receipts came back within a day.",
        log: [
          "$ receipts.chase --missing --older-than 48h",
          "-> 7 claims with no receipt, every one past 48h",
          "OK reminders sent: 7, one per claim, none twice",
          "-> 5 receipts back within a day",
          "!  the rest are still open, no second reminder sent",
        ],
        entities: [
          person("emp-005", "Lin Chen"),
          person("emp-002", "Marie Curie"),
        ],
      },
      {
        at: "2026-08-11T08:05:00Z",
        trigger: "schedule",
        summary: "Last expenses approved",
        outcome: "done",
        count: 19,
        evidence: [
          "all within the €50 policy",
          "categories matched",
          "no claim older than 30 days",
        ],
        command: "Reconciled weekly claims",
        result:
          "All 19 claims were under the €50 limit, matched a category in the policy list, and none was older than 30 days. I approved all 19 and held nothing back.",
        log: [
          "$ expenses.reconcile --window week --limit-eur 50",
          "-> 19 claims in scope",
          "OK 19/19 under the €50 limit",
          "OK 19/19 matched a category in the policy list",
          "OK oldest claim inside the 30-day window",
          "-> 19 approved, 0 held",
        ],
        entities: [
          person("emp-007", "Priya Patel"),
          person("emp-004", "Grace Hopper"),
        ],
      },
      {
        at: "2026-08-04T08:04:00Z",
        trigger: "schedule",
        summary: "I couldn't finish last Monday's reconciliation",
        outcome: "failed",
        reason:
          "The card feed didn't come back, and I would rather skip a week than approve against half the data.",
        analysis:
          "The provider has been fine since Tuesday, so a re-run should just work. Nothing was approved in the meantime — the 19 claims from that week are still waiting.",
        actions: [
          {
            label: "Run it again now",
            recommended: true,
            reply:
              "The re-run came back clean: the card feed was complete this time, 19 claims, all within policy, nothing held. That week is closed.",
          },
        ],
        entities: [person("emp-005", "Lin Chen")],
      },
      {
        at: "2026-07-28T08:03:00Z",
        trigger: "schedule",
        summary: "Approved 15 expenses, split 2 duplicates",
        outcome: "done",
        count: 15,
        evidence: [
          "all within the €50 policy",
          "2 duplicate merchants separated",
          "categories matched",
        ],
        command: "Split duplicate merchants",
        result:
          "15 claims sat under the €50 limit with matching categories. 2 hit the same merchant twice, so I separated them instead of letting a double charge through.",
        log: [
          "$ expenses.reconcile --window week --limit-eur 50",
          "-> 15 claims in scope",
          "OK 15/15 under the €50 limit",
          "OK 15/15 matched a category in the policy list",
          "!  merchant dedupe flagged 2 same-merchant charges",
          "-> 15 approved, 2 of them split into separate claims",
        ],
        entities: [
          person("emp-002", "Marie Curie"),
          person("emp-006", "Diego Hernández"),
        ],
      },
    ],
  },

  "product-performance": {
    thread: {
      reasoning: [
        "Listing the services I can pull timings from.",
        "Reading the last fortnight of p95s to set a baseline.",
        "Working out which regressions are worth interrupting you for.",
      ],
      reply: [
        "Understood. I'll watch the timings and only bring you regressions with evidence attached.",
        "Baseline is set from the last two weeks. Two endpoints are already drifting: the payroll export and the contracts list.",
        "What counts as bad enough to interrupt you — a p95 doubling, or anything a user would notice?",
      ],
      question: {
        text: "When should I interrupt you?",
        options: [
          "Only if p95 doubles",
          "Anything a user would notice",
          "Only if it breaks an SLO",
        ],
      },
      plan: [
        "Sample p95 and error rate every 15 minutes across the 9 endpoints that carry real traffic.",
        "Open an investigation when p95 rises above 2x the fortnight baseline for 3 consecutive samples.",
        "Attach the evidence before telling you: the deploy in the window, the slowest query, and the affected route.",
        "Say nothing for a spike under 3 samples — that is noise, and paging you for it costs more than it saves.",
      ],
      policyOffer: {
        text: "Save these thresholds as your standing policy?",
        options: ["Yes", "With changes", "No"],
      },
    },
    entries: [
      {
        at: "2026-09-01T14:12:00Z",
        trigger: "event",
        summary: "A restart may have dropped 40 export jobs",
        outcome: "failed",
        reason:
          "The worker went down mid-run at 14:07 and the queue came back empty, so I can't prove whether those jobs finished.",
        analysis:
          "A replay is safe: each job checks whether its export already exists, so anything that did finish gets skipped rather than duplicated. Leaving it risks 40 silently missing exports.",
        actions: [
          {
            label: "Replay them",
            recommended: true,
            reply:
              "All 40 jobs are replayed: 38 were already complete and got skipped, 2 had genuinely been lost and have now run. Nothing was duplicated.",
          },
          {
            label: "Leave it",
            reply:
              "The queue stands as it is, so no replay ran against the 40 jobs. If one of them turns up as a missing export, I'll flag it then.",
          },
        ],
        entities: [person("emp-003", "Alan Turing")],
      },
      {
        at: "2026-08-30T09:41:00Z",
        trigger: "event",
        summary: "Payroll export p95 down from 9.2s to 1.4s",
        outcome: "done",
        evidence: [
          "held for 6 hours after the deploy",
          "error rate flat at 0.02%",
          "same improvement on the contracts list",
        ],
        command: "Verified export speedup",
        result:
          "p95 on the payroll export fell from 9.2s to 1.4s and held there for 6 hours after the deploy. Error rate stayed flat at 0.02% and the contracts list moved the same way, so I recorded it as a real gain rather than a sampling quirk.",
        log: [
          "$ perf.compare --endpoint payroll.export --since deploy --window 6h",
          "-> p95 9.2s to 1.4s, held for the full 6h",
          "OK error rate flat at 0.02%",
          "$ perf.compare --endpoint contracts.list --since deploy --window 6h",
          "-> same improvement on the contracts list",
          "!  single deploy window, sampling continues",
        ],
        entities: [
          person("emp-001", "Ada Lovelace"),
          person("emp-003", "Alan Turing"),
        ],
      },
      {
        at: "2026-08-28T22:03:00Z",
        trigger: "schedule",
        summary: "Investigated 3 slow endpoints",
        outcome: "done",
        count: 3,
        evidence: [
          "each above 2x baseline for 3 samples",
          "all three traced to one N+1",
          "no user-facing error raised",
        ],
        command: "Traced slow endpoints",
        result:
          "All 3 endpoints sat above 2x baseline for 3 consecutive samples, and the traces resolve to one N+1. No user-facing error was raised, so I filed it as one cause covering all 3.",
        log: [
          "$ perf.scan --above 2x-baseline --consecutive 3",
          "-> 3 endpoints matched, each above 2x baseline for 3 samples",
          "$ trace.explain --slowest-query --group-by cause",
          "-> all 3 resolve to one N+1",
          "OK no user-facing error raised in the window",
          "!  grouped as one cause, not three",
        ],
        entities: [person("emp-003", "Alan Turing")],
      },
      {
        at: "2026-08-27T11:20:00Z",
        trigger: "event",
        summary: "The contracts list is slow and nobody owns it",
        outcome: "needs_input",
        reason:
          "p95 has sat at 3.1x baseline for two days, and it spans payroll and legal so neither team has picked it up.",
        analysis:
          "The slow query is the payroll join — it accounts for 2.6 of that 3.1x. Legal's part of the page is unchanged, so payroll is where the fix lives.",
        actions: [
          {
            label: "Assign to payroll",
            recommended: true,
            reply:
              "Ada in payroll owns it now, and the payroll join is attached as the cause: 2.6 of the 3.1x. Daily reporting is off until the p95 moves either way.",
            learned: "Payroll owns the contracts list endpoint",
          },
          {
            label: "Assign to legal",
            reply:
              "Grace in legal owns it now, and I've flagged that the payroll join carries 2.6 of the 3.1x. Daily reporting is off until the p95 moves either way.",
            learned:
              "Legal owns the contracts list endpoint, payroll join included",
          },
        ],
        entities: [
          person("emp-001", "Ada Lovelace"),
          person("emp-004", "Grace Hopper"),
        ],
      },
      {
        at: "2026-08-24T03:15:00Z",
        trigger: "schedule",
        summary: "Ignored a 40-second spike",
        outcome: "done",
        evidence: [
          "2 samples only, under the 3-sample rule",
          "recovered on its own",
          "no error rate change",
        ],
        command: "Dismissed a latency spike",
        result:
          "The 40-second spike showed in 2 samples, under my 3-sample rule, and recovered on its own with no change in error rate. I said nothing.",
        entities: [person("emp-003", "Alan Turing")],
      },
      {
        at: "2026-08-20T09:02:00Z",
        trigger: "schedule",
        summary: "Baseline set across 9 endpoints",
        outcome: "done",
        count: 9,
        evidence: [
          "14 days of samples each",
          "no gaps over 15 minutes",
          "weekend traffic excluded",
        ],
        command: "Established endpoint baselines",
        result:
          "I sampled 14 days on each of the 9 endpoints that carry real traffic, with no gap over 15 minutes. Weekend traffic is excluded, so the baseline reflects working-day load only.",
        log: [
          "$ perf.baseline --endpoints 9 --window 14d --exclude weekends",
          "-> 14 days of samples per endpoint",
          "OK no sampling gap over 15 minutes",
          "OK 9 of 9 endpoints hold a complete series",
          "!  weekends excluded, no weekend baseline",
        ],
        entities: [person("emp-001", "Ada Lovelace")],
      },
    ],
  },

  "talent-scout": {
    thread: {
      reasoning: [
        "Reading the open roles and what each one actually needs.",
        "Checking which sourcing channels I am allowed to touch.",
        "Drafting an outreach voice that sounds like you, not like a template.",
      ],
      reply: [
        "Fine. I'll source against the open roles and write the first message myself. You approve before anything sends.",
        "Four roles are open. Senior Designer has been live 41 days, which is the one worth attacking first.",
        "Should I source outside the ATS, or only rank the people who have already applied?",
      ],
      question: {
        text: "How wide should I source?",
        options: [
          "Only who has already applied",
          "Source outside the ATS too",
          "Referrals first, then outside",
        ],
      },
      plan: [
        "Rank the existing pipeline first and only go outside once fewer than 5 candidates score above the bar.",
        "Draft outreach per person, citing something real from their work — never a merge field on its own.",
        "Nothing sends without your approval, and no one gets contacted twice within 90 days.",
        "Stop sourcing a role the moment it has 3 candidates at final stage, and tell you rather than keep going.",
      ],
      policyOffer: {
        text: "Save this as your standing policy?",
        options: ["Yes", "With changes", "No"],
      },
    },
    entries: [
      {
        at: "2026-09-01T07:30:00Z",
        trigger: "schedule",
        summary: "9 profiles ready for your review",
        outcome: "needs_input",
        reason:
          "9 people clear the bar for Senior Designer, which is more than the 5 we agreed I'd bring you.",
        analysis:
          "The top 5 are clearly ahead: all have shipped design systems work, which is the part of the role that has been hardest to fill. The other 4 are strong but generalist.",
        actions: [
          {
            label: "Show me the top 5",
            recommended: true,
            reply:
              "The top 5 are surfaced, with all 9 still in your review queue, ranked. No outreach has gone to any of them.",
          },
          {
            label: "Just the top 5",
            reply:
              "The top 5 are queued and the other 4 are held rather than dropped. From now on I stop at 5 per role.",
            learned: "Review queue stays capped at the top 5 per role",
          },
        ],
        count: 9,
        entities: [person("emp-004", "Grace Hopper")],
      },
      {
        at: "2026-08-29T07:31:00Z",
        trigger: "schedule",
        summary: "Ranked 34 existing applicants",
        outcome: "done",
        count: 34,
        evidence: [
          "all already in the ATS",
          "scored against the role's own requirements",
          "nobody contacted at this stage",
        ],
        command: "Scored inbound pipeline",
        result:
          "All 34 were already in the ATS, so nothing came from outside sourcing. I scored them against the role's own requirements and left a ranked queue; nobody has been contacted at this stage.",
        log: [
          "$ applicants.rank --scope ats-only",
          "-> 34 applicants scored against the role's own requirements",
          "OK external profiles pulled: 0",
          "OK outreach sent: 0",
        ],
        entities: [
          person("emp-004", "Grace Hopper"),
          person("emp-007", "Priya Patel"),
        ],
      },
      {
        at: "2026-08-27T07:30:00Z",
        trigger: "schedule",
        summary: "Drafted 6 outreach messages",
        outcome: "done",
        count: 6,
        evidence: [
          "each cites a specific piece of the person's work",
          "no one contacted in the last 90 days",
          "all held for approval",
        ],
        command: "Drafted outreach messages",
        result:
          "I wrote 6 drafts, each quoting a specific piece of the person's work rather than leaning on a merge field. None of the 6 had been contacted in the last 90 days, and all of them are held for your approval.",
        log: [
          "$ outreach.draft --candidates 6 --cite work-sample",
          "-> 6 drafts written, each citing a specific piece of the person's work",
          "OK prior contacts in the 90-day window: 0",
          "!  held for approval: 0 of 6 queued to send",
        ],
        entities: [person("emp-007", "Priya Patel")],
      },
      {
        at: "2026-08-25T07:32:00Z",
        trigger: "event",
        summary: "Stopped sourcing for Staff Engineer",
        outcome: "done",
        evidence: [
          "3 candidates at final stage",
          "threshold from the plan reached",
          "no further outreach sent",
        ],
        command: "Halted Staff Engineer sourcing",
        result:
          "Staff Engineer hit 3 candidates at final stage, which is the threshold from the plan. I stopped sourcing the role on the spot and sent no further outreach.",
        entities: [
          person("emp-003", "Alan Turing"),
          person("emp-001", "Ada Lovelace"),
        ],
      },
      {
        at: "2026-08-21T07:30:00Z",
        trigger: "schedule",
        summary: "I can't source outside the ATS yet",
        outcome: "blocked",
        reason:
          "The LinkedIn integration is missing the sourcing permission, so right now I can only rank people who already applied.",
        analysis:
          "That matters for Senior Designer specifically: only 6 of its 34 applicants clear the bar, so the pipeline is unlikely to fill it without going outside. The other three roles are fine on inbound.",
        actions: [
          {
            label: "Grant the permission",
            recommended: true,
            reply:
              "Permission is through, so I've run a first pass on Senior Designer: 11 profiles worth reading. The other three roles stay on inbound.",
          },
          {
            label: "Ask Marie to grant it",
            reply:
              "I've sent Marie the permission request and will keep ranking the people already in the ATS until it lands.",
          },
        ],
        entities: [person("emp-002", "Marie Curie")],
      },
      {
        at: "2026-08-18T07:31:00Z",
        trigger: "schedule",
        summary: "Researched 11 profiles for Senior Designer",
        outcome: "done",
        count: 11,
        evidence: [
          "portfolio checked on each",
          "none duplicated from the pipeline",
          "no message sent yet",
        ],
        command: "Reviewed candidate portfolios",
        result:
          "I checked the portfolio on all 11 and none of them were already in the pipeline, so the whole set is new for Senior Designer. No message has gone out yet.",
        log: [
          "$ sourcing.research --role senior-designer --profiles 11",
          "-> 11 portfolios read in full",
          "OK already in the pipeline: 0 of 11",
          "OK outreach sent: 0",
        ],
        entities: [
          person("emp-004", "Grace Hopper"),
          person("emp-005", "Lin Chen"),
        ],
      },
    ],
  },
}

/** Runs that stopped and are waiting on you. */
export function needsYou(entries: RunEntry[]): RunEntry[] {
  return entries.filter((e) => e.outcome !== "done")
}

/**
 * The line that opens the log. "This is what I have done so far" was
 * transactional — it described the component instead of telling you where
 * you stand (per Oskar's review). This counts the runs and puts you in
 * the director's seat: what went through, what is waiting, and on what.
 *
 * Derived, not written, so it can never disagree with the list under it.
 */
export function runSummary(entries: RunEntry[]): string {
  const done = entries.filter((e) => e.outcome === "done")
  const waiting = needsYou(entries)
  const items = done.reduce((sum, e) => sum + (e.count ?? 0), 0)
  const cleared = items > 0 ? ` and cleared ${items} items` : ""
  if (waiting.length === 0) {
    return `${entries.length} runs so far. All of them went through on their own${cleared} — nothing is waiting on you.`
  }
  const what = waiting.length === 1 ? "one call" : `${waiting.length} calls`
  return `${entries.length} runs so far: ${done.length} went through on their own${cleared}. I need ${what} from you before I can go further — they are at the top.`
}

/** A short absolute stamp — deterministic, unlike a relative one that
 *  would drift as the prototype gets demoed over weeks. */
export function runStamp(at: string): string {
  return new Date(at).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  })
}
