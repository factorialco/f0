import { cn as e } from "../lib/utils.js";
import * as t from "react";
import { jsx as n } from "react/jsx-runtime";
import * as r from "@radix-ui/react-label";
//#region src/ui/label.tsx
var i = t.forwardRef(({ className: t, ...i }, a) => /* @__PURE__ */ n(r.Root, {
	ref: a,
	className: e("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", t),
	...i
}));
i.displayName = r.Root.displayName;
//#endregion
export { i as Label };
