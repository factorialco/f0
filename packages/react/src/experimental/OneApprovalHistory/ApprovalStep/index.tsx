import { FC, useMemo } from "react"

import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { BadgeProps } from "@/experimental/Information/Badge"
import {
  Check as CheckIcon,
  Cross as CrossIcon,
  Question as QuestionIcon,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

type Status = "waiting" | "pending" | "approved" | "rejected"

type Approver = {
  firstName: string
  lastName: string
  avatar?: string
  status: Status
}

export type ApprovalStepProps = {
  title: string
  approvalsRequired?: number
  status: Status
  approvers: Approver[]
}

const statusTagVariants: Record<Status, "neutral" | "positive" | "critical"> = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical",
}

const badgeMap: Record<"approved" | "rejected", Required<BadgeProps>> = {
  approved: {
    icon: CheckIcon,
    type: "positive",
    size: "sm",
  },
  rejected: {
    icon: CrossIcon,
    type: "critical",
    size: "sm",
  },
}

const defaultBadge: Required<BadgeProps> = {
  icon: QuestionIcon,
  type: "neutral",
  size: "sm",
}

const badgePriority: Record<NonNullable<BadgeProps["type"]>, number> = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0,
}

const getAvatarBadge = (status: Status): Required<BadgeProps> => {
  return status in badgeMap
    ? badgeMap[status as keyof typeof badgeMap]
    : defaultBadge
}

function getAvatarPriority(badgeType?: BadgeProps["type"]): number {
  return badgePriority[badgeType ?? "neutral"] ?? 0
}

const ApprovalStep: FC<ApprovalStepProps> = ({
  title,
  approvalsRequired = 1,
  status,
  approvers,
}) => {
  const translations = useI18n()

  const displayApprovalsRequired =
    approvalsRequired === 1
      ? translations.approvals.requiredNumbers.one
      : translations.approvals.requiredNumbers.other.replace(
          "{{count}}",
          approvalsRequired.toString()
        )

  const displayStatus = translations.approvals.statuses[status]

  const avatars = useMemo(() => {
    return approvers
      .map((approver) => {
        const badge = getAvatarBadge(approver.status)
        return {
          firstName: approver.firstName,
          lastName: approver.lastName,
          src: approver.avatar,
          badge,
        }
      })
      .sort(
        (a, b) =>
          getAvatarPriority(b.badge?.type) - getAvatarPriority(a.badge?.type)
      )
  }, [approvers])

  return (
    <div className="flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3">
      <div className="flex flex-row items-start justify-between">
        <div>
          <p className="font-medium text-f1-foreground">{title}</p>
          <p className="text-f1-foreground-secondary">
            {displayApprovalsRequired}
          </p>
        </div>
        <F0TagStatus text={displayStatus} variant={statusTagVariants[status]} />
      </div>
      <div className="w-full">
        <F0AvatarList avatars={avatars} layout="fill" type="person" size="md" />
      </div>
    </div>
  )
}

export default ApprovalStep

export type { Status }
