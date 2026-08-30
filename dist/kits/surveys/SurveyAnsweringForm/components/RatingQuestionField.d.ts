export interface RatingFieldConfig {
    options: {
        value: number;
        label: string;
    }[];
    disabled?: boolean;
}
export interface RatingQuestionFieldProps {
    value: number | undefined;
    onChange: (value: number | undefined) => void;
    onBlur: () => void;
    config: RatingFieldConfig;
}
export declare function RatingQuestionField({ value, onChange, onBlur, config, }: RatingQuestionFieldProps): import("react").JSX.Element;
