import { useGridStackContext as e } from "./grid-stack-context.js";
import { useGridStackRenderContext as t } from "./grid-stack-render-context.js";
import { GridStackWidgetContext as n } from "./grid-stack-widget-context.js";
import { createPortal as r } from "react-dom";
import { Fragment as i, jsx as a } from "react/jsx-runtime";
//#region src/lib/F0GridStack/components/grid-stack-render.tsx
function o() {
	let { _reactContentMap: o } = e(), { getWidgetContainer: s } = t();
	return /* @__PURE__ */ a(i, { children: Array.from(o.value.entries()).map(([e, t]) => {
		let i = s(e);
		return i ? /* @__PURE__ */ a(n.Provider, {
			value: { widget: { id: e } },
			children: t && r(t, i)
		}, e) : (console.error(`Widget container not found for widget ${e}`), null);
	}) });
}
//#endregion
export { o as GridStackRender };
