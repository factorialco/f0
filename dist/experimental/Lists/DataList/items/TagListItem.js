import { jsx as t } from "react/jsx-runtime";
import { forwardRef as i } from "react";
import { F0TagList as o } from "../../../../components/tags/F0TagList/index.js";
import { experimentalComponent as s } from "../../../../lib/experimental.js";
function a(m, r) {
  return /* @__PURE__ */ t("li", { ref: r, className: "flex items-start pt-1", children: /* @__PURE__ */ t(o, { ...m }) });
}
const e = i(a);
e.displayName = "TagListItem";
const l = s("TagListItem", e);
export {
  l as TagListItem
};
