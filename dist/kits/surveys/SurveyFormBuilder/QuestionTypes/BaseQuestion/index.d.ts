import { BaseQuestionProps } from './types';
export type { BaseQuestionPropsForOtherQuestionComponents } from './types';
export { useQuestionDisabled } from './useQuestionDisabled';
export declare const BaseQuestion: ({ id, title, description, children, required, type: questionType, hiddenActions, locked: ownLocked, lockedNote, }: BaseQuestionProps) => import("react").JSX.Element;
