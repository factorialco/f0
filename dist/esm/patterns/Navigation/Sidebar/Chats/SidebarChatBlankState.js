import { withDataTestId as e } from "../../../../lib/data-testid/index.js";
import { ButtonInternal as t } from "../../../../components/F0Button/internal.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/patterns/Navigation/Sidebar/Chats/SidebarChatBlankState.tsx
function i({ title: e, description: i, actions: a, ...o }) {
	return /* @__PURE__ */ r("div", {
		className: "flex flex-col items-center gap-3 px-2 py-6 text-center",
		...o,
		children: [/* @__PURE__ */ r("div", {
			className: "flex flex-col gap-0.5",
			children: [/* @__PURE__ */ n("p", {
				className: "text-base font-medium text-f1-foreground",
				children: e
			}), i && /* @__PURE__ */ n("p", {
				className: "text-base text-f1-foreground-secondary",
				children: i
			})]
		}), a && a.length > 0 && /* @__PURE__ */ n("div", {
			className: "flex flex-col items-center gap-2",
			children: a.map((e) => /* @__PURE__ */ n(t, {
				label: e.label,
				variant: e.variant ?? "outline",
				icon: e.icon,
				size: "md",
				onClick: e.onClick
			}, e.label))
		})]
	});
}
var a = e(i);
//#endregion
export { a as SidebarChatBlankState };
