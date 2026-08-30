import { cn as e } from "../../../lib/utils.js";
import { TableFooter as t } from "../../../ui/table.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/experimental/OneTable/TableFooter/index.tsx
function r({ children: r }) {
	return /* @__PURE__ */ n(t, {
		className: e("bg-f1-background-default sticky bottom-0 z-30 shadow-[0_-1px_0_0_var(--f1-border-secondary)]"),
		children: r
	});
}
//#endregion
export { r as TableFooter };
