import { jsx as r, jsxs as l } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { withSkeleton as c, Blend as a } from "../../../../lib/skeleton.js";
import { Widget as e } from "../../Widget/index.js";
import { ScrollArea as f } from "../../../../ui/scrollarea.js";
const t = ({ children: o }) => /* @__PURE__ */ r("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: o }), w = c(
  m(function({ children: i }, n) {
    return /* @__PURE__ */ r(f, { ref: n, showBar: !1, children: /* @__PURE__ */ r(t, { children: i }) });
  }),
  () => /* @__PURE__ */ r(a, { orientation: "horizontal", children: /* @__PURE__ */ l(t, { children: [
    /* @__PURE__ */ r(e.Skeleton, {}),
    /* @__PURE__ */ r(e.Skeleton, {}),
    /* @__PURE__ */ r(e.Skeleton, {})
  ] }) })
);
export {
  w as WidgetStrip
};
