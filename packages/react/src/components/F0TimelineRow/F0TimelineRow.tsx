import { forwardRef, useId } from "react"

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
import CircleDashed from "@/icons/app/CircleDashed"
import Marker from "@/icons/app/Marker"
import Multitask from "@/icons/app/Multitask"
import ProgressClock from "@/icons/app/ProgressClock"
import { cn, focusRing } from "@/lib/utils"

import { F0TimelineConnector } from "./components/F0TimelineConnector"
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
  <F0Icon icon={CircleDashed} size="lg" color="secondary" />
)

const StatusIndicator = ({ status }: { status: TimelineRowStatus }) => {
  if (status === "completed") {
    return (
      <div
        className="flex h-7 w-7 items-center justify-center"
        aria-hidden
        data-testid={`timeline-status-${status}`}
      >
        <CompletedIcon />
      </div>
    )
  }

  if (status === "in-progress") {
    return (
      <div
        className="flex h-7 w-7 items-center justify-center"
        aria-hidden
        data-testid={`timeline-status-${status}`}
      >
        <InProgressIcon />
      </div>
    )
  }

  return (
    <div
      className="flex h-7 w-7 items-center justify-center"
      aria-hidden
      data-testid={`timeline-status-${status}`}
    >
      <NotStartedIcon />
    </div>
  )
}

const MultitaskIcon = () => <Multitask className="h-3.5 w-3.5" aria-hidden />

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
    const contentId = useId()

    return (
      <div ref={ref} className="flex gap-4">
        {/* Status indicator + vertical connector */}
        {!hideStatus && (
          <div className="flex flex-col items-center">
            <StatusIndicator status={status} />
            {!isLast && <F0TimelineConnector status={status} />}
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
                {onExpandToggle ? (
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-1 rounded text-base font-semibold text-f1-foreground",
                      focusRing()
                    )}
                    onClick={() => onExpandToggle?.()}
                    aria-expanded={expanded}
                    aria-controls={contentId}
                  >
                    {taskCount} {title}
                    <F0Icon
                      icon={expanded ? ChevronUp : ChevronDown}
                      size="xs"
                      color="default"
                    />
                  </button>
                ) : (
                  <span className="flex items-center gap-1 text-base font-semibold text-f1-foreground">
                    {taskCount} {title}
                  </span>
                )}
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
            <div id={contentId} className="flex flex-col pl-4">
              {children}
            </div>
          )}
        </div>
      </div>
    )
  }
)

F0TimelineRow.displayName = "F0TimelineRow"
