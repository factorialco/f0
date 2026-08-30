import { BaseQuestionPropsForOtherQuestionComponents } from '../BaseQuestion';
export type BaseScoreQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
    value?: number;
    options: {
        value: number;
        label: string;
    }[];
};
export declare const BaseScoreQuestion: ({ options, value, ...baseQuestionComponentProps }: BaseScoreQuestionProps) => import("react").JSX.Element;
