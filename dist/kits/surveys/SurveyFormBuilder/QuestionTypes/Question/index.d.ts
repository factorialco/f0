import { BaseQuestionPropsForOtherQuestionComponents } from '../BaseQuestion';
import { CheckboxQuestionProps } from '../CheckboxQuestion';
import { DateQuestionProps } from '../DateQuestion';
import { DropdownMultiQuestionProps } from '../DropdownMultiQuestion/types';
import { DropdownSingleQuestionProps } from '../DropdownSingleQuestion/types';
import { FileQuestionProps } from '../FileQuestion';
import { LinkQuestionProps } from '../LinkQuestion';
import { NumericQuestionProps } from '../NumericQuestion';
import { RatingQuestionProps } from '../RatingQuestion';
import { SelectQuestionProps } from '../SelectQuestion/types';
import { TextQuestionProps } from '../TextQuestion';
export type QuestionProps = BaseQuestionPropsForOtherQuestionComponents & (TextQuestionProps | (RatingQuestionProps & {
    type: "rating";
}) | (SelectQuestionProps & {
    type: "select" | "multi-select";
}) | (DropdownSingleQuestionProps & {
    type: "dropdown-single";
}) | (DropdownMultiQuestionProps & {
    type: "dropdown-multi";
}) | (NumericQuestionProps & {
    type: "numeric";
}) | (LinkQuestionProps & {
    type: "link";
}) | (DateQuestionProps & {
    type: "date";
}) | (FileQuestionProps & {
    type: "file";
}) | (CheckboxQuestionProps & {
    type: "checkbox";
}));
export declare const Question: ({ ...props }: QuestionProps) => import("react").JSX.Element;
