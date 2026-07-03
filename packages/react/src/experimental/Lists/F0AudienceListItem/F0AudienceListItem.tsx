import { useCallback, useEffect, useRef, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { AudienceAvatar } from "@/experimental/Forms/Fields/F0AudienceSelector/components/AudienceAvatar"
import { useAudienceEntitySubtitle } from "@/experimental/Forms/Fields/F0AudienceSelector/hooks/useAudienceEntitySubtitle"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { ChevronDown, ChevronUp, Warning } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { MemberList, type MemberListStatus } from "./components/MemberList"
import type { F0AudienceListItemProps, F0AudienceMember } from "./types"

export const F0AudienceListItem = ({
  entity,
  isYou = false,
  warning,
  right,
  members,
  expanded,
  onExpandedChange,
}: F0AudienceListItemProps) => {
  const i18n = useI18n()
  const getSubtitle = useAudienceEntitySubtitle()

  const expandable = !!members && entity.kind !== "individual"

  const [internalExpanded, setInternalExpanded] = useState(false)
  const isExpanded = expandable && (expanded ?? internalExpanded)

  const [memberList, setMemberList] = useState<{
    status: MemberListStatus
    members: F0AudienceMember[]
  } | null>(null)
  const fetchStartedRef = useRef(false)

  const setExpanded = (next: boolean) => {
    if (expanded === undefined) {
      setInternalExpanded(next)
    }
    onExpandedChange?.(next)
  }

  const loadMembers = useCallback(() => {
    if (!members) {
      return
    }
    fetchStartedRef.current = true
    setMemberList({ status: "loading", members: [] })
    members.fetch().then(
      (result) => setMemberList({ status: "loaded", members: result }),
      // Surface the failure with a retry affordance instead of a blank body
      () => setMemberList({ status: "error", members: [] })
    )
  }, [members])

  // Fetch on first expand regardless of whether it came from the internal
  // toggle or the controlled `expanded` prop; cache for the row's lifetime.
  // `fetchStartedRef` makes this a no-op on re-renders (a group's members prop
  // may be a fresh object identity each render), so it fires exactly once.
  useEffect(() => {
    if (!isExpanded || fetchStartedRef.current) {
      return
    }
    loadMembers()
  }, [isExpanded, loadMembers])

  const subtitle = getSubtitle(entity)
  const name = isYou
    ? `${entity.name} ${i18n.audience.listItem.you}`
    : entity.name

  return (
    <div>
      <div className="flex items-center gap-3 py-2">
        {expandable ? (
          <button
            type="button"
            aria-expanded={isExpanded}
            aria-label={i18n.t(
              isExpanded
                ? "audience.listItem.hideMembers"
                : "audience.listItem.showMembers",
              { name: entity.name }
            )}
            onClick={() => setExpanded(!isExpanded)}
            className={cn(
              "group relative shrink-0 cursor-pointer rounded-md border-0 bg-transparent p-0",
              focusRing()
            )}
          >
            <span
              aria-hidden="true"
              className="block transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0"
            >
              <AudienceAvatar entity={entity} size="md" />
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              <F0Icon icon={isExpanded ? ChevronUp : ChevronDown} size="md" />
            </span>
          </button>
        ) : (
          <div className="shrink-0">
            <AudienceAvatar entity={entity} size="md" />
          </div>
        )}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-1.5">
            <span className="truncate font-medium text-f1-foreground">
              {name}
            </span>
            {warning && (
              <Tooltip description={warning}>
                <button
                  type="button"
                  aria-label={warning}
                  className={cn(
                    "flex h-6 w-6 shrink-0 cursor-default items-center justify-center rounded-md border border-solid border-f1-border-warning bg-f1-background-warning p-0",
                    focusRing()
                  )}
                >
                  <F0Icon
                    icon={Warning}
                    size="sm"
                    className="text-f1-icon-warning"
                  />
                </button>
              </Tooltip>
            )}
          </div>
          {subtitle && (
            <span className="truncate text-f1-foreground-secondary">
              {subtitle}
            </span>
          )}
        </div>
        {right && <div className="shrink-0">{right}</div>}
      </div>
      {isExpanded && memberList && (
        <MemberList
          status={memberList.status}
          members={memberList.members}
          note={members?.note}
          onRetry={() => loadMembers()}
        />
      )}
    </div>
  )
}
