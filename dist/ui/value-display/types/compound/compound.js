import { jsx as i, jsxs as m, Fragment as h } from "react/jsx-runtime";
import { Fragment as y } from "react";
import { cn as f } from "../../../../lib/utils.js";
import { tableDisplayClassNames as g } from "../../const.js";
const P = " / ", v = "–", u = {
  neutral: "text-f1-foreground",
  secondary: "text-f1-foreground-secondary",
  positive: "text-f1-foreground-positive",
  critical: "text-f1-foreground-critical",
  warning: "text-f1-foreground-warning",
  info: "text-f1-foreground-info",
  selected: "text-f1-foreground-selected"
}, s = (e, t) => e !== void 0 ? { kind: "text", text: e, isMissing: !1 } : t !== void 0 ? { kind: "text", text: t, isMissing: !0 } : { kind: "text", text: v, isMissing: !0 }, N = (e) => {
  if (e.length === 0 || !e.every((n) => n.isMissing))
    return null;
  const [t] = e;
  return t.kind === "text" ? t.text : v;
}, p = ({
  number: e,
  units: t,
  unitsPosition: n,
  decimalPlaces: a
}) => {
  const l = n ?? "right", c = t ?? "";
  return {
    value: a !== void 0 ? e?.toFixed(a) ?? "" : e?.toString() ?? "",
    units: c,
    unitsPosition: l
  };
}, b = ({ parts: e }) => /* @__PURE__ */ m(h, { children: [
  e.unitsPosition === "left" && e.units && /* @__PURE__ */ i("span", { children: e.units.toString() }),
  e.value,
  e.unitsPosition === "right" && e.units && /* @__PURE__ */ i("span", { children: e.units.toString() })
] }), M = (e) => {
  switch (e.type) {
    case "text":
      return s(
        e.value !== void 0 ? e.value.toString() : void 0,
        e.placeholder
      );
    case "number":
      return e.value === void 0 ? s(void 0, e.placeholder) : {
        kind: "formatted",
        parts: p({
          number: e.value,
          decimalPlaces: e.decimalPlaces,
          units: e.units,
          unitsPosition: e.unitsPosition
        }),
        isMissing: !1
      };
    case "percentage":
      return e.value === void 0 ? s(void 0, e.placeholder) : s(
        `${p({
          number: e.value,
          decimalPlaces: e.decimalPlaces
        }).value}%`
      );
    case "amount":
      return e.value === void 0 ? s(void 0, e.placeholder) : {
        kind: "formatted",
        parts: p({
          number: e.value,
          decimalPlaces: e.currency?.decimalPlaces,
          units: e.currency?.symbol,
          unitsPosition: e.currency?.symbolPosition
        }),
        isMissing: !1
      };
  }
}, k = (e, t) => e || (t ? "secondary" : "neutral"), T = (e, t) => {
  const n = f(
    "flex flex-1 items-center text-f1-foreground",
    t.visualization === "table" && [
      t.tableAlign === "right" && "justify-end",
      g.text
    ]
  );
  if (e.segments.length === 0)
    return /* @__PURE__ */ i("div", { className: n, "data-cell-type": "compound", children: /* @__PURE__ */ i("span", { className: u.secondary, children: v }) });
  const a = e.separator ?? P, l = e.segments.map(
    (r) => M(r)
  ), c = N(l);
  return c !== null ? /* @__PURE__ */ i("div", { className: n, "data-cell-type": "compound", children: /* @__PURE__ */ i("span", { className: u.secondary, children: c }) }) : /* @__PURE__ */ i("div", { className: n, "data-cell-type": "compound", children: e.segments.map((r, d) => {
    const o = l[d], x = k(r.tone, o.isMissing);
    return /* @__PURE__ */ m(y, { children: [
      d > 0 && /* @__PURE__ */ i(
        "span",
        {
          className: f(u.secondary, "whitespace-pre"),
          children: a
        }
      ),
      /* @__PURE__ */ i(
        "span",
        {
          className: f(
            u[x],
            o.kind === "formatted" && "inline-flex items-center gap-1"
          ),
          children: o.kind === "formatted" ? /* @__PURE__ */ i(b, { parts: o.parts }) : o.text
        }
      )
    ] }, `${r.type}-${d}`);
  }) });
};
export {
  T as CompoundCell
};
