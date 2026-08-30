import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/Marker.js";
import { F0AvatarIcon as n } from "../../../components/avatars/F0AvatarIcon/F0AvatarIcon.js";
import { Metadata as r } from "../../../experimental/Information/Headers/Metadata/index.js";
import { F0Text as i } from "../../../components/F0Text/F0Text.js";
import { Actions as a } from "./Actions.js";
import { NestedtaskHeader as o } from "./NestedtaskHeader.js";
import { TimelineRowLayout as s } from "./TimelineRowLayout.js";
import { useId as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/sds/timeline/components/NestedtaskRow.tsx
var d = ({ props: r }) => {
	let { status: a, icon: o = t, title: s, description: c } = r;
	return /* @__PURE__ */ u("div", {
		className: "flex min-h-8 items-center gap-3",
		children: [
			/* @__PURE__ */ l(n, {
				icon: o,
				size: "sm"
			}),
			/* @__PURE__ */ l("h4", {
				className: e("text-base font-semibold text-f1-foreground", a === "completed" && "line-through"),
				children: s
			}),
			c && /* @__PURE__ */ l(i, {
				content: c,
				variant: "description"
			})
		]
	});
}, f = ({ props: e }) => {
	let { status: t, isLast: n = !1, hideStatus: i = !1, expanded: f, collapsible: p = !0, items: m, content: h, metadata: g, primaryAction: _, secondaryActions: v, otherActions: y } = e, b = c(), x = !p || f, S = g?.some(Boolean), C = _ || v && v.length > 0 || y && y.length > 0;
	return /* @__PURE__ */ u(s, {
		status: t,
		isLast: n,
		hideStatus: i,
		children: [
			/* @__PURE__ */ l("div", {
				className: "flex min-h-8 items-center gap-3",
				children: /* @__PURE__ */ l(o, {
					props: e,
					contentId: b
				})
			}),
			g && S && /* @__PURE__ */ l("div", {
				className: "pl-9",
				children: /* @__PURE__ */ l(r, { items: g })
			}),
			x && /* @__PURE__ */ l("div", {
				id: b,
				role: "region",
				className: "flex flex-col gap-0 pl-4",
				children: h === void 0 ? m?.map((e, t) => /* @__PURE__ */ l(d, { props: e }, `${e.title}-${t}`)) : h
			}),
			C && /* @__PURE__ */ l("div", {
				className: "pl-9",
				children: /* @__PURE__ */ l(a, {
					primaryAction: _,
					secondaryActions: v,
					otherActions: y
				})
			})
		]
	});
};
//#endregion
export { f as NestedtaskRow };
