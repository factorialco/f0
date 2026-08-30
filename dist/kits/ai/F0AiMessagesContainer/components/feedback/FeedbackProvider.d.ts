import { FC, PropsWithChildren } from 'react';
import { AIMessage } from '../../types';
export type UserReaction = "like" | "dislike";
export type FeedbackModal = FeedbackModalOpen | FeedbackModalClosed;
type FeedbackModalOpen = {
    isOpen: true;
    currentReaction: UserReaction;
    currentMessage: AIMessage;
    open: (action: UserReaction, message: AIMessage) => void;
    close: () => void;
};
type FeedbackModalClosed = {
    isOpen: false;
    currentReaction: null;
    currentMessage: null;
    open: (action: UserReaction, message: AIMessage) => void;
    close: () => void;
};
export type FeedbackModalState = {
    action: UserReaction;
    message: AIMessage;
} | null;
export declare const FeedbackModalProvider: FC<PropsWithChildren>;
export declare const useFeedbackModal: () => FeedbackModal;
export type FeedbackConfig = {
    threadId: string;
    onThumbsUp: (msg: AIMessage, ctx: {
        threadId: string;
        feedback: string;
    }) => void;
    onThumbsDown: (msg: AIMessage, ctx: {
        threadId: string;
        feedback: string;
    }) => void;
};
export declare function useFeedbackSubmit(config: FeedbackConfig): {
    modal: FeedbackModal;
    handleSubmit: (message: AIMessage, feedback: string) => void;
    handleClose: (message: AIMessage) => void;
};
export {};
