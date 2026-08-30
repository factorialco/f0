import { cn as e } from "../../../../lib/utils.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { useEffect as n, useRef as r, useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
import { motion as s } from "motion/react";
import { useResizeObserver as c } from "usehooks-ts";
//#region src/experimental/Information/Headers/BaseHeader/Description.tsx
var l = ({ description: l }) => {
	let [u, d] = i(!1), [f, p] = i(!1), m = t(), h = r(null), g = r(null), _ = c({ ref: h }), v = c({ ref: g });
	return n(() => {
		v.height && _.height && p(v.height > _.height);
	}, [v.height, _.height]), /* @__PURE__ */ o("div", {
		className: "flex max-w-[640px] flex-col gap-1",
		children: [/* @__PURE__ */ o(s.div, {
			initial: !1,
			animate: { height: u ? v.height ?? _.height : _.height ?? "3rem" },
			transition: {
				duration: f ? .15 : 0,
				ease: [
					.165,
					.84,
					.44,
					1
				]
			},
			className: e(u ? "overflow-y-scroll" : "overflow-clip", "relative max-h-80"),
			children: [/* @__PURE__ */ a("div", {
				ref: g,
				className: "pointer-events-none invisible absolute left-0 top-0 -z-10 text-lg text-f1-foreground-secondary",
				"aria-hidden": "true",
				children: l
			}), /* @__PURE__ */ a("div", {
				ref: h,
				className: e("text-lg text-f1-foreground-secondary", !u && "line-clamp-2"),
				children: l
			})]
		}), (f || u) && /* @__PURE__ */ a("button", {
			onClick: () => d((e) => !e),
			className: "relative w-fit font-medium text-f1-foreground after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-f1-border after:transition-all after:content-[''] hover:after:bg-f1-border-hover",
			children: u ? m.actions.showLess : m.actions.showAll
		})]
	});
};
//#endregion
export { l as Description };
