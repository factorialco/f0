import { type ReactNode, forwardRef, useId } from "react"

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

import type {
  F0TimelineRowAction,
  F0TimelineRowMultitaskProps,
  F0TimelineRowOtherAction,
  F0TimelineRowProps,
  F0TimelineRowTaskProps,
  TimelineRowStatus,
} from "./types"

import { F0TimelineConnector } from "./components/F0TimelineConnector"

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

const IconContainer = ({
  status,
  children,
}: {
  status: TimelineRowStatus
  children: ReactNode
}) => (
  <div
    className={cn(
      "flex h-7 w-7 shrink-0 items-center justify-center rounded",
      status === "completed"
        ? "border border-f1-border-secondary bg-white"
        : "bg-f1-background-tertiary"
    )}
  >
    {children}
  </div>
)

const MultitaskHeader = ({
  props,
  contentId,
}: {
  props: F0TimelineRowMultitaskProps
  contentId: string
}) => {
  const { status, title, taskCount, completedCount, expanded, onExpandToggle } =
    props

  return (
    <>
      <IconContainer status={status}>
        <MultitaskIcon />
      </IconContainer>
      <div className="flex flex-1 items-center justify-between">
        <button
          type="button"
          className={cn(
            "flex items-center gap-1 rounded text-base font-semibold text-f1-foreground",
            focusRing()
          )}
          onClick={() => onExpandToggle()}
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
        {completedCount !== undefined && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-f1-background-secondary px-2.5 py-1 text-sm font-semibold text-f1-foreground-secondary">
            <CheckCircle className="h-[18px] w-[18px] fill-f1-icon-secondary" />
            {completedCount}/{taskCount}
          </span>
        )}
      </div>
    </>
  )
}

const TaskHeader = ({ props }: { props: F0TimelineRowTaskProps }) => {
  const {
    status,
    icon = Marker,
    title,
    description,
    assignees,
    right,
    files,
  } = props

  return (
    <>
      <IconContainer status={status}>
        <F0Icon icon={icon} size="sm" color="default" />
      </IconContainer>
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
                {files.map((file, index) => (
                  <FileItem key={`${file.name}-${index}`} file={file} />
                ))}
              </div>
            )}
            {assignees &&
              assignees.length > 0 &&
              (assignees.length <= 3 ? (
                <div className="flex items-center gap-2">
                  {assignees.map((assignee, index) => (
                    <div
                      key={`${assignee.firstName}-${assignee.lastName}-${index}`}
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
  )
}

const TaskDetails = ({ props }: { props: F0TimelineRowTaskProps }) => {
  const {
    right,
    files,
    assignees,
    primaryAction,
    secondaryActions,
    otherActions,
  } = props

  return (
    <div className="pl-9">
      {right && <div className="mb-3 flex items-center gap-2">{right}</div>}

      {files && files.length > 0 && (
        <div className="mb-3 flex items-center gap-2">
          {files.map((file, index) => (
            <FileItem key={`${file.name}-${index}`} file={file} />
          ))}
        </div>
      )}

      {assignees && assignees.length > 0 && (
        <div className="mb-3">
          {assignees.length <= 3 ? (
            <div className="flex flex-wrap items-center gap-3">
              {assignees.map((assignee, index) => (
                <div
                  key={`${assignee.firstName}-${assignee.lastName}-${index}`}
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
  )
}

const Actions = ({
  primaryAction,
  secondaryActions,
  otherActions,
}: {
  primaryAction?: F0TimelineRowAction
  secondaryActions?: F0TimelineRowAction[]
  otherActions?: F0TimelineRowOtherAction[]
}) => {
  const hasSecondary = secondaryActions && secondaryActions.length > 0
  const hasOther = otherActions && otherActions.length > 0

  return (
    <div className="flex items-center gap-2">
      {hasOther && <Dropdown items={otherActions} size="md" />}
      {secondaryActions?.map((action, index) => (
        <F0Button
          key={`${action.label}-${index}`}
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
  (props, ref) => {
    const { status, isLast = false, hideStatus = false } = props
    const isMultitask = "items" in props
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
              <MultitaskHeader
                props={props as F0TimelineRowMultitaskProps}
                contentId={contentId}
              />
            ) : (
              <TaskHeader props={props as F0TimelineRowTaskProps} />
            )}
          </div>

          {!isMultitask && status !== "completed" && (
            <TaskDetails props={props as F0TimelineRowTaskProps} />
          )}

          {isMultitask && (props as F0TimelineRowMultitaskProps).expanded && (
            <div id={contentId} className="flex flex-col pl-4">
              {(props as F0TimelineRowMultitaskProps).items.map(
                (item, index) => (
                  <F0TimelineRow
                    key={`${item.title}-${index}`}
                    {...item}
                    hideStatus
                    isLast={
                      index ===
                      (props as F0TimelineRowMultitaskProps).items.length - 1
                    }
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
)

F0TimelineRow.displayName = "F0TimelineRow"
