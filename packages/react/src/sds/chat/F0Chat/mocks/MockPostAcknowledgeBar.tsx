import { format } from "date-fns"
import { useState, type ReactNode } from "react"

import { F0ActionBar } from "@/components/F0ActionBar"
import { useI18n } from "@/lib/providers/i18n"
import { useDateFnsLocale } from "@/lib/providers/l10n"
import { type F0ChatPostRequiredAction } from "../types"

/**
 * "You have to confirm you read this."
 *
 * One bar with three readings: it ASKS while the action is pending, spins while
 * it lands, and then CONFIRMS with the moment it happened — the confirmation
 * being the point, since the reader's own record is what the requirement is
 * for. It never disappears once satisfied.
 */
export const MockPostAcknowledgeBar = ({
  requiredAction,
  onAcknowledge,
  onLater,
}: {
  requiredAction: F0ChatPostRequiredAction
  onAcknowledge?: () => void | Promise<void>
  onLater?: () => void
}): ReactNode => {
  const i18n = useI18n()
  const locale = useDateFnsLocale()
  const [pendingRequest, setPendingRequest] = useState(false)

  const completedAt = requiredAction.completedAt
  const isCompleted = !!completedAt

  const acknowledge = async () => {
    if (!onAcknowledge) return
    setPendingRequest(true)
    try {
      await onAcknowledge()
    } finally {
      setPendingRequest(false)
    }
  }

  const label = isCompleted
    ? i18n.t("communities.detail.acknowledgedOn", {
        date: format(new Date(completedAt), "PPP", { locale }),
        time: format(new Date(completedAt), "HH:mm"),
      })
    : i18n.t("communities.detail.acknowledgeRequired")

  return (
    <F0ActionBar
      isOpen
      label={label}
      status={isCompleted ? "success" : pendingRequest ? "loading" : "idle"}
      primaryActions={
        isCompleted || !onAcknowledge
          ? undefined
          : [
              {
                label: i18n.t("communities.detail.acknowledge"),
                onClick: () => void acknowledge(),
              },
            ]
      }
      secondaryActions={
        isCompleted || !onLater
          ? undefined
          : [
              {
                label: i18n.t("communities.detail.acknowledgeLater"),
                onClick: onLater,
              },
            ]
      }
    />
  )
}
