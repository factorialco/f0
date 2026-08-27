import type { Meta, StoryObj } from "@storybook/react-vite"
import { useRef, useState } from "react"
import { expect, userEvent, waitFor, within } from "storybook/test"

import { F0AiChatTextArea } from "../F0AiChatTextArea"
import type { F0AiChatTextAreaSubmitPayload } from "../types"

import { F0SegmentedControl } from "@/experimental/Actions/F0SegmentedControl"
import {
  Calendar,
  ChartVerticalBars,
  File,
  Marketplace,
  PalmTree,
  Pencil,
  Person,
  Receipt,
  Search,
  Upsell,
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
  getCreditsIcon: Upsell,
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

// Deliberately long titles so each item overflows the popover width and gets
// truncated — the case the hover marquee exists for.
const LONG_WELCOME_SUGGESTIONS: WelcomeScreenSuggestion[] = [
  {
    icon: ChartVerticalBars,
    label: "Analyze",
    items: [
      {
        title:
          "Break down all the leave taken and the overtime worked across every single department in the company during April",
        prompt:
          "Give me a breakdown of leave taken and overtime worked across the company in April, grouped by department.",
      },
      {
        title:
          "Show the current gross salary of every active employee across all offices, sorted from the highest to the lowest",
        prompt:
          "List the current gross salary of every active employee, sorted from highest to lowest.",
      },
    ],
  },
  {
    icon: Pencil,
    label: "Create",
    items: [
      {
        title:
          "Draft a detailed Senior Backend Engineer job description focused on large-scale distributed systems and reliability",
        prompt:
          "Draft a job description for a Senior Backend Engineer focused on distributed systems.",
      },
    ],
  },
]

// More groups than the field can show at once — the case the `inside` row's
// sideways scroll and faded ends exist for. The items are deliberately thin:
// what this fixture is testing is the ROW, not the panels.
const MANY_WELCOME_SUGGESTIONS: WelcomeScreenSuggestion[] = [
  ...WELCOME_SUGGESTIONS,
  {
    icon: PalmTree,
    label: "Time off",
    items: [
      { title: "Request time off", prompt: "Request time off for next week." },
      { title: "My remaining leave", prompt: "How much leave do I have left?" },
    ],
  },
  {
    icon: Receipt,
    label: "Expenses",
    items: [
      { title: "Submit an expense", prompt: "Submit a new expense report." },
      { title: "Pending reimbursements", prompt: "What am I owed?" },
    ],
  },
  {
    icon: Calendar,
    label: "Schedule",
    items: [
      { title: "Book a meeting room", prompt: "Book a room for tomorrow." },
      { title: "My shifts this week", prompt: "Show my shifts this week." },
    ],
  },
  {
    icon: File,
    label: "Documents",
    items: [
      { title: "My last payslip", prompt: "Open my most recent payslip." },
      { title: "My contract", prompt: "Show my current contract." },
    ],
  },
  {
    icon: Person,
    label: "My team",
    items: [
      { title: "Who reports to me?", prompt: "List my direct reports." },
      { title: "Team headcount", prompt: "What is my team's headcount?" },
    ],
  },
  {
    icon: Settings,
    label: "Settings",
    items: [
      { title: "Change my language", prompt: "Change my language to Spanish." },
      { title: "Notification preferences", prompt: "Open my notifications." },
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
  welcomeScreenSuggestionsPlacement?: "above" | "inside"
  welcomeScreenSuggestionsCollapsedByDefault?: boolean
  welcomeScreenCards?: F0AiChatWelcomeCard[]
  isWelcomeScreen?: boolean
  fullscreen?: boolean
  inProgress?: boolean
  toolbarStart?: React.ReactNode
  padding?: "default" | "none"
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
  welcomeScreenSuggestionsPlacement,
  welcomeScreenSuggestionsCollapsedByDefault,
  welcomeScreenCards,
  isWelcomeScreen,
  fullscreen,
  inProgress,
  toolbarStart,
  padding,
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
        welcomeScreenSuggestionsPlacement={welcomeScreenSuggestionsPlacement}
        welcomeScreenSuggestionsCollapsedByDefault={
          welcomeScreenSuggestionsCollapsedByDefault
        }
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
        padding={padding}
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

// The composer with no inset of its own, for hosts that already own the
// spacing (a home hero, a card). The dashed frame stands in for that host:
// note the field now runs edge to edge, and the focus glow needs the host to
// leave it a few pixels of room and not clip overflow.
export const NoPadding: Story = {
  args: {
    padding: "none",
  },
  decorators: [
    (Story) => (
      <div className="rounded-md border border-dashed border-f1-border p-6">
        <Story />
      </div>
    ),
  ],
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

// `welcomeScreenSuggestionsPlacement: "inside"` — the suggestions move INTO the
// field and take the middle of its ACTION row, between the attachment/host
// controls and the dictation · send pair. That is what keeps the field two bands
// tall (text, then one row of controls) instead of three, and it is the home-page
// "ask" bar shape.
// Note there is no `fullscreen`: this placement doesn't need the welcome screen's
// vertical room, because it isn't claiming any space above the field.
export const WithWelcomeSuggestionsInside: Story = {
  args: {
    isWelcomeScreen: true,
    welcomeScreenSuggestions: WELCOME_SUGGESTIONS,
    welcomeScreenSuggestionsPlacement: "inside",
    placeholders: ROTATING_PLACEHOLDERS,
    fileAttachments: FILE_UPLOAD_CONFIG,
    onTranscribe: mockTranscribe,
    disclaimer: DISCLAIMER,
  },
  play: async ({ canvasElement, step }) => {
    const page = within(canvasElement.closest("body")!)

    await step("The chips sit inside the field, above its bottom edge", () => {
      const textarea = canvasElement.querySelector(
        'textarea[name="one-ai-input"]'
      )!
      const trigger = page.getByRole("button", { name: "Analyze" })
      const form = textarea.closest("form")!

      // Inside the form → enclosed by the field's border and focus highlight.
      expect(form.contains(trigger)).toBe(true)
      // …and after the textarea, so it reads as the field's foot.
      expect(
        textarea.compareDocumentPosition(trigger) &
          Node.DOCUMENT_POSITION_FOLLOWING
      ).toBeTruthy()
    })

    await step("The chips share the action row with every button", () => {
      const textarea = canvasElement.querySelector(
        'textarea[name="one-ai-input"]'
      )!
      // The text band: TextareaField's grid, then the row that holds it.
      const textBand = textarea.parentElement!.parentElement!
      const trigger = page.getByRole("button", { name: "Analyze" })
      const send = page.getByRole("button", { name: /send/i })
      const mic = page.getByRole("button", { name: /record/i })
      const row = trigger.closest("form > div > div")!

      // Chips, dictation and send are all one row — and none of them is in the
      // text band above it.
      for (const control of [trigger, mic, send]) {
        expect(row.contains(control)).toBe(true)
        expect(textBand.contains(control)).toBe(false)
      }
      // Dictation sits immediately before send.
      expect(mic.parentElement).toBe(send.parentElement)
      expect(
        mic.compareDocumentPosition(send) & Node.DOCUMENT_POSITION_FOLLOWING
      ).toBeTruthy()
    })

    await step("Picking a group opens its panel", async () => {
      await userEvent.click(page.getByRole("button", { name: "Analyze" }))
      await expect(
        page.getByRole("dialog", { name: "Analyze" })
      ).toBeInTheDocument()
      await expect(
        page.getByRole("button", { name: "April leave and overtime summary" })
      ).toBeInTheDocument()
    })
  },
}

// More groups than fit: the row keeps to ONE line and scrolls sideways, and the
// end that has chips hidden past it is faded — that fade is the only scroll
// affordance there is, since the scrollbar is hidden. Scroll to the end and the
// trailing fade goes away while the leading one appears. Ten groups cost the
// field exactly the height three do.
export const WithManyWelcomeSuggestionsInside: Story = {
  args: {
    isWelcomeScreen: true,
    welcomeScreenSuggestions: MANY_WELCOME_SUGGESTIONS,
    welcomeScreenSuggestionsPlacement: "inside",
    placeholders: ROTATING_PLACEHOLDERS,
    fileAttachments: FILE_UPLOAD_CONFIG,
    onTranscribe: mockTranscribe,
    disclaimer: DISCLAIMER,
  },
  play: async ({ canvasElement, step }) => {
    const page = within(canvasElement.closest("body")!)

    await step("The row scrolls instead of wrapping", async () => {
      const scroller = page.getByRole("button", {
        name: "Analyze",
      }).parentElement!

      // One line, and wider than the box showing it.
      expect(scroller.scrollWidth).toBeGreaterThan(scroller.clientWidth)
      // Which is what the fade is drawn from: only the end with something
      // hidden past it is masked, so at rest that is the trailing edge alone.
      //
      // AWAITED, because the mask is measured rather than declared: the first
      // read happens before the row has been laid out (a scroller that is 0px
      // wide overflows by nothing), and the honest answer arrives with the
      // ResizeObserver a frame later. Asserting straight after mount passed
      // locally and failed in CI, which is exactly the tell.
      await waitFor(() => {
        expect(scroller.style.maskImage).toContain("transparent 100%")
      })
      expect(scroller.style.maskImage).not.toContain("transparent 0")
    })

    await step("The last group is reachable by scrolling", async () => {
      const scroller = page.getByRole("button", {
        name: "Analyze",
      }).parentElement!

      scroller.scrollLeft = scroller.scrollWidth
      await userEvent.click(page.getByRole("button", { name: "Settings" }))
      await expect(
        page.getByRole("dialog", { name: "Settings" })
      ).toBeInTheDocument()
    })
  },
}

// `welcomeScreenSuggestionsCollapsedByDefault` — the bar is ONE LINE until it is
// addressed: One's mark, the placeholder, and send trailing the text. The whole
// control row is gone, not just the chips (a row emptied of its chips would still
// be 56px of padding around two buttons). Click or tab into the input and the row
// opens with everything in it — attachments, the starter prompts, dictation, and
// send back among its peers at `md`.
//
// It stays open: every way of picking a chip takes focus off the input, so a row
// that closed on blur would close on its way to being used.
export const WithCollapsedWelcomeSuggestions: Story = {
  args: {
    isWelcomeScreen: true,
    welcomeScreenSuggestions: MANY_WELCOME_SUGGESTIONS,
    welcomeScreenSuggestionsPlacement: "inside",
    welcomeScreenSuggestionsCollapsedByDefault: true,
    placeholders: ROTATING_PLACEHOLDERS,
    fileAttachments: FILE_UPLOAD_CONFIG,
    onTranscribe: mockTranscribe,
    disclaimer: DISCLAIMER,
  },
  play: async ({ canvasElement, step }) => {
    const page = within(canvasElement.closest("body")!)
    const textarea = canvasElement.querySelector<HTMLTextAreaElement>(
      'textarea[name="one-ai-input"]'
    )!

    await step("Collapsed: one line, dictation and send trailing it", () => {
      // Unmounted rather than hidden: controls behind a zero height would still
      // be in the tab order.
      for (const name of [/analyze/i, /attach/i]) {
        expect(page.queryByRole("button", { name })).not.toBeInTheDocument()
      }
      // Two controls come along: send (a bar you cannot send from is not a
      // composer) and dictation (talking is a way to start a prompt without
      // typing one). Both on the textarea's own line.
      const textBand = textarea.parentElement!.parentElement!
      for (const name of [/send/i, /record/i]) {
        expect(textBand.contains(page.getByRole("button", { name }))).toBe(true)
      }
      // …and the bar does not steal focus to open itself.
      expect(textarea).not.toHaveFocus()
    })

    // NOTHING IS CLICKED HERE, on purpose. A play function runs as soon as the
    // story opens, so a step that focused the input to show the reveal would
    // leave this story permanently open — the one state it exists to show would
    // be the one you can never see. Click the field yourself to watch it open;
    // that the focus opens the row, that the row holds every control, and that it
    // stays open on blur are asserted in
    // `__tests__/F0AiChatTextArea.suggestionsInside.test.tsx`.
  },
}

// Long suggestion titles are truncated with an ellipsis; hovering (or focusing)
// an item holds briefly and then reveals the hidden tail with a one-way marquee
// — the label scrolls left just far enough to show the end, fading the leading
// edge, and snaps back instantly on leave. Honours `prefers-reduced-motion`.
export const WithLongWelcomeSuggestions: Story = {
  args: {
    isWelcomeScreen: true,
    fullscreen: true,
    welcomeScreenSuggestions: LONG_WELCOME_SUGGESTIONS,
    disclaimer: DISCLAIMER,
  },
  play: async ({ canvasElement, step }) => {
    const page = within(canvasElement.closest("body")!)
    const longTitle = LONG_WELCOME_SUGGESTIONS[0].items[0].title

    await step("Open a group and hover a truncated item", async () => {
      await userEvent.click(page.getByRole("button", { name: "Analyze" }))

      const item = await page.findByRole("button", { name: longTitle })
      // The full title is the accessible name even though it renders truncated.
      await expect(item).toBeInTheDocument()

      // Hovering starts the marquee reveal (visible in the browser; nothing to
      // assert on the transform here, which would be timing-dependent).
      await userEvent.hover(item)
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
