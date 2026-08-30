import { t as e } from "./dist-CqnuTXEz.js";
import { n as t } from "./data-testid-0GIWgc6Q.js";
import { $ as n, _ as r, at as i, c as a, n as o, t as s, y as c } from "./variants-BhCxKzs5.js";
import { n as ee, t as l } from "./utils-CVzxZnoI.js";
import { a as u, i as d, r as f } from "./F0AvatarIcon-dGQ2qbg6.js";
import { _ as p, t as m } from "./F0Avatar-BNV2fsD_.js";
import { n as h, r as g, t as _ } from "./dist-zRL9MpsG.js";
import * as v from "react";
import { cloneElement as y, forwardRef as b, useEffect as x, useId as S, useMemo as C, useRef as w, useState as T } from "react";
import { jsx as E, jsxs as D } from "react/jsx-runtime";
var O = b((e, t) => /* @__PURE__ */ E("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ E("path", {
		fill: "currentColor",
		fillRule: "evenodd",
		d: "M3.35001 12C3.35001 7.22273 7.22274 3.35 12 3.35C16.7773 3.35 20.65 7.22273 20.65 12C20.65 16.7773 16.7773 20.65 12 20.65C7.22274 20.65 3.35001 16.7773 3.35001 12ZM9.45963 8.54038C9.20578 8.28654 8.79423 8.28654 8.54039 8.54038C8.28655 8.79422 8.28655 9.20578 8.54039 9.45962L11.0808 12L8.54039 14.5404C8.28655 14.7942 8.28655 15.2058 8.54039 15.4596C8.79423 15.7135 9.20578 15.7135 9.45963 15.4596L12 12.9192L14.5404 15.4596C14.7942 15.7135 15.2058 15.7135 15.4596 15.4596C15.7135 15.2058 15.7135 14.7942 15.4596 14.5404L12.9192 12L15.4596 9.45962C15.7135 9.20578 15.7135 8.79422 15.4596 8.54038C15.2058 8.28654 14.7942 8.28654 14.5404 8.54038L12 11.0808L9.45963 8.54038Z",
		clipRule: "evenodd"
	})
})), k = e({
	base: "flex select-none items-center justify-center text-f1-foreground-secondary",
	variants: { size: {
		small: "h-4 w-4 [&_circle]:stroke-[4]",
		medium: "h-8 w-8 [&_circle]:stroke-[2.6]",
		large: "h-12 w-12 [&_circle]:stroke-2"
	} },
	defaultVariants: { size: "medium" }
});
function A({ size: e, className: t }) {
	return /* @__PURE__ */ E("div", {
		className: l(k({
			size: e,
			className: t
		})),
		"aria-live": "polite",
		"aria-busy": !0,
		children: /* @__PURE__ */ D("svg", {
			viewBox: "0 0 32 32",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			className: "h-full w-full",
			children: [/* @__PURE__ */ E("circle", {
				cx: "16",
				cy: "16",
				r: "12",
				className: "stroke-f1-background-secondary"
			}), /* @__PURE__ */ E(c.circle, {
				cx: "16",
				cy: "16",
				r: "12",
				stroke: "currentColor",
				strokeLinecap: "round",
				strokeDasharray: "1 80",
				className: "opacity-50",
				initial: {
					rotate: 0,
					originX: "50%",
					originY: "50%"
				},
				animate: {
					rotate: [
						0,
						450,
						1080
					],
					strokeDasharray: [
						"1 80",
						"60 40",
						"1 80"
					]
				},
				transition: {
					duration: 2,
					ease: "linear",
					repeat: Infinity
				}
			})]
		})
	});
}
var j = t(i("Spinner", A)), M = "Toggle", N = v.forwardRef((e, t) => {
	let { pressed: n, defaultPressed: r = !1, onPressedChange: i, ...a } = e, [o = !1, s] = _({
		prop: n,
		onChange: i,
		defaultProp: r
	});
	return /* @__PURE__ */ E(g.button, {
		type: "button",
		"aria-pressed": o,
		"data-state": o ? "on" : "off",
		"data-disabled": e.disabled ? "" : void 0,
		...a,
		ref: t,
		onClick: h(e.onClick, () => {
			e.disabled || s(!o);
		})
	});
});
N.displayName = M;
var P = N, F = e({
	variants: {
		size: {
			sm: "h-6",
			md: "h-8",
			lg: "h-10"
		},
		variant: {
			expanded: "p-2",
			compact: ""
		},
		withBorder: {
			true: "border border-solid border-f1-border",
			false: ""
		},
		selected: {
			true: "",
			false: ""
		}
	},
	compoundVariants: [
		{
			variant: "expanded",
			size: "sm",
			class: "h-[52px] w-[63px] [&_.main]:h-4"
		},
		{
			variant: "expanded",
			size: "md",
			class: "h-[60px] w-[70px] [&_.main]:h-5"
		},
		{
			withBorder: !0,
			selected: !0,
			class: "border-f1-border-selected"
		}
	],
	defaultVariants: {
		size: "md",
		variant: "compact"
	}
}), I = {
	accent: l("bg-[hsl(var(--accent-50)/0.1)] hover:bg-[hsl(var(--accent-50)/0.2)]", "border-[hsl(var(--accent-50)/0.6)]", "text-f1-icon-accent hover:text-f1-icon-accent"),
	critical: l("bg-[hsl(var(--critical-50)/0.1)] hover:bg-[hsl(var(--critical-50)/0.2)]", "border-[hsl(var(--critical-50)/0.6)]", "text-f1-icon-critical hover:text-f1-icon-critical"),
	warning: l("bg-[hsl(var(--warning-50)/0.1)] hover:bg-[hsl(var(--warning-50)/0.2)]", "border-[hsl(var(--warning-50)/0.6)]", "text-f1-icon-warning hover:text-f1-icon-warning"),
	promote: l("bg-[hsl(var(--promote-50)/0.1)] hover:bg-[hsl(var(--promote-50)/0.2)]", "border-[hsl(var(--promote-50)/0.6)]", "text-f1-icon-promote hover:text-f1-icon-promote"),
	info: l("bg-[hsl(var(--info-50)/0.1)] hover:bg-[hsl(var(--info-50)/0.2)]", "border-[hsl(var(--info-50)/0.6)]", "text-f1-icon-info hover:text-f1-icon-info"),
	positive: l("bg-[hsl(var(--positive-50)/0.1)] hover:bg-[hsl(var(--positive-50)/0.2)]", "border-[hsl(var(--positive-50)/0.6)]", "text-f1-icon-positive hover:text-f1-icon-positive"),
	"mood-super-negative": l("bg-[hsl(var(--mood-super-negative)/0.1)] hover:bg-[hsl(var(--mood-super-negative)/0.2)]", "border-[hsl(var(--mood-super-negative)/0.6)]", "text-f1-icon-mood-super-negative hover:text-f1-icon-mood-super-negative"),
	"mood-negative": l("bg-[hsl(var(--mood-negative)/0.1)] hover:bg-[hsl(var(--mood-negative)/0.2)]", "border-[hsl(var(--mood-negative)/0.6)]", "text-f1-icon-mood-negative hover:text-f1-icon-mood-negative"),
	"mood-neutral": l("bg-[hsl(var(--mood-neutral)/0.1)] hover:bg-[hsl(var(--mood-neutral)/0.2)]", "border-[hsl(var(--mood-neutral)/0.6)]", "text-f1-icon-mood-neutral hover:text-f1-icon-mood-neutral"),
	"mood-positive": l("bg-[hsl(var(--mood-positive)/0.1)] hover:bg-[hsl(var(--mood-positive)/0.2)]", "border-[hsl(var(--mood-positive)/0.6)]", "text-f1-icon-mood-positive hover:text-f1-icon-mood-positive"),
	"mood-super-positive": l("bg-[hsl(var(--mood-super-positive)/0.1)] hover:bg-[hsl(var(--mood-super-positive)/0.2)]", "border-[hsl(var(--mood-super-positive)/0.6)]", "text-f1-icon-mood-super-positive hover:text-f1-icon-mood-super-positive")
}, L = "text-f1-icon", R = e({ variants: { size: {
	sm: "text-xs",
	md: "text-sm",
	lg: "text-sm"
} } }), z = b(({ onSelectedChange: e, selected: t, label: i, disabled: u = !1, icon: d, size: f = "md", variant: p = "compact", tooltip: m, color: h, withBorder: g = !1, className: _, defaultSelected: v = !1, ...y }, b) => {
	let x = !Array.isArray(d), [S, w] = x ? [d, d] : d, [O, k] = Array.isArray(i) ? i : [i, i], A = C(() => x ? void 0 : {
		initial: {
			opacity: 0,
			scale: .8
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		exit: {
			opacity: 0,
			scale: .6
		},
		transition: {
			duration: .25,
			ease: "easeOut"
		}
	}, [x]), [j, M] = T(v), N = t !== void 0, z = {
		selected: N ? t : j,
		onSelectedChange: N ? e : M
	}, B = z.selected ? k : O, V = C(() => p === "expanded" && f === "lg" ? (console.warn("F0ButtonToggle: lg size is not supported for expanded variant"), "md") : f, [f, p]), H = typeof m == "object" ? m : m ? { description: m } : void 0, U = /* @__PURE__ */ D(P, {
		ref: b,
		pressed: z.selected,
		onPressedChange: z.onSelectedChange,
		disabled: u,
		"aria-label": B,
		title: B,
		className: l("aspect-square px-0", "flex flex-col items-center justify-center gap-2", ee(), s({ variant: z.selected ? "selected" : "ghost" }), o({ size: V }), F({
			size: V,
			variant: p,
			withBorder: g,
			selected: z.selected
		}), h && (z.selected ? I[h] : L), _),
		...y,
		"data-state": z.selected ? "on" : "off",
		children: [/* @__PURE__ */ E(n, {
			initial: !1,
			children: /* @__PURE__ */ E("div", {
				className: "main relative flex flex-col items-center justify-center",
				children: z.selected ? /* @__PURE__ */ E(c.div, {
					className: "absolute flex items-center justify-center",
					...A,
					children: /* @__PURE__ */ E(r, {
						icon: w,
						size: V
					})
				}, "icon-on") : /* @__PURE__ */ E(c.div, {
					className: "absolute flex items-center justify-center",
					...A,
					children: /* @__PURE__ */ E(r, {
						icon: S,
						size: V
					})
				}, "icon-off")
			})
		}), p === "expanded" && /* @__PURE__ */ E(n, {
			initial: !1,
			children: /* @__PURE__ */ E("span", {
				className: l("max-w-full truncate", R({ size: V })),
				children: B
			})
		})]
	});
	return H ? /* @__PURE__ */ E(a, {
		...H,
		children: U
	}) : U;
});
z.displayName = "F0ButtonToggleInternal";
//#endregion
//#region src/components/F0ButtonToggle/F0ButtonToggle.tsx
var B = ["withBorder"], V = b((e, t) => {
	let n = B.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ E(z, {
		...n,
		ref: t
	});
});
V.displayName = "F0ButtonToggle";
var H = t(V), U = ({ text: e }) => /* @__PURE__ */ E("div", {
	className: l("flex h-[24px] max-w-20 items-center gap-2 rounded-sm border border-solid border-f1-border px-2 py-0.5 font-medium text-f1-foreground-secondary"),
	children: /* @__PURE__ */ E(p, {
		tag: "span",
		children: e
	})
}), W = {
	default: {
		color: "text-f1-foreground-secondary",
		iconColor: "default"
	},
	warning: {
		color: "text-f1-foreground-warning",
		iconColor: "warning",
		icon: f
	},
	info: {
		color: "text-f1-foreground-info",
		iconColor: "info",
		icon: d
	},
	error: {
		color: "text-f1-foreground-critical",
		iconColor: "critical",
		icon: u
	}
}, te = ({ status: e }) => {
	if (!e) return null;
	let t = (Array.isArray(e.message) ? e.message : [e.message]).filter(Boolean), n = W[e.type].icon;
	return t.length > 0 && /* @__PURE__ */ D("div", {
		className: "flex gap-1",
		children: [n && /* @__PURE__ */ E(r, {
			icon: n,
			color: W[e.type].iconColor || "currentColor"
		}), /* @__PURE__ */ E("ul", {
			className: "list-none",
			children: t.map((t) => /* @__PURE__ */ E("li", {
				className: l("text-base font-medium", W[e.type].color),
				children: t
			}, t))
		})]
	});
}, ne = ({ label: e, required: t, htmlFor: n, id: i, className: a, icon: o, disabled: s }) => /* @__PURE__ */ D("label", {
	id: i,
	className: l(a, "text-md flex max-w-full gap-1 font-medium text-f1-foreground-secondary"),
	htmlFor: n,
	"aria-label": e,
	"aria-disabled": s,
	children: [
		o && /* @__PURE__ */ E(r, {
			icon: o,
			size: "sm"
		}),
		/* @__PURE__ */ E(p, {
			className: "shrink-1 min-w-0",
			children: e
		}),
		t && /* @__PURE__ */ E("span", {
			className: "text-f1-foreground-critical",
			"aria-hidden": "true",
			children: "*"
		})
	]
}), re = ["sm", "md"], ie = "", ae = (e) => e === ie || e ? e.toString().length === 0 : !0, oe = (e) => e ? e.toString().length : 0, se = e({
	base: "",
	variants: { size: {
		sm: "py-1",
		md: "py-2"
	} },
	defaultVariants: { size: "md" }
}), ce = e({
	base: "",
	variants: {
		canGrow: {
			true: "flex-1",
			false: "flex-none"
		},
		size: {
			sm: "rounded",
			md: "rounded-md"
		}
	},
	compoundVariants: [
		{
			size: "sm",
			canGrow: !0,
			class: "min-h-[32px]"
		},
		{
			size: "md",
			canGrow: !0,
			class: "min-h-[40px]"
		},
		{
			size: "sm",
			canGrow: !1,
			class: "h-[32px]"
		},
		{
			size: "md",
			canGrow: !1,
			class: "h-[40px]"
		}
	],
	defaultVariants: {
		size: "md",
		canGrow: !1
	}
}), le = e({
	base: "",
	variants: { size: {
		sm: "gap-1",
		md: "gap-2"
	} }
}), ue = e({
	base: "focus-within:ring-2 focus-within:ring-offset-0 focus-within:transition-none active:transition-none",
	variants: {
		status: {
			default: "focus-within:border-f1-border-selected-bold focus-within:ring-f1-background-selected",
			warning: "border-f1-border-warning-bold focus-within:border-f1-border-warning-bold focus-within:ring-f1-border-warning",
			info: "border-f1-border-info-bold focus-within:border-f1-border-info-bold focus-within:ring-f1-border-info",
			error: "border-f1-border-critical-bold focus-within:border-f1-border-critical-bold focus-within:ring-f1-border-critical bg-f1-background-critical bg-opacity-10"
		},
		disabled: {
			true: "",
			false: ""
		}
	},
	compoundVariants: [
		{
			disabled: !1,
			status: "default",
			class: "hover:border-f1-border-selected-bold"
		},
		{
			disabled: !1,
			status: "warning",
			class: "hover:border-f1-border-warning-bold"
		},
		{
			disabled: !1,
			status: "info",
			class: "hover:border-f1-border-info-bold"
		},
		{
			disabled: !1,
			status: "error",
			class: "hover:border-f1-border-critical-bold"
		}
	]
}), G = b(({ children: e, disabled: t, readonly: i, label: a, labelIcon: o, hideLabel: s = !1, className: u, required: d, error: f, status: p, hint: h, size: g = "sm", icon: _, canGrow: v = !1, value: b, loading: k = !1, loadingIndicator: A, placeholder: M, clearable: N = !1, isEmpty: P = ae, emptyValue: F = ie, lengthProvider: I = oe, maxLength: L, hideMaxLength: R = !1, append: z, hidePlaceholder: B = !1, onClickPlaceholder: V, onClickChildren: W, onClickContent: re, name: G, role: K, appendTag: de, avatar: q, "aria-controls": fe, "aria-expanded": pe, "aria-activedescendant": me, "aria-autocomplete": he, buttonToggle: J, transparent: ge, ...Y }, _e) => {
	let ve = S(), ye = Y.id ?? ve, X = t || i, [Z, be] = T(b);
	h && (p = {
		type: "default",
		message: h
	}), f && (p = {
		type: "error",
		message: typeof f == "string" ? f : void 0
	}), a || console.error("F0InputField: label is required for accessibility reasons. If you don't want to show a label, set hideLabel to true."), x(() => {
		be(L && b && I(b) > L ? b?.substring(0, L) : b);
	}, [
		b,
		I,
		L
	]);
	let xe = (e) => {
		let t = (typeof e == "string" ? e : e.target.value) ?? F;
		if (L && I(t) > L) {
			if (typeof t == "string") t = t.substring(0, L);
			else return;
		}
		be(t), Y.onChange?.(t);
	}, Se = () => {
		xe(F), Y.onClear?.();
	}, Ce = () => {
		t || re?.();
	}, we = () => {
		t || W?.();
	}, Te = () => {
		t || V?.();
	}, [Ee, De] = T(!1), Oe = (e) => {
		e.animationName === "autofill" && De(!0);
	}, Q = w(null), ke = w(null), $ = C(() => Y.inputRef ?? ke, [Y.inputRef, ke]);
	x(() => (Ee && !Q.current && (Q.current = setInterval(() => {
		let e = typeof $ == "object" && $?.current ? $.current : null;
		e && (e.matches(":-webkit-autofill") || e.matches(":autofill") || (De(!1), Q.current &&= (clearInterval(Q.current), null)));
	}, 100)), () => {
		Q.current &&= (clearInterval(Q.current), null);
	}), [Ee, $]);
	let Ae = z || de || J;
	return /* @__PURE__ */ D("div", {
		className: l("flex flex-col gap-2", "pointer-events-none", t && "cursor-not-allowed", ge && "bg-transparent h-full w-full", u),
		ref: _e,
		children: [
			(!s && a || L && !R) && /* @__PURE__ */ E("div", {
				className: l("flex max-w-full items-center", le({ size: g })),
				children: /* @__PURE__ */ D("div", {
					className: l("flex min-w-0 flex-1 flex-row gap-4"),
					"data-testid": "input-field-top",
					children: [!s && a && /* @__PURE__ */ E(ne, {
						label: a,
						required: d,
						htmlFor: ye,
						icon: o,
						className: "min-w-0 flex-1",
						disabled: t
					}), L && !R && !X && /* @__PURE__ */ D("div", {
						className: "text-right text-f1-foreground-secondary",
						children: [
							I(Z),
							"/",
							L
						]
					})]
				})
			}),
			/* @__PURE__ */ E("div", {
				className: l("relative h-fit transition-all", !X && !t && "hover:border-f1-border-hover", !ge && [
					"border-[1px] border-solid border-f1-border bg-f1-background",
					"group focus-within:border-f1-border-hover focus-within:ring-1 focus-within:ring-f1-border-hover",
					"focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1",
					ue({
						status: p?.type ?? "default",
						disabled: t || i
					}),
					ce({
						size: g,
						canGrow: v
					})
				], "active-within:border-f1-border active-within:ring-1 active-within:ring-f1-border-hover", i && "border-f1-border-secondary bg-f1-background-secondary", t && "cursor-not-allowed bg-f1-background-tertiary", ge && "h-full w-full "),
				"data-testid": "input-field-wrapper",
				children: /* @__PURE__ */ D("div", {
					className: "pointer-events-auto relative flex h-full w-full min-w-0 flex-1",
					onClick: Ce,
					children: [
						(_ || q) && /* @__PURE__ */ D("div", {
							"data-slot": "icon",
							className: l("pointer-events-none absolute left-2 top-[5px] my-auto h-5 w-5 shrink-0", g === "md" && "left-3 top-[9px]"),
							children: [_ && /* @__PURE__ */ E(r, {
								onClick: Ce,
								icon: _,
								color: "default"
							}), q && /* @__PURE__ */ E(m, {
								avatar: q,
								size: "xs"
							})]
						}),
						/* @__PURE__ */ E("div", {
							onClick: we,
							className: "w-full min-w-0 flex-1",
							children: y(e, {
								onChange: xe,
								onBlur: Y.onBlur,
								onFocus: Y.onFocus,
								onAnimationStart: Oe,
								disabled: X,
								readOnly: i,
								role: K,
								ref: $,
								"aria-controls": fe,
								"aria-expanded": K === "combobox" ? pe : void 0,
								"aria-activedescendant": me,
								"aria-autocomplete": he,
								id: ye,
								value: Z ?? "",
								"aria-label": a || M || "no-label",
								"aria-busy": k,
								"aria-disabled": X,
								name: G,
								className: l("h-full w-full min-w-0 px-3 text-f1-foreground", "[&::-webkit-search-cancel-button]:hidden", (_ || q) && "pl-8", (_ || q) && g === "md" && "pl-9", t && "cursor-not-allowed", e.props.className, se({ size: g }))
							})
						}),
						/* @__PURE__ */ E("div", {
							"data-slot": "placeholder",
							className: l("pointer-events-none absolute left-0 top-[1px] z-10 flex flex-1 justify-start px-3 text-f1-foreground-secondary transition-opacity line-clamp-1", !v && "bottom-0", v && "items-start", (_ || q) && "pl-8", (_ || q) && g === "md" && "pl-9", se({ size: g }), M && !B && P(Z) && !Ee ? "opacity-100" : "opacity-0"),
							onClick: Te,
							"aria-hidden": "true",
							title: M,
							children: M
						}),
						(N || Ae || k) && /* @__PURE__ */ D("div", {
							className: l("flex h-fit min-w-6 items-center gap-1.5 self-center pr-[3px]", g === "md" && "pr-[7px]", "relative"),
							children: [
								N && !X && /* @__PURE__ */ E(n, {
									initial: !P(Z),
									children: !P(Z) && /* @__PURE__ */ E(c.button, {
										initial: { opacity: 0 },
										animate: { opacity: 1 },
										exit: { opacity: 0 },
										transition: { duration: .2 },
										className: l("flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full p-0", ee()),
										"aria-label": "Clear",
										type: "button",
										tabIndex: 0,
										"data-testid": "clear-button",
										onClick: (e) => {
											e.stopPropagation(), Se();
										},
										children: /* @__PURE__ */ E(r, {
											icon: O,
											color: "default",
											size: "md"
										})
									})
								}),
								Ae && /* @__PURE__ */ D("div", {
									className: "flex min-h-6 min-w-6 items-center justify-center self-center",
									children: [
										z,
										de && /* @__PURE__ */ E(U, { text: de }),
										J && /* @__PURE__ */ E(H, {
											label: J.label,
											icon: J.icon,
											selected: J.selected,
											disabled: J.disabled,
											onSelectedChange: J.onChange,
											size: "sm"
										})
									]
								}),
								/* @__PURE__ */ E(n, { children: k && /* @__PURE__ */ E("div", {
									className: l("pointer-events-none flex h-6 w-6 items-center justify-center", A?.asOverlay && l("absolute bottom-0 right-2 top-0", "bg-gradient-to-l from-[#FFFFFF] from-0% dark:from-[#192231]", "via-[#FFFFFF] via-60% dark:via-[#192231]", "to-transparent to-100%", g === "md" && "right-3"), se({ size: g })),
									style: { right: typeof A?.offset == "number" ? A?.offset + (g === "md" ? 6 : 0) : void 0 },
									children: /* @__PURE__ */ E(j, {
										size: "small",
										className: "mt-[1px]"
									})
								}) })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ E(te, { status: p })
		]
	});
});
G.displayName = "F0InputField";
//#endregion
//#region src/ui/input.tsx
var K = v.forwardRef(({ className: e, type: t, label: n, labelIcon: r, icon: i, error: a, status: o, hint: s, disabled: c, required: ee, value: u, placeholder: d, clearable: f, onClear: p, size: m, loading: h, isEmpty: g, emptyValue: _, maxLength: v, hideMaxLength: y, append: b, onChange: x, role: S, appendTag: C, lengthProvider: w, onClickContent: T, hideLabel: D, name: O, onFocus: k, onBlur: A, onKeyDown: j, readonly: M, buttonToggle: N, transparent: P, "aria-controls": F, "aria-expanded": I, "aria-activedescendant": L, "aria-autocomplete": R, ...z }, B) => /* @__PURE__ */ E(G, {
	label: n,
	icon: i,
	labelIcon: r,
	error: a,
	status: o,
	hint: s,
	disabled: c,
	required: ee,
	value: u,
	loading: h,
	clearable: f,
	className: e,
	onClear: p,
	placeholder: d || "",
	size: m,
	role: S,
	"aria-controls": F,
	"aria-expanded": I,
	"aria-activedescendant": L,
	"aria-autocomplete": R,
	isEmpty: g,
	emptyValue: _,
	maxLength: v,
	hideMaxLength: y,
	append: b,
	lengthProvider: w,
	hidePlaceholder: t === "file",
	hideLabel: D,
	onChange: x,
	onClickContent: T,
	name: O,
	appendTag: C,
	onFocus: k,
	onBlur: A,
	inputRef: B,
	readonly: M,
	buttonToggle: N,
	transparent: P,
	children: /* @__PURE__ */ E("input", {
		type: t,
		...z,
		onKeyDown: j,
		className: l("[&::-webkit-search-cancel-button]:hidden", "w-full shrink placeholder:-z-10 disabled:cursor-not-allowed")
	})
}));
K.displayName = "Input";
//#endregion
export { te as a, P as c, O as d, ne as i, N as l, G as n, H as o, re as r, z as s, K as t, j as u };
