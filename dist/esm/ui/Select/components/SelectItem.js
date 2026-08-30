import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../../components/F0Icon/index.js";
import n from "../../../icons/app/CheckCircle.js";
import { Checkbox as r } from "../../checkbox.js";
import { useSelectContext as i } from "../SelectContext.js";
import { Item as a, ItemIndicator as o, ItemText as s } from "./radix-ui/select.js";
import * as c from "react";
import { useMemo as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/ui/Select/components/SelectItem.tsx
var f = c.forwardRef(({ className: c, children: f, ...p }, m) => {
	let h = i(), { multiple: g } = h, _ = l(() => Array.isArray(h.value) ? h.value.includes(p.value) : h.value === p.value, [h.value, p.value]);
	return /* @__PURE__ */ d(a, {
		ref: m,
		className: e("relative grid w-full cursor-pointer select-none items-center gap-x-1.5 rounded px-3 py-2 outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] last:pb-3 last:after:bottom-1 last:after:h-[calc(100%-0.25rem)] first-of-type:pt-3 first-of-type:after:top-1 first-of-type:after:h-[calc(100%-0.25rem)] hover:after:opacity-100 focus:after:bg-f1-background-hover focus:after:text-f1-foreground focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_*]:z-10", "hover:data-[state=checked]:after:bg-f1-background-selected-bold/10 dark:data-[state=checked]:after:bg-f1-background-selected-bold/20 dark:hover:data-[state=checked]:after:bg-f1-background-selected-bold/20", "focus:outline-none focus:ring-0 focus:ring-transparent", "[&>*]:translate-y-0.5", !g && "data-[state=checked]:after:bg-f1-background-selected-bold/10 data-[state=checked]:after:opacity-100", g || _ ? "grid-cols-[1fr_20px]" : void 0, c),
		...p,
		children: [/* @__PURE__ */ u(s, { children: f }), g ? /* @__PURE__ */ u(r, {
			title: "Select item",
			onClick: (e) => e.stopPropagation(),
			onKeyDown: (e) => e.stopPropagation(),
			checked: _,
			hideLabel: !0
		}) : _ && /* @__PURE__ */ u(o, {
			className: "flex text-f1-icon-selected",
			children: /* @__PURE__ */ u(t, {
				icon: n,
				size: "md"
			})
		})]
	});
});
f.displayName = a.displayName;
//#endregion
export { f as SelectItem };
