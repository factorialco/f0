import { jsxs as i, jsx as l } from "react/jsx-runtime";
import { withDataTestId as a } from "../../../lib/data-testid/index.js";
import { experimentalComponent as n } from "../../../lib/experimental.js";
import { cn as s } from "../../../lib/utils.js";
function o({ children: r, header: e, embedded: f = !1 }) {
  return /* @__PURE__ */ i(
    "div",
    {
      className: s(
        "flex min-h-full w-full flex-col overflow-hidden bg-f1-special-page ring-1 ring-inset ring-f1-border-secondary",
        !f && "xs:rounded-xl"
      ),
      children: [
        e && /* @__PURE__ */ l("div", { className: "flex flex-col", children: e }),
        /* @__PURE__ */ l("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: r })
      ]
    }
  );
}
o.displayName = "Page";
const d = a(n("Page", o));
export {
  d as Page
};
