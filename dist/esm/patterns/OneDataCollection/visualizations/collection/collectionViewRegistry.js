import e from "../../../../icons/app/Kanban.js";
import t from "../../../../icons/app/List.js";
import n from "../../../../icons/app/Organization.js";
import r from "../../../../icons/app/Pencil.js";
import i from "../../../../icons/app/Table.js";
import { createInitialVisualizationSettings as a } from "../../Settings/visualizationSettings.js";
import { CardCollection as o } from "./Card/index.js";
import { SettingsRenderer as s } from "./Table/settings/SettingsRenderer.js";
import { TableCollection as c } from "./Table/Table.js";
import { EditableTableCollection as l } from "./EditableTable/EditableTable.js";
import { GraphCollection as u } from "./Graph/index.js";
import { SettingsRenderer as d } from "./Graph/settings/SettingsRenderer.js";
import { KanbanCollection as f } from "./Kanban/Kanban.js";
import { ListCollection as p } from "./List/index.js";
import { jsx as m } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/collectionViewRegistry.tsx
var h = a(), g = {
	table: {
		name: "Table",
		icon: i,
		render: (e) => /* @__PURE__ */ m(c, { ...e }),
		settings: {
			renderer: (e) => s({
				...e,
				visualizationKey: "table"
			}),
			resetHandler: (e) => e.setVisualizationSettings("table", {}),
			default: h.table
		}
	},
	editableTable: {
		name: "Editable table",
		icon: r,
		render: (e) => /* @__PURE__ */ m(l, { ...e }),
		settings: {
			renderer: (e) => s({
				...e,
				visualizationKey: "editableTable"
			}),
			resetHandler: (e) => e.setVisualizationSettings("editableTable", {}),
			default: h.editableTable
		}
	},
	list: {
		name: "List",
		icon: t,
		settings: { default: h.list },
		render: (e) => /* @__PURE__ */ m(p, { ...e })
	},
	card: {
		name: "Card",
		icon: e,
		settings: { default: h.card },
		render: (e) => /* @__PURE__ */ m(o, { ...e })
	},
	kanban: {
		name: "Kanban",
		icon: e,
		settings: { default: h.kanban },
		render: (e) => /* @__PURE__ */ m(f, { ...e })
	},
	graph: {
		name: "Graph",
		icon: n,
		settings: {
			default: h.graph,
			renderer: (e) => d(e),
			resetHandler: (e) => e.setVisualizationSettings("graph", {})
		},
		render: (e) => /* @__PURE__ */ m(u, { ...e })
	}
};
//#endregion
export { g as collectionVisualizations };
