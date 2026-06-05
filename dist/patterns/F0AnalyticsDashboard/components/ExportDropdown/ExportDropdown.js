import { jsx as a } from "react/jsx-runtime";
import { Dropdown as m } from "../../../../experimental/Navigation/Dropdown/index.js";
import i from "../../../../icons/app/Download.js";
import n from "../../../../icons/app/Ellipsis.js";
import "../../../../icons/app/Menu.js";
import { useI18n as p } from "../../../../lib/providers/i18n/i18n-provider.js";
function x({
  onExportExcel: t,
  isExporting: o
}) {
  const { t: r } = p();
  return /* @__PURE__ */ a(
    m,
    {
      items: [
        {
          label: o ? r("ai.dataDownload.exporting") : r("ai.dataDownload.exportDashboard", { format: "Excel" }),
          icon: i,
          // Dropdown items have no built-in disabled/loading state, so guard
          // the click ourselves to avoid firing a second export while one is
          // already in flight.
          onClick: o ? () => {
          } : t
        }
      ],
      icon: n
    }
  );
}
export {
  x as ExportDropdown
};
