import { F0Button as e } from "../../../../components/F0Button/F0Button.js";
import { F0ButtonDropdown as t } from "../../../../components/F0ButtonDropdown/F0ButtonDropdown.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/deprecated/EntitySelect/Content/MainContent/Footer.tsx
var i = ({ primaryAction: r, secondaryActions: i }) => {
	if (!i || i.length === 0) return /* @__PURE__ */ n(e, {
		disabled: r.disabled,
		variant: r.variant,
		onClick: r.onClick,
		label: r.label,
		icon: r.icon,
		size: "sm"
	});
	let a = [r, ...i ?? []], o = a.map((e) => ({
		label: e.label,
		value: e.label,
		icon: e.icon,
		critical: e.variant === "critical"
	})) || [], s = (e) => {
		let t = a.find((t) => t.label === e);
		t && !t.disabled && t.onClick?.();
	}, c = a.every((e) => e.disabled);
	return /* @__PURE__ */ n(t, {
		items: o,
		value: r.label,
		disabled: c,
		onClick: s,
		variant: "outline",
		size: "sm"
	});
}, a = ({ actions: e, selectAllLabel: t, clearLabel: a, disabled: o, allVisibleSelected: s, anyVisibleSelected: c, loading: l, singleSelector: u, onSelectAll: d, onClear: f }) => {
	let p = !u && (t || a), m = e && e.length > 0;
	if (!(!l && (!u && p || m))) return null;
	let h, g, _ = d ? {
		label: t || "",
		onClick: d,
		variant: "outline",
		disabled: o || s
	} : void 0, v = f ? {
		label: a || "",
		onClick: f,
		variant: "ghost",
		disabled: o || !c
	} : void 0;
	return _ || (_ = v, v = void 0), m && p ? (h = /* @__PURE__ */ n(i, {
		primaryAction: _,
		secondaryActions: v ? [v] : []
	}), g = /* @__PURE__ */ n(i, {
		primaryAction: e[0],
		secondaryActions: e.slice(1)
	})) : m ? h = /* @__PURE__ */ n(i, {
		primaryAction: e[0],
		secondaryActions: e.slice(1)
	}) : p && (h = /* @__PURE__ */ n(i, {
		primaryAction: _,
		secondaryActions: []
	}), v && (g = /* @__PURE__ */ n(i, {
		primaryAction: v,
		secondaryActions: []
	}))), /* @__PURE__ */ n("footer", {
		className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl",
		children: /* @__PURE__ */ r("div", {
			className: "flex flex-1 justify-between p-2",
			children: [h, g]
		})
	});
};
//#endregion
export { a as Footer };
