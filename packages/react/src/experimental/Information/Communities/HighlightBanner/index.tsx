import { F0Button } from "@/components/F0Button"
import { F0AvatarModule } from "@/components/avatars/F0AvatarModule"

type HighlightBannerProps = {
  title: string
  subtitle: string
  buttonLabel: string
  onClick?: () => void
}

export const HighlightBanner = ({
  title,
  subtitle,
  buttonLabel,
  onClick,
}: HighlightBannerProps) => {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <F0AvatarModule module="kudos" size="lg" />
        <div className="flex flex-col">
          <span className="font-medium text-f1-foreground">{title}</span>
          <span className="text-f1-foreground-secondary">{subtitle}</span>
        </div>
      </div>
      <div className="w-full sm:w-fit [&>div]:w-full">
        <F0Button label={buttonLabel} variant="outline" onClick={onClick} />
      </div>
    </div>
  )
}
