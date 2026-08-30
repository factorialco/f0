import { experimentalComponent as e } from "../../../lib/experimental.js";
import { cn as t } from "../../../lib/utils.js";
import { Item as n } from "./items/Item.js";
import { PersonItem as r } from "./items/PersonItem.js";
import { CompanyItem as i } from "./items/CompanyItem.js";
import { TeamItem as a } from "./items/TeamItem.js";
import { DotTagItem as o } from "./items/DotTagItem.js";
import { AlertTagItem as s } from "./items/AlertTagItem.js";
import { BalanceTagItem as c } from "./items/BalanceTagItem.js";
import { StatusTagItem as l } from "./items/StatusTagItem.js";
import { RawTagItem as u } from "./items/RawTagItem.js";
import { TagListItem as d } from "./items/TagListItem.js";
import { forwardRef as f } from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/experimental/Lists/DataList/index.tsx
var h = f(({ children: e, label: n, isHorizontal: r = !1 }, i) => /* @__PURE__ */ m("div", {
	className: t(r ? "flex min-h-12 flex-1 flex-col py-1.5 pl-3 pr-1.5 xs:flex-row" : "min-w-32"),
	children: [n && /* @__PURE__ */ p("p", {
		className: t("px-1.5 text-f1-foreground-secondary", r ? "mt-2 w-44 xs:px-0" : "mb-0.5"),
		children: n
	}), /* @__PURE__ */ p("ul", {
		className: "flex flex-col justify-center gap-0.5",
		ref: i,
		children: e
	})]
}));
h.displayName = "DataList";
var g = e("DataList", h), _ = Object.assign(g, {
	Item: n,
	CompanyItem: i,
	PersonItem: r,
	TeamItem: a,
	DotTagItem: o,
	AlertTagItem: s,
	BalanceTagItem: c,
	StatusTagItem: l,
	RawTagItem: u,
	TagListItem: d
});
//#endregion
export { _ as DataList };
