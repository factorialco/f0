import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { F0Icon as n } from "../../../components/F0Icon/index.js";
import { ToggleGroup_exports as r } from "../../../ui/ToggleGroup/index.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { useControllableState as o } from "@radix-ui/react-use-controllable-state";
//#region src/experimental/Actions/F0SegmentedControl/F0SegmentedControl.tsx
var s = ({ items: s, value: c, onChange: l, disabled: u = !1, fullWidth: d = !1, hideLabels: f = !1, ariaLabel: p, ariaLabelledBy: m }) => {
	let [h, g] = o({
		prop: c,
		defaultProp: s[0]?.value ?? "",
		onChange: l
	});
	return /* @__PURE__ */ i(r.ToggleGroup, {
		type: "single",
		value: h,
		onValueChange: (e) => {
			e !== "" && g(e);
		},
		disabled: u,
		"aria-label": p,
		"aria-labelledby": m,
		className: e("inline-flex items-center rounded-md bg-f1-background-secondary p-0.5 gap-0.5", d && "w-full"),
		children: s.map((o) => /* @__PURE__ */ a(r.ToggleGroupItem, {
			value: o.value,
			disabled: u || o.disabled,
			className: e("relative flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded font-medium transition-all", "text-f1-foreground-secondary", "hover:text-f1-foreground hover:bg-f1-background-hover", "disabled:pointer-events-none disabled:text-f1-foreground-disabled", "data-[state=on]:bg-f1-background data-[state=on]:text-f1-foreground data-[state=on]:shadow", t(), "h-8 px-3 text-base", d && "w-full"),
			children: [o.icon && /* @__PURE__ */ i(n, {
				icon: o.icon,
				size: "md"
			}), f && o.icon ? /* @__PURE__ */ i("span", {
				className: "sr-only",
				children: o.label
			}) : o.label]
		}, o.value))
	});
};
s.displayName = "F0SegmentedControl";
//#endregion
export { s as F0SegmentedControl };
