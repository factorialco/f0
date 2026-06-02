import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useEffect, useState } from "react"

import { StandardLayout } from "@/layouts/StandardLayout"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import { Add, ArrowLeft, Files, Pencil, Sparkles } from "@/icons/app"
import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import ApplicationFrameStoryMeta from "@/patterns/ApplicationFrame/index.stories"
import { F0Dialog } from "@/patterns/F0Dialog"
import { Page as NavigationPage } from "@/patterns/Navigation/Page"
import { Sidebar } from "@/patterns/Navigation/Sidebar/Sidebar"
import * as SidebarStories from "@/patterns/Navigation/Sidebar/index.stories"
import { OneDataCollection } from "@/patterns/OneDataCollection"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"
import { ResourceHeader } from "@/patterns/ResourceHeader"
import { useAiChat } from "@/sds/ai/F0AiChat"
import {
  MockAiChatRuntimeProvider,
  MockConnectedChatHeader,
  MockConnectedChatInput,
  MockConnectedMessagesContainer,
  useMockAiChatRuntime,
} from "@/sds/ai/F0AiChat/__stories__/_mock"

/**
 * Co-creation patterns — "Creation with AI".
 *
 * Interactive mockup of the AI-creation flow:
 *   1. Collection  — empty data collection; open the `+ Create` dropdown and
 *      pick "Create with AI".
 *   2. Chat        — F0AiChat takes over the page (fullscreen) so the user can
 *      describe what they want. An explicit "Generate draft" button advances.
 *   3. Split       — the chat docks as the right side panel and the resource
 *      (a document/preview canvas) fills the central panel.
 *
 * The chat is driven through ApplicationFrame's native `ai` integration and the
 * `useAiChat()` hook (`setOpen` + `setVisualizationMode`). Self-contained: this
 * file owns its own mock world and does not depend on the CRUD shared helpers.
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
// localStorage. For this mock we reset those keys on every entry so "Create
// with AI" always opens the chat FULL SCREEN (fullscreen), regardless of the
// sidepanel mode left behind by a previous split-view session.
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

/** Step 1 — the empty collection with the `+ Create` split button. */
function CollectionView({ onCreateWithAI }: { onCreateWithAI: () => void }) {
  const [templatesOpen, setTemplatesOpen] = useState(false)

  const source = useDataCollectionSource({
    dataAdapter: emptyDataAdapter,
    filters: resourceFilters,
    sortings: resourceSortings,
    search: {
      enabled: true,
      sync: true,
    },
    // "Explore templates" sits to the left of the separator as an expanded
    // secondary button, directly adjacent to the Create split button.
    secondaryActions: {
      expanded: 1 as const,
      actions: () => [
        { label: "Explore templates", onClick: () => setTemplatesOpen(true) },
      ],
    },
    // Split button: clicking either the main "Create" label or the caret opens
    // the dropdown (Create with AI, Create Manual). Enabled via openOnClick.
    primaryActionsOpenOnClick: true,
    primaryActions: () => [
      { label: "Create", icon: Add, onClick: () => {} },
      { label: "Create with AI", icon: Sparkles, onClick: onCreateWithAI },
      { label: "Start from scratch", icon: Pencil, onClick: () => {} },
    ],
  })

  return (
    <ApplicationFrame
      {...(ApplicationFrameStoryMeta.args as Partial<
        ComponentProps<typeof ApplicationFrame>
      >)}
      sidebar={<Sidebar {...SidebarStories.default.args} />}
    >
      <NavigationPage header={<PageHeader module={COCREATION_MODULE} />}>
        <StandardLayout>
          <OneDataCollection
            source={source}
            visualizations={[tableVisualization]}
          />
        </StandardLayout>
      </NavigationPage>
      <F0Dialog
        isOpen={templatesOpen}
        onClose={() => setTemplatesOpen(false)}
        title="Explore templates"
        description="Pick a template to start from."
      >
        {/* Content coming soon. */}
        <div />
      </F0Dialog>
    </ApplicationFrame>
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
 * Steps 2 & 3 — content rendered inside the chat-enabled ApplicationFrame.
 * The chat opens FULL SCREEN; after a scripted number of exchanges it docks to
 * the side panel and the document preview fills the central panel.
 */
function CoCreateContent({
  phase,
  onAdvanceToSplit,
  onBack,
}: {
  phase: Phase
  onAdvanceToSplit: () => void
  onBack: () => void
}) {
  const { setOpen, setVisualizationMode } = useAiChat()
  const { messages, inProgress } = useMockAiChatRuntime()

  // Ensure the chat is open on entry. The persisted localStorage keys are
  // reset before this frame mounts (see `resetAiChatPersistence`), so the
  // provider initializes from `defaultVisualizationMode: "fullscreen"`.
  useEffect(() => {
    setOpen(true)
  }, [setOpen])

  // Map the flow phase → chat visualization mode.
  useEffect(() => {
    setVisualizationMode(phase === "split" ? "sidepanel" : "fullscreen")
  }, [phase, setVisualizationMode])

  // Scripted transition: once the user has had `EXCHANGES_BEFORE_SPLIT` full
  // exchanges and the latest reply has finished streaming, dock the chat and
  // reveal the resource. The `phase === "chat"` guard makes this one-shot.
  const userTurns = messages.filter((message) => message.role === "user").length
  useEffect(() => {
    if (
      phase === "chat" &&
      userTurns >= EXCHANGES_BEFORE_SPLIT &&
      !inProgress
    ) {
      onAdvanceToSplit()
    }
  }, [phase, userTurns, inProgress, onAdvanceToSplit])

  return (
    <NavigationPage
      header={
        <PageHeader
          module={COCREATION_MODULE}
          breadcrumbs={[{ id: "draft", label: "Untitled draft" }]}
        />
      }
    >
      {phase === "split" && (
        <StandardLayout>
          <ResourceHeader
            title="Engineering onboarding plan"
            description="Drafted with AI — keep refining it in the chat."
            status={{ label: "Status", text: "Draft", variant: "neutral" }}
            primaryAction={{ label: "Save", onClick: () => {} }}
            secondaryActions={[
              { label: "Back to list", icon: ArrowLeft, onClick: onBack },
            ]}
            metadata={[
              { label: "Owner", value: { type: "text", content: "You" } },
            ]}
          />
          <DocumentPreview />
        </StandardLayout>
      )}
    </NavigationPage>
  )
}

/** Steps 2 & 3 — mounts the chat runtime + the chat-enabled ApplicationFrame. */
function CoCreateFrame({
  phase,
  onAdvanceToSplit,
  onBack,
}: {
  phase: Phase
  onAdvanceToSplit: () => void
  onBack: () => void
}) {
  const ai: ComponentProps<typeof ApplicationFrame>["ai"] = {
    enabled: true,
    chatHeader: <MockConnectedChatHeader />,
    chatMessages: <MockConnectedMessagesContainer />,
    chatInput: <MockConnectedChatInput />,
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
    defaultVisualizationMode: "fullscreen",
  }

  return (
    <MockAiChatRuntimeProvider>
      <ApplicationFrame
        {...(ApplicationFrameStoryMeta.args as Partial<
          ComponentProps<typeof ApplicationFrame>
        >)}
        ai={ai}
        sidebar={<Sidebar {...SidebarStories.default.args} />}
      >
        <CoCreateContent
          phase={phase}
          onAdvanceToSplit={onAdvanceToSplit}
          onBack={onBack}
        />
      </ApplicationFrame>
    </MockAiChatRuntimeProvider>
  )
}

function CreationWithAIFlow() {
  const [phase, setPhase] = useState<Phase>("collection")

  if (phase === "collection") {
    return (
      <CollectionView
        onCreateWithAI={() => {
          // Reset persisted chat state so the chat always opens full screen.
          resetAiChatPersistence()
          setPhase("chat")
        }}
      />
    )
  }

  return (
    <CoCreateFrame
      phase={phase}
      onAdvanceToSplit={() => setPhase("split")}
      onBack={() => setPhase("collection")}
    />
  )
}

export const CreationWithAIPage: Story = {
  render: () => <CreationWithAIFlow />,
}
