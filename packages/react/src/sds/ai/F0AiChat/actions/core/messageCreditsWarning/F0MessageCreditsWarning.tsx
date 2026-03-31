import { F0Alert } from "@/components/F0Alert"
import { useI18n } from "@/lib/providers/i18n"

import { F0MessageCreditsWarningProps } from "./types"

export const F0MessageCreditsWarning = ({
  actionHref,
}: F0MessageCreditsWarningProps) => {
  const translations = useI18n()

  return (
    <F0Alert
      title={translations?.ai?.creditWarning?.messageBanner?.title}
      variant="warning"
      description={translations?.ai?.creditWarning?.messageBanner?.description}
      action={
        actionHref
          ? {
              label: translations?.ai?.creditWarning?.messageBanner?.actionLabel,
              onClick: () => {
                window.location.href = actionHref
              },
            }
          : undefined
      }
    />
  )
}
