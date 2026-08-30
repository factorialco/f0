import { F0Button as e } from "../../../../../F0Button/F0Button.js";
import { F0ButtonDropdown as t } from "../../../../../F0ButtonDropdown/F0ButtonDropdown.js";
import { Switch as n } from "../../../../../../experimental/Forms/Fields/Switch/index.js";
import { ToolbarDivider as r } from "../../../../internal/Toolbar/ToolbarDivider/index.js";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/RichText/F0RichTextEditor/components/Footer/ActionsMenu/index.tsx
var s = (e) => e ? e.toLowerCase().replace(" ", "-") : "", c = (e) => e ? Array.isArray(e) ? e : [e] : [], l = (e, t) => {
	let n = e ? [{
		label: e.action.label,
		value: s(e.action.label),
		icon: e.action.icon
	}] : [], r = e?.subActions?.map((e) => ({
		label: e.label,
		value: s(e.label),
		icon: e.icon
	})) || [], i = t?.map((e) => ({
		label: e.label,
		value: s(e.label),
		icon: "icon" in e ? e.icon : void 0
	})) || [];
	return [
		...n,
		...r,
		...i
	];
}, u = (e, t, n) => {
	if (e === s(t?.action.label)) {
		t?.action.onClick();
		return;
	}
	let r = n?.find((t) => s(t.label) === e);
	if (r) {
		r.onClick();
		return;
	}
	t?.subActions?.find((t) => s(t.label) === e)?.onClick();
}, d = ({ secondaryActions: t, useLittleMode: r, primaryAction: i, isFullscreen: s, disableButtons: c }) => {
	if (t.length === 0) return null;
	let l = [], u = [];
	for (let e of t) (e.type === "switch" ? l : u).push(e);
	let d = r && i && !s && u.length > 0;
	return /* @__PURE__ */ o("div", {
		className: "flex items-center gap-3",
		children: [l.map((e, t) => {
			let r = e;
			return /* @__PURE__ */ a(n, {
				title: e.label,
				checked: r.checked || !1,
				onCheckedChange: (t) => {
					e.onClick(t);
				},
				disabled: c || e.disabled,
				hideLabel: r.hideLabel || !1
			}, `switch-${t}`);
		}), !d && u.map((t, n) => /* @__PURE__ */ a(e, {
			onClick: (e) => {
				e.preventDefault(), t.onClick();
			},
			variant: "variant" in t ? t.variant : "outline",
			size: "md",
			label: t.label,
			disabled: c || t.disabled,
			icon: "icon" in t ? t.icon : void 0
		}, `button-${n}`))]
	});
}, f = ({ primaryAction: t, disableButtons: n, onClick: r }) => /* @__PURE__ */ a(e, {
	onClick: r,
	variant: t.variant ?? "default",
	size: "md",
	label: t.label || "",
	disabled: n || t.disabled,
	icon: t.icon
}), p = ({ primaryAction: n, isFullscreen: c, listOfActions: l, handleOnClick: u, disableButtons: d, includeSecondaryInDropdown: p }) => c ? /* @__PURE__ */ o(i, { children: [
	n.subActions?.map((t) => /* @__PURE__ */ a(e, {
		onClick: (e) => {
			e.preventDefault(), t.onClick();
		},
		variant: n.action.variant ?? "default",
		size: "md",
		label: t.label,
		disabled: d || t.disabled,
		icon: t.icon
	}, s(t.label))),
	n.subActions?.length && /* @__PURE__ */ a(r, {}),
	/* @__PURE__ */ a(f, {
		primaryAction: n.action,
		disableButtons: d,
		onClick: (e) => {
			e.preventDefault(), n.action.onClick();
		}
	})
] }) : n.subActions || p ? /* @__PURE__ */ a(t, {
	items: l,
	onClick: u,
	variant: n.action.variant ?? "default",
	disabled: d,
	size: "md"
}) : /* @__PURE__ */ a(f, {
	primaryAction: n.action,
	disableButtons: d,
	onClick: (e) => {
		e.preventDefault(), n.action.onClick();
	}
}), m = ({ secondaryAction: e, primaryAction: t, useLittleMode: n, disableButtons: i, isFullscreen: s }) => {
	let f = c(e);
	if (f.length === 0 && !t) return null;
	let m = f.filter((e) => e.type !== "switch"), h = m.length > 0 && n && t && !s, g = l(t, h ? m : void 0), _ = (e) => u(e, t, f), v = f.length > 0 && t && (!n || f.some((e) => e.type === "switch") || s);
	return /* @__PURE__ */ o("div", {
		className: "scrollbar-macos flex items-center gap-2 overflow-x-auto overflow-y-hidden",
		children: [
			/* @__PURE__ */ a(d, {
				secondaryActions: f,
				useLittleMode: n,
				primaryAction: t,
				isFullscreen: s,
				disableButtons: i
			}),
			v && /* @__PURE__ */ a(r, {}),
			t && p({
				primaryAction: t,
				isFullscreen: s,
				listOfActions: g,
				handleOnClick: _,
				disableButtons: i,
				includeSecondaryInDropdown: h ?? !1
			})
		]
	});
};
//#endregion
export { m as ActionsMenu };
