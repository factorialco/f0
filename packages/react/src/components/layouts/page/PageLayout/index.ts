import { PageLayout as PageLayoutComponent } from "./PageLayout"
import { PageLayoutGroup } from "./components/LayoutGroup/PageLayoutGroup"
import { PageLayoutBlock } from "./components/PageLayoutBlock/PageLayoutBlock"
export * from "./components/LayoutGroup/types"
export * from "./components/PageLayoutBlock/types"

export const PageLayout = Object.assign(PageLayoutComponent, {
  Block: PageLayoutBlock,
  Group: PageLayoutGroup,
})
