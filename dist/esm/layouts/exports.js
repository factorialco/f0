import { Component as e } from "../lib/component/component.js";
import { withDataTestId as t } from "../lib/data-testid/index.js";
import { HomeLayout as n } from "./HomeLayout/index.js";
import { StandardLayout as r } from "./StandardLayout/index.js";
import { TwoColumnLayout as i } from "./TwoColumnLayout/index.js";
import { createPageLayoutBlock as a, createPageLayoutBlockGroup as o } from "./Layout/utils.js";
import { Dashboard as s } from "./Dashboard/index.js";
import { Layout as c } from "./Layout/index.js";
//#region src/layouts/exports.tsx
var l = r, u = i, d = t(e({
	name: "HomeLayout",
	type: "layout"
}, n));
//#endregion
export { s as Dashboard, d as HomeLayout, c as Layout, l as StandardLayout, u as TwoColumnLayout, a as createPageLayoutBlock, o as createPageLayoutBlockGroup };
