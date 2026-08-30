import { cn as e, focusRing as t } from "../lib/utils.js";
import * as n from "react";
import { cva as r } from "cva";
import { jsx as i } from "react/jsx-runtime";
import * as a from "@radix-ui/react-toggle";
//#region src/ui/toggle.tsx
var o = r({
	base: e("inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground-secondary disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-f1-background-secondary data-[state=on]:text-f1-foreground", t()),
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
}), s = n.forwardRef(({ className: t, variant: n, size: r, ...s }, c) => /* @__PURE__ */ i(a.Root, {
	ref: c,
	className: e(o({
		variant: n,
		size: r,
		className: t
	})),
	...s
}));
s.displayName = a.Root.displayName;
//#endregion
export { s as Toggle, o as toggleVariants };
