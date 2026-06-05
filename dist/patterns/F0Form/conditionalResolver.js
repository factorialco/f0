import { zodResolver as a } from "../../node_modules/.pnpm/@hookform_resolvers@3.10.0_react-hook-form@7.54.2_react@18.3.1_/node_modules/@hookform/resolvers/zod/dist/zod.js";
import { unwrapToZodObject as d, getF0Config as m, isZodType as p } from "./f0Schema.js";
import { evaluateRenderIf as l } from "./fields/utils.js";
import { any as u, object as y } from "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js";
function O(c, f) {
  return async (s, i, t) => {
    const r = b(c, s), e = { ...s };
    for (const n of Object.keys(e))
      e[n] === null && (e[n] = void 0);
    return a(r, f)(e, i, t);
  };
}
function b(c, f) {
  const i = d(c).shape, t = {};
  for (const [e, o] of Object.entries(i)) {
    const n = m(o);
    if (!n || !n.renderIf) {
      t[e] = o;
      continue;
    }
    l(n.renderIf, f) ? t[e] = o : t[e] = u();
  }
  const r = y(t);
  if (p(c, "ZodEffects")) {
    const o = c._def.effect;
    if (o.type === "refinement")
      return r.superRefine(o.refinement);
  }
  return r;
}
export {
  b as buildDynamicSchema,
  O as createConditionalResolver
};
