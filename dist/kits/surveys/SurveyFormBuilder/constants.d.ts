import { IconType } from '../../../components/F0Icon/F0Icon';
import { QuestionType } from './types';
export declare const useQuestionTypes: () => {
    label: string;
    icon: IconType;
    questionType: QuestionType;
    datasetKey?: string;
}[];
/**
 * Context-free icon lookup for question types.
 * Used by the table of content to map question types to icons
 * without requiring SurveyFormBuilderContext.
 */
export declare const questionTypeIconMap: Record<QuestionType, IconType>;
