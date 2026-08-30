import { cn as e } from "../../../../lib/utils.js";
import { Skeleton as t } from "../../../../ui/skeleton.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatMessageSkeleton.tsx
var i = ({ mine: i, widths: a }) => /* @__PURE__ */ r("div", {
	className: e("flex w-full items-end gap-2", i && "flex-row-reverse"),
	children: [!i && /* @__PURE__ */ n(t, { className: "size-6 shrink-0 rounded-full" }), /* @__PURE__ */ n("div", {
		className: e("flex flex-col gap-1", i ? "items-end" : "items-start"),
		children: a.map((r, i) => /* @__PURE__ */ n(t, { className: e("h-8 rounded-2xl", r) }, i))
	})]
}), a = () => /* @__PURE__ */ r("div", {
	"aria-hidden": !0,
	className: "mx-auto flex w-full max-w-content flex-col gap-6 px-4 pt-4",
	children: [
		/* @__PURE__ */ n(i, {
			mine: !1,
			widths: ["w-48", "w-32"]
		}),
		/* @__PURE__ */ n(i, {
			mine: !0,
			widths: ["w-56"]
		}),
		/* @__PURE__ */ n(i, {
			mine: !1,
			widths: ["w-40"]
		}),
		/* @__PURE__ */ n(i, {
			mine: !0,
			widths: ["w-44", "w-28"]
		}),
		/* @__PURE__ */ n(i, {
			mine: !1,
			widths: ["w-52", "w-36"]
		}),
		/* @__PURE__ */ n(i, {
			mine: !0,
			widths: ["w-36"]
		}),
		/* @__PURE__ */ n(i, {
			mine: !1,
			widths: ["w-44"]
		})
	]
});
//#endregion
export { a as ChatMessageSkeleton };
