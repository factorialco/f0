import { jsx as o, Fragment as a } from "react/jsx-runtime";
import { createPortal as c } from "react-dom";
import { useGridStackContext as d } from "./grid-stack-context.js";
import { useGridStackRenderContext as m } from "./grid-stack-render-context.js";
import { GridStackWidgetContext as f } from "./grid-stack-widget-context.js";
function C() {
  const { _reactContentMap: n } = d(), { getWidgetContainer: i } = m();
  return /* @__PURE__ */ o(a, { children: Array.from(n.value.entries()).map(([r, t]) => {
    const e = i(r);
    return e ? /* @__PURE__ */ o(f.Provider, { value: { widget: { id: r } }, children: t && c(t, e) }, r) : (console.error(`Widget container not found for widget ${r}`), null);
  }) });
}
export {
  C as GridStackRender
};
