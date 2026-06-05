import { buildDynamicSchema as p } from "../conditionalResolver.js";
import { describeFormSchema as v } from "../describeFormSchema.js";
import { unwrapToZodObject as F, getF0Config as g } from "../f0Schema.js";
import { evaluateRenderIf as w } from "../fields/utils.js";
function S(u) {
  const s = {};
  let o;
  for (const i of u.issues) {
    if (i.path.length === 0) {
      o === void 0 && (o = i.message);
      continue;
    }
    const c = i.path.join(".");
    c in s || (s[c] = i.message);
  }
  return { errors: s, rootError: o };
}
function Z(u) {
  const { schema: s, defaultValues: o, errorMap: i, onSubmit: c } = u, f = async (r) => {
    const t = { ...o ?? {}, ...r ?? {} }, n = p(s, t), e = {};
    for (const [b, h] of Object.entries(t))
      e[b] = h === null ? void 0 : h;
    const a = i ? { errorMap: i } : void 0, l = await n.safeParseAsync(e, a);
    if (l.success)
      return { valid: !0, errors: {} };
    const { errors: d, rootError: m } = S(l.error);
    return {
      valid: !1,
      errors: d,
      ...m !== void 0 && { rootError: m }
    };
  };
  return {
    validate: f,
    validateField: async (r, t) => {
      const e = (await f(t)).errors[r];
      return {
        valid: e === void 0,
        errors: e !== void 0 ? { [r]: e } : {}
      };
    },
    describeFields: () => v(s),
    getDefaultValues: () => o,
    getVisibleFields: (r) => {
      const t = { ...o ?? {}, ...r ?? {} }, n = F(s), e = [];
      for (const [a, l] of Object.entries(n.shape)) {
        const d = g(l);
        if (!d?.renderIf) {
          e.push(a);
          continue;
        }
        w(d.renderIf, t) && e.push(a);
      }
      return e;
    },
    submit: async (r) => {
      if (!c)
        throw new Error(
          "createF0FormTester: cannot call submit() without an onSubmit handler. Pass onSubmit in the options, or use createF0FormDefinitionTester which reads it from the definition."
        );
      const t = await f(r);
      if (!t.valid)
        return { success: !1, errors: t.errors };
      const n = { ...o ?? {}, ...r ?? {} };
      return c(n);
    }
  };
}
export {
  Z as createF0FormTester
};
