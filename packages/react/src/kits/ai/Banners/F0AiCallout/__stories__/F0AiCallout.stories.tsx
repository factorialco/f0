import type { Meta, StoryFn, StoryObj } from "@storybook/react-vite"
import { Summary } from "@/icons/ai"
import { F0AiCallout } from ".."
import { aiCalloutStatuses, type F0AiCalloutProps } from "../types"

const meta = {
  title: "AI/F0AiCallout",
  component: F0AiCallout,
  // `!autodocs` is required, not optional: this repo enables autodocs globally
  // in `.storybook/preview.tsx`, so dropping the tag from meta would leave the
  // generated page competing with the hand-written MDX.
  // `experimental` is declared rather than inferred: untagged already reads as
  // experimental in the sidebar, but the status API reports it as `unknown`.
  tags: ["!autodocs", "experimental"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "Shows what One found about the record on screen, and what it needs from the reader.",
          "",
          "`status` carries the force, from `neutral` (reports) to `critical` (you must act), and it has no",
          "default — defaulting a blocking finding to a mild status is the one mistake that survives review,",
          "because the callout still looks correct. The byline is not a choice for the same reason in reverse:",
          "a callout that cannot say where it came from is an alert, and `F0Alert` already does that job.",
        ].join("\n"),
      },
    },
  },
  // Every prop is declared here, and that is not busywork: the props come from
  // a discriminated union, which react-docgen does not walk, so without this
  // both the docs table and the Controls panel resolve 5 of the 13 and show no
  // descriptions. Declaring them is what makes the generated table complete
  // *and* interactive — which is why the MDX renders <Controls> and no
  // hand-written table.
  //
  // `type.required` is set by hand for the same reason: docgen cannot tell
  // which branch of the union a prop belongs to, so nothing else marks the
  // three that are always required.
  argTypes: {
    status: {
      control: "select",
      options: aiCalloutStatuses,
      type: { name: "string", required: true },
      description:
        "How much the callout asks of the reader. No default: a blocking finding sent as `info` still looks correct.",
    },
    title: {
      control: "text",
      type: { name: "string", required: true },
      description:
        "The verdict, or what a list of findings adds up to. The only text in the tinted zone, and always about the record.",
    },
    summary: {
      control: "text",
      description:
        "The reason, in one line — the white card's title. `title` plus this must stand alone as a decision.",
    },
    children: {
      control: "text",
      type: { name: "string", required: true },
      description:
        "The nuance that changes what the reader does. Not available with `findings`.",
    },
    icon: {
      control: false,
      description:
        "Overrides the glyph the status picks. Required for `neutral`, which has none of its own.",
    },
    action: {
      control: false,
      description:
        "The move the verdict recommends, outlined. Optional — `info` with no action is a normal shape.",
    },
    secondaryAction: {
      control: false,
      description:
        "The way out of the recommendation, ghost. Must be the override, never a third path.",
    },
    evidence: {
      control: false,
      description:
        'What the disclosure holds: `{ label, items, kind }`. `kind: "rationale"` bullets the reasoning, `"steps"` numbers a plan.',
    },
    findings: {
      control: false,
      description:
        "Switches to the stacked layout: several addressable issues, each with its own action. Folds into a deck.",
    },
    defaultOpen: {
      control: "boolean",
      description:
        "Initial fold state. Defaults to open for `findings` and folded for `evidence` — the two fold in opposite directions.",
    },
    open: {
      control: false,
      description: "Controlled fold state. Pair with `onOpenChange`.",
    },
    onOpenChange: { control: false, description: "Fires on fold and unfold." },
    onClose: {
      control: false,
      description:
        "Dismisses the callout. Acts on the container, so it lives in the header. Not available with `findings`.",
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[32rem]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0AiCallout>

export default meta

type Story = StoryObj<F0AiCalloutProps>

export const Default: Story = {
  args: {
    status: "critical",
    title: "Not reimbursable",
    summary: "Gift cards are never allowed, whatever the amount",
    children:
      "The receipt also appears to be AI-generated, so the amount itself is unverified.",
    action: {
      label: "Request repayment",
      onClick: () => {},
    },
    onClose: () => {},
  },
}

/**
 * The five statuses are degrees of force, not flavours of one message — so each
 * one is paired here with copy that actually fits it.
 *
 * The pairing follows one rule: a status that takes a stance needs an
 * copy that admits to judging, and
 * `neutral` needs one that only reports (`generated`, `extracted`, `automated`).
 * A summary that claims to be a suggestion is asking for a decision nobody made.
 *
 */
export const Statuses: Story = {
  parameters: { docs: { story: { inline: true } } },
  render: () => (
    <div className="flex flex-col gap-4">
      <F0AiCallout
        status="neutral"
        title="Summary"
        icon={Summary}
        onClose={() => {}}
      >
        MacBook Pro MB-0472 repeatedly dropped from disk-encryption policy,
        causing compliance and security risk for the user. The issue was flagged
        as urgent and now shows as complete, so it is resolved.
      </F0AiCallout>

      <F0AiCallout
        status="info"
        title="Two attendees missing from the record"
        action={{ label: "Add attendees", onClick: () => {} }}
        onClose={() => {}}
      >
        {/* Preflight is disabled in this repo, so a bare `ul` renders with no
            bullets and no indent — both have to be asked for explicitly. */}
        <ul className="m-0 flex list-disc flex-col gap-1 pl-4">
          <li>
            The client lunch for 6 attendees cost $712.65, comfortably under the
            $900 domestic limit.
          </li>
          <li>Receipt has been auto-verified.</li>
        </ul>
      </F0AiCallout>

      <F0AiCallout
        status="positive"
        title="Approval recommended"
        action={{ label: "Approve", onClick: () => {} }}
        onClose={() => {}}
      >
        The client lunch for 6 attendees cost $712.65, comfortably under the
        $900 domestic limit set by the $150-per-person domestic cap. Receipt has
        been auto-verified.
      </F0AiCallout>

      <F0AiCallout
        status="warning"
        title="Requires review"
        action={{ label: "Review", onClick: () => {} }}
        onClose={() => {}}
      >
        <ul className="m-0 flex list-disc flex-col gap-1 pl-4">
          <li>
            The transaction amount exceeds the $50 meal allowance for a single
            employee by $225.76.
          </li>
          <li>
            The presence of 4 guests on the receipt may justify the total if
            relevant attendees are added.
          </li>
        </ul>
      </F0AiCallout>

      <F0AiCallout
        status="critical"
        title="Not reimbursable"
        action={{ label: "Request repayment", onClick: () => {} }}
        onClose={() => {}}
      >
        Gift cards are explicitly listed as never allowed, which requires
        repayment regardless of amount or context. The receipt appears to be
        AI-generated.
      </F0AiCallout>
    </div>
  ),
}

/**
 */
export const Narrow: Story = {
  decorators: [
    (Story: StoryFn) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
  args: {
    status: "critical",
    title: "Gift cards are never allowed under this policy",
    children: "The receipt appears to be AI-generated.",
    action: { label: "Request repayment", onClick: () => {} },
    onClose: () => {},
  },
}

/**
 * An automation that finished and needs nothing decided. It is **not** a stacked
 * callout — `findings` promises a CTA per row and here there are none — it is
 * the rationale shape, with each piece of content in the slot that fits it.
 *
 * `title` carries the outcome, not the activity: "5 invoices linked", never
 * "One found 5 invoices in your Gmail and Teams". `summary` carries why nothing
 * is needed, which is the sentence that would otherwise end up buried at the
 * bottom of the description. The five results go in `evidence`, because they
 * are what you check if you want to rather than the message itself — which
 * also retires the hand-written "and 2 more on this order", since all five fit
 * behind the disclosure.
 *
 * `info` and not `neutral`: there is an action, and `neutral` means there is
 * nothing to do. That decides it without anyone having to judge whether linking
 * five invoices is newsworthy, and it is why no borrowed content icon appears
 * here — `info` brings its own glyph.
 *
 */
/**
 * The base shape: a verdict, the reason under it, and the facts under that.
 * Nothing folds, so nothing is hidden — reach for `evidence` only when there is
 * reasoning worth checking, not to shorten a body that is already short.
 *
 * `positive` because nothing is wrong and One's read is favourable. There is
 * still something to do, which is what separates it from `neutral`.
 */
export const Verdict: Story = {
  args: {
    status: "positive",
    title: "Approval recommended",
    summary: "All five policy checks passed",
    action: { label: "Approve", onClick: () => {} },
    children: (
      <>
        <strong>€48.20</strong> for a client lunch with two attendees, both on
        the record, and the receipt matches the amount.
      </>
    ),
  },
}

/**
 * **Several issues on one record, each resolvable on its own.** The list *is*
 * the work, so every row keeps its own action and the title is a roll-up of
 * what they add up to — not one of the issues.
 *
 * The byline moves up beside the title because the whole evaluation shares one
 * provenance. Fold it with the header toggle and the rows pile into a deck: the
 * front one stays readable and the rest are two slivers behind it, so the shape
 * still says "there are more" without spending the height.
 *
 */
export const Findings: Story = {
  args: {
    status: "critical",
    title: "Issues to resolve",
    findings: [
      {
        id: "duplicate",
        title: "Possible duplicate",
        description:
          "A similar invoice already exists for this vendor — paying both would double-pay.",
        action: { label: "Review", onClick: () => {} },
      },
      {
        id: "bank",
        title: "Bank details changed",
        description:
          "The vendor's bank account changed since the last paid invoice.",
        action: { label: "Verify", onClick: () => {} },
      },
      {
        id: "tax",
        title: "Tax mismatch",
        description: "The VAT does not match the expected rate.",
        action: { label: "Review", onClick: () => {} },
      },
    ],
  },
}

/**
 * **One recommendation, with the reasoning it rests on one click away.** The
 * title is the verdict, the body is short enough to read at a glance, and the
 * footer pair is one decision rather than two: `action` is the move the verdict
 * recommends and `secondaryAction` is the way out of it, never a third path.
 *
 * What the disclosure holds is the reasoning, and the rows have no action slot.
 * That absence is the contract: the day a policy check needs its own button it
 * has stopped being evidence and become a finding, and the callout should carry
 * `findings` instead.
 *
 * Folding here hides *reasoning*, not work, which is why there is no deck — and
 * why it starts folded, the opposite of the stacked default.
 *
 */
export const WithRationale: Story = {
  args: {
    status: "warning",
    title: "Rejection recommended",
    summary: "Two of five policy checks failed",
    action: { label: "Reject", onClick: () => {} },
    secondaryAction: { label: "Approve anyway", onClick: () => {} },
    onClose: () => {},
    evidence: {
      name: "the 5 checks",
      items: [
        <>
          Per-person cap exceeded: <strong>$178.16</strong> per attendee against
          a $150 domestic limit.
        </>,
        "Four guests on the receipt and none on the record — adding them would justify the total.",
        "Receipt verified against the attached document.",
        "Vendor is on the approved list.",
        "Currency matches the policy.",
      ],
    },
    children:
      "The meal is $225.76 over the allowance for a single employee, and the four guests on the receipt are not on the record.",
  },
}

export const ReportingCompletedWork: Story = {
  args: {
    status: "info",
    title: "5 invoices linked",
    summary: "Nothing left to decide — every line reconciles",
    action: { label: "See them on Linked documents", onClick: () => {} },
    evidence: {
      name: "the 5 invoices",
      items: [
        "INV-2026-0811 · €520.00 — found in Gmail, kulimannweyel.com",
        "INV-2026-0812 · €487.50 — found in Teams, Vendor invoices",
        "INV-2026-0813 · €455.00 — found in Gmail, kulimannweyel.com",
        "INV-2026-0814 · €1,320.00 — found in Gmail, kulimannweyel.com",
        "INV-2026-0815 · €1,242.50 — found in Teams, Vendor invoices",
      ],
    },
    children:
      "Every one quotes PO-00011. They are linked to this order, not approved and not paid.",
  },
}

/**
 * An assessment whose answer is several things to do: the plan goes behind the
 * disclosure, numbered, and the callout stays one message.
 *
 * `kind: "steps"` numbers instead of bulleting, because the order is part of
 * the content — you confirm the device before you order it. No checkboxes: the
 * record tracks per-item state better than a message can.
 *
 * The tinted title is about the record, so it is "Six steps to set up this
 * workstation" and not "One drafted a resolution plan", which spends it
 * re-announcing the byline right below.
 *
 * There is no action button, and `info` is still right: the status asks whether
 * the reader has work, not whether the callout can offer a click. Here the work
 * is six things across the Marketplace, IT and a conversation with HR.
 */
export const ResolutionPlanFlow: Story = {
  parameters: { docs: { story: { inline: true } } },
  decorators: [
    (Story: StoryFn) => (
      <div className="w-full max-w-[40rem]">
        <Story />
      </div>
    ),
  ],
  args: {
    status: "info",
    title: "Six steps to set up this workstation",
    summary: "No role details yet, so the device is the first thing to confirm",
    evidence: {
      name: "the six steps",
      kind: "steps",
      items: [
        "Confirm with HR whether the new joiner needs a laptop or other devices",
        "If a laptop is needed, order or rent one from the Marketplace",
        "Reserve and prepare a workspace — desk, chair and peripherals",
        "Coordinate with IT for system access permissions",
        "Communicate the setup status to the new joiner or HR",
        "Assign the ticket to an Operations team member",
      ],
    },
    children: (
      <>
        A first day setup for a new joiner still named{" "}
        <strong>No role picked</strong>, starting <strong>4 September</strong>.
        It needs a device, a workspace and system access.
      </>
    ),
  },
}

/**
 * A fork One cannot resolve: the invoice over-bills the order, and only a
 * person knows which of the two documents is wrong. **One action, and the
 * choice lives in a dialog.**
 *
 * The either/or is not the resolution, it is the routing — whichever document
 * is wrong, work follows: a credit note, an amended order. That work needs
 * room, a cancel and a confirm, which a dialog has and a callout does not. A
 * radio inside the body would also leave a selection on screen that has not
 * been submitted, and a message does not hold unsaved state.
 *
 * `secondaryAction` is not the answer either. That pair is "Reject" against
 * "Approve anyway", where One has a verdict and the ghost is the override;
 * here One has no verdict to override.
 *
 * The title names `PO-00011` because the verdict *is* the relationship between
 * two records, and drops the invoice's own id because that is the page the
 * reader is already on.
 */
export const MismatchWithOneAction: Story = {
  parameters: { docs: { story: { inline: true } } },
  decorators: [
    (Story: StoryFn) => (
      <div className="w-full max-w-[40rem]">
        <Story />
      </div>
    ),
  ],
  args: {
    status: "critical",
    title: "Billed €196.67 over PO-00011",
    summary: "Three lines disagree, and one is not on the order at all",
    action: { label: "Resolve the mismatch", onClick: () => {} },
    evidence: {
      name: "the 3 lines",
      items: [
        <>
          Aerial Mapping and Survey: <strong>3 units</strong> billed against the
          2 authorised — €116.67 over.
        </>,
        <>
          Data processing: <strong>€450.00</strong> billed against €400.00
          authorised.
        </>,
        <>
          Report delivery: <strong>€80.00</strong> billed, and the line is not
          on the order at all.
        </>,
      ],
    },
    children: "Nothing else on the invoice differs from the order.",
  },
}

export const Loading: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <F0AiCallout.Skeleton status="critical" />
      <F0AiCallout.Skeleton status="neutral" compact />
    </div>
  ),
}
