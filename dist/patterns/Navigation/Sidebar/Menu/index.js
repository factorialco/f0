import { jsx as n, jsxs as k, Fragment as Z } from "react/jsx-runtime";
import { useRef as $, useState as F, useCallback as L, useEffect as K, useMemo as z } from "react";
import { F0Avatar as ee } from "../../../../components/avatars/F0Avatar/index.js";
import { F0Icon as _ } from "../../../../components/F0Icon/index.js";
import { Counter as ne } from "../../../../ui/Counter/index.js";
import { Dropdown as re } from "../../../../experimental/Navigation/Dropdown/index.js";
import { Tooltip as te } from "../../../../experimental/Overlays/Tooltip/index.js";
import oe from "../../../../icons/app/ChevronDown.js";
import se from "../../../../icons/app/Delete.js";
import ie from "../../../../icons/app/EllipsisHorizontal.js";
import "../../../../icons/app/Menu.js";
import ae from "../../../../icons/app/MoveDown.js";
import le from "../../../../icons/app/MoveUp.js";
import { useReducedMotion as ce } from "../../../../lib/a11y.js";
import { useNavigation as P, Link as q } from "../../../../lib/linkHandler.js";
import { useTouchScreen as de } from "../../../../lib/useTouchScreen.js";
import { cn as x, focusRing as H } from "../../../../lib/utils.js";
import { Collapsible as fe, CollapsibleContent as ue } from "../../../../ui/collapsible.js";
import { DragProvider as pe, useDragContext as G } from "./DragContext.js";
import { LayoutGroup as me } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/LayoutGroup/index.js";
import { useDragControls as ge } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/use-drag-controls.js";
import { motion as W } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as Q } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ReorderGroup as B } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/Reorder/Group.js";
import { OneEllipsis as he } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { ReorderItem as V } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/Reorder/Item.js";
const ve = ({
  item: e,
  active: t
}) => /* @__PURE__ */ k("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ k("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ n(
      _,
      {
        icon: e.icon,
        size: "md",
        className: x(
          "transition-colors",
          t ? "text-f1-icon-bold" : "text-f1-icon"
        )
      }
    ),
    /* @__PURE__ */ n("span", { children: e.label })
  ] }),
  e.badge && /* @__PURE__ */ n(ne, { value: e.badge, size: "sm", type: "bold" })
] }), xe = ({ item: e }) => {
  const { isActive: t } = P(), { label: g, icon: u, ...o } = e, p = t(o.href, { exact: o.exactMatch });
  return /* @__PURE__ */ n(
    q,
    {
      ...o,
      className: x(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        H("focus-visible:ring-inset"),
        p ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ n(ve, { item: e, active: p })
    }
  );
}, be = ({
  item: e,
  tooltip: t,
  dragConstraints: g,
  onRemove: u,
  index: o,
  total: p,
  onMove: a,
  onReorderFinish: s,
  isSortable: c = !0
}) => {
  const i = Q(), { isDragging: h, setIsDragging: m, draggedItemId: D, setDraggedItemId: b } = G(), { isActive: l } = P(), y = l(e.href, { exact: e.exactMatch }), d = $(!1), [v, I] = F(!1), j = o === 0, E = o === p - 1, O = p === 1, M = z(() => {
    const w = [];
    return !O && !j && w.push({
      label: i.actions.moveUp,
      onClick: () => a?.(o, o - 1),
      icon: le
    }), !O && !E && w.push({
      label: i.actions.moveDown,
      onClick: () => a?.(o, o + 1),
      icon: ae
    }), w.length > 0 && w.push({ type: "separator" }), w.push({
      label: i.favorites.remove,
      onClick: () => u?.(e),
      icon: se,
      critical: !0
    }), w;
  }, [O, j, E, i, a, o, u, e]), A = () => {
    m(!0), I(!1), b(e.href || null), d.current = !0;
  }, R = () => {
    m(!1), b(null), s(), setTimeout(() => {
      d.current = !1;
    }, 0);
  }, N = h && D === e.href, S = z(
    () => x(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      c && "touch-none",
      y ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      v && "bg-f1-background-secondary",
      N && "bg-f1-background-secondary"
    ),
    [y, v, N, c]
  ), T = z(() => /* @__PURE__ */ k(Z, { children: [
    /* @__PURE__ */ n("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ n(we, { tooltip: t, children: /* @__PURE__ */ k(
      q,
      {
        onClick: e.onClick,
        href: e.href,
        exactMatch: e.exactMatch,
        className: x(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          N && "pointer-events-none"
        ),
        draggable: !1,
        children: [
          e.type === "icon" ? /* @__PURE__ */ n(
            _,
            {
              icon: e.icon,
              size: "md",
              className: x(
                "transition-colors",
                y ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : e.avatar ? /* @__PURE__ */ n(ee, { size: "xs", avatar: e.avatar }) : null,
          /* @__PURE__ */ n(
            he,
            {
              tag: "span",
              className: "line-clamp-1 font-medium text-f1-foreground",
              lines: 1,
              noTooltip: !!t,
              children: e.label
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ n(
      "div",
      {
        className: x(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          v && "bg-f1-background-secondary opacity-100",
          N && "opacity-100"
        ),
        children: /* @__PURE__ */ n(
          re,
          {
            open: v,
            onOpenChange: I,
            items: M,
            children: /* @__PURE__ */ n("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ n(_, { icon: ie, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, y, v, N, M, t]);
  return c ? /* @__PURE__ */ n(
    V,
    {
      value: e,
      drag: "y",
      dragConstraints: g,
      dragElastic: 0.1,
      onDragStart: A,
      onDragEnd: R,
      className: S,
      whileDrag: {
        scale: 1.05
      },
      children: T
    }
  ) : /* @__PURE__ */ n("div", { className: S, children: T });
}, X = ({
  title: e,
  isOpen: t = !0,
  isRoot: g,
  onCollapse: u,
  children: o,
  isDragging: p,
  wasDragging: a
}) => {
  const [s, c] = F(t), i = ce(), h = () => {
    if (p || a?.current) return;
    const m = !s;
    c(m), u?.(m);
  };
  return /* @__PURE__ */ n("div", { children: /* @__PURE__ */ k(fe, { open: s, children: [
    /* @__PURE__ */ n("div", { className: "group relative flex items-center", children: /* @__PURE__ */ k(
      "div",
      {
        className: x(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          H("focus-visible:ring-inset"),
          g && "hidden"
        ),
        onClick: h,
        tabIndex: 0,
        onKeyDown: (m) => {
          (m.key === "Enter" || m.key === " ") && h();
        },
        children: [
          e,
          /* @__PURE__ */ n(
            W.div,
            {
              initial: !1,
              animate: { rotate: s ? 0 : -90 },
              transition: { duration: i ? 0 : 0.1 },
              className: "h-3 w-3",
              children: /* @__PURE__ */ n(
                _,
                {
                  icon: oe,
                  size: "xs",
                  className: "text-f1-icon-secondary"
                }
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ n(ue, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ n(
      W.div,
      {
        initial: !1,
        animate: {
          height: s ? "auto" : 0,
          opacity: s ? 1 : 0,
          visibility: s ? "visible" : "hidden"
        },
        transition: {
          duration: i ? 0 : 0.15,
          ease: [0.165, 0.84, 0.44, 1]
        },
        children: /* @__PURE__ */ n("div", { className: "flex flex-col gap-0.5", children: o })
      }
    ) })
  ] }) });
}, U = ({
  category: e,
  isSortable: t = !1,
  dragConstraints: g,
  onCollapse: u,
  onDragEnd: o,
  currentOrder: p
}) => {
  const { isDragging: a, setIsDragging: s } = G(), c = $(!1), i = ge(), h = () => {
    s(!0), c.current = !0;
  }, m = () => {
    s(!1), setTimeout(() => {
      c.current = !1, p && o?.(p);
    }, 0);
  }, D = (l) => {
    !a && !c.current && u?.(e, l);
  }, b = /* @__PURE__ */ n(
    X,
    {
      title: e.title,
      isOpen: e.isOpen,
      isRoot: e.isRoot,
      onCollapse: D,
      isDragging: a,
      wasDragging: c,
      children: /* @__PURE__ */ n(
        "div",
        {
          className: x(
            "flex flex-col gap-0.5",
            a && !c.current && "pointer-events-none"
          ),
          children: e.items.map((l, y) => /* @__PURE__ */ n(xe, { item: l }, y))
        }
      )
    }
  );
  return t ? /* @__PURE__ */ n(
    V,
    {
      id: e.id,
      value: e,
      dragConstraints: g,
      dragElastic: 0.1,
      dragControls: i,
      onDragStart: h,
      onDragEnd: m,
      layout: !0,
      layoutId: `category-${e.id}`,
      initial: { opacity: 1 },
      animate: { opacity: 1, scale: 1 },
      exit: {
        opacity: 0,
        scale: 0.95,
        filter: "blur(8px)"
      },
      transition: {
        opacity: { duration: 0.2, ease: "easeInOut" },
        filter: { duration: 0.1, ease: "easeInOut" },
        scale: {
          duration: 0.2,
          ease: [0.175, 0.885, 0.32, 1.275]
        },
        layout: { type: "spring", bounce: 0.1, damping: 15 }
      },
      whileDrag: {
        scale: 1.04,
        cursor: "grabbing",
        zIndex: 50,
        backdropFilter: "blur(4px)"
      },
      className: "relative",
      children: b
    }
  ) : b;
};
function He({
  tree: e,
  onCollapse: t,
  onSort: g,
  onFavoritesChange: u,
  favorites: o
}) {
  const p = $(null), a = e.filter(
    (l) => l.isSortable === !1
  ), [s, c] = F(
    e.filter((l) => l.isSortable !== !1)
  ), [i, h] = F(0), m = L((l) => {
    c(l);
  }, []), D = L(
    (l) => {
      g?.(l);
    },
    [g]
  ), b = de();
  return /* @__PURE__ */ n(pe, { children: /* @__PURE__ */ n(me, { id: "sidebar-menu", children: /* @__PURE__ */ n(
    ye,
    {
      disableDragging: b,
      nonSortableItems: a,
      sortableItems: s,
      setSortableItems: m,
      containerRef: p,
      onCollapse: t,
      onDragEnd: D,
      favorites: o,
      onFavoritesChange: u,
      forceUpdate: () => h((l) => l + 1)
    },
    i
  ) }) });
}
function ye({
  nonSortableItems: e,
  sortableItems: t,
  setSortableItems: g,
  containerRef: u,
  onCollapse: o,
  onDragEnd: p,
  favorites: a = [],
  onFavoritesChange: s,
  forceUpdate: c,
  disableDragging: i = !1
}) {
  const h = Q(), { isDragging: m } = G(), D = e.some((r) => r.isRoot), b = e.filter((r) => !r.isRoot).length > 0, l = t.length > 0, y = $(null), [d, v] = F(a), I = a.length > 0;
  K(() => {
    JSON.stringify(a) !== JSON.stringify(d) && v(a);
  }, [a]);
  const j = (r) => {
    v(r);
  }, E = L(
    (r) => {
      const f = d.filter((C) => C.href !== r.href);
      v(f), s?.(f);
    },
    [d, s]
  ), O = L(
    (r, f) => {
      if (f < 0 || f >= d.length) return;
      const C = [...d], [Y] = C.splice(r, 1);
      C.splice(f, 0, Y), v(C), s?.(C);
    },
    [d, s]
  ), [M, A] = F(!1), R = $(null);
  K(() => {
    t.length > 0 && !M && (g([...t]), A(!0));
  }, [t, g, M]), K(() => {
    const r = () => {
      R.current !== null && window.clearTimeout(R.current), R.current = window.setTimeout(() => {
        u.current && t.length > 0 && c();
      }, 50);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r), R.current !== null && window.clearTimeout(R.current);
    };
  }, [u, t, c]);
  const N = "flex flex-col gap-0.5", S = z(
    () => d.reduce(
      (r, f, C) => (f.label in r || (r[f.label] = []), r[f.label].push(C), r),
      {}
    ),
    [d]
  ), T = z(
    () => I && d.map((r, f) => /* @__PURE__ */ n(
      be,
      {
        isSortable: !i,
        tooltip: (S[r.label] ?? []).length > 1 ? r.tooltip : void 0,
        item: r,
        dragConstraints: y,
        onRemove: E,
        index: f,
        total: d.length,
        onMove: O,
        onReorderFinish: () => {
          s?.(d);
        }
      },
      `${r.href}-${r.label}`
    )),
    [
      I,
      d,
      S,
      E,
      O,
      s,
      i
    ]
  ), w = "flex flex-col gap-3", J = z(() => t.map((r) => /* @__PURE__ */ n(
    U,
    {
      category: r,
      isSortable: !i,
      dragConstraints: u,
      onCollapse: o,
      onDragEnd: p,
      currentOrder: t
    },
    r.id
  )), [t, i, u, o, p]);
  return /* @__PURE__ */ k(
    "div",
    {
      className: x(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        D && /* @__PURE__ */ n("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((r) => r.isRoot).map((r, f) => /* @__PURE__ */ n(
          U,
          {
            category: r,
            onCollapse: o
          },
          `fixed-${f}`
        )) }),
        I && /* @__PURE__ */ n("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ n(X, { title: h.favorites.favorites, children: /* @__PURE__ */ n("div", { ref: y, children: i ? /* @__PURE__ */ n("div", { className: N, children: T }) : /* @__PURE__ */ n(
          B,
          {
            axis: "y",
            values: d,
            onReorder: j,
            className: N,
            children: T
          }
        ) }) }) }),
        b && /* @__PURE__ */ n("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((r) => !r.isRoot).map((r, f) => /* @__PURE__ */ n(
          U,
          {
            category: r,
            onCollapse: o
          },
          `fixed-${f}`
        )) }),
        l && /* @__PURE__ */ n(
          "div",
          {
            className: x(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: u,
            children: i ? /* @__PURE__ */ n("div", { className: w, children: J }) : /* @__PURE__ */ n(
              B,
              {
                axis: "y",
                values: t,
                onReorder: g,
                layoutScroll: !0,
                className: w,
                children: J
              }
            )
          }
        )
      ]
    }
  );
}
const we = ({
  tooltip: e,
  children: t
}) => e ? /* @__PURE__ */ n(te, { description: e, children: t }) : t;
export {
  He as Menu
};
