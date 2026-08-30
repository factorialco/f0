import { SelectQuestionOption } from '../../SurveyFormBuilder/types';
export interface SelectFieldConfig {
    options: SelectQuestionOption[];
    type: "select" | "multi-select";
    required?: boolean;
    disabled?: boolean;
    showAnswerValidation?: boolean;
}
export interface SelectQuestionFieldProps {
    value: string | string[] | undefined;
    onChange: (value: string | string[] | undefined) => void;
    onBlur: () => void;
    config: SelectFieldConfig;
}
export declare function SelectQuestionField({ value, onChange, onBlur, config, }: SelectQuestionFieldProps): import("react").JSX.Element;
