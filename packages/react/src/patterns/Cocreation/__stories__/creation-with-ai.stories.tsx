import type { Meta, StoryObj } from "@storybook/react-vite"

import { z } from "zod"

import {
  ComponentProps,
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"

import { StandardLayout } from "@/layouts/StandardLayout"
import { F0CardRow } from "@/components/F0Card"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import {
  Add,
  Delete,
  ExternalLink,
  File,
  LayersFront,
  Marketplace,
  Settings,
  SolidPlay,
} from "@/icons/app"
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
  MockConnectedChatInput,
  MockConnectedMessagesContainer,
  useMockAiChatRuntime,
} from "@/sds/ai/F0AiChat/__stories__/_mock"

import { f0FormField, F0Form } from "@/patterns/F0Form"
import type { F0SectionConfig } from "@/patterns/F0Form"
import { useF0FormDefinition } from "@/patterns/F0WizardForm"
import { SurveyAnsweringForm } from "@/sds/surveys/SurveyAnsweringForm"
import { mockDatasets } from "@/sds/surveys/__stories__/mocks"

import {
  filledDataAdapter,
  resourceFilters,
  resourceSortings,
  tableVisualization,
} from "./mockData"
import { SURVEY_DEFAULT_VALUES, SURVEY_ELEMENTS } from "./survey-mocks"
import { TAB_CONFIGS } from "./tab-configs"
import type { TabConfig } from "./tab-configs"

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
 * NOTE: the scripted conversation choreography (canned replies, clarifying
 * questions, the chat → split transition, and the appended resource cards) has
 * been removed — this is the bare shell on which a new flow will be authored.
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
    submitConfig: { hideActionBar: true },
  })

  return (
    <F0Form formDefinition={formDefinition} styling={{ noPadding: true }} />
  )
}

/**
 * Cards rendered below the chat text area on the welcome screen (the chat
 * `footer` slot). They offer the two entry points into the survey flow:
 * an empty survey or the template browser.
 */
function WelcomeFooterCards() {
  const { sendMessage } = useMockAiChatRuntime()

  const cards = [
    {
      icon: File,
      title: "Empty survey",
      description: "Start from scratch",
      message: "Create an empty survey.",
    },
    {
      icon: Marketplace,
      title: "Templates",
      description: "Browse pre-made surveys",
      message: "Show me the survey templates.",
    },
  ]

  return (
    <div className="grid w-full grid-cols-2 gap-3">
      {cards.map((card) => (
        <F0CardRow
          key={card.title}
          avatar={{ type: "icon", icon: card.icon }}
          title={card.title}
          description={card.description}
          onClick={() => sendMessage(card.message)}
        />
      ))}
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
  const [templatesOpen, setTemplatesOpen] = useState(false)
  // The Surveys resource view has its own tab strip (Editor / Settings); the
  // survey questions show under "Editor", which is the default focused tab in
  // the co-creation flow.
  const [surveyTabId, setSurveyTabId] = useState("editor")
  const { open, setOpen, visualizationMode, setVisualizationMode } = useAiChat()
  const { inProgress } = useMockAiChatRuntime()

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
    primaryActions: () => [
      {
        // The single primary "Create" button launches the chat FULL WIDTH
        // (fullscreen). It only opens the chat shell — no message is sent yet,
        // so the flow starts from a clean slate.
        label: "Create",
        icon: Add,
        onClick: () => {
          setVisualizationMode("fullscreen")
          setPhase("chat")
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
            visualizationMode !== "fullscreen" && (
              <Tabs
                tabs={[{ label: "Surveys", id: "surveys" }]}
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
        ) : (
          <OneDataCollection
            source={sourceTable}
            visualizations={[tableVisualization]}
            fullHeight
          />
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
    chatInput: <MockConnectedChatInput />,
    initialMessage: [
      "What do you want to create?",
      "Describe it and I'll draft it with you",
    ],
    // Two cards rendered below the text area on the welcome screen.
    footer: <WelcomeFooterCards />,
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

export const Surveys: Story = {
  render: () => <CreationWithAIFlow initialTabId="surveys" />,
}
