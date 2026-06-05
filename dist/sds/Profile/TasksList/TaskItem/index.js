import { jsx as c } from "react/jsx-runtime";
import { useMemo as m } from "react";
import d from "../../../../icons/app/Calendar.js";
import f from "../../../../icons/app/Completed.js";
import p from "../../../../icons/app/DottedCircle.js";
import a from "../../../../icons/app/InProgressTask.js";
import "../../../../icons/app/Menu.js";
import { WidgetSimpleListItem as l } from "../../../../experimental/Widgets/Content/ListItems/WidgetSimpleListItem/index.js";
const s = {
  done: f,
  "in-progress": a,
  todo: p
}, x = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function M({
  task: o,
  status: e,
  onClick: t,
  hideIcon: r = !1
}) {
  const i = () => {
    t?.(o);
  }, n = m(() => {
    if (!r)
      return s[e];
  }, [e, r]);
  return /* @__PURE__ */ c(
    l,
    {
      id: o.id,
      title: o.text,
      icon: n,
      iconClassName: x[e],
      alert: o.badge?.isPastDue ? {
        text: o.badge.text,
        level: "critical"
      } : void 0,
      rawTag: o.badge && !o.badge.isPastDue ? {
        text: o.badge.text,
        icon: d
      } : void 0,
      count: o.counter,
      onClick: i
    }
  );
}
export {
  M as TaskItem
};
