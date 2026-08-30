import e from "../../../../icons/app/Download.js";
import t from "../../../../icons/app/Ellipsis.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { Dropdown as r } from "../../../../experimental/Navigation/Dropdown/index.js";
import { jsx as i } from "react/jsx-runtime";
//#region src/patterns/F0AnalyticsDashboard/components/ExportDropdown/ExportDropdown.tsx
function a({ onExportExcel: a, isExporting: o }) {
	let { t: s } = n();
	return /* @__PURE__ */ i(r, {
		items: [{
			label: o ? s("ai.dataDownload.exporting") : s("ai.dataDownload.exportDashboard", { format: "Excel" }),
			icon: e,
			onClick: o ? () => {} : a
		}],
		icon: t
	});
}
//#endregion
export { a as ExportDropdown };
