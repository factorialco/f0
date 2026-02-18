import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { F0Button } from "@/components/F0Button"
import { Calendar } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Card, CardContent, CardFooter } from "@/ui/Card"

import { F0BookAMeetingCardProps } from "./types"

export const F0BookAMeetingCard = ({
  onAction,
  actionHref,
}: F0BookAMeetingCardProps) => {
  const translations = useI18n()
  const bookAMeeting = translations?.ai?.growth?.bookAMeetingCard
  const title = bookAMeeting?.title ?? "Talk with an expert"
  const schedule = bookAMeeting?.schedule ?? "Mon-Fri · 09:00-21:00 (CEST)"
  const actionLabel = bookAMeeting?.actionLabel ?? "Book a meeting"

  return (
    <Card className="flex flex-col overflow-hidden rounded-xl">
      <CardContent className="flex flex-col gap-2 p-0">
        <F0AvatarIcon icon={Calendar} size="lg" />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-f1-foreground">{title}</h3>
          <p className="text-base text-f1-foreground-secondary">{schedule}</p>
        </div>
      </CardContent>
      <CardFooter className="relative -mx-4 mt-4 flex justify-end border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4">
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
