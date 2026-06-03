import { useEffect, useRef } from "react"

import { useAiChat } from "@/copilot"

// eslint-disable-next-line no-console
console.log("[OPENER-PROBE] module loaded", new Date().toISOString())

/**
 * Mount-time opener for the Expense Policy settings prototype.
 *
 * ──────────────────────────────────────────────────────────────────
 * Architecture (rev. 2026-05, Mastra-side)
 * ──────────────────────────────────────────────────────────────────
 *
 * The welcome conversation is OWNED BY THE AGENT, not the frontend.
 * The `expensePolicySetup` skill in factorial-agent
 * (`src/mastra/one/prompts/skills-v3/expensePolicySetup.ts`) says: on
 * any user message when `setup.q1Answered === false`, greet briefly
 * and call `askClarifyingQuestion` with Q1.
 *
 * So this hook's only job is to send ONE real user message ("Start
 * setup") on mount. Mastra replies with Q1 in its own voice — no fake
 * assistant injection, no risk of the agent losing track of its own
 * conversation, no race against the appendMessages bridge.
 *
 * ── Why poll? ─────────────────────────────────────────────────────
 *
 * `sendMessage` silently no-ops when CopilotKit's bridge has not
 * wired up yet (see AiChatStateProvider line 353 — early return on
 * null ref). Cold Mastra warmup can take 1–3 s. We poll every
 * POLL_INTERVAL_MS calling `sendMessage("Start setup")`. Each call
 * is either a no-op (bridge still null) or it lands.
 *
 * To stop polling once a call lands, we probe the DOM for the
 * fingerprint "Start setup" — that text only appears as a user
 * bubble after CopilotKit successfully renders it. Once present,
 * we stop. Subsequent ticks that would have re-fired never run
 * because the probe trips first.
 *
 * `firedAtLeastOnceRef` defeats React StrictMode double-invoke.
 */
const POLL_INTERVAL_MS = 250
const POLL_BUDGET_MS = 15_000
// Plain text trigger — this is the known-working payload (Mastra
// replied on the previous verified round). We accept the visible user
// bubble for now; hiding it via <tool-context> caused CopilotKit /
// Mastra to drop the message silently (bridge-never-wired regression
// 2026-05). Hidden-trigger polish is a follow-up iteration.
//
// The URL slug + "Regular expense form" keyword route the skill router
// to `expensePolicySetup`. The agent's Turn 0 fires on any kickoff
// message when setup.q1Answered is false.
const TRIGGER_MESSAGE =
  "I'm on /p/expense-policy-settings and want to set up the Regular expense form. Please greet me and show me the Start setup button."
// Probe fingerprint: a stable phrase the agent's welcome bubble
// contains. Skill prompt makes this deterministic — see
// expensePolicySetup.ts Turn 0.
const WELCOME_FINGERPRINT = "set up your expense policy"

// Module-scope guard: survives React StrictMode's mount→unmount→remount
// cycle in dev (the previous ref-based guard fell with cleanup). Once
// the opener starts on this page-load, it never restarts.
let openerStarted = false

export function useCoCreationOpenerAction(): void {
  // eslint-disable-next-line no-console
  console.log("[OPENER-PROBE] hook called")
  const { sendMessage, setOpen } = useAiChat()

  // Keep latest callbacks in refs so the effect deps stay [].
  const sendMessageRef = useRef(sendMessage)
  const setOpenRef = useRef(setOpen)
  sendMessageRef.current = sendMessage
  setOpenRef.current = setOpen

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(
      "[OPENER-PROBE] effect entry, openerStarted =",
      openerStarted
    )
    if (openerStarted) return
    openerStarted = true

    setOpenRef.current(true)

    const startedAt = Date.now()
    let intervalId: number | null = null

    const triggerOnScreen = (): boolean =>
      (document.body.textContent ?? "").includes(WELCOME_FINGERPRINT)

    const tick = () => {
      if (triggerOnScreen()) {
        if (intervalId !== null) {
          window.clearInterval(intervalId)
          intervalId = null
        }
        // eslint-disable-next-line no-console
        console.log(
          "[expense-policy-settings] opener landed after",
          Date.now() - startedAt,
          "ms"
        )
        return
      }

      if (Date.now() - startedAt >= POLL_BUDGET_MS) {
        if (intervalId !== null) {
          window.clearInterval(intervalId)
          intervalId = null
        }
        // eslint-disable-next-line no-console
        console.error(
          "[expense-policy-settings] opener could not land within",
          POLL_BUDGET_MS,
          "ms — Mastra bridge never wired. Check factorial-agent and mastra.local.factorial.dev cert."
        )
        return
      }

      sendMessageRef.current(TRIGGER_MESSAGE)
    }

    // First attempt synchronous on mount — warm bridge lands now.
    sendMessageRef.current(TRIGGER_MESSAGE)
    intervalId = window.setInterval(tick, POLL_INTERVAL_MS)

    // Intentionally NO cleanup. StrictMode's fake unmount would
    // otherwise clear our interval before it gets a chance to land
    // the message. The interval self-cleans on landed/budget, and
    // the module-scope `openerStarted` guard prevents any restart.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
