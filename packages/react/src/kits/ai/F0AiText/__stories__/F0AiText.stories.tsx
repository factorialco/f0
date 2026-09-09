import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"
import { F0Heading } from "@/components/F0Heading"
import { F0Text } from "@/components/F0Text"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0AiText } from ".."
import { f0AiTextVariants } from "../types"

const meta = {
  component: F0AiText,
  title: "AI/F0AiText",
  parameters: {
    layout: "centered",
    a11y: { test: "error" },
  },
  tags: ["!autodocs", "experimental"],
  args: {
    content: "Create a job posting with One",
  },
  argTypes: {
    variant: {
      control: "select",
      options: f0AiTextVariants,
    },
  },
} satisfies Meta<typeof F0AiText>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The default `heading-large` size — the same treatment the One chat welcome
 * headline uses.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const headline = canvas.getByText("Create a job posting with One")

    await expect(headline.tagName).toBe("H1")
    await expect(headline).toHaveClass("bg-clip-text", "text-transparent")

    // Proves Tailwind still emits the ramp now that the stops live in a
    // constant rather than inline in this file.
    const { backgroundImage } = getComputedStyle(headline)
    await expect(backgroundImage).toContain("229, 86, 25")
    await expect(backgroundImage).toContain("161, 173, 229")
    await expect(backgroundImage).toContain("229, 25, 67")
  },
}

/**
 * Sizing comes from the shared F0 text variants, so a gradient headline sits on
 * the same scale as the plain heading beside it.
 */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-3">
      <F0AiText variant="heading-large" content="Heading large" />
      <F0AiText variant="heading" content="Heading" />
      <F0AiText variant="body" content="Body" />
    </div>
  ),
}

/**
 * A page headline: the gradient names the AI moment, the plain subtitle carries
 * the explanation.
 */
export const PageHeadline: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-2">
      <F0AiText align="center" content="Create a job posting with One" />
      <F0Text
        align="center"
        variant="description"
        content="Describe the role and One drafts the posting for you."
      />
    </div>
  ),
}

/**
 * Only the AI-generated part carries the ramp — everything around it stays on
 * the neutral foreground tokens.
 */
export const AlongsidePlainHeading: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-4">
      <F0Heading variant="heading" content="Job postings" />
      <F0AiText variant="heading" content="3 postings drafted by One" />
    </div>
  ),
}

/** Long headlines truncate like any other F0 text. */
export const Truncated: Story = {
  args: {
    content:
      "Create a job posting with One, then review the draft before publishing",
    ellipsis: true,
  },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
}

/** Every variant in one frame, for visual regression. */
export const Snapshot: Story = {
  parameters: withSnapshot({ layout: "padded" }),
  tags: ["no-sidebar"],
  render: () => (
    <div className="flex flex-col items-start gap-3">
      {f0AiTextVariants.map((variant) => (
        <F0AiText key={variant} variant={variant} content={variant} />
      ))}
    </div>
  ),
}
