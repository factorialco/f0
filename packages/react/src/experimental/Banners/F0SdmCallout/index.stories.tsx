import { CheckDouble, ExternalLink } from "@/icons/app"
import { StoryFn, StoryObj } from "@storybook/react-vite"
import { F0SdmCallout, F0SdmCalloutProps } from "."
import { SdmCalloutSkeleton } from "./SdmCalloutInternal"

const meta = {
  title: "Banners/SdmCallout",
  component: F0SdmCallout,
  parameters: {
    layout: "centered",
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
    primaryAction: {
      control: "object",
      description: "Primary action button configuration",
    },
    secondaryAction: {
      control: "object",
      description: "Secondary action button configuration",
    },
    content: {
      control: "text",
      description: "Html or plain text content displayed in the callout body",
    },
    variant: {
      control: "select",
      options: ["default", "critical", "positive", "info", "warning"],
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

export const Default: StoryObj<F0SdmCalloutProps> = {
  args: {
    title: "SDM Callout",
    onClose: () => alert("Callout closed"),
    primaryAction: {
      label: "Primary action",
      onClick: () => alert("Primary action clicked"),
      icon: CheckDouble,
    },
    secondaryAction: {
      label: "Secondary action",
      onClick: () => alert("Secondary action clicked"),
      icon: ExternalLink,
    },
    content: `<div>
        <p>
          This is a sample SDM callout with <u>rich text</u> content
          and <u>action buttons</u>.
        </p>
        <p>You can customize the title, content, and actions as needed.</p>
      </div>`,
  },
}

export const WithoutActions: StoryObj<F0SdmCalloutProps> = {
  args: {
    title: "Simple SDM Callout",
    content: `<div>
        <p>This is a simple callout without any action buttons.</p>
      </div>`,
  },
}

export const WithCloseOnly: StoryObj<F0SdmCalloutProps> = {
  args: {
    title: "Dismissible Callout",
    onClose: () => alert("Callout closed"),
    content: `<div>
        <p>This callout can be dismissed using the close button.</p>
      </div>`,
  },
}

export const Skeleton: StoryObj = {
  render: () => <SdmCalloutSkeleton />,
}

export const SkeletonCompact: StoryObj = {
  render: () => <SdmCalloutSkeleton compact />,
}

export const Variants: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 text-sm font-medium">Default (Gradient)</h3>
        <F0SdmCallout
          title="Default Callout"
          content="<p>This is the default callout with gradient background.</p>"
          variant="default"
        />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Critical</h3>
        <F0SdmCallout
          title="Critical Callout"
          content="<p>This is a critical callout for important messages.</p>"
          variant="critical"
        />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">
          Positive (with CheckDouble icon)
        </h3>
        <F0SdmCallout
          title="Success Message"
          content="<p>This is a positive callout for success messages with a CheckDouble icon.</p>"
          variant="positive"
        />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">
          Info (with InfoCircle icon)
        </h3>
        <F0SdmCallout
          title="Information"
          content="<p>This is an info callout for informational messages with an InfoCircle icon.</p>"
          variant="info"
        />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">
          Warning (with Warning icon)
        </h3>
        <F0SdmCallout
          title="Caution Required"
          content="<p>This is a warning callout for cautionary messages with a Warning icon.</p>"
          variant="warning"
        />
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
        <F0SdmCallout
          title="Critical Callout"
          content="<p>This is a critical callout with action buttons.</p>"
          variant="critical"
          primaryAction={{
            label: "Acknowledge",
            onClick: () => alert("Acknowledged"),
            icon: CheckDouble,
          }}
          onClose={() => alert("Dismissed")}
        />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">
          Positive with Actions (CheckDouble icon)
        </h3>
        <F0SdmCallout
          title="Success Message"
          content="<p>This is a positive callout for success messages with action buttons and CheckDouble icon.</p>"
          variant="positive"
          primaryAction={{
            label: "Continue",
            onClick: () => alert("Continue clicked"),
            icon: CheckDouble,
          }}
          secondaryAction={{
            label: "View Details",
            onClick: () => alert("View details clicked"),
            icon: ExternalLink,
          }}
        />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">
          Info with Actions (InfoCircle icon)
        </h3>
        <F0SdmCallout
          title="Information"
          content="<p>This is an info callout for informational messages with action buttons and InfoCircle icon.</p>"
          variant="info"
          primaryAction={{
            label: "Learn More",
            onClick: () => alert("Learn more clicked"),
            icon: CheckDouble,
          }}
          secondaryAction={{
            label: "Dismiss",
            onClick: () => alert("Dismiss clicked"),
            icon: ExternalLink,
          }}
        />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">
          Warning with Actions (Warning icon)
        </h3>
        <F0SdmCallout
          title="Caution Required"
          content="<p>This is a warning callout for cautionary messages with action buttons and Warning icon.</p>"
          variant="warning"
          primaryAction={{
            label: "Acknowledge",
            onClick: () => alert("Acknowledged"),
            icon: CheckDouble,
          }}
          onClose={() => alert("Dismissed")}
        />
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}

export default meta
