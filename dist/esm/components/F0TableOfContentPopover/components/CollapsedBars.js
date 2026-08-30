import { cn as e } from "../../../lib/utils.js";
import { useMemo as t } from "react";
import { cva as n } from "cva";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/F0TableOfContentPopover/components/CollapsedBars.tsx
var i = 16, a = n({
	base: "h-0.5 rounded-full bg-f1-foreground cursor-pointer",
	variants: {
		depth: {
			0: "w-4",
			1: "w-3",
			2: "w-2",
			3: "w-1.5"
		},
		variant: {
			light: "",
			dark: "dark"
		},
		active: {
			true: "",
			false: ""
		}
	},
	compoundVariants: [{
		variant: "light",
		active: !1,
		className: "bg-f1-foreground-tertiary opacity-60"
	}, {
		variant: "dark",
		active: !1,
		className: "opacity-50"
	}],
	defaultVariants: {
		depth: 3,
		variant: "light",
		active: !0
	}
});
function o(e, t = 0) {
	return e.flatMap((e) => [{
		id: e.id,
		depth: Math.min(t, 3)
	}, ...e.children ? o(e.children, t + 1) : []]);
}
function s(e, t) {
	let n = e.length;
	if (n <= i) return e;
	let r = n / 15, a = new Set(Array.from({ length: 15 }, (e, t) => Math.min(Math.floor(t * r), n - 1)));
	if (a.add(n - 1), t) {
		let n = e.findIndex((e) => e.id === t);
		if (n !== -1 && !a.has(n)) {
			let e = [...a].reduce((e, t) => Math.abs(t - n) < Math.abs(e - n) ? t : e);
			a.delete(e), a.add(n);
		}
	}
	return [...a].sort((e, t) => e - t).map((t) => e[t]);
}
function c({ items: n, activeItem: i, className: c, align: l = "left", variant: u = "dark" }) {
	let d = t(() => s(o(n), i), [n, i]);
	return /* @__PURE__ */ r("div", {
		className: e("flex flex-col justify-center gap-2 py-3", l === "right" ? "items-end" : "items-start", c),
		children: d.map((e) => /* @__PURE__ */ r("div", { className: a({
			depth: e.depth,
			variant: u,
			active: e.id === i
		}) }, e.id))
	});
}
//#endregion
export { c as CollapsedBars };
