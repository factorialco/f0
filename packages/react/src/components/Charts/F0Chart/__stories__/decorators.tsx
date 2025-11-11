import type { StoryFn } from "@storybook/react-vite"

export const ChartDecorator = (Story: StoryFn) => (
  <div className="flex h-full w-full items-center justify-center bg-f1-background-tertiary p-8">
    <div className="h-96 w-[640px] rounded-lg bg-f1-background p-4 shadow-[0_0_0_1px_rgba(13,22,37,.1),0_12px_24px_-14px_rgba(13,22,37,.2),0_0_0_6px_rgba(13,22,37,.02)]">
      <Story />
    </div>
  </div>
)
