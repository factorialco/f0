import { Block } from "./blocks/Block"
import { BlockContent } from "./blocks/BlockContent"
import { GroupGrid } from "./groups/GroupGrid"
import { GroupLinear } from "./groups/GroupLinear/GroupLinear"
import { GroupMasonry } from "./groups/GroupMasonry"
import { Page } from "./pages/Page"
export * from "./types"

export const Layout = {
  Page: Page,
  Block: Block,
  BlockContent: BlockContent,
  Group: GroupLinear,
  GroupGrid: GroupGrid,
  GroupMasonry: GroupMasonry,
}
