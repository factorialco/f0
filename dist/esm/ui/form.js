import { cn as e } from "../lib/utils.js";
import { F0Icon as t } from "../components/F0Icon/index.js";
import n from "../icons/app/AlertCircle.js";
import { useI18n as r } from "../lib/providers/i18n/i18n-provider.js";
import { Label as i } from "./label.js";
import * as a from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { Slot as c } from "@radix-ui/react-slot";
import { Controller as l, FormProvider as u, useFormContext as d } from "react-hook-form";
//#region src/ui/form.tsx
var f = u, p = a.createContext({}), m = ({ ...e }) => {
	let { formState: t } = d();
	return /* @__PURE__ */ o(p.Provider, {
		value: { name: e.name },
		children: /* @__PURE__ */ o(l, {
			...e,
			disabled: e.disabled ?? t.isSubmitting
		})
	});
}, h = () => {
	let e = a.useContext(p), t = a.useContext(g), { getFieldState: n, formState: r } = d(), i = n(e.name, r);
	if (!e) throw Error("useFormField should be used within <FormField>");
	let { id: o, hasDescription: s, registerDescription: c, hasMessage: l, registerMessage: u } = t;
	return {
		id: o,
		name: e.name,
		formItemId: `${o}-form-item`,
		formDescriptionId: `${o}-form-item-description`,
		formMessageId: `${o}-form-item-message`,
		hasDescription: s,
		registerDescription: c,
		hasMessage: l,
		registerMessage: u,
		...i
	};
}, g = a.createContext({}), _ = a.forwardRef(({ className: t, ...n }, r) => {
	let i = a.useId(), [s, c] = a.useState(!1), [l, u] = a.useState(!1), d = a.useMemo(() => ({
		id: i,
		hasDescription: s,
		registerDescription: c,
		hasMessage: l,
		registerMessage: u
	}), [
		i,
		s,
		l
	]);
	return /* @__PURE__ */ o(g.Provider, {
		value: d,
		children: /* @__PURE__ */ o("div", {
			ref: r,
			className: e("space-y-2", t),
			...n
		})
	});
});
_.displayName = "FormItem";
var v = a.forwardRef(({ className: t, ...n }, r) => {
	let { error: a, formItemId: s } = h();
	return /* @__PURE__ */ o(i, {
		ref: r,
		className: e(a && "text-f1-foreground-critical", t),
		htmlFor: s,
		...n
	});
});
v.displayName = "FormLabel";
var y = a.forwardRef(({ ...e }, t) => {
	let { error: n, formItemId: r, formDescriptionId: i, formMessageId: a, hasDescription: s, hasMessage: l } = h(), u = [s && i, l && a].filter(Boolean).join(" ") || void 0;
	return /* @__PURE__ */ o(c, {
		ref: t,
		id: r,
		"aria-describedby": u,
		"aria-invalid": !!n,
		...e
	});
});
y.displayName = "FormControl";
var b = a.forwardRef(({ className: t, ...n }, r) => {
	let { formDescriptionId: i, registerDescription: s } = h();
	return a.useEffect(() => (s?.(!0), () => s?.(!1)), [s]), /* @__PURE__ */ o("p", {
		ref: r,
		id: i,
		className: e("text-base text-f1-foreground-secondary", t),
		...n
	});
});
b.displayName = "FormDescription";
var x = a.forwardRef(({ className: i, children: c, fallback: l, ...u }, d) => {
	let { error: f, formMessageId: p, registerMessage: m } = h(), { forms: g } = r(), _ = f ? f.message ?? l ?? g.validation.invalidType : c, v = !!_;
	return a.useEffect(() => (m?.(v), () => m?.(!1)), [m, v]), _ ? /* @__PURE__ */ s("div", {
		ref: d,
		id: p,
		className: e("flex gap-1", i),
		...u,
		children: [/* @__PURE__ */ o(t, {
			icon: n,
			color: "critical"
		}), /* @__PURE__ */ o("span", {
			className: "text-base font-medium text-f1-foreground-critical",
			children: _
		})]
	}) : null;
});
x.displayName = "FormMessage";
//#endregion
export { f as Form, y as FormControl, b as FormDescription, m as FormField, _ as FormItem, v as FormLabel, x as FormMessage, h as useFormField };
