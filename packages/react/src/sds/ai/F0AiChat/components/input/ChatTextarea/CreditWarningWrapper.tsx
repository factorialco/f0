import { type ReactNode } from "react"

import { F0Button } from "@/components/F0Button"
import { Cross } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { type AiChatCreditWarning } from "../../../types"

const creditWarningConfig = {
  soft: {
    text: "" as string,
    bg: "bg-f1-background-info",
    fontColor: "text-f1-foreground-info",
    formBorder: "[&_form]:border-f1-border-info",
  },
}

interface CreditWarningWrapperProps {
  creditWarning?: AiChatCreditWarning
  children: ReactNode
}

export const CreditWarningWrapper = ({
  creditWarning,
  children,
}: CreditWarningWrapperProps) => {
  const translation = useI18n()

  if (!creditWarning) return children

  const config = {
    ...creditWarningConfig[creditWarning.level],
    text: translation.ai.creditWarning.soft,
  }

  return (
    <div
      className={cn("flex flex-col rounded-xl", config.bg, config.formBorder)}
    >
      <div className="flex items-center justify-between gap-2 px-4 pb-1.5 pt-2">
        <p
          className={cn("min-w-0 flex-1 text-sm font-medium", config.fontColor)}
        >
          {config.text}
        </p>
        <div className="flex shrink-0 items-center gap-1">
          {creditWarning.onGetCredits && (
            <F0Button
              label={translation.ai.creditWarning.getCredits ?? ""}
              size="sm"
              variant="outline"
              tooltip={translation.ai.creditWarning.getCredits ?? ""}
              onClick={creditWarning.onGetCredits}
            />
          )}
          {creditWarning.onDismiss && (
            <F0Button
              label={translation.ai.creditWarning.dismiss ?? ""}
              size="sm"
              variant="ghost"
              icon={Cross}
              hideLabel
              onClick={creditWarning.onDismiss}
            />
          )}
        </div>
      </div>
      {children}
    </div>
  )
}
