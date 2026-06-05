import { unwrapZodSchema as i, isZodType as r } from "../../f0Schema.js";
function f(c) {
  const t = i(c);
  if (!r(t, "ZodDate"))
    return {};
  const o = t._def.checks || [];
  let n, a;
  for (const e of o)
    e.kind === "min" ? n = new Date(e.value) : e.kind === "max" && (a = new Date(e.value));
  return { minDate: n, maxDate: a };
}
export {
  f as extractDateConstraints
};
