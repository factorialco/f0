import { jsx as o, jsxs as f } from "react/jsx-runtime";
import { F0Icon as c } from "../../../../../../../components/F0Icon/index.js";
import { Switch as m } from "../../../../../../../experimental/Forms/Fields/Switch/index.js";
import p from "../../../../../../../icons/app/Handle.js";
import h from "../../../../../../../icons/app/LockLocked.js";
import "../../../../../../../icons/app/Menu.js";
import { cn as d } from "../../../../../../../lib/utils.js";
import { useDragControls as x } from "../../../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/use-drag-controls.js";
import { ReorderGroup as g } from "../../../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/Reorder/Group.js";
import { OneEllipsis as u } from "../../../../../../../lib/OneEllipsis/OneEllipsis.js";
import { ReorderItem as b } from "../../../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/Reorder/Item.js";
const w = ({
  item: e,
  onChangeVisibility: n,
  allowSorting: l,
  allowHiding: t
}) => {
  const a = "flex items-center gap-2 text-medium text-sm pr-4", i = x(), r = /* @__PURE__ */ f("div", { className: a, children: [
    l && /* @__PURE__ */ o(
      "div",
      {
        className: d(
          "flex shrink-0 items-center justify-center text-f1-icon",
          e.sortable && "cursor-grab"
        ),
        style: { width: "20px" },
        onPointerDown: (s) => {
          e.sortable && i.start(s);
        },
        children: e.sortable ? /* @__PURE__ */ o(c, { icon: p, size: "xs" }) : /* @__PURE__ */ o(c, { icon: h, size: "sm" })
      }
    ),
    /* @__PURE__ */ o(
      "span",
      {
        className: d(
          "flex-1 min-w-0",
          e.sortable ? "text-f1-foreground" : "text-f1-foreground-secondary"
        ),
        children: /* @__PURE__ */ o(u, { children: e.label })
      }
    ),
    t && /* @__PURE__ */ o(
      m,
      {
        checked: e.visible,
        onCheckedChange: (s) => {
          n({
            ...e,
            visible: s
          });
        },
        title: e.label,
        hideLabel: !0,
        disabled: !e.canHide
      }
    )
  ] });
  return e.sortable ? /* @__PURE__ */ o(
    b,
    {
      value: e,
      drag: "y",
      dragElastic: 0.1,
      whileDrag: {
        scale: 1.05
      },
      dragListener: !1,
      dragControls: i,
      children: r
    }
  ) : /* @__PURE__ */ o("li", { children: r });
}, O = ({
  items: e,
  onChange: n,
  allowSorting: l,
  allowHiding: t
}) => {
  const a = (r) => {
    n?.(e.map((s) => s.id === r.id ? r : s));
  };
  return /* @__PURE__ */ o(
    g,
    {
      className: "flex flex-1 select-none list-none flex-col gap-2",
      values: e,
      onReorder: (r) => {
        n?.(r);
      },
      axis: "y",
      layoutScroll: !0,
      children: e.map((r) => /* @__PURE__ */ o(
        w,
        {
          item: r,
          onChangeVisibility: a,
          allowSorting: l,
          allowHiding: t
        },
        r.id
      ))
    }
  );
};
export {
  O as SortAndHideList
};
