import { ComponentProps, ReactNode } from "react"

import { F0AvatarCompany, F0AvatarCompanyProps } from "../F0AvatarCompany"
import { F0AvatarEmoji, F0AvatarEmojiProps } from "../F0AvatarEmoji"
import { F0AvatarFile, F0AvatarFileProps } from "../F0AvatarFile"
import { F0AvatarFlag, F0AvatarFlagProps } from "../F0AvatarFlag"
import { F0AvatarIcon, F0AvatarIconProps } from "../F0AvatarIcon"
import { F0AvatarPerson, F0AvatarPersonProps } from "../F0AvatarPerson"
import { F0AvatarTeam, F0AvatarTeamProps } from "../F0AvatarTeam"
import { AvatarSize } from "../internal/BaseAvatar"

export type AvatarProps = {
  avatar: AvatarVariant
  size?: AvatarSize
  dataTestId?: string
}

export type AvatarVariant =
  | ({ type: "person" } & Omit<F0AvatarPersonProps, "size">)
  | ({ type: "team" } & Omit<F0AvatarTeamProps, "size">)
  | ({ type: "company" } & Omit<F0AvatarCompanyProps, "size">)
  | ({ type: "file" } & Omit<F0AvatarFileProps, "size">)
  | ({ type: "flag" } & Omit<F0AvatarFlagProps, "size">)
  | ({ type: "emoji" } & Omit<F0AvatarEmojiProps, "size">)
  | ({ type: "icon" } & Omit<F0AvatarIconProps, "size">)

export const F0Avatar = ({
  avatar,
  size = "xs",
  dataTestId,
}: AvatarProps): ReactNode => {
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
          deactivated={avatar.deactivated}
          dataTestId={dataTestId}
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
          dataTestId={dataTestId}
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
          dataTestId={dataTestId}
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
          dataTestId={dataTestId}
        />
      )
    case "flag":
      return (
        <F0AvatarFlag
          flag={avatar.flag}
          size={size as ComponentProps<typeof F0AvatarFile>["size"]}
          badge={avatar.badge}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
          dataTestId={dataTestId}
        />
      )
    case "emoji":
      return (
        <F0AvatarEmoji
          emoji={avatar.emoji}
          size={size as ComponentProps<typeof F0AvatarEmoji>["size"]}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
          dataTestId={dataTestId}
        />
      )
    case "icon":
      return (
        <F0AvatarIcon
          icon={avatar.icon}
          size={size as ComponentProps<typeof F0AvatarIcon>["size"]}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
          dataTestId={dataTestId}
        />
      )
  }
}
