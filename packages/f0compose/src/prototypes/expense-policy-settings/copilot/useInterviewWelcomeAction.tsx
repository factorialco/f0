import { F0Button, F0Icon, F0Text } from "@factorialco/f0-react"
import { Sparkles, Upload } from "@factorialco/f0-react/icons/app"

import { useAiChat, useCopilotAction } from "@/copilot"

/**
 * `interviewWelcome` — the opening turn of the One-led interview.
 *
 * Triggered when the admin clicks "Get started" on the empty state: the
 * parent flips the chat to FULLSCREEN and appends an assistant message
 * whose `content` is One's welcome copy and whose toolCall renders this
 * widget below it (mirrors the `startSetup` / `certifiedDocsConvo`
 * pattern — F0AiChat routes the toolCall name to this action's render).
 *
 * The widget is:
 *  - a VISUAL document drop zone (NOT wired — uploading a policy doc is
 *    a later iteration; it renders so the screen matches the design but
 *    does nothing on click), and
 *  - a "Skip and start guided tour" button. Clicking it posts that as a
 *    user message, which wakes the `expensePolicySetup` skill: One shows
 *    a Thinking… state and then asks the 3–5 interview questions via
 *    `askClarifyingQuestion`.
 */
export function useInterviewWelcomeAction(): void {
  const { sendMessage, clearAndAppend } = useAiChat()

  useCopilotAction({
    name: "interviewWelcome",
    description:
      "Renders the Expense Policy interview welcome widget: a (visual-only) document drop zone and a 'Skip and start guided tour' button. The parent appends this as an assistant turn when the user clicks Get started. Do not call this yourself.",
    available: "enabled",
    parameters: [],
    render: () => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          width: "100%",
          maxWidth: 720,
        }}
      >
        {/* Visual-only drop zone — uploading is not wired yet. */}
        <div
          style={{
            border: "1.5px dashed #cdd2da",
            borderRadius: 14,
            padding: "44px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            color: "#6b7280",
            background: "#fff",
            userSelect: "none",
          }}
          aria-hidden
        >
          <F0Icon icon={Upload} size="md" />
          <F0Text variant="body" color="muted" content="Drag and drop or click here" />
        </div>

        <div>
          <F0Button
            variant="outline"
            size="md"
            label="I don't have documents to upload"
            icon={Sparkles}
            // The sent message (and visible bubble) is phrased so it
            // routes unambiguously to the expensePolicySetup skill and
            // signals the interview kickoff — "guided tour" alone
            // misroutes to a generic navigation/tour intent.
            //
            // Clear the welcome (text + drop zone) FIRST so the thread is
            // empty when One replies — otherwise the tall welcome lingers
            // and fullscreen auto-scroll pushes One's lead-in above the
            // fold. clearAndAppend([]) wipes the thread; sendMessage then
            // adds the kickoff bubble and triggers One's turn, so One's
            // "On it…" lead-in is the top message when the panel appears.
            onClick={() => {
              clearAndAppend([])
              sendMessage(
                "Skip ahead and set up my Expenses with the guided interview."
              )
            }}
          />
        </div>
      </div>
    ),
  })
}
