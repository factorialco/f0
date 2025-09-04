import { ComponentProps, ReactNode } from "react"
import { AvatarSize } from "../BaseAvatar"
import { F0AvatarCompany, F0AvatarCompanyProps } from "../F0AvatarCompany"
import { F0AvatarFile, F0AvatarFileProps } from "../F0AvatarFile"
import { F0AvatarPerson, F0AvatarPersonProps } from "../F0AvatarPerson"
import { F0AvatarTeam, F0AvatarTeamProps } from "../F0AvatarTeam"

export type AvatarProps = {
  avatar: AvatarVariant
  size?: AvatarSize
}

export type AvatarVariant =
  | ({ type: "person" } & Omit<F0AvatarPersonProps, "size">)
  | ({ type: "team" } & Omit<F0AvatarTeamProps, "size">)
  | ({ type: "company" } & Omit<F0AvatarCompanyProps, "size">)
  | ({ type: "file" } & Omit<F0AvatarFileProps, "size">)

export const F0Avatar = ({ avatar, size = "xs" }: AvatarProps): ReactNode => {
  switch (avatar.type) {
    case "person":
      return (
        <F0AvatarPerson
          firstName={avatar.firstName}
          lastName={avatar.lastName}
          badge={avatar.badge}
          src={avatar.src}
          size={size}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
        />
      )
    case "team":
      return (
        <F0AvatarTeam
          name={avatar.name}
          src={avatar.src}
          badge={avatar.badge}
          size={size}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
        />
      )
    case "company":
      return (
        <F0AvatarCompany
          name={avatar.name}
          src={avatar.src}
          badge={avatar.badge}
          size={size}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
        />
      )
    case "file":
      return (
        <F0AvatarFile
          file={avatar.file}
          size={size as ComponentProps<typeof F0AvatarFile>["size"]}
          badge={avatar.badge}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
        />
      )
  }
}
