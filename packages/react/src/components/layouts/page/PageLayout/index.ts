import { PageLayout as PageLayoutComponent } from "./PageLayout"
import { PageLayoutBlock } from "./PageLayoutBlock"
export * from "./types"

export const PageLayout = Object.assign(PageLayoutComponent, {
  Block: PageLayoutBlock,
})
