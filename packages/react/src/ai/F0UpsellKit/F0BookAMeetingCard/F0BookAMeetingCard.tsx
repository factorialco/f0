import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { F0Button } from "@/components/F0Button"
import { useI18n } from "@/lib/providers/i18n"
import { Card, CardContent, CardFooter } from "@/ui/Card"

import type { BookAMeetingCardAvatar } from "./types"

import { F0BookAMeetingCardProps } from "./types"

export const F0BookAMeetingCard = ({
  onAction,
  actionHref,
}: F0BookAMeetingCardProps) => {
  const translations = useI18n()
  const bookAMeeting = translations?.ai?.growth?.bookAMeetingCard
  const title = bookAMeeting?.title ?? ""
  const schedule = bookAMeeting?.schedule ?? ""
  const actionLabel = bookAMeeting?.actionLabel ?? ""

  const defaultAvatars: BookAMeetingCardAvatar[] = [
    { firstName: "Alex", lastName: "Morgan" },
    { firstName: "Jordan", lastName: "Lee" },
    { firstName: "Sam", lastName: "Taylor" },
    { firstName: "Casey", lastName: "Brown" },
    { firstName: "Riley", lastName: "Davis" },
  ]
  return (
    <Card className="flex flex-col overflow-hidden">
      <CardContent className="flex flex-col gap-3 p-0">
        <F0AvatarList
          type="person"
          avatars={defaultAvatars.map((avatar) => ({
            type: "person",
            firstName: avatar.firstName,
            lastName: avatar.lastName,
            src: avatar.src,
          }))}
          max={3}
          remainingCount={0}
          size="md"
          noTooltip
        />
        <div className="flex flex-col gap-0.5">
          <h3 className="text-base font-semibold text-f1-foreground">
            {title}
          </h3>
          <p className="text-sm text-f1-foreground-secondary">{schedule}</p>
        </div>
      </CardContent>
      <CardFooter className="-mx-4 -mb-4 mt-4 flex justify-end rounded-b-xl border-0 border-t border-t-f1-border bg-f1-background-secondary px-4 py-3">
        {actionHref ? (
          <F0Button
            variant="default"
            size="md"
            label={actionLabel}
            href={actionHref}
            target="_blank"
          />
        ) : (
          <F0Button
            type="button"
            variant="default"
            size="md"
            label={actionLabel}
            onClick={onAction}
          />
        )}
      </CardFooter>
    </Card>
  )
}
