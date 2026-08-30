import { DataTestIdWrapper as e } from "../../../../../lib/data-testid/index.js";
import { cn as t, focusRing as n } from "../../../../../lib/utils.js";
import { F0Icon as r } from "../../../../../components/F0Icon/index.js";
import { getAvatarColor as ee } from "../../../../../components/avatars/internal/BaseAvatar/utils.js";
import { F0Avatar as i } from "../../../../../components/avatars/F0Avatar/index.js";
import { forwardRef as a } from "react";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
import { AnimatePresence as l, motion as u, useReducedMotion as te } from "motion/react";
import { baseColors as d } from "@factorialco/f0-core";
//#region src/patterns/F0Map/components/internal/BaseMapMarker/BaseMapMarker.tsx
var f = [
	"neutral",
	"grey",
	"radical",
	"malibu",
	"viridian",
	"flubber",
	"grass",
	"camel",
	"indigo",
	"lilac",
	"orange",
	"purple",
	"yellow",
	"red",
	"army",
	"smoke",
	"barbie"
], p = f.filter((e) => e !== "neutral" && e !== "grey"), m = {
	neutral: d.grey[100],
	grey: d.grey.solid[50],
	...Object.fromEntries(p.map((e) => [e, d[e][50]]))
}, h = (e) => `hsl(${m[e]})`, g = {
	neutral: d.grey[100],
	grey: "218 14% 30%",
	...Object.fromEntries(p.map((e) => [e, d[e][70]]))
}, _ = (e, t) => t ? g[e] : m[e], v = d.grey[100], y = {
	sm: {
		d: 16,
		border: 1.5,
		label: 10,
		lineH: 13,
		gap: 2,
		maxLabelW: 96,
		caretW: 14,
		caretH: 10,
		caretOverlap: 5,
		shadowY: 1,
		shadowBlur: 3,
		icon: "xs",
		avatar: "xs"
	},
	md: {
		d: 24,
		border: 2,
		label: 14,
		lineH: 18,
		gap: 3,
		maxLabelW: 132,
		caretW: 22,
		caretH: 14,
		caretOverlap: 7,
		shadowY: 2,
		shadowBlur: 4,
		icon: "sm",
		avatar: "sm"
	},
	lg: {
		d: 32,
		border: 2.5,
		label: 18,
		lineH: 23,
		gap: 4,
		maxLabelW: 168,
		caretW: 29,
		caretH: 18,
		caretOverlap: 9,
		shadowY: 3,
		shadowBlur: 5,
		icon: "md",
		avatar: "md"
	},
	xl: {
		d: 44,
		border: 3,
		label: 20,
		lineH: 26,
		gap: 5,
		maxLabelW: 200,
		caretW: 38,
		caretH: 24,
		caretOverlap: 12,
		shadowY: 4,
		shadowBlur: 7,
		icon: "lg",
		avatar: "lg"
	}
}, b = (e) => y[e], x = 5.6, S = 1.5, C = () => {
	let e = y.xl;
	return -(e.d - e.caretOverlap + e.caretH + x + S) + 3;
}, w = "hsl(var(--white-100))", T = a(function(a, d) {
	let { size: f = "md", selected: p = !1, collapsed: m = !1, label: _, showLabel: b = !0, labelPlacement: S = "right", onClick: T, ariaLabel: E, presentational: ne = !1, dataTestId: re, className: D } = a, O = a.variant ?? "color", k = y[p ? "xl" : f], A = !!T, j = O === "color" || O === "icon" || O === "letter", M = O === "person" && "firstName" in a ? a.firstName + a.lastName : (O === "team" || O === "company") && "name" in a ? a.name : null, N = j ? a.color ?? "radical" : M ? O === "person" && "src" in a && a.src ? "grey" : ee(M) ?? "grey" : "neutral", ie = te(), P = p ? 32 : {
		xs: 12,
		sm: 16,
		md: 20,
		lg: 24
	}[k.icon], F = {
		xs: 20,
		sm: 24,
		md: 32,
		lg: 40
	}, I = y[f].avatar, L = p ? F[k.avatar] / F[I] : 1, R = (e) => /* @__PURE__ */ s("span", {
		className: "flex shrink-0 items-center justify-center transition-transform duration-200 ease-out",
		style: { transform: `scale(${L})` },
		children: e
	}), z = O === "color" ? null : O === "icon" && "icon" in a ? /* @__PURE__ */ s(r, {
		icon: a.icon,
		size: k.icon,
		color: "#ffffff",
		style: {
			width: P,
			height: P,
			transition: "width 200ms ease-out, height 200ms ease-out"
		}
	}) : O === "letter" && "letter" in a ? /* @__PURE__ */ s("span", {
		"aria-hidden": !0,
		className: "font-semibold leading-none",
		style: {
			color: w,
			fontSize: Math.round(P * .78),
			transition: "font-size 200ms ease-out"
		},
		children: a.letter.charAt(0).toUpperCase()
	}) : O === "person" && "firstName" in a ? R(/* @__PURE__ */ s(i, {
		avatar: {
			type: "person",
			firstName: a.firstName,
			lastName: a.lastName,
			src: a.src
		},
		size: I
	})) : O === "team" && "name" in a ? R(/* @__PURE__ */ s(i, {
		avatar: {
			type: "team",
			name: a.name,
			src: a.src
		},
		size: I
	})) : O === "company" && "name" in a ? R(/* @__PURE__ */ s(i, {
		avatar: {
			type: "company",
			name: a.name,
			src: a.src
		},
		size: I
	})) : O === "image" && "src" in a ? /* @__PURE__ */ s("img", {
		src: a.src,
		alt: "alt" in a ? a.alt ?? "" : "",
		className: "h-full w-full object-cover"
	}) : null, B = O === "team" || O === "company" || O === "icon", V = /* @__PURE__ */ s("span", {
		className: "relative z-[1] flex shrink-0 items-center justify-center overflow-hidden border-solid transition-all duration-200 ease-out",
		style: {
			width: k.d,
			height: k.d,
			borderRadius: B ? Math.round(k.d * .3) : 9999,
			borderWidth: k.border,
			borderColor: w,
			backgroundColor: j ? h(N) : w
		},
		children: O === "color" ? /* @__PURE__ */ s("span", {
			className: "rounded-full transition-all duration-200 ease-out",
			style: {
				width: k.d * .36,
				height: k.d * .36,
				backgroundColor: w
			}
		}) : z
	}), H = /* @__PURE__ */ s(l, { children: p && /* @__PURE__ */ s(u.svg, {
		width: k.caretW,
		height: k.caretH,
		viewBox: "0 0 16 13",
		"aria-hidden": !0,
		className: "absolute left-1/2",
		style: {
			top: k.d - k.caretOverlap - 3,
			marginLeft: -k.caretW / 2,
			fill: w,
			transformOrigin: "50% 0%"
		},
		initial: {
			scaleY: 0,
			opacity: 0
		},
		animate: {
			scaleY: 1,
			opacity: 1
		},
		exit: {
			scaleY: 0,
			opacity: 0
		},
		transition: ie ? { duration: 0 } : {
			duration: .18,
			ease: "easeOut",
			opacity: { duration: .1 }
		},
		children: /* @__PURE__ */ s("path", { d: "M0 0h16c-4.2 3-6.6 6.9-7.4 11.7a0.62 0.62 0 0 1-1.2 0C6.6 6.9 4.2 3 0 0Z" })
	}, "caret") }), U = /* @__PURE__ */ c("span", {
		className: "relative inline-flex",
		style: { filter: `drop-shadow(0 ${k.shadowY}px ${k.shadowBlur / 2}px hsl(${v} / 0.3))` },
		children: [H, V]
	}), W = y[f], G = k.d / 2, K = x, q = p ? C() : -G, J = p ? "bottom" : S, Y = `0 0 ${Math.max(2, Math.round(W.label * .28))}px ${w}`, ae = [
		Y,
		Y,
		`0 1px 2px ${w}`,
		`0 -1px 2px ${w}`,
		`1px 0 2px ${w}`,
		`-1px 0 2px ${w}`
	].join(","), X = !p && (J === "top" || J === "bottom"), oe = X ? "line-clamp-4 text-center" : p ? "whitespace-nowrap text-center" : "whitespace-nowrap", Z = W.d / 2, Q = {
		right: {
			transform: `translate(${Z}px, -50%)`,
			style: { paddingLeft: W.gap }
		},
		left: {
			transform: `translate(calc(-100% - ${Z}px), -50%)`,
			style: {
				paddingRight: W.gap,
				textAlign: "right"
			}
		},
		top: {
			transform: `translate(-50%, calc(-100% - ${Z}px))`,
			style: { paddingBottom: W.gap }
		},
		bottom: {
			transform: `translate(-50%, ${p ? K : Z}px)`,
			style: { paddingTop: W.gap + (p ? 4 : 0) }
		}
	}[J], se = _ && b && !m && /* @__PURE__ */ s("span", {
		className: t("absolute left-0 top-0 font-semibold leading-tight transition-all duration-200 ease-out", oe),
		style: {
			color: `hsl(${g[N]})`,
			fontSize: W.label,
			textShadow: ae,
			transform: Q.transform,
			maxWidth: X ? W.maxLabelW : void 0,
			...Q.style
		},
		children: _
	}), ce = /* @__PURE__ */ s("span", {
		"aria-hidden": !0,
		className: "absolute left-0 top-0 rounded-full border-solid transition-all duration-200 ease-out",
		style: {
			width: K * 2,
			height: K * 2,
			marginLeft: -5.6,
			marginTop: -5.6,
			borderWidth: 1.5,
			borderColor: w,
			backgroundColor: h(N),
			boxShadow: `0 1px 2px hsl(${v} / 0.3)`,
			transform: `scale(${p || m ? 1 : 0})`,
			opacity: p || m ? 1 : 0
		}
	}), $ = /* @__PURE__ */ c(o, { children: [
		ce,
		/* @__PURE__ */ s("span", {
			className: "absolute left-0 top-0 transition-all duration-200 ease-out",
			style: {
				transform: `translate(-50%, ${q}px) scale(${+!m})`,
				opacity: +!m
			},
			children: U
		}),
		se
	] });
	return /* @__PURE__ */ s(e, {
		dataTestId: re,
		children: A ? /* @__PURE__ */ s("button", {
			ref: d,
			type: "button",
			...ne ? {
				tabIndex: -1,
				"aria-hidden": !0
			} : {
				"aria-label": E,
				"aria-pressed": p
			},
			onClick: T,
			className: t("relative inline-flex cursor-pointer border-0 bg-transparent p-0", "transition-transform duration-150 hover:scale-[1.05]", n("rounded-full"), D),
			children: $
		}) : /* @__PURE__ */ s("span", {
			role: "img",
			"aria-label": E,
			className: t("relative inline-flex", D),
			children: $
		})
	});
});
T.displayName = "BaseMapMarker";
var E = T;
//#endregion
export { E as BaseMapMarker, v as MARKER_SHADOW_HSL, S as SELECTED_DOT_GAP, x as SELECTED_DOT_R, b as getMarkerMetrics, C as getSelectedHeadGroupY, _ as markerColorTriplet, f as markerColors };
