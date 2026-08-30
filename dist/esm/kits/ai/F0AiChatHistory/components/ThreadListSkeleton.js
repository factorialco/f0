import { cn as e } from "../../../../lib/utils.js";
import { Skeleton as t } from "../../../../ui/skeleton.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChatHistory/components/ThreadListSkeleton.tsx
var i = [
	"w-3/5",
	"w-4/5",
	"w-2/5",
	"w-3/4",
	"w-1/2",
	"w-2/3"
], a = ({ width: r }) => /* @__PURE__ */ n("div", {
	className: "flex items-center py-1.5 pl-1.5 pr-2",
	children: /* @__PURE__ */ n(t, { className: e("h-4 rounded", r) })
}), o = ({ titleWidth: i, rows: o }) => /* @__PURE__ */ r("div", {
	className: "flex flex-col gap-0.5",
	children: [/* @__PURE__ */ n("div", {
		className: "flex items-center p-1.5",
		children: /* @__PURE__ */ n(t, { className: e("h-3 rounded", i) })
	}), o.map((e, t) => /* @__PURE__ */ n(a, { width: e }, t))]
});
function s() {
	return /* @__PURE__ */ r("div", {
		"aria-hidden": "true",
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ n(o, {
			titleWidth: "w-12",
			rows: i.slice(0, 2)
		}), /* @__PURE__ */ n(o, {
			titleWidth: "w-24",
			rows: i
		})]
	});
}
//#endregion
export { s as ThreadListSkeleton };
