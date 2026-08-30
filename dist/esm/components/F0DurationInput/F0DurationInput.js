import { cn as e } from "../../lib/utils.js";
import { F0Icon as t } from "../F0Icon/index.js";
import n from "../../icons/app/Bullet.js";
import { InputMessages as r } from "../F0InputField/components/InputMessages.js";
import { Label as i } from "../F0InputField/components/Label.js";
import { DEFAULT_UNITS as a, UNIT_ORDER as o, clampValue as s, fieldsToSeconds as c, secondsToVisibleFields as l } from "./utils.js";
import { Fragment as u, forwardRef as d, useCallback as f, useEffect as p, useId as ee, useMemo as m, useRef as h, useState as g } from "react";
import { cva as _ } from "cva";
import { jsx as v, jsxs as y } from "react/jsx-runtime";
//#region src/components/F0DurationInput/F0DurationInput.tsx
var te = {
	days: "d",
	hours: "h",
	minutes: "min",
	seconds: "s"
}, b = {
	days: "Days",
	hours: "Hours",
	minutes: "Minutes",
	seconds: "Seconds"
}, x = 2, S = _({
	base: [
		"inline-flex items-center gap-1 overflow-hidden rounded",
		"border border-solid border-f1-border bg-f1-background",
		"transition-[border-color]",
		"focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:transition-none active:transition-none"
	],
	variants: {
		size: {
			sm: "px-2 py-1",
			md: "px-3 py-[6px]"
		},
		status: {
			default: "focus-within:border-f1-border-selected-bold focus-within:ring-f1-background-selected",
			warning: "border-f1-border-warning-bold focus-within:border-f1-border-warning-bold focus-within:ring-f1-border-warning",
			info: "border-f1-border-info-bold focus-within:border-f1-border-info-bold focus-within:ring-f1-border-info",
			error: "border-f1-border-critical-bold bg-f1-background-critical bg-opacity-10 focus-within:border-f1-border-critical-bold focus-within:ring-f1-border-critical"
		},
		disabled: {
			true: "cursor-not-allowed aria-disabled:cursor-not-allowed bg-f1-background-tertiary",
			false: "cursor-text"
		},
		readonly: {
			true: "border-f1-border-secondary",
			false: ""
		}
	},
	compoundVariants: [
		{
			disabled: !1,
			readonly: !0,
			class: "bg-f1-background-secondary"
		},
		{
			disabled: !1,
			readonly: !1,
			status: "default",
			class: "hover:border-f1-border-hover"
		},
		{
			disabled: !1,
			readonly: !1,
			status: "warning",
			class: "hover:border-f1-border-warning-bold"
		},
		{
			disabled: !1,
			readonly: !1,
			status: "info",
			class: "hover:border-f1-border-info-bold"
		},
		{
			disabled: !1,
			readonly: !1,
			status: "error",
			class: "hover:border-f1-border-critical-bold"
		}
	],
	defaultVariants: {
		size: "md",
		status: "default",
		disabled: !1,
		readonly: !1
	}
}), C = d(function({ id: d, "aria-describedby": _, "aria-invalid": C, label: w, ariaLabel: T, hideLabel: ne = !1, value: E, onChange: D, allowNegative: O = !1, onBlur: k, units: A = a, fields: j, status: M, disabled: N = !1, required: P = !1, readonly: F = !1, size: I = "md" }, L) {
	let R = ee(), z = h(/* @__PURE__ */ new Map()), B = h(!1), V = m(() => {
		let e = o.filter((e) => A.includes(e));
		return e.length > 0 ? e : o.filter((e) => a.includes(e));
	}, [A]), H = V.join("|"), [U, W] = g(() => O && E < 0), G = f((e) => O ? Math.abs(e) : e, [O]), [K, q] = g(() => l(G(E), V)), J = h(E), Y = h(H);
	(E !== J.current || H !== Y.current) && (J.current = E, Y.current = H, q(l(G(E), V)), W(O && E < 0));
	let re = `${R}-${V[0]}`, X = f((e) => {
		let t = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		};
		for (let n of V) t[n] = e[n];
		return t;
	}, [V]), Z = f((e, t) => {
		let n = X(e), r = c(n), i = t && r > 0 ? -r : r;
		q(n), J.current = i, D(i);
	}, [D, X]), ie = f((e, t) => (n) => {
		let r = n.target.value, i = e === V[0], a = O && i && r.trimStart().startsWith("-");
		if (r === "") {
			let t = !i && U;
			W(t), Z({
				...K,
				[e]: 0
			}, t);
			return;
		}
		let o = r.replace(/\D/g, "");
		if (o === "") {
			a && (W(!0), Z({
				...K,
				[e]: 0
			}, !0));
			return;
		}
		let c = parseInt(o, 10);
		if (isNaN(c)) return;
		let l = s(c, t), u = O && i ? a : U;
		W(u), Z({
			...K,
			[e]: l
		}, u);
	}, [
		K,
		Z,
		O,
		U,
		V
	]), ae = f(() => {
		let e = X(K), t = c(e), n = U && t > 0;
		q(l(t, V)), W(n), J.current = n ? -t : t, k?.();
	}, [
		K,
		U,
		k,
		X,
		V
	]), oe = f((e) => (t) => {
		t.metaKey || t.ctrlKey || t.altKey || t.key.length > 1 || O && t.key === "-" && e === V[0] && (t.currentTarget.selectionStart ?? 0) === 0 && !t.currentTarget.value.includes("-") || /^\d$/.test(t.key) || t.preventDefault();
	}, [O, V]), se = f((e) => {
		if (N || e.target instanceof HTMLInputElement) return;
		let t = V[0];
		t && z.current.get(t)?.focus();
	}, [N, V]), ce = f((e) => (t) => {
		t ? z.current.set(e, t) : z.current.delete(e);
	}, []), Q = (T && T.trim().length > 0 ? T : void 0) || w || void 0;
	p(() => {
		process.env.NODE_ENV !== "production" && !Q && !B.current && (B.current = !0, console.warn("F0DurationInput: provide a non-empty label or ariaLabel for accessibility."));
	}, [Q]);
	let $ = M?.type ?? "default", le = !ne && w.length > 0;
	return /* @__PURE__ */ y("div", {
		ref: L,
		className: e("flex flex-col gap-2", "pointer-events-none", N && "cursor-not-allowed"),
		children: [
			le && /* @__PURE__ */ v(i, {
				label: w,
				required: P,
				htmlFor: re,
				className: "min-w-0 flex-1",
				disabled: N
			}),
			/* @__PURE__ */ v("div", {
				id: d,
				"data-testid": "input-field-wrapper",
				className: e("pointer-events-auto", S({
					size: I,
					status: $,
					disabled: N,
					readonly: F
				})),
				onClick: se,
				role: "group",
				"aria-label": Q,
				"aria-describedby": _,
				"aria-invalid": C,
				"aria-disabled": N || void 0,
				"data-status": $,
				"data-disabled": N ? "" : void 0,
				children: V.map((r, i) => {
					let a = j?.[r]?.max, o = K[r], s = j?.[r]?.suffix ?? te[r], c = o > 0 ? String(o) : "", l = U && i === 0, d = l ? `-${c}` : c, f = j?.[r]?.maxVisibleDigits, p = (typeof f == "number" && Number.isFinite(f) ? Math.max(1, Math.floor(f)) : x) + +!!l;
					return /* @__PURE__ */ y(u, { children: [
						i > 0 && /* @__PURE__ */ v(t, {
							icon: n,
							size: "xs",
							color: "default",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ v("input", {
							ref: ce(r),
							id: `${R}-${r}`,
							className: e("border-none bg-transparent p-0 text-inherit outline-none", "font-inherit text-[length:inherit] leading-[inherit]", "placeholder:text-f1-foreground-secondary", N && "pointer-events-none"),
							style: { width: `${Math.min(Math.max(d.length, 1), p)}ch` },
							"aria-label": j?.[r]?.ariaLabel ?? b[r],
							"aria-describedby": _,
							"aria-invalid": C,
							value: d,
							placeholder: "0",
							onChange: ie(r, a),
							onBlur: ae,
							onKeyDown: oe(r),
							inputMode: "numeric",
							disabled: N,
							readOnly: F,
							"aria-readonly": F || void 0
						}),
						/* @__PURE__ */ v("span", {
							className: "text-f1-foreground-secondary",
							children: s
						})
					] }, r);
				})
			}),
			/* @__PURE__ */ v(r, { status: M })
		]
	});
});
C.displayName = "F0DurationInput";
//#endregion
export { C as F0DurationInput };
