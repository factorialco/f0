import { F0Alert } from "@/components/F0Alert"
import { useI18n } from "@/lib/providers/i18n"

import { F0EmployeeCreditsWarningProps } from "./types"

export const F0EmployeeCreditsWarning = (
  _props: F0EmployeeCreditsWarningProps
) => {
  const translations = useI18n()
  const employeeBanner = translations?.ai?.creditWarning.employeeMessageBanner

  return (
    <F0Alert
      title={employeeBanner?.title}
      variant="warning"
      description={employeeBanner?.description}
    />
  )
}
