import { jsx as i } from "react/jsx-runtime";
import { VerticalOverflowList as d } from "../../../../../ui/VerticalOverflowList/index.js";
import { WidgetInboxListItem as e } from "../../ListItems/WidgetInboxListItem/index.js";
function m({
  items: o,
  minSize: n = 184,
  onClickItem: t,
  showAllItems: f,
  onVisibleItemsChange: l
}) {
  return f ? /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: o.map((r) => /* @__PURE__ */ i(e, { ...r, onClick: t }, r.id)) }) : /* @__PURE__ */ i(
    d,
    {
      items: o,
      minSize: n,
      renderListItem: (r) => /* @__PURE__ */ i(e, { ...r, onClick: t }, r.id),
      onVisibleItemsChange: l,
      gap: 8
    }
  );
}
export {
  m as WidgetInboxList
};
