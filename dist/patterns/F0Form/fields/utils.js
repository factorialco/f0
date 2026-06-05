function a(e, u) {
  const r = u[e.fieldId];
  if ("equalsTo" in e)
    return e.equalsTo instanceof Date && r instanceof Date ? r.getTime() === e.equalsTo.getTime() : r === e.equalsTo;
  if ("notEqualsTo" in e)
    return e.notEqualsTo instanceof Date && r instanceof Date ? r.getTime() !== e.notEqualsTo.getTime() : r !== e.notEqualsTo;
  if ("greaterThan" in e) {
    const t = e.greaterThan;
    return typeof r == "number" && typeof t == "number" ? r > t : r instanceof Date && t instanceof Date ? r.getTime() > t.getTime() : !1;
  }
  if ("greaterThanOrEqual" in e) {
    const t = e.greaterThanOrEqual;
    return typeof r == "number" && typeof t == "number" ? r >= t : r instanceof Date && t instanceof Date ? r.getTime() >= t.getTime() : !1;
  }
  if ("lowerThan" in e) {
    const t = e.lowerThan;
    return typeof r == "number" && typeof t == "number" ? r < t : r instanceof Date && t instanceof Date ? r.getTime() < t.getTime() : !1;
  }
  if ("lowerThanOrEqual" in e) {
    const t = e.lowerThanOrEqual;
    return typeof r == "number" && typeof t == "number" ? r <= t : r instanceof Date && t instanceof Date ? r.getTime() <= t.getTime() : !1;
  }
  if ("isEmpty" in e) {
    const t = r == null || r === "" || Array.isArray(r) && r.length === 0;
    return e.isEmpty ? t : !t;
  }
  return "matches" in e ? typeof r == "string" && e.matches.test(r) : "includes" in e ? Array.isArray(r) ? r.includes(e.includes) : r === e.includes : "notIncludes" in e ? Array.isArray(r) ? !r.includes(e.notIncludes) : r !== e.notIncludes : !0;
}
function f(e, u) {
  return typeof e == "function" ? e({ values: u }) : a(e, u);
}
function n(e, u) {
  return e === void 0 ? !1 : typeof e == "function" ? e({ values: u }) : e;
}
function s(e, u) {
  if (e !== void 0)
    return typeof e == "function" ? e({ values: u }) : e;
}
export {
  s as evaluateDateConstraint,
  n as evaluateDisabled,
  f as evaluateRenderIf
};
