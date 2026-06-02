import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useEffect, useRef, useState } from "react"

import { StandardLayout } from "@/layouts/StandardLayout"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import { Add, ArrowLeft, Files, Pencil, Sparkles } from "@/icons/app"
import { ApplicationFrame } from "@/patterns/ApplicationFrame"
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
  const { open, setOpen, setVisualizationMode } = useAiChat()
  const { messages, inProgress } = useMockAiChatRuntime()

  const source = useDataCollectionSource({
    dataAdapter: emptyDataAdapter,
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
        // "Create with AI" opens the chat FULL WIDTH (fullscreen).
        onClick: () => {
          setVisualizationMode("fullscreen")
          setPhase("chat")
        },
      },
      { label: "Start from scratch", icon: Pencil, onClick: () => {} },
    ],
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

  return (
    <NavigationPage
      header={
        <PageHeader
          module={COCREATION_MODULE}
          breadcrumbs={
            phase === "split"
              ? [{ id: "draft", label: "Untitled draft" }]
              : undefined
          }
        />
      }
    >
      <StandardLayout>
        {phase === "split" ? (
          <>
            <ResourceHeader
              title="Engineering onboarding plan"
              description="Drafted with AI — keep refining it in the chat."
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
            <DocumentPreview />
          </>
        ) : (
          <OneDataCollection
            source={source}
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
