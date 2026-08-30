import { AIMessage } from '../../types';
import { UserReaction } from './FeedbackProvider';
interface ReactionModalProps {
    onClose: (message: AIMessage) => void;
    onSubmit: (message: AIMessage, feedback: string) => void;
    reactionType: UserReaction;
    message: AIMessage;
}
export declare const FeedbackModal: ({ onClose, onSubmit, reactionType, message, }: ReactionModalProps) => import("react").JSX.Element;
export {};
