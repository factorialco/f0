import { jsx as r } from "react/jsx-runtime";
import { FIELD_GAP as m } from "../constants.js";
import { FieldRenderer as t } from "../fields/FieldRenderer.js";
function x({ row: o, sectionId: i }) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: `flex xs:flex-row flex-col items-start ${m} [&>*]:flex-1`,
      children: o.fields.map((e) => /* @__PURE__ */ r(t, { field: e, sectionId: i }, e.id))
    }
  );
}
export {
  x as RowRenderer
};
