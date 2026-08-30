import { AIMessage } from '../../types';
interface TurnFeedbackProps {
    /** Concatenated assistant content displayed by the copy button. */
    content: string;
    /** Reference message used as the target of feedback submissions. */
    targetMessage: AIMessage;
    /** Optional copy callback (called after the user clicks copy). */
    onCopy?: (content: string) => void;
}
export declare const TurnFeedback: ({ content, targetMessage, onCopy, }: TurnFeedbackProps) => import("react").JSX.Element;
export {};
