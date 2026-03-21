import { ButtonInternal } from "@/components/F0Button/internal"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { Download, EllipsisHorizontal } from "@/icons/app"
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
            ? t("actions.exporting")
            : t("actions.exportDashboard"),
          icon: Download,
          onClick: onExportExcel,
        },
      ]}
    >
      <ButtonInternal
        label={t("actions.other")}
        icon={EllipsisHorizontal}
        variant="outline"
        size="md"
        disabled={isExporting}
        noTitle
      />
    </Dropdown>
  )
}
