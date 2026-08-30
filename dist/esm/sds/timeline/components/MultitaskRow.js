import { MultitaskHeader as e } from "./MultitaskHeader.js";
import { TimelineRowLayout as t } from "./TimelineRowLayout.js";
import { NestedtaskRow as n } from "./NestedtaskRow.js";
import { TaskRow as r } from "./TaskRow.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/sds/timeline/components/MultitaskRow.tsx
var o = (e) => "icon" in e && e.icon !== void 0 && ("items" in e || "content" in e), s = ({ props: s }) => {
	let { status: c, isLast: l = !1, hideStatus: u = !1, expanded: d, items: f } = s;
	return /* @__PURE__ */ a(t, {
		status: c,
		isLast: l,
		hideStatus: u,
		children: [/* @__PURE__ */ i("div", {
			className: "flex min-h-8 items-center gap-2",
			children: /* @__PURE__ */ i(e, { props: s })
		}), d && /* @__PURE__ */ i("div", {
			className: "flex flex-col pl-4",
			children: f.map((e, t) => o(e) ? /* @__PURE__ */ i(n, { props: {
				...e,
				hideStatus: !0,
				isLast: t === f.length - 1
			} }, `${e.title}-${t}`) : /* @__PURE__ */ i(r, { props: {
				...e,
				hideStatus: !0,
				isLast: t === f.length - 1
			} }, `${e.title}-${t}`))
		})]
	});
};
//#endregion
export { s as MultitaskRow };
