import { F0Icon as e } from "../../components/F0Icon/index.js";
import t from "../../icons/app/Check.js";
import n from "../../icons/app/LayersFront.js";
import { useI18n as r } from "../../lib/providers/i18n/i18n-provider.js";
import { Action as i } from "../Action/Action.js";
import { forwardRef as a, useEffect as o, useState as s } from "react";
import { jsx as c } from "react/jsx-runtime";
import { AnimatePresence as l, motion as u } from "motion/react";
//#region src/ui/ButtonCopy/ButtonCopy.tsx
var d = {
	initial: {
		scale: .9,
		opacity: 0
	},
	animate: {
		scale: 1,
		opacity: 1
	},
	exit: {
		scale: .9,
		opacity: 0
	}
}, f = {
	duration: .15,
	ease: "easeOut"
}, p = a(({ valueToCopy: a, onCopy: p, copyTooltipLabel: m, copiedTooltipLabel: h, variant: g = "neutral", size: _ = "sm", ...v }, y) => {
	let [b, x] = s(!1), S = r(), C = m ?? S.actions.copy, w = b ? h ?? "Copied" : C;
	return o(() => {
		let e = null;
		return b && (e = setTimeout(() => x(!1), 1e3)), () => {
			e && clearTimeout(e);
		};
	}, [b]), /* @__PURE__ */ c(i, {
		ref: y,
		variant: g,
		size: _,
		onClick: (e) => {
			e.stopPropagation(), window.navigator.clipboard.writeText(a), x(!0), p?.(e);
		},
		"aria-live": "polite",
		"aria-label": w,
		title: w,
		...v,
		compact: !0,
		children: /* @__PURE__ */ c(l, {
			mode: "wait",
			initial: !1,
			children: /* @__PURE__ */ c(u.span, {
				variants: d,
				initial: "initial",
				animate: "animate",
				exit: "exit",
				transition: f,
				style: {
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					verticalAlign: "middle"
				},
				children: /* @__PURE__ */ c(e, {
					size: _ === "sm" ? "sm" : "md",
					icon: b ? t : n
				})
			}, b ? "check" : "copy")
		})
	});
});
p.displayName = "ButtonCopy";
//#endregion
export { p as ButtonCopy };
