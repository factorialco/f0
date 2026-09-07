import { StoryFn, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"
import { CheckDouble, ExternalLink } from "@/icons/app"
import { WithDataTestIdProps } from "@/lib/data-testid"
import { CalloutSkeleton } from "./CalloutInternal"
import { F0Callout, F0CalloutProps } from "."

const meta = {
  title: "AI/AICallout (deprecated)",
  component: F0Callout,
  // The tag is what the sidebar badge and the component-status API read; the
  // title suffix alone marks nothing.
  tags: ["deprecated"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "**Deprecated — use `F0AiCallout`.** Same construction, brought in line with the design.",
          "",
          "This one leaves `critical` with no glyph and an uncoloured title, so the strongest status",
          "is the only one that is not signalled, and its `ai` variant stacks a gradient on a semantic",
          "colour — two signals for one message. It is also silent about authorship, which for AI",
          "output is the thing a reader needs most.",
          "",
          'Migration: `variant` → `status` (`variant="ai"` becomes `status="neutral"`, which needs an',
          "`icon`), `actions: [a, b]` → `action` plus `secondaryAction` where the second really is the",
          "way out of the first, and `children` unchanged. The byline is not a prop: every F0AiCallout",
          "renders it.",
        ].join("\n"),
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title displayed in the callout header",
    },
    onClose: {
      control: false,
      description: "Callback when the close button is clicked",
    },
    actions: {
      control: "object",
      description: "Array of action buttons (max 2)",
    },
    children: {
      control: false,
      table: {
        disable: true,
      },
    },
    variant: {
      control: "select",
      options: ["ai", "critical", "positive", "info", "warning"],
      description: "The visual variant of the callout",
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
}

export const Default: StoryObj<F0CalloutProps> = {
  args: {
    title: "SDM Callout",
    variant: "ai",
    onClose: () => alert("Callout closed"),
    actions: [
      {
        label: "Primary action",
        onClick: () => alert("Primary action clicked"),
        icon: CheckDouble,
      },
      {
        label: "Secondary action",
        onClick: () => alert("Secondary action clicked"),
        icon: ExternalLink,
      },
    ],
    children: (
      <div>
        <p>
          This is a sample SDM callout with <u>rich text</u> content and{" "}
          <u>action buttons</u>.
        </p>
        <p>You can customize the title, content, and actions as needed.</p>
      </div>
    ),
  },
}

export const WithoutActions: StoryObj<F0CalloutProps> = {
  args: {
    title: "Simple SDM Callout",
    variant: "ai",
    children: (
      <div>
        <p>This is a simple callout without any action buttons.</p>
      </div>
    ),
  },
}

export const WithCloseOnly: StoryObj<F0CalloutProps> = {
  args: {
    title: "Dismissible Callout",
    variant: "ai",
    onClose: () => alert("Callout closed"),
    children: (
      <div>
        <p>This callout can be dismissed using the close button.</p>
      </div>
    ),
  },
}

export const Skeleton: StoryObj = {
  render: () => <CalloutSkeleton variant="ai" />,
}

export const SkeletonCompact: StoryObj = {
  render: () => <CalloutSkeleton compact variant="ai" />,
}

export const Variants: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 text-sm font-medium">AI (Gradient)</h3>
        <F0Callout title="AI Callout" variant="ai">
          <p>This is the AI callout with gradient background.</p>
        </F0Callout>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Critical</h3>
        <F0Callout title="Critical Callout" variant="critical">
          <p>This is a critical callout for important messages.</p>
        </F0Callout>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">
          Positive (with CheckDouble icon)
        </h3>
        <F0Callout title="Success Message" variant="positive">
          <p>
            This is a positive callout for success messages with a CheckDouble
            icon.
          </p>
        </F0Callout>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">
          Info (with InfoCircle icon)
        </h3>
        <F0Callout title="Information" variant="info">
          <p>
            This is an info callout for informational messages with an
            InfoCircle icon.
          </p>
        </F0Callout>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">
          Warning (with Warning icon)
        </h3>
        <F0Callout title="Caution Required" variant="warning">
          <p>
            This is a warning callout for cautionary messages with a Warning
            icon.
          </p>
        </F0Callout>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}

export const VariantsWithActions: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 text-sm font-medium">Critical with Actions</h3>
        <F0Callout
          title="Critical Callout"
          variant="critical"
          actions={[
            {
              label: "Acknowledge",
              onClick: () => alert("Acknowledged"),
              icon: CheckDouble,
            },
          ]}
          onClose={() => alert("Dismissed")}
        >
          <p>This is a critical callout with action buttons.</p>
        </F0Callout>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">
          Positive with Actions (CheckDouble icon)
        </h3>
        <F0Callout
          title="Success Message"
          variant="positive"
          actions={[
            {
              label: "Continue",
              onClick: () => alert("Continue clicked"),
              icon: CheckDouble,
            },
            {
              label: "View Details",
              onClick: () => alert("View details clicked"),
              icon: ExternalLink,
            },
          ]}
        >
          <p>
            This is a positive callout for success messages with action buttons
            and CheckDouble icon.
          </p>
        </F0Callout>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">
          Info with Actions (InfoCircle icon)
        </h3>
        <F0Callout
          title="Information"
          variant="info"
          actions={[
            {
              label: "Learn More",
              onClick: () => alert("Learn more clicked"),
              icon: CheckDouble,
            },
            {
              label: "Dismiss",
              onClick: () => alert("Dismiss clicked"),
              icon: ExternalLink,
            },
          ]}
        >
          <p>
            This is an info callout for informational messages with action
            buttons and InfoCircle icon.
          </p>
        </F0Callout>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">
          Warning with Actions (Warning icon)
        </h3>
        <F0Callout
          title="Caution Required"
          variant="warning"
          actions={[
            {
              label: "Acknowledge",
              onClick: () => alert("Acknowledged"),
              icon: CheckDouble,
            },
          ]}
          onClose={() => alert("Dismissed")}
        >
          <p>
            This is a warning callout for cautionary messages with action
            buttons and Warning icon.
          </p>
        </F0Callout>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}

export const WithDataTestId: StoryObj<F0CalloutProps & WithDataTestIdProps> = {
  args: {
    ...Default.args,
    dataTestId: "callout-test-id",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("callout-test-id")).toBeInTheDocument()
  },
}

export default meta
