import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/Check.js";
import { F0Button as n } from "../../F0Button/F0Button.js";
import { Popover as r, PopoverContent as i, PopoverTrigger as a } from "../../../ui/popover.js";
import { languageLabel as o } from "../../../lib/localized.js";
import { useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/F0AudioPlayer/components/LanguageSelect.tsx
function u({ value: u, options: d, onChange: f, kind: p }) {
	let [m, h] = s(!1), g = d.find((e) => e.locale === u), _ = g ? o(g) : u;
	return /* @__PURE__ */ l(r, {
		open: m,
		onOpenChange: h,
		children: [/* @__PURE__ */ c(a, {
			asChild: !0,
			children: /* @__PURE__ */ c(n, {
				variant: "outline",
				size: "sm",
				label: _,
				"aria-label": `${p}: ${_}`,
				tooltip: p
			})
		}), /* @__PURE__ */ c(i, {
			align: "end",
			sideOffset: 4,
			className: e("flex w-auto min-w-[8rem] flex-col gap-0.5 rounded-md border", "border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md"),
			role: "menu",
			"aria-label": p,
			onKeyDown: (e) => {
				let t = Array.from(e.currentTarget.querySelectorAll("[role=\"menuitemradio\"]"));
				if (t.length === 0) return;
				let n = t.indexOf(document.activeElement), r;
				switch (e.key) {
					case "ArrowDown":
						r = n < 0 ? 0 : (n + 1) % t.length;
						break;
					case "ArrowUp":
						r = n <= 0 ? t.length - 1 : n - 1;
						break;
					case "Home":
						r = 0;
						break;
					case "End":
						r = t.length - 1;
						break;
					default: return;
				}
				e.preventDefault(), t[r]?.focus();
			},
			children: d.map((n) => {
				let r = n.locale === u;
				return /* @__PURE__ */ l("button", {
					type: "button",
					role: "menuitemradio",
					"aria-checked": r,
					className: e("relative flex items-center rounded-xs py-1.5 pl-8 pr-3", "cursor-pointer border-none bg-transparent text-left text-sm font-medium", "text-f1-foreground transition-colors hover:bg-f1-background-secondary", "focus-visible:bg-f1-background-secondary focus-visible:outline-none", "[&_svg]:h-3.5 [&_svg]:w-3.5"),
					onClick: () => {
						f(n.locale), h(!1);
					},
					children: [r && /* @__PURE__ */ c("span", {
						className: "absolute left-2.5 inline-flex items-center",
						children: /* @__PURE__ */ c(t, {})
					}), o(n)]
				}, n.locale);
			})
		})]
	});
}
//#endregion
export { u as LanguageSelect };
