import { TimelineRowLayout as e } from "./TimelineRowLayout.js";
import { TaskDetails as t } from "./TaskDetails.js";
import { TaskHeader as n } from "./TaskHeader.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/sds/timeline/components/TaskRow.tsx
var a = ({ props: a }) => {
	let { status: o, isLast: s = !1, hideStatus: c = !1 } = a;
	return /* @__PURE__ */ i(e, {
		status: o,
		isLast: s,
		hideStatus: c,
		children: [/* @__PURE__ */ r("div", {
			className: "flex min-h-8 items-center gap-2",
			children: /* @__PURE__ */ r(n, { props: a })
		}), o !== "completed" && /* @__PURE__ */ r(t, { props: a })]
	});
};
//#endregion
export { a as TaskRow };
