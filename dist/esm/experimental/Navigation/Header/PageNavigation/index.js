import e from "../../../../icons/app/ChevronLeft.js";
import t from "../../../../icons/app/ChevronRight.js";
import { ButtonInternal as n } from "../../../../components/F0Button/internal.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/experimental/Navigation/Header/PageNavigation/index.tsx
function a({ icon: e, target: t, fallbackLabel: i }) {
	let a = !t, o = t?.title || i, s = t?.onClick, c = s ? void 0 : t?.url;
	return /* @__PURE__ */ r(n, {
		...s ? {
			onClick: s,
			type: "button"
		} : { href: c ?? "" },
		title: a ? void 0 : o,
		"aria-label": o,
		disabled: a,
		noAutoTooltip: a,
		noTitle: a,
		size: "sm",
		variant: "outline",
		label: o,
		icon: e,
		hideLabel: !0
	});
}
function o({ previous: n, next: o, counter: s }) {
	return /* @__PURE__ */ i("div", {
		className: "flex items-center gap-3",
		children: [s && /* @__PURE__ */ i("span", {
			className: "text-sm text-f1-foreground-secondary",
			children: [
				s.current,
				"/",
				s.total
			]
		}), /* @__PURE__ */ i("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ r(a, {
				icon: e,
				target: n,
				fallbackLabel: "Previous"
			}), /* @__PURE__ */ r(a, {
				icon: t,
				target: o,
				fallbackLabel: "Next"
			})]
		})]
	});
}
//#endregion
export { o as PageNavigation };
