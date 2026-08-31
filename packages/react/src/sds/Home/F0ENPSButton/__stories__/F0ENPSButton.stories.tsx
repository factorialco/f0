import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { expect, userEvent, waitFor, within } from "storybook/test"

import {
  FaceNeutral,
  ThumbsDown,
  ThumbsDownFilled,
  ThumbsUp,
  ThumbsUpFilled,
} from "@/icons/app"
import { pulses, type Pulse } from "@/lib/mood"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0ENPSButton } from "../index"
import type { F0ENPSButtonProps } from "../types"

/**
 * A mood question's own wording. The component holds no copy — every scale
 * brings its five labels, already translated, so these stand in for a product's.
 */
const MOOD_LABELS: F0ENPSButtonProps["labels"] = {
  superNegative: "Very bad",
  negative: "Bad",
  neutral: "Okay",
  positive: "Good",
  superPositive: "Very good",
}

const meta = {
  component: F0ENPSButton,
  title: "Home/ENPSButton",
  parameters: {
    layout: "centered",
    a11y: { test: "error" },
  },
  // `!autodocs` because F0ENPSButton.mdx is the docs page.
  tags: ["experimental", "!autodocs"],
  args: { labels: MOOD_LABELS },
  argTypes: {
    value: {
      control: "select",
      options: [undefined, ...pulses],
      description: "The answered face, or `undefined` while unanswered.",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      table: { defaultValue: { summary: "lg" } },
    },
    fullWidth: {
      control: "boolean",
      table: { defaultValue: { summary: "true" } },
    },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    labels: { control: "object" },
    icons: { control: false },
    onChange: { action: "changed" },
  },
  decorators: [
    (Story) => (
      <div className="w-[420px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0ENPSButton>

export default meta

type Story = StoryObj<typeof meta>

/** Answers its own presses, the way a widget would. */
const Interactive = (args: F0ENPSButtonProps) => {
  const [value, setValue] = useState<Pulse | undefined>(args.value)

  return (
    <F0ENPSButton
      {...args}
      value={value}
      onChange={(next) => {
        setValue(next)
        args.onChange?.(next)
      }}
    />
  )
}

export const Default: Story = {
  render: (args) => <Interactive {...args} />,
}

export const Answered: Story = {
  args: { value: "negative" },
  render: (args) => <Interactive {...args} />,
}

export const Recommendation: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The same five faces answering a likelihood question instead of a mood " +
          "one — only the copy changes. The labels are the accessible names and " +
          "the tooltips.",
      },
    },
  },
  args: {
    labels: {
      superNegative: "Not at all likely",
      negative: "Unlikely",
      neutral: "Neither",
      positive: "Likely",
      superPositive: "Extremely likely",
    },
  },
  render: (args) => <Interactive {...args} />,
}

export const CustomFaces: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`icons` swaps the glyphs for a question that isn't about mood — here a " +
          "five-point thumbs scale, with the copy to match. Keep the replacements " +
          "a set that reads worst-to-best on its own.",
      },
    },
  },
  args: {
    icons: {
      superNegative: ThumbsDownFilled,
      negative: ThumbsDown,
      neutral: FaceNeutral,
      positive: ThumbsUp,
      superPositive: ThumbsUpFilled,
    },
    labels: {
      superNegative: "Definitely not",
      negative: "Probably not",
      neutral: "Not sure",
      positive: "Probably",
      superPositive: "Definitely",
    },
  },
  render: (args) => <Interactive {...args} />,
}

export const Submitted: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "An answer that has been sent: the face stays coloured so the person " +
          "can see what they said, and nothing else can be pressed.",
      },
    },
  },
  args: { value: "superPositive", disabled: true },
}

export const Sizes: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <section key={size} className="flex flex-col gap-2">
          <h4 className="font-semibold">{size}</h4>
          <F0ENPSButton labels={MOOD_LABELS} size={size} value="neutral" />
        </section>
      ))}
    </div>
  ),
}

export const Answering: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Pressing a face answers the question; hovering one names it, since a " +
          "face carries no text of its own.",
      },
    },
  },
  render: (args) => <Interactive {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const bad = canvas.getByRole("radio", { name: "Bad" })
    await expect(bad).toHaveAttribute("aria-checked", "false")

    await userEvent.click(bad)
    await expect(bad).toHaveAttribute("aria-checked", "true")

    // The tooltip is portalled out of the canvas, and it opens on a delay.
    await userEvent.hover(bad)
    await waitFor(
      async () => {
        await expect(
          within(document.body).getByRole("tooltip")
        ).toHaveTextContent("Bad")
      },
      { timeout: 3000 }
    )
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col gap-2">
        <h4 className="font-semibold">Unanswered</h4>
        <F0ENPSButton labels={MOOD_LABELS} />
      </section>
      {pulses.map((pulse) => (
        <section key={pulse} className="flex flex-col gap-2">
          <h4 className="font-semibold">{pulse}</h4>
          <F0ENPSButton labels={MOOD_LABELS} value={pulse} />
        </section>
      ))}
      <section className="flex flex-col gap-2">
        <h4 className="font-semibold">Disabled</h4>
        <F0ENPSButton labels={MOOD_LABELS} value="positive" disabled />
      </section>
      <section className="flex flex-col gap-2">
        <h4 className="font-semibold">Not full width</h4>
        <F0ENPSButton labels={MOOD_LABELS} value="neutral" fullWidth={false} />
      </section>
    </div>
  ),
}
