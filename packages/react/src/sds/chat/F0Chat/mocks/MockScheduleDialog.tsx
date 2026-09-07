import { useState, type ReactNode } from "react"

import { F0DatePicker } from "@/components/F0DatePicker"
import { F0Select } from "@/components/F0Select"
import { F0TextInput } from "@/components/F0TextInput"
import { useI18n } from "@/lib/providers/i18n"
import { F0Dialog } from "@/patterns/F0Dialog"

import {
  asDayValue,
  combineDateAndTime,
  dayValueOf,
  timeOf,
  timezoneAbbreviation,
} from "./mockPostComposerUtils"
import { type MockCommunityOption } from "./mockPostComposerTypes"

/**
 * "Publish this, but later."
 *
 * The timezone is SHOWN and not editable, which looks like an omission and
 * isn't: a scheduled post goes out at a wall-clock time in the author's own
 * zone, and offering a picker would invite them to answer a question the system
 * never asks. Naming the zone is what stops them wondering.
 */
export const ScheduleDialog = ({
  communities,
  communityId,
  submitting,
  onCommunityChange,
  onConfirm,
  onClose,
}: {
  communities: MockCommunityOption[]
  communityId: string | null
  submitting: boolean
  onCommunityChange: (id: string) => void
  onConfirm: (at: string) => void
  onClose: () => void
}): ReactNode => {
  const i18n = useI18n()
  const now = new Date()
  const [date, setDate] = useState<Date | undefined>(now)
  const [time, setTime] = useState(timeOf(now))

  const canConfirm = !!date && !!time && !!communityId && !submitting

  return (
    <F0Dialog
      isOpen
      onClose={onClose}
      width="sm"
      title={i18n.t("communities.composer.schedulePost")}
      primaryAction={{
        label: i18n.t("communities.composer.confirm"),
        onClick: () => {
          if (!date) return
          onConfirm(combineDateAndTime(date, time))
        },
        disabled: !canConfirm,
        loading: submitting,
      }}
      secondaryAction={{
        label: i18n.t("communities.composer.cancel"),
        onClick: onClose,
        disabled: submitting,
      }}
    >
      <div className="flex flex-col gap-4">
        <F0Select
          label={i18n.t("communities.composer.selectCommunity")}
          placeholder={i18n.t("communities.composer.selectCommunity")}
          value={communityId ?? undefined}
          onChange={onCommunityChange}
          disabled={submitting}
          options={communities.map((community) => ({
            value: community.id,
            label: community.title,
          }))}
        />
        <div className="flex items-end gap-4">
          <div className="flex-1">
            <F0DatePicker
              label={i18n.t("communities.composer.scheduleDate")}
              value={date ? asDayValue(date) : undefined}
              onChange={(next) => setDate(dayValueOf(next) ?? undefined)}
              minDate={now}
              granularities={["day"]}
              size="sm"
            />
          </div>
          <div className="flex-1">
            <F0TextInput
              type="time"
              label={i18n.t("communities.composer.scheduleTime")}
              value={time}
              onChange={setTime}
              disabled={submitting}
            />
          </div>
          <span className="pb-2 text-sm font-medium text-f1-foreground-secondary">
            {timezoneAbbreviation()}
          </span>
        </div>
      </div>
    </F0Dialog>
  )
}
