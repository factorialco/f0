import { experimentalComponent } from "@/lib/experimental"
import { Block as BlockComponent } from "./blocks/Block"
import { BlockContent as BlockContentComponent } from "./blocks/BlockContent"
import { GroupGrid as GroupGridComponent } from "./groups/GroupGrid"
import { GroupLinear as GroupLinearComponent } from "./groups/GroupLinear/GroupLinear"
import { GroupMasonry as GroupMasonryComponent } from "./groups/GroupMasonry"
import { Page as PageComponent } from "./pages/Page"
export * from "./types"

export const Layout = {
  Page: experimentalComponent("Page", PageComponent),
  Block: experimentalComponent("Block", BlockComponent),
  BlockContent: experimentalComponent("BlockContent", BlockContentComponent),
  Group: experimentalComponent("Group", GroupLinearComponent),
  GroupGrid: experimentalComponent("GroupGrid", GroupGridComponent),
  GroupMasonry: experimentalComponent("GroupMasonry", GroupMasonryComponent),
}
