import { QuestionType } from './types';
export type RatingOptionType = "1-5" | "1-10" | "0-10" | "emojis";
export declare const getRatingOptions: (type: RatingOptionType) => {
    value: number;
    label: string;
}[];
export declare const detectRatingOptionType: (options: {
    value: number;
    label: string;
}[]) => RatingOptionType | null;
export declare const getDefaultParamsForQuestionType: (questionType: QuestionType) => {
    value: undefined;
    options: {
        value: number;
        label: string;
    }[];
    label?: undefined;
} | {
    options: {
        value: string;
        label: string;
    }[];
    value?: undefined;
    label?: undefined;
} | {
    value?: undefined;
    options?: undefined;
    label?: undefined;
} | {
    value: string;
    options?: undefined;
    label?: undefined;
} | {
    value: number;
    options?: undefined;
    label?: undefined;
} | {
    value: Date;
    options?: undefined;
    label?: undefined;
} | {
    value: null;
    options?: undefined;
    label?: undefined;
} | {
    value: null;
    label: string;
    options?: undefined;
};
export declare const getNewElementId: (type: "section" | "question") => string;
export declare const getDefaultQuestionTypeToAdd: (allowedQuestionTypes?: QuestionType[]) => QuestionType;
