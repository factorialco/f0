import { cn as e } from "../../../../../lib/utils.js";
import { F0AvatarModule as t } from "../../../../../components/avatars/F0AvatarModule/index.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/experimental/Widgets/Content/ListItems/WidgetInboxListItem/index.tsx
var i = ({ onClick: e, className: t, children: r }) => e ? /* @__PURE__ */ n("a", {
	className: t,
	onClick: e,
	tabIndex: 0,
	children: r
}) : /* @__PURE__ */ n("div", {
	className: t,
	tabIndex: -1,
	children: r
});
function a({ id: a, title: o, subtitle: s, onClick: c, module: l }) {
	let u = e("flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground", c ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0);
	return /* @__PURE__ */ r(i, {
		onClick: (e) => {
			e.preventDefault(), c?.(a);
		},
		className: u,
		children: [/* @__PURE__ */ n(t, {
			module: l ?? "inbox",
			size: "sm"
		}), /* @__PURE__ */ r("div", {
			className: "flex-1",
			children: [/* @__PURE__ */ n("p", {
				className: "line-clamp-1 font-medium",
				children: o
			}), /* @__PURE__ */ n("p", {
				className: "line-clamp-1 text-f1-foreground-secondary",
				children: s
			})]
		})]
	});
}
//#endregion
export { a as WidgetInboxListItem };
