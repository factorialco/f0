import { jsx as r } from "react/jsx-runtime";
import { VerticalOverflowList as p } from "../../../../../ui/VerticalOverflowList/index.js";
import { WidgetSimpleListItem as o } from "../../ListItems/WidgetSimpleListItem/index.js";
function d({
  items: e,
  gap: m,
  minSize: t = 184,
  onClickItem: l,
  showAllItems: f
}) {
  return f ? /* @__PURE__ */ r("div", { className: "flex flex-col", style: { minHeight: `${t}px` }, children: e.map((i) => /* @__PURE__ */ r(o, { ...i, onClick: l }, i.id)) }) : /* @__PURE__ */ r(
    p,
    {
      items: e,
      gap: m,
      renderListItem: (i) => /* @__PURE__ */ r(o, { ...i, onClick: l }),
      minSize: t
    }
  );
}
export {
  d as WidgetSimpleList
};
