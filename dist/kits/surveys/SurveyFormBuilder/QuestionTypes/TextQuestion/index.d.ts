import { BaseQuestionOnChangeParams } from '../../types';
import { BaseQuestionPropsForOtherQuestionComponents } from '../BaseQuestion';
export type TextQuestionOnChangeParams = BaseQuestionOnChangeParams & {
    type: "text" | "longText";
    value?: string | null;
};
export type TextQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
    type: "text" | "longText";
    value?: string | null;
};
export declare const TextQuestion: ({ value, ...baseQuestionComponentProps }: TextQuestionProps) => import("react").JSX.Element;
