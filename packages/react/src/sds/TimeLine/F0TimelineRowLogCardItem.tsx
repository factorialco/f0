import type { AvatarBadge } from "@/components/avatars/F0Avatar/types"
import { F0AvatarFile } from "@/components/avatars/F0AvatarFile"
import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { F0Button, type F0ButtonProps } from "@/components/F0Button"
import { F0TagStatus, type TagStatusProps } from "@/components/tags/F0TagStatus"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { EyeVisible } from "@/icons/app"
import { cn } from "@/lib/utils"

export interface F0TimelineRowLogCardItemFile {
  /** File name shown next to the avatar. */
  name: string
  /** File extension/type used by `F0AvatarFile`. */
  type: string
  /**
   * When provided, an "open file" eye-icon button is added to the row's
   * hover-revealed action cluster (mirrors the `Metadata` file pattern).
   */
  onOpen?: () => void
  /** Override the tooltip label of the auto-generated open button. */
  openLabel?: string
}

export interface F0TimelineRowLogCardItemAssignee {
  /** Full display name. Split on the last space to seed avatar initials. */
  name: string
  /** Surfaced as the secondary line in the avatar tooltip and overflow list. */
  email: string
  /** Optional avatar image url. */
  src?: string
  /**
   * Optional badge rendered over the avatar (e.g. signed:
   * `{ icon: Check, type: "positive" }`).
   */
  badge?: AvatarBadge
}

export interface F0TimelineRowLogCardItemRow {
  /** File descriptor. Drives the leading avatar and the open-file action. */
  file: F0TimelineRowLogCardItemFile
  /**
   * People associated with the row (e.g. signees, reviewers). Rendered as a
   * stacked `F0AvatarList` with name + email tooltips. Fades out on row hover
   * to make space for the actions cluster.
   */
  assignees?: F0TimelineRowLogCardItemAssignee[]
  /**
   * Maximum number of avatars shown before collapsing into a counter.
   * @default 3
   */
  maxAssignees?: number
  /**
   * Optional status tag shown next to the assignees. Stays visible on hover —
   * the actions cluster never overlays it.
   */
  status?: { text: string; variant: TagStatusProps["variant"] }
  /**
   * Row-scoped actions. Rendered as `F0Button` instances revealed on row
   * hover/focus, replacing the resting assignees cluster.
   */
  actions?: F0ButtonProps[]
}

export interface F0TimelineRowLogCardItemProps {
  /**
   * File rows hosted by the bordered card. Rendered in order with a divider
   * between rows.
   */
  rows: F0TimelineRowLogCardItemRow[]
}

function splitName(name: string): { firstName: string; lastName: string } {
  const trimmed = name.trim()
  const i = trimmed.lastIndexOf(" ")
  if (i === -1) return { firstName: trimmed, lastName: "" }
  return { firstName: trimmed.slice(0, i), lastName: trimmed.slice(i + 1) }
}

const Row = ({
  file,
  assignees,
  maxAssignees = 3,
  status,
  actions,
}: F0TimelineRowLogCardItemRow) => {
  const hasActions = (actions?.length ?? 0) > 0
  const hasAssignees = assignees !== undefined && assignees.length > 0
  const hasResting = hasAssignees || Boolean(status)

  return (
    <div className="group flex items-center gap-2 px-3 py-2 hover:bg-f1-background-hover">
      <F0AvatarFile
        file={{ name: file.name, type: file.type }}
        size="sm"
        aria-hidden
      />
      <span className="min-w-0 truncate text-base text-f1-foreground">
        {file.name}
      </span>
      {file.onOpen && (
        <div className="flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
          <Tooltip label={file.openLabel ?? "Open file"}>
            <F0Button
              label={file.openLabel ?? "Open file"}
              hideLabel
              icon={EyeVisible}
              variant="neutral"
              size="sm"
              onClick={file.onOpen}
            />
          </Tooltip>
        </div>
      )}
      <div className="relative ml-auto flex flex-shrink-0 items-center">
        {hasResting && (
          <div
            className={cn(
              "flex items-center gap-2",
              hasActions &&
                "transition-opacity group-hover:opacity-0 group-focus-within:opacity-0"
            )}
          >
            {hasAssignees && (
              <F0AvatarList
                type="person"
                size="xs"
                max={maxAssignees}
                avatars={assignees!.map((a) => {
                  const { firstName, lastName } = splitName(a.name)
                  return {
                    firstName,
                    lastName,
                    src: a.src,
                    badge: a.badge,
                    tooltipDescription: a.email,
                  }
                })}
              />
            )}
            {status && (
              <F0TagStatus text={status.text} variant={status.variant} />
            )}
          </div>
        )}
        {hasActions && (
          <div
            className={cn(
              "flex items-center gap-1 transition-opacity",
              hasResting
                ? "pointer-events-none absolute inset-y-0 right-0 opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
                : "opacity-100"
            )}
          >
            {actions!.map((action, i) =>
              action.hideLabel && action.label ? (
                <Tooltip key={i} label={action.label}>
                  <F0Button {...action} />
                </Tooltip>
              ) : (
                <F0Button key={i} {...action} />
              )
            )}
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Bordered "log card" composing one or more file rows, designed to live inside
 * the `content` slot of a `F0TimelineRow` nestedtask (e.g. signature requests).
 *
 * Each row shows a file (avatar + name), an assignees cluster, an optional
 * status tag and a hover-revealed actions cluster. The status stays visible
 * on hover; assignees fade out and the actions cluster takes their place.
 */
export const F0TimelineRowLogCardItem = ({
  rows,
}: F0TimelineRowLogCardItemProps) => {
  return (
    <div className="overflow-hidden rounded-md border border-f1-border bg-f1-background [&>*+*]:border-t [&>*+*]:border-f1-border-secondary">
      {rows.map((row, i) => (
        <Row key={i} {...row} />
      ))}
    </div>
  )
}
