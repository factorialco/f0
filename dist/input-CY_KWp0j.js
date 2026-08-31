import { t as e } from "./dist-CqnuTXEz.js";
import { d as t, t as n } from "./OneEllipsis-DuhKMtYp.js";
import { D as r, c as i, ht as a, k as o, lt as s, n as c, t as l } from "./variants-BOK7SMP_.js";
import { n as ee, t as u } from "./utils-CVzxZnoI.js";
import { a as d, i as f, r as p } from "./F0AvatarIcon-Cjb6WGh-.js";
import { t as m } from "./F0Avatar-CPW1jzgD.js";
import { n as h, r as g, t as _ } from "./dist-zRL9MpsG.js";
import * as v from "react";
import { cloneElement as te, forwardRef as y, useEffect as b, useId as x, useMemo as S, useRef as C, useState as w } from "react";
import { jsx as T, jsxs as E } from "react/jsx-runtime";
var D = y((e, t) => /* @__PURE__ */ T("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ T("path", {
		fill: "currentColor",
		fillRule: "evenodd",
		d: "M3.35001 12C3.35001 7.22273 7.22274 3.35 12 3.35C16.7773 3.35 20.65 7.22273 20.65 12C20.65 16.7773 16.7773 20.65 12 20.65C7.22274 20.65 3.35001 16.7773 3.35001 12ZM9.45963 8.54038C9.20578 8.28654 8.79423 8.28654 8.54039 8.54038C8.28655 8.79422 8.28655 9.20578 8.54039 9.45962L11.0808 12L8.54039 14.5404C8.28655 14.7942 8.28655 15.2058 8.54039 15.4596C8.79423 15.7135 9.20578 15.7135 9.45963 15.4596L12 12.9192L14.5404 15.4596C14.7942 15.7135 15.2058 15.7135 15.4596 15.4596C15.7135 15.2058 15.7135 14.7942 15.4596 14.5404L12.9192 12L15.4596 9.45962C15.7135 9.20578 15.7135 8.79422 15.4596 8.54038C15.2058 8.28654 14.7942 8.28654 14.5404 8.54038L12 11.0808L9.45963 8.54038Z",
		clipRule: "evenodd"
	})
})), O = e({
	base: "flex select-none items-center justify-center text-f1-foreground-secondary",
	variants: { size: {
		small: "h-4 w-4 [&_circle]:stroke-[4]",
		medium: "h-8 w-8 [&_circle]:stroke-[2.6]",
		large: "h-12 w-12 [&_circle]:stroke-2"
	} },
	defaultVariants: { size: "medium" }
});
function k({ size: e, className: t }) {
	return /* @__PURE__ */ T("div", {
		className: u(O({
			size: e,
			className: t
		})),
		"aria-live": "polite",
		"aria-busy": !0,
		children: /* @__PURE__ */ E("svg", {
			viewBox: "0 0 32 32",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			className: "h-full w-full",
			children: [/* @__PURE__ */ T("circle", {
				cx: "16",
				cy: "16",
				r: "12",
				className: "stroke-f1-background-secondary"
			}), /* @__PURE__ */ T(o.circle, {
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
var A = t(a("Spinner", k)), j = "Toggle", M = v.forwardRef((e, t) => {
	let { pressed: n, defaultPressed: r = !1, onPressedChange: i, ...a } = e, [o = !1, s] = _({
		prop: n,
		onChange: i,
		defaultProp: r
	});
	return /* @__PURE__ */ T(g.button, {
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
M.displayName = j;
var N = M, P = e({
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
}), F = {
	accent: u("bg-[hsl(var(--accent-50)/0.1)] hover:bg-[hsl(var(--accent-50)/0.2)]", "border-[hsl(var(--accent-50)/0.6)]", "text-f1-icon-accent hover:text-f1-icon-accent"),
	critical: u("bg-[hsl(var(--critical-50)/0.1)] hover:bg-[hsl(var(--critical-50)/0.2)]", "border-[hsl(var(--critical-50)/0.6)]", "text-f1-icon-critical hover:text-f1-icon-critical"),
	warning: u("bg-[hsl(var(--warning-50)/0.1)] hover:bg-[hsl(var(--warning-50)/0.2)]", "border-[hsl(var(--warning-50)/0.6)]", "text-f1-icon-warning hover:text-f1-icon-warning"),
	promote: u("bg-[hsl(var(--promote-50)/0.1)] hover:bg-[hsl(var(--promote-50)/0.2)]", "border-[hsl(var(--promote-50)/0.6)]", "text-f1-icon-promote hover:text-f1-icon-promote"),
	info: u("bg-[hsl(var(--info-50)/0.1)] hover:bg-[hsl(var(--info-50)/0.2)]", "border-[hsl(var(--info-50)/0.6)]", "text-f1-icon-info hover:text-f1-icon-info"),
	positive: u("bg-[hsl(var(--positive-50)/0.1)] hover:bg-[hsl(var(--positive-50)/0.2)]", "border-[hsl(var(--positive-50)/0.6)]", "text-f1-icon-positive hover:text-f1-icon-positive"),
	"mood-super-negative": u("bg-[hsl(var(--mood-super-negative)/0.1)] hover:bg-[hsl(var(--mood-super-negative)/0.2)]", "border-[hsl(var(--mood-super-negative)/0.6)]", "text-f1-icon-mood-super-negative hover:text-f1-icon-mood-super-negative"),
	"mood-negative": u("bg-[hsl(var(--mood-negative)/0.1)] hover:bg-[hsl(var(--mood-negative)/0.2)]", "border-[hsl(var(--mood-negative)/0.6)]", "text-f1-icon-mood-negative hover:text-f1-icon-mood-negative"),
	"mood-neutral": u("bg-[hsl(var(--mood-neutral)/0.1)] hover:bg-[hsl(var(--mood-neutral)/0.2)]", "border-[hsl(var(--mood-neutral)/0.6)]", "text-f1-icon-mood-neutral hover:text-f1-icon-mood-neutral"),
	"mood-positive": u("bg-[hsl(var(--mood-positive)/0.1)] hover:bg-[hsl(var(--mood-positive)/0.2)]", "border-[hsl(var(--mood-positive)/0.6)]", "text-f1-icon-mood-positive hover:text-f1-icon-mood-positive"),
	"mood-super-positive": u("bg-[hsl(var(--mood-super-positive)/0.1)] hover:bg-[hsl(var(--mood-super-positive)/0.2)]", "border-[hsl(var(--mood-super-positive)/0.6)]", "text-f1-icon-mood-super-positive hover:text-f1-icon-mood-super-positive")
}, I = "text-f1-icon", L = e({ variants: { size: {
	sm: "text-xs",
	md: "text-sm",
	lg: "text-sm"
} } }), R = y(({ onSelectedChange: e, selected: t, label: n, disabled: a = !1, icon: d, size: f = "md", variant: p = "compact", tooltip: m, color: h, withBorder: g = !1, className: _, defaultSelected: v = !1, ...te }, y) => {
	let b = !Array.isArray(d), [x, C] = b ? [d, d] : d, [D, O] = Array.isArray(n) ? n : [n, n], k = S(() => b ? void 0 : {
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
	}, [b]), [A, j] = w(v), M = t !== void 0, R = {
		selected: M ? t : A,
		onSelectedChange: M ? e : j
	}, z = R.selected ? O : D, B = S(() => p === "expanded" && f === "lg" ? (console.warn("F0ButtonToggle: lg size is not supported for expanded variant"), "md") : f, [f, p]), V = typeof m == "object" ? m : m ? { description: m } : void 0, H = /* @__PURE__ */ E(N, {
		ref: y,
		pressed: R.selected,
		onPressedChange: R.onSelectedChange,
		disabled: a,
		"aria-label": z,
		title: z,
		className: u("aspect-square px-0", "flex flex-col items-center justify-center gap-2", ee(), l({ variant: R.selected ? "selected" : "ghost" }), c({ size: B }), P({
			size: B,
			variant: p,
			withBorder: g,
			selected: R.selected
		}), h && (R.selected ? F[h] : I), _),
		...te,
		"data-state": R.selected ? "on" : "off",
		children: [/* @__PURE__ */ T(s, {
			initial: !1,
			children: /* @__PURE__ */ T("div", {
				className: "main relative flex flex-col items-center justify-center",
				children: R.selected ? /* @__PURE__ */ T(o.div, {
					className: "absolute flex items-center justify-center",
					...k,
					children: /* @__PURE__ */ T(r, {
						icon: C,
						size: B
					})
				}, "icon-on") : /* @__PURE__ */ T(o.div, {
					className: "absolute flex items-center justify-center",
					...k,
					children: /* @__PURE__ */ T(r, {
						icon: x,
						size: B
					})
				}, "icon-off")
			})
		}), p === "expanded" && /* @__PURE__ */ T(s, {
			initial: !1,
			children: /* @__PURE__ */ T("span", {
				className: u("max-w-full truncate", L({ size: B })),
				children: z
			})
		})]
	});
	return V ? /* @__PURE__ */ T(i, {
		...V,
		children: H
	}) : H;
});
R.displayName = "F0ButtonToggleInternal";
//#endregion
//#region src/components/F0ButtonToggle/F0ButtonToggle.tsx
var z = ["withBorder"], B = y((e, t) => {
	let n = z.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ T(R, {
		...n,
		ref: t
	});
});
B.displayName = "F0ButtonToggle";
var V = t(B), H = ({ text: e }) => /* @__PURE__ */ T("div", {
	className: u("flex h-[24px] max-w-20 items-center gap-2 rounded-sm border border-solid border-f1-border px-2 py-0.5 font-medium text-f1-foreground-secondary"),
	children: /* @__PURE__ */ T(n, {
		tag: "span",
		children: e
	})
}), U = {
	default: {
		color: "text-f1-foreground-secondary",
		iconColor: "default"
	},
	warning: {
		color: "text-f1-foreground-warning",
		iconColor: "warning",
		icon: p
	},
	info: {
		color: "text-f1-foreground-info",
		iconColor: "info",
		icon: f
	},
	error: {
		color: "text-f1-foreground-critical",
		iconColor: "critical",
		icon: d
	}
}, ne = ({ status: e }) => {
	if (!e) return null;
	let t = (Array.isArray(e.message) ? e.message : [e.message]).filter(Boolean), n = U[e.type].icon;
	return t.length > 0 && /* @__PURE__ */ E("div", {
		className: "flex gap-1",
		children: [n && /* @__PURE__ */ T(r, {
			icon: n,
			color: U[e.type].iconColor || "currentColor"
		}), /* @__PURE__ */ T("ul", {
			className: "list-none",
			children: t.map((t) => /* @__PURE__ */ T("li", {
				className: u("text-base font-medium", U[e.type].color),
				children: t
			}, t))
		})]
	});
}, re = ({ label: e, required: t, htmlFor: i, id: a, className: o, icon: s, disabled: c }) => /* @__PURE__ */ E("label", {
	id: a,
	className: u(o, "text-md flex max-w-full gap-1 font-medium text-f1-foreground-secondary"),
	htmlFor: i,
	"aria-label": e,
	"aria-disabled": c,
	children: [
		s && /* @__PURE__ */ T(r, {
			icon: s,
			size: "sm"
		}),
		/* @__PURE__ */ T(n, {
			className: "shrink-1 min-w-0",
			children: e
		}),
		t && /* @__PURE__ */ T("span", {
			className: "text-f1-foreground-critical",
			"aria-hidden": "true",
			children: "*"
		})
	]
}), ie = ["sm", "md"], ae = "", oe = (e) => e === ae || e ? e.toString().length === 0 : !0, se = (e) => e ? e.toString().length : 0, W = e({
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
}), G = y(({ children: e, disabled: t, readonly: n, label: i, labelIcon: a, hideLabel: c = !1, className: l, required: d, error: f, status: p, hint: h, size: g = "sm", icon: _, canGrow: v = !1, value: y, loading: O = !1, loadingIndicator: k, placeholder: j, clearable: M = !1, isEmpty: N = oe, emptyValue: P = ae, lengthProvider: F = se, maxLength: I, hideMaxLength: L = !1, append: R, hidePlaceholder: z = !1, onClickPlaceholder: B, onClickChildren: U, onClickContent: ie, name: G, role: K, appendTag: de, avatar: q, "aria-controls": fe, "aria-expanded": pe, "aria-activedescendant": me, "aria-autocomplete": he, buttonToggle: J, transparent: ge, ...Y }, _e) => {
	let ve = x(), ye = Y.id ?? ve, X = t || n, [Z, be] = w(y);
	h && (p = {
		type: "default",
		message: h
	}), f && (p = {
		type: "error",
		message: typeof f == "string" ? f : void 0
	}), i || console.error("F0InputField: label is required for accessibility reasons. If you don't want to show a label, set hideLabel to true."), b(() => {
		be(I && y && F(y) > I ? y?.substring(0, I) : y);
	}, [
		y,
		F,
		I
	]);
	let xe = (e) => {
		let t = (typeof e == "string" ? e : e.target.value) ?? P;
		if (I && F(t) > I) {
			if (typeof t == "string") t = t.substring(0, I);
			else return;
		}
		be(t), Y.onChange?.(t);
	}, Se = () => {
		xe(P), Y.onClear?.();
	}, Ce = () => {
		t || ie?.();
	}, we = () => {
		t || U?.();
	}, Te = () => {
		t || B?.();
	}, [Ee, De] = w(!1), Oe = (e) => {
		e.animationName === "autofill" && De(!0);
	}, Q = C(null), ke = C(null), $ = S(() => Y.inputRef ?? ke, [Y.inputRef, ke]);
	b(() => (Ee && !Q.current && (Q.current = setInterval(() => {
		let e = typeof $ == "object" && $?.current ? $.current : null;
		e && (e.matches(":-webkit-autofill") || e.matches(":autofill") || (De(!1), Q.current &&= (clearInterval(Q.current), null)));
	}, 100)), () => {
		Q.current &&= (clearInterval(Q.current), null);
	}), [Ee, $]);
	let Ae = R || de || J;
	return /* @__PURE__ */ E("div", {
		className: u("flex flex-col gap-2", "pointer-events-none", t && "cursor-not-allowed", ge && "bg-transparent h-full w-full", l),
		ref: _e,
		children: [
			(!c && i || I && !L) && /* @__PURE__ */ T("div", {
				className: u("flex max-w-full items-center", le({ size: g })),
				children: /* @__PURE__ */ E("div", {
					className: u("flex min-w-0 flex-1 flex-row gap-4"),
					"data-testid": "input-field-top",
					children: [!c && i && /* @__PURE__ */ T(re, {
						label: i,
						required: d,
						htmlFor: ye,
						icon: a,
						className: "min-w-0 flex-1",
						disabled: t
					}), I && !L && !X && /* @__PURE__ */ E("div", {
						className: "text-right text-f1-foreground-secondary",
						children: [
							F(Z),
							"/",
							I
						]
					})]
				})
			}),
			/* @__PURE__ */ T("div", {
				className: u("relative h-fit transition-all", !X && !t && "hover:border-f1-border-hover", !ge && [
					"border-[1px] border-solid border-f1-border bg-f1-background",
					"group focus-within:border-f1-border-hover focus-within:ring-1 focus-within:ring-f1-border-hover",
					"focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1",
					ue({
						status: p?.type ?? "default",
						disabled: t || n
					}),
					ce({
						size: g,
						canGrow: v
					})
				], "active-within:border-f1-border active-within:ring-1 active-within:ring-f1-border-hover", n && "border-f1-border-secondary bg-f1-background-secondary", t && "cursor-not-allowed bg-f1-background-tertiary", ge && "h-full w-full "),
				"data-testid": "input-field-wrapper",
				children: /* @__PURE__ */ E("div", {
					className: "pointer-events-auto relative flex h-full w-full min-w-0 flex-1",
					onClick: Ce,
					children: [
						(_ || q) && /* @__PURE__ */ E("div", {
							"data-slot": "icon",
							className: u("pointer-events-none absolute left-2 top-[5px] my-auto h-5 w-5 shrink-0", g === "md" && "left-3 top-[9px]"),
							children: [_ && /* @__PURE__ */ T(r, {
								onClick: Ce,
								icon: _,
								color: "default"
							}), q && /* @__PURE__ */ T(m, {
								avatar: q,
								size: "xs"
							})]
						}),
						/* @__PURE__ */ T("div", {
							onClick: we,
							className: "w-full min-w-0 flex-1",
							children: te(e, {
								onChange: xe,
								onBlur: Y.onBlur,
								onFocus: Y.onFocus,
								onAnimationStart: Oe,
								disabled: X,
								readOnly: n,
								role: K,
								ref: $,
								"aria-controls": fe,
								"aria-expanded": K === "combobox" ? pe : void 0,
								"aria-activedescendant": me,
								"aria-autocomplete": he,
								id: ye,
								value: Z ?? "",
								"aria-label": i || j || "no-label",
								"aria-busy": O,
								"aria-disabled": X,
								name: G,
								className: u("h-full w-full min-w-0 px-3 text-f1-foreground", "[&::-webkit-search-cancel-button]:hidden", (_ || q) && "pl-8", (_ || q) && g === "md" && "pl-9", t && "cursor-not-allowed", e.props.className, W({ size: g }))
							})
						}),
						/* @__PURE__ */ T("div", {
							"data-slot": "placeholder",
							className: u("pointer-events-none absolute left-0 top-[1px] z-10 flex flex-1 justify-start px-3 text-f1-foreground-secondary transition-opacity line-clamp-1", !v && "bottom-0", v && "items-start", (_ || q) && "pl-8", (_ || q) && g === "md" && "pl-9", W({ size: g }), j && !z && N(Z) && !Ee ? "opacity-100" : "opacity-0"),
							onClick: Te,
							"aria-hidden": "true",
							title: j,
							children: j
						}),
						(M || Ae || O) && /* @__PURE__ */ E("div", {
							className: u("flex h-fit min-w-6 items-center gap-1.5 self-center pr-[3px]", g === "md" && "pr-[7px]", "relative"),
							children: [
								M && !X && /* @__PURE__ */ T(s, {
									initial: !N(Z),
									children: !N(Z) && /* @__PURE__ */ T(o.button, {
										initial: { opacity: 0 },
										animate: { opacity: 1 },
										exit: { opacity: 0 },
										transition: { duration: .2 },
										className: u("flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full p-0", ee()),
										"aria-label": "Clear",
										type: "button",
										tabIndex: 0,
										"data-testid": "clear-button",
										onClick: (e) => {
											e.stopPropagation(), Se();
										},
										children: /* @__PURE__ */ T(r, {
											icon: D,
											color: "default",
											size: "md"
										})
									})
								}),
								Ae && /* @__PURE__ */ E("div", {
									className: "flex min-h-6 min-w-6 items-center justify-center self-center",
									children: [
										R,
										de && /* @__PURE__ */ T(H, { text: de }),
										J && /* @__PURE__ */ T(V, {
											label: J.label,
											icon: J.icon,
											selected: J.selected,
											disabled: J.disabled,
											onSelectedChange: J.onChange,
											size: "sm"
										})
									]
								}),
								/* @__PURE__ */ T(s, { children: O && /* @__PURE__ */ T("div", {
									className: u("pointer-events-none flex h-6 w-6 items-center justify-center", k?.asOverlay && u("absolute bottom-0 right-2 top-0", "bg-gradient-to-l from-[#FFFFFF] from-0% dark:from-[#192231]", "via-[#FFFFFF] via-60% dark:via-[#192231]", "to-transparent to-100%", g === "md" && "right-3"), W({ size: g })),
									style: { right: typeof k?.offset == "number" ? k?.offset + (g === "md" ? 6 : 0) : void 0 },
									children: /* @__PURE__ */ T(A, {
										size: "small",
										className: "mt-[1px]"
									})
								}) })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ T(ne, { status: p })
		]
	});
});
G.displayName = "F0InputField";
//#endregion
//#region src/ui/input.tsx
var K = v.forwardRef(({ className: e, type: t, label: n, labelIcon: r, icon: i, error: a, status: o, hint: s, disabled: c, required: l, value: ee, placeholder: d, clearable: f, onClear: p, size: m, loading: h, isEmpty: g, emptyValue: _, maxLength: v, hideMaxLength: te, append: y, onChange: b, role: x, appendTag: S, lengthProvider: C, onClickContent: w, hideLabel: E, name: D, onFocus: O, onBlur: k, onKeyDown: A, readonly: j, buttonToggle: M, transparent: N, "aria-controls": P, "aria-expanded": F, "aria-activedescendant": I, "aria-autocomplete": L, ...R }, z) => /* @__PURE__ */ T(G, {
	label: n,
	icon: i,
	labelIcon: r,
	error: a,
	status: o,
	hint: s,
	disabled: c,
	required: l,
	value: ee,
	loading: h,
	clearable: f,
	className: e,
	onClear: p,
	placeholder: d || "",
	size: m,
	role: x,
	"aria-controls": P,
	"aria-expanded": F,
	"aria-activedescendant": I,
	"aria-autocomplete": L,
	isEmpty: g,
	emptyValue: _,
	maxLength: v,
	hideMaxLength: te,
	append: y,
	lengthProvider: C,
	hidePlaceholder: t === "file",
	hideLabel: E,
	onChange: b,
	onClickContent: w,
	name: D,
	appendTag: S,
	onFocus: O,
	onBlur: k,
	inputRef: z,
	readonly: j,
	buttonToggle: M,
	transparent: N,
	children: /* @__PURE__ */ T("input", {
		type: t,
		...R,
		onKeyDown: A,
		className: u("[&::-webkit-search-cancel-button]:hidden", "w-full shrink placeholder:-z-10 disabled:cursor-not-allowed")
	})
}));
K.displayName = "Input";
//#endregion
export { ne as a, N as c, D as d, re as i, M as l, G as n, V as o, ie as r, R as s, K as t, A as u };
