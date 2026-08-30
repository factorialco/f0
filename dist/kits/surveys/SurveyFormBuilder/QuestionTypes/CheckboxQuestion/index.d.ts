import { BaseQuestionOnChangeParams } from '../../types';
import { BaseQuestionPropsForOtherQuestionComponents } from '../BaseQuestion';
export type CheckboxQuestionOnChangeParams = BaseQuestionOnChangeParams & {
    type: "checkbox";
    value?: boolean | null;
    label: string;
};
export type CheckboxQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
    type: "checkbox";
    value?: boolean | null;
    label: string;
};
export declare const CheckboxQuestion: ({ value, label: labelProp, ...baseQuestionComponentProps }: CheckboxQuestionProps) => import("react").JSX.Element;
