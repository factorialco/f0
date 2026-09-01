import e from "../../../../icons/app/Kanban.js";
import t from "../../../../icons/app/List.js";
import n from "../../../../icons/app/Organization.js";
import r from "../../../../icons/app/Pencil.js";
import i from "../../../../icons/app/Table.js";
import { CardCollection as a } from "./Card/index.js";
import { SettingsRenderer as o } from "./Table/settings/SettingsRenderer.js";
import { TableCollection as s } from "./Table/Table.js";
import { EditableTableCollection as c } from "./EditableTable/EditableTable.js";
import { GraphCollection as l } from "./Graph/index.js";
import { SettingsRenderer as u } from "./Graph/settings/SettingsRenderer.js";
import { KanbanCollection as d } from "./Kanban/Kanban.js";
import { ListCollection as f } from "./List/index.js";
import { jsx as p } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/collectionViewRegistry.tsx
var m = {
	table: {
		name: "Table",
		icon: i,
		render: (e) => /* @__PURE__ */ p(s, { ...e }),
		settings: {
			renderer: (e) => o({
				...e,
				visualizationKey: "table"
			}),
			resetHandler: (e) => e.setVisualizationSettings("table", {}),
			default: {}
		}
	},
	editableTable: {
		name: "Editable table",
		icon: r,
		render: (e) => /* @__PURE__ */ p(c, { ...e }),
		settings: {
			renderer: (e) => o({
				...e,
				visualizationKey: "editableTable"
			}),
			resetHandler: (e) => e.setVisualizationSettings("editableTable", {}),
			default: {}
		}
	},
	list: {
		name: "List",
		icon: t,
		settings: { default: {} },
		render: (e) => /* @__PURE__ */ p(f, { ...e })
	},
	card: {
		name: "Card",
		icon: e,
		settings: { default: {} },
		render: (e) => /* @__PURE__ */ p(a, { ...e })
	},
	kanban: {
		name: "Kanban",
		icon: e,
		settings: { default: {} },
		render: (e) => /* @__PURE__ */ p(d, { ...e })
	},
	graph: {
		name: "Graph",
		icon: n,
		settings: {
			default: {},
			renderer: (e) => u(e),
			resetHandler: (e) => e.setVisualizationSettings("graph", {})
		},
		render: (e) => /* @__PURE__ */ p(l, { ...e })
	}
};
//#endregion
export { m as collectionVisualizations };
