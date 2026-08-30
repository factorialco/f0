import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { F0Icon as n } from "../../../components/F0Icon/index.js";
import r from "../../../icons/app/CrossedCircle.js";
import { useI18n as i } from "../../../lib/providers/i18n/i18n-provider.js";
import { Spinner as ee } from "../../../ui/Spinner/index.js";
import { InputMessages as te } from "../../../components/F0InputField/components/InputMessages.js";
import { Label as ne } from "../../../components/F0InputField/components/Label.js";
import { buildMeta as re, countryForPartialE164 as ie, countryForValue as ae, e164ToValue as a, toCountryCode as o, toPhoneCountry as s, valueToE164 as c } from "./lib/phone.js";
import { CountrySelect as l } from "./components/CountrySelect.js";
import { PhoneNumberInput as u } from "./components/PhoneNumberInput.js";
import { exampleInternationalPlaceholder as d, exampleNationalPlaceholder as f } from "./lib/placeholder.js";
import { forwardRef as p, useEffect as oe, useId as se, useMemo as m, useRef as h, useState as ce } from "react";
import { cva as g } from "cva";
import { jsx as _, jsxs as v } from "react/jsx-runtime";
import { useControllableState as le } from "@radix-ui/react-use-controllable-state";
import ue from "react-phone-number-input";
//#region src/experimental/Forms/F0PhoneInput/F0PhoneInput.tsx
var de = g({
	base: [
		"flex items-center transition-all",
		"border-[1px] border-solid border-f1-border bg-f1-background",
		"focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:transition-none active:transition-none"
	],
	variants: {
		size: {
			sm: "h-[32px] rounded",
			md: "h-[40px] rounded-md"
		},
		status: {
			default: "focus-within:border-f1-border-selected-bold focus-within:ring-f1-background-selected",
			warning: "border-f1-border-warning-bold focus-within:border-f1-border-warning-bold focus-within:ring-f1-border-warning",
			info: "border-f1-border-info-bold focus-within:border-f1-border-info-bold focus-within:ring-f1-border-info",
			error: "border-f1-border-critical-bold bg-f1-background-critical bg-opacity-10 focus-within:border-f1-border-critical-bold focus-within:ring-f1-border-critical"
		},
		disabled: {
			true: "cursor-not-allowed bg-f1-background-tertiary",
			false: ""
		},
		readonly: {
			true: "border-f1-border-secondary bg-f1-background-secondary",
			false: ""
		}
	},
	compoundVariants: [
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
}), y = p(function({ label: p, value: g, defaultValue: y, onChange: fe, onCountryChange: b, defaultCountry: x, pinnedCountries: S, allowedCountries: C, placeholder: w, hideLabel: T = !1, labelIcon: E, hint: D, error: O, status: k, required: A = !1, disabled: j = !1, readonly: M = !1, loading: N = !1, clearable: P = !1, size: F = "sm", name: I, id: L, autoFocus: R, onBlur: z, onFocus: pe }, B) {
	let V = i(), me = se(), H = L ?? me, [U, he] = le({
		prop: g,
		defaultProp: y
	}), W = s(x), G = m(() => c(U, W), [U, W]), [K, ge] = ce(() => ae(U) ?? W), q = h(K), _e = (e) => {
		q.current = e, ge(e), b?.(o(e));
	}, J = (e) => {
		let t = a(e, q.current);
		he(t), fe?.(t, re(e, q.current));
	}, Y = m(() => {
		let e = { country: V.phoneInput.country };
		for (let [t, n] of Object.entries(V.countries)) e[t.toUpperCase()] = n;
		return e;
	}, [V]), ve = m(() => {
		let e = (S ?? []).map(s).filter((e) => !!e);
		if (e.length) return [
			...e,
			"|",
			"..."
		];
	}, [S]), ye = m(() => (S ?? []).map(s).find(Boolean) ?? "ES", [S]), X = m(() => {
		if (!C) return;
		let e = C.map(s).filter((e) => !!e);
		if (!e.length) {
			process.env.NODE_ENV !== "production" && console.warn("F0PhoneInput: `allowedCountries` resolved to no valid country codes — the restriction was ignored.", C);
			return;
		}
		return e;
	}, [C]), Z = h(null);
	oe(() => {
		if (K || !G) return;
		let e = ie(G, X);
		e && Z.current?.(e);
	}, [
		K,
		G,
		X
	]);
	let Q = k;
	D && (Q = {
		type: "default",
		message: D
	}), O && (Q = {
		type: "error",
		message: typeof O == "string" ? O : void 0
	});
	let $ = P && !(j || M) && !!G;
	return /* @__PURE__ */ v("div", {
		className: e("flex flex-col gap-2", "pointer-events-none", j && "cursor-not-allowed"),
		children: [
			!T && p && /* @__PURE__ */ _(ne, {
				label: p,
				required: A,
				htmlFor: H,
				icon: E,
				className: "min-w-0 flex-1",
				disabled: j
			}),
			/* @__PURE__ */ v("div", {
				className: e("pointer-events-auto", de({
					size: F,
					status: Q?.type ?? "default",
					disabled: j,
					readonly: M
				})),
				"data-testid": "input-field-wrapper",
				children: [/* @__PURE__ */ _(ue, {
					className: "flex h-full min-w-0 flex-1 items-center",
					value: G ?? void 0,
					onChange: J,
					onCountryChange: _e,
					defaultCountry: K ?? W,
					countries: X,
					countryOptionsOrder: ve,
					labels: Y,
					initialValueFormat: "national",
					countrySelectComponent: l,
					countrySelectProps: {
						size: F,
						selectCountryRef: Z
					},
					inputComponent: u,
					placeholder: w ?? (K ? f(K) : d(ye)),
					disabled: j,
					readOnly: M,
					required: A,
					name: I,
					id: H,
					autoFocus: R,
					onBlur: z,
					onFocus: pe,
					ref: B,
					"aria-label": p,
					"aria-invalid": Q?.type === "error" || void 0,
					"aria-busy": N || void 0
				}), ($ || N) && /* @__PURE__ */ v("div", {
					className: e("flex h-fit min-w-6 items-center gap-1.5 self-center pr-[3px]", F === "md" && "pr-[7px]"),
					children: [$ && /* @__PURE__ */ _("button", {
						className: e("flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full p-0", t()),
						"aria-label": "Clear",
						type: "button",
						tabIndex: 0,
						"data-testid": "clear-button",
						onClick: (e) => {
							e.stopPropagation(), J(void 0);
						},
						children: /* @__PURE__ */ _(n, {
							icon: r,
							color: "default",
							size: "md"
						})
					}), N && /* @__PURE__ */ _("div", {
						className: "pointer-events-none flex h-6 w-6 items-center justify-center",
						children: /* @__PURE__ */ _(ee, {
							size: "small",
							className: "mt-[1px]"
						})
					})]
				})]
			}),
			/* @__PURE__ */ _(te, { status: Q })
		]
	});
});
//#endregion
export { y as F0PhoneInput };
