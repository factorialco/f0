import type { Conversation } from "./conversationStore"

/**
 * A few threads already behind you, so Home's history is not an empty
 * panel on a first load (Angel, 2026-09-14). They are seeded ONCE —
 * `loadPersisted` writes them through on the first run, and after that
 * your own conversations are the file.
 *
 * Written as real exchanges rather than titles alone: opening one has to
 * show something, and the Recents rows read from the same objects.
 */

const MINUTE = 60_000
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

export function seedConversations(now: number): Conversation[] {
  const thread = (
    id: string,
    title: string,
    ago: number,
    turns: [string, string]
  ): Conversation => ({
    id,
    title,
    lastActiveAt: now - ago,
    thinking: false,
    messages: [
      { id: `${id}-u`, role: "user", content: turns[0] },
      { id: `${id}-a`, role: "assistant", content: turns[1] },
    ],
  })

  return [
    thread("seed-1", "Time off over Easter", 3 * HOUR, [
      "Who is off the week of Easter?",
      "Nine people across three teams, and only Design drops below half: Marta, Diego and Lucía overlap Tuesday to Thursday. Everyone else is covered.",
    ]),
    thread("seed-2", "Headcount plan vs actuals", 2 * DAY, [
      "How are we tracking against the hiring plan?",
      "Two roles behind: Senior Designer is at offer stage and the Backend role has no candidate past screening. The rest of Q3 is on plan.",
    ]),
    thread("seed-3", "Onboarding for the September joiners", 5 * DAY, [
      "What is missing for the four people starting in September?",
      "Three of the four are ready. Olu is missing an equipment assignment and a signed NDA — both are with IT since Monday.",
    ]),
    thread("seed-4", "Q2 bonus breakdown", 9 * DAY, [
      "Break down the Q2 bonus by team",
      "€34,200 across 14 people: Sales €18,400, Product €9,100, Operations €6,700. All inside the February formula and the €35k cap.",
    ]),
  ]
}
