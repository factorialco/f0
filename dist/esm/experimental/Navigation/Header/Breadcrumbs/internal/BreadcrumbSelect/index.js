import { F0Icon as e } from "../../../../../../components/F0Icon/index.js";
import t from "../../../../../../icons/app/ChevronDown.js";
import { F0Select as n } from "../../../../../../F0Select.js";
import { useState as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { motion as o } from "motion/react";
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbSelect/index.tsx
function s({ ...s }) {
	let [c, l] = r(s.open), u = (e) => {
		l(e), s.onOpenChange?.(e);
	}, d = s.placeholder || s.label, [f, p] = r(d), [m, h] = r(d);
	m !== d && (h(d), p(d));
	let g = (e, t, n) => {
		s.onChange?.(e, t, n);
	}, _ = (e) => {
		p(e?.label || "");
	};
	return /* @__PURE__ */ i(n, {
		...s,
		onOpenChange: u,
		onChange: g,
		onChangeSelectedOption: _,
		label: f,
		hideLabel: !0,
		children: /* @__PURE__ */ a("button", {
			className: "flex h-6 items-center justify-between rounded-sm border px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
			"aria-label": f,
			children: [/* @__PURE__ */ i("span", {
				className: "block grow text-f1-foreground",
				children: f
			}), /* @__PURE__ */ i("div", {
				className: "ml-2",
				children: /* @__PURE__ */ i(o.div, {
					animate: { rotate: c ? 180 : 0 },
					className: "h-[16px] w-[16px]",
					children: /* @__PURE__ */ i(e, {
						icon: t,
						size: "sm",
						className: "rounded-2xs bg-f1-background-secondary p-0.5"
					})
				})
			})]
		})
	});
}
//#endregion
export { s as BreadcrumbSelect };
