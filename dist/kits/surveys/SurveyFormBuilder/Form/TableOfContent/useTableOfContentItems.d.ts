import { TOCItem } from '../../../../../experimental/Navigation/F0TableOfContent';
import { SurveyFormBuilderElement } from '../../types';
type UseTableOfContentItemsOptions = {
    untitledSectionLabel: string;
    untitledQuestionLabel: string;
    duplicateQuestionLabel: string;
    deleteQuestionLabel: string;
    duplicateSectionLabel: string;
    deleteSectionLabel: string;
    questionOptionsLabel: string;
    requiredLabel: string;
    questionTypeLabel: string;
    singleSelectionLabel: string;
    multiSelectionLabel: string;
};
export declare const useTableOfContentItems: (elements: SurveyFormBuilderElement[], options: UseTableOfContentItemsOptions) => TOCItem[];
export {};
