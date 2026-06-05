import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { CompanySelector as m } from "../CompanySelector/index.js";
import { SidebarIcon as s } from "../Icon/index.js";
function c({
  companies: r,
  selected: o,
  onChange: t,
  withNotification: f = !1,
  additionalOptions: i,
  isLoading: a = !1
}) {
  return /* @__PURE__ */ l("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ e(
      m,
      {
        companies: r,
        selected: o,
        onChange: t,
        isLoading: a,
        withNotification: f,
        additionalOptions: i
      }
    ),
    /* @__PURE__ */ e(s, {})
  ] });
}
export {
  c as SidebarHeader
};
