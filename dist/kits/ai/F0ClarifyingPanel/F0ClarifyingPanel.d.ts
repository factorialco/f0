import { ClarifyingQuestionState } from './types';
interface F0ClarifyingPanelProps {
    clarifyingQuestion: ClarifyingQuestionState;
    /**
     * Disables submitting the final step (confirm button, Enter on the custom
     * answer input, and Skip) — e.g. while the assistant is still streaming a
     * response. Step navigation and option selection stay interactive.
     */
    isSubmitDisabled?: boolean;
}
/**
 * Clarifying question panel — content only, no mount animation.
 *
 * The parent slot (F0AiChatTextArea) owns the enter/exit animation so
 * nested height animations don't conflict. Step-to-step transitions are
 * still animated internally via F0ClarifyingPanelContent.
 *
 * When used standalone (e.g. Storybook), wrap in a motion.div with
 * `overflow-hidden` and `height: 0 → "auto"`.
 */
export declare const F0ClarifyingPanel: ({ clarifyingQuestion, isSubmitDisabled, }: F0ClarifyingPanelProps) => import("react").JSX.Element;
export {};
