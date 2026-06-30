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
  Files,
  LayersFront,
  Marketplace,
  Pencil,
  Settings,
  SolidPlay,
} from "@/icons/app"
import { F0Alert } from "@/components/F0Alert"
import { ButtonInternal } from "@/components/F0Button/internal"
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
  cardVisualization,
  filledDataAdapter,
  resourceFilters,
  resourceSortings,
  tableVisualization,
  templateFilters,
  templatesDataAdapter,
  templateSortings,
} from "./mockData"
import type { Template } from "./mockData"
// WIP: temporary toast mock — replace with "@/hooks/toast" once
// https://github.com/factorialco/f0/pull/3493 merges, then remove this import.
import { MockToastProvider, useMockToast } from "./mockToast"
import {
  makeInitialSurveyElements,
  mockSurveyTranscribe,
  NPS_SURVEY_ELEMENTS,
  SURVEY_DEFAULT_VALUES,
  SURVEY_ELEMENTS,
} from "./survey-mocks"
import { TAB_CONFIGS } from "./tab-configs"
import type { TabConfig } from "./tab-configs"
import type { F0AiChatWelcomeCard } from "@/sds/ai/F0AiChat"

/**
 * Co-creation patterns — "Creation with AI".
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
  title: "Co-creation/Creation with AI",
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
 * The survey-templates browse view as a card-view data collection. Shared by
 * BOTH the collection "Templates" tab and the AI Canvas (see
 * `templatesCanvasEntity`) so the cards + their metadata stay identical in both
 * places as the data collection / card config evolves.
 */
function TemplatesCollection({
  onSelect,
}: {
  onSelect?: (item: Template) => void
} = {}) {
  const source = useDataCollectionSource({
    dataAdapter: templatesDataAdapter,
    filters: templateFilters,
    sortings: templateSortings,
    search: { enabled: true, sync: true },
    // No card CTAs — actions live on the preview surface. The card-body click
    // is omitted entirely when no handler is supplied so the browse-tab cards
    // stay inert (no pointer, no action); in the AI Canvas it opens the preview.
    itemOnClick: onSelect ? (item) => () => onSelect(item) : undefined,
  })
  return (
    <OneDataCollection
      source={source}
      visualizations={[cardVisualization]}
      fullHeight
    />
  )
}

// Canvas content + entity for the survey templates. `CanvasContent` is a closed
// SDS union (dashboard | form | dataDownload); "templates" is story-specific, so
// we keep a local content type and cast at the `openCanvas` call site — the
// canvas registry/panel match on the `type` string at runtime.
type TemplatesCanvasContent = CanvasContentBase & { type: "templates" }
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
  renderContent: () => (
    <div className="h-full w-full px-4 py-3">
      <TemplatesCanvasBody />
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
}

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
  const surveyContent = canvasContent as unknown as SurveyCanvasContent | null
  const isActive =
    surveyContent?.type === "survey" && surveyContent.surveyId === surveyId

  const handleOpen = () =>
    openCanvas({
      type: "survey",
      title,
      mode: "edit",
      templateName: title,
      surveyId,
      description,
    } as unknown as CanvasContent)

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

// Shared "leave creation" confirmation — opened by the preview header's "Edit
// Template" action and the in-canvas alert's "Templates" link.
const confirmLeaveCreation = () =>
  dialogs.confirmation({
    title: "Leave creation?",
    msg: "Editing this template opens it in Surveys / Templates. Are you sure you want to leave the current creation flow?",
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

/**
 * The non-dismissable info banner shown atop a template preview. The "Templates"
 * link doesn't navigate (this is a mock); it opens the same leave-creation
 * confirmation as the header's "Edit Template" action. F0Alert's link is
 * href-only, so the click is intercepted on capture.
 */
function TemplatePreviewAlert() {
  return (
    <div
      onClickCapture={(e) => {
        if ((e.target as HTMLElement).closest("a")) {
          e.preventDefault()
          e.stopPropagation()
          void confirmLeaveCreation()
        }
      }}
    >
      <F0Alert
        variant="info"
        title="You're viewing a template."
        description="To modify or create templates, go to Surveys / Templates."
        link={{ label: "Templates", href: "#" }}
      />
    </div>
  )
}

/**
 * Header for the template-PREVIEW survey canvas (mode "preview"). Closing
 * returns to the template list (the survey is only ever reached from there)
 * rather than dismissing the canvas, so `onClose` is intentionally ignored in
 * favour of re-opening the templates canvas. "Use this template" swaps in the
 * editable resource view (mode "edit"), carrying the template's name and
 * description so its `ResourceHeader` is populated. Defined as a component so it
 * can read `openCanvas` from context.
 */
function SurveyCanvasHeader({ content }: { content: SurveyCanvasContent }) {
  const { openCanvas } = useAiChat()
  const { appendCard, appendMessages } = useMockAiChatRuntime()
  const { createSurvey, nextCardId, registerLiveCard } = useSurveyStore()
  const { armProposal } = useProposalFlow()

  const useThisTemplate = () => {
    // A template copy is created already populated, so seed the sample questions
    // (empty: false). No AI drafting follows, so this single card stays live.
    const surveyId = createSurvey(content.templateName, { empty: false })
    openCanvas({
      type: "survey",
      title: content.templateName,
      mode: "edit",
      templateName: content.templateName,
      surveyId,
      description: content.description,
    } as unknown as CanvasContent)
    // Acknowledge the survey created from this template — an openable canvas card
    // (template name + subtitle) followed by a guided follow-up question.
    const cardId = nextCardId()
    registerLiveCard(surveyId, cardId)
    appendCard(() => (
      <SurveyCard
        surveyId={surveyId}
        cardId={cardId}
        title={content.templateName}
        description={SURVEY_CREATED_DESCRIPTION}
      />
    ))
    appendMessages([
      {
        role: "assistant",
        content:
          "I have created the survey using the template. What would you like to customize or change?",
      },
    ])
    // Arm the next typed message: the user describes a change, the assistant
    // proposes one, and a human-in-the-loop confirmation card lets them accept
    // (apply + supersede the card) or reject it — then re-arms for the next.
    armProposal(surveyId, content.templateName)
  }

  return (
    <div className="flex flex-row items-center gap-3 border border-x-0 border-b border-t-0 border-solid border-f1-border-secondary px-4 py-3">
      <ButtonInternal
        variant="outline"
        hideLabel
        label="Back to templates"
        icon={ArrowLeft}
        onClick={() =>
          openCanvas(TEMPLATES_CANVAS_CONTENT as unknown as CanvasContent)
        }
      />
      <div className="min-w-0 flex-shrink truncate">
        <F0Heading content={`Template · ${content.templateName}`} as="h2" />
      </div>
      {/* ButtonGroup owns the responsive collapse: when the row is wide both
          actions show; when the title grows or the canvas narrows, the
          secondary "Edit Template" sheds into the "⋯" menu while the primary
          "Use this template" stays pinned. */}
      <ButtonGroup
        className="min-w-0 flex-1"
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
            onClick: () => void confirmLeaveCreation(),
          },
        ]}
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
  const { toast } = useMockToast()
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
              if (ok) toast({ title: "Survey published", variant: "success" })
            }),
        }}
        onClose={() =>
          void confirmCloseUnsaved().then((action) => {
            // Cancel or dismissed → stay on the canvas.
            if (action === "cancel" || action === undefined) return
            if (action === "save")
              toast({
                title: "Survey saved in Engagement / Surveys",
                variant: "success",
              })
            onClose()
          })
        }
        secondaryActions={[
          {
            label: "Save to Surveys",
            onClick: () =>
              toast({
                title: "Survey saved in Engagement / Surveys",
                variant: "success",
              }),
          },
        ]}
        otherActions={[
          {
            label: "Duplicate",
            icon: LayersFront,
            onClick: () => toast({ title: "Survey duplicated" }),
          },
          { type: "separator" },
          {
            label: "Delete",
            icon: Delete,
            critical: true,
            onClick: () => toast({ title: "Survey deleted", variant: "error" }),
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
  const { toast } = useMockToast()
  // This flow's resource carries a Draft status, so creating it persists a draft
  // to its domain the moment its canvas first opens — the resource's first
  // creation (not autosave), fired once per survey across every creation path
  // (empty survey, "Use this template" copy, predefined template). Keyed in a
  // module-scoped set so closing and reopening the canvas doesn't re-fire it.
  // From here saves are explicit (the header's "Save to Surveys"); resources
  // without a draft state create nothing until the user explicitly saves.
  useEffect(() => {
    if (!surveyId || createdSurveyIds.has(surveyId)) return
    const t = setTimeout(() => {
      createdSurveyIds.add(surveyId)
      toast({
        title: "Survey saved in Engagement / Surveys",
        variant: "success",
      })
    }, 600)
    return () => clearTimeout(t)
  }, [surveyId, toast])
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
      <div className="flex h-full w-full flex-col gap-3 px-4 py-3">
        <TemplatePreviewAlert />
        <SurveyAnsweringForm
          inline
          hideResourceHeader
          title={content.templateName}
          elements={SURVEY_ELEMENTS}
          datasets={mockDatasets}
          defaultValues={SURVEY_DEFAULT_VALUES}
        />
      </div>
    ) : (
      <SurveyEditorCanvasBody />
    ),
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
  const openPreview = (item: Template) =>
    openCanvas({
      type: "survey",
      title: item.name,
      mode: "preview",
      templateName: item.name,
      description: item.description,
    } as unknown as CanvasContent)
  return <TemplatesCollection onSelect={openPreview} />
}

/**
 * Header for the templates browse canvas. Defined as a component (like
 * `SurveyCanvasHeader`) so it can read context and run a custom close instead of
 * the framework `onClose`: closing the templates list returns to the FIRST step
 * of cocreation — the fullscreen welcome screen (suggestions + welcome cards).
 *
 * Switching to "fullscreen" both closes the canvas (the provider drops canvas
 * content on any canvas → non-canvas transition) and reopens the chat full
 * width. We force fullscreen rather than letting `closeCanvas` restore the
 * pre-canvas mode, since templates may be opened from a side-panel welcome
 * screen and the first step is always the fullscreen chat.
 */
function TemplatesCanvasHeader({
  content,
}: {
  content: TemplatesCanvasContent
}) {
  const { setVisualizationMode } = useAiChat()

  const handleClose = () => {
    setVisualizationMode("fullscreen")
  }

  return (
    <div className="flex flex-row items-center justify-between gap-3 border border-x-0 border-b border-t-0 border-solid border-f1-border-secondary px-4 py-3">
      <F0Heading content={content.title} as="h2" />
      <ButtonInternal
        variant="outline"
        hideLabel
        label="Close"
        icon={Cross}
        onClick={handleClose}
      />
    </div>
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
      id: "employee-nps",
      icon: Files,
      title: "Employee NPS",
      description: "Template",
      onClick: () => handleCardSelectRef.current("employee-nps"),
    },
    // Visual-only template card — its `onClick` hits no branch below, so
    // clicking is inert (mock placeholder, no behavior wired yet).
    {
      id: "employee-engagement",
      icon: Files,
      title: "Employee Engagement",
      description: "Template",
      onClick: () => handleCardSelectRef.current("employee-engagement"),
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
        openCanvas(makeEmptySurveyContent(surveyId) as unknown as CanvasContent)
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
        openCanvas(TEMPLATES_CANVAS_CONTENT as unknown as CanvasContent)
        appendMessages([
          {
            role: "assistant",
            content:
              "Here are the templates. Choose the one that fits your needs.",
          },
        ])
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
        openCanvas({
          type: "survey",
          title: EMPLOYEE_NPS_SURVEY_NAME,
          mode: "edit",
          templateName: EMPLOYEE_NPS_SURVEY_NAME,
          surveyId,
          description: SURVEY_CREATED_DESCRIPTION,
        } as unknown as CanvasContent)
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
  // Primary (module-level) navigation. In production this would be a single
  // "Survey" item; "Tasks" is a second item added purely so the nav renders as
  // a real tab strip (a single-tab `Tabs` collapses to a plain heading).
  const [topNavId, setTopNavId] = useState("survey")
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
  } = useMockAiChatRuntime()
  const { createSurvey, draftQuestions, nextCardId, registerLiveCard } =
    useSurveyStore()
  const { armProposal } = useProposalFlow()
  const { toast } = useMockToast()

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
        openCanvas(
          makeEmptySurveyContent(surveyId, name) as unknown as CanvasContent
        )
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
                        toast({
                          title: "Survey published",
                          variant: "success",
                        })
                    }),
                }}
                onClose={() => setPhase("chat")}
                secondaryActions={[
                  {
                    label: "Save to Surveys",
                    onClick: () =>
                      toast({
                        title: "Survey saved in Engagement / Surveys",
                        variant: "success",
                      }),
                  },
                ]}
                otherActions={[
                  {
                    label: "Duplicate",
                    icon: LayersFront,
                    onClick: () => toast({ title: "Survey duplicated" }),
                  },
                  { type: "separator" },
                  {
                    label: "Delete",
                    icon: Delete,
                    critical: true,
                    onClick: () =>
                      toast({ title: "Survey deleted", variant: "error" }),
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
    // The "Templates" welcome card opens this entity in the AI Canvas; picking
    // a template swaps in the "survey" entity in the same canvas panel.
    // Story-local content types ("templates"/"survey") aren't part of the
    // closed SDS `CanvasContent` union, so the entity definitions are widened to
    // the registry's base type here.
    canvasEntities: {
      templates: templatesCanvasEntity as unknown as CanvasEntityDefinition,
      survey: surveyCanvasEntity as unknown as CanvasEntityDefinition,
    },
    // Keep the chat steady when the canvas opens/closes with the chat docked as
    // a side panel: suppress the chat content's mode-change re-fade. The canvas
    // panel's own open/close animation is unaffected.
    revealChatOnCanvasToggle: false,
    resizable: true,
    // Start closed in sidepanel mode so the chat plays its entrance animation
    // when opened from the collection view.
    defaultVisualizationMode: "sidepanel",
  }

  return (
    <MockAiChatRuntimeProvider>
      <MockToastProvider>
        <TabConfigProvider initialTabId={initialTabId}>
          <SurveyStoreProvider>
            <ApplicationFrame
              ai={ai}
              sidebar={<Sidebar {...SidebarStories.default.args} />}
            >
              {/* Feeds the survey welcome cards into the chat via
                  `welcomeScreenCards`; renders nothing itself. */}
              <SurveyWelcomeCardsRegistrar />
              <FlowContent phase={phase} setPhase={setPhase} />
            </ApplicationFrame>
          </SurveyStoreProvider>
        </TabConfigProvider>
      </MockToastProvider>
    </MockAiChatRuntimeProvider>
  )
}

export const Surveys: Story = {
  render: () => <CreationWithAIFlow initialTabId="surveys" />,
}
