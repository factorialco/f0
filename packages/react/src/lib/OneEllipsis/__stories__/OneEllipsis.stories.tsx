import type { Meta, StoryObj } from "@storybook/react-vite"
import { useId, useState } from "react"
import { OneEllipsis, Tag, tags } from "../OneEllipsis"

const meta = {
  title: "Ellipsis",
  component: OneEllipsis,
  tags: ["autodocs", "experimental"],
  parameters: {
    docs: {
      description: {
        component: [
          "This is a component that is used to display control how the text is truncated and to show a tooltip in that case",
          "NOTE: This component attaches a resize observer to the element, too many ellipsis (1000+)components can cause performance issues",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  argTypes: {
    tag: {
      control: {
        type: "select",
        options: tags,
      },
    },
  },
} satisfies Meta<typeof OneEllipsis>

export default meta
type Story = StoryObj<typeof meta>

const WrapperStory = ({
  lines = 1,
  text,
  tag = "span",
  className = "",
  disabled = false,
  noTooltip = false,
}: {
  lines?: number
  text: string
  tag?: Tag
  className?: string
  disabled?: boolean
  noTooltip?: boolean
}) => {
  const [width, setWidth] = useState<"narrow" | "medium" | "wide">("medium")

  const key = useId()

  const widthClasses = {
    narrow: "w-32",
    medium: "w-64",
    wide: "w-full",
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <label className="font-medium">Wrapper width:</label>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id={`${key}-narrow`}
              name={`${key}-width`}
              value="narrow"
              checked={width === "narrow"}
              onChange={(e) => setWidth(e.target.value as typeof width)}
              className="size-4"
            />
            <label htmlFor={`${key}-narrow`}>Narrow (128px)</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id={`${key}-medium`}
              name={`${key}-width`}
              value="medium"
              checked={width === "medium"}
              onChange={(e) => setWidth(e.target.value as typeof width)}
              className="size-4"
            />
            <label htmlFor={`${key}-medium`}>Medium (256px)</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id={`${key}-wide`}
              name={`${key}-width`}
              value="wide"
              checked={width === "wide"}
              onChange={(e) => setWidth(e.target.value as typeof width)}
              className="size-4"
            />
            <label htmlFor={`${key}-wide`}>Wide (384px)</label>
          </div>
        </div>
      </div>

      <div className={`border border-f1-border p-4 ${widthClasses[width]}`}>
        <OneEllipsis
          lines={lines}
          tag={tag}
          className={className}
          disabled={disabled}
          noTooltip={noTooltip}
        >
          {text}
        </OneEllipsis>
      </div>
    </div>
  )
}

export const Default: Story = {
  args: {
    lines: 1,
    children:
      "This is a long text that will be truncated with an ellipsis if it doesn't fit in the container width. Hover over it to see the full text in a tooltip.",
  },
  render: (args) => <WrapperStory {...args} text={args.children} />,
}

export const SingleLine: Story = {
  args: {
    lines: 1,
    children:
      "This is a long text that will be truncated with an ellipsis if it doesn't fit in the container width. Hover over it to see the full text in a tooltip.",
  },
  render: () => (
    <WrapperStory
      lines={1}
      text="This is a long text that will be truncated with an ellipsis if it doesn't fit in the container width. Hover over it to see the full text in a tooltip."
    />
  ),
}

export const MultiLine: Story = {
  args: {
    lines: 3,
    children:
      "This is a long text that will be truncated with an ellipsis if it doesn't fit in the container width. It can span multiple lines and will show a tooltip with the full text when hovering. The text will be cut off after the specified number of lines. This is useful for displaying long content in a limited space while still allowing users to see the full text on hover.",
  },
  render: () => (
    <WrapperStory
      lines={3}
      text="This is a long text that will be truncated with an ellipsis if it doesn't fit in the container width. It can span multiple lines and will show a tooltip with the full text when hovering. The text will be cut off after the specified number of lines. This is useful for displaying long content in a limited space while still allowing users to see the full text on hover."
    />
  ),
}

export const ShortText: Story = {
  args: {
    lines: 1,
    children: "Short text that fits",
  },
  render: () => <WrapperStory lines={1} text="Short text that fits" />,
}

export const ShortTextMultiLine: Story = {
  args: {
    lines: 3,
    children:
      "This is a short text that will fit within the container width and won't need truncation. It's short enough to be displayed in full without any ellipsis.",
  },
  render: () => (
    <WrapperStory
      lines={3}
      text="This is a short text that will fit within the container width and won't need truncation. It's short enough to be displayed in full without any ellipsis."
    />
  ),
}
