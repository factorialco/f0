"use client";
import { cn as e } from "../lib/utils.js";
import * as t from "react";
import { jsx as n } from "react/jsx-runtime";
import * as r from "@radix-ui/react-progress";
//#region src/ui/progress.tsx
var i = t.forwardRef(({ className: t, value: i, ...a }, o) => /* @__PURE__ */ n(r.Root, {
	ref: o,
	value: i,
	className: e("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", t),
	...a,
	children: /* @__PURE__ */ n(r.Indicator, {
		className: "h-full w-full flex-1 transition-all",
		style: {
			backgroundColor: a.color,
			transform: `translateX(-${100 - (i || 0)}%)`
		}
	})
}));
i.displayName = r.Root.displayName;
//#endregion
export { i as Progress };
