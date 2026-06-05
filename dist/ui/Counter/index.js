import { jsx as i } from "react/jsx-runtime";
import { cva as s } from "../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { withDataTestId as d } from "../../lib/data-testid/index.js";
import { experimentalComponent as a } from "../../lib/experimental.js";
import { cn as f } from "../../lib/utils.js";
const m = s({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-xs text-sm font-medium tabular-nums transition-all",
  variants: {
    size: {
      md: "min-w-5 p-0.5",
      sm: "min-w-4 px-0.5"
    },
    type: {
      default: "bg-f1-background-secondary outline outline-1 outline-f1-border",
      selected: "bg-f1-background-selected-bold text-f1-foreground-inverse",
      bold: "bg-f1-background-accent-bold text-f1-foreground-inverse"
    }
  },
  defaultVariants: {
    size: "md",
    type: "default"
  }
});
function u({ size: n, type: o, value: t, maxValue: e }) {
  const r = e && t > e ? `+${e}` : t;
  return /* @__PURE__ */ i("div", { className: f("text-f1-foreground", m({ size: n, type: o })), children: r });
}
const x = d(
  a("Counter", u)
);
export {
  x as Counter
};
