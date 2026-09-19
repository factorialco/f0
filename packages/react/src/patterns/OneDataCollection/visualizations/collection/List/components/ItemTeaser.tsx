import { F0Avatar } from "@/components/avatars/F0Avatar"
import { ListIconGlyph, listIconTint } from "@/lib/ListIcon"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { ListItemAvatar } from "../types"

export type ItemTeaserProps = {
  title: string
  avatar?: ListItemAvatar
  description?: string[]
}

const Glyph = ({ avatar }: { avatar: ListItemAvatar }) => {
  const tint =
    avatar.type === "icon" && avatar.color
      ? listIconTint(avatar.color)
      : undefined

  return tint && avatar.type === "icon" ? (
    <ListIconGlyph
      icon={avatar.icon}
      tint={tint}
      size="md"
      state={avatar.state}
      aria-label={avatar["aria-label"]}
      aria-labelledby={avatar["aria-labelledby"]}
    />
  ) : (
    <F0Avatar avatar={avatar} size="md" />
  )
}

export const ItemTeaser = ({ title, avatar, description }: ItemTeaserProps) => {
  return (
    <article className="flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2">
      {avatar ? <Glyph avatar={avatar} /> : null}
      <div className="flex flex-1 flex-col gap-0.5">
        <header>
          <h3>
            <OneEllipsis className="text-base font-medium text-f1-foreground">
              {title}
            </OneEllipsis>
          </h3>
        </header>
        <aside>
          {description && description.length > 0 ? (
            <div className="flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-1">
              {description.map((item, index) => (
                <div key={index} className="flex min-w-0 gap-1">
                  <OneEllipsis>{item}</OneEllipsis>
                  {index < description.length - 1 ? (
                    <span className="hidden md:inline"> · </span>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </aside>
      </div>
    </article>
  )
}
