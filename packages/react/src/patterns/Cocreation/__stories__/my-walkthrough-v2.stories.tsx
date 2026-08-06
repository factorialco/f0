import type { Meta, StoryObj } from "@storybook/react-vite"

import { z } from "zod"

import {
  ComponentProps,
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { createPortal } from "react-dom"
import { StandardLayout } from "@/layouts/StandardLayout"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import { F0CardHorizontal } from "@/experimental/F0CardHorizontal"
import {
  Add,
  ArrowLeft,
  Check,
  Clock,
  Cross,
  Delete,
  Download,
  ExternalLink,
  Graph,
  LayersFront,
  PalmTree,
  Pencil,
  Person,
  Receipt,
  Save,
  Settings,
  SolidPlay,
  Table,
  Target,
} from "@/icons/app"
import { F0Alert } from "@/components/F0Alert"
import { ButtonInternal } from "@/components/F0Button/internal"
import type { IconType } from "@/components/F0Icon"
import { F0Heading } from "@/components/F0Heading"
import { dialogs } from "@/lib/providers/dialogs-alike"
import { ButtonGroup } from "@/ui/ButtonGroup"
import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import { Page as NavigationPage } from "@/patterns/Navigation/Page"
import { Tabs } from "@/patterns/Navigation/Tabs"
import { Sidebar } from "@/patterns/Navigation/Sidebar/Sidebar"
import * as SidebarStories from "@/patterns/Navigation/Sidebar/index.stories"
import { OneDataCollection } from "@/patterns/OneDataCollection"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"
import { ResourceHeader } from "@/patterns/ResourceHeader"
import { useAiChat } from "@/kits/ai/F0AiChat"
import type { ClarifyingOption } from "@/kits/ai/F0ClarifyingPanel"
import {
  type CanvasContent,
  type CanvasContentBase,
  type CanvasEntityDefinition,
} from "@/kits/ai/canvas"
import { F0AiProcessingOverlay } from "@/kits/ai/F0AiProcessingOverlay"
import {
  type ClarifyingStep,
  MockAiChatRuntimeProvider,
  MockConnectedChatHeader,
  MockConnectedChatInput,
  MockConnectedMessagesContainer,
  useMockAiChatRuntime,
} from "@/kits/ai/F0AiChat/__stories__/_mock"

import { f0FormField, F0Form } from "@/patterns/F0Form"
import type { F0SectionConfig } from "@/patterns/F0Form"
import { useF0FormDefinition } from "@/patterns/F0WizardForm"
import { SurveyAnsweringForm } from "@/kits/surveys/SurveyAnsweringForm"
import { F0AnalyticsDashboard } from "@/patterns/F0AnalyticsDashboard"
import { TEMPLATE_PREVIEW_DASHBOARDS } from "./analytics-template-preview-dashboards"
import { SurveyFormBuilder } from "@/kits/surveys/SurveyFormBuilder/Form"
import type { SurveyFormBuilderElement } from "@/kits/surveys/SurveyFormBuilder/types"
import { mockDatasets } from "@/kits/surveys/__stories__/mocks"

import {
  filledDataAdapter,
  resourceFilters,
  resourceSortings,
  tableVisualization,
} from "./mockData"
// Preview artwork lifted from the production template picker (monorepo
// modules/ai_reports/assets/template-previews), reworked to a 16:9 canvas
// with the secondary-background backdrop (#F0F2F5) baked in and the white
// dashboard card cropping at the bottom edge, like the picker's detail pane.
import absencesPreview from "./assets/preview-absences-overview.svg"
import employeeLitePreview from "./assets/preview-employee-current-lite-1.svg"
import expensesPreview from "./assets/preview-expenses-overview.svg"
import presencePreview from "./assets/preview-presence-missing-clockins.svg"
// WIP: temporary toast mock — replace with "@/hooks/toast" once
// https://github.com/factorialco/f0/pull/3493 merges, then remove this import.
import { toasts } from "@/hooks/toast"
import { useI18n } from "@/lib/providers/i18n"
import {
  makeInitialSurveyElements,
  mockSurveyTranscribe,
  NPS_SURVEY_ELEMENTS,
  SURVEY_DEFAULT_VALUES,
  SURVEY_ELEMENTS,
} from "./survey-mocks"
import { TAB_CONFIGS } from "./tab-configs"
import type { TabConfig } from "./tab-configs"
import type { F0AiChatWelcomeCard } from "@/kits/ai/F0AiChat"

/**
 * Co-creation patterns — "Walkthrough".
 *
 * Interactive mockup of the AI-creation flow, built on a single chat-enabled
 * ApplicationFrame so the "One" switch (the F0AiChat trigger) is always in the
 * header. There are three phases:
 *   1. Collection — data collection. Open the chat via the header "One" switch
 *      (side panel) OR the "Create" primary button (full width).
 *   2. Chat       — F0AiChat animates in so the user can describe what they
 *      want (full width via the "Create" button, side panel via the One switch).
 *   3. Split      — the chat docks as the right side panel and the resource
 *      (a document/preview canvas) fills the center.
 *
 * `phase` is the single source of truth; the chat's open/visualization state is
 * derived from it (and kept in sync when the user toggles the One switch).
 * Self-contained: this file owns its own mock world.
 *
 * The scripted conversation choreography — canned replies, the clarifying-question
 * flow, the chat → split transition, and the appended resource/proposal cards — is
 * authored below, one block per entry point (Empty survey, typed "Create", and the
 * template cards).
 */
const meta = {
  title: "Co-creation/My Walkthrough v2",
  // Editable duplicate of my-walkthrough.stories.tsx (chat-less templates
  // overlay + disabled open animations) — iterate here; v1 stays as reference.
  // Manual MDX docs live in creation-with-ai.mdx; opt out of the globally
  // enabled autodocs so the section shows a single Documentation page.
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

type Phase = "collection" | "chat" | "split"

const COCREATION_MODULE = {
  id: "ats" as const,
  name: "Co-creation",
  href: "/cocreation",
}

// `AiChatStateProvider` persists the chat's open/visualization-mode state to
// localStorage. We reset those keys once on mount so the chat always starts
// CLOSED in the collection view, regardless of a previous session.
const AI_CHAT_STORAGE_KEYS = [
  "ONE-ai-chat-open",
  "ONE-ai-chat-visualization-mode",
]
const resetAiChatPersistence = () => {
  try {
    AI_CHAT_STORAGE_KEYS.forEach((key) => window.localStorage.removeItem(key))
  } catch {
    // localStorage may be unavailable (SSR / privacy mode) — ignore.
  }
}

// ---------------------------------------------------------------------------
// Tab-config context — exposes the live active tab (and its config) to
// `FlowContent`, which reads it to drive the collection tab strip, the chat's
// opening intent message, and the resource canvas shown in the split view.
// ---------------------------------------------------------------------------

type TabConfigContextValue = {
  activeTabId: string
  setActiveTabId: (id: string) => void
  tabConfig: TabConfig
}

const TabConfigContext = createContext<TabConfigContextValue | null>(null)

function useTabConfig(): TabConfigContextValue {
  const ctx = useContext(TabConfigContext)
  if (!ctx) {
    throw new Error("useTabConfig must be used inside <TabConfigProvider>")
  }
  return ctx
}

function TabConfigProvider({
  initialTabId = "surveys",
  children,
}: {
  initialTabId?: string
  children: ReactNode
}) {
  const [activeTabId, setActiveTabId] = useState(initialTabId)
  const tabConfig = TAB_CONFIGS[activeTabId] ?? TAB_CONFIGS.surveys

  return (
    <TabConfigContext.Provider
      value={{ activeTabId, setActiveTabId, tabConfig }}
    >
      {children}
    </TabConfigContext.Provider>
  )
}

function SurveySettingsForm() {
  const formSchema = z.object({
    title: f0FormField.text({
      label: "Title",
      section: "basic",
      placeholder: "Enter survey title",
    }),
    description: f0FormField.textarea({
      label: "Description",
      section: "basic",
      optional: true,
      rows: 3,
    }),
    participants: f0FormField.select({
      label: "Select participants",
      section: "participants",
      options: [
        { value: "all", label: "All employees" },
        { value: "department", label: "By department" },
        { value: "custom", label: "Custom selection" },
      ],
      placeholder: "Select participants",
    }),
    publishOn: f0FormField.date({
      label: "Publish on",
      section: "schedule",
      row: "schedule-dates",
      optional: true,
    }),
    endsAt: f0FormField.date({
      label: "Ends at",
      section: "schedule",
      row: "schedule-dates",
      optional: true,
    }),
    recurrence: f0FormField.select({
      label: "Recurrence",
      section: "schedule",
      options: [
        { value: "none", label: "Does not repeat" },
        { value: "weekly", label: "Weekly" },
        { value: "monthly", label: "Monthly" },
        { value: "quarterly", label: "Quarterly" },
      ],
    }),
    managerVisibility: f0FormField.boolean({
      label: "Add visibility permissions to managers and team leads",
      helpText:
        "Grant access to managers and team leads so they can view results for their own teams once responses are available.",
      section: "visibility",
      optional: true,
    }),
    anonymousAnswers: f0FormField.boolean({
      label: "Anonymous answers",
      section: "visibility",
      optional: true,
    }),
    editors: f0FormField.select({
      label: "Select editors",
      section: "editors",
      options: [
        { value: "none", label: "None" },
        { value: "admins", label: "Administrators only" },
        { value: "custom", label: "Custom selection" },
      ],
      placeholder: "Select editors",
    }),
  })

  const sections: Record<string, F0SectionConfig> = {
    basic: { title: "Basic Information" },
    participants: {
      title: "Participants",
      description: "Choose who will receive this survey",
      action: { label: "Manage groups", icon: ExternalLink, href: "#groups" },
    },
    schedule: { title: "Schedule" },
    visibility: {
      title: "Visibility & Privacy",
      description:
        "Configure the visibility and privacy settings for this survey",
      action: {
        label: "Privacy settings",
        icon: Settings,
        onClick: () => {},
      },
    },
    editors: { title: "Editors" },
  }

  const formDefinition = useF0FormDefinition({
    name: "survey-settings",
    schema: formSchema,
    sections,
    defaultValues: {
      title: "Employee engagement survey",
      description:
        "A 10-question pulse check covering motivation, clarity, and team dynamics.",
      participants: undefined,
      publishOn: undefined,
      endsAt: undefined,
      recurrence: "none",
      managerVisibility: false,
      anonymousAnswers: true,
      editors: "admins",
    },
    onSubmit: async () => ({ success: true }),
    // The header Save persists the whole resource (questions + settings), so the
    // settings form carries no save affordance of its own.
    submitConfig: { hideActionBar: true, hideSubmitButton: true },
  })

  return (
    <F0Form formDefinition={formDefinition} styling={{ noPadding: true }} />
  )
}

/**
 * The four production analytics templates, copy verbatim from the template
 * picker (monorepo `dashboard_templates/*.yml` +
 * `ai_reports.co_creation.templates` i18n): title, the verb-first capability
 * line shown under each picker row, the detail panel's contents sentence,
 * and its "N KPIs, N charts" stats line.
 */
type Template = {
  id: string
  name: string
  module: string
  description: string
  /** The template's short YAML description — the report header subtitle. */
  subtitle: string
  contents: string
  stats: string
  preview: string
}

const ANALYTICS_DASHBOARD_TEMPLATES: Template[] = [
  {
    id: "absences-overview",
    name: "Absences overview",
    module: "Absences",
    description: "Monitor absence volume, duration and trends across teams",
    subtitle: "Absence volume, duration and breakdowns",
    contents:
      "Absences at a glance, broken down by type, team and location, with trends over time and every record behind them.",
    stats: "3 KPIs, 6 charts, 1 table",
    preview: absencesPreview,
  },
  {
    id: "expenses-overview",
    name: "Expenses",
    module: "Expenses",
    description: "Track spend across categories and legal entities",
    subtitle: "Spend by category and legal entity. Excludes rejected expenses",
    contents:
      "How much you spend, where it goes by category and entity, and every expense behind the numbers.",
    stats: "3 KPIs, 2 charts, 1 table",
    preview: expensesPreview,
  },
  {
    id: "presence-missing-clockins",
    name: "Missing clock-ins",
    module: "Presence",
    description: "Spot missing clock-ins by day, department and location",
    subtitle: "Missing clock-in volume and breakdowns for the selected week",
    contents:
      "Who missed their clock-ins this week, where it happens most, and every affected shift.",
    stats: "2 KPIs, 3 charts, 1 table",
    preview: presencePreview,
  },
  {
    id: "employee-current-lite",
    name: "Workforce snapshot",
    module: "Employees",
    description: "Evaluate headcount, tenure, salary and demographics",
    subtitle: "Headcount, tenure, salary and demographics",
    contents:
      "Your workforce at a glance — who they are, where they work, what they earn, and how the team has grown.",
    stats: "4 KPIs, 7 charts",
    preview: employeeLitePreview,
  },
]

const analyticsTemplatesAdapter = {
  fetchData: () => Promise.resolve({ records: ANALYTICS_DASHBOARD_TEMPLATES }),
}

const analyticsTemplateFilters = {
  module: {
    type: "in" as const,
    label: "Module",
    options: {
      options: [
        { value: "Absences", label: "Absences" },
        { value: "Employees", label: "Employees" },
        { value: "Expenses", label: "Expenses" },
        { value: "Presence", label: "Presence" },
      ],
    },
  },
}

const analyticsTemplateSortings = {
  name: { label: "Name" },
} as const

const analyticsTemplateCardVisualization = {
  type: "card" as const,
  options: {
    title: (item: Template) => item.name,
    description: (item: Template) => item.description,
    image: (item: Template) => item.preview,
    // The whole preview, un-cropped: a width-responsive 16:9 frame ("video"
    // ignores imageSize) the SVGs match exactly, so their baked-in secondary
    // backdrop fills the image area edge-to-edge; the blurred letterbox fill
    // is redundant with it (and costs a blur composite per card).
    imageFit: "contain" as const,
    imageAspectRatio: "video" as const,
    blurredBackground: false,
    cardProperties: [
      {
        label: "Contains",
        icon: Graph,
        render: (item: Template) => item.stats,
      },
    ],
  },
}

/**
 * The analytics-templates browse view as a card-view data collection. Shared
 * by BOTH the collection "Templates" tab and the templates overlay (see
 * `TemplatesOverlay`) so the cards + their metadata stay identical in both
 * places as the data collection / card config evolves.
 */
function TemplatesCollection({
  onSelect,
}: {
  onSelect?: (item: Template) => void
} = {}) {
  const source = useDataCollectionSource({
    dataAdapter: analyticsTemplatesAdapter,
    filters: analyticsTemplateFilters,
    sortings: analyticsTemplateSortings,
    search: { enabled: true, sync: true },
    // No card CTAs — actions live on the preview surface. The card-body click
    // is omitted entirely when no handler is supplied so the browse-tab cards
    // stay inert (no pointer, no action); on the overlay it opens the preview.
    itemOnClick: onSelect ? (item) => () => onSelect(item) : undefined,
  })
  return (
    <OneDataCollection
      source={source}
      visualizations={[analyticsTemplateCardVisualization]}
      fullHeight
    />
  )
}

// The templates browse (list + read-only preview) opens IN PLACE as a layer
// ABOVE the fullscreen chat — One stays open and untouched behind it, so
// there is no chat close/open animation and closing the overlay reveals the
// welcome exactly as it was. Mirrors monorepo PR #108118 ("open template
// picker in place, keep One open"). This context lets the "Templates"
// welcome card open the overlay and the overlay close itself.
type BrowseOverlayMode = "templates" | "catalog"

const TemplatesOverlayContext = createContext<{
  overlayMode: BrowseOverlayMode | null
  openTemplatesOverlay: () => void
  openCatalogOverlay: () => void
  closeOverlay: () => void
}>({
  overlayMode: null,
  openTemplatesOverlay: () => {},
  openCatalogOverlay: () => {},
  closeOverlay: () => {},
})

// Story-local survey canvas. The "survey" type is story-specific (not part of
// the closed SDS `CanvasContent` union), so we keep a local content type and
// cast at the `openCanvas` call site. The canvas is always the editable
// resource view — a `ResourceHeader` + Questions/Settings tabs over the
// interactive `SurveyFormBuilder` (see `SurveyEditorCanvasHeader` /
// `SurveyEditorCanvasBody`); the read-only template preview lives on the
// templates overlay instead (see `TemplatesOverlay`).
type SurveyCanvasContent = CanvasContentBase & {
  type: "survey"
  mode: "edit"
  templateName: string
  /**
   * Identifies which survey in the multi-survey store this canvas renders,
   * minted by `createSurvey`.
   */
  surveyId?: string
  /** Carried from the template card into the edit view's resource header. */
  description?: string
  /** Blank "start from scratch" survey — the editable builder, seeded empty. */
  empty?: boolean
}

// The co-created REPORT canvas — what "Use this template" opens: the
// template's analytics dashboard as a draft report resource (title, YAML
// subtitle, Draft status, "Save in Analytics"), mirroring the production
// open-dashboard flow.
type ReportCanvasContent = CanvasContentBase & {
  type: "report"
  /** Picks the preview dashboard items for this report. */
  templateId: string
  /** The template's short YAML description, shown under the title. */
  subtitle?: string
}

// Bridge the story-local canvas types to the SDS API. `CanvasContent` /
// `CanvasEntityDefinition` are a *closed* SDS union that doesn't include the
// custom "survey"/"report" entities this story demos, so we widen at the
// provider boundary (the registry/panel match on the `type` string at runtime).
// Centralized here so the unavoidable cast — and the reason for it — live in one
// place instead of being repeated at every call site.
type StoryCanvasContent = SurveyCanvasContent | ReportCanvasContent

const toCanvasContent = (content: StoryCanvasContent): CanvasContent =>
  content as unknown as CanvasContent

const toCanvasEntity = (
  entity:
    | CanvasEntityDefinition<SurveyCanvasContent>
    | CanvasEntityDefinition<ReportCanvasContent>
): CanvasEntityDefinition => entity as unknown as CanvasEntityDefinition

// Inverse of `toCanvasContent`: read the story content back out of the SDS union.
const asSurveyCanvasContent = (
  content: CanvasContent | null
): SurveyCanvasContent | null =>
  content as unknown as SurveyCanvasContent | null

// Default name for a blank "start from scratch" survey, shown until the guided
// flow resolves a real name.
const UNTITLED_SURVEY_NAME = "Untitled survey"

// Name of the survey seeded by the "Employee NPS" welcome card.
const EMPLOYEE_NPS_SURVEY_NAME = "Employee NPS"

// Build the canvas content for a blank survey opened by the "Empty survey"
// welcome card (or the typed "Create" flow). Reuses the survey canvas entity
// (mode "edit") but with no sample questions: it mirrors a real Survey resource
// view — a `ResourceHeader` + Questions/Settings tab strip — with the
// interactive `SurveyFormBuilder` (seeded empty) living under the "Questions"
// tab (see `SurveyEditorCanvasHeader` / `SurveyEditorCanvasBody`). The
// `surveyId` ties it to its entry in the multi-survey store.
const makeEmptySurveyContent = (
  surveyId: string,
  name: string = UNTITLED_SURVEY_NAME
): SurveyCanvasContent => ({
  type: "survey",
  title: name,
  mode: "edit",
  templateName: name,
  empty: true,
  surveyId,
})

// In-chat survey card, built on `F0CardHorizontal`. Its Open/Close button drives
// the single shared canvas. The card derives `isActive` by matching the open
// `canvasContent` to its own `surveyId`, so many survey cards coexist in one chat
// and only one survey shows at a time. A survey can post a series of cards as it
// evolves (created → updated) — only the latest (`live`) card stays interactive;
// superseded cards render faded + inert (no Open/Close), keeping the chat history
// visible. Posted via the mock runtime's `appendCard` (generativeUI slot), which
// re-invokes the render each pass so `isActive` / `live` stay reactive.
function SurveyCard({
  surveyId,
  cardId,
  title,
  description,
}: {
  surveyId: string
  cardId: string
  title: string
  description: string
}) {
  const { canvasContent, openCanvas, setVisualizationMode } = useAiChat()
  const { isLiveCard } = useSurveyStore()
  const live = isLiveCard(surveyId, cardId)
  // `canvasContent` is the closed SDS union (dashboard | form | dataDownload);
  // the story-local "survey" type is matched at runtime, so widen to read it.
  const surveyContent = asSurveyCanvasContent(canvasContent)
  const isActive =
    surveyContent?.type === "survey" && surveyContent.surveyId === surveyId

  const handleOpen = () =>
    openCanvas(
      toCanvasContent({
        type: "survey",
        title,
        mode: "edit",
        templateName: title,
        surveyId,
        description,
      })
    )

  // Closing from the card collapses the canvas but keeps the chat docked as a
  // side panel (split). The mode before the canvas opened is always either
  // "sidepanel" or "fullscreen"; we preserve the side-panel case and, when it was
  // fullscreen, deliberately fall to side panel rather than back to fullscreen —
  // both resolve to "sidepanel". Switching modes here also clears the canvas
  // content (the provider drops it on any canvas → non-canvas transition), so we
  // don't need the generic `closeCanvas` (which would restore fullscreen).
  const handleClose = () => setVisualizationMode("sidepanel")

  // Superseded cards (no longer live) are inert: faded, non-interactive, no
  // Open/Close button. The live card shows the toggle — "Close" while its survey
  // is open in the canvas, "Open" otherwise.
  return (
    <div className={live ? undefined : "pointer-events-none opacity-50"}>
      <F0CardHorizontal
        avatar={{ type: "module", module: "engagement" }}
        title={title}
        description={description}
        primaryAction={
          live
            ? {
                label: isActive ? "Close" : "Open",
                onClick: isActive ? handleClose : handleOpen,
                variant: "outline",
              }
            : undefined
        }
      />
    </div>
  )
}

// Subtitle shown on a survey's "created" card (blank or from a template).
const SURVEY_CREATED_DESCRIPTION = "Created in Engagement / Surveys"
// Subtitle shown on the "updated" card posted once the AI drafts the questions.
const SURVEY_UPDATED_DESCRIPTION = "Survey updated with your choices."

// Toast titles reused across the survey resource-header actions and autosave.
const SURVEY_SAVED_TOAST = "Survey saved in Engagement / Surveys"
const SURVEY_PUBLISHED_TOAST = "Survey published"
const SURVEY_DUPLICATED_TOAST = "Survey duplicated"
const SURVEY_DELETED_TOAST = "Survey deleted"

// The single open-ended question the AI "proposes" adding once a template has
// been applied and the user describes a change. Appended to the survey (kept
// alongside the template's questions) when the user accepts the proposal.
const PROPOSED_QUESTION_ELEMENT = {
  type: "question",
  question: {
    id: "q-proposed-comment",
    title: "What would most improve your experience?",
    type: "longText" as const,
  },
} satisfies SurveyFormBuilderElement

// Label + subtitle shared by the proposal card across its pending/resolved
// states, so the resolved card reads as the same proposal, now decided.
const PROPOSED_CHANGE_TEXT = "Add an open-ended comment question"
const PROPOSED_CHANGE_DESCRIPTION =
  "A new question at the end: “What would most improve your experience?”"

/**
 * Human-in-the-loop proposal card posted whenever the user describes a change
 * to an existing survey. Built on `F0CardHorizontal`'s confirm/reject variant:
 * it owns its own pending → resolved state. Accepting
 * runs the "applying changes" overlay, appends the proposed question, and posts
 * a fresh live `SurveyCard` — which supersedes the prior card for the survey
 * (its Open/Close button drops and it fades to opacity-50). Either way the card
 * itself flips to its resolved `status` (the ✓/✗ buttons give way to an outcome
 * icon) and the flow is re-armed, so a further typed message proposes again.
 * Rendered via `appendCard` (generativeUI slot) inside the provider tree, so it
 * can read the chat runtime + survey store via hooks.
 */
function ProposalConfirmationCard({
  surveyId,
  surveyTitle,
}: {
  surveyId: string
  surveyTitle: string
}) {
  const [resolution, setResolution] = useState<
    "pending" | "accepted" | "rejected"
  >("pending")
  const { appendMessages, appendCard } = useMockAiChatRuntime()
  const { applyChange, getSurvey, nextCardId, registerLiveCard } =
    useSurveyStore()
  // Re-arm after the user decides, so the NEXT typed message proposes again —
  // the propose → confirm → update loop repeats for as long as they keep typing.
  const { armProposal } = useProposalFlow()

  // No avatar on the update card — the proposed change isn't attributed to the
  // Engagement module (unlike the resource cards), so the row leads with its text.
  if (resolution === "accepted") {
    return (
      <F0CardHorizontal
        title={PROPOSED_CHANGE_TEXT}
        description={PROPOSED_CHANGE_DESCRIPTION}
        status={{ icon: Check, variant: "positive", label: "Accepted" }}
      />
    )
  }
  if (resolution === "rejected") {
    return (
      <F0CardHorizontal
        title={PROPOSED_CHANGE_TEXT}
        description={PROPOSED_CHANGE_DESCRIPTION}
        status={{ icon: Cross, variant: "neutral", label: "Rejected" }}
      />
    )
  }

  return (
    <F0CardHorizontal
      title={PROPOSED_CHANGE_TEXT}
      description={PROPOSED_CHANGE_DESCRIPTION}
      confirmAction={{
        label: "Apply",
        onClick: () => {
          setResolution("accepted")
          // Mint a unique question id so repeated accepts never collide.
          const proposed: SurveyFormBuilderElement = {
            type: "question",
            question: {
              ...PROPOSED_QUESTION_ELEMENT.question,
              id: `q-proposed-${nextCardId()}`,
            },
          }
          applyChange(
            surveyId,
            (els) => [...els, proposed],
            () => {
              // A fresh live card for the SAME survey: the prior card linking to
              // it drops its Open/Close button and fades to opacity-50.
              const cardId = nextCardId()
              registerLiveCard(surveyId, cardId)
              appendCard(() => (
                <SurveyCard
                  surveyId={surveyId}
                  cardId={cardId}
                  title={getSurvey(surveyId)?.name ?? surveyTitle}
                  description={SURVEY_UPDATED_DESCRIPTION}
                />
              ))
              appendMessages([
                {
                  role: "assistant",
                  content: "Done — I've added the question to your survey.",
                },
              ])
              armProposal(surveyId, surveyTitle)
            }
          )
        },
      }}
      rejectAction={{
        label: "Discard",
        onClick: () => {
          setResolution("rejected")
          appendMessages([
            {
              role: "assistant",
              content: "No problem — I've left the survey unchanged.",
            },
          ])
          armProposal(surveyId, surveyTitle)
        },
      }}
    />
  )
}

/**
 * Arms the next typed message to propose a change to an existing survey: the
 * assistant posts a proposal line and a human-in-the-loop
 * `ProposalConfirmationCard`. Shared by every entry point (Empty survey, typed
 * "Create", and Templates) once the survey has been created, and re-armed by the
 * card itself after each decision — so further typing keeps re-triggering the
 * propose → confirm → update loop, each accepted change superseding the previous
 * card pointing to the survey.
 */
function useProposalFlow() {
  const { appendMessages, appendCard, setUserMessageInterceptor } =
    useMockAiChatRuntime()
  const armProposal = useCallback(
    (surveyId: string, surveyTitle: string) => {
      setUserMessageInterceptor(() => {
        appendMessages([
          {
            role: "assistant",
            content:
              "Good idea. Here's a change I'd suggest — review it below.",
          },
        ])
        appendCard(() => (
          <ProposalConfirmationCard
            surveyId={surveyId}
            surveyTitle={surveyTitle}
          />
        ))
      })
    },
    [appendMessages, appendCard, setUserMessageInterceptor]
  )
  return { armProposal }
}

// Survey-type options offered as a clarifying question right after a blank
// survey is created (mirrors the examples the assistant used to list inline).
const SURVEY_TYPE_OPTIONS: ClarifyingOption[] = [
  { id: "engagement", label: "Employee engagement" },
  { id: "onboarding", label: "Onboarding feedback" },
  { id: "pulse", label: "Customer pulse check" },
  { id: "enps", label: "eNPS" },
]

// Follow-up clarifying questions walked after the survey type (audience, then
// length) before the AI "drafts" the questions onto the canvas.
const SURVEY_AUDIENCE_OPTIONS: ClarifyingOption[] = [
  { id: "all", label: "All employees" },
  { id: "department", label: "A specific department" },
  { id: "custom", label: "A custom group" },
]

const SURVEY_LENGTH_OPTIONS: ClarifyingOption[] = [
  { id: "short", label: "Short (3–5 questions)" },
  { id: "standard", label: "Standard (6–10 questions)" },
  { id: "deep", label: "In-depth (10+ questions)" },
]

// The three clarifying questions — type → audience → length — walked as a
// single consecutive flow inside one panel: picking an answer advances to the
// next question (the header shows a "X of Y" counter and a back arrow) and the
// final question submits. Shared by both the "Empty survey" card and the typed
// "Create" flow, which differ only in when the canvas opens.
const SURVEY_CLARIFYING_STEPS: ClarifyingStep[] = [
  {
    question: "What kind of survey are you working on?",
    options: SURVEY_TYPE_OPTIONS,
    selectionMode: "single",
  },
  {
    question: "Who should receive this survey?",
    options: SURVEY_AUDIENCE_OPTIONS,
    selectionMode: "single",
  },
  {
    question: "How long should the survey be?",
    options: SURVEY_LENGTH_OPTIONS,
    selectionMode: "single",
  },
]

// Once the consecutive flow resolves, echo the user's picks back into the
// transcript as a SINGLE user message — each question in bold with the chosen
// answer on the line beneath it (mirrors the real product, which consolidates
// the clarifying answers into one reply instead of one bubble per step).
const surveyAnswerMessages = (
  answersByStep: string[][]
): { role: "user"; content: string }[] => {
  // answersByStep is index-aligned with SURVEY_CLARIFYING_STEPS (buildAnswers in
  // MockAiChatRuntime maps over every step, in order).
  const blocks = SURVEY_CLARIFYING_STEPS.map((step, i) => {
    const answer = (answersByStep[i] ?? []).join(", ").trim()
    if (!answer) return null
    // Trailing backslash = CommonMark hard line break, so the answer renders
    // directly UNDER the bold question (a plain "\n" is only a soft break/space).
    return `**${step.question}**\\\n${answer}`
  }).filter((block): block is string => block !== null)

  if (blocks.length === 0) return []
  // Blank line between pairs → separate <p> blocks, spaced by the bubble's gap.
  return [{ role: "user" as const, content: blocks.join("\n\n") }]
}

// Survey name derived from the chosen type once the guided flow completes — the
// canvas header switches from "Untitled survey" to this.
const surveyNameForType = (typeLabel: string): string => `${typeLabel} survey`

// Confirmation dialogs use the imperative Alert/Confirm API from Library/Dialogs
// (`dialogs.confirmation`, rendered by the `DialogsAlikeLayoutProvider` that `F0Provider`
// mounts). No open-state context needed — any trigger just calls these and awaits
// the result (the picked action's value: `true` for confirm, `false` for cancel).

// "Unsaved changes" confirmation shown when "Publish" is pressed — offers to save
// before publishing. Resolves `true` when the user confirms.
const confirmPublish = () =>
  dialogs.confirmation({
    title: "Unsaved Changes",
    msg: "You have unsaved changes, would you like to Save the changes before publishing?",
    confirm: { label: "Save Changes and Publish" },
    cancel: { label: "Cancel" },
  })

// "Unsaved changes" confirmation shown when the canvas Close (X) is pressed.
// Closing leaves the in-progress draft, so the user gets the three ways out:
// save the changes then close, close without saving, or cancel and stay.
// Resolves the picked action's value ("save" | "discard" | "cancel"); dismissing
// the dialog (backdrop / Esc) resolves `undefined`, also treated as "stay".
const confirmCloseUnsaved = () =>
  dialogs.notification({
    type: "warning",
    title: "Unsaved changes",
    msg: "You have unsaved changes. Save them to Surveys before closing the canvas?",
    actions: {
      primary: { label: "Save and close", value: "save" },
      secondary: [
        { label: "Close without saving", value: "discard" },
        { label: "Cancel", value: "cancel" },
      ],
    },
  })

/** The non-dismissable info banner shown atop a template preview. */
function TemplatePreviewAlert() {
  return (
    <F0Alert
      variant="info"
      title="You're viewing a template."
      description="To create a report click Use this template"
    />
  )
}

/**
 * In-chat report card, built on `F0CardHorizontal` — the analytics analog of
 * `SurveyCard`. Its Open/Close button drives the shared canvas; `isActive`
 * matches the open canvas content by `templateId`.
 */
function ReportCard({
  templateId,
  title,
  subtitle,
}: {
  templateId: string
  title: string
  subtitle?: string
}) {
  const { canvasContent, openCanvas, setVisualizationMode } = useAiChat()
  const content = canvasContent as {
    type?: string
    templateId?: string
  } | null
  const isActive =
    content?.type === "report" && content.templateId === templateId

  const handleOpen = () =>
    openCanvas(toCanvasContent({ type: "report", title, templateId, subtitle }))
  // Same semantics as SurveyCard: collapse the canvas, keep the chat docked.
  const handleClose = () => setVisualizationMode("sidepanel")

  return (
    <F0CardHorizontal
      avatar={{ type: "module", module: "analytics" }}
      title={title}
      description="Report"
      primaryAction={{
        label: isActive ? "Close" : "Open",
        onClick: isActive ? handleClose : handleOpen,
        variant: "outline",
      }}
    />
  )
}

/**
 * The report greeting the assistant posts when a template opens as a draft
 * report — copy mirrors the production open-dashboard greeting
 * (`ai_reports.dashboards.chat.open_greeting.*`).
 */
const reportGreeting = (title: string): string =>
  [
    `Hey! How can I help you with **${title}**?`,
    "",
    "Here are a few things I can do:",
    "",
    '- **Add widgets** — e.g. "add a bar chart of headcount by department"',
    '- **Explain insights** — e.g. "what\'s driving the trend?"',
    '- **Filter the view** — e.g. "show only data from 2026"',
    '- **Refine a chart** — e.g. "group by location instead of department"',
  ].join("\n")

/**
 * Header for the draft-report canvas: template title, YAML subtitle, Draft
 * status, and the production actions — "Export employee data" (secondary) and
 * "Save in Analytics" (primary) — mirroring the open-dashboard resource view.
 */
function ReportCanvasHeader({
  content,
  onClose,
}: {
  content: ReportCanvasContent
  onClose: () => void
}) {
  return (
    <ResourceHeader
      title={content.title ?? "Report"}
      description={content.subtitle}
      status={{ label: "Status", text: "Draft", variant: "neutral" }}
      primaryAction={{
        label: "Save in Analytics",
        icon: Save,
        onClick: () =>
          toasts.open({
            title: "Report saved in Analytics",
            variant: "success",
          }),
      }}
      secondaryActions={[
        {
          label: "Export employee data",
          icon: Download,
          onClick: () => toasts.open({ title: "Exporting employee data…" }),
        },
      ]}
      onClose={onClose}
    />
  )
}

const reportCanvasEntity: CanvasEntityDefinition<ReportCanvasContent> = {
  type: "report",
  renderHeader: ({ content, onClose }) => (
    <ReportCanvasHeader content={content} onClose={onClose} />
  ),
  renderContent: ({ content }) => (
    <div className="h-full w-full overflow-auto px-4 py-3">
      <F0AnalyticsDashboard
        items={TEMPLATE_PREVIEW_DASHBOARDS[content.templateId] ?? []}
      />
    </div>
  ),
}

// How long the canvas stays blurred under the "applying changes" overlay before
// the drafted questions land.
const SURVEY_DRAFTING_MS = 2200

/**
 * One survey's draft state held in the multi-survey store: the form-builder
 * `elements`, the survey `name`, and a `processing` flag for the AI "applying
 * changes" overlay.
 */
type SurveyEntry = {
  elements: SurveyFormBuilderElement[]
  name: string
  processing: boolean
}

/**
 * The multi-survey store, shared across the whole flow. Keyed by `surveyId` so
 * MANY distinct surveys can coexist in one chat (each in-chat `SurveyCard` opens
 * its own survey into the single shared canvas). Lives ABOVE the chat + canvas:
 * the clarifying chain in the chat footer drafts into a survey, the canvas
 * (rendered separately in the AI panel) shows it, and the chat cards read it —
 * so no single one of them can own it alone. Also tracks which card is the
 * `live` (interactive) one per survey, so a superseded card can render disabled.
 */
type SurveyStoreValue = {
  /**
   * Register + seed a new survey, returning its stable id. Pass `elements` to
   * seed an explicit question set (e.g. the "Employee NPS" welcome card). Else
   * `empty` starts blank (the AI drafts questions in later); otherwise it seeds
   * the sample questions (a "Use this template" copy).
   */
  createSurvey: (
    name: string,
    opts?: { empty?: boolean; elements?: SurveyFormBuilderElement[] }
  ) => string
  /** Read a survey entry (undefined before creation, e.g. a template preview). */
  getSurvey: (surveyId?: string) => SurveyEntry | undefined
  /** Replace a survey's questions (builder edits), scoped to one survey. */
  setElements: (surveyId: string, elements: SurveyFormBuilderElement[]) => void
  /**
   * Rename the survey, blur its canvas for a beat, then drop in a full set of
   * mock questions — the AI "drafting" the survey at the end of the flow.
   * `onComplete` fires once the questions land (the form is updated).
   */
  draftQuestions: (
    surveyId: string,
    name: string,
    onComplete?: () => void
  ) => void
  /**
   * Apply an AI-proposed edit to a survey: blur its canvas for a beat (the
   * "applying changes" overlay), then transform its questions with `mutate`
   * (e.g. appending a new question). Unlike `draftQuestions` it keeps the
   * existing questions, so the change reads as a diff. `onComplete` fires once
   * the new questions land.
   */
  applyChange: (
    surveyId: string,
    mutate: (els: SurveyFormBuilderElement[]) => SurveyFormBuilderElement[],
    onComplete?: () => void
  ) => void
  /** Mint a unique id for a freshly-posted chat card. */
  nextCardId: () => string
  /** Mark `cardId` as the live (interactive) card for `surveyId`. */
  registerLiveCard: (surveyId: string, cardId: string) => void
  /** Whether `cardId` is the current live card for `surveyId`. */
  isLiveCard: (surveyId: string, cardId: string) => boolean
  /** True once any survey has had its questions drafted (elements.length > 0). */
  hasDraftedSurvey: boolean
}

const SurveyStoreContext = createContext<SurveyStoreValue | null>(null)

function useSurveyStore(): SurveyStoreValue {
  const ctx = useContext(SurveyStoreContext)
  if (!ctx) {
    throw new Error("useSurveyStore must be used inside <SurveyStoreProvider>")
  }
  return ctx
}

function SurveyStoreProvider({ children }: { children: ReactNode }) {
  const [surveys, setSurveys] = useState<Record<string, SurveyEntry>>({})
  const [liveCardBySurvey, setLiveCardBySurvey] = useState<
    Record<string, string>
  >({})
  // Monotonic counter minting both survey and card ids — unique within a session
  // (avoids Date.now/random; deterministic for the mock).
  const idRef = useRef(0)
  const timersRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({})

  useEffect(
    () => () => {
      Object.values(timersRef.current).forEach(clearTimeout)
    },
    []
  )

  const createSurvey = useCallback<SurveyStoreValue["createSurvey"]>(
    (name, opts) => {
      const surveyId = `survey-${(idRef.current += 1)}`
      setSurveys((prev) => ({
        ...prev,
        [surveyId]: {
          // A blank "empty" survey is seeded with its first section/question
          // (the same starting point the form builder would auto-add) so that
          // state is durable in the store instead of appearing only as a
          // render-time side effect.
          elements:
            opts?.elements ??
            (opts?.empty ? makeInitialSurveyElements() : SURVEY_ELEMENTS),
          name,
          processing: false,
        },
      }))
      return surveyId
    },
    []
  )

  const getSurvey = useCallback<SurveyStoreValue["getSurvey"]>(
    (surveyId) => (surveyId ? surveys[surveyId] : undefined),
    [surveys]
  )

  const setElements = useCallback<SurveyStoreValue["setElements"]>(
    (surveyId, elements) => {
      setSurveys((prev) =>
        prev[surveyId]
          ? { ...prev, [surveyId]: { ...prev[surveyId], elements } }
          : prev
      )
    },
    []
  )

  const draftQuestions = useCallback<SurveyStoreValue["draftQuestions"]>(
    (surveyId, name, onComplete) => {
      setSurveys((prev) =>
        prev[surveyId]
          ? {
              ...prev,
              [surveyId]: { ...prev[surveyId], name, processing: true },
            }
          : prev
      )
      timersRef.current[surveyId] = setTimeout(() => {
        setSurveys((prev) =>
          prev[surveyId]
            ? {
                ...prev,
                [surveyId]: {
                  ...prev[surveyId],
                  elements: SURVEY_ELEMENTS,
                  processing: false,
                },
              }
            : prev
        )
        onComplete?.()
      }, SURVEY_DRAFTING_MS)
    },
    []
  )

  const applyChange = useCallback<SurveyStoreValue["applyChange"]>(
    (surveyId, mutate, onComplete) => {
      setSurveys((prev) =>
        prev[surveyId]
          ? { ...prev, [surveyId]: { ...prev[surveyId], processing: true } }
          : prev
      )
      timersRef.current[surveyId] = setTimeout(() => {
        setSurveys((prev) =>
          prev[surveyId]
            ? {
                ...prev,
                [surveyId]: {
                  ...prev[surveyId],
                  elements: mutate(prev[surveyId].elements),
                  processing: false,
                },
              }
            : prev
        )
        onComplete?.()
      }, SURVEY_DRAFTING_MS)
    },
    []
  )

  const nextCardId = useCallback<SurveyStoreValue["nextCardId"]>(
    () => `card-${(idRef.current += 1)}`,
    []
  )

  const registerLiveCard = useCallback<SurveyStoreValue["registerLiveCard"]>(
    (surveyId, cardId) => {
      setLiveCardBySurvey((prev) => ({ ...prev, [surveyId]: cardId }))
    },
    []
  )

  const isLiveCard = useCallback<SurveyStoreValue["isLiveCard"]>(
    (surveyId, cardId) => liveCardBySurvey[surveyId] === cardId,
    [liveCardBySurvey]
  )

  const hasDraftedSurvey = Object.values(surveys).some(
    (s) => s.elements.length > 0
  )

  return (
    <SurveyStoreContext.Provider
      value={{
        createSurvey,
        getSurvey,
        setElements,
        draftQuestions,
        applyChange,
        nextCardId,
        registerLiveCard,
        isLiveCard,
        hasDraftedSurvey,
      }}
    >
      {children}
    </SurveyStoreContext.Provider>
  )
}

/**
 * Shared state for the editable survey canvas (mode "edit" — both the blank
 * "Empty survey" and a "Use this template" copy). The canvas header and body
 * are emitted by separate render functions (`renderHeader` / `renderContent`),
 * so the active tab (Questions / Settings) can't live in either alone — it's
 * held here and provided via the entity `wrapper`, which brackets both. The
 * `elements` (and the `processing` overlay flag) come from the multi-survey
 * store (keyed by `surveyId`) so the chat's clarifying chain can draft into them.
 */
type SurveyEditorCanvasState = {
  tabId: string
  setTabId: (id: string) => void
  elements: SurveyFormBuilderElement[]
  setElements: (elements: SurveyFormBuilderElement[]) => void
  name: string
  processing: boolean
  /** Id of the survey this canvas edits — keys the one-shot first-creation save. */
  surveyId: string | undefined
}

// Survey ids whose first-creation save toast has already fired. Module-scoped so
// it survives the canvas body unmounting on close and remounting on reopen, which
// would otherwise reset a per-mount ref and re-fire the toast every time.
const createdSurveyIds = new Set<string>()

const SurveyEditorCanvasContext = createContext<SurveyEditorCanvasState | null>(
  null
)

function useSurveyEditorCanvas(): SurveyEditorCanvasState {
  const ctx = useContext(SurveyEditorCanvasContext)
  if (!ctx) {
    throw new Error(
      "useSurveyEditorCanvas must be used inside the survey canvas wrapper"
    )
  }
  return ctx
}

function SurveyCanvasStateProvider({
  content,
  children,
}: {
  content: SurveyCanvasContent
  children: ReactNode
}) {
  // Default to the "editor" (Questions) tab — the survey-creation surface is
  // the point of the edit flow.
  const [tabId, setTabId] = useState("editor")
  // Read this survey's draft from the store by id. The survey is seeded once at
  // creation time (`createSurvey`), so reopening its canvas never resets it —
  // each survey keeps its own questions as the user switches between cards.
  const store = useSurveyStore()
  const survey = store.getSurvey(content.surveyId)
  const elements = survey?.elements ?? []
  const name = survey?.name ?? content.templateName
  const processing = survey?.processing ?? false
  const surveyId = content.surveyId
  const setElements = useCallback(
    (next: SurveyFormBuilderElement[]) => {
      if (surveyId) store.setElements(surveyId, next)
    },
    [store, surveyId]
  )
  return (
    <SurveyEditorCanvasContext.Provider
      value={{
        tabId,
        setTabId,
        elements,
        setElements,
        name,
        processing,
        surveyId,
      }}
    >
      {children}
    </SurveyEditorCanvasContext.Provider>
  )
}

/** Total questions across the survey, counting those nested in sections. */
function countQuestions(elements: SurveyFormBuilderElement[]): number {
  return elements.reduce(
    (n, el) =>
      el.type === "section" ? n + (el.section.questions?.length ?? 0) : n + 1,
    0
  )
}

/**
 * Header for the editable survey canvas. Mirrors a real Survey resource view: a
 * `ResourceHeader` (title, optional description, Draft status, Publish action,
 * "⋯" menu, metadata) stacked over the Questions / Settings tab strip — the
 * same chrome the split phase renders for a created survey. The "Questions"
 * metadata reflects the live question count from the shared canvas state.
 */
function SurveyEditorCanvasHeader({
  content,
  onClose,
}: {
  content: SurveyCanvasContent
  onClose: () => void
}) {
  const { tabId, setTabId, elements, name } = useSurveyEditorCanvas()
  const i18n = useI18n()
  return (
    <>
      <ResourceHeader
        title={name}
        description={content.description}
        status={{ label: "Status", text: "Draft", variant: "neutral" }}
        primaryAction={{
          label: "Publish",
          icon: SolidPlay,
          onClick: () =>
            void confirmPublish().then((ok) => {
              if (ok)
                toasts.open({
                  title: SURVEY_PUBLISHED_TOAST,
                  variant: "success",
                })
            }),
        }}
        onClose={() =>
          void confirmCloseUnsaved().then((action) => {
            // Cancel or dismissed → stay on the canvas.
            if (action === "cancel" || action === undefined) return
            if (action === "save")
              toasts.open({
                title: SURVEY_SAVED_TOAST,
                variant: "success",
              })
            onClose()
          })
        }
        secondaryActions={[
          {
            label: i18n.actions.save,
            onClick: () =>
              toasts.open({
                title: SURVEY_SAVED_TOAST,
                variant: "success",
              }),
          },
        ]}
        otherActions={[
          {
            label: "Duplicate",
            icon: LayersFront,
            onClick: () => toasts.open({ title: SURVEY_DUPLICATED_TOAST }),
          },
          { type: "separator" },
          {
            label: "Delete",
            icon: Delete,
            critical: true,
            onClick: () =>
              toasts.open({ title: SURVEY_DELETED_TOAST, variant: "error" }),
          },
        ]}
        metadata={[
          {
            label: "Recurrence",
            value: { type: "text", content: "Does not repeat" },
          },
          {
            label: "Finishes on",
            value: { type: "text", content: "Never ends" },
          },
          {
            label: "Questions",
            value: { type: "text", content: String(countQuestions(elements)) },
          },
        ]}
      />
      <ClickableTabs
        tabs={[
          { label: "Questions", id: "editor" },
          { label: "Settings", id: "settings" },
        ]}
        activeTabId={tabId}
        setActiveTabId={setTabId}
      />
    </>
  )
}

/**
 * Body for the editable survey canvas. The survey-creation surface — the
 * interactive `SurveyFormBuilder` (seeded blank for the empty survey, or with
 * the template's questions for a "Use this template" copy) — lives under the
 * "Questions" tab; "Settings" reuses the resource view's `SurveySettingsForm`.
 */
function SurveyEditorCanvasBody() {
  const { tabId, elements, setElements, processing, surveyId } =
    useSurveyEditorCanvas()
  // This flow's resource carries a Draft status, so creating it persists a draft
  // to its domain the moment its canvas first opens — the resource's first
  // creation (not autosave), fired once per survey across every creation path
  // (empty survey, "Use this template" copy, predefined template). Keyed in a
  // module-scoped set so closing and reopening the canvas doesn't re-fire it.
  // From here saves are explicit (the header's "Save"); resources
  // without a draft state create nothing until the user explicitly saves.
  useEffect(() => {
    if (!surveyId || createdSurveyIds.has(surveyId)) return
    const t = setTimeout(() => {
      createdSurveyIds.add(surveyId)
      toasts.open({
        title: SURVEY_SAVED_TOAST,
        variant: "success",
      })
    }, 600)
    return () => clearTimeout(t)
  }, [surveyId])
  return (
    // While the AI is "drafting" questions, blur + lock the builder behind the
    // "applying changes" overlay.
    <F0AiProcessingOverlay active={processing} className="h-full w-full">
      <div className="h-full w-full overflow-auto px-4 py-3">
        {tabId === "settings" ? (
          <SurveySettingsForm />
        ) : (
          <SurveyFormBuilder
            elements={elements}
            onChange={setElements}
            datasets={mockDatasets}
          />
        )}
      </div>
    </F0AiProcessingOverlay>
  )
}

const surveyCanvasEntity: CanvasEntityDefinition<SurveyCanvasContent> = {
  type: "survey",
  // Shared tab/elements state for the editable canvas, bracketing both the
  // header (tab strip) and the body (tab content).
  wrapper: ({ content, children }) => (
    <SurveyCanvasStateProvider content={content}>
      {children}
    </SurveyCanvasStateProvider>
  ),
  // The editable resource view — ResourceHeader + Questions/Settings tabs over
  // the form builder. (The read-only template preview lives on the templates
  // overlay, not in the canvas.)
  renderHeader: ({ content, onClose }) => (
    <SurveyEditorCanvasHeader content={content} onClose={onClose} />
  ),
  renderContent: () => <SurveyEditorCanvasBody />,
}

// ---------------------------------------------------------------------------
// Data catalog — the "Create manually" browse stage. The four cube cards
// mirror the production /analytics/create/data-catalog screen: module icon
// avatar, cube title, source description, and a "Snapshot" property on
// point-in-time cubes (Employees).
// ---------------------------------------------------------------------------

type CatalogCube = {
  id: string
  name: string
  description: string
  snapshot?: boolean
  icon: IconType
}

const DATA_CATALOG_CUBES: CatalogCube[] = [
  {
    id: "absences",
    name: "Absences",
    description:
      "Employee absences and leaves — who was absent, when, the type of leave, and how long it lasted.",
    icon: PalmTree,
  },
  {
    id: "employees",
    name: "Employees",
    description:
      "Employees and their contracts as of a chosen date — personal details, contract terms, compensation, and organization placement.",
    snapshot: true,
    icon: Person,
  },
  {
    id: "expenses",
    name: "Expenses",
    description:
      "Employee expenses — amounts, categories, statuses, payment details, and who reported them.",
    icon: Receipt,
  },
  {
    id: "presence",
    name: "Presence",
    description:
      "Daily attendance — planned versus actual worked time per employee per day, including clock-ins, clock-outs and breaks.",
    icon: Clock,
  },
]

const dataCatalogAdapter = {
  fetchData: () => Promise.resolve({ records: DATA_CATALOG_CUBES }),
}

const catalogCardVisualization = {
  type: "card" as const,
  options: {
    title: (item: CatalogCube) => item.name,
    description: (item: CatalogCube) => item.description,
    avatar: (item: CatalogCube) => ({ type: "icon" as const, icon: item.icon }),
    cardProperties: [
      {
        label: "Snapshot",
        icon: Target,
        render: () => ({ type: "text" as const, value: "Snapshot" }),
        // Point-in-time cubes only — mirrors the production picker.
        hide: (item: CatalogCube) => !item.snapshot,
      },
    ],
  },
}

/** The cube cards, browse-only for now (no column picker behind them yet). */
function DataCatalogCollection() {
  const source = useDataCollectionSource({
    dataAdapter: dataCatalogAdapter,
    search: { enabled: true, sync: true },
  })
  return (
    <OneDataCollection
      source={source}
      visualizations={[catalogCardVisualization]}
      fullHeight
    />
  )
}

/**
 * Templates browse rendered IN PLACE above the fullscreen chat — One stays
 * open and untouched behind it, so opening plays no chat-close animation and
 * closing reveals the welcome exactly as it was (the approach shipped in
 * monorepo PR #108118). Portals to f0's overlay root, covering the content
 * area to the right of the app sidebar, styled as the canvas card it
 * replaced (page-colored gutter + rounded, bordered, shadowed inner card).
 *
 * Hosts BOTH browse stages: the templates card list and the read-only
 * template preview ("Back to templates" returns to the list in place).
 * "Use this template" closes the overlay and opens the created survey in the
 * real EDIT canvas — that transition (chat docking beside the resource) is
 * the stock one, since from there on the chat is part of the experience.
 */
function TemplatesOverlay() {
  const { overlayMode, closeOverlay } = useContext(TemplatesOverlayContext)
  const [previewed, setPreviewed] = useState<Template | null>(null)
  const { openCanvas, setOpen, setPlaceholders } = useAiChat()
  const { appendCard, appendMessages } = useMockAiChatRuntime()

  if (!overlayMode) return null

  const close = () => {
    setPreviewed(null)
    closeOverlay()
  }

  const useThisTemplate = () => {
    const item = previewed
    if (!item) return
    // Open the draft-report canvas BEHIND the still-covering overlay: the
    // fullscreen→canvas dock transition (chat shrinking beside the canvas)
    // plays hidden, and the overlay lifts once it has settled — One appears
    // already docked next to the report, with no visible animation.
    openCanvas(
      toCanvasContent({
        type: "report",
        title: item.name,
        templateId: item.id,
        subtitle: item.subtitle,
      })
    )
    // The in-chat report card + the production open-dashboard greeting.
    appendCard(() => (
      <ReportCard
        templateId={item.id}
        title={item.name}
        subtitle={item.subtitle}
      />
    ))
    appendMessages([{ role: "assistant", content: reportGreeting(item.name) }])
    setPlaceholders(["Let's analyse your data"])
    setOpen(true)
    window.setTimeout(close, 600)
  }

  return createPortal(
    <div className="fixed bottom-0 right-0 top-0 left-[240px] z-[60] flex flex-col bg-f1-special-page p-1">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background shadow-md">
        {previewed ? (
          <>
            <div className="flex flex-row items-center gap-3 border border-x-0 border-b border-t-0 border-solid border-f1-border-secondary px-4 py-3">
              <ButtonInternal
                variant="outline"
                hideLabel
                label="Back to templates"
                icon={ArrowLeft}
                onClick={() => setPreviewed(null)}
              />
              <div className="min-w-0 flex-shrink truncate">
                <F0Heading content={`Template · ${previewed.name}`} as="h2" />
              </div>
              <ButtonGroup
                className="min-w-0 flex-1"
                align="end"
                primaryAction={{
                  id: "use-template",
                  label: "Use this template",
                  onClick: useThisTemplate,
                }}
              />
              <ButtonInternal
                variant="outline"
                hideLabel
                label="Close"
                icon={Cross}
                onClick={close}
              />
            </div>
            {/* Pinned outside the scroll container so the template banner
                stays visible while the dashboard scrolls beneath it. */}
            <div className="px-4 pt-3">
              <TemplatePreviewAlert />
            </div>
            <div className="min-h-0 flex-1 overflow-auto">
              <div className="flex w-full flex-col px-4 py-3">
                {/* The template preview is an analytics dashboard mirroring
                    the REAL template definition (same items, titles and chart
                    types as the production dashboard_templates YAML), with
                    static numbers matching the picker's preview artwork. */}
                <F0AnalyticsDashboard
                  items={TEMPLATE_PREVIEW_DASHBOARDS[previewed.id] ?? []}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row items-center justify-between gap-3 border border-x-0 border-b border-t-0 border-solid border-f1-border-secondary px-4 py-3">
              <F0Heading
                content={
                  overlayMode === "catalog"
                    ? "Select data catalog"
                    : "Templates"
                }
                as="h2"
              />
              <ButtonInternal
                variant="outline"
                hideLabel
                label="Close"
                icon={Cross}
                onClick={close}
              />
            </div>
            <div className="min-h-0 flex-1 px-4 py-3">
              {overlayMode === "catalog" ? (
                <DataCatalogCollection />
              ) : (
                <TemplatesCollection onSelect={setPreviewed} />
              )}
            </div>
          </>
        )}
      </div>
    </div>,
    document.getElementById("f0-overlay-root") ?? document.body
  )
}

/**
 * Registers the survey entry-point cards shown below the composer on the
 * fullscreen welcome screen, via the chat's data-driven `welcomeScreenCards`
 * prop. Each card opens the AI Canvas (docks beside the chat): "Empty survey"
 * opens a blank survey + kicks off a scripted guided conversation; "Templates"
 * opens the templates card collection. Renders nothing — it only feeds card
 * data into the provider so `F0AiChatTextArea` owns the layout.
 */
function SurveyWelcomeCardsRegistrar() {
  const { appendCard, appendMessages, startClarifying } = useMockAiChatRuntime()
  const { openCanvas, setWelcomeScreenCards, setPlaceholders } = useAiChat()
  const { openTemplatesOverlay, openCatalogOverlay } = useContext(
    TemplatesOverlayContext
  )
  const {
    createSurvey,
    draftQuestions,
    nextCardId,
    registerLiveCard,
    hasDraftedSurvey,
  } = useSurveyStore()
  const { armProposal } = useProposalFlow()

  // Switch the input placeholder based on whether a survey draft exists.
  useEffect(() => {
    setPlaceholders(
      hasDraftedSurvey
        ? ["Improve the Survey by..."]
        : ["Describe the type of survey you want to create"]
    )
  }, [hasDraftedSurvey, setPlaceholders])

  // The blank-survey conversation walks three clarifying questions — type →
  // audience → length — as a single consecutive panel, then "drafts" the
  // questions onto the canvas: echo the picks back into the transcript, post a
  // drafting line, and (after a brief processing beat) fill the form with mock
  // questions plus an "updated" card that supersedes the "created" one.
  const askSurveyDetails = (surveyId: string) =>
    startClarifying({
      steps: SURVEY_CLARIFYING_STEPS,
      onConfirm: (answersByStep) => {
        appendMessages(surveyAnswerMessages(answersByStep))
        appendMessages([
          {
            role: "assistant",
            content:
              "Great — I'll draft a first set of questions on the canvas for you to review.",
          },
        ])
        const surveyName = surveyNameForType(
          answersByStep[0]?.[0] ?? "Untitled"
        )
        // Once the form is drafted (questions land), post a new openable card
        // and mark it live — which disables Open/Close on the "created" card —
        // then arm the proposal flow so further typing keeps refining the
        // survey (each accepted change supersedes the prior card in turn).
        draftQuestions(surveyId, surveyName, () => {
          const cardId = nextCardId()
          registerLiveCard(surveyId, cardId)
          appendCard(() => (
            <SurveyCard
              surveyId={surveyId}
              cardId={cardId}
              title={surveyName}
              description={SURVEY_UPDATED_DESCRIPTION}
            />
          ))
          armProposal(surveyId, surveyName)
        })
      },
    })

  // The two production create-report welcome cards (useCoCreationReport):
  // "Select a template" opens the templates overlay; "Create manually" (the
  // data-catalog flow in production) is wired to the blank-survey guided flow
  // — the story's closest build-it-yourself analog.
  const cards: F0AiChatWelcomeCard[] = [
    {
      id: "co-creation-template",
      icon: LayersFront,
      title: "Select a template",
      description: "Browse pre-made reports",
      onClick: () => handleCardSelectRef.current("templates"),
    },
    {
      id: "co-creation-build",
      icon: Table,
      title: "Create manually",
      description: "Pick columns from available data",
      onClick: () => handleCardSelectRef.current("catalog"),
    },
  ]
  // Welcome-card behavior, keyed by card `id`. Each card's `onClick` (above)
  // routes here through `handleCardSelectRef`; each branch opens the AI Canvas
  // and seeds the matching guided flow.
  const handleCardSelect = (id: string) => {
    switch (id) {
      case "empty-survey": {
        // Blank-survey flow: create + seed the survey, open its canvas, then
        // post the guided sequence — an intro line, the "created" canvas card
        // (live/openable), and the first clarifying question (the chain walks
        // the rest).
        const surveyId = createSurvey(UNTITLED_SURVEY_NAME, { empty: true })
        openCanvas(toCanvasContent(makeEmptySurveyContent(surveyId)))
        appendMessages([
          { role: "assistant", content: "Let's start with a blank survey." },
        ])
        const cardId = nextCardId()
        registerLiveCard(surveyId, cardId)
        appendCard(() => (
          <SurveyCard
            surveyId={surveyId}
            cardId={cardId}
            title={UNTITLED_SURVEY_NAME}
            description={SURVEY_CREATED_DESCRIPTION}
          />
        ))
        askSurveyDetails(surveyId)
        break
      }
      case "templates": {
        // Browse-only: open the templates overlay IN PLACE, above the
        // fullscreen chat — no chat message posted, and One stays open and
        // untouched behind it (monorepo PR #108118 behavior). Closing the
        // overlay without choosing a template reveals the welcome screen
        // exactly as it was, welcome cards intact.
        openTemplatesOverlay()
        break
      }
      case "catalog": {
        // "Create manually": the same browse overlay in data-catalog mode —
        // the four cube cards from /analytics/create/data-catalog.
        openCatalogOverlay()
        break
      }
      case "employee-nps": {
        // Predefined-template flow: open a ready-made NPS survey on the canvas
        // (mirrors "Use this template" — seeded with questions, no AI
        // drafting). Its first question is a blocked eNPS question (locked +
        // in-card warning); the rest stay editable.
        const surveyId = createSurvey(EMPLOYEE_NPS_SURVEY_NAME, {
          elements: NPS_SURVEY_ELEMENTS,
        })
        openCanvas(
          toCanvasContent({
            type: "survey",
            title: EMPLOYEE_NPS_SURVEY_NAME,
            mode: "edit",
            templateName: EMPLOYEE_NPS_SURVEY_NAME,
            surveyId,
            description: SURVEY_CREATED_DESCRIPTION,
          })
        )
        const cardId = nextCardId()
        registerLiveCard(surveyId, cardId)
        appendCard(() => (
          <SurveyCard
            surveyId={surveyId}
            cardId={cardId}
            title={EMPLOYEE_NPS_SURVEY_NAME}
            description={SURVEY_CREATED_DESCRIPTION}
          />
        ))
        appendMessages([
          {
            role: "assistant",
            content:
              "I've set up an Employee NPS survey. The eNPS question at the top is fixed so your scores stay comparable — the rest is yours to edit. What would you like to change?",
          },
        ])
        armProposal(surveyId, EMPLOYEE_NPS_SURVEY_NAME)
        break
      }
      // "employee-engagement" is a visual-only placeholder — no behavior yet.
    }
  }

  // Each card's `onClick` closes over runtime hooks via `handleCardSelectRef`,
  // so the registered cards always call the latest handler. Keep the cards in a
  // ref too, so a single mount effect registers them without re-running
  // (`setWelcomeScreenCards` is stable). Clear them on unmount.
  const cardsRef = useRef(cards)
  cardsRef.current = cards
  const handleCardSelectRef = useRef(handleCardSelect)
  handleCardSelectRef.current = handleCardSelect
  useEffect(() => {
    setWelcomeScreenCards(cardsRef.current)
    return () => {
      setWelcomeScreenCards([])
    }
  }, [setWelcomeScreenCards])

  return null
}

/**
 * `Tabs` driven by `id` (controlled) render each tab as a `<span>` rather than
 * an `<a href>`, so the browser shows no pointer cursor — in product the tabs
 * carry real hrefs and behave as links. This thin wrapper restores the pointer
 * cursor on the story's controlled tab strips. `display: contents` keeps the
 * wrapper layout-transparent.
 */
function ClickableTabs(props: ComponentProps<typeof Tabs>) {
  return (
    <div className="contents [&_[role=link]]:cursor-pointer">
      <Tabs {...props} />
    </div>
  )
}

/**
 * The page content rendered inside the shared chat-enabled ApplicationFrame.
 * Derives the chat's open/visualization state from `phase` and keeps `phase` in
 * sync when the user toggles the header One switch.
 */
function FlowContent({
  phase,
  setPhase,
}: {
  phase: Phase
  setPhase: (phase: Phase) => void
}) {
  const { activeTabId, setActiveTabId, tabConfig } = useTabConfig()
  const i18n = useI18n()
  // Primary (module-level) navigation. In production this would be a single
  // "Survey" item; "Tasks" is a second item added purely so the nav renders as
  // a real tab strip (a single-tab `Tabs` collapses to a plain heading).
  const [topNavId, setTopNavId] = useState("survey")
  // The Surveys resource view has its own tab strip (Editor / Settings); the
  // survey questions show under "Editor", which is the default focused tab in
  // the co-creation flow.
  const [surveyTabId, setSurveyTabId] = useState("editor")
  const {
    open,
    setOpen,
    visualizationMode,
    setVisualizationMode,
    openCanvas,
    setShouldPlayEntranceAnimation,
  } = useAiChat()
  const {
    inProgress,
    appendMessages,
    appendCard,
    startClarifying,
    setUserMessageInterceptor,
  } = useMockAiChatRuntime()
  const { createSurvey, draftQuestions, nextCardId, registerLiveCard } =
    useSurveyStore()
  const { armProposal } = useProposalFlow()

  // Typed "Create" flow: the same three clarifying questions as the Empty survey
  // card, walked as a single consecutive panel — but the canvas stays closed
  // until the end, opening with the drafted survey once the final question is
  // answered. (The Empty survey card opens the canvas up front instead.)
  const runTypedClarifyingChain = () => {
    // Create the blank survey up front — before the clarifying flow — seeded
    // with its first section/question. The canvas stays closed until the final
    // answer; the survey is only named, shown, and drafted then.
    const surveyId = createSurvey(UNTITLED_SURVEY_NAME, { empty: true })
    startClarifying({
      steps: SURVEY_CLARIFYING_STEPS,
      onConfirm: (answersByStep) => {
        appendMessages(surveyAnswerMessages(answersByStep))
        const name = surveyNameForType(answersByStep[0]?.[0] ?? "Untitled")
        openCanvas(toCanvasContent(makeEmptySurveyContent(surveyId, name)))
        appendMessages([
          {
            role: "assistant",
            content:
              "Great — I'll draft a first set of questions on the canvas for you to review.",
          },
        ])
        // Unlike the Empty-survey flow, the clarifying questions are answered
        // BEFORE the canvas opens here, so a "created" → "updated" pair would
        // land back-to-back with nothing between them. Post a single live card
        // instead; drafting fills the canvas behind it without superseding.
        const cardId = nextCardId()
        registerLiveCard(surveyId, cardId)
        appendCard(() => (
          <SurveyCard
            surveyId={surveyId}
            cardId={cardId}
            title={name}
            description={SURVEY_CREATED_DESCRIPTION}
          />
        ))
        // Once drafting lands, arm the proposal flow so a further typed message
        // proposes an update — which, on accept, posts an "updated" card that
        // supersedes this initial "created" one.
        draftQuestions(surveyId, name, () => armProposal(surveyId, name))
      },
    })
  }

  const sharedSourceOptions = {
    filters: resourceFilters,
    sortings: resourceSortings,
    search: {
      enabled: true,
      sync: true,
    },
    primaryActions: () => [
      {
        // The single primary "Create" button launches the chat FULL WIDTH
        // (fullscreen). It arms the chat so the user's first typed message kicks
        // off the guided clarifying flow; the canvas opens with the drafted
        // survey at the end.
        label: "Create",
        icon: Add,
        onClick: () => {
          // Fullscreen opens INSTANTLY — no expand-in. The provider re-arms
          // the entrance animation every time the chat closes, so it has to
          // be disarmed on every fullscreen open, not once. (The header One
          // switch keeps its animation: it opens the side panel, not
          // fullscreen.)
          setShouldPlayEntranceAnimation(false)
          setVisualizationMode("fullscreen")
          setPhase("chat")
          setUserMessageInterceptor(() => {
            appendMessages([
              {
                role: "assistant",
                content:
                  "Sure — let's set up your survey. A few quick questions first.",
              },
            ])
            runTypedClarifyingChain()
          })
        },
      },
    ],
  }

  const sourceTable = useDataCollectionSource({
    dataAdapter: filledDataAdapter,
    ...sharedSourceOptions,
  })

  // phase → chat open state. Opening from "collection" flips `open` false→true
  // while the chat is closed (so `shouldPlayEntranceAnimation` is true), which
  // plays the expand-in animation. The mode is NOT forced for "chat": the
  // header One switch opens a side panel (the chat's default), while the
  // "Create" button sets fullscreen before entering this phase.
  useEffect(() => {
    if (phase === "collection") {
      setOpen(false)
    } else if (phase === "split") {
      setVisualizationMode("sidepanel")
      setOpen(true)
    } else {
      setOpen(true)
    }
  }, [phase, setOpen, setVisualizationMode])

  // Keep `phase` in sync when the user toggles the chat via the header One
  // switch (or the chat's own close button). Guarded on an actual `open`
  // transition so it never fights the phase→open effect above.
  const prevOpenRef = useRef(open)
  useEffect(() => {
    const wasOpen = prevOpenRef.current
    prevOpenRef.current = open
    if (wasOpen === open) return
    if (open && phase === "collection") {
      setPhase("chat")
    } else if (!open && phase !== "collection") {
      // The user closed the chat mid-creation — tear the flow down directly.
      setPhase("collection")
    }
  }, [open, phase, setPhase])

  return (
    <NavigationPage
      header={
        <>
          <PageHeader
            module={COCREATION_MODULE}
            breadcrumbs={
              phase === "split" ? [{ id: "draft", label: "Draft" }] : undefined
            }
          />
          {phase === "split" ? (
            // The Surveys canvas mirrors a real Survey resource view: a
            // page-level ResourceHeader (the single header — the inline survey
            // form's own header is suppressed) plus an Editor/Settings tab
            // strip.
            <>
              <ResourceHeader
                title={tabConfig.cards[0].title}
                description={tabConfig.cards[0].description}
                status={{
                  label: "Status",
                  text: "Draft",
                  variant: "neutral",
                }}
                primaryAction={{
                  label: "Publish",
                  icon: SolidPlay,
                  onClick: () =>
                    void confirmPublish().then((ok) => {
                      if (ok)
                        toasts.open({
                          title: SURVEY_PUBLISHED_TOAST,
                          variant: "success",
                        })
                    }),
                }}
                onClose={() => setPhase("chat")}
                secondaryActions={[
                  {
                    label: i18n.actions.save,
                    onClick: () =>
                      toasts.open({
                        title: SURVEY_SAVED_TOAST,
                        variant: "success",
                      }),
                  },
                ]}
                otherActions={[
                  {
                    label: "Duplicate",
                    icon: LayersFront,
                    onClick: () =>
                      toasts.open({ title: SURVEY_DUPLICATED_TOAST }),
                  },
                  { type: "separator" },
                  {
                    label: "Delete",
                    icon: Delete,
                    critical: true,
                    onClick: () =>
                      toasts.open({
                        title: SURVEY_DELETED_TOAST,
                        variant: "error",
                      }),
                  },
                ]}
                metadata={[
                  { label: "Owner", value: { type: "text", content: "You" } },
                  {
                    label: "Recurrence",
                    value: { type: "text", content: "Does not repeat" },
                  },
                  {
                    label: "Finishes on",
                    value: { type: "text", content: "—" },
                  },
                  {
                    label: "Questions",
                    value: { type: "text", content: "10" },
                  },
                ]}
              />
              <ClickableTabs
                tabs={[
                  { label: "Questions", id: "editor" },
                  { label: "Settings", id: "settings" },
                ]}
                activeTabId={surveyTabId}
                setActiveTabId={setSurveyTabId}
              />
            </>
          ) : (
            visualizationMode !== "fullscreen" && (
              <>
                <ClickableTabs
                  tabs={[
                    { label: "Survey", id: "survey" },
                    { label: "Tasks", id: "tasks" },
                  ]}
                  activeTabId={topNavId}
                  setActiveTabId={setTopNavId}
                />
                {topNavId === "survey" && (
                  <ClickableTabs
                    secondary
                    tabs={[
                      { label: "Surveys", id: "surveys" },
                      { label: "Templates", id: "templates" },
                    ]}
                    activeTabId={activeTabId}
                    setActiveTabId={setActiveTabId}
                  />
                )}
              </>
            )
          )}
        </>
      }
    >
      <StandardLayout>
        {phase === "split" ? (
          // The left panel hosts the resource being co-created. While the AI is
          // thinking/updating the form we blur + lock it (with the "Applying
          // changes" pill) so the user can't edit content that's about to change.
          <F0AiProcessingOverlay active={inProgress} className="h-full w-full">
            {surveyTabId === "editor" ? (
              <SurveyAnsweringForm
                inline
                hideResourceHeader
                title={tabConfig.cards[0].title}
                description={tabConfig.cards[0].description}
                elements={SURVEY_ELEMENTS}
                datasets={mockDatasets}
                defaultValues={SURVEY_DEFAULT_VALUES}
              />
            ) : surveyTabId === "settings" ? (
              <SurveySettingsForm />
            ) : (
              <></>
            )}
          </F0AiProcessingOverlay>
        ) : topNavId === "tasks" ? (
          // "Tasks" is a placeholder second item for the primary nav — no real
          // content, just enough to show the navigation switching.
          <div className="flex h-full w-full items-center justify-center text-f1-foreground-secondary">
            No tasks yet.
          </div>
        ) : activeTabId === "templates" ? (
          <TemplatesCollection />
        ) : (
          <OneDataCollection
            source={sourceTable}
            visualizations={[tableVisualization]}
            fullHeight
          />
        )}
      </StandardLayout>
    </NavigationPage>
  )
}

function CreationWithAIFlow({ initialTabId }: { initialTabId?: string }) {
  // Reset persisted chat state once, before the provider reads it, so the chat
  // starts closed in the collection view.
  const didResetRef = useRef(false)
  if (!didResetRef.current) {
    resetAiChatPersistence()
    didResetRef.current = true
  }

  const [phase, setPhase] = useState<Phase>("collection")

  // Templates overlay (see `TemplatesOverlay`): opened by the "Templates"
  // welcome card, closed by the overlay itself.
  const [overlayMode, setOverlayMode] = useState<BrowseOverlayMode | null>(null)
  const templatesOverlayValue = useMemo(
    () => ({
      overlayMode,
      openTemplatesOverlay: () => setOverlayMode("templates"),
      openCatalogOverlay: () => setOverlayMode("catalog"),
      closeOverlay: () => setOverlayMode(null),
    }),
    [overlayMode]
  )

  const ai: ComponentProps<typeof ApplicationFrame>["ai"] = {
    enabled: true,
    // Surface the "New conversation ▾" selector + history dialog (reuses the
    // shared F0AiChatHistory pattern via MockConnectedChatHeader).
    historyEnabled: true,
    chatHeader: <MockConnectedChatHeader />,
    chatMessages: <MockConnectedMessagesContainer />,
    chatInput: <MockConnectedChatInput />,
    // Voice dictation: a mic button in the composer streams a spoken-style
    // survey-refinement request (follow-up questions + triggers) into the
    // textarea for the user to review and send — see `mockSurveyTranscribe`.
    onTranscribe: mockSurveyTranscribe,
    // Single phrase → the colorful heading types in once and stays (a
    // multi-element array would loop: type → hold → erase → next).
    initialMessage: ["What kind of survey do you want to create?"],
    // Prompt actions rendered as outline buttons at the top of the text area
    // on the welcome screen. Each group opens a popover of starter prompts.
    welcomeScreenSuggestions: [
      {
        icon: Pencil,
        label: "Create a survey for...",
        items: [
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
      },
    ],
    // Guided flows and "Use this template" open this entity in the AI Canvas.
    // The story-local "survey" content type isn't part of the closed SDS
    // `CanvasContent` union, so the entity definition is widened to the
    // registry's base type here. (The templates browse renders on the
    // `TemplatesOverlay` above the chat, not in the canvas.)
    canvasEntities: {
      survey: toCanvasEntity(surveyCanvasEntity),
      report: toCanvasEntity(reportCanvasEntity),
    },
    resizable: true,
    // Start closed in sidepanel mode so the chat plays its entrance animation
    // when opened from the collection view.
    defaultVisualizationMode: "sidepanel",
  }

  return (
    <MockAiChatRuntimeProvider>
      <TabConfigProvider initialTabId={initialTabId}>
        <SurveyStoreProvider>
          <ApplicationFrame
            ai={ai}
            sidebar={<Sidebar {...SidebarStories.default.args} />}
          >
            {/* Feeds the survey welcome cards into the chat via
                `welcomeScreenCards`; renders nothing itself. */}
            <TemplatesOverlayContext.Provider value={templatesOverlayValue}>
              <SurveyWelcomeCardsRegistrar />
              {/* Templates browse above the untouched fullscreen chat. */}
              <TemplatesOverlay />
              <FlowContent phase={phase} setPhase={setPhase} />
            </TemplatesOverlayContext.Provider>
          </ApplicationFrame>
        </SurveyStoreProvider>
      </TabConfigProvider>
    </MockAiChatRuntimeProvider>
  )
}

export const Analytics: Story = {
  render: () => <CreationWithAIFlow initialTabId="surveys" />,
}
