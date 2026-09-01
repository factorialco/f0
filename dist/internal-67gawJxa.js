import { O as e, f as t } from "./variants-D_OHTcOj.js";
import { t as n } from "./utils-CVzxZnoI.js";
import { o as r } from "./tooltip-BPSwDQpD.js";
import { r as i } from "./F0Button-B67qxFBP.js";
import { a, i as ee, t as o, v as s, x as c } from "./popover-By8ytmVb.js";
import { a as l, i as u, t as d } from "./input-CAEigqto.js";
import { forwardRef as f, useCallback as p, useEffect as m, useId as te, useMemo as ne, useState as h } from "react";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
var re = f((e, t) => /* @__PURE__ */ _("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ g("rect", {
			width: 12,
			height: 16,
			x: 6,
			y: 4,
			stroke: "currentColor",
			rx: 3
		}),
		/* @__PURE__ */ g("path", {
			stroke: "currentColor",
			d: "M18 8H6"
		}),
		/* @__PURE__ */ g("path", {
			stroke: "currentColor",
			d: "M14 8V20"
		}),
		/* @__PURE__ */ g("path", {
			stroke: "currentColor",
			d: "M10 8V20"
		}),
		/* @__PURE__ */ g("path", {
			stroke: "currentColor",
			d: "M18 12H6"
		}),
		/* @__PURE__ */ g("path", {
			stroke: "currentColor",
			d: "M14 16H6"
		})
	]
})), v = f((e, t) => /* @__PURE__ */ _("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ g("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M18 14L12 8"
	}), /* @__PURE__ */ g("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M6 14L12 8"
	})]
})), y = s("ChevronDown", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), ie = ({ onClickArrow: t, step: n, disabled: r }) => !n || r ? null : /* @__PURE__ */ _("div", {
	className: "-mt-1 hidden h-full flex-col group-focus-within:flex group-hover:flex",
	onClick: (e) => e.preventDefault(),
	children: [/* @__PURE__ */ g("div", {
		onClick: t("increase"),
		className: "h-3 cursor-pointer",
		role: "button",
		"aria-label": "Increase",
		children: /* @__PURE__ */ g(e, {
			size: "sm",
			icon: v
		})
	}), /* @__PURE__ */ g("div", {
		onClick: t("decrease"),
		className: "h-3 cursor-pointer",
		role: "button",
		"aria-label": "Decrease",
		children: /* @__PURE__ */ g(e, {
			size: "sm",
			icon: y
		})
	})]
}), b = /^(-?)([0-9]+)?(?:([\.,])([0-9]+)?)?$/;
function x(e, { maxDecimals: t }) {
	if (!e || e === "-") return {
		formattedValue: e ?? "",
		value: null
	};
	let n = e.match(b);
	if (!n) return null;
	let [r, i, a, ee, o] = n;
	t && (o?.length ?? 0) > t ? o = o?.slice(0, t) : t === 0 && (o = ""), a = a?.replace(/^0+(\d)/, (e, t) => t) ?? "";
	let s = `${i}${a}${t === 0 ? "" : `${ee ?? ""}${o ?? ""}`}`, c = parseFloat(s.replace(",", "."));
	return {
		formattedValue: s,
		value: Number.isNaN(c) ? null : c
	};
}
//#endregion
//#region src/components/F0NumberInput/internal.tsx
var S = (e, t, n, r = !1) => new Intl.NumberFormat(t, {
	maximumFractionDigits: n,
	useGrouping: r
}).format(e), ae = (e, t, n) => {
	if (t) return {
		type: "error",
		message: typeof t == "string" ? t : void 0
	};
	if (e) return {
		type: "default",
		message: e
	};
	if (n) return n;
};
function C({ label: e, htmlFor: t, disabled: n }) {
	return /* @__PURE__ */ g(u, {
		label: e,
		htmlFor: t,
		disabled: n,
		className: "mb-2"
	});
}
function w(e) {
	if (!(!e || e === "auto")) return { width: e };
}
function T({ children: e, extraContent: t, inputWidth: r, trailingAction: i }) {
	let a = !r || r === "auto";
	return /* @__PURE__ */ _("div", {
		className: "flex flex-wrap items-center gap-3",
		children: [
			/* @__PURE__ */ g("div", {
				style: w(r),
				className: n(a ? "w-auto" : void 0),
				children: e
			}),
			t && /* @__PURE__ */ g("span", {
				className: "shrink-0 text-f1-foreground-secondary",
				children: t
			}),
			i
		]
	});
}
var E = f(function({ locale: e, id: s, value: u, maxDecimals: f, grouping: v = !1, step: y, min: b, max: w, onChange: E, units: oe, extraContent: D, inputWidth: se, popover: O, label: k, hint: A, error: ce, status: le, hideLabel: j = !1, disabled: M, readonly: N, loading: P, onBlur: ue, ...de }, fe) {
	let F = t(), pe = te(), I = s ?? pe, [L, me] = r({
		prop: O?.open,
		defaultProp: !1,
		onChange: O?.onOpenChange
	}), [R, z] = h(!1), [B, V] = h(() => u == null ? "" : S(u, e, f, v)), [he, H] = h(u ?? null), U = ne(() => {
		if (A !== void 0) return A;
		if (b != null && w != null) return F.t("numberInput.between", {
			min: b,
			max: w
		});
		if (b != null) return F.t("numberInput.greaterThan", { min: b });
		if (w != null) return F.t("numberInput.lessThan", { max: w });
	}, [
		A,
		b,
		w
	]), W = !!D, G = O?.commitMode === "deferred", K = O !== void 0 || W, q = !j && k != null, J = ae(U, ce, le), ge = K && J != null, Y = !!(M || N || P), _e = (e) => {
		e && Y || me(e);
	};
	m(() => {
		!G || !L || H(u ?? null);
	}, [
		G,
		L,
		u
	]);
	let X = G ? he : u, Z = ne(() => G ? (e) => H(e) : E, [G, E]), ve = p((e) => {
		let t = e.nativeEvent.data;
		if (!t) return;
		let n = e.currentTarget, r = n.selectionStart ?? 0, i = n.selectionEnd ?? 0;
		(!x(n.value.slice(0, r) + t + n.value.slice(i), { maxDecimals: f }) || f === 0 && /[.,]/.test(t)) && e.preventDefault();
	}, [f]), Q = (e) => {
		let t = x(e, { maxDecimals: f });
		if (!t) return;
		let { value: n } = t;
		if (n === null) {
			V(""), Z?.(null);
			return;
		}
		let r = Math.max(b ?? -Infinity, Math.min(w ?? Infinity, n));
		if (r === n) {
			V(t.formattedValue), Z?.(n);
			return;
		}
		let i = x(r.toString(), { maxDecimals: f });
		V(i?.formattedValue ?? ""), Z?.(i?.value ?? null);
	}, ye = (t) => () => {
		if (!y) return;
		if (X == null) return Q(S(y, e, f));
		let n = t === "increase" ? X + y : X - y;
		b != null && n < b || w != null && n > w || Q(S(n, e, f));
	};
	m(() => {
		if (v && !R) {
			V(X == null ? "" : S(X, e, f, !0));
			return;
		}
		let t = x(B, { maxDecimals: f });
		X !== void 0 && X != t?.value && V(X == null ? "" : S(X, e, f));
	}, [
		B,
		X,
		e,
		f,
		R,
		v
	]);
	let be = J ? { type: J.type } : void 0, $ = /* @__PURE__ */ g("div", {
		className: "group relative",
		children: /* @__PURE__ */ g(d, {
			type: "text",
			ref: fe,
			id: I,
			value: B,
			inputMode: f === 0 ? "numeric" : "decimal",
			onChange: Q,
			...de,
			label: K ? k ?? "" : k,
			hideLabel: j || K,
			hint: K ? "" : U,
			error: K ? void 0 : ce,
			status: K ? be : le,
			disabled: M,
			loading: P,
			readonly: N,
			onFocus: () => z(!0),
			onBlur: () => {
				z(!1), ue?.();
			},
			onBeforeInput: ve,
			appendTag: oe,
			append: y ? /* @__PURE__ */ g(ie, {
				step: y,
				disabled: M,
				onClickArrow: ye
			}) : void 0
		})
	});
	if (O !== void 0) {
		let { icon: e = re, side: t = "bottom", align: r = "start", triggerLabel: s, apply: u } = O, d = G, f = u?.label ?? F.actions.apply, p = u?.icon ?? c, m = u?.closeOnApply ?? !0;
		return /* @__PURE__ */ _(o, {
			open: L,
			onOpenChange: _e,
			children: [/* @__PURE__ */ g(a, {
				asChild: !0,
				children: /* @__PURE__ */ g(i, {
					variant: "outline",
					icon: e,
					disabled: Y,
					hideLabel: !s,
					label: s ?? k
				})
			}), /* @__PURE__ */ g(ee, {
				side: t,
				align: r,
				className: n("w-auto min-w-[220px] rounded-xl border border-solid border-f1-border-secondary p-3"),
				children: /* @__PURE__ */ _("div", {
					className: "flex flex-col",
					children: [
						q ? /* @__PURE__ */ g(C, {
							label: k,
							htmlFor: I,
							disabled: Y
						}) : null,
						/* @__PURE__ */ g(T, {
							extraContent: D,
							inputWidth: se,
							trailingAction: d ? /* @__PURE__ */ g(i, {
								variant: "default",
								icon: p,
								label: f,
								onClick: () => {
									E?.(he), m && _e(!1);
								}
							}) : void 0,
							children: $
						}),
						ge ? /* @__PURE__ */ g(l, { status: J }) : null
					]
				})
			})]
		});
	}
	return W ? /* @__PURE__ */ _("div", {
		className: "flex flex-col",
		children: [
			q ? /* @__PURE__ */ g(C, {
				label: k,
				htmlFor: I,
				disabled: Y
			}) : null,
			/* @__PURE__ */ g(T, {
				extraContent: D,
				inputWidth: se,
				children: $
			}),
			ge ? /* @__PURE__ */ g(l, { status: J }) : null
		]
	}) : $;
});
E.displayName = "NumberInputInternal";
//#endregion
export { re as i, y as n, v as r, E as t };
