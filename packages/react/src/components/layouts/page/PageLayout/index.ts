import { PageLayout as PageLayoutComponent } from "./PageLayout"
import { PageLayoutBlock } from "./components/PageLayoutBlock/PageLayoutBlock"
import { PageLayoutGroup } from "./components/PageLayoutGroup/PageLayoutGroup"
export * from "./components/PageLayoutBlock/types"
export * from "./components/PageLayoutGroup/types"

export const PageLayout = Object.assign(PageLayoutComponent, {
  Block: PageLayoutBlock,
})

export const PageLayoutGroup = Object.assign(PageLayoutGroupComponent, {
  Group: PageLayoutGroup,
})
