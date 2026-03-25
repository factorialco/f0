import { useI18n } from "@/lib/providers/i18n"

import { F0MessageCreditsWarningProps } from "./types"
import { F0Alert } from "@/components/F0Alert"

export const F0MessageCreditsWarning = ({
  actionHref,
}: F0MessageCreditsWarningProps) => {
  const translations = useI18n()

  return (
    <F0Alert
      title={translations?.ai?.creditWarning.messageBanner?.title}
      variant="warning"
      description={translations?.ai?.creditWarning.messageBanner?.description}
      action={{
        label: actionHref
          ? translations?.ai?.creditWarning.messageBanner?.actionLabel
          : "",
        onClick: () => {
          actionHref ? (window.location.href = actionHref) : null
          return
        },
      }}
    />
  )
}
