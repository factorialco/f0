import { t as e } from "./dist-CqnuTXEz.js";
import { n as t, t as n } from "./utils-CVzxZnoI.js";
import { c as r } from "./input-CY_KWp0j.js";
import { n as i, t as a } from "./dist-BTQhQEA_.js";
import * as o from "react";
import { jsx as s } from "react/jsx-runtime";
//#region src/ui/toggle.tsx
var c = e({
	base: n("inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground-secondary disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-f1-background-secondary data-[state=on]:text-f1-foreground", t()),
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border border-f1-border bg-transparent hover:bg-f1-background-secondary hover:text-f1-foreground"
		},
		size: {
			default: "h-10 px-3",
			sm: "h-9 px-2.5",
			lg: "h-11 px-5"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), l = o.forwardRef(({ className: e, variant: t, size: i, ...a }, o) => /* @__PURE__ */ s(r, {
	ref: o,
	className: n(c({
		variant: t,
		size: i,
		className: e
	})),
	...a
}));
l.displayName = r.displayName;
//#endregion
//#region src/deprecated/ToggleGroup/ToggleGroup.tsx
var u = o.createContext({
	size: "default",
	variant: "default"
}), d = o.forwardRef(({ className: e, variant: t, size: r, children: a, ...o }, c) => /* @__PURE__ */ s(i, {
	ref: c,
	className: n("flex items-center justify-center gap-1.5", e),
	...o,
	children: /* @__PURE__ */ s(u.Provider, {
		value: {
			variant: t,
			size: r
		},
		children: a
	})
}));
d.displayName = i.displayName;
var f = o.forwardRef(({ className: e, children: t, variant: r, size: i, ...l }, d) => {
	let f = o.useContext(u);
	return /* @__PURE__ */ s(a, {
		ref: d,
		className: n(c({
			variant: f.variant || r,
			size: f.size || i
		}), e),
		...l,
		children: t
	});
});
f.displayName = a.displayName;
//#endregion
export { f as n, d as t };
