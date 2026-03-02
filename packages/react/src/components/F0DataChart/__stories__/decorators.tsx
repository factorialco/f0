import type { StoryFn } from "@storybook/react-vite"

export const ChartDecorator = (Story: StoryFn) => (
  <div className="h-[320px] w-[420px]">
    <Story />
  </div>
)
