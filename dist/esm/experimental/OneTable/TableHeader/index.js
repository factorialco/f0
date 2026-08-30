import { cn as e } from "../../../lib/utils.js";
import { TableHeader as t } from "../../../ui/table.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/experimental/OneTable/TableHeader/index.tsx
function r({ children: r, sticky: i = !1 }) {
	return /* @__PURE__ */ n(t, {
		className: e(i && "sticky top-0 z-30"),
		children: r
	});
}
//#endregion
export { r as TableHeader };
