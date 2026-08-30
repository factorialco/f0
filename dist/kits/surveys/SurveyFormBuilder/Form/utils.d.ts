import { SurveyFormBuilderElement, QuestionElement, SectionElement } from '../types';
export type FlatFormItem = {
    type: "section-header";
    id: string;
    section: SectionElement;
} | {
    type: "question";
    id: string;
    question: QuestionElement;
} | {
    type: "section-end";
    id: string;
    sectionId: string;
};
export declare function flattenElements(elements: SurveyFormBuilderElement[]): FlatFormItem[];
export declare function reconstructElements(flatItems: FlatFormItem[]): SurveyFormBuilderElement[];
/**
 * Re-inject section-end markers into a flat list that has none.
 *
 * Uses `inSectionQuestionIds` (the set of question IDs that originally
 * belonged to *any* section) to determine where each section ends:
 * - Questions in the set stay inside the current section.
 * - Original standalone questions (NOT in the set) cause the section to close
 *   before them so they remain standalone.
 *
 * This allows cross-section moves (a question from section B placed after
 * section A's header joins section A) while keeping standalone questions
 * outside sections unless the user explicitly drags them between section items.
 */
export declare function injectSectionEnds(items: FlatFormItem[], inSectionQuestionIds: Set<string>): FlatFormItem[];
export declare function computeSectionEndIds(elements: SurveyFormBuilderElement[]): Set<string>;
