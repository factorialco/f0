import { unwrapZodSchema as o, isZodType as a } from "../../f0Schema.js";
function s(r) {
  const e = o(r);
  if (!a(e, "ZodString"))
    return {};
  const c = e._def.checks || [];
  let t;
  for (const n of c)
    n.kind === "max" && (t = n.value);
  return { maxLength: t };
}
export {
  s as extractTextareaConstraints
};
