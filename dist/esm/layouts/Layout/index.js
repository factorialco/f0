import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../lib/experimental.js";
import { GroupGrid as n } from "./groups/GroupGrid/GroupGrid.js";
import { createPageLayoutBlock as r, createPageLayoutBlockGroup as i } from "./utils.js";
import { Block as a } from "./blocks/Block/Block.js";
import { BlockContent as o } from "./blocks/BlockContent.js";
import { GroupLinear as s } from "./groups/GroupLinear/GroupLinear.js";
import { GroupMasonry as c } from "./groups/GroupMasonry/GroupMasonry.js";
import { Page as l } from "./pages/Page.js";
//#region src/layouts/Layout/index.ts
var u = {
	Page: e(t("Page", l)),
	Block: e(t("Block", a)),
	BlockContent: e(t("BlockContent", o)),
	Group: e(t("Group", s)),
	GroupGrid: e(t("GroupGrid", n)),
	GroupMasonry: e(t("GroupMasonry", c))
};
//#endregion
export { u as Layout, r as createPageLayoutBlock, i as createPageLayoutBlockGroup };
