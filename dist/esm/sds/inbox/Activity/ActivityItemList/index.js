import { experimentalComponent as e } from "../../../../lib/experimental.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { withSkeleton as n } from "../../../../lib/skeleton.js";
import { categorizeItemsByDate as r } from "../../../../lib/date.js";
import { ActivityItem as i } from "../ActivityItem/index.js";
import { Section as a } from "./Section/index.js";
import o from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import l from "lodash/sortBy";
import u from "lodash/throttle";
//#region src/sds/inbox/Activity/ActivityItemList/index.tsx
var d = 3, f = [
	"today",
	"yesterday",
	"lastWeek",
	"lastMonth"
], p = (e) => l(e, ([e]) => {
	let t = f.indexOf(e);
	return t === -1 ? -Number(e) : t - 4e3;
}), m = () => /* @__PURE__ */ s("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), h = ({ items: e, loadingMoreItems: n = !1, onClickItem: l, onEndReached: f, onEndReachedItemsThreshold: h = 5 }) => {
	let g = t(), _ = r(e, "createdAt"), v = Object.values(_).slice().flatMap((e) => e.map((e) => e.id)).slice(-h), y = u((e) => {
		v.includes(e) && f?.();
	}, 1e3), b = p(Object.entries(_).filter(([e, t]) => !!t.length));
	return /* @__PURE__ */ c("div", {
		className: "flex flex-col gap-2 p-2",
		children: [b.map(([e, t], n) => /* @__PURE__ */ c(o.Fragment, { children: [/* @__PURE__ */ s(a, {
			title: e in g.date.groups ? g.date.groups[e] : e,
			items: t,
			onClickItem: l,
			onItemVisible: y
		}), n !== b.length - 1 && /* @__PURE__ */ s(m, {})] }, e)), n && Array(d).fill(null).map((e, t) => /* @__PURE__ */ s(i.Skeleton, {}, t))]
	});
}, g = () => {
	let e = t();
	return /* @__PURE__ */ c("div", {
		className: "flex flex-col gap-2 p-2",
		children: [
			/* @__PURE__ */ s(a.Skeleton, {
				title: e.date.groups.today,
				numItems: 1
			}),
			/* @__PURE__ */ s(m, {}),
			/* @__PURE__ */ s(a.Skeleton, {
				title: e.date.groups.yesterday,
				numItems: 3
			}),
			/* @__PURE__ */ s(m, {}),
			/* @__PURE__ */ s(a.Skeleton, {
				title: e.date.groups.lastMonth,
				numItems: 5
			})
		]
	});
}, _ = e("ActivityItemList", n(h, g));
//#endregion
export { _ as ActivityItemList, g as ActivityItemListSkeleton, h as BaseActivityItemList };
