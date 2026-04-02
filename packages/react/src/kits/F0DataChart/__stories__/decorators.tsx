import type { StoryFn } from "@storybook/react-vite"

export const ChartDecorator = (Story: StoryFn) => (
  <div className="h-[360px] w-[600px]">
    <Story />
  </div>
)

export const ChartDecoratorWide = (Story: StoryFn) => (
  <div className="h-[360px] w-[900px]">
    <Story />
  </div>
)
