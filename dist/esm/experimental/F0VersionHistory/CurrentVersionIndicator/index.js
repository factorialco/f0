import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { F0Icon as n } from "../../../components/F0Icon/index.js";
import { OneEllipsis as r } from "../../../lib/OneEllipsis/OneEllipsis.js";
import i from "../../../icons/app/Bullet.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/experimental/F0VersionHistory/CurrentVersionIndicator/index.tsx
function s({ title: s, isActive: c = !1, onClick: l }) {
	return /* @__PURE__ */ o("button", {
		type: "button",
		className: e("flex w-full flex-row items-center gap-[6px] rounded-md p-[6px] pr-2 text-left transition-colors", c && "bg-f1-background-tertiary", l && "cursor-pointer hover:bg-f1-background-hover", t("focus-visible:ring-inset")),
		onClick: l,
		disabled: !l,
		"aria-label": `${s}${c ? " (selected)" : ""}`,
		"aria-pressed": l ? c : void 0,
		children: [/* @__PURE__ */ a(n, {
			icon: i,
			size: "md",
			color: "selected"
		}), /* @__PURE__ */ a(r, {
			lines: 1,
			className: "text-[13px] font-semibold leading-5 text-f1-foreground-selected",
			children: s
		})]
	});
}
//#endregion
export { s as CurrentVersionIndicator };
