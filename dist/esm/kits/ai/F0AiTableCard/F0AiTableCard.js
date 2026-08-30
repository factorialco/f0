import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/Download.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { OneEllipsis as r } from "../../../lib/OneEllipsis/PlainEllipsis.js";
import { Dropdown as i } from "../../../experimental/Navigation/Dropdown/index.js";
import { F0Box as a } from "../../../F0Box.js";
import { useCallback as o, useRef as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/kits/ai/F0AiTableCard/F0AiTableCard.tsx
async function u(e, t, n) {
	let r = await import("xlsx"), i = r.utils.table_to_book(e, { sheet: "Data" });
	r.writeFile(i, `${n}.${t}`);
}
function d({ dataset: d, title: f, filename: p }) {
	let m = n(), h = s(null), g = f ?? m.ai.aiTable.title, _ = o((e) => {
		if (!h.current) return;
		let t = p ?? (g.replace(/\s+/g, "_").toLowerCase() || "table");
		u(h.current, e, t);
	}, [g, p]);
	return d.columns?.length ? /* @__PURE__ */ l(a, {
		display: "flex",
		flexDirection: "column",
		gap: "md",
		borderRadius: "md",
		border: "default",
		borderColor: "secondary",
		children: [/* @__PURE__ */ l(a, {
			display: "flex",
			alignItems: "center",
			justifyContent: "between",
			gap: "lg",
			border: "none",
			borderBottom: "default",
			borderColor: "secondary",
			paddingX: "md",
			paddingY: "sm",
			children: [/* @__PURE__ */ c(r, {
				tag: "h2",
				className: "text-base font-medium capitalize text-f1-foreground",
				children: g
			}), /* @__PURE__ */ c(i, {
				icon: t,
				size: "md",
				items: [{
					label: m.ai.aiTable.downloadExcel,
					icon: t,
					onClick: () => _("xlsx")
				}, {
					label: m.ai.aiTable.downloadCsv,
					icon: t,
					onClick: () => _("csv")
				}]
			})]
		}), /* @__PURE__ */ c(a, {
			overflowX: "auto",
			children: /* @__PURE__ */ l("table", {
				ref: h,
				className: e("w-full border-separate border-spacing-0 text-md", "[&_tbody_tr:last-child_td]:border-b-0"),
				children: [/* @__PURE__ */ c("thead", { children: /* @__PURE__ */ c("tr", { children: d.columns.map((e) => /* @__PURE__ */ c("th", {
					className: "sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary",
					children: d.columnLabels?.[e] ?? e
				}, e)) }) }), /* @__PURE__ */ c("tbody", { children: d.rows.map((e, t) => /* @__PURE__ */ c("tr", { children: d.columns.map((t) => {
					let n = e[t];
					return /* @__PURE__ */ c("td", {
						className: "max-w-72 border-0 border-b border-solid border-f1-border-secondary px-3 py-2 text-f1-foreground",
						children: /* @__PURE__ */ c(r, { children: n == null ? "" : String(n) })
					}, t);
				}) }, t)) })]
			})
		})]
	}) : null;
}
d.displayName = "F0AiTableCard";
//#endregion
export { d as F0AiTableCard };
