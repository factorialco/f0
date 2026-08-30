import { withSkeleton as e } from "../../../../../lib/skeleton.js";
import { ActivityItem as t } from "../../ActivityItem/index.js";
import "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/sds/inbox/Activity/ActivityItemList/Section/index.tsx
var i = ({ title: e, children: t }) => /* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n("div", {
	className: "pb-2 pl-2 pt-1",
	children: /* @__PURE__ */ n("p", {
		className: "text-sm font-medium text-f1-foreground-secondary",
		children: e
	})
}), /* @__PURE__ */ n("div", {
	className: "flex flex-col gap-1",
	children: t
})] }), a = e(({ title: e, items: r, onClickItem: a, onItemVisible: o }) => /* @__PURE__ */ n(i, {
	title: e,
	children: r.map((e) => /* @__PURE__ */ n(t, {
		...e,
		onClick: () => a(e.id),
		onVisible: o
	}, e.id))
}), ({ title: e, numItems: r }) => /* @__PURE__ */ n(i, {
	title: e,
	children: Array.from({ length: r }).map((e, r) => /* @__PURE__ */ n(t.Skeleton, {}, r))
}));
//#endregion
export { a as Section };
