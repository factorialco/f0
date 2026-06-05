import { jsx as r, jsxs as c } from "react/jsx-runtime";
import { useControllableState as g } from "../../../node_modules/.pnpm/@radix-ui_react-use-controllable-state@1.2.2_@types_react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.js";
import { F0Icon as p } from "../../../components/F0Icon/index.js";
import { cn as l, focusRing as m } from "../../../lib/utils.js";
import { ToggleGroup as b, ToggleGroupItem as h } from "../../../node_modules/.pnpm/@radix-ui_react-toggle-group@1.1.1_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18._mekaj3fh36iqfcvrpjhx5ebfyi/node_modules/@radix-ui/react-toggle-group/dist/index.js";
const x = ({
  items: o,
  value: t,
  onChange: d,
  disabled: a = !1,
  fullWidth: n = !1,
  ariaLabel: s,
  ariaLabelledBy: f
}) => {
  const [u, i] = g({
    prop: t,
    defaultProp: o[0]?.value ?? "",
    onChange: d
  });
  return /* @__PURE__ */ r(
    b,
    {
      type: "single",
      value: u,
      onValueChange: (e) => {
        e !== "" && i(e);
      },
      disabled: a,
      "aria-label": s,
      "aria-labelledby": f,
      className: l(
        "inline-flex items-center rounded-md bg-f1-background-secondary p-0.5 gap-0.5",
        n && "w-full"
      ),
      children: o.map((e) => /* @__PURE__ */ c(
        h,
        {
          value: e.value,
          disabled: a || e.disabled,
          className: l(
            "relative flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded font-medium transition-all",
            "text-f1-foreground-secondary",
            "hover:text-f1-foreground hover:bg-f1-background-hover",
            "disabled:pointer-events-none disabled:text-f1-foreground-disabled",
            "data-[state=on]:bg-f1-background data-[state=on]:text-f1-foreground data-[state=on]:shadow",
            m(),
            "h-8 px-3 text-sm",
            n && "w-full"
          ),
          children: [
            e.icon && /* @__PURE__ */ r(p, { icon: e.icon, size: "md" }),
            e.label
          ]
        },
        e.value
      ))
    }
  );
};
x.displayName = "F0SegmentedControl";
export {
  x as F0SegmentedControl
};
