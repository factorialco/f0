import { jsx as r } from "react/jsx-runtime";
import t from "../../../../icons/app/Kanban.js";
import n from "../../../../icons/app/List.js";
import "../../../../icons/app/Menu.js";
import o from "../../../../icons/app/Pencil.js";
import a from "../../../../icons/app/Table.js";
import { CardCollection as l } from "./Card/index.js";
import { ListCollection as m } from "./List/index.js";
import { SettingsRenderer as i } from "./Table/settings/SettingsRenderer.js";
import { KanbanCollection as s } from "./Kanban/Kanban.js";
import { EditableTableCollection as d } from "./EditableTable/EditableTable.js";
import { TableCollection as f } from "./Table/Table.js";
const S = {
  table: {
    name: "Table",
    icon: a,
    render: (e) => /* @__PURE__ */ r(
      f,
      {
        ...e
      }
    ),
    settings: {
      renderer: (e) => i({ ...e, visualizationKey: "table" }),
      resetHandler: (e) => e.setVisualizationSettings("table", {}),
      default: {}
    }
  },
  editableTable: {
    name: "Editable table",
    icon: o,
    render: (e) => /* @__PURE__ */ r(
      d,
      {
        ...e
      }
    ),
    settings: {
      renderer: (e) => i({ ...e, visualizationKey: "editableTable" }),
      resetHandler: (e) => e.setVisualizationSettings("editableTable", {}),
      default: {}
    }
  },
  list: {
    name: "List",
    icon: n,
    settings: {
      default: {}
    },
    render: (e) => /* @__PURE__ */ r(
      m,
      {
        ...e
      }
    )
  },
  card: {
    name: "Card",
    icon: t,
    settings: {
      default: {}
    },
    render: (e) => /* @__PURE__ */ r(
      l,
      {
        ...e
      }
    )
  },
  kanban: {
    name: "Kanban",
    icon: t,
    settings: {
      default: {}
    },
    render: (e) => /* @__PURE__ */ r(
      s,
      {
        ...e
      }
    )
  }
};
export {
  S as collectionVisualizations
};
