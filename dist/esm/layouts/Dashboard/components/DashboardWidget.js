import { Widget as e } from "../../../experimental/Widgets/Widget/index.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/layouts/Dashboard/components/DashboardWidget.tsx
var n = ({ children: n, title: r, draggable: i = !1, actions: a, aiButton: o }) => /* @__PURE__ */ t(e, {
	header: { title: r },
	draggable: i,
	actions: a,
	AIButton: o,
	fullHeight: !0,
	children: n
});
//#endregion
export { n as DashboardWidget };
