import { cn as e } from "../utils.js";
import { Tooltip as t, TooltipContent as n, TooltipProvider as r, TooltipTrigger as i } from "../../ui/tooltip.js";
import { useEllipsisOverflow as a } from "./use-ellipsis-overflow.js";
import o, { forwardRef as s, useRef as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/lib/OneEllipsis/PlainEllipsis.tsx
var d = s(({ children: s, className: d, disabled: f = !1, lines: p = 1, noTooltip: m = !1, tag: h = "span", ...g }, _) => {
	let v = c(null), y = _ || v, b = a({
		disabled: f,
		lines: p,
		ref: typeof y == "object" ? y : null
	}), x = o.createElement(h, {
		ref: y,
		className: e(!m && b && "pointer-events-auto", "min-w-0 max-w-full overflow-hidden", !f && [p === 1 ? "text-ellipsis" : "", p > 1 ? `not-supports-[(-webkit-line-clamp:${p})]:whitespace-nowrap line-clamp-1 whitespace-normal` : "block whitespace-nowrap"], d),
		style: {
			WebkitLineClamp: p > 1 ? p : void 0,
			lineClamp: p > 1 ? p : void 0
		},
		...g,
		"data-testid": "one-ellipsis"
	}, s), S = b && !m;
	return /* @__PURE__ */ l(r, { children: /* @__PURE__ */ u(t, { children: [/* @__PURE__ */ l(i, {
		asChild: !0,
		className: S ? "pointer-events-auto" : void 0,
		children: x
	}), S && /* @__PURE__ */ l(n, {
		className: "max-w-xl",
		children: s
	})] }) });
});
d.displayName = "PlainEllipsis";
//#endregion
export { d as OneEllipsis, d as PlainEllipsis };
