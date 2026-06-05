import { jsx as i, jsxs as g } from "react/jsx-runtime";
import { useControllableState as x } from "../../node_modules/.pnpm/@radix-ui_react-use-controllable-state@1.2.2_@types_react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.js";
import { forwardRef as A, useMemo as C, Fragment as F } from "react";
import { withDataTestId as v } from "../../lib/data-testid/index.js";
import { experimentalComponent as w } from "../../lib/experimental.js";
import { withSkeleton as I } from "../../lib/skeleton.js";
import { cn as O } from "../../lib/utils.js";
import { AccordionItem as k } from "./components/AccordionItem.js";
import { F0AccordionSkeleton as y } from "./F0AccordionSkeleton.js";
const c = A(
  (l, s) => {
    const { items: t, value: m, defaultValue: d, onValueChange: f, ...p } = l, u = C(() => d !== void 0 ? d : t.filter((o) => o.defaultOpen).map((o) => o.id), [d, t]), [e = [], a] = x({
      prop: m,
      defaultProp: u,
      onChange: f
    }), h = (o, r) => {
      const n = e.includes(o);
      r && !n ? a([...e, o]) : !r && n && a(e.filter((b) => b !== o));
    };
    return /* @__PURE__ */ i(
      "div",
      {
        ref: s,
        ...p,
        className: O(
          "flex flex-col rounded-md border border-solid border-f1-border-secondary",
          "overflow-hidden bg-f1-background"
        ),
        children: t.map((o, r) => /* @__PURE__ */ g(F, { children: [
          r > 0 && /* @__PURE__ */ i("div", { className: "h-px w-full bg-f1-border-secondary" }),
          /* @__PURE__ */ i(
            k,
            {
              item: o,
              open: e.includes(o.id),
              onOpenChange: (n) => h(o.id, n)
            }
          )
        ] }, o.id))
      }
    );
  }
);
c.displayName = "F0Accordion";
const T = v(
  w(
    "F0Accordion",
    I(c, y)
  )
);
export {
  T as F0Accordion
};
