import { cn as e } from "../../../../lib/utils.js";
import { getNestedMarginLeft as t, isFirstCellExpanded as n, isFirstCellWithDepth as r } from "../utils/nested.js";
import { jsx as i } from "react/jsx-runtime";
//#region src/experimental/OneTable/TableCell/TreeConnector/index.tsx
var a = (e, t, n) => {
	let { rowWithChildren: r, nestedVariant: i, onLoadMoreChildren: a, onAddRow: o } = t ?? {}, s = i === "detailed", c = a || o, l = c ? 8 : 4, u = r && !c ? 16 : s ? 34 : 40, d = e !== 0 && `calc(${e}px - 32px )`, f = n === "editableTable" ? {
		"--horizontal-offset": `${l + (s ? 12 : 8)}px`,
		"--starting-y": "52px",
		...d ? { "--line-height": `calc(${d} - ${s ? 12 : 0}px)` } : {}
	} : {}, p = n === "editableTable" ? 24 : 16;
	return {
		"--line-left": `-${36 - (t?.selectableRow ? p : 0)}px`,
		"--line-width": "1px",
		"--horizontal-offset": `${l}px`,
		"--horizontal-left": `calc(4px - ${t?.selectableRow ? p : 0}px)`,
		"--horizontal-height": "16px",
		"--connector-width": `${u}px`,
		...d ? { "--line-height": d } : {},
		"--starting-y": "40px",
		...f
	};
}, o = "h-full overflow-visible before:absolute before:-left-[var(--line-left)] before:top-[var(--starting-y)] before:h-[var(--line-height)] before:w-[var(--line-width)] before:bg-f1-foreground-disabled before:content-['']", s = "after:absolute after:left-[var(--horizontal-left)] after:top-[var(--horizontal-offset)] after:h-[var(--horizontal-height)] after:w-[var(--connector-width)] after:rounded-bl-[var(--horizontal-height)] after:content-[''] after:shadow-[inset_1px_-1px_0_0_hsl(var(--neutral-30))]", c = ({ firstCell: o, nestedRowProps: s, fromVisualization: c }) => {
	let l = r(o, s?.depth ?? 0), u = n(s?.expanded ?? !1, o), d = s === void 0 || s?.nestedVariant === "basic", f = s?.nestedVariant === "detailed", p = d || s?.rowWithChildren, m = f && (s?.onLoadMoreChildren || s?.onAddRow), h = l ? t({
		depth: s?.depth ?? 0,
		padding: 0
	}) : void 0, g = s?.connectorHeight ?? 0;
	return !u && !l && !s?.rowWithChildren ? null : /* @__PURE__ */ i("div", {
		className: e("absolute inset-0 h-full", s?.parentHasChildren && u && "h-full overflow-visible before:absolute before:-left-[var(--line-left)] before:top-[var(--starting-y)] before:h-[var(--line-height)] before:w-[var(--line-width)] before:bg-f1-foreground-disabled before:content-['']", s?.parentHasChildren && l && p && !m && "after:absolute after:left-[var(--horizontal-left)] after:top-[var(--horizontal-offset)] after:h-[var(--horizontal-height)] after:w-[var(--connector-width)] after:rounded-bl-[var(--horizontal-height)] after:content-[''] after:shadow-[inset_1px_-1px_0_0_hsl(var(--neutral-30))]"),
		style: {
			marginLeft: h,
			...a(g, s, c)
		}
	});
};
//#endregion
export { c as TreeConnector, a as connectorVariables, s as horizontalConnectorStyles, o as verticalConnectorStyles };
