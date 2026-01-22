import { ReactNode } from "react"

import ContainerStory from "../Widget/index.stories"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { children, ...containerStoryArgs } =
  ContainerStory.args as typeof ContainerStory.args & { children: ReactNode }

export const WidgetDecorator = (Story: React.ComponentType) => (
  <div className="w-96">
    <Story />
  </div>
)

export { containerStoryArgs }
