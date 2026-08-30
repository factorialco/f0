import { FlatFormItem } from './utils';
type QuestionItemProps = {
    item: FlatFormItem & {
        type: "question";
    };
    showEndOfSection: boolean;
    className?: string;
};
export declare const QuestionItem: ({ item, showEndOfSection, className, }: QuestionItemProps) => import("react").JSX.Element;
export {};
