import { F0Button as e } from "../../../../components/F0Button/F0Button.js";
import { F0AvatarModule as t } from "../../../../components/avatars/F0AvatarModule/index.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/sds/Home/Communities/HighlightBanner/index.tsx
var i = ({ title: i, subtitle: a, buttonLabel: o, onClick: s }) => /* @__PURE__ */ r("div", {
	className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4",
	children: [/* @__PURE__ */ r("div", {
		className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center",
		children: [/* @__PURE__ */ n(t, {
			module: "kudos",
			size: "md"
		}), /* @__PURE__ */ r("div", {
			className: "flex flex-col",
			children: [/* @__PURE__ */ n("span", {
				className: "font-medium text-f1-foreground",
				children: i
			}), /* @__PURE__ */ n("span", {
				className: "text-f1-foreground-secondary",
				children: a
			})]
		})]
	}), /* @__PURE__ */ n("div", {
		className: "w-full sm:w-fit [&>div]:w-full",
		children: /* @__PURE__ */ n(e, {
			label: o,
			variant: "outline",
			onClick: s
		})
	})]
});
//#endregion
export { i as HighlightBanner };
