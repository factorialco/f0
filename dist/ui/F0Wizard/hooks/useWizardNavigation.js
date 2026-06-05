import { useState as y, useRef as J, useCallback as f } from "react";
function R({
  steps: u,
  defaultStepIndex: h = 0,
  onSubmit: o,
  onStepChanged: i,
  allowStepSkipping: l = !1,
  autoCloseOnLastStepSubmit: p = !1,
  onClose: g
}) {
  const [r, N] = y(h), [m, a] = y(!1), e = J(u);
  e.current = u;
  const s = f(
    (t) => {
      N(t), i?.(t);
    },
    [i]
  ), E = f(
    async (t) => {
      if (!(t < 0 || t >= e.current.length || e.current[r]?.hasErrors?.() === !0 || !l && t > r + 1 || t > r && e.current.slice(r, t).some((n) => n.hasErrors?.() === !0) || !e.current.slice(0, t).every((c) => c.isCompleted?.() !== !1))) {
        if (t > r) {
          a(!0);
          try {
            for (let c = r; c < t; c++) {
              const n = e.current[c];
              n?.onNext && await n.onNext();
            }
            s(t);
          } catch {
          } finally {
            a(!1);
          }
          return;
        }
        s(t);
      }
    },
    [s, r, l]
  ), v = f(async () => {
    const t = e.current[r];
    if (t) {
      a(!0);
      try {
        t.onNext && await t.onNext(), r === e.current.length - 1 ? (o && await o(), p && g?.()) : s(r + 1);
      } catch {
      } finally {
        a(!1);
      }
    }
  }, [r, o, s, p, g]), w = f(() => {
    r > 0 && s(r - 1);
  }, [r, s]);
  return {
    currentStep: r,
    loading: m,
    goToStep: E,
    goNext: v,
    goPrevious: w
  };
}
export {
  R as useWizardNavigation
};
