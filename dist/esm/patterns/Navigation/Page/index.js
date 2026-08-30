import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../../lib/experimental.js";
import { cn as n } from "../../../lib/utils.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/patterns/Navigation/Page/index.tsx
function a({ children: e, header: t, embedded: a = !1 }) {
	return /* @__PURE__ */ i("div", {
		className: n("relative flex min-h-full w-full flex-col overflow-hidden bg-f1-special-page", !a && "xs:rounded-xl"),
		children: [
			t && /* @__PURE__ */ r("div", {
				className: "flex flex-col",
				children: t
			}),
			/* @__PURE__ */ r("div", {
				className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1",
				children: e
			}),
			/* @__PURE__ */ r("div", {
				"aria-hidden": !0,
				className: "pointer-events-none absolute inset-0 z-10 rounded-[inherit] ring-1 ring-inset ring-f1-border-secondary"
			})
		]
	});
}
a.displayName = "Page";
var o = e(t("Page", a));
//#endregion
export { o as Page };
