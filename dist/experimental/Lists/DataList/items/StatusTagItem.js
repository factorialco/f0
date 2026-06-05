import { jsx as t } from "react/jsx-runtime";
import { forwardRef as r } from "react";
import { F0TagStatus as o } from "../../../../components/tags/F0TagStatus/index.js";
import { experimentalComponent as s } from "../../../../lib/experimental.js";
const a = r(
  ({ ...m }, e) => /* @__PURE__ */ t("li", { ref: e, className: "flex items-start pt-1", children: /* @__PURE__ */ t(o, { ...m }) })
);
a.displayName = "StatusTagItem";
const l = s(
  "StatusTagItem",
  a
);
export {
  l as StatusTagItem
};
