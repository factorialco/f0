import { jsx as r } from "react/jsx-runtime";
import { cn as a } from "../../../../../../lib/utils.js";
import { Row as c } from "./Row.js";
const v = ({
  source: o,
  items: d,
  selectedItems: e,
  handleSelectItemChange: i,
  fields: n,
  itemDefinition: b,
  isLoadingMore: s
}) => /* @__PURE__ */ r(
  "div",
  {
    className: a(
      "flex flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary",
      s && "rounded-b-none"
    ),
    children: d.map((t, l) => /* @__PURE__ */ r(
      c,
      {
        source: o,
        item: t,
        selectedItems: e,
        handleSelectItemChange: i,
        fields: n,
        itemDefinition: b
      },
      `row-${l}`
    ))
  }
);
export {
  v as ListGroup
};
