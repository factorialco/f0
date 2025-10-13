import { Page } from "../../experimental/Navigation/Page"
import * as PageStories from "../../experimental/Navigation/Page/index.stories"

export const PageDecorator = (Story: React.ComponentType) => (
  <div className="flex h-[600px] w-full flex-row border-[1px] border-solid border-[#333]">
    <Page {...PageStories.Default.args}>
      <Story />
    </Page>
  </div>
)
