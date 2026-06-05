import { jsx as m } from "react/jsx-runtime";
import { Root as l, Item as p } from "../../node_modules/.pnpm/@radix-ui_react-toggle-group@1.1.1_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18._mekaj3fh36iqfcvrpjhx5ebfyi/node_modules/@radix-ui/react-toggle-group/dist/index.js";
import * as e from "react";
import { cn as c } from "../../lib/utils.js";
import { toggleVariants as d } from "../../ui/toggle.js";
const f = e.createContext({
  size: "default",
  variant: "default"
}), g = e.forwardRef(({ className: t, variant: o, size: a, children: r, ...s }, i) => /* @__PURE__ */ m(
  l,
  {
    ref: i,
    className: c("flex items-center justify-center gap-1.5", t),
    ...s,
    children: /* @__PURE__ */ m(f.Provider, { value: { variant: o, size: a }, children: r })
  }
));
g.displayName = l.displayName;
const u = e.forwardRef(({ className: t, children: o, variant: a, size: r, ...s }, i) => {
  const n = e.useContext(f);
  return /* @__PURE__ */ m(
    p,
    {
      ref: i,
      className: c(
        d({
          variant: n.variant || a,
          size: n.size || r
        }),
        t
      ),
      ...s,
      children: o
    }
  );
});
u.displayName = p.displayName;
export {
  g as ToggleGroup,
  u as ToggleGroupItem
};
