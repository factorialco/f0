import { useState as s, useRef as o, useCallback as e } from "react";
function E() {
  const [c, u] = s(!1), [a, m] = s(!1), F = o((t) => {
    u(t.isSubmitting), m(t.hasErrors);
  }), r = o(null), f = o({
    get current() {
      return r.current;
    },
    set current(t) {
      r.current = t, t && t._setStateCallback(F.current);
    }
  }), i = e(async () => {
    if (!r.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    return r.current.submit();
  }, []), l = e(() => {
    if (!r.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    r.current.reset();
  }, []), g = e(() => r.current ? r.current.isDirty() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), !1), []), R = e(() => r.current ? r.current.getValues() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), {}), []), p = e(
    (t, n, V) => {
      if (!r.current) {
        console.warn(
          "useF0Form: formRef is not attached to an F0Form component"
        );
        return;
      }
      r.current.setValue(t, n, V);
    },
    []
  ), d = e(
    (t, n) => {
      if (!r.current) {
        console.warn(
          "useF0Form: formRef is not attached to an F0Form component"
        );
        return;
      }
      r.current.setValues(t, n);
    },
    []
  ), h = e(async (t) => r.current ? r.current.trigger(t) : (console.warn("useF0Form: formRef is not attached to an F0Form component"), !1), []), w = e(() => r.current ? r.current.getErrors() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), {}), []), b = e(() => r.current ? r.current.getFieldNames() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), []), []);
  return {
    formRef: f.current,
    submit: i,
    reset: l,
    isDirty: g,
    getValues: R,
    setValue: p,
    setValues: d,
    trigger: h,
    getErrors: w,
    getFieldNames: b,
    isSubmitting: c,
    hasErrors: a
  };
}
export {
  E as useF0Form
};
