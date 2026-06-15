import { type TranscribeFn } from "@/sds/ai/F0AiChat/types"

const pickRandom = <T>(items: readonly T[]): T =>
  items[Math.floor(Math.random() * items.length)]

const MOCK_TRANSCRIPTS = [
  "How many vacation days do I have left this year and how many of them can I carry over to next year if I don't use them before December?",
  "Please schedule a one-on-one with everyone on the design team next week, ideally in the mornings, and leave Friday free because we have the quarterly review with the leadership team.",
  "Remind me to review the onboarding checklist for the three new hires starting on Monday, and double check that their laptops, access cards and payroll details are ready before their first day.",
  "Draft a short announcement for the whole company explaining that the office will be closed on the twenty fourth and that everyone can work from home during the last week of the year.",
  "I want a summary of the overtime hours logged by the warehouse team this month compared to last month, broken down by week, so we can decide if we need to hire extra people for the holiday season.",
  "Take a note that during today's retrospective the team mentioned the deployment process is still too slow, that the documentation for the new API is missing examples, and that we should celebrate the launch with a team lunch.",
] as const

/**
 * Simulates a streaming STT endpoint: picks a random long transcript and emits
 * it word by word so the surface fills live (Wispr Flow feel) without any
 * backend.
 */
export const mockTranscribe: TranscribeFn = async (
  _audio,
  { onPartial, signal }
) => {
  const transcript = pickRandom(MOCK_TRANSCRIPTS)
  const words = transcript.split(" ")
  let acc = ""
  for (const word of words) {
    if (signal?.aborted) break
    await new Promise((r) => setTimeout(r, 60 + Math.random() * 100))
    acc = acc ? `${acc} ${word}` : word
    onPartial(acc)
  }
  return transcript
}

const MOCK_ENHANCED_TEXTS = [
  `<p>Our quarterly review highlighted <b>three priorities</b> for the next cycle: improving the onboarding experience, reducing the time it takes to close payroll, and giving managers better visibility over team workloads.</p><p>Each priority now has a clear owner and a measurable target, so we can track progress week by week instead of waiting for the end of the quarter to find out where we stand.</p>`,
  `<p>Thank you for your patience while we reviewed your request. After checking the policy and your remaining balance, <b>your time off has been approved</b> from the 12th to the 23rd.</p><ul><li>Your tasks will be covered by the on-call rotation.</li><li>Pending approvals were delegated to your manager.</li><li>Payroll will reflect the change automatically.</li></ul><p>Enjoy your well-deserved break!</p>`,
  `<p>The new expense workflow is now live for the whole company. From today, receipts are scanned automatically, mileage is calculated from the route you enter, and <b>reimbursements are processed within five working days</b>.</p><p>If anything looks off, you can flag the expense directly from the report and the finance team will receive the full context, including the original receipt and the approval trail.</p>`,
  `<p><b>Meeting recap:</b> we agreed to move the launch to the first week of next month to give QA a full regression pass.</p><ol><li>Engineering freezes new features this Friday.</li><li>Marketing adapts the announcement to the new date.</li><li>Support prepares the FAQ and the escalation path.</li></ol><p>We'll meet again on Tuesday to confirm everything is on track and to review the rollout checklist one last time.</p>`,
  `<p>Based on the data from the last six months, the team's average response time improved by <b>32%</b>, while customer satisfaction stayed above 4.6 out of 5.</p><p>The biggest gains came from the new triage rules and from documenting the most frequent edge cases, which cut the back-and-forth between agents and engineers almost in half.</p>`,
] as const

type MockEnhanceParams = {
  text: string
  selectedIntent?: string
  customIntent?: string
  context?: string
}

type MockEnhanceResponse = {
  success: boolean
  error?: string
  text: string
}

/**
 * Simulates an AI enhance endpoint: resolves after a random delay with a
 * random long rich-text response. Selecting the "error" intent exercises the
 * failure path.
 */
export const mockEnhanceText = (
  params: MockEnhanceParams
): Promise<MockEnhanceResponse> =>
  new Promise((resolve) => {
    setTimeout(
      () => {
        resolve({
          success: !(params.selectedIntent === "error"),
          error: "Error from AI",
          text: pickRandom(MOCK_ENHANCED_TEXTS),
        })
      },
      1200 + Math.random() * 1800
    )
  })
