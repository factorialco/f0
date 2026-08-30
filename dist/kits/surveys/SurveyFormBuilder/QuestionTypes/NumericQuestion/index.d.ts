import { BaseQuestionOnChangeParams } from '../../types';
import { BaseQuestionPropsForOtherQuestionComponents } from '../BaseQuestion';
export type NumericQuestionOnChangeParams = BaseQuestionOnChangeParams & {
    value?: number | null;
};
export type NumericQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
    value?: number | null;
};
export declare const NumericQuestion: ({ value, ...baseQuestionComponentProps }: NumericQuestionProps) => import("react").JSX.Element;
