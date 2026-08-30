import { BaseQuestionOnChangeParams } from '../../types';
import { BaseQuestionPropsForOtherQuestionComponents } from '../BaseQuestion';
export type LinkQuestionOnChangeParams = BaseQuestionOnChangeParams & {
    value?: string | null;
};
export type LinkQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
    value?: string | null;
};
export declare const LinkQuestion: ({ value, ...baseQuestionComponentProps }: LinkQuestionProps) => import("react").JSX.Element;
