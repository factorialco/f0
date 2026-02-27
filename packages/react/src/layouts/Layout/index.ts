import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { Block as BlockComponent } from "./blocks/Block"
import { BlockContent as BlockContentComponent } from "./blocks/BlockContent"
import { GroupGrid as GroupGridComponent } from "./groups/GroupGrid"
import { GroupLinear as GroupLinearComponent } from "./groups/GroupLinear/GroupLinear"
import { GroupMasonry as GroupMasonryComponent } from "./groups/GroupMasonry"
import { Page as PageComponent } from "./pages/Page"
export * from "./types"

export const Layout = {
  Page: withDataTestId(experimentalComponent("Page", PageComponent)),
  Block: withDataTestId(experimentalComponent("Block", BlockComponent)),
  BlockContent: withDataTestId(
    experimentalComponent("BlockContent", BlockContentComponent)
  ),
  Group: withDataTestId(experimentalComponent("Group", GroupLinearComponent)),
  GroupGrid: withDataTestId(
    experimentalComponent("GroupGrid", GroupGridComponent)
  ),
  GroupMasonry: withDataTestId(
    experimentalComponent("GroupMasonry", GroupMasonryComponent)
  ),
}

export * from "./utils"
