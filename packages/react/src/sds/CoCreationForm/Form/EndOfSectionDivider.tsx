import { useI18n } from "@/lib/providers/i18n"

export const EndOfSectionDivider = () => {
  const { t } = useI18n()
  return (
    <div className="mt-8 ml-7 flex flex-row items-center gap-4">
      <div className="h-px flex-1 bg-f1-border-secondary" />
      <span className="text-base font-medium text-f1-foreground-secondary">
        {t("coCreationForm.labels.endOfSection")}
      </span>
      <div className="h-px flex-1 bg-f1-border-secondary" />
    </div>
  )
}
