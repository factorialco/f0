import { unwrapZodSchema as c, isZodType as t } from "../../f0Schema.js";
function o(e) {
  const n = c(e);
  return t(n, "ZodString") ? (n._def.checks || []).some((r) => r.kind === "email") : !1;
}
function s(e) {
  const n = c(e);
  return t(n, "ZodString") ? (n._def.checks || []).some((r) => r.kind === "url") : !1;
}
function f(e) {
  return o(e) ? "email" : s(e) ? "url" : "text";
}
export {
  f as inferInputType
};
