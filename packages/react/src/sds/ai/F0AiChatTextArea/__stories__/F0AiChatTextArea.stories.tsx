import type { Meta, StoryObj } from "@storybook/react-vite"
import { useRef, useState } from "react"
import { expect, userEvent, within } from "storybook/test"

import { F0AiChatTextArea } from "../F0AiChatTextArea"
import type { F0AiChatTextAreaSubmitPayload } from "../types"

import { F0SegmentedControl } from "@/experimental/Actions/F0SegmentedControl"
import {
  ChartVerticalBars,
  File,
  Marketplace,
  Pencil,
  Search,
} from "@/icons/app"
import { mockTranscribe } from "@/lib/storybook-utils/ai-mocks"

import { F0ClarifyingPanel } from "../../F0ClarifyingPanel"
import type { ClarifyingQuestionState } from "../../F0ClarifyingPanel/types"
import type {
  AiChatCreditWarning,
  AiChatDisclaimer,
  AiChatFileAttachmentConfig,
  F0AiChatWelcomeCard,
  PendingContext,
  PendingQuote,
  PersonProfile,
  TranscribeFn,
  UploadedFile,
  WelcomeScreenSuggestion,
} from "../../F0AiChat/types"

const ROTATING_PLACEHOLDERS = [
  "Ask about location, directions, or travel details…",
  "Inquire about pricing, features, or product availability…",
  "Request clarification on tasks, deadlines, or requirements…",
  "Ask for opinions, recommendations, or comparisons…",
  "Provide details about issues, errors, or unexpected behavior…",
]

const DISCLAIMER: AiChatDisclaimer = {
  text: "One works within your permissions.",
  link: "/permissions",
  linkText: "See more",
}

const PENDING_CONTEXT: PendingContext = {
  label: "Expenses dashboard",
  context: "User is currently viewing the Q3 expenses dashboard",
}

const PENDING_QUOTE: PendingQuote = {
  text: "The quarterly forecast shows a 12% increase in operational costs that we need to address by Q4.",
}

const SAMPLE_PEOPLE: PersonProfile[] = [
  {
    id: "1",
    firstName: "Ana",
    lastName: "García",
    avatarUrl: undefined,
  } as PersonProfile,
  {
    id: "2",
    firstName: "Bruno",
    lastName: "Martínez",
    avatarUrl: undefined,
  } as PersonProfile,
  {
    id: "3",
    firstName: "Carmen",
    lastName: "Rodríguez",
    avatarUrl: undefined,
  } as PersonProfile,
]

const mockSearchPersons = async (query: string): Promise<PersonProfile[]> => {
  await new Promise((r) => setTimeout(r, 200))
  if (!query) return SAMPLE_PEOPLE
  const q = query.toLowerCase()
  return SAMPLE_PEOPLE.filter((p) =>
    `${p.firstName} ${p.lastName}`.toLowerCase().includes(q)
  )
}

const FILE_UPLOAD_CONFIG: AiChatFileAttachmentConfig = {
  onUploadFiles: async (files: File[]): Promise<UploadedFile[]> => {
    await new Promise((r) => setTimeout(r, 600))
    return files.map((f) => ({
      url: `https://example.com/${f.name}`,
      filename: f.name,
      mimetype: f.type,
    }))
  },
  allowedMimeTypes: ["image/*", "application/pdf", "text/plain"],
  maxFiles: 3,
}

const CREDIT_WARNING: AiChatCreditWarning = {
  level: "soft",
  onGetCredits: () => console.log("get credits clicked"),
  onDismiss: () => console.log("dismiss clicked"),
}

const WELCOME_CARDS: F0AiChatWelcomeCard[] = [
  {
    id: "empty-survey",
    icon: File,
    title: "Empty survey",
    description: "Start from scratch",
    message: "Create an empty survey.",
  },
  {
    id: "templates",
    icon: Marketplace,
    title: "Templates",
    description: "Browse pre-made surveys",
    // No message: a templates card triggers a non-prompt behavior, handled by
    // the host in its `onClick`.
  },
]

// Welcome suggestions: grouped outline buttons shown ABOVE the composer. Each
// group opens a popover of starter prompts; clicking one sends its `prompt`
// straight to the AI (contrast with welcome cards, which fire a host action).
const WELCOME_SUGGESTIONS: WelcomeScreenSuggestion[] = [
  {
    icon: ChartVerticalBars,
    label: "Analyze",
    items: [
      {
        title: "April leave and overtime summary",
        prompt:
          "Give me a breakdown of leave taken and overtime worked across the company in April, grouped by department.",
      },
      {
        title: "Current gross salary by employee",
        prompt:
          "List the current gross salary of every active employee, sorted from highest to lowest.",
      },
      {
        title: "Headcount evolution by department",
        prompt:
          "Plot headcount evolution by department over the last twelve months.",
      },
    ],
  },
  {
    icon: Search,
    label: "Find",
    items: [
      {
        title: "Who's out of office this week?",
        prompt:
          "List every employee on time-off or sick leave between today and the end of the week.",
      },
      {
        title: "Engineers based in Barcelona",
        prompt:
          "Find all employees in Engineering whose office location is Barcelona.",
      },
    ],
  },
  {
    icon: Pencil,
    label: "Create",
    items: [
      {
        title: "Draft a Senior Backend job description",
        prompt:
          "Draft a job description for a Senior Backend Engineer focused on distributed systems.",
      },
      {
        title: "Compose an offboarding email template",
        prompt:
          "Compose an offboarding email template covering return-of-equipment steps and the HR exit form.",
      },
    ],
  },
]

const noop = () => {}

const buildClarifyingState = (
  overrides?: Partial<ClarifyingQuestionState>
): ClarifyingQuestionState => ({
  currentStep: {
    question: "Which time period should I look at?",
    options: [
      { id: "today", label: "Today" },
      { id: "week", label: "This week" },
      { id: "month", label: "This month" },
      { id: "quarter", label: "This quarter" },
    ],
    selectionMode: "single",
    optional: false,
    allowCustomAnswer: true,
    selectedOptionIds: [],
    customAnswerText: "",
    isCustomAnswerActive: false,
  },
  currentStepIndex: 0,
  totalSteps: 1,
  toggleOption: noop,
  confirm: noop,
  skip: noop,
  cancel: noop,
  back: noop,
  setCustomAnswerText: noop,
  setCustomAnswerActive: noop,
  activateCustomAnswer: noop,
  ...overrides,
})

type WrapperProps = {
  placeholders?: string[]
  fileAttachments?: AiChatFileAttachmentConfig
  onTranscribe?: TranscribeFn
  searchPersons?: (query: string) => Promise<PersonProfile[]>
  initialPendingContext?: PendingContext | null
  initialPendingQuote?: PendingQuote | null
  clarifyingQuestion?: ClarifyingQuestionState | null
  creditWarning?: AiChatCreditWarning
  disclaimer?: AiChatDisclaimer
  footer?: React.ReactNode
  welcomeScreenSuggestions?: WelcomeScreenSuggestion[]
  welcomeScreenCards?: F0AiChatWelcomeCard[]
  isWelcomeScreen?: boolean
  fullscreen?: boolean
  inProgress?: boolean
  toolbarStart?: React.ReactNode
}

const Wrapper = ({
  placeholders,
  fileAttachments,
  onTranscribe,
  searchPersons,
  initialPendingContext = null,
  initialPendingQuote = null,
  clarifyingQuestion = null,
  creditWarning,
  disclaimer,
  footer,
  welcomeScreenSuggestions,
  welcomeScreenCards,
  isWelcomeScreen,
  fullscreen,
  inProgress,
  toolbarStart,
}: WrapperProps) => {
  const [pendingContext, setPendingContext] = useState<PendingContext | null>(
    initialPendingContext
  )
  const [pendingQuote, setPendingQuote] = useState<PendingQuote | null>(
    initialPendingQuote
  )
  const [submissions, setSubmissions] = useState<
    F0AiChatTextAreaSubmitPayload[]
  >([])

  const handleSubmit = async (payload: F0AiChatTextAreaSubmitPayload) => {
    setSubmissions((prev) => [...prev, payload])
  }

  const composerRef = useRef<HTMLDivElement>(null)

  // Welcome cards now carry their own `onClick`. Branch on each card's data:
  // message-bearing cards (e.g. "Empty survey") send their prompt; message-less
  // cards (e.g. "Templates") do something other than send a prompt.
  const cardsWithBehavior = welcomeScreenCards?.map((card) => {
    const { id, message } = card
    return {
      ...card,
      onClick: () => {
        if (message) {
          setSubmissions((prev) => [
            ...prev,
            { text: message, files: [], context: null, quote: null },
          ])
        } else {
          console.log(`card clicked: ${id}`)
        }
      },
    }
  })

  return (
    <div className="flex flex-col gap-4 w-[640px]">
      <F0AiChatTextArea
        ref={composerRef}
        onSubmit={handleSubmit}
        onStop={() => console.log("stop")}
        inProgress={inProgress}
        placeholders={placeholders}
        creditWarning={creditWarning}
        clarifyingUI={
          clarifyingQuestion ? (
            <F0ClarifyingPanel clarifyingQuestion={clarifyingQuestion} />
          ) : undefined
        }
        pendingContext={pendingContext}
        onPendingContextChange={setPendingContext}
        pendingQuote={pendingQuote}
        onPendingQuoteChange={setPendingQuote}
        fileAttachments={fileAttachments}
        toolbarStart={toolbarStart}
        onTranscribe={onTranscribe}
        searchPersons={searchPersons}
        disclaimer={disclaimer}
        footer={footer}
        welcomeScreenSuggestions={welcomeScreenSuggestions}
        onSuggestionClick={(item) => {
          // Suggestions always send a prompt (item.prompt, falling back to its
          // title) — unlike cards, the host doesn't branch on behavior.
          const text = item.prompt ?? item.title
          setSubmissions((prev) => [
            ...prev,
            { text, files: [], context: null, quote: null },
          ])
        }}
        welcomeScreenCards={cardsWithBehavior}
        isWelcomeScreen={isWelcomeScreen}
        fullscreen={fullscreen}
      />
      {submissions.length > 0 && (
        <div className="rounded-md border border-f1-border p-3 text-sm">
          <div className="font-medium pb-2">Last submission</div>
          <pre className="text-xs whitespace-pre-wrap">
            {JSON.stringify(submissions[submissions.length - 1], null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}

const meta = {
  title: "AI/F0AiChatTextArea",
  component: Wrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Wrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

// Interactive story to inspect the textarea ↔ clarifying panel transition.
// Click "Trigger clarifying mode" to see the swap animation.
export const TransitionDemo: Story = {
  render: () => {
    const ref = useRef<HTMLDivElement>(null)
    const [clarifyingQuestion, setClarifyingQuestion] =
      useState<ClarifyingQuestionState | null>(null)

    const toggle = () => {
      setClarifyingQuestion((prev) => (prev ? null : buildClarifyingState()))
    }

    return (
      <div className="flex flex-col gap-4 w-[640px]">
        <button
          onClick={toggle}
          className="self-start rounded border border-f1-border bg-f1-background px-3 py-1.5 text-sm font-medium text-f1-foreground hover:bg-f1-background-hover transition-colors"
        >
          {clarifyingQuestion
            ? "← Volver al textarea"
            : "Trigger clarifying mode →"}
        </button>

        <F0AiChatTextArea
          ref={ref}
          onSubmit={() => {}}
          onStop={() => {}}
          disclaimer={DISCLAIMER}
          clarifyingUI={
            clarifyingQuestion ? (
              <F0ClarifyingPanel clarifyingQuestion={clarifyingQuestion} />
            ) : undefined
          }
        />
      </div>
    )
  },
}

export const WithRotatingPlaceholders: Story = {
  args: {
    placeholders: ROTATING_PLACEHOLDERS,
  },
}

export const WithDisclaimer: Story = {
  args: {
    disclaimer: DISCLAIMER,
  },
}

export const WithFooter: Story = {
  args: {
    isWelcomeScreen: true,
    fullscreen: true,
    footer: (
      <p className="text-sm font-medium text-f1-foreground-tertiary text-center">
        Powered by Factorial AI · v0.1.0
      </p>
    ),
  },
}

export const WithDisclaimerAndFooter: Story = {
  args: {
    disclaimer: DISCLAIMER,
    isWelcomeScreen: true,
    footer: (
      <p className="text-sm font-medium text-f1-foreground-tertiary text-center">
        Powered by Factorial AI · v0.1.0
      </p>
    ),
  },
}

export const FullscreenWelcome: Story = {
  args: {
    disclaimer: DISCLAIMER,
    isWelcomeScreen: true,
    fullscreen: true,
    footer: (
      <p className="text-sm font-medium text-f1-foreground-tertiary text-center">
        Powered by Factorial AI · v0.1.0
      </p>
    ),
  },
}

export const WithWelcomeCards: Story = {
  args: {
    isWelcomeScreen: true,
    fullscreen: true,
    welcomeScreenCards: WELCOME_CARDS,
    disclaimer: DISCLAIMER,
  },
}

export const WithWelcomeSuggestions: Story = {
  args: {
    isWelcomeScreen: true,
    fullscreen: true,
    welcomeScreenSuggestions: WELCOME_SUGGESTIONS,
    disclaimer: DISCLAIMER,
  },
  play: async ({ canvasElement, step }) => {
    const page = within(canvasElement.closest("body")!)

    await step("Open the first suggestion group", async () => {
      const analyzeTrigger = page.getByRole("button", { name: "Analyze" })
      await userEvent.click(analyzeTrigger)
      const dialog = page.getByRole("dialog", { name: "Analyze" })

      await expect(analyzeTrigger).toHaveAttribute("aria-expanded", "true")
      await expect(analyzeTrigger).toHaveAttribute("aria-controls", dialog.id)
      await expect(
        page.getByRole("button", {
          name: "April leave and overtime summary",
        })
      ).toBeInTheDocument()
    })

    await step("Switch to the third suggestion group", async () => {
      const createTrigger = page.getByRole("button", { name: "Create" })
      await userEvent.click(createTrigger)
      const dialog = page.getByRole("dialog", { name: "Create" })

      await expect(createTrigger).toHaveAttribute("aria-expanded", "true")
      await expect(createTrigger).toHaveAttribute("aria-controls", dialog.id)
      await expect(
        page.getByRole("button", {
          name: "Draft a Senior Backend job description",
        })
      ).toBeInTheDocument()
      await expect(
        page.queryByRole("button", {
          name: "April leave and overtime summary",
        })
      ).not.toBeInTheDocument()
    })
  },
}

export const InProgress: Story = {
  args: {
    inProgress: true,
  },
}

export const WithCreditWarning: Story = {
  args: {
    creditWarning: CREDIT_WARNING,
  },
}

export const WithPendingContext: Story = {
  args: {
    initialPendingContext: PENDING_CONTEXT,
  },
}

export const WithPendingQuote: Story = {
  args: {
    initialPendingQuote: PENDING_QUOTE,
  },
}

export const WithFileAttachments: Story = {
  args: {
    fileAttachments: FILE_UPLOAD_CONFIG,
  },
}

export const WithToolbarStart: Story = {
  args: {
    fileAttachments: FILE_UPLOAD_CONFIG,
    toolbarStart: (
      <F0SegmentedControl
        ariaLabel="Analytics mode"
        items={[
          { value: "chat", label: "Chat" },
          { value: "analytics", label: "Analytics" },
        ]}
      />
    ),
  },
}

export const WithMentions: Story = {
  args: {
    searchPersons: mockSearchPersons,
  },
}

export const WithVoiceDictation: Story = {
  args: {
    onTranscribe: mockTranscribe,
    placeholders: ["Tap the mic and start talking…"],
  },
}

export const Clarifying: Story = {
  args: {
    clarifyingQuestion: buildClarifyingState(),
    disclaimer: DISCLAIMER,
  },
}

export const ClarifyingMultiSelect: Story = {
  args: {
    clarifyingQuestion: buildClarifyingState({
      currentStep: {
        question: "Which departments should I include?",
        options: [
          { id: "eng", label: "Engineering" },
          { id: "sales", label: "Sales" },
          { id: "marketing", label: "Marketing" },
          { id: "hr", label: "HR" },
          { id: "ops", label: "Operations" },
        ],
        selectionMode: "multiple",
        optional: true,
        allowCustomAnswer: false,
        selectedOptionIds: ["eng", "sales"],
        customAnswerText: "",
        isCustomAnswerActive: false,
      },
      currentStepIndex: 1,
      totalSteps: 3,
    }),
  },
}

export const Everything: Story = {
  args: {
    placeholders: ROTATING_PLACEHOLDERS,
    fileAttachments: FILE_UPLOAD_CONFIG,
    onTranscribe: mockTranscribe,
    searchPersons: mockSearchPersons,
    creditWarning: CREDIT_WARNING,
    disclaimer: DISCLAIMER,
    initialPendingContext: PENDING_CONTEXT,
    initialPendingQuote: PENDING_QUOTE,
  },
}
