import type { Meta, StoryObj } from "@storybook/react-vite"

import React, { useEffect } from "react"
import { expect, userEvent, within } from "storybook/test"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { ButtonCopy } from "../ButtonCopy"
import { buttonCopySizes } from "../types"

const meta = {
  title: "Components/ButtonCopy",
  component: ButtonCopy,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "internal"],
  args: {
    valueToCopy: "Hello World!",
    variant: "neutral",
    size: "sm",
  },
  argTypes: {
    valueToCopy: {
      control: "text",
      description:
        "The text value that will be copied to clipboard when the button is clicked.",
    },
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
      description: "Visual style variant of the copy button.",
    },
    size: {
      control: "select",
      options: buttonCopySizes,
      description:
        "Sets the button size. Copy buttons are typically used in 'sm' size.",
    },
    copyTooltipLabel: {
      control: "text",
      description:
        "Custom tooltip label shown before copying. Defaults to translation for 'Copy'.",
    },
    copiedTooltipLabel: {
      control: "text",
      description:
        "Custom tooltip label shown after copying. Defaults to 'Copied'.",
    },
    disabled: {
      control: "boolean",
      description:
        "The button is inactive and does not respond to user interaction.",
    },
    onCopy: {
      action: "copied",
      description: "Callback fired when the copy action is performed.",
    },
  },
} satisfies Meta<typeof ButtonCopy>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  args: {
    valueToCopy: "This text will be copied!",
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    let clipboard = ""
    navigator.clipboard.writeText = (text: string) => {
      clipboard = text
      return Promise.resolve()
    }

    await step("Verify initial state", async () => {
      const button = canvas.getByRole("button")
      expect(button).toBeInTheDocument()
      expect(button.getAttribute("aria-label")).toBe("Copy")
      expect(button.getAttribute("title")).toBe("Copy")
    })

    await step("Click copy button", async () => {
      const button = canvas.getByRole("button")
      await userEvent.click(button)
    })

    await step("Verify copied state", async () => {
      const button = canvas.getByRole("button")
      expect(button.getAttribute("aria-label")).toBe("Copied")
      expect(button.getAttribute("title")).toBe("Copied")
      expect(clipboard).toBe(args.valueToCopy)
    })
  },
}

export const Variants: Story = {
  parameters: withSnapshot({}),
  render: (args) => (
    <div className="flex gap-2">
      <ButtonCopy {...args} variant="default" valueToCopy="Default copy" />
      <ButtonCopy {...args} variant="outline" valueToCopy="Outline copy" />
      <ButtonCopy {...args} variant="neutral" valueToCopy="Neutral copy" />
      <ButtonCopy {...args} variant="ghost" valueToCopy="Ghost copy" />
      <ButtonCopy {...args} variant="critical" valueToCopy="Critical copy" />
      <ButtonCopy {...args} variant="promote" valueToCopy="Promote copy" />
    </div>
  ),
}

export const Sizes: Story = {
  parameters: withSnapshot({}),
  render: (args) => (
    <div className="flex items-center gap-4">
      <ButtonCopy {...args} size="lg" valueToCopy="Large button copy" />
      <ButtonCopy {...args} size="md" valueToCopy="Medium button copy" />
      <ButtonCopy {...args} size="sm" valueToCopy="Small button copy" />
    </div>
  ),
}

export const CustomLabels: Story = {
  args: {
    valueToCopy: "Custom labels example",
    copyTooltipLabel: "Click to copy text",
    copiedTooltipLabel: "Text copied successfully!",
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Verify custom copy label", async () => {
      const button = canvas.getByRole("button")
      expect(button.getAttribute("aria-label")).toBe("Click to copy text")
    })

    await step("Click and verify custom copied label", async () => {
      const button = canvas.getByRole("button")
      await userEvent.click(button)
      expect(button.getAttribute("aria-label")).toBe(
        "Text copied successfully!"
      )
    })
  },
}

export const DifferentValues: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Email:</span>
        <ButtonCopy
          valueToCopy="user@example.com"
          copyTooltipLabel="Copy email"
          copiedTooltipLabel="Email copied!"
        />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">URL:</span>
        <ButtonCopy
          valueToCopy="https://factorial.com"
          copyTooltipLabel="Copy URL"
          copiedTooltipLabel="URL copied!"
        />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Token:</span>
        <ButtonCopy
          valueToCopy="test 1234567890"
          copyTooltipLabel="Copy token"
          copiedTooltipLabel="Token copied!"
        />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Code:</span>
        <ButtonCopy
          valueToCopy="const greeting = 'Hello World!'"
          copyTooltipLabel="Copy code"
          copiedTooltipLabel="Code copied!"
        />
      </div>
    </div>
  ),
}

export const States: Story = {
  parameters: withSnapshot({}),
  render: (args) => (
    <div className="flex gap-2">
      <ButtonCopy {...args} valueToCopy="Normal state" />
      <ButtonCopy {...args} valueToCopy="Disabled state" disabled />
    </div>
  ),
}

export const InteractiveCopyTest: Story = {
  render: (args) => {
    const [copyCount, setCopyCount] = React.useState(0)

    const handleCopy = () => {
      setCopyCount((prev) => prev + 1)
    }

    return (
      <div className="flex flex-col items-center gap-4">
        <ButtonCopy
          {...args}
          valueToCopy="Interactive copy test"
          onCopy={handleCopy}
        />
        <p className="text-gray-600 text-sm">Copied {copyCount} times</p>
      </div>
    )
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Test multiple copy interactions", async () => {
      const button = canvas.getByRole("button")
      const counter = canvas.getByText(/Copied \d+ times/)

      // Initial state
      expect(counter).toHaveTextContent("Copied 0 times")

      // First copy
      await userEvent.click(button)
      expect(counter).toHaveTextContent("Copied 1 times")

      // Wait for animation to complete before next click
      await new Promise((resolve) => setTimeout(resolve, 1100))

      // Second copy
      await userEvent.click(button)
      expect(counter).toHaveTextContent("Copied 2 times")
    })
  },
}

export const AnimationStates: Story = {
  render: (args) => {
    const [showCopied, setShowCopied] = React.useState(false)

    const triggerCopy = () => {
      setShowCopied(true)
      setTimeout(() => setShowCopied(false), 1000)
    }

    useEffect(() => {
      console.log("showCopied", showCopied)
    }, [showCopied])

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <ButtonCopy {...args} valueToCopy="Animation demo" />
          <button
            onClick={triggerCopy}
            className="bg-blue-500 text-white rounded px-3 py-1 text-sm"
          >
            Trigger Copy Animation
          </button>
        </div>
        <p className="text-gray-600 text-sm">
          Click either button to see the copy → check animation
        </p>
      </div>
    )
  },
}

export const InContext: Story = {
  parameters: withSnapshot({}),
  render: (args) => (
    <div className="border-gray-200 max-w-md rounded-lg border p-4">
      <h3 className="mb-2 text-lg font-semibold">Share this link</h3>
      <div className="bg-gray-50 flex items-center justify-between rounded border p-3">
        <span className="font-mono text-gray-700 mr-2 truncate text-sm">
          https://factorial.com/shared/abc123
        </span>
        <ButtonCopy
          {...args}
          valueToCopy="https://factorial.com/shared/abc123"
          copyTooltipLabel="Copy link"
          copiedTooltipLabel="Link copied!"
        />
      </div>
    </div>
  ),
}
