import { cn as e } from "../../lib/utils.js";
import { F0ButtonToggleInternal as t } from "../F0ButtonToggle/internal/F0ButtonToggle.internal.js";
import { useEffect as n, useMemo as r, useState as i } from "react";
import { jsx as a } from "react/jsx-runtime";
import { ToggleGroup as o, ToggleGroupItem as s } from "@radix-ui/react-toggle-group";
//#region src/components/F0ButtonToggleGroup/F0ButtonToggleGroup.tsx
var c = (c) => {
	let { items: l, size: u, multiple: d, required: f, value: p, onChange: m, variant: h, disabled: g, withBorder: _ = !0, fullWidth: v = !1 } = c, [y, b] = i(p);
	n(() => {
		y !== p && b(p);
	}, [p]);
	let x = (e) => {
		f && (d && e.length === 0 || !e) || b(e);
	};
	n(() => {
		m?.(y);
	}, [y, d]);
	let S = r(() => l.map((e) => ({
		...e,
		disabled: g || e.disabled
	})), [l, g]), C = d ? y : [y];
	return /* @__PURE__ */ a(o, {
		...d ? {
			type: "multiple",
			value: y
		} : {
			type: "single",
			value: y
		},
		onValueChange: x,
		disabled: g,
		className: e("flex flex-wrap items-center justify-center gap-1", v && "w-full"),
		children: S.map((n) => /* @__PURE__ */ a(s, {
			value: n.value,
			asChild: !0,
			className: e(v && "flex-1"),
			children: /* @__PURE__ */ a(t, {
				...n,
				size: u,
				withBorder: _,
				variant: h,
				className: e(v && "w-full", n.className),
				selected: !!C?.includes(n.value),
				onSelectedChange: () => {}
			})
		}, n.value))
	});
};
//#endregion
export { c as F0ButtonToggleGroup };
