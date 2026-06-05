import { jsx as l } from "react/jsx-runtime";
import { useContext as r, createContext as f, useState as m, useEffect as c } from "react";
import { detectPlatform as P } from "./user-platform.js";
const t = f(null), v = ({
  children: e,
  platform: n,
  isDev: o = !1,
  showExperimentalWarnings: s = !1,
  renderDataTestIdAttribute: u = !1
}) => {
  const [a, i] = m(
    n ?? "unknown"
  );
  return c(() => {
    n === void 0 && P().then(i);
  }, [n]), /* @__PURE__ */ l(
    t.Provider,
    {
      value: {
        platform: a,
        isDev: o,
        showExperimentalWarnings: s,
        renderDataTestIdAttribute: u
      },
      children: e
    }
  );
}, h = () => {
  const e = r(t);
  if (e === null)
    throw new Error("useIsDev must be used within an UserPlatformProvider");
  return e.isDev;
};
function p() {
  const e = r(t);
  if (e === null)
    throw new Error(
      "useUserPlatform must be used within an UserPlatformProvider"
    );
  return e.platform;
}
function U() {
  return r(t)?.renderDataTestIdAttribute ?? !1;
}
function E() {
  const e = r(t);
  return e === null ? (console.warn(
    "useShowExperimentalWarnings must be used within an UserPlatformProvider"
  ), !1) : e.showExperimentalWarnings;
}
export {
  v as UserPlatformProvider,
  h as useIsDev,
  U as useRenderDataTestIdAttribute,
  E as useShowExperimentalWarnings,
  p as useUserPlatform
};
