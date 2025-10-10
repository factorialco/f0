/**
 * Avatar list cell type for displaying multiple user avatars in a collection.
 * Supports limiting the maximum number of visible avatars.
 */
import {
  CompanyAvatarVariant,
  PersonAvatarVariant,
  TeamAvatarVariant,
} from "@/components/avatars/F0Avatar"
import {
  F0AvatarList,
  F0AvatarListProps,
} from "@/components/avatars/F0AvatarList"

type AvatarListValue = {
  max?: number
} & (
  | {
      type?: "person"
      avatarList: PersonAvatarVariant[]
    }
  | {
      type: "team"
      avatarList: TeamAvatarVariant[]
    }
  | {
      type: "company"
      avatarList: CompanyAvatarVariant[]
    }
)
export type AvatarListCellValue = AvatarListValue

export const AvatarListCell = (args: AvatarListCellValue) => {
  const type = args.type ?? ("person" as const)

  return (
    <div className="pointer-events-auto w-full">
      <F0AvatarList
        {...({
          type,
          avatars: args.avatarList,
          size: "xs" as const,
          max: args.max,
        } as F0AvatarListProps)}
      />
    </div>
  )
}
