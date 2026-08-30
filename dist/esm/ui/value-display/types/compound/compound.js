import { cn as e } from "../../../../lib/utils.js";
import { tableDisplayClassNames as t } from "../../const.js";
import { Fragment as n } from "react";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/ui/value-display/types/compound/compound.tsx
var o = " / ", s = "–", c = {
	neutral: "text-f1-foreground",
	secondary: "text-f1-foreground-secondary",
	positive: "text-f1-foreground-positive",
	critical: "text-f1-foreground-critical",
	warning: "text-f1-foreground-warning",
	info: "text-f1-foreground-info",
	selected: "text-f1-foreground-selected"
}, l = (e, t) => e === void 0 ? t === void 0 ? {
	kind: "text",
	text: s,
	isMissing: !0
} : {
	kind: "text",
	text: t,
	isMissing: !0
} : {
	kind: "text",
	text: e,
	isMissing: !1
}, u = (e) => {
	if (e.length === 0 || !e.every((e) => e.isMissing)) return null;
	let [t] = e;
	return t.kind === "text" ? t.text : s;
}, d = ({ number: e, units: t, unitsPosition: n, decimalPlaces: r }) => {
	let i = n ?? "right", a = t ?? "";
	return {
		value: r === void 0 ? e?.toString() ?? "" : e?.toFixed(r) ?? "",
		units: a,
		unitsPosition: i
	};
}, f = ({ parts: e }) => /* @__PURE__ */ a(r, { children: [
	e.unitsPosition === "left" && e.units && /* @__PURE__ */ i("span", { children: e.units.toString() }),
	e.value,
	e.unitsPosition === "right" && e.units && /* @__PURE__ */ i("span", { children: e.units.toString() })
] }), p = (e) => {
	switch (e.type) {
		case "text": return l(e.value === void 0 ? void 0 : e.value.toString(), e.placeholder);
		case "number": return e.value === void 0 ? l(void 0, e.placeholder) : {
			kind: "formatted",
			parts: d({
				number: e.value,
				decimalPlaces: e.decimalPlaces,
				units: e.units,
				unitsPosition: e.unitsPosition
			}),
			isMissing: !1
		};
		case "percentage": return e.value === void 0 ? l(void 0, e.placeholder) : l(`${d({
			number: e.value,
			decimalPlaces: e.decimalPlaces
		}).value}%`);
		case "amount": return e.value === void 0 ? l(void 0, e.placeholder) : {
			kind: "formatted",
			parts: d({
				number: e.value,
				decimalPlaces: e.currency?.decimalPlaces,
				units: e.currency?.symbol,
				unitsPosition: e.currency?.symbolPosition
			}),
			isMissing: !1
		};
	}
}, m = (e, t) => e || (t ? "secondary" : "neutral"), h = (r, l) => {
	let d = e("flex flex-1 items-center text-f1-foreground", l.visualization === "table" && [l.tableAlign === "right" && "justify-end", t.text]);
	if (r.segments.length === 0) return /* @__PURE__ */ i("div", {
		className: d,
		"data-cell-type": "compound",
		children: /* @__PURE__ */ i("span", {
			className: c.secondary,
			children: s
		})
	});
	let h = r.separator ?? o, g = r.segments.map((e) => p(e)), _ = u(g);
	return _ === null ? /* @__PURE__ */ i("div", {
		className: d,
		"data-cell-type": "compound",
		children: r.segments.map((t, r) => {
			let o = g[r], s = m(t.tone, o.isMissing);
			return /* @__PURE__ */ a(n, { children: [r > 0 && /* @__PURE__ */ i("span", {
				className: e(c.secondary, "whitespace-pre"),
				children: h
			}), /* @__PURE__ */ i("span", {
				className: e(c[s], o.kind === "formatted" && "inline-flex items-center gap-1"),
				children: o.kind === "formatted" ? /* @__PURE__ */ i(f, { parts: o.parts }) : o.text
			})] }, `${t.type}-${r}`);
		})
	}) : /* @__PURE__ */ i("div", {
		className: d,
		"data-cell-type": "compound",
		children: /* @__PURE__ */ i("span", {
			className: c.secondary,
			children: _
		})
	});
};
//#endregion
export { h as CompoundCell };
