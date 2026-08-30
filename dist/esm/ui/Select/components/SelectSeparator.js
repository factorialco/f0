import { cn as e } from "../../../lib/utils.js";
import { Separator as t } from "./radix-ui/select.js";
import * as n from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/ui/Select/components/SelectSeparator.tsx
var i = n.forwardRef(({ className: n, ...i }, a) => /* @__PURE__ */ r(t, {
	ref: a,
	className: e("-mx-1 my-1 h-px bg-f1-border-secondary", n),
	...i
}));
i.displayName = t.displayName;
//#endregion
export { i as SelectSeparator };
