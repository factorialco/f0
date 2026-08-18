import type { Meta, StoryObj } from "@storybook/react-vite"

import type { ReactNode } from "react"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { InfoHint, type InfoHintContent } from "../InfoHint"

/**
 * The copy a data catalog would hold for one measure: what the figure counts,
 * plus a way through to the entry it was taken from.
 */
const activeHeadcount: InfoHintContent = {
  title: "Active headcount",
  description:
    "Distinct employees with an active contract on the selected date.",
  link: { label: "Learn more", onClick: fn() },
}

const averageSalary: InfoHintContent = {
  title: "Average base salary",
  description:
    "Mean annual gross base salary across the employees in scope, before bonuses.",
}

/**
 * The ⓘ never stands on its own — it sits after the label it explains, which is
 * also where its accessible name comes from when the content declares none.
 */
const Labelled = ({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) => (
  <div className="flex items-center gap-1">
    <span className="font-medium text-f1-foreground">{label}</span>
    {children}
  </div>
)

const REVEAL_TIMEOUT = 5000

/**
 * Reveal the card by focusing its trigger — the keyboard path, and the only one
 * a play function can drive: the synthetic pointer events `userEvent.hover`
 * emits never reach Radix's `pointerenter` handler in a real browser, so the
 * card stays closed. The hover path is covered in jsdom by `TableHead.test.tsx`.
 */
const reveal = async (trigger: HTMLElement) => {
  trigger.focus()
  // The card waits 300ms before opening, and a browser that is not the focused
  // window throttles that timer — so wait well past it rather than race it.
  await waitFor(() => expect(trigger).toHaveAttribute("data-state", "open"), {
    timeout: REVEAL_TIMEOUT,
  })
}

/**
 * Assert the copy landed. Presence, not visibility: Radix keeps the popper
 * hidden until it has measured a position, and a browser window without focus
 * can sit in that state indefinitely — `reveal` already proved the card opened.
 */
const shows = async (node: () => HTMLElement) =>
  waitFor(() => expect(node()).toBeInTheDocument(), { timeout: REVEAL_TIMEOUT })

const meta = {
  title: "InfoHint",
  component: InfoHint,
  tags: ["internal", "!autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "The ⓘ affordance that reveals help copy for the thing it sits next to — a table column header, a dashboard widget title — so a measure reads the same wherever it appears.",
          "A plain string renders a non-interactive tooltip. An <code>InfoHintContent</code> object renders a hover card that can carry a link action, for what the description implies but cannot do: opening the catalog entry the copy came from.",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  args: {
    info: activeHeadcount,
  },
} satisfies Meta<typeof InfoHint>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Structured content with a link action. Hover or focus reveals the card;
 * taking the link dismisses it, because reading help is not a state you stay
 * in.
 */
export const Default: Story = {
  render: (args) => (
    <Labelled label="Headcount by department">
      <InfoHint {...args} />
    </Labelled>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    // The card is portalled outside the story canvas, so query the document.
    const page = within(canvasElement.closest("body")!)
    const trigger = canvas.getByRole("button", { name: "More information" })

    await step("The ⓘ is the label's first tab stop", async () => {
      await userEvent.tab()
      await expect(trigger).toHaveFocus()
    })

    await step("Revealing it shows title, description and link", async () => {
      await reveal(trigger)

      await shows(() => page.getByText("Active headcount"))
      await shows(() =>
        page.getByText(
          "Distinct employees with an active contract on the selected date."
        )
      )
      await shows(() => page.getByRole("button", { name: "Learn more" }))
    })
  },
}

/**
 * `link` is optional. Without it the card is pure copy — the shape a measure
 * takes when there is no catalog entry to send the reader to.
 */
export const DescriptionOnly: Story = {
  args: { info: averageSalary },
  render: (args) => (
    <Labelled label="Avg. salary">
      <InfoHint {...args} />
    </Labelled>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const page = within(canvasElement.closest("body")!)

    await reveal(canvas.getByRole("button", { name: "More information" }))

    await shows(() => page.getByText("Average base salary"))
    await expect(
      page.queryByRole("button", { name: "Learn more" })
    ).not.toBeInTheDocument()
  },
}

/**
 * A plain string takes the non-interactive tooltip path — the shorter form a
 * column header uses when the help is one sentence and leads nowhere. There is
 * nothing to press, so the trigger stays a focusable icon rather than a button.
 */
export const PlainText: Story = {
  args: { info: "Gross annual salary, before bonuses." },
  render: (args) => (
    <Labelled label="Salary">
      <InfoHint {...args} />
    </Labelled>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.queryByRole("button")).not.toBeInTheDocument()
    await userEvent.tab()
    await expect(canvasElement.querySelector('[tabindex="0"]')).toHaveFocus()
  },
}

/**
 * A trigger named after the heading beside it ("Headcount by department,
 * button") announces a duplicate and never says what it does. Hosts with a
 * better name pass `label`; content can override it with `info.label`.
 */
export const NamedTrigger: Story = {
  args: {
    info: { ...activeHeadcount, label: "About active headcount" },
  },
  render: (args) => (
    <Labelled label="Headcount by department">
      <InfoHint {...args} />
    </Labelled>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(
      canvas.getByRole("button", { name: "About active headcount" })
    ).toBeInTheDocument()
    await expect(
      canvas.queryByRole("button", { name: "More information" })
    ).not.toBeInTheDocument()
  },
}

/**
 * One capture for Chromatic: both forms at rest, and a card open — the state
 * that carries the copy and is invisible in a static render.
 */
export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <Labelled label="Salary">
        <InfoHint info="Gross annual salary, before bonuses." />
      </Labelled>
      <Labelled label="Avg. salary">
        <InfoHint info={averageSalary} label="About average salary" />
      </Labelled>
      <Labelled label="Headcount by department">
        <InfoHint info={activeHeadcount} label="About headcount" />
      </Labelled>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const page = within(canvasElement.closest("body")!)

    await reveal(canvas.getByRole("button", { name: "About headcount" }))

    await shows(() => page.getByText("Active headcount"))
  },
}
