import { unwrapZodSchema as u, isZodType as t } from "../f0Schema.js";
function o(e) {
  return t(e, "ZodOptional") || t(e, "ZodNullable") || t(e, "ZodDefault") && o(e._def.innerType);
}
const l = /* @__PURE__ */ new Set([
  "min",
  // .min(n) where n >= 1
  "email",
  // .email()
  "url",
  // .url()
  "uuid",
  // .uuid()
  "cuid",
  // .cuid()
  "cuid2",
  // .cuid2()
  "ulid",
  // .ulid()
  "regex",
  // .regex() - typically requires content
  "includes",
  // .includes() - requires the substring
  "startsWith",
  // .startsWith()
  "endsWith"
  // .endsWith()
]);
function d(e) {
  const i = u(e);
  return t(i, "ZodString") ? (i._def.checks || []).some((n) => n.kind === "min" ? (n.value ?? 0) >= 1 : l.has(n.kind)) : !1;
}
const a = /* @__PURE__ */ new Set([
  "select",
  "date",
  "time",
  "datetime",
  "daterange",
  "file"
]);
function f(e, i) {
  if (o(e))
    return !1;
  const r = u(e);
  if (t(r, "ZodString"))
    return i && a.has(i) ? !0 : d(e);
  if (t(r, "ZodObject")) {
    const n = r._def.shape();
    if (n && "value" in n) {
      if (o(n.value))
        return !1;
      if (t(u(n.value), "ZodString"))
        return d(n.value);
    }
  }
  return !0;
}
export {
  f as isFieldRequired,
  o as isOptionalOrNullable
};
