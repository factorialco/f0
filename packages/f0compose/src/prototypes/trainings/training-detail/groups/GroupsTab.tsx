import { F0Box, F0Button, F0Heading, F0TagStatus, F0Text } from "@factorialco/f0-react"
import { F0Icon } from "@factorialco/f0-react"
import { Calendar, Clock, Delete, Pencil, Plus } from "@factorialco/f0-react/icons/app"

import { type Training } from "@/fixtures"

import { modalityLabel } from "../../shared/status"

interface Props {
  training: Training
}

export function GroupsTab({ training }: Props) {
  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Box display="flex" justifyContent="end">
        <F0Button
          label="New group"
          variant="default"
          icon={Plus}
          onClick={() => {}}
        />
      </F0Box>

      {training.classes.length === 0 && (
        <F0Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="md"
          padding="5xl"
          background="secondary"
          borderRadius="md"
        >
          <F0Heading content="No groups yet" variant="heading" as="h3" />
          <F0Text
            content="Create a group to organise participants into specific sessions."
            variant="description"
          />
          <F0Button
            label="Create first group"
            variant="outline"
            onClick={() => {}}
          />
        </F0Box>
      )}

      {training.classes.map((cls) => (
        <F0Box
          key={cls.id}
          display="flex"
          flexDirection="column"
          gap="md"
          padding="lg"
          background="primary"
          border="default"
          borderRadius="md"
        >
          {/* Class header */}
          <F0Box display="flex" alignItems="center" gap="md">
            <F0Box grow>
              <F0Heading content={cls.name} variant="heading" as="h3" />
            </F0Box>
            <F0TagStatus
              text={modalityLabel[cls.modality] ?? cls.modality}
              variant="info"
            />
            <F0Icon
              icon={Pencil}
              size="xs"
            />
            <F0Icon
              icon={Delete}
              size="xs"
            />
          </F0Box>

          {/* Class meta */}
          <F0Box display="flex" gap="xl">
            <F0Box display="flex" alignItems="center" gap="xs">
              <F0Icon icon={Calendar} size="xs" />
              <F0Text
                content={`${cls.startDate} — ${cls.endDate}`}
                variant="small"
              />
            </F0Box>
            <F0Box display="flex" alignItems="center" gap="xs">
              <F0Icon icon={Clock} size="xs" />
              <F0Text content={`${cls.durationHours}h`} variant="small" />
            </F0Box>
            <F0Text
              content={`${cls.participantCount} participants`}
              variant="small"
            />
            {cls.cost > 0 && (
              <F0Text content={`€${cls.cost.toLocaleString()}`} variant="small" />
            )}
          </F0Box>

          {/* Sessions list */}
          <F0Box display="flex" flexDirection="column" gap="sm">
            <F0Text content="Sessions" variant="label" />
            {cls.sessions.map((sess) => (
              <F0Box
                key={sess.id}
                display="flex"
                alignItems="center"
                gap="md"
                padding="sm"
                background="secondary"
                borderRadius="sm"
              >
                <F0Box grow>
                  <F0Text content={sess.name} variant="body" />
                </F0Box>
                <F0Text
                  content={`${sess.startsAt.slice(0, 10)}, ${sess.startsAt.slice(11, 16)}–${sess.endsAt.slice(11, 16)}`}
                  variant="small"
                />
                <F0Text
                  content={modalityLabel[sess.modality] ?? sess.modality}
                  variant="small"
                />
                {sess.location && (
                  <F0Text content={sess.location} variant="small" />
                )}
              </F0Box>
            ))}
            <F0Button
              label="Add session"
              variant="neutral"
              icon={Plus}
              onClick={() => {}}
            />
          </F0Box>
        </F0Box>
      ))}
    </F0Box>
  )
}
