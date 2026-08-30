import { BaseQuestionPropsForOtherQuestionComponents } from '../BaseQuestion';
export type RatingQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
    value?: number;
} & {
    options: {
        value: number;
        label: string;
    }[];
};
export declare const RatingQuestion: (props: RatingQuestionProps) => import("react").JSX.Element;
