import { Meta, StoryObj } from "@storybook/react-vite"
import { useRef, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"

import { F0AiChatTextArea } from "../F0AiChatTextArea"
import type {
  F0AiChatTextAreaHandle,
  F0AiChatTextAreaSubmitPayload,
} from "../types"

import { mockTranscribe } from "@/lib/storybook-utils/ai-mocks"

import { F0ClarifyingPanel } from "../../F0ClarifyingPanel"
import type { ClarifyingQuestionState } from "../../F0ClarifyingPanel/types"
import type {
  AiChatCreditWarning,
  AiChatDisclaimer,
  AiChatFileAttachmentConfig,
  PendingContext,
  PendingQuote,
  PersonProfile,
  TranscribeFn,
  UploadedFile,
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
  isWelcomeScreen?: boolean
  fullscreen?: boolean
  inProgress?: boolean
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
  isWelcomeScreen,
  fullscreen,
  inProgress,
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
        onTranscribe={onTranscribe}
        searchPersons={searchPersons}
        disclaimer={disclaimer}
        footer={footer}
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

/**
 * External-control usage. `showSubmitButton={false}` hides the built-in button and
 * external buttons drive the composer through `apiRef`: `setContent()` populates
 * the textarea and `submit()` runs the full send pipeline. `onChange`
 * mirrors the content into host state, so the external Send button stays
 * disabled until something is typed. Enter still submits.
 */
export const ExternalControls: Story = {
  render: () => {
    const apiRef = useRef<F0AiChatTextAreaHandle>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [value, setValue] = useState("")
    const [submissions, setSubmissions] = useState<
      F0AiChatTextAreaSubmitPayload[]
    >([])

    return (
      <div className="flex w-[640px] flex-col gap-4">
        <div className="flex gap-2">
          <ButtonInternal
            label="Populate (setContent)"
            type="button"
            variant="outline"
            onClick={() => {
              apiRef.current?.setContent("Draft my weekly update")
              apiRef.current?.focus()
            }}
          />
          <ButtonInternal
            label="Submit (submit)"
            type="button"
            variant="default"
            // Reacts to `onChange`: disabled while the textarea is empty.
            disabled={value.trim().length === 0}
            onClick={() => apiRef.current?.submit()}
          />
        </div>
        <F0AiChatTextArea
          ref={containerRef}
          apiRef={apiRef}
          showSubmitButton={false}
          onChange={setValue}
          placeholders={ROTATING_PLACEHOLDERS}
          onSubmit={(payload) => setSubmissions((prev) => [...prev, payload])}
        />
        {submissions.length > 0 && (
          <div className="rounded-md border border-f1-border p-3 text-sm">
            <div className="pb-2 font-medium">Last submission</div>
            <pre className="whitespace-pre-wrap text-xs">
              {JSON.stringify(submissions[submissions.length - 1], null, 2)}
            </pre>
          </div>
        )}
      </div>
    )
  },
}
