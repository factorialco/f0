import type { StoryFn } from "@storybook/react-vite"

export const ChartDecorator = (Story: StoryFn) => (
  <div className="h-[360px] w-[360px]">
    <Story />
  </div>
)
