import { forwardRef } from "react"

import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import ChevronDown from "@/icons/app/ChevronDown"
import ChevronUp from "@/icons/app/ChevronUp"
import { cn } from "@/lib/utils"

import type {
  F0TimelineRowOtherAction,
  F0TimelineRowPrimaryAction,
  F0TimelineRowProps,
  F0TimelineRowSecondaryAction,
  TimelineRowStatus,
} from "./types"

const STATUS_COLORS = {
  completed: "#10B881",
  "in-progress": "#FF9153",
  "not-started": "#868E96",
  default: "#d1d5db",
} as const

const CompletedIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="10" fill={STATUS_COLORS.completed} />
    <path
      d="M10 14.5L12.5 17L18 11"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const InProgressIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="10" fill="white" />
    <path
      d="M14 14L14 4A10 10 0 0 1 22.66 19Z"
      fill={STATUS_COLORS["in-progress"]}
    />
    <circle
      cx="14"
      cy="14"
      r="10"
      stroke={STATUS_COLORS["in-progress"]}
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
)

const NotStartedIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle
      cx="14"
      cy="14"
      r="10"
      stroke={STATUS_COLORS["not-started"]}
      strokeWidth="1.8"
      strokeDasharray="0.1 4.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)

const StatusIndicator = ({ status }: { status: TimelineRowStatus }) => {
  if (status === "completed") {
    return (
      <div className="flex h-7 w-7 items-center justify-center" aria-hidden>
        <CompletedIcon />
      </div>
    )
  }

  if (status === "in-progress") {
    return (
      <div className="flex h-7 w-7 items-center justify-center" aria-hidden>
        <InProgressIcon />
      </div>
    )
  }

  return (
    <div className="flex h-7 w-7 items-center justify-center" aria-hidden>
      <NotStartedIcon />
    </div>
  )
}

const MultitaskIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
    <path
      d="M2.9834 0C3.89458 0 4.63365 0.739241 4.63379 1.65039V1.66699H8.33398V1.65039C8.33413 0.73924 9.07319 0 9.98438 0H11.3174C12.2284 0.000211338 12.9676 0.739371 12.9678 1.65039V2.9834C12.9678 3.89454 12.2285 4.63358 11.3174 4.63379H11.3008V8.33398H11.3174C12.2285 8.3342 12.9678 9.07324 12.9678 9.98438V11.3174C12.9676 12.2283 12.2283 12.9676 11.3174 12.9678H9.98438C9.07323 12.9678 8.3342 12.2285 8.33398 11.3174V11.3008H4.63379V11.3174C4.63358 12.2285 3.89454 12.9678 2.9834 12.9678H1.65039C0.73937 12.9676 0.000211338 12.2284 0 11.3174V9.98438C0 9.07319 0.739241 8.33413 1.65039 8.33398H1.66699V4.63379H1.65039C0.73924 4.63365 0 3.89458 0 2.9834V1.65039C0.000140817 0.739327 0.739328 0.000140817 1.65039 0H2.9834ZM1.65039 9.63477C1.45721 9.63491 1.30078 9.79116 1.30078 9.98438V11.3174C1.30099 11.5104 1.45734 11.6678 1.65039 11.668H2.9834C3.17657 11.668 3.33377 11.5105 3.33398 11.3174V9.98438C3.33398 9.79107 3.1767 9.63477 2.9834 9.63477H1.65039ZM9.98438 9.63477C9.79107 9.63477 9.63477 9.79108 9.63477 9.98438V11.3174C9.63498 11.5105 9.79121 11.668 9.98438 11.668H11.3174C11.5104 11.6678 11.6678 11.5104 11.668 11.3174V9.98438C11.668 9.79121 11.5105 9.63498 11.3174 9.63477H9.98438ZM4.63379 2.9834C4.63379 3.89467 3.89467 4.63379 2.9834 4.63379H2.96777V8.33398H2.9834C3.89467 8.33398 4.63379 9.07311 4.63379 9.98438V10H8.33398V9.98438C8.33398 9.0731 9.07311 8.33398 9.98438 8.33398H10V4.63379H9.98438C9.0731 4.63379 8.33398 3.89467 8.33398 2.9834V2.96777H4.63379V2.9834ZM1.65039 1.30078C1.4573 1.30092 1.30092 1.4573 1.30078 1.65039V2.9834C1.30078 3.17661 1.45721 3.33384 1.65039 3.33398H2.9834C3.1767 3.33398 3.33398 3.1767 3.33398 2.9834V1.65039C3.33384 1.45721 3.17661 1.30078 2.9834 1.30078H1.65039ZM9.98438 1.30078C9.79116 1.30078 9.63491 1.45721 9.63477 1.65039V2.9834C9.63477 3.1767 9.79108 3.33398 9.98438 3.33398H11.3174C11.5105 3.33377 11.668 3.17657 11.668 2.9834V1.65039C11.6678 1.45734 11.5104 1.30099 11.3174 1.30078H9.98438Z"
      fill="currentColor"
      fillOpacity="0.61"
    />
  </svg>
)

const ConnectorLine = ({ status }: { status: TimelineRowStatus }) => {
  const isCompleted = status === "completed"
  const isNotStarted = status === "not-started"
  const color = isCompleted ? STATUS_COLORS.completed : STATUS_COLORS.default

  return (
    <div
      className="mt-1 flex-1"
      style={{
        width: 2,
        minHeight: 8,
        backgroundColor: isNotStarted ? "transparent" : color,
        backgroundImage: isNotStarted
          ? `repeating-linear-gradient(to bottom, ${STATUS_COLORS.default} 0px, ${STATUS_COLORS.default} 3px, transparent 3px, transparent 6px)`
          : undefined,
      }}
    />
  )
}

const Actions = ({
  primaryAction,
  secondaryActions,
  otherActions,
}: {
  primaryAction?: F0TimelineRowPrimaryAction
  secondaryActions?: F0TimelineRowSecondaryAction[]
  otherActions?: F0TimelineRowOtherAction[]
}) => {
  const hasSecondary = secondaryActions && secondaryActions.length > 0
  const hasOther = otherActions && otherActions.length > 0

  return (
    <div className="flex items-center gap-2">
      {hasOther && <Dropdown items={otherActions} size="sm" />}
      {secondaryActions?.map((action) => (
        <F0Button
          key={action.label}
          label={action.label}
          icon={action.icon}
          variant="outline"
          size="sm"
          onClick={action.onClick}
          disabled={action.disabled}
          loading={action.loading}
        />
      ))}
      {hasSecondary && primaryAction && (
        <div className="h-5 w-px bg-f1-border-secondary" />
      )}
      {primaryAction && (
        <F0Button
          label={primaryAction.label}
          icon={primaryAction.icon}
          variant="default"
          size="sm"
          onClick={primaryAction.onClick}
          disabled={primaryAction.disabled}
          loading={primaryAction.loading}
        />
      )}
    </div>
  )
}

export const F0TimelineRow = forwardRef<HTMLDivElement, F0TimelineRowProps>(
  (
    {
      status,
      icon,
      title,
      description,
      assignees,
      right,
      primaryAction,
      secondaryActions,
      otherActions,
      isLast = false,
      taskCount,
      expanded,
      onExpandToggle,
      children,
      hideStatus = false,
    },
    ref
  ) => {
    const isMultitask = taskCount !== undefined && taskCount > 0

    return (
      <div ref={ref} className="flex gap-4">
        {/* Status indicator + vertical connector */}
        {!hideStatus && (
          <div className="flex flex-col items-center">
            <StatusIndicator status={status} />
            {!isLast && <ConnectorLine status={status} />}
          </div>
        )}

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 pb-5">
          <div className="flex min-h-7 items-center gap-2">
            {isMultitask ? (
              <div
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded",
                  status === "completed"
                    ? "border border-f1-border-secondary bg-white"
                    : "bg-f1-background-tertiary"
                )}
              >
                <MultitaskIcon />
              </div>
            ) : (
              <div
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded",
                  status === "completed"
                    ? "border border-f1-border-secondary bg-white"
                    : "bg-f1-background-tertiary"
                )}
              >
                <F0Icon icon={icon} size="sm" color="default" />
              </div>
            )}
            {isMultitask ? (
              <button
                type="button"
                className="flex items-center gap-1 text-base font-semibold text-f1-foreground"
                onClick={onExpandToggle}
              >
                {taskCount} {title}
                <F0Icon
                  icon={expanded ? ChevronUp : ChevronDown}
                  size="xs"
                  color="default"
                />
              </button>
            ) : (
              <>
                <span
                  className={cn(
                    "text-base font-semibold text-f1-foreground",
                    status === "completed" && "line-through"
                  )}
                >
                  {title}
                </span>
                {description && (
                  <span className="text-sm text-f1-foreground-secondary">
                    {description}
                  </span>
                )}
              </>
            )}
          </div>

          {!isMultitask && (
            <>
              {right && <div className="flex items-center gap-2">{right}</div>}

              {assignees && assignees.length > 0 && (
                <div className="w-fit">
                  <F0AvatarList
                    type="person"
                    avatars={assignees}
                    size="sm"
                    max={3}
                  />
                </div>
              )}

              {(primaryAction ||
                (secondaryActions && secondaryActions.length > 0) ||
                (otherActions && otherActions.length > 0)) && (
                <div className="mb-3">
                  <Actions
                    primaryAction={primaryAction}
                    secondaryActions={secondaryActions}
                    otherActions={otherActions}
                  />
                </div>
              )}
            </>
          )}

          {isMultitask && expanded && children && (
            <div className="flex flex-col pl-4">{children}</div>
          )}
        </div>
      </div>
    )
  }
)

F0TimelineRow.displayName = "F0TimelineRow"
