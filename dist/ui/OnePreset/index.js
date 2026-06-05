import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { experimentalComponent as l } from "../../lib/experimental.js";
import { Skeleton as a } from "../skeleton.js";
import { cn as c } from "../../lib/utils.js";
import { Counter as f } from "../Counter/index.js";
import { Await as d } from "../../lib/Await/Await.js";
const p = ({ label: i, number: o, onClick: r, selected: t }) => /* @__PURE__ */ s(
  "label",
  {
    className: c(
      "flex cursor-default appearance-none items-center gap-2 rounded px-2.5 py-1.5 font-medium text-f1-foreground outline outline-1 outline-f1-border transition-all",
      r && "focus-within:ring-2 focus-within:ring-f1-border-selected focus-within:ring-offset-2",
      o && "pr-1.5",
      r && "cursor-pointer hover:outline-f1-border-hover",
      t && "bg-f1-background-selected-secondary text-f1-foreground-selected outline-f1-border-selected hover:outline-f1-border-selected"
    ),
    children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          className: "sr-only",
          checked: t,
          onChange: () => r?.()
        }
      ),
      /* @__PURE__ */ e("span", { className: "whitespace-nowrap", children: i }),
      o !== void 0 && /* @__PURE__ */ e(d, { resolve: o, fallback: /* @__PURE__ */ e(a, { className: "h-4 w-4" }), children: (n) => n !== void 0 && /* @__PURE__ */ e(
        f,
        {
          value: n,
          type: t ? "selected" : "default"
        }
      ) })
    ]
  }
), v = l("Preset", p);
export {
  v as Preset
};
