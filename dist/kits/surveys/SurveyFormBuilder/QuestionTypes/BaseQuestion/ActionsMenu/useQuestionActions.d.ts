import { useQuestionTypes } from '../../../constants';
import { useSurveyFormBuilderContext } from '../../../Context';
import { RatingOptionType } from '../../../lib';
import { QuestionType } from '../../../types';
export declare const RATING_OPTIONS: {
    label: string;
    value: RatingOptionType;
}[];
/**
 * Detects the current rating option type from a question's options.
 * Extracted as a pure function for testability.
 */
export declare function getCurrentRatingType(questionType: QuestionType, question: {
    type: string;
    options?: unknown;
} | undefined): RatingOptionType | null;
/**
 * Determines whether changing to a new question type requires resetting
 * the question's params (options, value, etc.).
 */
export declare function shouldResetParamsOnTypeChange(newType: QuestionType, currentType: QuestionType, question: {
    options?: unknown;
} | undefined): boolean;
export type QuestionActions = {
    question: ReturnType<ReturnType<typeof useSurveyFormBuilderContext>["getQuestionById"]>;
    questionTypes: ReturnType<typeof useQuestionTypes>;
    currentRatingType: RatingOptionType | null;
    currentDatasetKey: string | undefined;
    isMultiSelectEnabled: boolean;
    isAllowCreateEnabled: boolean;
    datasetHasOnCreate: boolean;
    disallowOptionalQuestions: boolean | undefined;
    canDelete: boolean;
    handleChangeRequired: (checked: boolean) => void;
    handleSelectQuestionType: (type: QuestionType, datasetKey?: string) => void;
    handleSelectRatingType: (type: RatingOptionType) => void;
    handleToggleMultiSelect: (enabled: boolean) => void;
    handleToggleAllowCreate: (enabled: boolean) => void;
    handleDuplicate: () => void;
    handleDelete: () => void;
};
/**
 * Returns a factory function that builds question actions for any question.
 * Use this when you need actions for multiple questions (e.g. in a loop).
 * For a single question, prefer `useQuestionActions` instead.
 */
export declare function useQuestionActionsFactory(): {
    getActionsForQuestion: (questionId: string, questionType: QuestionType, canDelete: boolean) => QuestionActions;
    questionTypes: {
        label: string;
        icon: import('../../../../../../f0').IconType;
        questionType: QuestionType;
        datasetKey?: string;
    }[];
};
type UseQuestionActionsOptions = {
    questionId: string;
    questionType: QuestionType;
    canDelete?: boolean;
};
export declare function useQuestionActions({ questionId, questionType, canDelete, }: UseQuestionActionsOptions): QuestionActions;
export {};
