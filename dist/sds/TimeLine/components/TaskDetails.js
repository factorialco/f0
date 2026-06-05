import { jsxs as r, jsx as t } from "react/jsx-runtime";
import { Metadata as m } from "../../../experimental/Information/Headers/Metadata/index.js";
import { Actions as l } from "./Actions.js";
const A = ({ props: i }) => {
  const { metadata: s, primaryAction: e, secondaryActions: a, otherActions: o } = i, n = s?.some(Boolean), c = e || a && a.length > 0 || o && o.length > 0;
  return /* @__PURE__ */ r("div", { className: "pl-9", children: [
    s && n && /* @__PURE__ */ t("div", { className: "mb-3", children: /* @__PURE__ */ t(m, { items: s }) }),
    c && /* @__PURE__ */ t("div", { className: "mb-3", children: /* @__PURE__ */ t(
      l,
      {
        primaryAction: e,
        secondaryActions: a,
        otherActions: o
      }
    ) })
  ] });
};
export {
  A as TaskDetails
};
