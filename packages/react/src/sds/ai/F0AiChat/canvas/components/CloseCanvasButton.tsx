import { F0Button } from "@/components/F0Button"
import { Cross } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

export function CloseCanvasButton({ onClick }: { onClick: () => void }) {
  const translations = useI18n()
  return (
    <F0Button
      variant="outline"
      icon={Cross}
      size="md"
      hideLabel
      onClick={onClick}
      label={translations.ai.closeDashboard}
    />
  )
}
