import { ButtonInternal } from "@/components/F0Button/internal"
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
    <ButtonInternal
      label={
        isExporting ? t("actions.exporting") : t("actions.exportDashboard")
      }
      icon={Download}
      variant="outline"
      size="md"
      disabled={isExporting}
      onClick={onExportExcel}
    />
  )
}
