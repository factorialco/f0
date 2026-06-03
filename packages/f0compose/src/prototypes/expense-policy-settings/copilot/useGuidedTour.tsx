import { useAiChat } from "@/copilot"

import type { NavEntryId } from "../nav/navConfig"

/**
 * Setup intro — the single greeting One posts when the interview lands
 * the user in the editor.
 *
 * The guided, page-by-page walkthrough was removed (PM call): it ran
 * the user through each section with "Looks good →" chips, which felt
 * heavy. The experience now is simpler:
 *
 *  - One posts ONE message: "I've drafted your setup — review, edit
 *    anything, or publish when you're ready."
 *  - The free-text composer stays open the whole time, so the user
 *    engages with One whenever they want.
 *  - Co-creation still happens on demand: clicking a card's "Edit"
 *    button (or typing a request) prompts One to edit that thing
 *    together. That behaviour is unchanged — it just isn't scripted
 *    into a tour anymore.
 *
 * The hook keeps its `{ setActiveNavId }` arg + `postGreeting` return so
 * the call site in ExpensePolicySettings doesn't change; the nav setter
 * is no longer needed here (no tour navigation) and is intentionally
 * unused.
 */

export type SetupRoute = "interview" | "defaults"

// Two landing greetings, one per empty-state route:
//  - interview: One built the setup from the user's answers.
//  - defaults:  One seeded common-practice defaults; nudge the user that
//    they can tailor it by chatting OR by uploading their policy / a few
//    expense documents for extra context.
const GREETING_BODY: Record<SetupRoute, string> = {
  interview:
    "Perfect — I've drafted your Expenses setup based on your answers ✨ Take a look and edit anything you like, then hit **Publish changes** when you're ready. Want to change something? Just tell me and we'll do it together.",
  defaults:
    "Done — I've set up your Expenses with sensible defaults based on common practice ✨ Review and edit anything you like, then hit **Publish changes** when you're ready.\n\nWant it tailored to your company? Tell me how things work — or **upload your current expense policy or a few expense documents** and I'll pull the details from them for extra context.",
}

export function useGuidedTour(args: {
  setActiveNavId: (id: NavEntryId) => void
}): { postGreeting: (route?: SetupRoute) => void } {
  // No tour navigation anymore — kept only for call-site compatibility.
  void args

  const { clearAndAppend } = useAiChat()

  const postGreeting = (route: SetupRoute = "interview") => {
    // RESET the chat (drop any prior transcript) and seed the one clean
    // intro message for this route, so the editor opens with a single
    // fresh greeting and an open composer below it — nothing else.
    clearAndAppend([{ role: "assistant", content: GREETING_BODY[route] }])
  }

  return { postGreeting }
}
