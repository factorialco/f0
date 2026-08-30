import { GroupGrid as e } from "../Layout/groups/GroupGrid/GroupGrid.js";
import { createPageLayoutBlockGroup as t } from "../Layout/utils.js";
import { DashboardWidget as n } from "./components/DashboardWidget.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/layouts/Dashboard/Dashboard.tsx
var i = ({ widgets: t, editMode: i = !1, onChange: a = () => {}, deps: o, ...s }) => /* @__PURE__ */ r(e, {
	widgets: t,
	editMode: i,
	onChange: a,
	deps: o,
	...s,
	WidgetWrapper: (e, t, i) => /* @__PURE__ */ r(n, {
		title: t?.title ?? "",
		draggable: i,
		actions: t?.actions,
		aiButton: t?.aiButton,
		children: e
	})
});
i.displayName = "Dashboard";
var a = t("Dashboard", i);
//#endregion
export { a as Dashboard };
