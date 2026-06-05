import { jsx as t } from "react/jsx-runtime";
import { VerticalOverflowList as a } from "../../../../ui/VerticalOverflowList/index.js";
import { CalendarEvent as l } from "../CalendarEvent/index.js";
const c = ({
  events: e,
  showAllItems: i,
  gap: n = 8,
  minSize: o = 184
}) => e.length ? i ? /* @__PURE__ */ t("div", { className: "flex flex-col", children: e.map((r) => /* @__PURE__ */ t(l, { ...r }, r.title)) }) : /* @__PURE__ */ t(
  a,
  {
    items: e,
    gap: n,
    minSize: o,
    renderListItem: (r) => /* @__PURE__ */ t(l, { ...r }, r.title)
  }
) : null;
export {
  c as CalendarEventList
};
