import { SurveyFormBuilderProps } from '../types';
export { flattenElements, reconstructElements, computeSectionEndIds, injectSectionEnds, } from './utils';
export type { FlatFormItem } from './utils';
export declare const SurveyFormBuilder: import('../../../../lib/data-testid').WithDataTestIdReturnType<({ elements: elementsProp, disabled, onChange, disallowOptionalQuestions, allowedQuestionTypes, applyingChanges, useUpload, datasets, placeholders, labels, skipDefaultSection, }: SurveyFormBuilderProps) => import("react").JSX.Element>;
