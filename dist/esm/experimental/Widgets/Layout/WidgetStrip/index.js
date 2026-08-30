import { Blend as e, withSkeleton as t } from "../../../../lib/skeleton.js";
import { Widget as n } from "../../Widget/index.js";
import { ScrollArea as r } from "../../../../ui/scrollarea.js";
import { forwardRef as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/experimental/Widgets/Layout/WidgetStrip/index.tsx
var s = ({ children: e }) => /* @__PURE__ */ a("div", {
	className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]",
	children: e
}), c = t(i(function({ children: e }, t) {
	return /* @__PURE__ */ a(r, {
		ref: t,
		showBar: !1,
		children: /* @__PURE__ */ a(s, { children: e })
	});
}), () => /* @__PURE__ */ a(e, {
	orientation: "horizontal",
	children: /* @__PURE__ */ o(s, { children: [
		/* @__PURE__ */ a(n.Skeleton, {}),
		/* @__PURE__ */ a(n.Skeleton, {}),
		/* @__PURE__ */ a(n.Skeleton, {})
	] })
}));
//#endregion
export { c as WidgetStrip };
