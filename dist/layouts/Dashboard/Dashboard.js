import { jsx as r } from "react/jsx-runtime";
import { createPageLayoutBlockGroup as m } from "../Layout/utils.js";
import { DashboardWidget as u } from "./components/DashboardWidget.js";
import { GroupGrid as b } from "../Layout/groups/GroupGrid/GroupGrid.js";
const t = ({
  widgets: a,
  editMode: i = !1,
  onChange: e = () => {
  },
  deps: s,
  ...p
}) => /* @__PURE__ */ r(
  b,
  {
    widgets: a,
    editMode: i,
    onChange: e,
    deps: s,
    ...p,
    WidgetWrapper: (d, o, n) => /* @__PURE__ */ r(
      u,
      {
        title: o?.title ?? "",
        draggable: n,
        actions: o?.actions,
        aiButton: o?.aiButton,
        children: d
      }
    )
  }
);
t.displayName = "Dashboard";
const h = m("Dashboard", t);
export {
  h as Dashboard
};
