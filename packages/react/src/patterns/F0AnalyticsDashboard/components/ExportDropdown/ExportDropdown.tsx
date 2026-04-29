import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { Download, Ellipsis } from "@/icons/app"
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
            : t("ai.dataDownload.exportDashboard", { format: "Excel" }),
          icon: Download,
          // Dropdown items have no built-in disabled/loading state, so guard
          // the click ourselves to avoid firing a second export while one is
          // already in flight.
          onClick: isExporting ? () => {} : onExportExcel,
        },
      ]}
      icon={Ellipsis}
    />
  )
}
