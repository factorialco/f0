import { forwardRef } from "react"

import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { FileItem } from "@/experimental/RichText/FileItem"
import Check from "@/icons/app/Check"
import CheckCircle from "@/icons/app/CheckCircle"
import ChevronDown from "@/icons/app/ChevronDown"
import ChevronUp from "@/icons/app/ChevronUp"
import Marker from "@/icons/app/Marker"
import ProgressClock from "@/icons/app/ProgressClock"
import { cn } from "@/lib/utils"

import type {
  F0TimelineRowOtherAction,
  F0TimelineRowPrimaryAction,
  F0TimelineRowProps,
  F0TimelineRowSecondaryAction,
  TimelineRowStatus,
} from "./types"

const CompletedIcon = () => (
  <F0Icon icon={CheckCircle} size="lg" color="positive" />
)

const InProgressIcon = () => (
  <F0Icon icon={ProgressClock} size="md" color="warning" />
)

const NotStartedIcon = () => (
  <svg className="h-7 w-7" viewBox="0 0 28 28" fill="none">
    <circle
      cx="14"
      cy="14"
      r="10"
      className="stroke-f1-icon-secondary"
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
  <svg className="h-3.5 w-3.5" viewBox="0 0 13 13" fill="none" aria-hidden>
    <path
      d="M2.9834 0C3.89458 0 4.63365 0.739241 4.63379 1.65039V1.66699H8.33398V1.65039C8.33413 0.73924 9.07319 0 9.98438 0H11.3174C12.2284 0.000211338 12.9676 0.739371 12.9678 1.65039V2.9834C12.9678 3.89454 12.2285 4.63358 11.3174 4.63379H11.3008V8.33398H11.3174C12.2285 8.3342 12.9678 9.07324 12.9678 9.98438V11.3174C12.9676 12.2283 12.2283 12.9676 11.3174 12.9678H9.98438C9.07323 12.9678 8.3342 12.2285 8.33398 11.3174V11.3008H4.63379V11.3174C4.63358 12.2285 3.89454 12.9678 2.9834 12.9678H1.65039C0.73937 12.9676 0.000211338 12.2284 0 11.3174V9.98438C0 9.07319 0.739241 8.33413 1.65039 8.33398H1.66699V4.63379H1.65039C0.73924 4.63365 0 3.89458 0 2.9834V1.65039C0.000140817 0.739327 0.739328 0.000140817 1.65039 0H2.9834ZM1.65039 9.63477C1.45721 9.63491 1.30078 9.79116 1.30078 9.98438V11.3174C1.30099 11.5104 1.45734 11.6678 1.65039 11.668H2.9834C3.17657 11.668 3.33377 11.5105 3.33398 11.3174V9.98438C3.33398 9.79107 3.1767 9.63477 2.9834 9.63477H1.65039ZM9.98438 9.63477C9.79107 9.63477 9.63477 9.79108 9.63477 9.98438V11.3174C9.63498 11.5105 9.79121 11.668 9.98438 11.668H11.3174C11.5104 11.6678 11.6678 11.5104 11.668 11.3174V9.98438C11.668 9.79121 11.5105 9.63498 11.3174 9.63477H9.98438ZM4.63379 2.9834C4.63379 3.89467 3.89467 4.63379 2.9834 4.63379H2.96777V8.33398H2.9834C3.89467 8.33398 4.63379 9.07311 4.63379 9.98438V10H8.33398V9.98438C8.33398 9.0731 9.07311 8.33398 9.98438 8.33398H10V4.63379H9.98438C9.0731 4.63379 8.33398 3.89467 8.33398 2.9834V2.96777H4.63379V2.9834ZM1.65039 1.30078C1.4573 1.30092 1.30092 1.4573 1.30078 1.65039V2.9834C1.30078 3.17661 1.45721 3.33384 1.65039 3.33398H2.9834C3.1767 3.33398 3.33398 3.1767 3.33398 2.9834V1.65039C3.33384 1.45721 3.17661 1.30078 2.9834 1.30078H1.65039ZM9.98438 1.30078C9.79116 1.30078 9.63491 1.45721 9.63477 1.65039V2.9834C9.63477 3.1767 9.79108 3.33398 9.98438 3.33398H11.3174C11.5105 3.33377 11.668 3.17657 11.668 2.9834V1.65039C11.6678 1.45734 11.5104 1.30099 11.3174 1.30078H9.98438Z"
      fill="currentColor"
      fillOpacity="0.61"
    />
  </svg>
)

const ConnectorLine = ({ status }: { status: TimelineRowStatus }) => (
  <div
    className={cn(
      "mt-1 w-0.5 min-h-2 flex-1",
      status === "completed" && "bg-f1-icon-positive",
      status === "in-progress" && "bg-f1-border-secondary",
      status === "not-started" &&
        "bg-[length:2px_6px] bg-repeat-y bg-[linear-gradient(to_bottom,_hsl(var(--neutral-20))_3px,_transparent_3px)]"
    )}
  />
)

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
      {hasOther && <Dropdown items={otherActions} size="md" />}
      {secondaryActions?.map((action) => (
        <F0Button
          key={action.label}
          label={action.label}
          icon={action.icon}
          variant="outline"
          size="md"
          onClick={action.onClick}
          disabled={action.disabled}
          loading={action.loading}
        />
      ))}
      {hasSecondary && primaryAction && (
        <div className="h-6 w-px bg-f1-border-secondary" />
      )}
      {primaryAction && (
        <F0Button
          label={primaryAction.label}
          icon={primaryAction.icon}
          variant="default"
          size="md"
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
      icon = Marker,
      title,
      description,
      assignees,
      right,
      files,
      primaryAction,
      secondaryActions,
      otherActions,
      isLast = false,
      taskCount,
      completedCount,
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
              <div className="flex flex-1 items-center justify-between">
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
                {completedCount !== undefined && taskCount !== undefined && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-f1-background-secondary px-2.5 py-1 text-sm font-semibold text-f1-foreground-secondary">
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden
                    >
                      <circle
                        cx="7"
                        cy="7"
                        r="6"
                        className="fill-f1-icon-secondary"
                      />
                      <path
                        d="M4.5 7.25L6 8.75L9.5 5.25"
                        className="stroke-f1-foreground-inverse"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {completedCount}/{taskCount}
                  </span>
                )}
              </div>
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
                {status === "completed" &&
                  (right || files || (assignees && assignees.length > 0)) && (
                    <div className="ml-auto flex shrink-0 items-center gap-3">
                      {right}
                      {files && files.length > 0 && (
                        <div className="flex items-center gap-2">
                          {files.map((file) => (
                            <FileItem key={file.name} file={file} />
                          ))}
                        </div>
                      )}
                      {status === "completed" &&
                        assignees &&
                        assignees.length > 0 &&
                        (assignees.length <= 3 ? (
                          <div className="flex items-center gap-2">
                            {assignees.map((assignee) => (
                              <div
                                key={`${assignee.firstName}-${assignee.lastName}`}
                                className="flex items-center gap-1.5"
                              >
                                <F0AvatarPerson
                                  firstName={assignee.firstName}
                                  lastName={assignee.lastName}
                                  src={assignee.src}
                                  size="xs"
                                  badge={{ type: "positive", icon: Check }}
                                />
                                <span className="text-sm text-f1-foreground-secondary">
                                  {assignee.firstName} {assignee.lastName}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <F0AvatarList
                            type="person"
                            avatars={assignees.map((a) => ({
                              ...a,
                              badge: {
                                type: "positive" as const,
                                icon: Check,
                              },
                            }))}
                            size="xs"
                            max={3}
                          />
                        ))}
                    </div>
                  )}
              </>
            )}
          </div>

          {!isMultitask && status !== "completed" && (
            <div className="pl-9">
              {right && (
                <div className="mb-3 flex items-center gap-2">{right}</div>
              )}

              {files && files.length > 0 && (
                <div className="mb-3 flex items-center gap-2">
                  {files.map((file) => (
                    <FileItem key={file.name} file={file} />
                  ))}
                </div>
              )}

              {assignees && assignees.length > 0 && (
                <div className="mb-3">
                  {assignees.length <= 3 ? (
                    <div className="flex flex-wrap items-center gap-3">
                      {assignees.map((assignee) => (
                        <div
                          key={`${assignee.firstName}-${assignee.lastName}`}
                          className="flex items-center gap-2"
                        >
                          <F0AvatarPerson
                            firstName={assignee.firstName}
                            lastName={assignee.lastName}
                            src={assignee.src}
                            size="sm"
                          />
                          <span className="text-sm text-f1-foreground">
                            {assignee.firstName} {assignee.lastName}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="w-fit">
                      <F0AvatarList
                        type="person"
                        avatars={assignees}
                        size="sm"
                        max={3}
                      />
                    </div>
                  )}
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
            </div>
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
