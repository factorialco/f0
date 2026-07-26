import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { Person } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Skeleton } from "@/ui/skeleton"

import type { F0AudienceMember } from "../types"

export type MemberListStatus = "loading" | "loaded" | "error"

export const MemberList = ({
  status,
  members,
  note,
  onRetry,
}: {
  status: MemberListStatus
  members: F0AudienceMember[]
  note?: string
  onRetry?: () => void
}) => {
  const i18n = useI18n()

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy={status === "loading"}
      className="ml-4 flex flex-col gap-1 border-0 border-l border-solid border-f1-border-secondary pb-2 pl-6"
    >
      {status === "loading" && (
        <>
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-5 w-32" />
        </>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2 py-1">
          <span className="text-f1-foreground-secondary">
            {i18n.audience.listItem.loadError}
          </span>
          {onRetry && (
            <F0Button
              variant="ghost"
              size="sm"
              label={i18n.audience.listItem.retry}
              onClick={onRetry}
            />
          )}
        </div>
      )}
      {status === "loaded" && members.length === 0 && (
        <span className="py-1 text-f1-foreground-secondary">
          {i18n.audience.listItem.noMembers}
        </span>
      )}
      {status === "loaded" &&
        members.map((member) => (
          <div key={member.id} className="flex items-center gap-2 py-1">
            <F0Avatar
              avatar={{
                type: "person",
                firstName: member.firstName,
                lastName: member.lastName,
                src: member.src,
              }}
              size="xs"
            />
            <span className="truncate text-f1-foreground">
              {member.firstName} {member.lastName}
            </span>
            {member.subtitle && (
              <span className="truncate text-sm text-f1-foreground-secondary">
                {member.subtitle}
              </span>
            )}
          </div>
        ))}
      {status === "loaded" && note && (
        <div className="flex items-center gap-2 py-1">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-dashed border-f1-border">
            <F0Icon
              icon={Person}
              size="sm"
              className="text-f1-icon-secondary"
            />
          </span>
          <span className="text-f1-foreground-secondary">{note}</span>
        </div>
      )}
    </div>
  )
}
