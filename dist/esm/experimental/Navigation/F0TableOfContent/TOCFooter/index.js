import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import { OneEllipsis as n } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/experimental/Navigation/F0TableOfContent/TOCFooter/index.tsx
function a({ actions: a }) {
	return !a || a.length === 0 ? null : /* @__PURE__ */ r("div", {
		className: e("flex shrink-0 flex-col items-start gap-0.5 px-3 py-2"),
		children: a.map((a, o) => /* @__PURE__ */ i("div", {
			onClick: () => !a.disabled && a.onClick(),
			className: e("w-full flex flex-row justify-between py-1.5 px-2 rounded border border-solid border-transparent", !a.disabled && "cursor-pointer hover:bg-f1-background-hover", a.disabled && "cursor-not-allowed opacity-30"),
			children: [/* @__PURE__ */ r(n, {
				lines: 1,
				className: e("flex-grow text-[14px] font-medium text-f1-foreground-secondary transition-all"),
				children: a.label
			}), a.icon && /* @__PURE__ */ r(t, {
				icon: a.icon,
				color: "secondary"
			})]
		}, `toc-footer-action-${o}`))
	});
}
//#endregion
export { a as TOCFooter };
