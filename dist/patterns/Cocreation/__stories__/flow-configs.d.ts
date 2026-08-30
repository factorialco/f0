import { IconType } from '../../../components/F0Icon';
import { ModuleId } from '../../../components/avatars/F0AvatarModule/modules';
import { ClarifyingOption } from '../../../kits/ai/F0ClarifyingPanel';
import { SurveyAnswers } from '../../../kits/surveys/SurveyAnsweringForm';
import { SurveyFormBuilderElement } from '../../../kits/surveys/SurveyFormBuilder/types';
import { Resource, Template } from './mockData';
import { mockEngagementTranscribe } from './survey-mocks';
/** A predefined-template welcome card (e.g. "Employee NPS"). */
export type PresetCard = {
    id: string;
    icon: IconType;
    title: string;
    description: string;
    elements: SurveyFormBuilderElement[];
    /** Subtitle on the in-chat "created" card once this preset is seeded. */
    createdDescription: string;
    /** Assistant message posted right after this preset is seeded. */
    introMessage: string;
};
/** A welcome card that opens the flow's sample survey in a read-only preview. */
export type PlaceholderCard = {
    id: string;
    icon: IconType;
    title: string;
    description: string;
};
/**
 * One of the guided-entry survey types (Training's "Satisfaction" /
 * "Effectiveness" / "Knowledge Test"). Choosing a type up front fixes that
 * survey's locked first question and scopes the template gallery shown next.
 */
export type GuidedTypeConfig = {
    id: string;
    label: string;
    /** Long explanatory text — shown as chat text, since the clarifying panel's
     * options only render a short label. */
    description: string;
    /**
     * The first section/question seeded by "Empty Survey" for this type. Locked
     * for Satisfaction/Effectiveness (a standardized, comparable-over-time
     * question); Knowledge Test has no locked question, so this is just a
     * blank editable one instead.
     */
    emptySurveyElement: SurveyFormBuilderElement;
    /** This type's full sample questions — seeded by "Use this template"
     * (every template under this type shares this same content). */
    sampleElements: SurveyFormBuilderElement[];
    defaultValues: Partial<SurveyAnswers>;
    /** Matches `Template.category` — scopes the template gallery to this type. */
    templateCategory: string;
};
type SharedFlowConfig = {
    id: "engagement" | "training" | "engagementGuided";
    /** Main page/module title, e.g. "Engagement" / "Training". */
    pageTitle: string;
    /** Main nav tab label for this flow's collection — plain "Surveys" for
     * every flow; the page title above is what tells them apart. */
    navTabLabel: string;
    /** Sub-domain label, e.g. "Surveys" / "Training surveys". */
    navLabel: string;
    /** Domain label used in "Created in <moduleName> / <navLabel>" copy. */
    moduleName: string;
    /** Avatar module shown on in-chat resource cards for this flow. */
    avatarModule: ModuleId;
    resources: Resource[];
    templates: Template[];
    templateCategories: {
        value: string;
        label: string;
    }[];
    /** Composer placeholder before any survey has been drafted/created. */
    composerPlaceholder: string;
    /** Composer placeholder once a survey exists (empty, template, or drafted). */
    draftedPlaceholder: string;
    onTranscribe: typeof mockEngagementTranscribe;
};
/** Engagement's entry mode: a welcome screen of entry-point cards. */
export type CardsFlowConfig = SharedFlowConfig & {
    entryMode: "cards";
    /** "What kind of survey are you working on?" clarifying options. */
    typeOptions: ClarifyingOption[];
    /** Questions "drafted" onto the canvas once the clarifying chain completes. */
    sampleElements: SurveyFormBuilderElement[];
    defaultValues: Partial<SurveyAnswers>;
    presetCard: PresetCard;
    placeholderCard: PlaceholderCard;
    initialMessage: string;
    suggestionGroupLabel: string;
    suggestions: {
        title: string;
        prompt: string;
    }[];
};
/** Training's entry mode: type clarifying question, then a template gallery. */
export type GuidedTypeFlowConfig = SharedFlowConfig & {
    entryMode: "guidedType";
    /** The single clarifying question asked immediately on "Create". */
    guidedQuestion: string;
    guidedTypes: GuidedTypeConfig[];
};
/**
 * Engagement Guided's entry mode: the same message-first entry as
 * "guidedType", but the single clarifying question offers entry ACTIONS —
 * Empty Survey / Use a Template / the most-used templates (derived from
 * `templates`) — rather than survey types. Picking "Empty Survey" runs the
 * same type → audience → length drafting conversation as the "cards" flow, so
 * it carries that flow's `typeOptions` / `sampleElements` / `defaultValues`.
 */
export type GuidedEntryFlowConfig = SharedFlowConfig & {
    entryMode: "guidedEntry";
    /** The single clarifying question asked immediately on "Create". */
    guidedQuestion: string;
    /** "What kind of survey are you working on?" options for the blank-survey
     * drafting conversation (shared with the "cards" flow). */
    typeOptions: ClarifyingOption[];
    /** Questions drafted onto the canvas once the blank-survey chain completes. */
    sampleElements: SurveyFormBuilderElement[];
    defaultValues: Partial<SurveyAnswers>;
};
export type FlowConfig = CardsFlowConfig | GuidedTypeFlowConfig | GuidedEntryFlowConfig;
export declare const FLOW_CONFIGS: {
    engagement: {
        id: "engagement";
        entryMode: "cards";
        presetCard: {
            id: string;
            icon: import('react').ForwardRefExoticComponent<Omit<import('react').SVGProps<SVGSVGElement>, "ref"> & import('react').RefAttributes<SVGSVGElement>>;
            title: string;
            description: string;
            elements: SurveyFormBuilderElement[];
            createdDescription: string;
            introMessage: string;
        };
        placeholderCard: {
            id: string;
            icon: import('react').ForwardRefExoticComponent<Omit<import('react').SVGProps<SVGSVGElement>, "ref"> & import('react').RefAttributes<SVGSVGElement>>;
            title: string;
            description: string;
        };
        initialMessage: string;
        suggestionGroupLabel: string;
        suggestions: {
            title: string;
            prompt: string;
        }[];
        pageTitle: string;
        navTabLabel: string;
        navLabel: string;
        moduleName: string;
        avatarModule: "engagement";
        resources: Resource[];
        templates: Template[];
        templateCategories: {
            value: string;
            label: string;
        }[];
        composerPlaceholder: string;
        draftedPlaceholder: string;
        typeOptions: {
            id: string;
            label: string;
        }[];
        sampleElements: SurveyFormBuilderElement[];
        defaultValues: Partial<SurveyAnswers>;
        onTranscribe: import('../../../experimental').TranscribeFn;
    };
    training: {
        id: "training";
        entryMode: "guidedType";
        pageTitle: string;
        navTabLabel: string;
        navLabel: string;
        moduleName: string;
        avatarModule: "lms";
        resources: Resource[];
        templates: Template[];
        templateCategories: {
            value: string;
            label: string;
        }[];
        composerPlaceholder: string;
        draftedPlaceholder: string;
        guidedQuestion: string;
        guidedTypes: {
            id: string;
            label: string;
            description: string;
            emptySurveyElement: SurveyFormBuilderElement;
            sampleElements: SurveyFormBuilderElement[];
            defaultValues: Partial<SurveyAnswers>;
            templateCategory: string;
        }[];
        onTranscribe: import('../../../experimental').TranscribeFn;
    };
    engagementGuided: {
        id: "engagementGuided";
        entryMode: "guidedEntry";
        guidedQuestion: string;
        pageTitle: string;
        navTabLabel: string;
        navLabel: string;
        moduleName: string;
        avatarModule: "engagement";
        resources: Resource[];
        templates: Template[];
        templateCategories: {
            value: string;
            label: string;
        }[];
        composerPlaceholder: string;
        draftedPlaceholder: string;
        typeOptions: {
            id: string;
            label: string;
        }[];
        sampleElements: SurveyFormBuilderElement[];
        defaultValues: Partial<SurveyAnswers>;
        onTranscribe: import('../../../experimental').TranscribeFn;
    };
};
/** Source pieces for the Collection phase table — one per flow's rows. */
export declare const makeResourcesSource: (flow: FlowConfig) => {
    dataAdapter: {
        fetchData: () => Promise<{
            records: Resource[];
        }>;
    };
};
/** Source pieces for the Templates browse view — one per flow's list. */
export declare const makeTemplatesSource: (flow: FlowConfig) => {
    dataAdapter: {
        fetchData: () => Promise<{
            records: Template[];
        }>;
    };
    filters: {
        category: {
            type: "in";
            label: string;
            options: {
                options: {
                    value: string;
                    label: string;
                }[];
            };
        };
    };
};
/** This flow's templates scoped to one guided type's category. */
export declare const templatesForGuidedType: (flow: GuidedTypeFlowConfig, guidedTypeId: string) => Template[];
/** Canvas title for a guided type's template gallery, e.g. "Satisfaction
 * Survey Templates" / "Knowledge Test Survey Templates". */
export declare const guidedTemplatesTitle: (flow: GuidedTypeFlowConfig, guidedTypeId: string) => string;
export {};
