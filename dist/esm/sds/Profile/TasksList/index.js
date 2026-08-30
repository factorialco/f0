import { TaskItem as e } from "./TaskItem/index.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/sds/Profile/TasksList/index.tsx
function n({ tasks: n, onClickTask: r, hideIcons: i = !1, maxTasksToShow: a = 5, emptyMessage: o = "No tasks assigned" }) {
	let s = [
		{
			key: "done",
			status: "done"
		},
		{
			key: "inProgress",
			status: "in-progress"
		},
		{
			key: "todo",
			status: "todo"
		}
	].flatMap(({ key: e, status: t }) => (n[e] || []).map((e) => typeof e == "string" ? {
		id: e,
		text: e
	} : e).map(({ id: e, text: n, badge: r, counter: i }) => ({
		id: e,
		text: n,
		badge: r,
		counter: i,
		status: t
	}))), c = !s.length;
	return /* @__PURE__ */ t("div", {
		className: "flex flex-col gap-0",
		children: c ? /* @__PURE__ */ t("p", {
			className: "pl-2 font-medium",
			children: o
		}) : s.slice(0, a).map((n) => /* @__PURE__ */ t(e, {
			task: n,
			status: n.status,
			hideIcon: i,
			onClick: r
		}, n.id))
	});
}
//#endregion
export { n as TasksList };
