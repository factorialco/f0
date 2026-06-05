import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { F0Icon as d } from "../../../../components/F0Icon/index.js";
import { Tooltip as f } from "../../../Overlays/Tooltip/index.js";
import a from "../../../../icons/app/InfoCircleLine.js";
import "../../../../icons/app/Menu.js";
const h = ({ title: n, info: r }) => /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ e("p", { className: "flex text-f1-foreground-secondary", children: n }),
  /* @__PURE__ */ e("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: r })
] }), g = m(
  function({ title: r, titleValue: t, titleTooltip: s, list: l }, c) {
    return /* @__PURE__ */ i("div", { ref: c, className: "flex flex-col gap-2", children: [
      r && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e("div", { children: r }),
          s && /* @__PURE__ */ e("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ e(
            f,
            {
              label: s.label,
              description: s.description,
              children: /* @__PURE__ */ e(d, { icon: a, size: "sm" })
            }
          ) })
        ] }),
        t && /* @__PURE__ */ e("div", { children: t })
      ] }),
      l.map((o) => /* @__PURE__ */ e(h, { title: o.title, info: o.info }, o.title))
    ] });
  }
);
export {
  g as TwoColumnsList
};
