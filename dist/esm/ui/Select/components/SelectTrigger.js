import { cn as e } from "../../../lib/utils.js";
import { Trigger as t } from "./radix-ui/select.js";
import * as n from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/ui/Select/components/SelectTrigger.tsx
var i = n.forwardRef(({ className: n, children: i, ...a }, o) => /* @__PURE__ */ r(t, {
	ref: o,
	className: e(n),
	...a,
	children: i
}));
i.displayName = t.displayName;
//#endregion
export { i as SelectTrigger };
