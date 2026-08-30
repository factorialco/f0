import { BaseQuestionOnChangeParams } from '../../types';
import { BaseQuestionPropsForOtherQuestionComponents } from '../BaseQuestion';
export type DateQuestionOnChangeParams = BaseQuestionOnChangeParams & {
    value?: Date | null;
};
export type DateQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
    value?: Date | null;
};
export declare const DateQuestion: ({ value, ...baseQuestionComponentProps }: DateQuestionProps) => import("react").JSX.Element;
