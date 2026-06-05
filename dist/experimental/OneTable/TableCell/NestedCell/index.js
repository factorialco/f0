import { jsx as o, jsxs as z, Fragment as p } from "react/jsx-runtime";
import F from "../../../../icons/app/Add.js";
import W from "../../../../icons/app/ArrowDown.js";
import "../../../../icons/app/Menu.js";
import { cn as a } from "../../../../lib/utils.js";
import { isFirstCellWithChildren as w, isFirstCellWithDepth as A, isFirstCellWithNoChildrenAndTableChildren as L, isFirstCellDetailed as y, getNestedMarginLeftForLoadMore as D, getNestedMarginLeft as E, SPACING_FACTOR as S, CHEVRON_SIZE as h, CHEVRON_PARENT_SIZE as M } from "../utils/nested.js";
import T from "../../../../node_modules/.pnpm/lucide-react@0.383.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-down.js";
import V from "../../../../node_modules/.pnpm/lucide-react@0.383.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-right.js";
import { F0Button as f } from "../../../../components/F0Button/F0Button.js";
import { F0ButtonDropdown as v } from "../../../../components/F0ButtonDropdown/F0ButtonDropdown.js";
const q = ({
  width: C,
  linkRef: g,
  firstCell: l,
  nestedRowProps: n,
  children: u,
  onClick: b
}) => {
  const t = w(
    l,
    !!n?.rowWithChildren
  ), N = A(
    l,
    n?.depth ?? 0
  ), x = L(
    l,
    !!n?.rowWithChildren,
    !!n?.tableWithChildren
  ), s = y(l, n), c = n?.onLoadMoreChildren, i = n?.onAddRow, d = n?.depth ?? 0, k = N ? E({
    depth: t ? d : d + 1
  }) : void 0, m = c || i;
  return /* @__PURE__ */ o(
    "div",
    {
      className: a(
        C !== "auto" && "overflow-hidden",
        "relative z-[1] h-full",
        t && "flex items-center gap-2"
      ),
      style: {
        marginLeft: m ? D({
          depth: d + (s ? 0 : 1),
          isDetailedVariant: s
        }) : k
      },
      onClick: () => {
        m || (g.current?.click(), b?.());
      },
      children: i ? /* @__PURE__ */ o(
        "div",
        {
          className: a(
            "pointer-events-auto flex items-center w-full h-full",
            s && "pl-3"
          ),
          children: i.actions.length === 1 ? /* @__PURE__ */ o(
            f,
            {
              variant: "outline",
              size: "sm",
              icon: i.actions[0].icon ?? F,
              label: i.actions[0].label,
              onClick: (e) => {
                e.stopPropagation(), i.actions[0].onClick?.();
              },
              loading: i.actions[0].loading,
              disabled: i.actions[0].disabled
            }
          ) : i.actions.some((e) => e.description !== void 0) ? /* @__PURE__ */ o(
            v,
            {
              mode: "dropdown",
              variant: "outline",
              size: "sm",
              trigger: i.label,
              disabled: i.actions.every((e) => e.disabled),
              loading: i.actions.some((e) => e.loading),
              items: i.actions.map((e, r) => ({
                value: r.toString(),
                label: e.label,
                icon: e.icon,
                description: e.description
              })),
              onClick: (e) => {
                i.actions[Number(e)]?.onClick?.();
              }
            }
          ) : /* @__PURE__ */ o(
            v,
            {
              variant: "outline",
              size: "sm",
              disabled: i.actions.every((e) => e.disabled),
              loading: i.actions.some((e) => e.loading),
              items: i.actions.map((e, r) => ({
                value: r.toString(),
                label: e.label,
                icon: e.icon
              })),
              onClick: (e) => {
                i.actions[Number(e)]?.onClick?.();
              }
            }
          )
        }
      ) : c ? /* @__PURE__ */ o(p, { children: /* @__PURE__ */ o(
        "div",
        {
          className: a(
            "pointer-events-auto cursor-pointer flex items-center w-full h-full border-0 border-r-[1px] border-solid border-f1-border-secondary"
          ),
          children: /* @__PURE__ */ o(
            f,
            {
              variant: "ghost",
              size: "md",
              icon: W,
              label: "See more",
              onClick: (e) => {
                e.stopPropagation(), c?.();
              }
            }
          )
        }
      ) }) : /* @__PURE__ */ z(p, { children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: a(
              "flex h-[var(--chevron-parent-size)] w-[var(--chevron-parent-size)] min-w-[var(--chevron-parent-size)] items-center justify-center",
              t && "pointer-events-auto cursor-pointer rounded-sm hover:bg-f1-foreground-disabled"
            ),
            style: {
              "--chevron-parent-size": `${M}px`,
              "--chevron-size": `${h}px`,
              "--spacing-factor": `${S}px`
            },
            onClick: (e) => {
              t && (e.stopPropagation(), n?.onExpand?.());
            },
            children: t && (n?.expanded ? /* @__PURE__ */ o(
              T,
              {
                className: "pointer-events-none shrink-0",
                size: h
              }
            ) : /* @__PURE__ */ o(
              V,
              {
                className: "pointer-events-none shrink-0",
                size: h
              }
            ))
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: a(
              t && "min-w-0 w-full h-full",
              x && "pl-[var(--spacing-factor)]",
              "relative"
            ),
            children: u
          }
        )
      ] })
    }
  );
};
export {
  q as NestedCell
};
