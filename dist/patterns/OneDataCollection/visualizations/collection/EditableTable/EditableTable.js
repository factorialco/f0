import { jsx as e } from "react/jsx-runtime";
import { useRef as u, useMemo as f } from "react";
import { useDataCollectionSettings as b } from "../../../Settings/SettingsProvider.js";
import { TableCollection as R } from "../Table/Table.js";
import { EditableCellRenderer as C } from "./components/EditableCellRenderer.js";
import { AddRowProvider as w } from "./context/AddRowContext.js";
import { EditableRowProvider as g } from "./context/EditableRowContext.js";
const S = ({
  onCellChange: r,
  addRowActions: t,
  addRowActionsLabel: i,
  addNestedRowActions: l,
  addNestedRowActionsLabel: n,
  ...a
}) => {
  const { settings: m } = b(), o = u(r);
  o.current = r;
  const s = f(() => function({ item: p, children: d }) {
    return /* @__PURE__ */ e(
      g,
      {
        item: p,
        onCellChange: (...c) => o.current?.(...c),
        children: d
      }
    );
  }, []);
  return /* @__PURE__ */ e(
    w,
    {
      addRowActions: t,
      addRowActionsLabel: i,
      addNestedRowActions: l,
      addNestedRowActionsLabel: n,
      children: /* @__PURE__ */ e(
        R,
        {
          ...a,
          rowWrapper: s,
          cellRenderer: C,
          visualizationSettings: m.visualization?.editableTable,
          fromVisualization: "editableTable"
        }
      )
    }
  );
};
export {
  S as EditableTableCollection
};
