import { F0Icon as e } from "../../../components/F0Icon/index.js";
import t from "../../../icons/app/CheckCircle.js";
import n from "../../../icons/app/DottedCircle.js";
import r from "../../../icons/app/PartiallyCompleted.js";
import { F0TimelineConnector as i } from "./F0TimelineConnector.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/sds/timeline/components/TimelineRowLayout.tsx
var s = {
	completed: /* @__PURE__ */ a(e, {
		icon: t,
		color: "positive",
		size: "lg"
	}),
	"in-progress": /* @__PURE__ */ a(e, {
		icon: r,
		size: "lg",
		color: "warning"
	}),
	"not-started": /* @__PURE__ */ a(e, {
		icon: n,
		size: "lg",
		color: "secondary"
	})
}, c = ({ status: e, isLast: t, hideStatus: n, children: r }) => /* @__PURE__ */ o("div", {
	className: "flex gap-4",
	children: [!n && /* @__PURE__ */ o("div", {
		className: "flex flex-col items-center",
		children: [/* @__PURE__ */ a("div", {
			className: "h-8 flex flex-col justify-center",
			"data-testid": `timeline-status-${e}`,
			children: s[e]
		}), !t && /* @__PURE__ */ a(i, { status: e })]
	}), /* @__PURE__ */ a("div", {
		className: "flex flex-1 flex-col gap-3 pb-5",
		children: r
	})]
});
//#endregion
export { c as TimelineRowLayout };
