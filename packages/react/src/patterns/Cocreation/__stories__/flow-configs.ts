// Per-flow configuration for the "Walkthrough" co-creation story. A "flow" is
// one coexisting example of the co-creation pattern applied to a resource
// domain — today, Engagement Surveys and Training Surveys. Both flows share
// every mechanic (phases, chat, canvas, clarifying chain, proposal loop); only
// the data below differs. Pure data + text; the story wires it up via
// `FlowConfigProvider` / `useFlowConfig`.

import type { IconType } from "@/components/F0Icon"
import type { ModuleId } from "@/components/avatars/F0AvatarModule/modules"
import { File, Files } from "@/icons/app"
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
  ENGAGEMENT_DEFAULT_VALUES,
  ENGAGEMENT_SURVEY_ELEMENTS,
  mockEngagementTranscribe,
  mockTrainingTranscribe,
  NPS_SURVEY_ELEMENTS,
  TRAINING_COMPLIANCE_ELEMENTS,
  TRAINING_DEFAULT_VALUES,
  TRAINING_SURVEY_ELEMENTS,
} from "./survey-mocks"

/** A predefined-template welcome card (e.g. "Employee NPS", "Compliance training"). */
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

export type FlowConfig = {
  id: "engagement" | "training"
  /** Main page/module title, e.g. "Engagement" / "Training". */
  pageTitle: string
  /** Main nav tab label for this flow's collection — plain "Surveys" for every
   * flow; the page title above is what tells them apart. */
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

  /** "What kind of survey are you working on?" clarifying options. */
  typeOptions: ClarifyingOption[]
  /** Questions "drafted" onto the canvas once the clarifying chain completes. */
  sampleElements: SurveyFormBuilderElement[]
  defaultValues: Partial<SurveyAnswers>

  presetCard: PresetCard
  placeholderCard: PlaceholderCard

  composerPlaceholder: string
  draftedPlaceholder: string
  initialMessage: string
  suggestionGroupLabel: string
  suggestions: { title: string; prompt: string }[]
  onTranscribe: typeof mockEngagementTranscribe
}

export const FLOW_CONFIGS: Record<FlowConfig["id"], FlowConfig> = {
  engagement: {
    id: "engagement",
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
    pageTitle: "Training",
    navTabLabel: "Surveys",
    navLabel: "Training surveys",
    moduleName: "Learning",
    avatarModule: "lms",
    resources: TRAINING_RESOURCES,
    templates: TRAINING_TEMPLATES,
    templateCategories: TRAINING_TEMPLATE_CATEGORIES,
    typeOptions: [
      { id: "compliance", label: "Compliance training" },
      { id: "onboarding", label: "Onboarding training" },
      { id: "product", label: "Product training" },
      { id: "certification", label: "Certification" },
    ],
    sampleElements: TRAINING_SURVEY_ELEMENTS,
    defaultValues: TRAINING_DEFAULT_VALUES,
    presetCard: {
      id: "compliance-training",
      icon: Files,
      title: "Compliance training",
      description: "Template",
      elements: TRAINING_COMPLIANCE_ELEMENTS,
      createdDescription: "Created in Learning / Training surveys",
      introMessage:
        "I've set up a Compliance training survey. The completion question at the top is fixed so records stay consistent — the rest is yours to edit. What would you like to change?",
    },
    placeholderCard: {
      id: "certification-assessment",
      icon: File,
      title: "Certification Assessment",
      description: "Template",
    },
    composerPlaceholder:
      "Describe the type of training survey you want to create",
    draftedPlaceholder: "Improve the training survey by...",
    initialMessage: "What kind of training survey do you want to create?",
    suggestionGroupLabel: "Create a training survey for...",
    suggestions: [
      {
        title: "New hire compliance training",
        prompt:
          "Create a compliance training survey confirming completion of mandatory policy modules for new hires.",
      },
      {
        title: "Product training certification",
        prompt:
          "Draft a short certification quiz to check comprehension after a product training course.",
      },
      {
        title: "Manager coaching feedback survey",
        prompt:
          "Build a feedback survey for managers who just completed a coaching skills training.",
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
