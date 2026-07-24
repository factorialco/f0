import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0AiProcessingOverlay } from ".."

const meta = {
  component: F0AiProcessingOverlay,
  title: "AI/F0AiProcessingOverlay",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: false },
  },
  decorators: [
    (Story) => (
      <div className="h-[360px] w-[480px] overflow-auto rounded-xl border border-solid border-f1-border-secondary bg-f1-background">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0AiProcessingOverlay>

export default meta
type Story = StoryObj<typeof meta>

/** A stand-in panel/canvas — the surface the assistant is regenerating. */
const SamplePanel = () => (
  <div className="flex flex-1 flex-col gap-3 p-4">
    <div className="h-5 w-1/2 rounded bg-f1-background-secondary" />
    <div className="h-4 w-full rounded bg-f1-background-secondary" />
    <div className="h-4 w-5/6 rounded bg-f1-background-secondary" />
    <div className="h-24 w-full rounded bg-f1-background-secondary" />
    <div className="h-4 w-2/3 rounded bg-f1-background-secondary" />
  </div>
)

/**
 * Toggle `active` from the controls to see the wrapped panel blur and lock while
 * the floating "Applying changes" pill appears over it.
 */
export const Default: Story = {
  args: {
    active: true,
    children: <SamplePanel />,
  },
}

/** A custom pill label instead of the default `ai.applyingChanges` translation. */
export const CustomLabel: Story = {
  args: {
    active: true,
    label: "Regenerating survey…",
    children: <SamplePanel />,
  },
}

/** When inactive, the overlay is transparent and the panel stays interactive. */
export const Inactive: Story = {
  args: {
    active: false,
    children: <SamplePanel />,
  },
}
