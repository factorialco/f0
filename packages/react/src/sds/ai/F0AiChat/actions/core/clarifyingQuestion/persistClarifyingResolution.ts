import type { ResolvedStepAnswer } from "./types"

/**
 * Arguments to persist the resolution of a clarifying question tool call.
 * Posts to the backend so the tool's args include `isResolved: true` and
 * the captured answers, which makes the render component return null on
 * subsequent history loads.
 */
export interface PersistClarifyingResolutionParams {
  /** Chat API endpoint base (e.g. copilotApiConfig.chatApiEndpoint) */
  chatApiEndpoint: string
  /** Headers required by the CopilotKit API (usually from copilotApiConfig.headers) */
  headers?: Record<string, string>
  /** Current CopilotKit thread id */
  threadId: string
  /** Unique tool call id emitted by the backend */
  toolCallId: string
  /** Updated args to persist on the tool call */
  args: {
    steps: unknown
    isResolved: true
    answers: ResolvedStepAnswer[]
    /**
     * Set to `true` when the user cancelled the flow with Escape. The
     * tool call is still marked as resolved so the render is a no-op on
     * reload, but the flag lets the agent (or any future UI) distinguish
     * "answered" from "cancelled without answering".
     */
    cancelled?: boolean
  }
}

/**
 * Fire-and-forget PATCH to mark a ClarifyingQuestion tool call as resolved.
 *
 * Failures are swallowed (logged) — if persistence fails the user still
 * moves forward; worst case the panel reappears on the next history load
 * but the summary message sent via `sendMessage` keeps the agent's context.
 */
export async function persistClarifyingResolution({
  chatApiEndpoint,
  headers,
  threadId,
  toolCallId,
  args,
}: PersistClarifyingResolutionParams): Promise<void> {
  try {
    await fetch(
      `${chatApiEndpoint}/chat-history/threads/${encodeURIComponent(
        threadId
      )}/tool-calls/${encodeURIComponent(toolCallId)}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          ...(headers ?? {}),
        },
        credentials: "include",
        body: JSON.stringify({ args }),
      }
    )
  } catch (error) {
    // Non-fatal: best-effort persistence.
    // eslint-disable-next-line no-console
    console.warn("[ClarifyingQuestion] Failed to persist resolution", error)
  }
}
