/**
 * Previously: aggressive CSS + JS to hide the chat composer for
 * CTA-only flows. Reality: hiding the textarea hides the entire
 * One Chat sidepanel because the JS walker climbs from the
 * textarea up to its outermost in-chat ancestor — which turns out
 * to be the whole sidebar root. The CSS layer alone also caused
 * collateral damage on `.copilotKitSidebar` descendants.
 *
 * Decision: stop trying. Free-form typing is technically possible
 * during the wizard but the agent doesn't have a general-purpose
 * conversation surface, so anything typed there just doesn't do
 * anything useful. We accept the composer being visible.
 *
 * The hook is kept as a no-op so the existing callsite in
 * `ExpensePolicySettings.tsx` continues to compile and the
 * comment block remains as institutional memory for the next
 * person who tries to hide the composer.
 *
 * If a future iteration genuinely needs this:
 *   - Patch `F0AiChatProvider` upstream with a `hideComposer` prop
 *     plumbed through to `F0AiChat`'s `Input` slot, OR
 *   - Replace the Input slot directly via a `CopilotKit` prop
 *     override (CopilotKit accepts `Input={...}` on its provider).
 *   - DON'T try CSS/JS DOM hacks. Every selector strategy ends up
 *     either matching nothing or matching too much (we tried
 *     `.copilotKitInputContainer` — not rendered; `:last-child`
 *     of `.copilotKitChat` — works but inconsistent across F0
 *     Window variants; walking up from the textarea — kills the
 *     whole sidebar).
 */
export function useHideChatComposer(): void {
  // No-op. See file comment.
}
