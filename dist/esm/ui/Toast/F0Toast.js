import { cn as e } from "../../lib/utils.js";
import t from "../../icons/app/Cross.js";
import { useI18n as n } from "../../lib/providers/i18n/i18n-provider.js";
import { F0Button as r } from "../../components/F0Button/F0Button.js";
import { F0AvatarAlert as i } from "../../components/avatars/F0AvatarAlert/index.js";
import { Spinner as a } from "../Spinner/index.js";
import { F0Link as o } from "../../components/F0Link/F0Link.js";
import { toArray as s } from "../../lib/toArray.js";
import { forwardRef as c, useCallback as l, useEffect as u, useMemo as d, useState as f } from "react";
import { cva as p } from "cva";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/ui/Toast/F0Toast.tsx
var g = p({
	base: "isolation-isolate pointer-events-auto relative flex w-full flex-col gap-3 rounded-lg p-3 shadow-lg backdrop-blur-sm bg-f1-background-inverse dark:bg-f1-background-tertiary overflow-hidden",
	variants: { variant: {
		error: "",
		warning: "",
		success: "",
		loading: "",
		default: ""
	} },
	defaultVariants: { variant: "default" }
}), _ = p({
	base: "font-medium text-base",
	variants: {
		variant: {
			error: "text-f1-foreground-inverse",
			warning: "text-f1-foreground-inverse",
			success: "text-f1-foreground-inverse",
			loading: "text-f1-foreground-inverse",
			default: "text-f1-foreground-inverse"
		},
		hasIcon: {
			true: "pt-[3px]",
			false: ""
		}
	},
	defaultVariants: {
		variant: "default",
		hasIcon: !1
	}
}), v = c(({ title: c, description: p, variant: v = "default", duration: y, onClose: b, actions: x, forcePauseTimer: S }, C) => {
	let w = n(), [T, E] = f(y || 0), D = `${y ?? ""}|${v}|${c ?? ""}|${p ?? ""}`, [O, k] = f(D), [A, j] = f(!1);
	D !== O && (k(D), E(y || 0));
	let { role: M, ariaLive: N, avatarType: P, progressBarColor: F } = d(() => {
		let e = () => v === "error" || v === "warning" ? {
			role: "alert",
			ariaLive: "assertive"
		} : {
			role: "status",
			ariaLive: "polite"
		}, t = {
			error: "critical",
			warning: "warning",
			success: "positive",
			loading: null,
			default: null
		}, n = {
			error: "bg-f1-icon-critical",
			warning: "bg-f1-icon-warning",
			success: "bg-f1-icon-positive",
			loading: "bg-f1-foreground-inverse-secondary",
			default: "bg-f1-foreground-inverse-secondary"
		};
		return {
			...e(),
			avatarType: t[v],
			progressBarColor: n[v]
		};
	}, [v]), I = l(() => {
		b?.();
	}, [b]);
	u(() => {
		if (!y || y <= 0 || A || S) return;
		let e = setInterval(() => {
			E((e) => Math.max(e - 16, 0));
		}, 16);
		return () => clearInterval(e);
	}, [
		y,
		A,
		S
	]), u(() => {
		y && y > 0 && T <= 0 && I();
	}, [
		T,
		y,
		I
	]);
	let L = () => j(!0), R = () => j(!1), z = s(x), B = z.filter((e) => e.type === "button"), V = z.filter((e) => e.type === "link"), H = v === "loading", U = B.length > 0 || V.length > 0, W = y != null && y > 0, G = (e, t) => {
		t && t(), e.keepOpen || I();
	}, K = y ? T / y * 100 : 0;
	return /* @__PURE__ */ h("div", {
		ref: C,
		role: M,
		"aria-live": N,
		className: g({ variant: v }),
		onMouseEnter: L,
		onMouseLeave: R,
		children: [/* @__PURE__ */ h("div", {
			className: e("pointer-events-auto flex flex-row gap-3", p ? "items-start" : "items-center"),
			children: [
				H ? /* @__PURE__ */ m("div", {
					className: "flex-shrink-0",
					"aria-hidden": "true",
					children: /* @__PURE__ */ m(a, {
						size: "small",
						className: "text-f1-foreground-inverse"
					})
				}) : P && /* @__PURE__ */ m("div", {
					className: "flex-shrink-0",
					children: /* @__PURE__ */ m(i, {
						type: P,
						size: "sm"
					})
				}),
				/* @__PURE__ */ h("div", {
					className: "flex flex-1 flex-col gap-1",
					children: [c && /* @__PURE__ */ m("p", {
						className: _({
							variant: v,
							hasIcon: !!P || H
						}),
						children: c
					}), p && /* @__PURE__ */ m("p", {
						className: "line-clamp-3 text-base text-f1-foreground-inverse-secondary",
						children: p
					})]
				}),
				!H && U && /* @__PURE__ */ h("div", {
					className: "dark flex flex-shrink-0 flex-row flex-wrap items-center gap-3",
					children: [V.map((e) => /* @__PURE__ */ m("div", {
						onClick: () => G(e),
						children: /* @__PURE__ */ m(o, {
							href: e.href,
							children: e.label
						})
					}, `link-${e.label}`)), B.map((e) => /* @__PURE__ */ m(r, {
						label: e.label,
						icon: e.icon,
						variant: "outline",
						size: "sm",
						onClick: () => G(e, e.onClick)
					}, `button-${e.label}`))]
				}),
				b && !H && (!U || !W) && /* @__PURE__ */ m("div", {
					className: "dark flex-shrink-0",
					children: /* @__PURE__ */ m(r, {
						variant: "outline",
						icon: t,
						size: "sm",
						hideLabel: !0,
						onClick: I,
						label: w.actions.close
					})
				})
			]
		}), !H && y && y > 0 && /* @__PURE__ */ m("div", {
			className: "absolute bottom-0 left-0 right-0 h-[3px] w-full overflow-hidden rounded-b-lg",
			children: /* @__PURE__ */ m("div", {
				className: e("h-full w-full", F),
				style: {
					transform: `translateX(-${100 - K}%)`,
					transition: A ? "none" : "transform 16ms linear"
				}
			})
		})]
	});
});
v.displayName = "F0Toast";
//#endregion
export { v as F0Toast };
