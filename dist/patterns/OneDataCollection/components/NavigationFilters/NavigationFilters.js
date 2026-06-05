import { jsx as o, Fragment as i } from "react/jsx-runtime";
import c from "react";
import { navigationFilterTypes as f } from "../../navigationFilters/index.js";
const g = ({
  navigationFilters: r,
  currentNavigationFilters: t,
  onChangeNavigationFilters: m
}) => /* @__PURE__ */ o(i, { children: r && Object.entries(r).map(([e, n]) => {
  const a = f[n.type];
  return /* @__PURE__ */ o(c.Fragment, { children: a.render({
    filter: n,
    value: t[e],
    onChange: (p) => {
      m({
        ...t,
        [e]: p
      });
    }
  }) }, e);
}) });
export {
  g as NavigationFilters
};
