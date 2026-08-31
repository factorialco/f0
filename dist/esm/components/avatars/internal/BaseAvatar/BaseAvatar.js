import { F0Icon as e } from "../../../F0Icon/index.js";
import { Tooltip as t } from "../../../../experimental/Overlays/Tooltip/index.js";
import { F0AvatarModule as n } from "../../F0AvatarModule/index.js";
import { Avatar as r, AvatarFallback as i, AvatarImage as a } from "../../../../ui/Avatar/Avatar.js";
import { Badge as o } from "../../../../ui/IconBadge/index.js";
import { avatarSizes as s, sizesMapping as c } from "./types.js";
import { getAvatarColor as l, getAvatarSize as u, getBadgeSize as d, getInitials as f, getMask as p } from "./utils.js";
import { forwardRef as m, useMemo as h } from "react";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
//#region src/components/avatars/internal/BaseAvatar/BaseAvatar.tsx
var y = "md", b = {
	xs: "xs",
	sm: "sm",
	md: "md",
	lg: "md",
	xl: "lg",
	"2xl": "lg"
}, x = m(({ src: m, name: x, size: S, type: C = "base", color: w = "random", "aria-label": T, "aria-labelledby": E, badge: D, flag: O, icon: k }, A) => {
	let j = h(() => Object.fromEntries(Object.entries(c).map(([e, t]) => [t, e])), []), M = (e) => s.includes(e), N = y;
	S && !M(S) ? (console.warn(`The avatar size: ${S} is deprecated. Use ${c[S]} instead.`), N = c[S] ?? y) : N = S ?? y;
	let P = f(x, N), F = w === "random" ? l(Array.isArray(x) ? x.join("") : x) : w, I = !!(T || E), L = d(N), R = u(N), z = h(() => D ? /* @__PURE__ */ v(g, { children: [D.type === "module" && /* @__PURE__ */ _(n, {
		module: D.module,
		size: R
	}), D.type !== "module" && /* @__PURE__ */ _(o, {
		type: D.type,
		icon: D.icon,
		size: L
	})] }) : null, [
		D,
		L,
		R
	]), B = /* @__PURE__ */ v("div", {
		className: "relative inline-flex h-fit w-fit",
		children: [/* @__PURE__ */ _("div", {
			className: "relative h-fit w-fit",
			style: D ? { clipPath: p.get(C === "rounded" ? "rounded" : "base", N, D.type === "module" ? "module" : "default") } : void 0,
			children: /* @__PURE__ */ _(r, {
				size: j[N] || "small",
				type: C,
				color: F,
				ref: A,
				role: "img",
				"aria-hidden": !I,
				"aria-label": T,
				"aria-labelledby": E,
				translate: "no",
				"data-a11y-color-contrast-ignore": !0,
				className: k ? "bg-f1-background-secondary" : m || O ? "bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" : "",
				children: k ? /* @__PURE__ */ _(e, {
					icon: k.icon,
					color: k.color,
					size: b[N]
				}) : O ? /* @__PURE__ */ _("span", {
					className: "absolute inset-0",
					children: O
				}) : /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _(a, {
					src: m,
					alt: P
				}), /* @__PURE__ */ _(i, {
					"data-a11y-color-contrast-ignore": !0,
					className: "select-none",
					children: P
				})] })
			})
		}), D && /* @__PURE__ */ _("div", {
			className: "absolute -bottom-0.5 -right-0.5",
			children: z
		})]
	});
	return D?.tooltip ? /* @__PURE__ */ _(t, {
		description: D.tooltip,
		children: B
	}) : B;
});
x.displayName = "BaseAvatar";
//#endregion
export { x as BaseAvatar };
