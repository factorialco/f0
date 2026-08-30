import e from "../../../../icons/app/Calendar.js";
import t from "../../../../icons/app/Completed.js";
import n from "../../../../icons/app/DottedCircle.js";
import r from "../../../../icons/app/InProgressTask.js";
import { WidgetSimpleListItem as i } from "../../../../experimental/Widgets/Content/ListItems/WidgetSimpleListItem/index.js";
import { useMemo as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/sds/Profile/TasksList/TaskItem/index.tsx
var s = {
	done: t,
	"in-progress": r,
	todo: n
}, c = {
	done: "text-f1-icon-success",
	"in-progress": "text-f1-icon-info",
	todo: "text-f1-icon"
};
function l({ task: t, status: n, onClick: r, hideIcon: l = !1 }) {
	let u = () => {
		r?.(t);
	}, d = a(() => {
		if (!l) return s[n];
	}, [n, l]);
	return /* @__PURE__ */ o(i, {
		id: t.id,
		title: t.text,
		icon: d,
		iconClassName: c[n],
		alert: t.badge?.isPastDue ? {
			text: t.badge.text,
			level: "critical"
		} : void 0,
		rawTag: t.badge && !t.badge.isPastDue ? {
			text: t.badge.text,
			icon: e
		} : void 0,
		count: t.counter,
		onClick: u
	});
}
//#endregion
export { l as TaskItem };
