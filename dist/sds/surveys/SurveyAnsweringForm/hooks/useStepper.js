import { useState as u, useCallback as o } from "react";
function x(c) {
  const [e, n] = u(0), [l, r] = u(null), t = c.length, p = t > 0 ? e / t * 100 : 0, i = l ?? p, a = c[e], g = e === 0, S = e === t - 1, m = o(() => {
    r(null), n((s) => Math.min(s + 1, t - 1));
  }, [t]), P = o(() => {
    r(null), n((s) => Math.max(s - 1, 0));
  }, []), d = o(() => {
    r(null), n(0);
  }, []), h = o((s) => {
    r(s);
  }, []);
  return {
    currentStep: e,
    totalSteps: t,
    progress: i,
    currentQuestion: a,
    isFirstStep: g,
    isLastStep: S,
    goToNext: m,
    goToPrevious: P,
    reset: d,
    setProgress: h
  };
}
export {
  x as useStepper
};
