import { jsx as _ } from "react/jsx-runtime";
import { cn as x } from "../../../../lib/utils.js";
import { isFirstCellWithDepth as p, isFirstCellExpanded as g, getNestedMarginLeft as v, CONNECTOR_WIDTH_WITH_CHILDREN as O, CONNECTOR_WIDTH as C, SELECTABLE_EDITABLE_ROW_OFFSET as H, SELECTABLE_ROW_OFFSET as N, LINE_WIDTH as W, SPACING_FACTOR as I, CHEVRON_SIZE as u, CHEVRON_PARENT_SIZE as E, PADDING_TOP as s, BUTTON_HEIGHT as A } from "../utils/nested.js";
const D = (e, t, a) => {
  const { rowWithChildren: i, nestedVariant: r, onLoadMoreChildren: c, onAddRow: f } = t ?? {}, n = r === "detailed", o = c || f, l = o ? A / 2 - s : E / 2 - s, d = i && !o ? O : n ? C - 6 : C, h = e !== 0 && `calc(${e}px - ${E + s}px )`, T = a === "editableTable" ? {
    "--horizontal-offset": `${l + (n ? 12 : 8)}px`,
    "--starting-y": "52px",
    ...h ? {
      "--line-height": `calc(${h} - ${n ? 12 : 0}px)`
    } : {}
  } : {}, b = a === "editableTable" ? H : N;
  return {
    "--line-left": `-${2 * u - (t?.selectableRow ? b : 0)}px`,
    "--line-width": W,
    "--horizontal-offset": `${l}px`,
    "--horizontal-left": `calc(4px - ${t?.selectableRow ? b : 0}px)`,
    "--horizontal-height": `${I / 2}px`,
    "--connector-width": `${d}px`,
    ...h ? { "--line-height": h } : {},
    "--starting-y": "40px",
    ...T
  };
}, L = "h-full overflow-visible before:absolute before:-left-[var(--line-left)] before:top-[var(--starting-y)] before:h-[var(--line-height)] before:w-[var(--line-width)] before:bg-f1-foreground-disabled before:content-['']", $ = "after:absolute after:left-[var(--horizontal-left)] after:top-[var(--horizontal-offset)] after:h-[var(--horizontal-height)] after:w-[var(--connector-width)] after:rounded-bl-[var(--horizontal-height)] after:content-[''] after:shadow-[inset_1px_-1px_0_0_hsl(var(--neutral-30))]", m = ({
  firstCell: e,
  nestedRowProps: t,
  fromVisualization: a
}) => {
  const i = p(
    e,
    t?.depth ?? 0
  ), r = g(
    t?.expanded ?? !1,
    e
  ), c = t === void 0 || t?.nestedVariant === "basic", f = t?.nestedVariant === "detailed", n = c || t?.rowWithChildren, o = f && (t?.onLoadMoreChildren || t?.onAddRow), l = i ? v({
    depth: t?.depth ?? 0,
    padding: 0
  }) : void 0, d = t?.connectorHeight ?? 0;
  return !r && !i && !t?.rowWithChildren ? null : /* @__PURE__ */ _(
    "div",
    {
      className: x(
        "absolute inset-0 h-full",
        t?.parentHasChildren && r && L,
        t?.parentHasChildren && i && n && !o && $
      ),
      style: {
        marginLeft: l,
        ...D(
          d,
          t,
          a
        )
      }
    }
  );
};
export {
  m as TreeConnector,
  D as connectorVariables,
  $ as horizontalConnectorStyles,
  L as verticalConnectorStyles
};
