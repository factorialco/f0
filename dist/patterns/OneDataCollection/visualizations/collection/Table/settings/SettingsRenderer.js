import { jsx as n } from "react/jsx-runtime";
import { TableSettings as o } from "../components/TableSettings.js";
const a = (l) => !l.allowColumnHiding && !l.allowColumnReordering ? null : /* @__PURE__ */ n(
  o,
  {
    columns: l.columns,
    frozenColumns: l.frozenColumns || 0,
    allowSorting: l.allowColumnReordering ?? !1,
    allowHiding: l.allowColumnHiding ?? !1,
    visualizationKey: l.visualizationKey
  }
);
export {
  a as SettingsRenderer
};
