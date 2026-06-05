import { withDataTestId as o } from "../../lib/data-testid/index.js";
import { experimentalComponent as r } from "../../lib/experimental.js";
import { BlockContent as t } from "./blocks/BlockContent.js";
import { GroupLinear as p } from "./groups/GroupLinear/GroupLinear.js";
import { Page as m } from "./pages/Page.js";
import { GroupMasonry as i } from "./groups/GroupMasonry/GroupMasonry.js";
import { GroupGrid as n } from "./groups/GroupGrid/GroupGrid.js";
import { Block as e } from "./blocks/Block/Block.js";
const s = {
  Page: o(r("Page", m)),
  Block: o(r("Block", e)),
  BlockContent: o(
    r("BlockContent", t)
  ),
  Group: o(r("Group", p)),
  GroupGrid: o(
    r("GroupGrid", n)
  ),
  GroupMasonry: o(
    r("GroupMasonry", i)
  )
};
export {
  s as Layout
};
