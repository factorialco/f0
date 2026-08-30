import { SurveyAnswers } from '../../../kits/surveys/SurveyAnsweringForm';
import { SurveyFormBuilderElement } from '../../../kits/surveys/SurveyFormBuilder/types';
/**
 * The starting point of a blank survey: a single empty section holding one
 * default (text) question — exactly what `SurveyFormBuilder` seeds on its first
 * render for an empty survey. We build it here so a freshly-created "empty
 * survey" already carries this first section/question as durable store state,
 * rather than relying on the form builder's render-time auto-seed. Shared by
 * every flow — a blank survey starts the same way regardless of domain.
 */
export declare const makeInitialSurveyElements: () => SurveyFormBuilderElement[];
export declare const ENGAGEMENT_SURVEY_ELEMENTS: SurveyFormBuilderElement[];
export declare const NPS_SURVEY_ELEMENTS: SurveyFormBuilderElement[];
export declare const ENGAGEMENT_DEFAULT_VALUES: Partial<SurveyAnswers>;
/**
 * Survey-contextual voice dictation for the Engagement Surveys flow: streams a
 * spoken-style survey-refinement request (follow-up questions and triggers)
 * into the composer so the user can review it and send. Wired to the chat via
 * the ApplicationFrame `ai.onTranscribe` prop.
 */
export declare const mockEngagementTranscribe: import('../../../experimental').TranscribeFn;
export declare const SATISFACTION_LOCKED_ELEMENT: SurveyFormBuilderElement;
export declare const SATISFACTION_SURVEY_ELEMENTS: SurveyFormBuilderElement[];
export declare const EFFECTIVENESS_LOCKED_ELEMENT: SurveyFormBuilderElement;
export declare const EFFECTIVENESS_SURVEY_ELEMENTS: SurveyFormBuilderElement[];
export declare const KNOWLEDGE_TEST_BLANK_ELEMENT: SurveyFormBuilderElement;
export declare const KNOWLEDGE_TEST_SURVEY_ELEMENTS: SurveyFormBuilderElement[];
export declare const SATISFACTION_DEFAULT_VALUES: Partial<SurveyAnswers>;
export declare const EFFECTIVENESS_DEFAULT_VALUES: Partial<SurveyAnswers>;
export declare const KNOWLEDGE_TEST_DEFAULT_VALUES: Partial<SurveyAnswers>;
/**
 * Survey-contextual voice dictation for the Training Surveys flow: streams a
 * spoken-style survey-refinement request (follow-up questions and triggers)
 * into the composer so the user can review it and send. Wired to the chat via
 * the ApplicationFrame `ai.onTranscribe` prop.
 */
export declare const mockTrainingTranscribe: import('../../../experimental').TranscribeFn;
