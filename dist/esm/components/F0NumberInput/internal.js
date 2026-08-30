import { cn as e } from "../../lib/utils.js";
import t from "../../icons/app/Calculator.js";
import n from "../../icons/app/Check.js";
import { useI18n as r } from "../../lib/providers/i18n/i18n-provider.js";
import { F0Button as i } from "../F0Button/F0Button.js";
import { Popover as a, PopoverContent as ee, PopoverTrigger as te } from "../../ui/popover.js";
import { InputMessages as o } from "../F0InputField/components/InputMessages.js";
import { Label as s } from "../F0InputField/components/Label.js";
import { Input as ne } from "../../ui/input.js";
import { Arrows as c } from "./components/Arrows.js";
import { extractNumber as l } from "./internal/extractNumber.js";
import { forwardRef as u, useCallback as d, useEffect as f, useId as p, useMemo as m, useState as h } from "react";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
import { useControllableState as re } from "@radix-ui/react-use-controllable-state";
//#region src/components/F0NumberInput/internal.tsx
var v = (e, t, n, r = !1) => new Intl.NumberFormat(t, {
	maximumFractionDigits: n,
	useGrouping: r
}).format(e), ie = (e, t, n) => {
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
function ae({ label: e, htmlFor: t, disabled: n }) {
	return /* @__PURE__ */ g(s, {
		label: e,
		htmlFor: t,
		disabled: n,
		className: "mb-2"
	});
}
function y(e) {
	if (!(!e || e === "auto")) return { width: e };
}
function b({ children: t, extraContent: n, inputWidth: r, trailingAction: i }) {
	let a = !r || r === "auto";
	return /* @__PURE__ */ _("div", {
		className: "flex flex-wrap items-center gap-3",
		children: [
			/* @__PURE__ */ g("div", {
				style: y(r),
				className: e(a ? "w-auto" : void 0),
				children: t
			}),
			n && /* @__PURE__ */ g("span", {
				className: "shrink-0 text-f1-foreground-secondary",
				children: n
			}),
			i
		]
	});
}
var x = u(function({ locale: s, id: u, value: y, maxDecimals: x, grouping: S = !1, step: C, min: w, max: T, onChange: E, units: oe, extraContent: D, inputWidth: se, popover: O, label: k, hint: A, error: ce, status: le, hideLabel: j = !1, disabled: M, readonly: N, loading: P, onBlur: ue, ...de }, fe) {
	let F = r(), pe = p(), I = u ?? pe, [L, me] = re({
		prop: O?.open,
		defaultProp: !1,
		onChange: O?.onOpenChange
	}), [R, z] = h(!1), [B, V] = h(() => y == null ? "" : v(y, s, x, S)), [he, H] = h(y ?? null), U = m(() => {
		if (A !== void 0) return A;
		if (w != null && T != null) return F.t("numberInput.between", {
			min: w,
			max: T
		});
		if (w != null) return F.t("numberInput.greaterThan", { min: w });
		if (T != null) return F.t("numberInput.lessThan", { max: T });
	}, [
		A,
		w,
		T
	]), W = !!D, G = O?.commitMode === "deferred", K = O !== void 0 || W, q = !j && k != null, J = ie(U, ce, le), ge = K && J != null, Y = !!(M || N || P), _e = (e) => {
		e && Y || me(e);
	};
	f(() => {
		!G || !L || H(y ?? null);
	}, [
		G,
		L,
		y
	]);
	let X = G ? he : y, Z = m(() => G ? (e) => H(e) : E, [G, E]), ve = d((e) => {
		let t = e.nativeEvent.data;
		if (!t) return;
		let n = e.currentTarget, r = n.selectionStart ?? 0, i = n.selectionEnd ?? 0, a = n.value.slice(0, r) + t + n.value.slice(i);
		(!l(a, { maxDecimals: x }) || x === 0 && /[.,]/.test(t)) && e.preventDefault();
	}, [x]), Q = (e) => {
		let t = l(e, { maxDecimals: x });
		if (!t) return;
		let { value: n } = t;
		if (n === null) {
			V(""), Z?.(null);
			return;
		}
		let r = Math.max(w ?? -Infinity, Math.min(T ?? Infinity, n));
		if (r === n) {
			V(t.formattedValue), Z?.(n);
			return;
		}
		let i = l(r.toString(), { maxDecimals: x });
		V(i?.formattedValue ?? ""), Z?.(i?.value ?? null);
	}, ye = (e) => () => {
		if (!C) return;
		if (X == null) return Q(v(C, s, x));
		let t = e === "increase" ? X + C : X - C;
		w != null && t < w || T != null && t > T || Q(v(t, s, x));
	};
	f(() => {
		if (S && !R) {
			V(X == null ? "" : v(X, s, x, !0));
			return;
		}
		let e = l(B, { maxDecimals: x });
		X !== void 0 && X != e?.value && V(X == null ? "" : v(X, s, x));
	}, [
		B,
		X,
		s,
		x,
		R,
		S
	]);
	let be = J ? { type: J.type } : void 0, $ = /* @__PURE__ */ g("div", {
		className: "group relative",
		children: /* @__PURE__ */ g(ne, {
			type: "text",
			ref: fe,
			id: I,
			value: B,
			inputMode: x === 0 ? "numeric" : "decimal",
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
			append: C ? /* @__PURE__ */ g(c, {
				step: C,
				disabled: M,
				onClickArrow: ye
			}) : void 0
		})
	});
	if (O !== void 0) {
		let { icon: r = t, side: s = "bottom", align: ne = "start", triggerLabel: c, apply: l } = O, u = G, d = l?.label ?? F.actions.apply, f = l?.icon ?? n, p = l?.closeOnApply ?? !0;
		return /* @__PURE__ */ _(a, {
			open: L,
			onOpenChange: _e,
			children: [/* @__PURE__ */ g(te, {
				asChild: !0,
				children: /* @__PURE__ */ g(i, {
					variant: "outline",
					icon: r,
					disabled: Y,
					hideLabel: !c,
					label: c ?? k
				})
			}), /* @__PURE__ */ g(ee, {
				side: s,
				align: ne,
				className: e("w-auto min-w-[220px] rounded-xl border border-solid border-f1-border-secondary p-3"),
				children: /* @__PURE__ */ _("div", {
					className: "flex flex-col",
					children: [
						q ? /* @__PURE__ */ g(ae, {
							label: k,
							htmlFor: I,
							disabled: Y
						}) : null,
						/* @__PURE__ */ g(b, {
							extraContent: D,
							inputWidth: se,
							trailingAction: u ? /* @__PURE__ */ g(i, {
								variant: "default",
								icon: f,
								label: d,
								onClick: () => {
									E?.(he), p && _e(!1);
								}
							}) : void 0,
							children: $
						}),
						ge ? /* @__PURE__ */ g(o, { status: J }) : null
					]
				})
			})]
		});
	}
	return W ? /* @__PURE__ */ _("div", {
		className: "flex flex-col",
		children: [
			q ? /* @__PURE__ */ g(ae, {
				label: k,
				htmlFor: I,
				disabled: Y
			}) : null,
			/* @__PURE__ */ g(b, {
				extraContent: D,
				inputWidth: se,
				children: $
			}),
			ge ? /* @__PURE__ */ g(o, { status: J }) : null
		]
	}) : $;
});
x.displayName = "NumberInputInternal";
//#endregion
export { x as NumberInputInternal };
