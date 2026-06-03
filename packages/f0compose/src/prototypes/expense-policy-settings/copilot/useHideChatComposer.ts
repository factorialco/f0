/**
 * "Welcome mode" — chat spec §10 calls for the chat to be in a
 * greeting + single-CTA-no-input mode at two moments:
 *   1. Initial land (welcome bubble + "Start setup" button)
 *   2. Core-complete (summary + Publish / Continue CTAs)
 *
 * The intent is to remove the textarea so the user's only forward
 * action is via the rendered CTAs.
 *
 * Reality check: f0compose can NOT hide the F0AiChat textarea from
 * a prototype. Previous attempts:
 *   - Aggressive CSS targeting `.copilotKitInputContainer` / siblings
 *     → either matched nothing (DOM doesn't expose that class
 *     reliably) or matched too much (hid the entire sidebar).
 *   - JS walker climbing from the textarea up to its outermost
 *     in-chat ancestor → climbed too far and removed the whole
 *     sidebar root.
 *   - `:last-child` of `.copilotKitChat` → worked but inconsistent
 *     across F0 Window variants.
 *
 * Decision: accept the textarea is visible. The agent compensates
 * by:
 *   - On initial land: doing nothing until the user clicks the
 *     rendered Start setup CTA (any typed-instead-of-clicked
 *     message still triggers the same skill).
 *   - On core-complete: rendering the summary as a normal assistant
 *     bubble and accepting that the user might type "publish" or
 *     "continue" instead of clicking. Both behaviours should map
 *     to the same outcome — the agent parses intent.
 *
 * If a future iteration genuinely needs this, the only viable paths
 * are upstream:
 *   - Add a `hideComposer` / `welcomeMode` prop to F0AiChatProvider
 *     plumbed through to the Input slot.
 *   - Replace the Input slot directly via a CopilotKit prop
 *     override on FactorialShell's `F0AiChatProvider` wrapper.
 *
 * The hook is kept as a no-op so the callsite in
 * `ExpensePolicySettings.tsx` continues to compile and this comment
 * block remains as institutional memory for the next person who
 * tries to hide the composer.
 */
export function useHideChatComposer(): void {
  // No-op. See file comment.
}
