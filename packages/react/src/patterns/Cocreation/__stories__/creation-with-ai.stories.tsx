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

import { StandardLayout } from "@/layouts/StandardLayout"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import {
  Add,
  Delete,
  ExternalLink,
  Files,
  LayersFront,
  Pencil,
  Settings,
  SolidPlay,
  Sparkles,
} from "@/icons/app"
import { F0Card } from "@/components/F0Card"
import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import { F0Dialog } from "@/patterns/F0Dialog"
import { Page as NavigationPage } from "@/patterns/Navigation/Page"
import { Tabs } from "@/patterns/Navigation/Tabs"
import { Sidebar } from "@/patterns/Navigation/Sidebar/Sidebar"
import * as SidebarStories from "@/patterns/Navigation/Sidebar/index.stories"
import { OneDataCollection } from "@/patterns/OneDataCollection"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"
import { ResourceHeader } from "@/patterns/ResourceHeader"
import { useAiChat } from "@/sds/ai/F0AiChat"
import { F0AiProcessingOverlay } from "@/sds/ai/F0AiProcessingOverlay"
import {
  MockAiChatRuntimeProvider,
  MockConnectedChatHeader,
  MockConnectedMessagesContainer,
  useMockAiChatRuntime,
} from "@/sds/ai/F0AiChat/__stories__/_mock"

import { filterNonRenderableMessages } from "@/sds/ai/F0AiChat/__stories__/_mock/turn-utils"
import { F0AiChatTextArea } from "@/sds/ai/F0AiChatTextArea"
import type { F0AiChatTextAreaSubmitPayload } from "@/sds/ai/F0AiChatTextArea/types"
import { F0ClarifyingPanel } from "@/sds/ai/F0ClarifyingPanel/F0ClarifyingPanel"
import { f0FormField, F0Form } from "@/patterns/F0Form"
import type { F0SectionConfig } from "@/patterns/F0Form"
import { useF0FormDefinition } from "@/patterns/F0WizardForm"
import { SurveyAnsweringForm } from "@/sds/surveys/SurveyAnsweringForm"
import { mockDatasets } from "@/sds/surveys/__stories__/mocks"

import {
  cardVisualization,
  emptyDataAdapter,
  employeeTableVisualization,
  filledDataAdapter,
  MOCK_EMPLOYEES,
  resourceFilters,
  resourceSortings,
  tableVisualization,
} from "./mockData"
import { SURVEY_DEFAULT_VALUES, SURVEY_ELEMENTS } from "./survey-mocks"
import { TAB_CONFIGS } from "./tab-configs"
import type { ClarifyingStep, TabConfig } from "./tab-configs"
import { useClarifyingState } from "./useClarifyingState"

/**
 * Co-creation patterns — "Creation with AI".
 *
 * Interactive mockup of the AI-creation flow, built on a single chat-enabled
 * ApplicationFrame so the "One" switch (the F0AiChat trigger) is always in the
 * header:
 *   1. Collection — empty data collection. Open the chat via the header "One"
 *      switch (side panel) OR the `+ Create → Create with AI` dropdown item
 *      (full width).
 *   2. Chat       — F0AiChat animates in so the user can describe what they
 *      want (full width via "Create with AI", side panel via the One switch).
 *   3. Split      — after a couple of exchanges the chat docks as the right
 *      side panel and the resource (a document/preview canvas) fills the center.
 *
 * `phase` is the single source of truth; the chat's open/visualization state is
 * derived from it (and kept in sync when the user toggles the One switch).
 * Self-contained: this file owns its own mock world.
 */
const meta = {
  title: "Co-creation/Creation with AI",
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

/** Number of full user↔AI exchanges before the chat docks into the split view. */
const EXCHANGES_BEFORE_SPLIT = 2

// ---------------------------------------------------------------------------
// Tab-config context — shares the live active tab (and its config) between
// `FlowContent` and `CreationChatInput`, which are siblings rendered by the
// ApplicationFrame (the chat input is passed via the `ai` prop, so it can't
// receive the active tab as a prop). Lives inside MockAiChatRuntimeProvider so
// it can keep the runtime's scripted responses in sync with the active tab.
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
  initialTabId = "tasks",
  children,
}: {
  initialTabId?: string
  children: ReactNode
}) {
  const [activeTabId, setActiveTabId] = useState(initialTabId)
  const tabConfig = TAB_CONFIGS[activeTabId] ?? TAB_CONFIGS.tasks
  const { setScript } = useMockAiChatRuntime()

  // Keep the runtime's scripted responses in sync with the active tab.
  useEffect(() => {
    setScript(tabConfig.script)
  }, [tabConfig, setScript])

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
    submitConfig: { hideActionBar: true },
  })

  return (
    <F0Form formDefinition={formDefinition} styling={{ noPadding: true }} />
  )
}

/**
 * Custom chat input for the co-creation flow. Identical to MockConnectedChatInput
 * but also shows a clarifying question panel after the first AI reply finishes.
 */
function CreationChatInput() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { messages, inProgress, sendMessage } = useMockAiChatRuntime()
  const {
    placeholders,
    entityRefs,
    fileAttachments,
    pendingContext,
    setPendingContext,
    pendingQuote,
    setPendingQuote,
    setProcessDroppedFilesFunction,
    disclaimer,
    footer,
    visualizationMode,
    creditWarning,
    welcomeScreenSuggestions,
    tracking,
    setIsClarifying,
  } = useAiChat()

  const filteredMessages = useMemo(
    () => filterNonRenderableMessages(messages),
    [messages]
  )
  const isWelcomeScreen = filteredMessages.length === 0
  const fullscreen = visualizationMode === "fullscreen"

  const { tabConfig } = useTabConfig()

  const userTurns = messages.filter((m) => m.role === "user").length
  // Maps user-turn index to the tab-specific clarifying steps shown after that
  // turn's AI reply: creation after the first turn, refinement after split.
  const clarifyingStepsByTurn: Record<number, ClarifyingStep[]> = {
    1: tabConfig.clarifying.creation,
    [EXCHANGES_BEFORE_SPLIT + 1]: tabConfig.clarifying.refinement,
  }
  const currentClarifyingSteps = clarifyingStepsByTurn[userTurns] ?? null
  const [dismissedAtTurn, setDismissedAtTurn] = useState<number | null>(null)
  const shouldShowClarifying =
    !inProgress &&
    currentClarifyingSteps !== null &&
    dismissedAtTurn !== userTurns

  const callbacks = useMemo(
    () => ({
      onResolve: (label: string) => {
        setDismissedAtTurn(userTurns)
        setIsClarifying(false)
        sendMessage(label)
      },
      onDismiss: () => {
        setDismissedAtTurn(userTurns)
        setIsClarifying(false)
      },
    }),
    [sendMessage, setIsClarifying, userTurns]
  )

  const { clarifyingState } = useClarifyingState(
    currentClarifyingSteps ?? tabConfig.clarifying.creation,
    callbacks
  )

  useEffect(() => {
    setIsClarifying(shouldShowClarifying && clarifyingState !== null)
  }, [shouldShowClarifying, clarifyingState, setIsClarifying])

  const clarifyingUI =
    shouldShowClarifying && clarifyingState ? (
      <F0ClarifyingPanel clarifyingQuestion={clarifyingState} />
    ) : undefined

  const handleSubmit = useCallback(
    ({ text, quote }: F0AiChatTextAreaSubmitPayload) => {
      sendMessage(text, { replyQuote: quote?.text })
    },
    [sendMessage]
  )

  const handleSuggestionClick = useCallback(
    (
      item: NonNullable<
        typeof welcomeScreenSuggestions
      >[number]["items"][number],
      group: NonNullable<typeof welcomeScreenSuggestions>[number]
    ) => {
      const prompt = item.prompt || item.title
      tracking?.onWelcomeSuggestionClick?.({ item, group, prompt })
      sendMessage(prompt)
    },
    [sendMessage, tracking]
  )

  return (
    <F0AiChatTextArea
      ref={containerRef}
      onSubmit={handleSubmit}
      inProgress={inProgress}
      placeholders={placeholders}
      creditWarning={creditWarning}
      pendingContext={pendingContext}
      onPendingContextChange={setPendingContext}
      pendingQuote={pendingQuote}
      onPendingQuoteChange={setPendingQuote}
      fileAttachments={fileAttachments}
      searchPersons={entityRefs?.resolvers?.searchPersons}
      onProcessFilesRef={setProcessDroppedFilesFunction}
      disclaimer={disclaimer}
      footer={footer}
      isWelcomeScreen={isWelcomeScreen}
      fullscreen={fullscreen}
      welcomeScreenSuggestions={welcomeScreenSuggestions}
      onSuggestionClick={handleSuggestionClick}
      clarifyingUI={clarifyingUI}
    />
  )
}

/**
 * The page content rendered inside the shared chat-enabled ApplicationFrame.
 * Derives the chat's open/visualization state from `phase`, keeps `phase` in
 * sync when the user toggles the header One switch, and runs the scripted
 * chat → split transition.
 */
function FlowContent({
  phase,
  setPhase,
}: {
  phase: Phase
  setPhase: (phase: Phase) => void
}) {
  const { activeTabId, setActiveTabId, tabConfig } = useTabConfig()
  const [templatesOpen, setTemplatesOpen] = useState(false)
  const [resourceTabId, setResourceTabId] = useState("tab-1")
  // The Surveys resource view has its own tab strip (Editor / Settings); the
  // survey questions show under "Editor", which is the default focused tab in
  // the co-creation flow.
  const [surveyTabId, setSurveyTabId] = useState("editor")
  const { open, setOpen, visualizationMode, setVisualizationMode } = useAiChat()
  const {
    messages,
    inProgress,
    sendMessageWithThinkingOnly,
    appendRawMessages,
  } = useMockAiChatRuntime()

  const sharedSourceOptions = {
    filters: resourceFilters,
    sortings: resourceSortings,
    search: {
      enabled: true,
      sync: true,
    },
    secondaryActions: {
      expanded: 1 as const,
      actions: () => [
        { label: "Explore templates", onClick: () => setTemplatesOpen(true) },
      ],
    },
    primaryActionsOpenOnClick: true,
    primaryActions: () => [
      { label: "Create", icon: Add, onClick: () => {} },
      {
        label: "Create with AI",
        icon: Sparkles,
        // "Create with AI" opens the chat FULL WIDTH (fullscreen) and
        // auto-sends the opening intent message so the AI can start thinking.
        onClick: () => {
          setVisualizationMode("fullscreen")
          setPhase("chat")
          sendMessageWithThinkingOnly(tabConfig.initialMessage)
        },
      },
      { label: "Start from scratch", icon: Pencil, onClick: () => {} },
    ],
  }

  const sourceEmpty = useDataCollectionSource({
    dataAdapter: emptyDataAdapter,
    ...sharedSourceOptions,
  })

  const sourceTable = useDataCollectionSource({
    dataAdapter: filledDataAdapter,
    ...sharedSourceOptions,
  })

  const sourceCards = useDataCollectionSource({
    dataAdapter: filledDataAdapter,
    ...sharedSourceOptions,
  })

  const sourceEmployees = useDataCollectionSource({
    dataAdapter: {
      fetchData: () => Promise.resolve({ records: MOCK_EMPLOYEES }),
    },
    ...sharedSourceOptions,
    // Employees don't offer templates.
    secondaryActions: undefined,
  })

  // phase → chat open state. Opening from "collection" flips `open` false→true
  // while the chat is closed (so `shouldPlayEntranceAnimation` is true), which
  // plays the expand-in animation. The mode is NOT forced for "chat": the
  // header One switch opens a side panel (the chat's default), while "Create
  // with AI" sets fullscreen before entering this phase.
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
      setPhase("collection")
    }
  }, [open, phase, setPhase])

  // Scripted transition: once the user has had `EXCHANGES_BEFORE_SPLIT` full
  // exchanges and the latest reply has finished streaming, dock the chat and
  // reveal the resource.
  const userTurns = messages.filter((message) => message.role === "user").length
  useEffect(() => {
    if (
      phase === "chat" &&
      userTurns >= EXCHANGES_BEFORE_SPLIT &&
      !inProgress
    ) {
      setPhase("split")
    }
  }, [phase, userTurns, inProgress, setPhase])

  // Append a persistent resource card each time an iteration is created.
  const cardsAppendedRef = useRef(0)

  // First card: on the initial split transition.
  useEffect(() => {
    if (phase !== "split" || cardsAppendedRef.current >= 1) return
    cardsAppendedRef.current = 1
    const card = tabConfig.cards[0]
    appendRawMessages([
      {
        role: "assistant",
        content: "",
        generativeUI: () => (
          <F0Card
            horizontal
            truncateDescription
            avatar={{ type: "icon", icon: Files }}
            title={card.title}
            description={card.description}
          />
        ),
      },
    ])
  }, [phase, appendRawMessages, tabConfig])

  // Second card: after the post-split refinement exchange finishes.
  useEffect(() => {
    if (
      phase !== "split" ||
      cardsAppendedRef.current >= 2 ||
      userTurns < EXCHANGES_BEFORE_SPLIT + 2 ||
      inProgress
    )
      return
    cardsAppendedRef.current = 2
    const card = tabConfig.cards[1]
    appendRawMessages([
      {
        role: "assistant",
        content: "",
        generativeUI: () => (
          <F0Card
            horizontal
            truncateDescription
            avatar={{ type: "icon", icon: Files }}
            title={card.title}
            description={card.description}
          />
        ),
      },
    ])
  }, [phase, userTurns, inProgress, appendRawMessages, tabConfig])

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
            // strip. Other tabs keep the generic placeholder chrome.
            activeTabId === "surveys" ? (
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
                    onClick: () => {},
                  }}
                  otherActions={[
                    {
                      label: "Duplicate",
                      icon: LayersFront,
                      onClick: () => {},
                    },
                    { type: "separator" },
                    {
                      label: "Delete",
                      icon: Delete,
                      critical: true,
                      onClick: () => {},
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
                <Tabs
                  tabs={[
                    { label: "Questions", id: "editor" },
                    { label: "Settings", id: "settings" },
                  ]}
                  activeTabId={surveyTabId}
                  setActiveTabId={setSurveyTabId}
                />
              </>
            ) : (
              <>
                <ResourceHeader
                  title={tabConfig.cards[0].title}
                  description={tabConfig.cards[0].description}
                  status={{
                    label: "Status",
                    text: "Draft",
                    variant: "neutral",
                  }}
                  primaryAction={{ label: "Save", onClick: () => {} }}
                  metadata={[
                    { label: "Owner", value: { type: "text", content: "You" } },
                  ]}
                />
                <Tabs
                  tabs={[
                    { label: "Tab 1", id: "tab-1" },
                    { label: "Tab 2", id: "tab-2" },
                    { label: "Tab 3", id: "tab-3" },
                  ]}
                  activeTabId={resourceTabId}
                  setActiveTabId={setResourceTabId}
                />
              </>
            )
          ) : (
            visualizationMode !== "fullscreen" && (
              <Tabs
                tabs={[
                  { label: "Tasks", id: "tasks" },
                  { label: "Surveys", id: "surveys" },
                  { label: "Employees", id: "employees" },
                  { label: "Absences", id: "absences" },
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
            {activeTabId === "surveys" ? (
              surveyTabId === "editor" ? (
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
              )
            ) : (
              <></>
            )}
          </F0AiProcessingOverlay>
        ) : (
          <>
            {activeTabId === "tasks" && (
              <OneDataCollection
                source={sourceEmpty}
                visualizations={[tableVisualization]}
                fullHeight
              />
            )}
            {activeTabId === "surveys" && (
              <OneDataCollection
                source={sourceTable}
                visualizations={[tableVisualization]}
                fullHeight
              />
            )}
            {activeTabId === "employees" && (
              <OneDataCollection
                source={sourceEmployees}
                visualizations={[employeeTableVisualization]}
                fullHeight
              />
            )}
            {activeTabId === "absences" && (
              <OneDataCollection
                source={sourceCards}
                visualizations={[cardVisualization]}
                fullHeight
              />
            )}
          </>
        )}
      </StandardLayout>

      <F0Dialog
        isOpen={templatesOpen}
        onClose={() => setTemplatesOpen(false)}
        title="Explore templates"
        description="Pick a template to start from."
      >
        {/* Content coming soon. */}
        <div />
      </F0Dialog>
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
    chatHeader: <MockConnectedChatHeader />,
    chatMessages: <MockConnectedMessagesContainer />,
    chatInput: <CreationChatInput />,
    initialMessage: [
      "What do you want to create?",
      "Describe it and I'll draft it with you",
    ],
    welcomeScreenSuggestions: [
      {
        icon: Sparkles,
        label: "Start from a goal",
        items: [
          { title: "Onboarding plan for a new engineer" },
          { title: "Quarterly performance review cycle" },
        ],
      },
      {
        icon: Files,
        label: "Start from a template",
        items: [{ title: "Use the standard onboarding template" }],
      },
    ],
    resizable: true,
    // Start closed in sidepanel mode so the chat plays its entrance animation
    // when opened from the collection view.
    defaultVisualizationMode: "sidepanel",
  }

  return (
    <MockAiChatRuntimeProvider>
      <TabConfigProvider initialTabId={initialTabId}>
        <ApplicationFrame
          ai={ai}
          sidebar={<Sidebar {...SidebarStories.default.args} />}
        >
          <FlowContent phase={phase} setPhase={setPhase} />
        </ApplicationFrame>
      </TabConfigProvider>
    </MockAiChatRuntimeProvider>
  )
}

export const Tasks: Story = {
  render: () => <CreationWithAIFlow initialTabId="tasks" />,
}

export const Surveys: Story = {
  render: () => <CreationWithAIFlow initialTabId="surveys" />,
}

export const Employees: Story = {
  render: () => <CreationWithAIFlow initialTabId="employees" />,
}

export const Absences: Story = {
  render: () => <CreationWithAIFlow initialTabId="absences" />,
}
