import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { Download } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

interface ExportDropdownProps {
  onExportExcel: () => void
  isExporting: boolean
}

export function ExportDropdown({
  onExportExcel,
  isExporting,
}: ExportDropdownProps) {
  const { t } = useI18n()

  return (
    <Dropdown
      items={[
        {
          label: isExporting
            ? t("ai.dataDownload.exporting")
            : t("ai.dataDownload.exportDashboardAsExcel"),
          icon: Download,
          onClick: onExportExcel,
        },
      ]}
    ></Dropdown>
  )
}
