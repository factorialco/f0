import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  ComponentProps,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import { StandardLayout } from "@/layouts/StandardLayout"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import { Add, ArrowLeft, Files, Pencil, Sparkles } from "@/icons/app"
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
import type { ClarifyingQuestionState } from "@/sds/ai/F0ClarifyingPanel/types"

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

type ResourceStatus = "Draft" | "Complete" | "Needs details"

type Resource = {
  id: string
  name: string
  owner: string
  status: ResourceStatus
}

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
// Clarifying question — shown after the first AI reply completes.
// ---------------------------------------------------------------------------

const CREATION_CLARIFYING_STEPS = [
  {
    question: "What kind of resource would you like to create?",
    options: [
      { id: "onboarding", label: "Onboarding plan" },
      { id: "review", label: "Performance review cycle" },
      { id: "process", label: "Process documentation" },
      { id: "checklist", label: "Checklist" },
    ],
    selectionMode: "single" as const,
  },
]

const REFINEMENT_CLARIFYING_STEPS = [
  {
    question: "What would you like to adjust?",
    options: [
      { id: "timeline", label: "Adjust the timeline" },
      { id: "sections", label: "Add more sections" },
      { id: "tone", label: "Change the tone" },
      { id: "details", label: "Add more details" },
    ],
    selectionMode: "single" as const,
  },
]

/** Maps user-turn index to the clarifying steps that should appear after that turn's AI reply. */
const CLARIFYING_STEPS_BY_TURN: Record<number, ClarifyingStep[]> = {
  1: CREATION_CLARIFYING_STEPS,
  [EXCHANGES_BEFORE_SPLIT + 1]: REFINEMENT_CLARIFYING_STEPS,
}

type ClarifyingStep = (typeof CREATION_CLARIFYING_STEPS)[number]

interface StepInteraction {
  selectedIds: string[]
}

const EMPTY_INTERACTION: StepInteraction = { selectedIds: [] }

function useClarifyingState(
  steps: ClarifyingStep[],
  callbacks: { onResolve: (label: string) => void; onDismiss: () => void }
) {
  const [stepIndex, setStepIndex] = useState(0)
  const [interactions, setInteractions] = useState<
    Record<string, StepInteraction>
  >({})

  const currentStep = steps[stepIndex]
  const interaction = currentStep
    ? (interactions[currentStep.question] ?? EMPTY_INTERACTION)
    : EMPTY_INTERACTION

  const toggleOption = useCallback(
    (optionId: string) => {
      if (!currentStep) return
      setInteractions((prev) => ({
        ...prev,
        [currentStep.question]: { selectedIds: [optionId] },
      }))
    },
    [currentStep]
  )

  const confirm = useCallback(() => {
    if (!currentStep) return
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1)
    } else {
      const selected = currentStep.options.find((o) =>
        interaction.selectedIds.includes(o.id)
      )
      callbacks.onResolve(selected?.label ?? interaction.selectedIds[0] ?? "")
    }
  }, [currentStep, stepIndex, steps.length, interaction, callbacks])

  const cancel = useCallback(() => {
    callbacks.onDismiss()
  }, [callbacks])

  const back = useCallback(() => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1)
  }, [stepIndex])

  const state: ClarifyingQuestionState | null = currentStep
    ? {
        currentStep: {
          question: currentStep.question,
          options: currentStep.options,
          selectionMode: currentStep.selectionMode,
          selectedOptionIds: interaction.selectedIds,
          isCustomAnswerActive: false,
        },
        currentStepIndex: stepIndex,
        totalSteps: steps.length,
        toggleOption,
        confirm,
        skip: cancel,
        cancel,
        back,
        setCustomAnswerText: () => {},
        setCustomAnswerActive: () => {},
        activateCustomAnswer: () => {},
      }
    : null

  return { clarifyingState: state }
}

const resourceFilters = {
  status: {
    type: "in" as const,
    label: "Status",
    options: {
      options: [
        { value: "Draft", label: "Draft" },
        { value: "Needs details", label: "Needs details" },
        { value: "Complete", label: "Complete" },
      ],
    },
  },
  owner: {
    type: "in" as const,
    label: "Owner",
    options: {
      options: [
        { value: "Alicia Keys", label: "Alicia Keys" },
        { value: "Dani Moreno", label: "Dani Moreno" },
        { value: "Marta Soler", label: "Marta Soler" },
        { value: "Nora Park", label: "Nora Park" },
      ],
    },
  },
}

const resourceSortings = {
  name: { label: "Name" },
  owner: { label: "Owner" },
  status: { label: "Status" },
} as const

// Returning an empty `records` array is what triggers OneDataCollection's
// built-in default "no-data" empty state.
const emptyDataAdapter = {
  fetchData: () => Promise.resolve({ records: [] as Resource[] }),
}

const MOCK_RESOURCES: Resource[] = [
  {
    id: "1",
    name: "Engineering onboarding plan",
    owner: "Alicia Keys",
    status: "Draft",
  },
  {
    id: "2",
    name: "Q3 performance review cycle",
    owner: "Dani Moreno",
    status: "Complete",
  },
  {
    id: "3",
    name: "Product roadmap 2026",
    owner: "Marta Soler",
    status: "Needs details",
  },
  {
    id: "4",
    name: "Offboarding checklist",
    owner: "Nora Park",
    status: "Draft",
  },
]

const filledDataAdapter = {
  fetchData: () => Promise.resolve({ records: MOCK_RESOURCES }),
}

const tableVisualization = {
  type: "table" as const,
  options: {
    columns: [
      { label: "Name", render: (item: Resource) => item.name },
      { label: "Owner", render: (item: Resource) => item.owner },
      { label: "Status", render: (item: Resource) => item.status },
    ],
  },
}

const cardVisualization = {
  type: "card" as const,
  options: {
    title: (item: Resource) => item.name,
    description: (item: Resource) => item.owner,
    cardProperties: [
      { label: "Status", render: (item: Resource) => item.status },
    ],
  },
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

  const userTurns = messages.filter((m) => m.role === "user").length
  const currentClarifyingSteps = CLARIFYING_STEPS_BY_TURN[userTurns] ?? null
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
    currentClarifyingSteps ?? CREATION_CLARIFYING_STEPS,
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

/** The AI-generated draft shown in the central panel of the split view. */
function DocumentPreview() {
  return (
    <div className="flex justify-center py-2">
      <div className="flex w-full max-w-[720px] flex-col gap-6 rounded-xl border border-f1-border bg-f1-background p-10 shadow-md">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-f1-foreground">
            Engineering onboarding plan
          </h1>
          <p className="text-f1-foreground-secondary">
            A 30-day plan to ramp up a new engineer — accounts, environment,
            first deliverables, and check-ins.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-medium text-f1-foreground">
            Week 1 — Setup &amp; orientation
          </h2>
          <div className="h-3 w-full rounded bg-f1-background-secondary" />
          <div className="h-3 w-11/12 rounded bg-f1-background-secondary" />
          <div className="h-3 w-4/5 rounded bg-f1-background-secondary" />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-medium text-f1-foreground">
            Week 2 — First contributions
          </h2>
          <div className="h-3 w-full rounded bg-f1-background-secondary" />
          <div className="h-3 w-10/12 rounded bg-f1-background-secondary" />
          <div className="h-3 w-3/4 rounded bg-f1-background-secondary" />
        </div>
      </div>
    </div>
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
  const [templatesOpen, setTemplatesOpen] = useState(false)
  const [activeTabId, setActiveTabId] = useState("empty-table")
  const [resourceTabId, setResourceTabId] = useState("overview")
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
          sendMessageWithThinkingOnly("I want to create a new resource.")
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
    appendRawMessages([
      {
        role: "assistant",
        content: "",
        generativeUI: () => (
          <F0Card
            horizontal
            avatar={{ type: "icon", icon: Files }}
            title="Engineering onboarding plan"
            description="A 30-day ramp-up covering environment setup, codebase orientation, and first deliverables."
          />
        ),
      },
    ])
  }, [phase, appendRawMessages])

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
    appendRawMessages([
      {
        role: "assistant",
        content: "",
        generativeUI: () => (
          <F0Card
            horizontal
            avatar={{ type: "icon", icon: Files }}
            title="Engineering onboarding plan"
            description="Expanded to 4 weeks with a buddy system, structured check-ins, and a dedicated deep-dive week."
          />
        ),
      },
    ])
  }, [phase, userTurns, inProgress, appendRawMessages])

  return (
    <NavigationPage
      header={
        <>
          <PageHeader
            module={COCREATION_MODULE}
            breadcrumbs={
              phase === "split"
                ? [{ id: "draft", label: "Untitled draft" }]
                : undefined
            }
          />
          {phase === "split" ? (
            <>
              <ResourceHeader
                title="Engineering onboarding plan"
                description="A 30-day ramp-up covering environment setup, codebase orientation, and first deliverables."
                status={{ label: "Status", text: "Draft", variant: "neutral" }}
                primaryAction={{ label: "Save", onClick: () => {} }}
                secondaryActions={[
                  {
                    label: "Back to list",
                    icon: ArrowLeft,
                    onClick: () => setPhase("collection"),
                  },
                ]}
                metadata={[
                  { label: "Owner", value: { type: "text", content: "You" } },
                ]}
              />
              <Tabs
                tabs={[
                  { label: "Overview", id: "overview" },
                  { label: "Week 1", id: "week-1" },
                  { label: "Week 2", id: "week-2" },
                ]}
                activeTabId={resourceTabId}
                setActiveTabId={setResourceTabId}
              />
            </>
          ) : (
            visualizationMode !== "fullscreen" && (
              <Tabs
                tabs={[
                  { label: "Empty table", id: "empty-table" },
                  { label: "Table with data", id: "table-data" },
                  { label: "Cards", id: "cards" },
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
          <DocumentPreview />
        ) : (
          <>
            {activeTabId === "empty-table" && (
              <OneDataCollection
                source={sourceEmpty}
                visualizations={[tableVisualization]}
                fullHeight
              />
            )}
            {activeTabId === "table-data" && (
              <OneDataCollection
                source={sourceTable}
                visualizations={[tableVisualization]}
                fullHeight
              />
            )}
            {activeTabId === "cards" && (
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

function CreationWithAIFlow() {
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
      <ApplicationFrame
        ai={ai}
        sidebar={<Sidebar {...SidebarStories.default.args} />}
      >
        <FlowContent phase={phase} setPhase={setPhase} />
      </ApplicationFrame>
    </MockAiChatRuntimeProvider>
  )
}

export const CreationWithAIPage: Story = {
  render: () => <CreationWithAIFlow />,
}
