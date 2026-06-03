/**
 * Demo mode = the agent-less build (the public Vercel deploy).
 *
 * The whole chat experience — the interview's questions, the seeded
 * greetings, free-text co-creation — rides on the live Mastra agent. A
 * static Vercel deploy can't reach it (the agent's CORS doesn't allow the
 * vercel.app origin, and there's no public agent). So on that build we
 * run a self-contained, scripted version of the entry flows that needs no
 * agent (see DemoInterview + the demo greeting).
 *
 * Primary signal is the build-time flag `VITE_DEMO_MODE=1`, set by
 * `scripts/deploy-share.sh`. Localhost dev (no flag) keeps the real
 * agent-driven experience untouched.
 *
 * `agentUnreachable` is a runtime fallback: if the chat fails to reach the
 * agent at runtime, callers can flip this so the prototype degrades into
 * demo mode even on a build that wasn't flagged.
 */
import { agentUrlOverride } from "@/shell/aiChatConfig"

let agentUnreachable = false

export function markAgentUnreachable(): void {
  agentUnreachable = true
}

export function isDemoMode(): boolean {
  // An explicit agent URL (?agent=…, e.g. a tunnel to a local Mastra) means
  // REAL mode — even on a build flagged for demo. It wins over everything:
  // sharing `…?agent=<tunnel>` gives the recipient the full live experience.
  if (agentUrlOverride()) return false
  const flag = import.meta.env.VITE_DEMO_MODE
  if (flag === "1" || flag === "true") return true
  if (agentUnreachable) return true
  // Manual override for previewing demo mode on localhost (agent running):
  // ?demo=1 in the URL. Lets us test the agent-less flow without a deploy.
  try {
    if (window.location.search.includes("demo=1")) return true
  } catch {
    // SSR / no window — ignore
  }
  return false
}
