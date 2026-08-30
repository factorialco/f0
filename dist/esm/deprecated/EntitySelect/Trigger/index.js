import { cn as e } from "../../../lib/utils.js";
import { OneEllipsis as t } from "../../../lib/OneEllipsis/PlainEllipsis.js";
import { F0InputField as n } from "../../../components/F0InputField/F0InputField.js";
import { Arrow as r } from "../../../components/F0Select/components/Arrow.js";
import { useMemo as i } from "react";
import { Fragment as a, jsx as o } from "react/jsx-runtime";
//#region src/deprecated/EntitySelect/Trigger/index.tsx
var s = ({ placeholder: s, selected: c, selectedEntities: l, disabled: u = !1, hiddenAvatar: d = !1, label: f, labelIcon: p, icon: m, error: h, status: g, hint: _, onClickContent: v, hideLabel: y = !1, maxLength: b, loading: x = !1, required: S = !1, readonly: C = !1, append: w, size: T = "sm", open: E }) => {
	let D = i(() => l.some((e) => e.subItems && e.subItems.length > 0), [l]), O = i(() => D ? l.flatMap((e) => (e.subItems ?? []).map((t) => ({
		parent: e,
		subItem: t
	}))) : l.map((e) => ({
		parent: null,
		subItem: {
			subId: e.id,
			subName: e.name,
			subAvatar: e.avatar,
			subDeactivated: e.deactivated
		}
	})), [D, l]), k = O.length === 0 ? void 0 : O.length === 1 ? O[0].subItem.subName : O.length + " " + c, A = O.length === 1 ? O[0].subItem.subName : void 0;
	return /* @__PURE__ */ o(n, {
		onClickContent: v,
		role: "combobox",
		label: f,
		labelIcon: p,
		"aria-expanded": !1,
		"aria-controls": "listbox",
		icon: m && !k ? m : void 0,
		error: h,
		status: g,
		hint: _,
		hideLabel: y,
		maxLength: b,
		clearable: !1,
		value: k,
		disabled: u,
		loading: x,
		required: S,
		readonly: C,
		size: T,
		avatar: d || !A ? void 0 : {
			type: "person",
			firstName: A,
			lastName: "",
			src: O[0].subItem.subAvatar,
			deactivated: O[0].subItem.subDeactivated
		},
		append: w ?? /* @__PURE__ */ o(a, { children: /* @__PURE__ */ o(r, {
			open: E,
			disabled: u,
			size: T
		}) }),
		children: /* @__PURE__ */ o("span", {
			role: "button",
			className: e("my-auto flex items-center pr-1", s && "text-f1-foreground-secondary", k && "text-f1-foreground", O.length === 1 && !d || m && !k ? "pl-8" : "pl-2"),
			children: /* @__PURE__ */ o(t, {
				tag: "span",
				className: O.length === 1 && O[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
				children: O.length === 0 ? s ?? "" : O.length === 1 ? O[0].subItem.subName : `${O.length} ${c}`
			})
		})
	});
};
//#endregion
export { s as Trigger };
