/**
 * One's opening read on a screen: what it found, and what you can do
 * about each thing without leaving the panel.
 *
 * This is the AGENTS flow pointed at a screen instead of an agent (per
 * Oskar): the navbar's One button no longer opens a blank composer, it
 * opens a conversation that already contains the work. Nothing here is
 * generated — it is a mock, same as `agentThreads`, and it follows the
 * same voice rules: dry, real figures, no filler, and the last line asks
 * the one thing worth asking.
 *
 * Card design: Figma 2760:589016 / 589110 / 589165. All three titles and
 * details below are that frame's own copy, verbatim.
 */

export type InsightTone = "critical" | "warning" | "neutral"

export type InsightAction = {
  label: string
  /** What One says once you pick it. Paragraphs, like every other reply. */
  reply: string[]
  /**
   * The ONE thing the reply asks for, as the same clarifying card the
   * agents flow uses (per Oskar: "utiliza el componente que tenemos en
   * agents"). It carries the quick replies after a filter, the
   * human-in-the-loop confirmation before a destructive batch, and the
   * day picker for a routine — three different jobs, one component.
   */
  question?: { key: string; text: string; options: string[] }
  /** One reaching into the screen behind the panel. */
  focus?: "dormant"
}

export type Insight = {
  id: string
  tone: InsightTone
  /** The tag's word. A colour on its own says nothing to a screen reader,
   *  and "orange" is not a status. */
  status: string
  title: string
  detail: string
  /** Exactly two, in this order: the black one, then the outline one. */
  actions: [InsightAction, InsightAction]
}

/**
 * The steps One shows while it works, before it says anything.
 *
 * They name what is ACTUALLY on the People screen behind the panel (per
 * Oskar) — the headcount banner's 2,714 / 122 / 37, the second banner's
 * 472 uninvited, and the table's own Contract status and Access status
 * columns. That is what makes the reading believable: each step is a
 * column you can see, and each card below traces to a row you can see —
 * Lin Chen is the "Ending soon" contract in Singapore, Grace Hopper is
 * the "Uninvited" access status.
 */
export const PEOPLE_INSIGHT_REASONING = [
  "Reading the directory — 2,714 records, 122 joiners and 37 leavers this period.",
  "Checking Contract status against each entity's notice period.",
  "Cross-checking Access status against hire date: 472 uninvited, 122 of them hired this month.",
]

/** One's first turn — the context before the cards. */
export const PEOPLE_INSIGHT_INTRO = [
  "I went through the directory. One contract is about to lapse and an unusual number of accounts are holding a licence nobody is using.",
  "This is where I would start today.",
]

/**
 * What One says once you answer one of the cards' questions.
 *
 * Keyed the same way the agents flow keys its own — a string, because a
 * function cannot survive being persisted with the conversation.
 */
export const INSIGHT_ANSWERS: Record<string, (answer: string) => string[]> = {
  "insight-dormant-next": (answer) =>
    answer.startsWith("Deactivate")
      ? [
          "All 14 are deactivated and the licences are released. I kept the records — this reverses if somebody comes back.",
          "2 of the 14 were on leave rather than gone, so I have flagged those two for you by name in case that was not the intention.",
        ]
      : [
          "They are yours to read. The table stays filtered to the 14 until you clear it.",
          "Select whichever you want gone and tell me, or say the word and I will take all 14.",
        ],
  "insight-deactivate-confirm": (answer) =>
    answer.startsWith("Confirm")
      ? [
          "Done. 14 accounts deactivated, 14 licences back. The records are intact, so this reverses if anyone returns.",
        ]
      : [
          "Cancelled — nothing was revoked and all 14 still have access.",
          "The table is still filtered to those 14 if you want to go through them one at a time.",
        ],
  "insight-reminder-day": (answer) => [
    `Routine set. Every ${answer} at 09:00 I will chase anyone who has been at Pending to accept for more than 7 days.`,
    "It applies to this month's 122 and to everyone hired after them, so you should not have to ask again.",
  ],
}

export const PEOPLE_INSIGHTS: Insight[] = [
  {
    id: "lin-chen-renewal",
    tone: "warning",
    status: "Urgent",
    title: "Renew Lin Chen's contract",
    detail: "Expires in 15 days (Singapore). No active draft.",
    actions: [
      {
        label: "Start renewal",
        reply: [
          "Done. I drafted Lin Chen's renewal on the terms of his current contract — same band, same hours, Singapore entity — and pinged his manager on Slack to approve it before Friday.",
          "Want me to filter the 14 dormant accounts into the table so you can look them over?",
        ],
      },
      {
        label: "Notify manager",
        reply: [
          "I sent Marie Curie a reminder that the contract expires in 15 days, with the current terms and a link to start the renewal. I have not drafted anything myself.",
          "I will tell you when a draft is ready. If nothing has moved by Wednesday I will chase again — that still leaves 10 days, the shortest notice the Singapore entity accepts.",
        ],
      },
    ],
  },
  {
    id: "dormant-accounts",
    tone: "critical",
    status: "Risk",
    title: "Review 14 dormant accounts",
    detail: "Inactive for 3+ years (e.g. Grace Hopper). License risk.",
    actions: [
      {
        label: "Filter 14 anomalies",
        focus: "dormant",
        reply: [
          "The table beside you now shows only those 14. Nothing has been deactivated, so none of this is irreversible yet.",
        ],
        question: {
          key: "insight-dormant-next",
          text: "Deactivate all 14, or would you rather read them first?",
          options: ["Deactivate all", "I'll review them myself"],
        },
      },
      {
        label: "Deactivate accounts",
        reply: [
          "This one I will not do on my own. Deactivating revokes access for 14 people permanently and frees 14 licences, and 2 of them are on leave rather than gone.",
        ],
        question: {
          key: "insight-deactivate-confirm",
          text: "Revoke access for all 14 permanently?",
          options: ["Confirm deactivation", "Cancel"],
        },
      },
    ],
  },
  {
    id: "onboarding-invites",
    tone: "neutral",
    status: "Pending",
    title: "Send onboarding invitations",
    detail: "122 employees hired this month still don't have system access.",
    actions: [
      {
        label: "Send 122 invitations",
        reply: [
          "Invitations on their way — 122 emails with access instructions, each to the work address on the record.",
          "Their Access status in the table turns to Pending to accept over the next few minutes. 4 records carry a personal address only, so those are the ones to watch.",
        ],
      },
      {
        label: "Schedule reminder",
        reply: [
          "Nothing has gone out yet. I can make this a standing routine rather than a one-off, so anyone who sits at Pending for more than 7 days gets chased without you asking.",
        ],
        question: {
          key: "insight-reminder-day",
          text: "Which day should it run?",
          options: ["Monday", "Wednesday", "Friday"],
        },
      },
    ],
  },
]
