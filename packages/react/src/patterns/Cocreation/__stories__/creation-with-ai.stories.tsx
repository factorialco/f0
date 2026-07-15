import type { Meta, StoryObj } from "@storybook/react-vite"

import { z } from "zod"

import {
  ComponentProps,
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { StandardLayout } from "@/layouts/StandardLayout"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import { F0CardHorizontal } from "@/experimental/F0CardHorizontal"
import {
  Add,
  ArrowLeft,
  Check,
  Cross,
  Delete,
  ExternalLink,
  File,
  LayersFront,
  Marketplace,
  Pencil,
  Settings,
  SolidPlay,
} from "@/icons/app"
import { F0Alert } from "@/components/F0Alert"
import { F0Button } from "@/components/F0Button"
import { F0Heading } from "@/components/F0Heading"
import { dialogs } from "@/lib/providers/dialogs-alike"
import { ButtonGroup, ButtonGroupSeparator } from "@/ui/ButtonGroup"
import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import { Page as NavigationPage } from "@/patterns/Navigation/Page"
import { Tabs } from "@/patterns/Navigation/Tabs"
import { Sidebar } from "@/patterns/Navigation/Sidebar/Sidebar"
import * as SidebarStories from "@/patterns/Navigation/Sidebar/index.stories"
import { OneDataCollection } from "@/patterns/OneDataCollection"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"
import { ResourceHeader } from "@/patterns/ResourceHeader"
import { useAiChat } from "@/sds/ai/F0AiChat"
import type { ClarifyingOption } from "@/sds/ai/F0ClarifyingPanel"
import {
  type CanvasContent,
  type CanvasContentBase,
  type CanvasEntityDefinition,
} from "@/sds/ai/canvas"
import { F0AiProcessingOverlay } from "@/sds/ai/F0AiProcessingOverlay"
import {
  type ClarifyingStep,
  MockAiChatRuntimeProvider,
  MockConnectedChatHeader,
  MockConnectedChatInput,
  MockConnectedMessagesContainer,
  useMockAiChatRuntime,
} from "@/sds/ai/F0AiChat/__stories__/_mock"

import { f0FormField, F0Form } from "@/patterns/F0Form"
import type { F0SectionConfig } from "@/patterns/F0Form"
import { useF0FormDefinition } from "@/patterns/F0WizardForm"
import { SurveyAnsweringForm } from "@/sds/surveys/SurveyAnsweringForm"
import { SurveyFormBuilder } from "@/sds/surveys/SurveyFormBuilder/Form"
import type { SurveyFormBuilderElement } from "@/sds/surveys/SurveyFormBuilder/types"
import { mockDatasets } from "@/sds/surveys/__stories__/mocks"

import {
  EMPTY_SURVEY_TEMPLATE,
  EMPTY_SURVEY_TEMPLATE_ID,
  listVisualization,
  makeTemplatesDataAdapter,
  resourceFilters,
  resourceSortings,
  tableVisualization,
  templateSortings,
} from "./mockData"
import type { Template } from "./mockData"
// WIP: temporary toast mock — replace with "@/hooks/toast" once
// https://github.com/factorialco/f0/pull/3493 merges, then remove this import.
import { toasts } from "@/hooks/toast"
import { useI18n } from "@/lib/providers/i18n"
import { makeInitialSurveyElements } from "./survey-mocks"
import {
  FLOW_CONFIGS,
  guidedTemplatesTitle,
  makeResourcesSource,
  makeTemplatesSource,
  templatesForGuidedType,
} from "./flow-configs"
import type {
  CardsFlowConfig,
  FlowConfig,
  GuidedEntryFlowConfig,
} from "./flow-configs"
import type { F0AiChatWelcomeCard } from "@/sds/ai/F0AiChat"

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
  title: "Co-creation/Walkthrough",
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
// Flow-config context — exposes which coexisting example is running
// (Engagement Surveys, Training Surveys, ...) and its data (`FlowConfig`) to
// every component below, which read it to theme cards, toasts, clarifying
// questions, and the collection/templates data sources.
// ---------------------------------------------------------------------------

type FlowConfigContextValue = {
  flowId: FlowConfig["id"]
  config: FlowConfig
  /** The user has no AI credits: post-creation AI editing is blocked (see the
   * "No Credits" story). Stable for the session — unlike the dismissable
   * credit-warning banner. */
  noCredits: boolean
}

const FlowConfigContext = createContext<FlowConfigContextValue | null>(null)

function useFlowConfig(): FlowConfigContextValue {
  const ctx = useContext(FlowConfigContext)
  if (!ctx) {
    throw new Error("useFlowConfig must be used inside <FlowConfigProvider>")
  }
  return ctx
}

function FlowConfigProvider({
  flowId,
  noCredits = false,
  children,
}: {
  flowId: FlowConfig["id"]
  noCredits?: boolean
  children: ReactNode
}) {
  const config = FLOW_CONFIGS[flowId]
  return (
    <FlowConfigContext.Provider value={{ flowId, config, noCredits }}>
      {children}
    </FlowConfigContext.Provider>
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
 * The survey-templates browse view as a card-view data collection. Shared by
 * BOTH the collection "Templates" tab and the AI Canvas (see
 * `templatesCanvasEntity`) so the cards + their metadata stay identical in both
 * places as the data collection / card config evolves.
 */
function TemplatesCollection({
  onSelect,
  onEmpty,
  fillHeight = true,
  visualization = listVisualization,
}: {
  onSelect?: (item: Template) => void
  /**
   * When set, prepend a synthetic "Empty Survey" row as the first item;
   * selecting it runs this instead of `onSelect` (it starts a blank survey
   * rather than previewing a template — mirrors the guided-type gallery).
   * Omitted for the inert browse tab, which shows real templates only.
   */
  onEmpty?: () => void
  /**
   * When true (default, the browse tab) the collection fills its container and
   * scrolls its list body internally. Pass false in the AI Canvas gallery so
   * the collection sizes to its content and the panel body scrolls as one
   * (toolbar + list together) instead of scrolling inside the data collection.
   */
  fillHeight?: boolean
  /**
   * List visualization to render. Defaults to the full `listVisualization`
   * (with the Category property) for the browse tab; the AI Canvas gallery
   * passes the category-less `galleryListVisualization` instead.
   */
  visualization?: typeof listVisualization
} = {}) {
  const { config } = useFlowConfig()
  const templatesSource = makeTemplatesSource(config)
  const source = useDataCollectionSource({
    ...templatesSource,
    // With `onEmpty` (the AI Canvas gallery) lead with the synthetic "Empty
    // Survey" row; without it (the browse tab) show real templates only.
    dataAdapter: onEmpty
      ? makeTemplatesDataAdapter([EMPTY_SURVEY_TEMPLATE, ...config.templates])
      : templatesSource.dataAdapter,
    sortings: templateSortings,
    search: { enabled: true, sync: true },
    // No card CTAs — actions live on the preview surface. The card-body click
    // is omitted entirely when neither handler is supplied so the browse-tab
    // rows stay inert (no pointer, no action); in the AI Canvas it opens the
    // preview, or starts a blank survey for the "Empty Survey" row.
    itemOnClick:
      onSelect || onEmpty
        ? (item) => () => {
            if (onEmpty && item.id === EMPTY_SURVEY_TEMPLATE_ID) onEmpty()
            else onSelect?.(item)
          }
        : undefined,
  })
  return (
    <OneDataCollection
      source={source}
      visualizations={[visualization]}
      fullHeight={fillHeight}
    />
  )
}

// Canvas content + entity for the survey templates. `CanvasContent` is a closed
// SDS union (dashboard | form | dataDownload); "templates" is story-specific, so
// we keep a local content type and cast at the `openCanvas` call site — the
// canvas registry/panel match on the `type` string at runtime.
type TemplatesCanvasContent = CanvasContentBase & {
  type: "templates"
  /**
   * Set only by the "guidedType" entry flow (Training): scopes this canvas to
   * one guided type's templates (+ a synthetic "Empty Form" entry first)
   * instead of the flow's full template list. Absent for the "cards" entry
   * flow (Engagement), which always shows the full list.
   */
  guidedTypeId?: string
}
const TEMPLATES_CANVAS_CONTENT: TemplatesCanvasContent = {
  type: "templates",
  title: "Templates",
}

const templatesCanvasEntity: CanvasEntityDefinition<TemplatesCanvasContent> = {
  type: "templates",
  // Standard canvas header: title (from content) on the left, close on the
  // right — mirrors the design system's panel-header structure (no
  // ResourceHeader chrome). Rendered as a component so closing can return to the
  // first step of cocreation rather than just dismissing the canvas (see
  // `TemplatesCanvasHeader`); the framework `onClose` is intentionally dropped.
  renderHeader: ({ content }) => <TemplatesCanvasHeader content={content} />,
  // No horizontal padding on the wrapper: the data collection provides its own
  // `px-page` (the design-system default), which aligns with the header's
  // `px-page` — so header, filters, and list all sit at the standard 24px inset.
  // Only vertical padding here (`py-3`, matching the other canvas bodies).
  renderContent: ({ content }) => (
    <div className="h-full w-full overflow-y-auto py-3">
      {content.guidedTypeId ? (
        <GuidedTemplatesCanvasBody guidedTypeId={content.guidedTypeId} />
      ) : (
        <TemplatesCanvasBody />
      )}
    </div>
  ),
  overflowHidden: true,
}

// Story-local survey canvas. Like `templatesCanvasEntity`, the "survey" type is
// story-specific (not part of the closed SDS `CanvasContent` union), so we keep
// a local content type and cast at the `openCanvas` call site. `mode` selects
// the surface: "preview" is the read-only `SurveyAnsweringForm` (template
// browsing), while "edit" is the editable resource view — a `ResourceHeader` +
// Questions/Settings tabs over the interactive `SurveyFormBuilder` (see
// `SurveyEditorCanvasHeader` / `SurveyEditorCanvasBody`).
type SurveyCanvasContent = CanvasContentBase & {
  type: "survey"
  mode: "edit" | "preview"
  templateName: string
  /**
   * Identifies which survey in the multi-survey store this canvas renders. The
   * editable "edit" mode always carries one (minted by `createSurvey`); the
   * read-only template "preview" omits it (it renders static sample questions).
   */
  surveyId?: string
  /** Carried from the template card into the edit view's resource header. */
  description?: string
  /** Blank "start from scratch" survey — the editable builder, seeded empty. */
  empty?: boolean
  /**
   * Set only by the "guidedType" entry flow (Training) when previewing one of
   * its templates: identifies which guided type this preview belongs to, so
   * "Use this template" seeds that type's sample elements and "Back to
   * templates" reopens the same type-scoped gallery.
   */
  guidedTypeId?: string
  /**
   * Set only by the "cards" entry flow (Engagement) when previewing its preset
   * welcome-card template (e.g. "Employee NPS"): identifies which preset this
   * preview belongs to, so the preview renders that preset's own questions and
   * "Use this template" seeds them (plus the preset's created-card subtitle and
   * intro message) instead of the flow's generic sample set.
   */
  presetCardId?: string
}

// Bridge the story-local canvas types to the SDS API. `CanvasContent` /
// `CanvasEntityDefinition` are a *closed* SDS union that doesn't include the
// custom "survey"/"templates" entities this story demos, so we widen at the
// provider boundary (the registry/panel match on the `type` string at runtime).
// Centralized here so the unavoidable cast — and the reason for it — live in one
// place instead of being repeated at every call site.
type StoryCanvasContent = SurveyCanvasContent | TemplatesCanvasContent

const toCanvasContent = (content: StoryCanvasContent): CanvasContent =>
  content as unknown as CanvasContent

const toCanvasEntity = (
  entity:
    | CanvasEntityDefinition<SurveyCanvasContent>
    | CanvasEntityDefinition<TemplatesCanvasContent>
): CanvasEntityDefinition => entity as unknown as CanvasEntityDefinition

// Inverse of `toCanvasContent`: read the story content back out of the SDS union.
const asSurveyCanvasContent = (
  content: CanvasContent | null
): SurveyCanvasContent | null =>
  content as unknown as SurveyCanvasContent | null

// Default name for a blank "start from scratch" survey, shown until the guided
// flow resolves a real name.
const UNTITLED_SURVEY_NAME = "Untitled survey"

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
  const { config } = useFlowConfig()
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
        avatar={{ type: "module", module: config.avatarModule }}
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

// Subtitle shown on a survey's "created" card (blank or from a template),
// e.g. "Created in Engagement / Surveys" or "Created in Learning / Training
// surveys" — themed to whichever flow is running.
const createdDescription = (flow: FlowConfig) =>
  `Created in ${flow.moduleName} / ${flow.navLabel}`
// Subtitle shown on the "updated" card posted once the AI drafts the questions.
const SURVEY_UPDATED_DESCRIPTION = "Survey updated with your choices."

// Toast titles reused across the survey resource-header actions and autosave.
const savedToast = (flow: FlowConfig) =>
  `Survey saved in ${flow.moduleName} / ${flow.navLabel}`
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

// Label + subtitle for the INITIAL drafting confirmation, shared across its
// pending/resolved states (see `DraftConfirmationCard`).
const DRAFT_CONFIRM_TEXT = "Draft a first set of questions"
const DRAFT_CONFIRM_DESCRIPTION =
  "I'll write a starter set of questions onto the canvas based on your answers."

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
 * Human-in-the-loop confirmation for the AI's INITIAL drafting step — the twin
 * of `ProposalConfirmationCard`, but for the first draft rather than a later
 * edit. Posted once the clarifying questions are answered (the blank-survey and
 * typed "Create" flows), and it GATES everything visual: no canvas and no survey
 * card appear until the user confirms. Accepting opens the survey on the canvas,
 * runs the "applying changes" overlay (blur), fills in the drafted questions,
 * posts the live "created" `SurveyCard`, and arms the proposal loop. Discarding
 * opens the same survey blank (and arms the loop) so the user can ask for
 * something else. Owns its own pending → resolved state; posted via `appendCard`.
 */
function DraftConfirmationCard({
  surveyId,
  surveyName,
  elements,
}: {
  surveyId: string
  surveyName: string
  elements: SurveyFormBuilderElement[]
}) {
  const [resolution, setResolution] = useState<
    "pending" | "accepted" | "rejected"
  >("pending")
  const { appendMessages, appendCard } = useMockAiChatRuntime()
  const { openCanvas } = useAiChat()
  const { draftQuestions, nextCardId, registerLiveCard } = useSurveyStore()
  const { armProposal } = useProposalFlow()
  const { config } = useFlowConfig()

  // Open the survey on the canvas and post its live "created" card — the survey
  // only becomes visible once the user has decided. Shared by both outcomes.
  const revealSurvey = () => {
    openCanvas(toCanvasContent(makeEmptySurveyContent(surveyId, surveyName)))
    const cardId = nextCardId()
    registerLiveCard(surveyId, cardId)
    appendCard(() => (
      <SurveyCard
        surveyId={surveyId}
        cardId={cardId}
        title={surveyName}
        description={createdDescription(config)}
      />
    ))
  }

  if (resolution === "accepted") {
    return (
      <F0CardHorizontal
        title={DRAFT_CONFIRM_TEXT}
        description={DRAFT_CONFIRM_DESCRIPTION}
        status={{ icon: Check, variant: "positive", label: "Applied" }}
      />
    )
  }
  if (resolution === "rejected") {
    return (
      <F0CardHorizontal
        title={DRAFT_CONFIRM_TEXT}
        description={DRAFT_CONFIRM_DESCRIPTION}
        status={{ icon: Cross, variant: "neutral", label: "Dismissed" }}
      />
    )
  }

  return (
    <F0CardHorizontal
      title={DRAFT_CONFIRM_TEXT}
      description={DRAFT_CONFIRM_DESCRIPTION}
      confirmAction={{
        label: "Apply",
        onClick: () => {
          setResolution("accepted")
          // Reveal the survey, then blur it while the questions are drafted in.
          revealSurvey()
          draftQuestions(surveyId, surveyName, elements, () => {
            appendMessages([
              {
                role: "assistant",
                content: "Done — I've drafted the questions on the canvas.",
              },
            ])
            armProposal(surveyId, surveyName)
          })
        },
      }}
      rejectAction={{
        label: "Discard",
        onClick: () => {
          setResolution("rejected")
          // Still hand over the (blank) survey, just without any drafted questions.
          revealSurvey()
          appendMessages([
            {
              role: "assistant",
              content:
                "No problem — I've left the survey blank. Tell me what you'd like instead.",
            },
          ])
          armProposal(surveyId, surveyName)
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
  // No-credits variant of `armProposal`: instead of proposing a change, every
  // typed message is met with an "out of credits" reply (and re-arms, so each
  // further message gets the same answer). Used once a survey is created in the
  // credit-exhausted flow, where AI edits are blocked.
  const armNoCredits = useCallback(() => {
    const handler = () => {
      appendMessages([{ role: "assistant", content: NO_CREDITS_MESSAGE }])
      setUserMessageInterceptor(handler)
    }
    setUserMessageInterceptor(handler)
  }, [appendMessages, setUserMessageInterceptor])
  return { armProposal, armNoCredits }
}

// Assistant reply when the user tries to refine a survey with no AI credits
// left (the "No Credits" demo). Ends the AI editing loop with an upgrade nudge.
const NO_CREDITS_MESSAGE =
  "You're out of AI credits, so I can't make changes right now. Upgrade your plan to keep editing with AI."

// Assistant reply when the user types on the no-credits WELCOME screen. Free-text
// AI needs credits, but guided creation (templates / blank survey) doesn't — so
// instead of a dead end we redirect into the guided-entry panel.
const NO_CREDITS_REDIRECT_MESSAGE =
  "I can't help with that because you're out of AI credits — but I can still help you create a survey."

// Question shown on that redirected guided-entry panel. Mirrors the guidedEntry
// flow's own `guidedQuestion`; kept as a literal because the "cards" config
// (which the No Credits story uses) has no `guidedQuestion` field.
const GUIDED_ENTRY_QUESTION = "How would you like to start?"

/**
 * Opens a blank "Empty Form" for a Training guided type: seeds a survey with
 * just that type's locked question, opens its editor canvas, posts the
 * "created" card, and arms the proposal flow. Used both by the "Empty Form"
 * gallery entry and by the "guidedType" flow's close-equals-empty overrides
 * (the templates-list canvas' Close, and the template-preview canvas' Close).
 */
function useOpenEmptyForm() {
  const { openCanvas } = useAiChat()
  const { config } = useFlowConfig()
  const { appendCard, appendMessages } = useMockAiChatRuntime()
  const { createSurvey, nextCardId, registerLiveCard } = useSurveyStore()
  const { armProposal } = useProposalFlow()

  return useCallback(
    (guidedTypeId: string) => {
      if (config.entryMode !== "guidedType") return
      const guidedType = config.guidedTypes.find((t) => t.id === guidedTypeId)
      if (!guidedType) return
      const title = `${guidedType.label} form`
      const surveyId = createSurvey(title, {
        elements: [guidedType.emptyFormElement],
      })
      openCanvas(
        toCanvasContent({
          type: "survey",
          title,
          mode: "edit",
          templateName: title,
          surveyId,
          description: createdDescription(config),
          guidedTypeId,
        })
      )
      const cardId = nextCardId()
      registerLiveCard(surveyId, cardId)
      appendCard(() => (
        <SurveyCard
          surveyId={surveyId}
          cardId={cardId}
          title={title}
          description={createdDescription(config)}
        />
      ))
      appendMessages([
        {
          role: "assistant",
          content: `Let's build your ${guidedType.label.toLowerCase()} form from scratch. What would you like to change?`,
        },
      ])
      armProposal(surveyId, title)
    },
    [
      config,
      openCanvas,
      createSurvey,
      nextCardId,
      registerLiveCard,
      appendCard,
      appendMessages,
      armProposal,
    ]
  )
}

/**
 * Blank-survey entry for the non-"guidedType" flows — the twin of
 * `useOpenEmptyForm` (which serves the "guidedType" flow's type-seeded blank
 * form). Creates + opens a blank survey on the canvas, posts the "created"
 * card, then either walks the drafting conversation (type → audience → length)
 * or, with no credits, invites a typed request met by an out-of-credits reply.
 *
 * Single source of truth for three surfaces: the "cards" flow's "Empty survey"
 * welcome card, the "guidedEntry" flow's "Empty Survey" action, and the
 * templates-canvas header's "Start with a Blank Survey" CTA. Behavior matches
 * each flow's prior inline copy exactly — the "cards" flow leads with an intro
 * line (the "guidedEntry" flow's beat copy already posted one before running
 * the action), and only "guidedEntry" gates the drafting step behind credits.
 */
function useStartBlankSurvey() {
  const { config, noCredits } = useFlowConfig()
  const { appendCard, appendMessages, startClarifying } = useMockAiChatRuntime()
  const { openCanvas } = useAiChat()
  const { createSurvey, nextCardId, registerLiveCard } = useSurveyStore()
  const { armNoCredits } = useProposalFlow()

  return useCallback(() => {
    // The "guidedType" flow seeds a type-scoped blank FORM instead — see
    // `useOpenEmptyForm`.
    if (config.entryMode === "guidedType") return

    // Walk type → audience → length as a single consecutive panel, then hand
    // off to a confirmation step: echo the picks, and post a
    // `DraftConfirmationCard`. Nothing lands on the canvas until the user
    // confirms — on Apply the card opens the survey, runs the processing beat,
    // fills the form, posts the live "created" card, and arms the proposal loop.
    const askSurveyDetails = (surveyId: string) =>
      startClarifying({
        steps: surveyClarifyingSteps(config),
        onConfirm: (answersByStep) => {
          appendMessages(
            surveyAnswerMessages(surveyClarifyingSteps(config), answersByStep)
          )
          const surveyName = surveyNameForType(
            answersByStep[0]?.[0] ?? "Untitled"
          )
          appendMessages([
            {
              role: "assistant",
              content:
                "Based on your answers, I've got a first set of questions ready to draft.",
            },
          ])
          appendCard(() => (
            <DraftConfirmationCard
              surveyId={surveyId}
              surveyName={surveyName}
              elements={config.sampleElements}
            />
          ))
        },
      })

    const surveyId = createSurvey(UNTITLED_SURVEY_NAME)

    // No credits: AI drafting is blocked, so hand over a blank survey right
    // away — open its canvas, post the created card, and meet any typed request
    // with an out-of-credits reply. No clarifying questions (nothing to draft).
    if (noCredits) {
      openCanvas(toCanvasContent(makeEmptySurveyContent(surveyId)))
      // "cards" leads with an intro line; "guidedEntry" already posted its beat
      // reply ("Let's start with a blank survey.") before running this action.
      if (config.entryMode === "cards") {
        appendMessages([
          { role: "assistant", content: "Let's start with a blank survey." },
        ])
      }
      const cardId = nextCardId()
      registerLiveCard(surveyId, cardId)
      appendCard(() => (
        <SurveyCard
          surveyId={surveyId}
          cardId={cardId}
          title={UNTITLED_SURVEY_NAME}
          description={createdDescription(config)}
        />
      ))
      appendMessages([
        {
          role: "assistant",
          content:
            "Your blank survey is ready. Tell me what you'd like to add.",
        },
      ])
      armNoCredits()
      return
    }

    // Credit-ful: lead with the intro line (cards only; "guidedEntry" already
    // posted its beat reply), then walk the clarifying panel. The canvas and the
    // drafted questions only appear once the user confirms — see
    // `askSurveyDetails` / `DraftConfirmationCard`.
    if (config.entryMode === "cards") {
      appendMessages([
        { role: "assistant", content: "Let's start with a blank survey." },
      ])
    }
    askSurveyDetails(surveyId)
  }, [
    config,
    noCredits,
    appendCard,
    appendMessages,
    startClarifying,
    openCanvas,
    createSurvey,
    nextCardId,
    registerLiveCard,
    armNoCredits,
  ])
}

/**
 * Leaves the "guidedType" flow (Training) without creating a survey: posts an
 * assistant message acknowledging the departure (so re-opening the chat shows
 * why the flow ended), then closes the chat entirely — which the phase-sync
 * effect in `FlowContent` tears down to the starting collection page. Used by
 * the templates-list and template-preview Close buttons once the user confirms
 * the leave-creation warning.
 */
function useLeaveGuidedFlow() {
  const { setOpen } = useAiChat()
  const { appendMessages } = useMockAiChatRuntime()

  return useCallback(() => {
    appendMessages([
      {
        role: "assistant",
        content:
          "No problem — I've closed the survey creation without creating anything. You can start again anytime from Create.",
      },
    ])
    setOpen(false)
  }, [appendMessages, setOpen])
}

// Follow-up clarifying questions walked after the survey type (audience, then
// length) before the AI "drafts" the questions onto the canvas. Shared by
// every flow — only the survey "type" question (`flow.typeOptions`) varies.
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
const surveyClarifyingSteps = (
  flow: CardsFlowConfig | GuidedEntryFlowConfig
): ClarifyingStep[] => [
  {
    question: "What kind of survey are you working on?",
    options: flow.typeOptions,
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
  steps: ClarifyingStep[],
  answersByStep: string[][]
): { role: "user"; content: string }[] => {
  // answersByStep is index-aligned with `steps` (buildAnswers in
  // MockAiChatRuntime maps over every step, in order).
  const blocks = steps
    .map((step, i) => {
      const answer = (answersByStep[i] ?? []).join(", ").trim()
      if (!answer) return null
      // Trailing backslash = CommonMark hard line break, so the answer renders
      // directly UNDER the bold question (a plain "\n" is only a soft break/space).
      return `**${step.question}**\\\n${answer}`
    })
    .filter((block): block is string => block !== null)

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

// Shared "leave creation" confirmation — opened by the preview header's "Edit
// Template" action and the in-canvas alert's "Templates" link.
const confirmLeaveCreation = (flow: FlowConfig) =>
  dialogs.confirmation({
    title: "Leave creation?",
    msg: `Editing this template opens it in ${flow.navLabel} / Templates. Are you sure you want to leave the current creation flow?`,
    confirm: { label: "Go to Edit Template" },
    cancel: { label: "Cancel" },
  })

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
const confirmCloseUnsaved = (flow: FlowConfig) =>
  dialogs.notification({
    type: "warning",
    title: "Unsaved changes",
    msg: `You have unsaved changes. Save them to ${flow.navLabel} before closing the canvas?`,
    actions: {
      primary: { label: "Save and close", value: "save" },
      secondary: [
        { label: "Close without saving", value: "discard" },
        { label: "Cancel", value: "cancel" },
      ],
    },
  })

// "Leave creation" confirmation shown when the "guidedType" flow (Training)
// template gallery or preview is closed BEFORE the user has picked a template
// or an Empty Form. That flow has no welcome screen to fall back to, so closing
// abandons the in-progress creation entirely — warn first instead of silently
// bailing out. Resolves `true` when the user confirms leaving; dismissing the
// dialog (backdrop / Esc) resolves `undefined`, treated as "stay".
const confirmLeaveGuidedCreation = (flow: FlowConfig) =>
  dialogs.confirmation({
    type: "warning",
    title: "Leave creation?",
    msg: `You haven't picked a template or an empty survey yet. Closing now leaves the ${flow.navLabel} creation flow without creating a survey.`,
    confirm: { label: "Leave" },
    cancel: { label: "Keep creating" },
  })

/**
 * The non-dismissable info banner shown atop a template preview. The "Templates"
 * link doesn't navigate (this is a mock); it opens the same leave-creation
 * confirmation as the header's "Edit Template" action. F0Alert's link is
 * href-only, so the click is intercepted on capture.
 */
function TemplatePreviewAlert() {
  const { config } = useFlowConfig()
  return (
    <div
      onClickCapture={(e) => {
        if ((e.target as HTMLElement).closest("a")) {
          e.preventDefault()
          e.stopPropagation()
          void confirmLeaveCreation(config)
        }
      }}
    >
      <F0Alert
        variant="info"
        title="You're viewing a template."
        description={`To modify or create templates, go to ${config.navLabel} / Templates.`}
        link={{ label: "Templates", href: "#" }}
      />
    </div>
  )
}

/**
 * Header for the template-PREVIEW survey canvas (mode "preview"). Two exits:
 * "Back to templates" (left) re-opens the templates list, and "Close" (right)
 * returns to the starting point of the flow — the fullscreen welcome screen —
 * the same behaviour as the templates-list canvas' close. The framework
 * `onClose` is intentionally ignored in favour of these. "Use this template"
 * swaps in the editable resource view (mode "edit"), carrying the template's
 * name and description so its `ResourceHeader` is populated. Defined as a
 * component so it can read `openCanvas` / `setVisualizationMode` from context.
 */
function SurveyCanvasHeader({ content }: { content: SurveyCanvasContent }) {
  const { openCanvas, setVisualizationMode } = useAiChat()
  const { appendCard, appendMessages } = useMockAiChatRuntime()
  const { createSurvey, nextCardId, registerLiveCard } = useSurveyStore()
  const { armProposal, armNoCredits } = useProposalFlow()
  const { config, noCredits } = useFlowConfig()
  const leaveGuidedFlow = useLeaveGuidedFlow()

  const useThisTemplate = () => {
    // A template copy is created already populated, so seed the flow's sample
    // questions — for the "guidedType" entry flow (Training), that's the
    // chosen type's locked question + follow-ups (every template under that
    // type shares this content); for the "cards" preset welcome card
    // (Engagement, `content.presetCardId`), that preset's own questions; for
    // any other "cards" template, the flow's single sample set. No AI drafting
    // follows, so this single card stays live.
    const preset =
      config.entryMode === "cards" &&
      content.presetCardId === config.presetCard.id
        ? config.presetCard
        : undefined
    const elements = preset
      ? preset.elements
      : config.entryMode === "guidedType"
        ? config.guidedTypes.find((t) => t.id === content.guidedTypeId)
            ?.sampleElements
        : config.sampleElements
    if (!elements) return
    // The preset carries its own created-card subtitle / resource-header
    // description; other templates fall back to the flow's "Created in …" copy.
    const description = preset ? preset.createdDescription : content.description
    const surveyId = createSurvey(content.templateName, { elements })
    openCanvas(
      toCanvasContent({
        type: "survey",
        title: content.templateName,
        mode: "edit",
        templateName: content.templateName,
        surveyId,
        description,
      })
    )
    // Acknowledge the survey created from this template — an openable canvas card
    // (template name + subtitle) followed by a guided follow-up question.
    const cardId = nextCardId()
    registerLiveCard(surveyId, cardId)
    appendCard(() => (
      <SurveyCard
        surveyId={surveyId}
        cardId={cardId}
        title={content.templateName}
        description={
          preset ? preset.createdDescription : createdDescription(config)
        }
      />
    ))
    appendMessages([
      {
        role: "assistant",
        content: preset
          ? preset.introMessage
          : "I have created the survey using the template. What would you like to customize or change?",
      },
    ])
    // Arm the next typed message. Normally the user describes a change, the
    // assistant proposes one, and a confirmation card lets them accept/reject
    // (then re-arms). With no credits, AI edits are blocked — every typed
    // message gets an "out of credits" reply instead.
    if (noCredits) {
      armNoCredits()
    } else {
      armProposal(surveyId, content.templateName)
    }
  }

  return (
    <div className="px-page flex flex-row items-center gap-3 border border-x-0 border-b border-t-0 border-solid border-f1-border-secondary py-3">
      <F0Button
        variant="outline"
        hideLabel
        label="Back to templates"
        icon={ArrowLeft}
        onClick={() =>
          openCanvas(
            toCanvasContent(
              content.guidedTypeId && config.entryMode === "guidedType"
                ? {
                    type: "templates",
                    title: guidedTemplatesTitle(config, content.guidedTypeId),
                    guidedTypeId: content.guidedTypeId,
                  }
                : TEMPLATES_CANVAS_CONTENT
            )
          )
        }
      />
      <div className="min-w-0 flex-1">
        <F0Heading
          content={`Template · ${content.templateName}`}
          as="h2"
          ellipsis
        />
      </div>
      {/* `flex-1` WITHOUT `min-w-0` keeps the group's min-content floor, so the
          primary "Use this template" never squeezes — the title (flex-1 min-w-0)
          truncates instead. "Edit Template" sheds into the "⋯" menu under
          pressure. Mirrors the F0CardHorizontal actions recipe. */}
      <ButtonGroup
        className="flex-1"
        align="end"
        primaryAction={{
          id: "use-template",
          label: "Use this template",
          onClick: useThisTemplate,
        }}
        secondaryActions={[
          {
            id: "edit-template",
            label: "Edit Template",
            onClick: () => void confirmLeaveCreation(config),
          },
        ]}
      />
      {/* Divide the template actions from Close with the shared ButtonGroup
          hairline (same one ButtonGroup draws between its own action clusters). */}
      <ButtonGroupSeparator />
      {/* Close returns to the starting point of the flow. For the "cards"
          entry flow (Engagement) that's the fullscreen welcome screen, so it
          closes straight away. For "guidedType" (Training) there's no welcome
          screen to return to and no template has been chosen yet, so closing
          would abandon the creation flow — gate it behind a leave-creation
          confirmation and, once confirmed, close the chat back to the starting
          collection page (same as the templates-list canvas' close). */}
      <F0Button
        variant="outline"
        hideLabel
        label="Close"
        icon={Cross}
        onClick={() => {
          if (content.guidedTypeId) {
            void confirmLeaveGuidedCreation(config).then((leave) => {
              if (leave) leaveGuidedFlow()
            })
            return
          }
          setVisualizationMode("fullscreen")
        }}
      />
    </div>
  )
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
   * seed an explicit question set (a flow's preset card, or a "Use this
   * template" copy seeded with the flow's sample questions); omit it to start
   * blank (the AI drafts questions in later).
   */
  createSurvey: (
    name: string,
    opts?: { elements?: SurveyFormBuilderElement[] }
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
    elements: SurveyFormBuilderElement[],
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
          // A blank survey (no `elements` passed) is seeded with its first
          // section/question (the same starting point the form builder would
          // auto-add) so that state is durable in the store instead of
          // appearing only as a render-time side effect.
          elements: opts?.elements ?? makeInitialSurveyElements(),
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
    (surveyId, name, elements, onComplete) => {
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
                  elements,
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
  const { config } = useFlowConfig()
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
          void confirmCloseUnsaved(config).then((action) => {
            // Cancel or dismissed → stay on the canvas.
            if (action === "cancel" || action === undefined) return
            if (action === "save")
              toasts.open({
                title: savedToast(config),
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
                title: savedToast(config),
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
  const { config } = useFlowConfig()
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
        title: savedToast(config),
        variant: "success",
      })
    }, 600)
    return () => clearTimeout(t)
  }, [surveyId, config])
  return (
    // While the AI is "drafting" questions, blur + lock the builder behind the
    // "applying changes" overlay.
    <F0AiProcessingOverlay active={processing} className="h-full w-full">
      <div className="px-page h-full w-full overflow-auto py-3">
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
  // Shared tab/elements state for the editable (mode "edit") canvas, bracketing
  // both the header (tab strip) and the body (tab content). Harmless for the
  // read-only "preview" mode, which doesn't read it.
  wrapper: ({ content, children }) => (
    <SurveyCanvasStateProvider content={content}>
      {children}
    </SurveyCanvasStateProvider>
  ),
  // "preview" is the read-only template browse view (its own thin header +
  // answering form); "edit" (incl. the empty survey) is the editable resource
  // view — ResourceHeader + Questions/Settings tabs over the form builder.
  renderHeader: ({ content, onClose }) =>
    content.mode === "preview" ? (
      <SurveyCanvasHeader content={content} />
    ) : (
      <SurveyEditorCanvasHeader content={content} onClose={onClose} />
    ),
  renderContent: ({ content }) =>
    content.mode === "preview" ? (
      <SurveyTemplatePreviewBody content={content} />
    ) : (
      <SurveyEditorCanvasBody />
    ),
}

/**
 * Read-only template preview: the flow's sample questions. For the
 * "guidedType" entry flow (Training), that's the chosen type's locked
 * question + follow-ups (`content.guidedTypeId`); for "cards" (Engagement),
 * the flow's single sample set.
 */
function SurveyTemplatePreviewBody({
  content,
}: {
  content: SurveyCanvasContent
}) {
  const { config } = useFlowConfig()
  // The "cards" preset welcome card previews its OWN questions (NPS's locked
  // eNPS question + follow-ups), not the flow's generic sample set.
  const preset =
    config.entryMode === "cards" &&
    content.presetCardId === config.presetCard.id
      ? config.presetCard
      : undefined
  const guidedType =
    config.entryMode === "guidedType"
      ? config.guidedTypes.find((t) => t.id === content.guidedTypeId)
      : undefined
  const elements = preset
    ? preset.elements
    : config.entryMode === "guidedType"
      ? (guidedType?.sampleElements ?? [])
      : config.sampleElements
  const defaultValues = preset
    ? {}
    : config.entryMode === "guidedType"
      ? (guidedType?.defaultValues ?? {})
      : config.defaultValues
  return (
    <div className="px-page flex h-full w-full flex-col gap-3 py-3">
      <TemplatePreviewAlert />
      <SurveyAnsweringForm
        inline
        hideResourceHeader
        title={content.templateName}
        elements={elements}
        datasets={mockDatasets}
        defaultValues={defaultValues}
      />
    </div>
  )
}

/**
 * Templates browse view as rendered inside the AI Canvas. Unlike the collection
 * "Templates" tab (inert), the card click here is wired: it opens the template
 * in preview framing (replacing the template list in-place via `openCanvas`).
 * The actual "Use this template" / "Edit Template" actions live on the preview
 * header, not the card.
 */
function TemplatesCanvasBody() {
  const { openCanvas } = useAiChat()
  const startBlankSurvey = useStartBlankSurvey()
  const openPreview = (item: Template) =>
    openCanvas(
      toCanvasContent({
        type: "survey",
        title: item.name,
        mode: "preview",
        templateName: item.name,
        description: item.description,
      })
    )
  return (
    <TemplatesCollection
      onSelect={openPreview}
      onEmpty={startBlankSurvey}
      fillHeight={false}
      visualization={galleryListVisualization}
    />
  )
}

// List visualization for the AI Canvas template galleries (both the "cards" and
// "guidedType" flows): just the title + description and the questions count — no
// Category property (the gallery is all surveys, and its title already frames
// the scope, so repeating the type per row is redundant). The synthetic "Empty
// Survey" row hides the questions count (it isn't a real template).
const galleryListVisualization = {
  type: "list" as const,
  options: {
    itemDefinition: (item: Template) => ({
      title: item.name,
      description: [item.description],
    }),
    fields: [
      {
        label: "Questions",
        hide: (item: Template) => item.id === EMPTY_SURVEY_TEMPLATE_ID,
        render: (item: Template) => `${item.questions} questions`,
        sorting: "questions" as const,
      },
    ],
  },
}

/**
 * Templates gallery for the "guidedType" entry flow (Training), scoped to one
 * guided type: the type's own templates, with a synthetic "Empty Survey" entry
 * first (per spec — the first element on the templates is an empty survey).
 * Selecting a real template opens it in the same preview framing as the
 * "cards" flow's `TemplatesCanvasBody`; selecting "Empty Survey" skips preview
 * and opens a blank editor directly.
 */
function GuidedTemplatesCanvasBody({ guidedTypeId }: { guidedTypeId: string }) {
  const { openCanvas } = useAiChat()
  const { config } = useFlowConfig()
  const openEmptyForm = useOpenEmptyForm()

  const templates =
    config.entryMode === "guidedType"
      ? templatesForGuidedType(config, guidedTypeId)
      : []

  const galleryItems: Template[] = [EMPTY_SURVEY_TEMPLATE, ...templates]

  const openPreview = (item: Template) => {
    if (item.id === EMPTY_SURVEY_TEMPLATE_ID) {
      openEmptyForm(guidedTypeId)
      return
    }
    openCanvas(
      toCanvasContent({
        type: "survey",
        title: item.name,
        mode: "preview",
        templateName: item.name,
        description: item.description,
        guidedTypeId,
      })
    )
  }

  const source = useDataCollectionSource({
    dataAdapter: makeTemplatesDataAdapter(galleryItems),
    sortings: templateSortings,
    search: { enabled: true, sync: true },
    itemOnClick: (item) => () => openPreview(item),
  })

  return (
    <OneDataCollection
      source={source}
      visualizations={[galleryListVisualization]}
    />
  )
}

/**
 * Header for the templates browse canvas. Defined as a component (like
 * `SurveyCanvasHeader`) so it can read context and run a custom close instead of
 * the framework `onClose`. For the "cards" entry flow (Engagement), closing
 * the templates list returns to the FIRST step of cocreation — the fullscreen
 * welcome screen (suggestions + welcome cards). For "guidedType" (Training),
 * there's no welcome screen to return to and no template has been picked yet,
 * so closing would abandon the creation flow — it's gated behind a
 * leave-creation confirmation, and once confirmed closes the chat back to the
 * starting collection page (see `useLeaveGuidedFlow`).
 *
 * For the "cards" flow, switching to "fullscreen" both closes the canvas (the
 * provider drops canvas content on any canvas → non-canvas transition) and
 * reopens the chat full width. We force fullscreen rather than letting
 * `closeCanvas` restore the pre-canvas mode, since templates may be opened from
 * a side-panel welcome screen and the first step is always the fullscreen chat.
 */
function TemplatesCanvasHeader({
  content,
}: {
  content: TemplatesCanvasContent
}) {
  const { setVisualizationMode } = useAiChat()
  const { config } = useFlowConfig()
  const leaveGuidedFlow = useLeaveGuidedFlow()
  const openEmptyForm = useOpenEmptyForm()
  const startBlankSurvey = useStartBlankSurvey()
  const { guidedTypeId } = content

  const handleClose = () => {
    if (guidedTypeId) {
      void confirmLeaveGuidedCreation(config).then((leave) => {
        if (leave) leaveGuidedFlow()
      })
      return
    }
    setVisualizationMode("fullscreen")
  }

  // Every flow's templates header carries the same "Start with a Blank Survey"
  // CTA — the header twin of the gallery's empty-survey entry. The action
  // differs by entry mode: "guidedType" (Training) seeds the picked type's
  // blank form (`useOpenEmptyForm`), while the "cards"/"guidedEntry"
  // (Engagement) flows kick off the blank-survey drafting conversation
  // (`useStartBlankSurvey`).
  const startBlank = () =>
    guidedTypeId ? openEmptyForm(guidedTypeId) : startBlankSurvey()

  // The "guidedType" gallery is scoped to a picked type, so it keeps that
  // type's title (e.g. "Satisfaction Survey Templates"); the flow-wide
  // "cards"/"guidedEntry" gallery lists every survey template, so it's just
  // "Survey Templates".
  const title = guidedTypeId ? content.title : "Survey Templates"

  return (
    <div className="px-page flex flex-row items-center justify-between gap-3 border border-x-0 border-b border-t-0 border-solid border-f1-border-secondary py-3">
      <F0Heading content={title} as="h2" />
      <div className="flex flex-row items-center gap-3">
        {/* Skip the gallery and start from a blank survey. Divided from Close by
            the shared ButtonGroup hairline. */}
        <F0Button
          variant="outline"
          label="Start with a Blank Survey"
          onClick={startBlank}
        />
        <ButtonGroupSeparator />
        <F0Button
          variant="outline"
          hideLabel
          label="Close"
          icon={Cross}
          onClick={handleClose}
        />
      </div>
    </div>
  )
}

/**
 * Switches the composer placeholder based on whether a survey draft exists
 * yet, for either entry flow. Mounted unconditionally (unlike
 * `SurveyWelcomeCardsRegistrar`, which is "cards"-only) since both flows want
 * this behavior. Renders nothing.
 */
function ComposerPlaceholderRegistrar() {
  const { setPlaceholders } = useAiChat()
  const { hasDraftedSurvey } = useSurveyStore()
  const { config } = useFlowConfig()

  useEffect(() => {
    setPlaceholders(
      hasDraftedSurvey
        ? [config.draftedPlaceholder]
        : [config.composerPlaceholder]
    )
  }, [hasDraftedSurvey, setPlaceholders, config])

  return null
}

/**
 * Registers the survey entry-point cards shown below the composer on the
 * fullscreen welcome screen, via the chat's data-driven `welcomeScreenCards`
 * prop. Each card opens the AI Canvas (docks beside the chat): "Empty survey"
 * opens a blank survey + kicks off a scripted guided conversation; "Templates"
 * opens the templates card collection. Renders nothing — it only feeds card
 * data into the provider so `F0AiChatTextArea` owns the layout.
 *
 * "cards"-entry-flow only (Engagement) — mounted conditionally by
 * `CreationWithAIFlow`. The "guidedType" flow (Training) has no welcome
 * cards; its entry point is a clarifying question triggered directly from
 * the "Create" button (see `FlowContent`).
 */
function SurveyWelcomeCardsRegistrar() {
  const { config } = useFlowConfig()
  if (config.entryMode !== "cards") return null

  const { openCanvas, setWelcomeScreenCards } = useAiChat()
  const startBlankSurvey = useStartBlankSurvey()

  const cards: F0AiChatWelcomeCard[] = [
    {
      id: "empty-survey",
      icon: File,
      title: "Empty survey",
      description: "Start from scratch",
      onClick: () => handleCardSelectRef.current("empty-survey"),
    },
    {
      id: "templates",
      icon: Marketplace,
      title: "Templates",
      description: "Browse pre-made surveys",
      onClick: () => handleCardSelectRef.current("templates"),
    },
    {
      id: config.presetCard.id,
      icon: config.presetCard.icon,
      title: config.presetCard.title,
      description: config.presetCard.description,
      onClick: () => handleCardSelectRef.current(config.presetCard.id),
    },
    // Second template card — opens the flow's sample survey (employee
    // engagement) in the same read-only preview as the preset card.
    {
      id: config.placeholderCard.id,
      icon: config.placeholderCard.icon,
      title: config.placeholderCard.title,
      description: config.placeholderCard.description,
      onClick: () => handleCardSelectRef.current(config.placeholderCard.id),
    },
  ]
  // Welcome-card behavior, keyed by card `id`. Each card's `onClick` (above)
  // routes here through `handleCardSelectRef`; each branch opens the AI Canvas
  // and seeds the matching guided flow. The preset card's id/content come from
  // `config.presetCard` (Employee NPS for Engagement, Compliance training for
  // Training), so this switch reads the same for every flow.
  const handleCardSelect = (id: string) => {
    switch (id) {
      case "empty-survey": {
        // Blank-survey flow: create + seed the survey, open its canvas, then
        // post the guided sequence — an intro line, the "created" canvas card
        // (live/openable), and the first clarifying question (the chain walks
        // the rest). Shared with the templates-header CTA (see
        // `useStartBlankSurvey`).
        startBlankSurvey()
        break
      }
      case "templates": {
        // Browse-only: open the templates list in the canvas WITHOUT posting a
        // chat message, so the chat stays on the welcome screen. Closing the
        // list without choosing a template (see `TemplatesCanvasHeader`) then
        // returns to the fullscreen welcome screen with the welcome cards intact.
        openCanvas(toCanvasContent(TEMPLATES_CANVAS_CONTENT))
        break
      }
      case config.presetCard.id: {
        // Predefined-template card: open the template in the read-only preview
        // framing FIRST (same as the guided flows and the "Templates" browse) —
        // the survey isn't created until "Use this template" on the preview
        // header. `presetCardId` tells the preview + that button to seed this
        // preset's own questions (its locked first question + follow-ups) and
        // intro copy instead of the flow's generic sample set.
        const { presetCard } = config
        openCanvas(
          toCanvasContent({
            type: "survey",
            title: presetCard.title,
            mode: "preview",
            templateName: presetCard.title,
            description: presetCard.description,
            presetCardId: presetCard.id,
          })
        )
        break
      }
      case config.placeholderCard.id: {
        // Second template card: it has no preset questions of its own, so
        // preview the flow's generic sample survey (employee engagement). Like
        // every template card it opens the read-only preview FIRST; "Use this
        // template" then seeds `config.sampleElements` (no `presetCardId`, so
        // `useThisTemplate` takes its non-preset "cards" branch).
        const { placeholderCard } = config
        openCanvas(
          toCanvasContent({
            type: "survey",
            title: placeholderCard.title,
            mode: "preview",
            templateName: placeholderCard.title,
            description: placeholderCard.description,
          })
        )
        break
      }
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

  // No-credits welcome screen: the cards stay fully interactive (they don't
  // need AI generation). Typed messages are handled by the "Create" flow's
  // interceptor, which redirects them into the guided-entry panel (see
  // `FlowContent`) — so nothing extra is armed here.

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
  const { config, noCredits } = useFlowConfig()
  // Single-level primary nav: the flow's own collection (id === config.id,
  // e.g. "engagement"/"training") vs the Templates browse view (id
  // "templates"). Starts on the flow's own collection.
  const [activeTabId, setActiveTabId] = useState<string>(config.id)
  const i18n = useI18n()
  // The Surveys resource view has its own tab strip (Editor / Settings); the
  // survey questions show under "Editor", which is the default focused tab in
  // the co-creation flow.
  const [surveyTabId, setSurveyTabId] = useState("editor")
  const { open, setOpen, visualizationMode, setVisualizationMode, openCanvas } =
    useAiChat()
  const {
    inProgress,
    appendMessages,
    appendCard,
    startClarifying,
    setUserMessageInterceptor,
    sendMessageWithThinkingOnly,
    showThinking,
    setComposerHidden,
  } = useMockAiChatRuntime()
  const { createSurvey } = useSurveyStore()
  const { armNoCredits } = useProposalFlow()
  const startBlankSurvey = useStartBlankSurvey()

  // Typed "Create" flow ("cards" entry — Engagement): the same three
  // clarifying questions as the Empty survey card, walked as a single
  // consecutive panel. The canvas stays closed throughout; it only opens once
  // the user confirms the draft on the `DraftConfirmationCard`.
  const runTypedClarifyingChain = () => {
    if (config.entryMode !== "cards") return
    // Create the blank survey up front (state only — nothing visible yet); it's
    // named, shown, and drafted only when the user confirms the draft.
    const surveyId = createSurvey(UNTITLED_SURVEY_NAME)
    startClarifying({
      steps: surveyClarifyingSteps(config),
      onConfirm: (answersByStep) => {
        appendMessages(
          surveyAnswerMessages(surveyClarifyingSteps(config), answersByStep)
        )
        const name = surveyNameForType(answersByStep[0]?.[0] ?? "Untitled")
        // Hand off to the confirmation step — the canvas stays closed and no
        // card is posted until the user confirms. On Apply the
        // `DraftConfirmationCard` opens the survey, drafts the questions, and
        // posts its "created" card.
        appendMessages([
          {
            role: "assistant",
            content:
              "Based on your answers, I've got a first set of questions ready to draft.",
          },
        ])
        appendCard(() => (
          <DraftConfirmationCard
            surveyId={surveyId}
            surveyName={name}
            elements={config.sampleElements}
          />
        ))
      },
    })
  }

  // "guidedType" entry flow (Training): unlike "cards", no welcome screen and
  // no waiting for a typed message. On "Create" we post the opening user
  // message on their behalf ("Let's create a Survey"), then let the AI "think"
  // — the composer stays disabled for that beat (`inProgress`, via
  // `sendMessageWithThinkingOnly`) — before it writes out the form-type options
  // and opens the clarifying panel. `ClarifyingOption` only renders a short
  // label, so the full descriptions go in the assistant text first. Once a type
  // is picked, the canvas opens straight to that type's template gallery (no
  // survey is created yet — see `GuidedTemplatesCanvasBody` / `useOpenEmptyForm`).
  const startGuidedTypeFlow = () => {
    if (config.entryMode !== "guidedType") return
    // Keep the composer out of view through the scripted intro; it reappears
    // (as the clarifying panel, fading in) once the thinking beat resolves.
    setComposerHidden(true)
    sendMessageWithThinkingOnly("Let's create a Survey", () => {
      appendMessages([
        {
          role: "assistant",
          content: [
            config.guidedQuestion,
            "",
            ...config.guidedTypes.map(
              (t) => `- **${t.label}** — ${t.description}`
            ),
          ].join("\n"),
        },
      ])
      startClarifying({
        steps: [
          {
            question: config.guidedQuestion,
            options: config.guidedTypes.map((t) => ({
              id: t.id,
              label: t.label,
            })),
            selectionMode: "single",
          },
        ],
        onConfirm: (answersByStep) => {
          // Answered — hand the composer back (the guided intro is over).
          setComposerHidden(false)
          const label = answersByStep[0]?.[0]
          const type =
            config.guidedTypes.find((t) => t.label === label) ??
            config.guidedTypes[0]
          // Play the steps one at a time so the user can follow each action
          // instead of everything landing at once: echo their answer and think
          // (composer disabled), reply, think again, and only THEN open the
          // templates canvas so its entrance animation reads as its own beat.
          sendMessageWithThinkingOnly(
            `**${config.guidedQuestion}**\\\n${label ?? type.label}`,
            () => {
              appendMessages([
                {
                  role: "assistant",
                  content: "Great — here are some templates to start from.",
                },
              ])
              showThinking(() => {
                openCanvas(
                  toCanvasContent({
                    type: "templates",
                    title: guidedTemplatesTitle(config, type.id),
                    guidedTypeId: type.id,
                  })
                )
              })
            }
          )
        },
      })
    })
  }

  // Opens the guided-entry clarifying panel: entry ACTIONS as options — Empty
  // Survey, Use a Template, and the (up to) three most-used templates — and runs
  // the picked action through its "echo answer → think → reply → think → act"
  // beats. `templates` is a base `FlowConfig` field, so this works for any entry
  // mode; the calling `question` varies. Reused by the guidedEntry "Create"
  // intro (`startGuidedEntryFlow`) and the cards no-credits redirect.
  const openGuidedEntryPanel = (question: string) => {
    // "Most used" isn't tracked in the mock, so take the first few templates.
    const topTemplates = config.templates.slice(0, 3)
    const EMPTY_OPTION_ID = "empty-survey"
    const TEMPLATES_OPTION_ID = "use-template"
    const options: ClarifyingOption[] = [
      { id: EMPTY_OPTION_ID, label: "Empty Survey" },
      { id: TEMPLATES_OPTION_ID, label: "Use a Template" },
      ...topTemplates.map((t) => ({ id: `template:${t.id}`, label: t.name })),
    ]

    // Runs the picked entry action after its "reply + think" beat.
    const runGuidedEntryAction = (optionId: string) => {
      if (optionId === EMPTY_OPTION_ID) {
        // Blank survey: open its canvas + "created" card up front, then walk the
        // drafting conversation — or, with no credits, invite a typed request
        // met by an out-of-credits reply. Shared with the "cards" flow's Empty
        // survey card and the templates-header CTA (see `useStartBlankSurvey`).
        startBlankSurvey()
        return
      }
      if (optionId === TEMPLATES_OPTION_ID) {
        // Browse: open the full templates gallery in the canvas. With no
        // credits, the composer stays live while browsing, so arm the
        // out-of-credits reply — otherwise a typed message falls through to a
        // simulated AI answer (see `armNoCredits` / the mock's default reply).
        openCanvas(toCanvasContent(TEMPLATES_CANVAS_CONTENT))
        if (noCredits) armNoCredits()
        return
      }
      // A specific template: open it in the read-only preview framing (the
      // "Use this template" / "Edit Template" actions live on its header).
      const templateId = optionId.slice("template:".length)
      const template = config.templates.find((t) => t.id === templateId)
      if (!template) return
      openCanvas(
        toCanvasContent({
          type: "survey",
          title: template.name,
          mode: "preview",
          templateName: template.name,
          description: template.description,
        })
      )
      // As above: keep the no-credits reply armed while previewing so typing
      // never triggers a fake AI reply. `useThisTemplate` re-arms it once the
      // template is actually used.
      if (noCredits) armNoCredits()
    }

    // Copy for the assistant reply that precedes each action's canvas beat.
    const replyForOption = (optionId: string): string => {
      if (optionId === EMPTY_OPTION_ID)
        return "Let's start with a blank survey."
      if (optionId === TEMPLATES_OPTION_ID)
        return "Sure — here are the templates to choose from."
      return "Great — opening that template for you."
    }

    startClarifying({
      steps: [
        {
          question,
          options,
          selectionMode: "single",
        },
      ],
      onConfirm: (answersByStep) => {
        // Answered — hand the composer back (the guided intro is over).
        setComposerHidden(false)
        const label = answersByStep[0]?.[0]
        const picked = options.find((o) => o.label === label) ?? options[0]
        sendMessageWithThinkingOnly(
          `**${question}**\\\n${label ?? picked.label}`,
          () => {
            appendMessages([
              { role: "assistant", content: replyForOption(picked.id) },
            ])
            showThinking(() => runGuidedEntryAction(picked.id))
          }
        )
      },
    })
  }

  // "guidedEntry" entry flow (Engagement Guided): the same message-first entry
  // as "guidedType" — post "Let's create a Survey" on the user's behalf, think,
  // then the guided-entry clarifying panel (see `openGuidedEntryPanel`).
  const startGuidedEntryFlow = () => {
    if (config.entryMode !== "guidedEntry") return
    // Keep the composer out of view through the scripted intro; it reappears
    // (as the clarifying panel, fading in) once the thinking beat resolves.
    setComposerHidden(true)
    sendMessageWithThinkingOnly("Let's create a Survey", () => {
      appendMessages([
        { role: "assistant", content: "Sure — how would you like to start?" },
      ])
      openGuidedEntryPanel(config.guidedQuestion)
    })
  }

  // `phase` never actually reaches "split" (both flows dock the resource in
  // the AI canvas instead — see `openCanvas` above), so this is dead code
  // kept only for the type it once had; still needs to type-check for both
  // entry modes.
  const splitPhaseFallback =
    config.entryMode === "cards"
      ? {
          title: config.presetCard.title,
          description: config.presetCard.description,
          elements: config.sampleElements,
          defaultValues: config.defaultValues,
        }
      : {
          title: config.pageTitle,
          description: "",
          elements: [],
          defaultValues: {},
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
        // (fullscreen). "cards" (Engagement) arms the chat so the user's
        // first typed message kicks off the guided clarifying flow;
        // "guidedType" (Training) shows its type clarifying question
        // immediately, with no typing required first.
        label: "Create",
        icon: Add,
        onClick: () => {
          setVisualizationMode("fullscreen")
          setPhase("chat")
          if (config.entryMode === "cards") {
            if (noCredits) {
              // No credits: free-text AI is blocked, so the first typed message
              // gets a short "can't do that" reply and is redirected into the
              // credit-free guided-entry panel (Empty Survey / Use a Template /
              // top templates) — the welcome cards' options, offered inline.
              setUserMessageInterceptor(() => {
                appendMessages([
                  { role: "assistant", content: NO_CREDITS_REDIRECT_MESSAGE },
                ])
                showThinking(() => openGuidedEntryPanel(GUIDED_ENTRY_QUESTION))
              })
            } else {
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
            }
          } else if (config.entryMode === "guidedType") {
            startGuidedTypeFlow()
          } else {
            startGuidedEntryFlow()
          }
        },
      },
    ],
  }

  const sourceTable = useDataCollectionSource({
    dataAdapter: makeResourcesSource(config),
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
            module={{
              id: config.avatarModule,
              name: config.pageTitle,
              href: "/cocreation",
            }}
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
                title={splitPhaseFallback.title}
                description={splitPhaseFallback.description}
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
                        title: savedToast(config),
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
              <ClickableTabs
                tabs={[
                  { label: config.navTabLabel, id: config.id },
                  { label: "Templates", id: "templates" },
                ]}
                activeTabId={activeTabId}
                setActiveTabId={setActiveTabId}
              />
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
                title={splitPhaseFallback.title}
                description={splitPhaseFallback.description}
                elements={splitPhaseFallback.elements}
                datasets={mockDatasets}
                defaultValues={splitPhaseFallback.defaultValues}
              />
            ) : surveyTabId === "settings" ? (
              <SurveySettingsForm />
            ) : (
              <></>
            )}
          </F0AiProcessingOverlay>
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

function CreationWithAIFlow({
  flowId,
  noCredits = false,
}: {
  flowId: FlowConfig["id"]
  /** Demo the credit-exhausted state: shows the soft credit-warning banner
   * above the composer (see `creditWarning` below). */
  noCredits?: boolean
}) {
  // Reset persisted chat state once, before the provider reads it, so the chat
  // starts closed in the collection view.
  const didResetRef = useRef(false)
  if (!didResetRef.current) {
    resetAiChatPersistence()
    didResetRef.current = true
  }

  const config = FLOW_CONFIGS[flowId]
  const [phase, setPhase] = useState<Phase>("collection")
  // The credit warning is dismissable — hide it once dismissed (rebuilding
  // `ai.creditWarning` as undefined re-renders the composer without the banner).
  const [creditWarningDismissed, setCreditWarningDismissed] = useState(false)

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
    // textarea for the user to review and send — see `config.onTranscribe`.
    onTranscribe: config.onTranscribe,
    // Single phrase → the colorful heading types in once and stays (a
    // multi-element array would loop: type → hold → erase → next). The
    // "guidedType" flow (Training) jumps straight into its clarifying
    // question on "Create" (see `startGuidedTypeFlow`), so this heading is
    // only ever briefly visible, if at all — reuse the guided question text.
    initialMessage: [
      config.entryMode === "cards"
        ? config.initialMessage
        : config.guidedQuestion,
    ],
    // Prompt actions rendered as outline buttons at the top of the text area
    // on the welcome screen. Each group opens a popover of starter prompts.
    // "guidedType" (Training) has none — no suggestions, no welcome cards;
    // its entry point is the immediate type clarifying question instead. With
    // no credits, the prompts are dropped too: free-text AI is blocked, so the
    // welcome cards are the only working entry point.
    welcomeScreenSuggestions:
      config.entryMode === "cards" && !noCredits
        ? [
            {
              icon: Pencil,
              label: config.suggestionGroupLabel,
              items: config.suggestions,
            },
          ]
        : undefined,
    // The "Templates" welcome card opens this entity in the AI Canvas; picking
    // a template swaps in the "survey" entity in the same canvas panel.
    // Story-local content types ("templates"/"survey") aren't part of the
    // closed SDS `CanvasContent` union, so the entity definitions are widened to
    // the registry's base type here.
    canvasEntities: {
      templates: toCanvasEntity(templatesCanvasEntity),
      survey: toCanvasEntity(surveyCanvasEntity),
    },
    // No-credits demo: a soft warning banner above the composer with a "Get
    // credits" CTA and a dismiss. `MockConnectedChatInput` suppresses it while
    // a clarifying panel is up, so it only ever sits on the actual text input.
    creditWarning:
      noCredits && !creditWarningDismissed
        ? {
            level: "soft",
            onGetCredits: () =>
              toasts.open({
                title: "Redirecting you to billing to top up credits…",
                variant: "default",
              }),
            onDismiss: () => setCreditWarningDismissed(true),
          }
        : undefined,
    resizable: true,
    // Start closed in sidepanel mode so the chat plays its entrance animation
    // when opened from the collection view.
    defaultVisualizationMode: "sidepanel",
  }

  return (
    <MockAiChatRuntimeProvider>
      <FlowConfigProvider flowId={flowId} noCredits={noCredits}>
        <SurveyStoreProvider>
          <ApplicationFrame
            ai={ai}
            sidebar={<Sidebar {...SidebarStories.default.args} />}
          >
            <ComposerPlaceholderRegistrar />
            {/* Feeds the survey welcome cards into the chat via
                `welcomeScreenCards`; renders nothing itself. "cards" entry
                flow (Engagement) only — "guidedType" (Training) has none. */}
            {config.entryMode === "cards" && <SurveyWelcomeCardsRegistrar />}
            <FlowContent phase={phase} setPhase={setPhase} />
          </ApplicationFrame>
        </SurveyStoreProvider>
      </FlowConfigProvider>
    </MockAiChatRuntimeProvider>
  )
}

// "Welcome Screen" — entry via a welcome screen of entry-point cards
// (`cards` mode). Uses the engagement/eNPS survey data.
export const WelcomeScreen: Story = {
  name: "Welcome Screen",
  render: () => <CreationWithAIFlow flowId="engagement" />,
}

// "Welcome Screen · No Credits" — the same welcome-screen flow with AI
// credits exhausted. The soft credit-warning banner sits on the composer and the
// starter-prompt buttons above the input are dropped. Free-text AI needs credits,
// so a typed message gets a short "can't do that" reply and is redirected into
// the credit-free guided-entry panel (Empty Survey / Use a Template / top
// templates). The welcome cards stay fully interactive as in the normal flow.
export const WelcomeScreenNoCredits: Story = {
  name: "Welcome Screen · No Credits",
  render: () => <CreationWithAIFlow flowId="engagement" noCredits />,
}

// "Guided Chat · Triage" — the message-first guided-chat flow (`guidedType`),
// example A: the clarifying question triages the survey TYPE, then opens a
// type-scoped template gallery. Uses the training/compliance survey data.
export const GuidedChatTriage: Story = {
  name: "Guided Chat · Triage",
  render: () => <CreationWithAIFlow flowId="training" />,
}

// "Guided Chat · Entry Actions" — the same message-first guided-chat flow
// (`guidedEntry`), example B: the clarifying options are entry ACTIONS — Empty
// Survey, Use a Template, and the most-used templates. Picking a template opens
// its preview; "Use a Template" opens the full gallery; "Empty Survey" runs the
// blank-survey drafting conversation. Reuses the engagement data.
export const GuidedChatEntryActions: Story = {
  name: "Guided Chat · Entry Actions",
  render: () => <CreationWithAIFlow flowId="engagementGuided" />,
}

// "Guided Chat · No Credits" — the guided-chat entry-actions flow with AI
// credits exhausted. A soft credit-warning banner sits above the composer (with
// a "Get credits" CTA). The banner only shows on the text input — it's
// suppressed whenever a clarifying panel occupies the composer.
export const GuidedChatNoCredits: Story = {
  name: "Guided Chat · No Credits",
  render: () => <CreationWithAIFlow flowId="engagementGuided" noCredits />,
}
