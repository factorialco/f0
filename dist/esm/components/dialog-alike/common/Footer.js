import { cn as e } from "../../../lib/utils.js";
import { ButtonInternal as t } from "../../F0Button/internal.js";
import { F0ButtonDropdown as n } from "../../F0ButtonDropdown/F0ButtonDropdown.js";
import { toArray as r } from "../../../lib/toArray.js";
import { useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/dialog-alike/common/Footer.tsx
var s = (s) => {
	let c = r(s.primaryAction), l = r(s.secondaryAction), [u, d] = i(!1), f = l.length > 0, p = c.length > 0;
	if (!p && !f) return null;
	let m = (e) => new Promise((t) => {
		t(e());
	});
	return /* @__PURE__ */ a("div", {
		className: "flex flex-row items-center justify-between border-x-0 border-b-0 border-t border-solid border-f1-border-secondary px-4 py-3",
		children: /* @__PURE__ */ o("div", {
			className: e("flex flex-row items-center gap-2 w-full", s.variant === "notification" ? "flex-1 justify-between" : "justify-end"),
			children: [l.length > 0 && l.map((e) => /* @__PURE__ */ a(t, {
				block: s.variant === "notification",
				label: e.label,
				onClick: async () => {
					await m(e.onClick), e.closeOnClick && s.onClose();
				},
				variant: "outline",
				icon: e.icon,
				disabled: e.disabled,
				loading: e.loading
			}, e.value ?? e.label)), (() => {
				if (!p) return null;
				let e = s.type === "critical" ? "critical" : "default";
				return c.length > 1 ? /* @__PURE__ */ a(n, {
					loading: u,
					items: c.map((e) => ({
						value: e.value ?? e.label,
						label: e.label,
						icon: e.icon,
						disabled: e.disabled,
						loading: e.loading
					})),
					onClick: async (e) => {
						if (u) return;
						let t = c.find((t) => t.value === e);
						if (t) {
							d(!0);
							try {
								await m(t.onClick);
							} finally {
								d(!1);
							}
							t.closeOnClick && s.onClose();
						}
					},
					variant: "default"
				}) : /* @__PURE__ */ a(t, {
					block: s.variant === "notification",
					label: c[0].label,
					onClick: async () => {
						await m(c[0].onClick), c[0]?.closeOnClick && s.onClose();
					},
					variant: e,
					icon: c[0].icon,
					disabled: c[0].disabled,
					loading: c[0].loading
				});
			})()]
		})
	});
};
//#endregion
export { s as Footer };
