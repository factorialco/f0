import { cn as e } from "../../lib/utils.js";
import { toggleVariants as t } from "../../ui/toggle.js";
import * as n from "react";
import { jsx as r } from "react/jsx-runtime";
import * as i from "@radix-ui/react-toggle-group";
//#region src/deprecated/ToggleGroup/ToggleGroup.tsx
var a = n.createContext({
	size: "default",
	variant: "default"
}), o = n.forwardRef(({ className: t, variant: n, size: o, children: s, ...c }, l) => /* @__PURE__ */ r(i.Root, {
	ref: l,
	className: e("flex items-center justify-center gap-1.5", t),
	...c,
	children: /* @__PURE__ */ r(a.Provider, {
		value: {
			variant: n,
			size: o
		},
		children: s
	})
}));
o.displayName = i.Root.displayName;
var s = n.forwardRef(({ className: o, children: s, variant: c, size: l, ...u }, d) => {
	let f = n.useContext(a);
	return /* @__PURE__ */ r(i.Item, {
		ref: d,
		className: e(t({
			variant: f.variant || c,
			size: f.size || l
		}), o),
		...u,
		children: s
	});
});
s.displayName = i.Item.displayName;
//#endregion
export { o as ToggleGroup, s as ToggleGroupItem };
