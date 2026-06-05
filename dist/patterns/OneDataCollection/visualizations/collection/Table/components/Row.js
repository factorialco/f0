import { jsx as e, jsxs as I, Fragment as P } from "react/jsx-runtime";
import { forwardRef as V } from "react";
import { TableCell as y } from "../../../../../../experimental/OneTable/TableCell/index.js";
import { TableRow as ee } from "../../../../../../experimental/OneTable/TableRow/index.js";
import { cn as d } from "../../../../../../lib/utils.js";
import { ItemActionsMobile as te } from "../../../../components/itemActions/ItemActionsMobile/ItemActionsMobile.js";
import { ItemActionsRowContainer as re } from "../../../../components/itemActions/ItemActionsRowContainer.js";
import { useItemActions as ie } from "../../../../components/itemActions/useItemActions.js";
import { renderProperty as ne } from "../../../../property-render.js";
import { Checkbox as le } from "../../../../../../ui/checkbox.js";
import { ItemActionsRow as M } from "../../../../components/itemActions/ItemActionsRow/ItemActionsRow.js";
import { groupBorderClass as U } from "../hooks/useHeaderGroups.js";
import { useSticky as oe } from "../useSticky.js";
import { NestedRow as ae } from "./NestedRow.js";
import { useI18n as se } from "../../../../../../lib/providers/i18n/i18n-provider.js";
const ce = {
  none: "",
  striped: "bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_8px,hsl(var(--neutral-20))_8px,hsl(var(--neutral-20))_9px)] [background-size:100%_100px]"
}, de = ({
  source: t,
  item: r,
  onCheckedChange: C,
  onItemCheckedChange: B,
  selectedItems: w,
  columns: f,
  frozenColumnsLeft: A,
  checkColumnWidth: N,
  index: o,
  groupIndex: a,
  noBorder: H = !1,
  loading: s = !1,
  nestedRowProps: n,
  tableWithChildren: m,
  disableHover: q = !1,
  referenceRowType: $,
  cellRenderer: h,
  rowWrapper: E,
  fromVisualization: p,
  headerGroups: c
}, F) => {
  const R = t.itemUrl ? t.itemUrl(r) : void 0, J = t.itemOnClick ? t.itemOnClick(r) : void 0, b = t.selectable ? t.selectable(r) : void 0, T = !!t.itemsWithChildren?.(r), K = se(), Q = (l, i) => ne(l, i, "table", K, {
    tableAlign: i.align ?? "left"
  }), L = `table-row-${a}-${o}`, { getStickyPosition: W } = oe(
    A,
    f,
    !!t.selectable
  ), {
    hasItemActions: O,
    hasMobileItemActions: X,
    primaryItemActions: j,
    dropdownItemActions: _,
    mobileDropdownItemActions: Y,
    handleDropDownOpenChange: k,
    dropDownOpen: Z
  } = ie({ source: t, item: r }), u = n?.hasLoadedChildren === void 0 || n?.hasLoadedChildren;
  if (T && u)
    return /* @__PURE__ */ e(
      ae,
      {
        source: t,
        item: r,
        onCheckedChange: C,
        onItemCheckedChange: B,
        selectedItems: w,
        columns: f,
        frozenColumnsLeft: A,
        checkColumnWidth: N,
        index: o,
        groupIndex: a,
        nestedRowProps: n,
        tableWithChildren: m,
        referenceRowType: $,
        cellRenderer: h,
        rowWrapper: E,
        headerGroups: c,
        fromVisualization: p
      },
      L
    );
  const z = b !== void 0 && w.has(b), g = $?.(r) ?? "none", D = h ? d(
    "h-[48px] p-0 align-middle last:pr-0",
    !m && (p === "editableTable" ? "first:pl-3" : "first:pl-0")
  ) : void 0;
  return /* @__PURE__ */ I(
    ee,
    {
      ref: F,
      sticky: n?.stickyRow,
      className: d(
        "group transition-colors hover:bg-f1-background-hover",
        "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']",
        H && "after:bg-white-100",
        q && "hover:bg-transparent",
        z && "bg-f1-background-selected-secondary",
        ce[g]
      ),
      children: [
        t.selectable && /* @__PURE__ */ e(
          y,
          {
            width: N,
            sticky: { left: 0 },
            loading: s,
            className: d(
              s && m ? "first:pl-4" : "",
              c && "[&>div:first-child]:hidden",
              c && U,
              D
            ),
            referenceRowType: g,
            children: b !== void 0 && /* @__PURE__ */ e("div", { className: "pointer-events-auto ml-3.5 flex h-full items-center justify-start", children: /* @__PURE__ */ e(
              le,
              {
                checked: w.has(b),
                onCheckedChange: C,
                title: `Select ${t.selectable(r)}`,
                hideLabel: !0
              }
            ) })
          }
        ),
        f.map((l, i) => {
          const v = c?.find((x) => x.type === "group" && x.columnIndices.includes(i)), G = !!c && (!v || v.columnIndices[v.columnIndices.length - 1] === i), S = /* @__PURE__ */ e(
            "div",
            {
              className: d(
                l.align === "right" ? "justify-end" : "",
                "flex"
              ),
              children: Q(r, l)
            }
          );
          return /* @__PURE__ */ e(
            y,
            {
              firstCell: i === 0,
              href: R,
              onClick: J,
              width: l.width,
              minWidth: l.minWidth,
              sticky: W(i),
              loading: s,
              nestedRowProps: {
                ...n,
                rowWithChildren: T,
                tableWithChildren: m,
                selectableRow: !!t.selectable
              },
              fromVisualization: p,
              referenceRowType: g,
              className: d(D, G && U),
              children: h ? /* @__PURE__ */ e(
                h,
                {
                  item: r,
                  isLastColumn: !O && i === f.length - 1,
                  column: l,
                  cellIndex: i,
                  children: S
                }
              ) : S
            },
            `table-cell-${a}-${o}-${i}`
          );
        }),
        O && !s && !n?.onLoadMoreChildren && !n?.onAddRow && (p === "editableTable" ? /* @__PURE__ */ e(
          y,
          {
            sticky: { right: 0 },
            referenceRowType: g,
            className: "bg-f1-background !px-3 align-middle",
            children: /* @__PURE__ */ e(
              M,
              {
                className: "flex flex-nowrap justify-center",
                primaryItemActions: j,
                dropdownItemActions: _,
                handleDropDownOpenChange: k
              }
            )
          },
          `table-cell-${a}-${o}-actions`
        ) : /* @__PURE__ */ I(P, { children: [
          /* @__PURE__ */ e("td", { className: "sticky right-0 top-0 z-10 hidden md:table-cell", children: /* @__PURE__ */ e(re, { dropDownOpen: Z, children: /* @__PURE__ */ e(
            M,
            {
              primaryItemActions: j,
              dropdownItemActions: _,
              handleDropDownOpenChange: k
            }
          ) }) }),
          X && /* @__PURE__ */ e(
            y,
            {
              width: 68,
              sticky: {
                right: 0
              },
              href: R,
              className: "table-cell md:hidden",
              loading: s,
              children: /* @__PURE__ */ e(
                te,
                {
                  items: Y,
                  onOpenChange: k
                }
              )
            },
            `table-cell-${a}-${o}-actions`
          )
        ] }))
      ]
    },
    L
  );
}, Te = V(de);
export {
  Te as Row
};
