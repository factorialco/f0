import { Add, Archive, Delete, Save } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { navTargets } from "@/ui/Action"
import type { Meta, StoryObj } from "@storybook/react-vite"
import React from "react"
import { expect, within } from "storybook/test"
import { F0Button } from "../F0Button"

const meta = {
  title: "Button",
  component: F0Button,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/pZzg1KTe9lpKTSGPUZa8OJ/Web-components?node-id=41-1256&t=99GWQFvFLZtKW49N-4",
    },
    docs: {
      description: {
        component: [
          "A button component that allows to trigger actions and navigate using the router to  different parts of the application if the `href` prop is provided.",
          "For navigation between pages we should use the `href` prop to allow the user to open the link in a new tab or window.",
        ]
          .map((line) => `<p>${line}</p>`)
          .join("\n"),
      },
    },
  },
  tags: ["autodocs", "stable"],
  args: {
    variant: "default",
    onClick: () => {
      console.log("Button clicked")
      //fn()
    },
    label: "Click me",
    size: "md",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "critical",
        "neutral",
        "ghost",
        "outline",
        "promote",
        "outlinePromote",
      ],
      description: "Visual style variant of the button.",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description:
        "Sets the button size. 'lg' for mobile, 'md' for desktop, 'sm' for compact/secondary actions.",
    },
    label: {
      control: "text",
      description:
        "The visible label for the button. Required for accessibility.",
    },
    icon: {
      control: "boolean",
      description:
        "Adds an icon to the button, combined with the label for better clarity and recognition.",
    },
    emoji: {
      control: "text",
      description:
        "Adds an emoji to the button, using emoji disables the label as is a icon-only button.",
    },
    disabled: {
      control: "boolean",
      description:
        "The button is inactive and does not respond to user interaction.",
    },
    loading: {
      control: "boolean",
      description:
        "Indicates that an action is in progress. Shows a loading spinner and blocks interaction.",
    },
    hideLabel: {
      control: "boolean",
      description:
        "Hides the label visually (for icon-only or emoji-only buttons), but keeps it accessible for screen readers.",
    },
    onClick: {
      action: "clicked",
      description:
        "Callback fired when the button is clicked. Supports async functions for loading state.",
    },
    tooltip: {
      control: "text",
      description:
        "The tooltip to show when the button is hovered. If not provided, when the hideLabel is true, the tooltip will be generated based on the label property.",
    },
    href: {
      control: "text",
      description:
        "The URL to navigate to when the button is clicked. It will render internally as a HTML link element, so allows to open the link in a new tab or window.",
    },
    target: {
      control: "select",
      options: [undefined, ...navTargets],
      description:
        "The target to navigate to when the button is clicked. It will render internally as a HTML link element, so allows to open the link in a new tab or window.",
    },
  },
} satisfies Meta<typeof F0Button>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variants
export const Default: Story = {
  args: {
    variant: "default",
    label: "Default Button",
    "data-test": "data",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const button = canvas.getByRole("button")
    await expect(button.dataset.test).toBe("data")
  },
}

// Basic Variants
export const WithHref: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "A button that navigates to a different page when clicked. It will render as a HTML link element.",
      },
    },
  },
  args: {
    variant: "default",
    label: "Default Button",
    href: "https://www.google.com",
    "data-test": "data",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const button = canvas.getByRole("link")
    await expect(button.dataset.test).toBe("data")
  },
}

export const Variants: Story = {
  parameters: withSnapshot({}),
  render: (args) => (
    <div className="flex gap-2">
      <F0Button {...args} variant="default" label="Default" />
      <F0Button {...args} variant="outline" label="Outline" />
      <F0Button {...args} variant="neutral" label="Neutral" />
      <F0Button {...args} variant="ghost" label="Ghost" />
      <F0Button {...args} variant="critical" label="Critical" />
      <F0Button {...args} variant="promote" label="Promote" />
    </div>
  ),
}

export const IconVariants: Story = {
  parameters: withSnapshot({}),
  render: (args) => (
    <div className="flex flex-col gap-6">
      <div>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>With icon</div>
        <div className="flex gap-2">
          <F0Button {...args} variant="default" label="Default" icon={Add} />
          <F0Button {...args} variant="outline" label="Outline" icon={Add} />
          <F0Button
            {...args}
            variant="neutral"
            label="Neutral"
            icon={Archive}
          />
          <F0Button {...args} variant="ghost" label="Ghost" icon={Save} />
          <F0Button
            {...args}
            variant="critical"
            label="Critical"
            icon={Delete}
          />
          <F0Button {...args} variant="promote" label="Promote" icon={Add} />
        </div>
      </div>
      <div>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Only icon</div>
        <div className="flex gap-2">
          <F0Button {...args} variant="default" label="" icon={Add} hideLabel />
          <F0Button
            {...args}
            variant="outline"
            label="Outline"
            icon={Add}
            hideLabel
          />
          <F0Button
            {...args}
            variant="neutral"
            label="Neutral"
            icon={Archive}
            hideLabel
          />
          <F0Button
            {...args}
            variant="ghost"
            label="Ghost"
            icon={Save}
            hideLabel
          />
          <F0Button
            {...args}
            variant="critical"
            label="Critical "
            icon={Delete}
            hideLabel
          />
          <F0Button
            {...args}
            variant="promote"
            label="Promote"
            icon={Add}
            hideLabel
          />
        </div>
      </div>
      <div>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Only emoji</div>
        <div className="flex gap-2">
          <F0Button {...args} emoji="🥰" label="Emoji" variant="neutral" />
        </div>
      </div>
    </div>
  ),
}

// Size Variants
export const Sizes: Story = {
  parameters: withSnapshot({}),
  render: (args) => (
    <div className="flex items-center gap-4">
      <F0Button {...args} size="lg" label="Large" tooltip="Large button" />
      <F0Button {...args} size="md" label="Medium" tooltip="Medium button" />
      <F0Button {...args} size="sm" label="Small" tooltip="Small button" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled Button",
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    label: "Processing...",
  },
}

// Interactive Examples
export const AsyncAction: Story = {
  args: {
    label: "Save Changes",
    icon: Save,
  },
  render: (args) => {
    const onClick = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      alert("Changes saved!")
    }

    return <F0Button {...args} onClick={onClick} />
  },
}

export const IconButtonGroup: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex items-center gap-2">
      <F0Button variant="ghost" icon={Add} hideLabel label="Add" />
      <F0Button variant="ghost" icon={Archive} hideLabel label="Archive" />
      <F0Button variant="ghost" icon={Delete} hideLabel label="Delete" />
    </div>
  ),
}

export const OnlyEmoji: Story = {
  args: {
    emoji: "🥰",
    label: "Emoji",
    variant: "neutral",
    hideLabel: true,
  },
}

export const States: Story = {
  parameters: withSnapshot({}),
  render: (args) => {
    const [asyncLoading, setAsyncLoading] = React.useState(false)
    return (
      <div className="flex gap-2">
        <F0Button {...args} label="Disabled" disabled />
        <F0Button {...args} label="Loading" loading />
        <F0Button
          {...args}
          label={asyncLoading ? "Saving..." : "Async Loading"}
          loading={asyncLoading}
          onClick={async () => {
            setAsyncLoading(true)
            await new Promise((resolve) => setTimeout(resolve, 1500))
            setAsyncLoading(false)
            alert("Async action completed!")
          }}
        />
      </div>
    )
  },
}

export const AsyncLoading: Story = {
  render: (args) => {
    const [asyncLoading, setAsyncLoading] = React.useState(false)
    return (
      <F0Button
        {...args}
        label={asyncLoading ? "Saving..." : "Async Loading"}
        loading={asyncLoading}
        onClick={async () => {
          setAsyncLoading(true)
          await new Promise((resolve) => setTimeout(resolve, 1500))
          setAsyncLoading(false)
          alert("Async action completed!")
        }}
      />
    )
  },
}
