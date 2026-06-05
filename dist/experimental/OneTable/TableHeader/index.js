import { jsx as a } from "react/jsx-runtime";
import { cn as o } from "../../../lib/utils.js";
import { TableHeader as t } from "../../../ui/table.js";
function i({ children: e, sticky: r = !1 }) {
  return /* @__PURE__ */ a(t, { className: o(r && "sticky top-0 z-30"), children: e });
}
export {
  i as TableHeader
};
