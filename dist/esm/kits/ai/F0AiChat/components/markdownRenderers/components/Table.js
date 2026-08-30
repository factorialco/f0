import { cn as e } from "../../../../../../lib/utils.js";
import { OneEllipsis as t } from "../../../../../../lib/OneEllipsis/OneEllipsis.js";
import n from "../../../../../../icons/app/Download.js";
import { useI18n as r } from "../../../../../../lib/providers/i18n/i18n-provider.js";
import { Dropdown as i } from "../../../../../../experimental/Navigation/Dropdown/index.js";
import { useCallback as a, useRef as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Table.tsx
async function l(e, t, n) {
	let r = await import("xlsx"), i = r.utils.table_to_book(e, { sheet: "Data" });
	r.writeFile(i, `${n}.${t}`);
}
function u({ children: u, title: d, ...f }) {
	let p = r(), m = o(null), h = a((e) => {
		if (!m.current) return;
		let t = d?.replace(/\s+/g, "_").toLowerCase() || "table";
		l(m.current, e, t);
	}, [d]);
	return /* @__PURE__ */ c("div", {
		className: "group/table relative flex flex-col gap-2 rounded-md border border-solid border-f1-border-secondary",
		children: [/* @__PURE__ */ c("div", {
			className: "flex items-center justify-between gap-3 border-0 border-b border-solid border-f1-border-secondary px-3 py-2",
			children: [/* @__PURE__ */ s(t, {
				tag: "h2",
				className: "text-base font-medium capitalize text-f1-foreground",
				children: d ?? p.ai.reportCard.tableLabel
			}), /* @__PURE__ */ s(i, {
				icon: n,
				size: "md",
				items: [{
					label: p.t("ai.dataDownload.download", { format: "Excel" }),
					icon: n,
					onClick: () => h("xlsx")
				}, {
					label: p.t("ai.dataDownload.download", { format: "CSV" }),
					icon: n,
					onClick: () => h("csv")
				}]
			})]
		}), /* @__PURE__ */ s("div", {
			className: "scrollbar-macos overflow-x-auto",
			children: /* @__PURE__ */ s("table", {
				ref: m,
				...f,
				className: e("w-full border-separate border-spacing-0 [&_tbody_tr:last-child_td]:border-b-0", f.className),
				children: u
			})
		})]
	});
}
function d({ children: t, ...n }) {
	return /* @__PURE__ */ s("th", {
		...n,
		className: e("sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary", n.className),
		children: t
	});
}
function f({ children: t, ...n }) {
	return /* @__PURE__ */ s("td", {
		...n,
		className: e("max-w-80 truncate border-0 border-b border-solid border-f1-border-secondary px-3 py-2", n.className),
		children: t
	});
}
//#endregion
export { u as Table, f as Td, d as Th };
