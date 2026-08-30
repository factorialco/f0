import { z } from 'zod';
import { UseFileUpload } from '../../../../patterns/F0Form/fields/file/types';
import { F0SectionConfig } from '../../../../patterns/F0Form/types';
import { TranslationKey } from '../../../../lib/providers/i18n/i18n-provider-defaults';
import { SurveyFormBuilderElement, SurveyDatasets } from '../../SurveyFormBuilder/types';
import { FlatQuestion, SurveyAnsweringFormMode, SurveyAnswers } from '../types';
export declare function extractFlatQuestions(elements: SurveyFormBuilderElement[]): FlatQuestion[];
export declare function useSurveyFormSchema(elements: SurveyFormBuilderElement[], mode: SurveyAnsweringFormMode, t: (key: TranslationKey) => string, defaultValues?: Partial<SurveyAnswers>, currentQuestionId?: string, accumulatedValues?: Record<string, unknown>, previewMode?: boolean, disableFields?: boolean, useUpload?: UseFileUpload, datasets?: SurveyDatasets): {
    schema: z.ZodObject<Record<string, z.ZodTypeAny>, "strip", z.ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>;
    defaultValues: Record<string, unknown>;
    flatQuestions: FlatQuestion[];
    sections: Record<string, F0SectionConfig>;
};
