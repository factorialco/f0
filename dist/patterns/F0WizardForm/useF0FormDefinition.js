import { useMemo as L, useState as v, useRef as F, useEffect as R } from "react";
function j(e) {
  if (typeof e != "object" || e === null) return !1;
  const s = e._def;
  return s?.typeName === "ZodObject" || s?.typeName === "ZodEffects";
}
function A(e, c) {
  const s = typeof e == "function", f = !1, [t, l] = v(
    s ? void 0 : e
  ), [u, i] = v(s && !f), o = F(e);
  o.current = e;
  const a = F(c);
  return a.current = c, R(() => {
    if (typeof o.current != "function") return;
    const n = new AbortController();
    i(!0);
    const d = o.current;
    return a.current && !a.current.safeParse(n.signal).success ? (i(!1), () => {
      n.abort();
    }) : (d(
      n.signal
    ).then((r) => {
      n.signal.aborted || (l(r), i(!1));
    }).catch((r) => {
      n.signal.aborted || (console.warn(
        "[useAsyncDefaultValues] Async defaultValues rejected:",
        r
      ), l(void 0), i(!1));
    }), () => {
      n.abort();
    });
  }, [s, f]), s ? { resolved: t, isLoading: u } : { resolved: e, isLoading: !1 };
}
function S(e) {
  const {
    name: c,
    schema: s,
    sections: f,
    defaultValues: t,
    onSubmit: l,
    submitConfig: u,
    errorTriggerMode: i,
    defaultValuesParamsSchema: o,
    description: a,
    module: n
  } = e, d = "initialFiles" in e ? e.initialFiles : void 0, m = "steps" in e ? e.steps : void 0, r = typeof t == "function" && o ? t : void 0, y = typeof t == "function" && !o ? t : void 0, g = typeof t != "function" ? t : void 0, { resolved: b, isLoading: p } = A(d);
  return L(() => {
    const h = j(s) ? "single" : "per-section";
    return {
      name: c,
      description: a,
      module: n,
      schema: s,
      sections: f,
      defaultValues: g,
      asyncDefaultValues: y,
      onSubmit: l,
      submitConfig: u,
      errorTriggerMode: i,
      isLoading: p,
      defaultValuesParamsSchema: o,
      defaultValuesFn: r,
      initialFiles: b,
      isLoadingInitialFiles: p,
      steps: m,
      _brand: h
    };
  }, [
    c,
    a,
    n,
    s,
    f,
    g,
    y,
    l,
    u,
    i,
    o,
    r,
    b,
    p,
    m
  ]);
}
export {
  A as useAsyncDefaultValues,
  S as useF0FormDefinition
};
