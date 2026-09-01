"use client";
import { useReducedMotion as e } from "../../../lib/a11y.js";
import { useI18n as t } from "../../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as n } from "../../../ui/skeleton.js";
import { Chip as r } from "../../../components/OneChip/index.js";
import { getFilterType as i } from "../filterTypes/utils.js";
import { useEffect as a, useState as o } from "react";
import { Fragment as s, jsx as c } from "react/jsx-runtime";
import { motion as l } from "motion/react";
//#region src/patterns/OneFilterPicker/components/FilterChipButton.tsx
function u({ filter: u, filterKey: d, value: f, onSelect: p, onRemove: m }) {
	let [h, g] = o(!0), _ = e(), v = i(u.type), y = t(), [b, x] = o({ label: "" });
	return a(() => {
		(async () => {
			if (f === void 0) return;
			g(!0);
			let e = v.chipLabel, t = await e(f, {
				schema: u,
				i18n: y,
				filterKey: d
			}), n = typeof t == "object" ? t : {
				label: t,
				icon: void 0,
				avatar: void 0
			};
			x({
				label: `${u.label}: ${n.label}`,
				icon: n.icon,
				avatar: n.avatar
			}), g(!1);
		})();
	}, [
		f,
		v,
		u
	]), /* @__PURE__ */ c(l.div, {
		layout: !0,
		initial: !_ && {
			opacity: 0,
			scale: .8
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		exit: _ ? void 0 : {
			opacity: 0,
			scale: .8
		},
		transition: _ ? { duration: 0 } : {
			type: "spring",
			duration: .2
		},
		children: h ? /* @__PURE__ */ c(n, { className: "h-5 w-[100px]" }) : /* @__PURE__ */ c(s, { children: /* @__PURE__ */ c(r, {
			variant: "selected",
			...b,
			onClose: m,
			onClick: p
		}) })
	});
}
//#endregion
export { u as FilterChipButton };
