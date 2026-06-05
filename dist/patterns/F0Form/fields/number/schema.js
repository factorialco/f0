import { unwrapZodSchema as o, isZodType as a } from "../../f0Schema.js";
function m(s) {
  const n = o(s);
  if (!a(n, "ZodNumber"))
    return { isInteger: !1 };
  const c = n._def.checks || [];
  let t, i, r = !1;
  for (const e of c)
    e.kind === "min" ? t = e.value : e.kind === "max" ? i = e.value : e.kind === "int" && (r = !0);
  return { min: t, max: i, isInteger: r };
}
export {
  m as extractNumberConstraints
};
