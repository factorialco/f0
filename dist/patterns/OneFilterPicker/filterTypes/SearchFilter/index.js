import { jsx as t } from "react/jsx-runtime";
import e from "../../../../icons/app/AlertCircle.js";
import "../../../../icons/app/Menu.js";
import { SearchFilter as i } from "./SearchFilter.js";
const a = {
  emptyValue: "",
  defaultOptions: {
    strictToggle: !1
  },
  render: (r) => /* @__PURE__ */ t(i, { ...r }),
  isEmpty: (r) => typeof r == "object" && "value" in r ? r.value?.trim() === "" : (r ?? "").trim() === "",
  chipLabel: (r) => typeof r == "object" && "value" in r ? {
    label: r.value,
    icon: r.strict ? e : void 0,
    avatar: void 0
  } : r ?? ""
};
export {
  a as default,
  a as searchFilter
};
