import { jsxs as d, jsx as a } from "react/jsx-runtime";
import * as l from "react";
import { useMemo as u } from "react";
import { F0Icon as m } from "../../../components/F0Icon/index.js";
import p from "../../../icons/app/CheckCircle.js";
import "../../../icons/app/Menu.js";
import { cn as b } from "../../../lib/utils.js";
import { Checkbox as g } from "../../checkbox.js";
import { useSelectContext as h } from "../SelectContext.js";
import { Item as f, ItemText as y, ItemIndicator as k } from "./radix-ui/select.js";
const v = l.forwardRef(({ className: n, children: i, ...t }, s) => {
  const e = h(), { multiple: r } = e, o = u(() => Array.isArray(e.value) ? e.value.includes(t.value) : e.value === t.value, [e.value, t.value]);
  return /* @__PURE__ */ d(
    f,
    {
      ref: s,
      className: b(
        "relative grid w-full cursor-pointer select-none items-center gap-x-1.5 rounded px-3 py-2 outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] last:pb-3 last:after:bottom-1 last:after:h-[calc(100%-0.25rem)] first-of-type:pt-3 first-of-type:after:top-1 first-of-type:after:h-[calc(100%-0.25rem)] hover:after:opacity-100 focus:after:bg-f1-background-hover focus:after:text-f1-foreground focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_*]:z-10",
        "hover:data-[state=checked]:after:bg-f1-background-selected-bold/10 dark:data-[state=checked]:after:bg-f1-background-selected-bold/20 dark:hover:data-[state=checked]:after:bg-f1-background-selected-bold/20",
        "focus:outline-none focus:ring-0 focus:ring-transparent",
        // Temporal fix for Gamma issue
        "[&>*]:translate-y-0.5",
        !r && "data-[state=checked]:after:bg-f1-background-selected-bold/10 data-[state=checked]:after:opacity-100",
        r || o ? "grid-cols-[1fr_20px]" : void 0,
        n
      ),
      ...t,
      children: [
        /* @__PURE__ */ a(y, { children: i }),
        r ? /* @__PURE__ */ a(
          g,
          {
            title: "Select item",
            onClick: (c) => c.stopPropagation(),
            onKeyDown: (c) => c.stopPropagation(),
            checked: o,
            hideLabel: !0
          }
        ) : o && /* @__PURE__ */ a(k, { className: "flex text-f1-icon-selected", children: /* @__PURE__ */ a(m, { icon: p, size: "md" }) })
      ]
    }
  );
});
v.displayName = f.displayName;
export {
  v as SelectItem
};
