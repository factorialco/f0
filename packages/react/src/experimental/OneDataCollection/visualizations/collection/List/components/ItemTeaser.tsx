import { AvatarVariant, F0Avatar } from "@/components/avatars/F0Avatar"
import { OneEllipsis } from "@/components/OneEllipsis"

export type ItemTeaserProps = {
  title: string
  avatar?: AvatarVariant
  description?: string[]
}

export const ItemTeaser = ({ title, avatar, description }: ItemTeaserProps) => {
  return (
    <article className="flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2">
      {avatar && <F0Avatar avatar={avatar} size="md" />}
      <div className="flex flex-1 flex-col gap-0.5">
        <header>
          <h3>
            <OneEllipsis className="text-base font-medium text-f1-foreground">
              {title}
            </OneEllipsis>
          </h3>
        </header>
        <aside>
          {description && description.length > 0 && (
            <div className="flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-1">
              {description.map((item, index) => (
                <div key={index} className="flex min-w-0 gap-1">
                  <OneEllipsis>{item}</OneEllipsis>
                  {index < description.length - 1 && (
                    <span className="hidden md:inline"> · </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </aside>
      </div>
    </article>
  )
}
