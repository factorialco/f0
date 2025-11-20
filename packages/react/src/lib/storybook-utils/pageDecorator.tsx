import { Page } from "../../experimental/Navigation/Page"
import * as PageStories from "../../experimental/Navigation/Page/index.stories"

export const PageDecorator = (Story: React.ComponentType) => (
  <div className="flex h-full w-full flex-col">
    <div className="flex h-full min-h-[300px] w-full flex-1 flex-col border-[1px] border-dashed border-[#333]">
      <Page {...PageStories.Default.args}>
        <Story />
      </Page>
    </div>
    <p className="mt-2 align-middle">
      The &nbsp;
      <span className="inline-block w-5 border-[1px] border-dashed border-[#333]"></span>
      &nbsp; indicates the screen border
    </p>
  </div>
)
