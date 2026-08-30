import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../../components/F0Icon/index.js";
import n from "../../../icons/app/Check.js";
import r from "../../../icons/app/Cross.js";
import { ButtonGroup as i } from "../../../ui/ButtonGroup/ButtonGroup.js";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/experimental/F0CardHorizontal/components/CardHorizontalActions.tsx
var c = {
	sm: "flex flex-col @xs:flex-row @xs:items-start @xs:justify-between @xs:gap-4",
	md: "flex flex-col @md:flex-row @md:items-start @md:justify-between @md:gap-4",
	lg: "flex flex-col @lg:flex-row @lg:items-start @lg:justify-between @lg:gap-4",
	never: "flex flex-row items-start justify-between gap-4"
}, l = {
	sm: "@xs:self-center",
	md: "@md:self-center",
	lg: "@lg:self-center",
	never: "self-center"
}, u = {
	sm: "@xs:flex-1",
	md: "@md:flex-1",
	lg: "@lg:flex-1",
	never: "flex-1"
}, d = {
	sm: "@xs:pt-1",
	md: "@md:pt-1",
	lg: "@lg:pt-1",
	never: "pt-1"
}, f = {
	sm: "@xs:min-h-10",
	md: "@md:min-h-10",
	lg: "@lg:min-h-10",
	never: "min-h-10"
}, p = {
	sm: "hidden @xs:flex",
	md: "hidden @md:flex",
	lg: "hidden @lg:flex",
	never: "flex"
}, m = {
	sm: "flex @xs:hidden",
	md: "flex @md:hidden",
	lg: "flex @lg:hidden",
	never: "hidden"
}, h = {
	sm: "-mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4 @xs:mx-0 @xs:mt-0 @xs:border-t-0 @xs:px-0 @xs:pt-0",
	md: "-mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4 @md:mx-0 @md:mt-0 @md:border-t-0 @md:px-0 @md:pt-0",
	lg: "-mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4 @lg:mx-0 @lg:mt-0 @lg:border-t-0 @lg:px-0 @lg:pt-0",
	never: ""
}, g = {
	neutral: "secondary",
	info: "info",
	positive: "positive",
	warning: "warning",
	critical: "critical"
};
function _({ primaryAction: c, secondaryActions: l, otherActions: _, confirmAction: v, rejectAction: y, status: b, stackAt: x = "never", hasAvatar: S = !1 }) {
	let C = S ? d[x] : void 0;
	if (b) return /* @__PURE__ */ o("div", {
		className: e("flex items-center justify-end", S && f[x], h[x]),
		children: /* @__PURE__ */ o(t, {
			icon: b.icon,
			color: g[b.variant],
			size: "lg",
			role: "img",
			"aria-label": b.label
		})
	});
	let w = e("relative z-[1]", u[x], h[x], C), T = (e) => /* @__PURE__ */ o("div", {
		className: w,
		onClick: (e) => e.stopPropagation(),
		children: e
	});
	if (v || y) {
		let t = (e) => {
			let t = y ? {
				id: "reject",
				icon: r,
				label: y.label ?? "Reject",
				hideLabel: e,
				disabled: y.disabled,
				onClick: y.onClick
			} : void 0, a = v ? {
				id: "confirm",
				icon: n,
				label: v.label ?? "Confirm",
				hideLabel: e,
				disabled: v.disabled,
				onClick: v.onClick
			} : void 0;
			return /* @__PURE__ */ o(i, {
				primaryAction: a,
				secondaryActions: t ? [t] : void 0,
				size: "md",
				canOverflow: !1
			});
		}, c = /* @__PURE__ */ o("div", {
			className: e("relative z-[1] flex-1", C, p[x]),
			onClick: (e) => e.stopPropagation(),
			children: t(!0)
		});
		return x === "never" ? c : /* @__PURE__ */ s(a, { children: [c, /* @__PURE__ */ o("div", {
			className: e("relative z-[1]", m[x], h[x]),
			onClick: (e) => e.stopPropagation(),
			children: t(!1)
		})] });
	}
	let E = Array.isArray(l) ? l.map((e, t) => ({
		id: `secondary-${t}`,
		label: e.label,
		icon: e.icon,
		onClick: e.onClick
	})) : l ? {
		label: l.label,
		href: l.href,
		target: l.target,
		disabled: l.disabled
	} : void 0, D = c ? {
		id: "primary",
		label: c.label,
		icon: c.icon,
		onClick: c.onClick,
		variant: c.variant
	} : void 0;
	return D || (Array.isArray(l) ? l.length > 0 : l) || (_?.length ?? 0) > 0 ? T(/* @__PURE__ */ o(i, {
		primaryAction: D,
		secondaryActions: E,
		otherActions: _,
		size: "md"
	})) : null;
}
//#endregion
export { _ as CardHorizontalActions, c as cardHorizontalClassName, l as cardHorizontalLeadingAlignClassName };
