import { Metadata as e } from "../../../experimental/Information/Headers/Metadata/index.js";
import { Actions as t } from "./Actions.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/sds/timeline/components/TaskDetails.tsx
var i = ({ props: i }) => {
	let { metadata: a, primaryAction: o, secondaryActions: s, otherActions: c } = i, l = a?.some(Boolean), u = o || s && s.length > 0 || c && c.length > 0;
	return /* @__PURE__ */ r("div", {
		className: "pl-9",
		children: [a && l && /* @__PURE__ */ n("div", {
			className: "mb-3",
			children: /* @__PURE__ */ n(e, { items: a })
		}), u && /* @__PURE__ */ n("div", {
			className: "mb-3",
			children: /* @__PURE__ */ n(t, {
				primaryAction: o,
				secondaryActions: s,
				otherActions: c
			})
		})]
	});
};
//#endregion
export { i as TaskDetails };
