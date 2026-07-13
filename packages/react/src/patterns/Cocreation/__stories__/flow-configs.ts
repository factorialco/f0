// Per-flow configuration for the "Walkthrough" co-creation story. A "flow" is
// one coexisting example of the co-creation pattern applied to a resource
// domain — today, Engagement Surveys and Training Surveys. Both flows share
// most mechanics (phases, chat, canvas, proposal loop), but they enter
// creation differently:
//   - "cards"      (Engagement): a welcome screen of entry-point cards.
//   - "guidedType" (Training): an immediate clarifying question for the
//     survey TYPE, then a type-scoped template gallery (with "Empty Form"
//     first) — no welcome cards or suggestions.
// `FlowConfig` is a discriminated union on `entryMode` so each mode only
// carries the fields it actually uses. The story wires it up via
// `FlowConfigProvider` / `useFlowConfig`.

import type { IconType } from "@/components/F0Icon"
import type { ModuleId } from "@/components/avatars/F0AvatarModule/modules"
import { Files } from "@/icons/app"
import type { ClarifyingOption } from "@/sds/ai/F0ClarifyingPanel"
import type { SurveyAnswers } from "@/sds/surveys/SurveyAnsweringForm"
import type { SurveyFormBuilderElement } from "@/sds/surveys/SurveyFormBuilder/types"

import {
  ENGAGEMENT_RESOURCES,
  ENGAGEMENT_TEMPLATE_CATEGORIES,
  ENGAGEMENT_TEMPLATES,
  makeResourcesDataAdapter,
  makeTemplateFilters,
  makeTemplatesDataAdapter,
  type Resource,
  TRAINING_RESOURCES,
  TRAINING_TEMPLATE_CATEGORIES,
  TRAINING_TEMPLATES,
  type Template,
} from "./mockData"
import {
  EFFECTIVENESS_DEFAULT_VALUES,
  EFFECTIVENESS_LOCKED_ELEMENT,
  EFFECTIVENESS_SURVEY_ELEMENTS,
  ENGAGEMENT_DEFAULT_VALUES,
  ENGAGEMENT_SURVEY_ELEMENTS,
  KNOWLEDGE_TEST_BLANK_ELEMENT,
  KNOWLEDGE_TEST_DEFAULT_VALUES,
  KNOWLEDGE_TEST_SURVEY_ELEMENTS,
  mockEngagementTranscribe,
  mockTrainingTranscribe,
  NPS_SURVEY_ELEMENTS,
  SATISFACTION_DEFAULT_VALUES,
  SATISFACTION_LOCKED_ELEMENT,
  SATISFACTION_SURVEY_ELEMENTS,
} from "./survey-mocks"

/** A predefined-template welcome card (e.g. "Employee NPS"). */
export type PresetCard = {
  id: string
  icon: IconType
  title: string
  description: string
  elements: SurveyFormBuilderElement[]
  /** Subtitle on the in-chat "created" card once this preset is seeded. */
  createdDescription: string
  /** Assistant message posted right after this preset is seeded. */
  introMessage: string
}

/** A visual-only placeholder welcome card — no behavior wired yet. */
export type PlaceholderCard = {
  id: string
  icon: IconType
  title: string
  description: string
}

/**
 * One of the guided-entry survey types (Training's "Satisfaction" /
 * "Effectiveness" / "Knowledge Test"). Choosing a type up front fixes that
 * survey's locked first question and scopes the template gallery shown next.
 */
export type GuidedTypeConfig = {
  id: string
  label: string
  /** Long explanatory text — shown as chat text, since the clarifying panel's
   * options only render a short label. */
  description: string
  /**
   * The first section/question seeded by "Empty Form" for this type. Locked
   * for Satisfaction/Effectiveness (a standardized, comparable-over-time
   * question); Knowledge Test has no locked question, so this is just a
   * blank editable one instead.
   */
  emptyFormElement: SurveyFormBuilderElement
  /** This type's full sample questions — seeded by "Use this template"
   * (every template under this type shares this same content). */
  sampleElements: SurveyFormBuilderElement[]
  defaultValues: Partial<SurveyAnswers>
  /** Matches `Template.category` — scopes the template gallery to this type. */
  templateCategory: string
}

type SharedFlowConfig = {
  id: "engagement" | "training"
  /** Main page/module title, e.g. "Engagement" / "Training". */
  pageTitle: string
  /** Main nav tab label for this flow's collection — plain "Surveys" for
   * every flow; the page title above is what tells them apart. */
  navTabLabel: string
  /** Sub-domain label, e.g. "Surveys" / "Training surveys". */
  navLabel: string
  /** Domain label used in "Created in <moduleName> / <navLabel>" copy. */
  moduleName: string
  /** Avatar module shown on in-chat resource cards for this flow. */
  avatarModule: ModuleId

  resources: Resource[]
  templates: Template[]
  templateCategories: { value: string; label: string }[]

  /** Composer placeholder before any survey has been drafted/created. */
  composerPlaceholder: string
  /** Composer placeholder once a survey exists (empty, template, or drafted). */
  draftedPlaceholder: string

  onTranscribe: typeof mockEngagementTranscribe
}

/** Engagement's entry mode: a welcome screen of entry-point cards. */
export type CardsFlowConfig = SharedFlowConfig & {
  entryMode: "cards"
  /** "What kind of survey are you working on?" clarifying options. */
  typeOptions: ClarifyingOption[]
  /** Questions "drafted" onto the canvas once the clarifying chain completes. */
  sampleElements: SurveyFormBuilderElement[]
  defaultValues: Partial<SurveyAnswers>
  presetCard: PresetCard
  placeholderCard: PlaceholderCard
  initialMessage: string
  suggestionGroupLabel: string
  suggestions: { title: string; prompt: string }[]
}

/** Training's entry mode: type clarifying question, then a template gallery. */
export type GuidedTypeFlowConfig = SharedFlowConfig & {
  entryMode: "guidedType"
  /** The single clarifying question asked immediately on "Create". */
  guidedQuestion: string
  guidedTypes: GuidedTypeConfig[]
}

export type FlowConfig = CardsFlowConfig | GuidedTypeFlowConfig

export const FLOW_CONFIGS: Record<FlowConfig["id"], FlowConfig> = {
  engagement: {
    id: "engagement",
    entryMode: "cards",
    pageTitle: "Engagement",
    navTabLabel: "Surveys",
    navLabel: "Surveys",
    moduleName: "Engagement",
    avatarModule: "engagement",
    resources: ENGAGEMENT_RESOURCES,
    templates: ENGAGEMENT_TEMPLATES,
    templateCategories: ENGAGEMENT_TEMPLATE_CATEGORIES,
    typeOptions: [
      { id: "engagement", label: "Employee engagement" },
      { id: "onboarding", label: "Onboarding feedback" },
      { id: "pulse", label: "Customer pulse check" },
      { id: "enps", label: "eNPS" },
    ],
    sampleElements: ENGAGEMENT_SURVEY_ELEMENTS,
    defaultValues: ENGAGEMENT_DEFAULT_VALUES,
    presetCard: {
      id: "employee-nps",
      icon: Files,
      title: "Employee NPS",
      description: "Template",
      elements: NPS_SURVEY_ELEMENTS,
      createdDescription: "Created in Engagement / Surveys",
      introMessage:
        "I've set up an Employee NPS survey. The eNPS question at the top is fixed so your scores stay comparable — the rest is yours to edit. What would you like to change?",
    },
    placeholderCard: {
      id: "employee-engagement",
      icon: Files,
      title: "Employee Engagement",
      description: "Template",
    },
    composerPlaceholder: "Describe the type of survey you want to create",
    draftedPlaceholder: "Improve the Survey by...",
    initialMessage: "What kind of survey do you want to create?",
    suggestionGroupLabel: "Create a survey for...",
    suggestions: [
      {
        title: "Employee satisfaction survey",
        prompt:
          "Create an employee satisfaction survey covering workload, management, and work-life balance.",
      },
      {
        title: "Onboarding feedback survey",
        prompt:
          "Draft a survey to collect feedback from new hires about their first 90 days.",
      },
      {
        title: "Remote work pulse check",
        prompt:
          "Build a short pulse survey about how the team is experiencing remote work.",
      },
    ],
    onTranscribe: mockEngagementTranscribe,
  },
  training: {
    id: "training",
    entryMode: "guidedType",
    pageTitle: "Training",
    navTabLabel: "Surveys",
    navLabel: "Training surveys",
    moduleName: "Learning",
    avatarModule: "lms",
    resources: TRAINING_RESOURCES,
    templates: TRAINING_TEMPLATES,
    templateCategories: TRAINING_TEMPLATE_CATEGORIES,
    composerPlaceholder: "Describe the type of form you want to create",
    draftedPlaceholder: "Improve the form by...",
    guidedQuestion: "What kind of form do you want to create?",
    guidedTypes: [
      {
        id: "satisfaction",
        label: "Satisfaction",
        description:
          "Assess participants' satisfaction with the course taken. (Can be anonymous)",
        emptyFormElement: SATISFACTION_LOCKED_ELEMENT,
        sampleElements: SATISFACTION_SURVEY_ELEMENTS,
        defaultValues: SATISFACTION_DEFAULT_VALUES,
        templateCategory: "Satisfaction",
      },
      {
        id: "effectiveness",
        label: "Effectiveness",
        description:
          "Evaluate whether the course met its goals. (Not anonymous)",
        emptyFormElement: EFFECTIVENESS_LOCKED_ELEMENT,
        sampleElements: EFFECTIVENESS_SURVEY_ELEMENTS,
        defaultValues: EFFECTIVENESS_DEFAULT_VALUES,
        templateCategory: "Effectiveness",
      },
      {
        id: "knowledgeTest",
        label: "Knowledge Test",
        description:
          "Evaluate assessments to improve learning outcomes. (Not anonymous) (Score 50%+ to pass)",
        emptyFormElement: KNOWLEDGE_TEST_BLANK_ELEMENT,
        sampleElements: KNOWLEDGE_TEST_SURVEY_ELEMENTS,
        defaultValues: KNOWLEDGE_TEST_DEFAULT_VALUES,
        templateCategory: "Knowledge Test",
      },
    ],
    onTranscribe: mockTrainingTranscribe,
  },
}

export const makeResourcesSource = (flow: FlowConfig) =>
  makeResourcesDataAdapter(flow.resources)

export const makeTemplatesSource = (flow: FlowConfig) => ({
  dataAdapter: makeTemplatesDataAdapter(flow.templates),
  filters: makeTemplateFilters(flow.templateCategories),
})

/** This flow's templates scoped to one guided type's category. */
export const templatesForGuidedType = (
  flow: GuidedTypeFlowConfig,
  guidedTypeId: string
): Template[] => {
  const type = flow.guidedTypes.find((t) => t.id === guidedTypeId)
  if (!type) return []
  return flow.templates.filter((t) => t.category === type.templateCategory)
}

/** Canvas title for a guided type's template gallery, e.g. "Satisfaction
 * Survey Templates" / "Knowledge Test Survey Templates". */
export const guidedTemplatesTitle = (
  flow: GuidedTypeFlowConfig,
  guidedTypeId: string
): string => {
  const type = flow.guidedTypes.find((t) => t.id === guidedTypeId)
  return type ? `${type.label} Survey Templates` : "Templates"
}
