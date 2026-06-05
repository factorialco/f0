import { string as u, number as m, boolean as b, literal as v, date as h, enum as d, array as T, object as S } from "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js";
function p(e, a) {
  return e._def?.typeName === a;
}
function P(e) {
  return p(e, "ZodEffects") ? e._def.schema : e;
}
const Z = /* @__PURE__ */ new WeakMap();
function x(e, a) {
  Z.set(e, a);
  const s = e;
  return s._f0Config = a, s._innerSchema = e, s;
}
function H(e) {
  const a = e;
  return a._f0Config ? a._f0Config : Z.get(e);
}
function Q(e) {
  return H(e) !== void 0;
}
function J(e) {
  let a = e;
  for (; p(a, "ZodOptional") || p(a, "ZodNullable") || p(a, "ZodDefault"); )
    a = a._def.innerType;
  return a;
}
function U(e, a) {
  if ("fieldType" in a && a.fieldType)
    return a.fieldType;
  if ("options" in a && a.options || "source" in a && a.source)
    return "select";
  const s = J(e);
  return p(s, "ZodString") ? "rows" in a && a.rows ? "textarea" : "text" : p(s, "ZodNumber") ? "number" : p(s, "ZodBoolean") ? "switch" : p(s, "ZodDate") ? "date" : p(s, "ZodEnum") || p(s, "ZodArray") && ("options" in a && a.options || "source" in a && a.source) ? "select" : p(s, "ZodObject") && "render" in a && a.render ? "custom" : "text";
}
((e) => {
  function a({
    optional: o,
    minLength: n,
    maxLength: t,
    ...c
  }) {
    let i = u();
    const r = !o && n === void 0 ? 1 : n;
    r !== void 0 && (i = i.min(r)), t !== void 0 && (i = i.max(t));
    const f = o ? i.optional() : i;
    return e(f, c);
  }
  e.text = a;
  function s({ optional: o, ...n }) {
    const t = o ? u().email().optional() : u().email();
    return e(t, n);
  }
  e.email = s;
  function w({ optional: o, ...n }) {
    const t = o ? u().optional() : u().min(1);
    return e(
      t,
      { ...n, fieldType: "textarea" }
    );
  }
  e.textarea = w;
  function j({
    optional: o,
    min: n,
    max: t,
    isInt: c,
    ...i
  }) {
    let r = m();
    c && (r = r.int()), n !== void 0 && (r = r.min(n)), t !== void 0 && (r = r.max(t));
    const f = o ? r.optional() : r;
    return e(f, i);
  }
  e.number = j;
  function g({ optional: o, ...n }) {
    const t = o ? b() : v(!0);
    return e(
      t,
      { ...n, fieldType: "switch" }
    );
  }
  e.boolean = g;
  function C({ optional: o, ...n }) {
    const t = o ? b() : v(!0);
    return e(
      t,
      { ...n, fieldType: "checkbox" }
    );
  }
  e.checkbox = C;
  function _({ optional: o, ...n }) {
    const t = o ? h().optional() : h();
    return e(t, n);
  }
  e.date = _;
  function A({ optional: o, ...n }) {
    const t = o ? u().url().optional() : u().url();
    return e(t, n);
  }
  e.url = A;
  function E({ optional: o, ...n }) {
    const t = o ? m().optional() : m();
    return e(
      t,
      { ...n, fieldType: "money" }
    );
  }
  e.money = E;
  function k({
    optional: o,
    min: n,
    max: t,
    ...c
  }) {
    let i = m();
    n !== void 0 && (i = i.min(n)), t !== void 0 && (i = i.max(t));
    const r = o ? i.optional() : i;
    return e(
      r,
      { ...c, fieldType: "percentage" }
    );
  }
  e.percentage = k;
  function q(o) {
    if (o.options.length === 0)
      throw new Error(
        "f0FormField.cardSelect requires at least one option to build a Zod enum"
      );
    const { optional: n, ...t } = o, c = t.options.map((r) => r.value), i = n ? d(c).optional() : d(c);
    return e(
      i,
      { ...t, fieldType: "cardSelect" }
    );
  }
  e.cardSelect = q;
  function M({ optional: o, ...n }) {
    const t = o ? u().optional() : u().min(1);
    return e(
      t,
      { ...n, fieldType: "file", multiple: !1 }
    );
  }
  e.file = M;
  function N({ optional: o, ...n }) {
    const t = o ? T(u()).optional() : T(u()).min(1);
    return e(
      t,
      { ...n, fieldType: "file", multiple: !0 }
    );
  }
  e.multiFile = N;
  function O({ optional: o, ...n }) {
    const t = o ? h().optional() : h();
    return e(
      t,
      { ...n, fieldType: "time" }
    );
  }
  e.time = O;
  function D({ optional: o, ...n }) {
    const t = o ? h().optional() : h();
    return e(
      t,
      { ...n, fieldType: "datetime" }
    );
  }
  e.datetime = D;
  function R({ optional: o, ...n }) {
    const t = o ? m().optional() : m();
    return e(
      t,
      { ...n, fieldType: "duration" }
    );
  }
  e.duration = R;
  function W({ optional: o, ...n }) {
    const t = S({ from: h(), to: h() }), c = o ? t.optional() : t;
    return e(
      c,
      { ...n, fieldType: "daterange" }
    );
  }
  e.dateRange = W;
  function B({ optional: o, ...n }) {
    const t = S({
      value: u(),
      mentionIds: T(u()).optional()
    }), c = o ? t.optional() : t;
    return e(
      c,
      { ...n, fieldType: "richtext" }
    );
  }
  e.richText = B;
  function I(o) {
    if (typeof o != "object" || o === null)
      throw new TypeError("f0FormField.select requires a config object");
    const n = o, { optional: t, ...c } = n, i = Array.isArray(n.options) ? n.options : void 0;
    if (i && i.length > 0) {
      const f = i.filter(
        (l) => typeof l == "object" && l !== null && "value" in l && typeof l.value == "string"
      ).map((l) => l.value);
      if (f.length > 0) {
        const l = t ? d(f).optional() : d(f);
        return e(l, c);
      }
    }
    const r = t ? u().optional() : u();
    return e(r, c);
  }
  e.select = I;
  function z(o) {
    if (typeof o != "object" || o === null)
      throw new TypeError("f0FormField.multiSelect requires a config object");
    const n = o, { optional: t, ...c } = n, i = Array.isArray(n.options) ? n.options : void 0;
    if (i && i.length > 0) {
      const l = i.filter(
        (y) => typeof y == "object" && y !== null && "value" in y && typeof y.value == "string"
      ).map((y) => y.value);
      if (l.length > 0) {
        const y = T(d(l)).min(1), G = t ? y.optional() : y;
        return e(
          G,
          { ...c, multiple: !0 }
        );
      }
    }
    const r = T(u()).min(1), f = t ? r.optional() : r;
    return e(f, { ...c, multiple: !0 });
  }
  e.multiSelect = z;
})(x || (x = {}));
export {
  x as f0FormField,
  H as getF0Config,
  Q as hasF0Config,
  U as inferFieldType,
  p as isZodType,
  P as unwrapToZodObject,
  J as unwrapZodSchema
};
