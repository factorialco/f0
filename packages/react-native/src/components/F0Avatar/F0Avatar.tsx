import { type ReactNode } from "react"

import {
  F0_AVATAR_INTERNAL_SIZE_TO_FLAG_SIZE,
  F0_AVATAR_INTERNAL_SIZE_TO_MODULE_SIZE,
  F0_AVATAR_INTERNAL_SIZE_TO_UTILITY_SIZE,
  F0_AVATAR_SIZE_TO_INTERNAL_SIZE,
} from "./F0Avatar.constants"
import { type F0AvatarProps } from "./F0Avatar.types"
import { F0AvatarAlert } from "./F0AvatarAlert"
import { F0AvatarCompany } from "./F0AvatarCompany"
import { F0AvatarDate } from "./F0AvatarDate"
import { F0AvatarEmoji } from "./F0AvatarEmoji"
import { F0AvatarFile } from "./F0AvatarFile"
import { F0AvatarFlag } from "./F0AvatarFlag"
import { F0AvatarIcon } from "./F0AvatarIcon"
import { F0AvatarList } from "./F0AvatarList"
import { F0AvatarModule } from "./F0AvatarModule"
import { F0AvatarPerson } from "./F0AvatarPerson"
import { F0AvatarTeam } from "./F0AvatarTeam"

const F0AvatarRoot = ({ avatar, size = "xs" }: F0AvatarProps): ReactNode => {
  const internalSize = F0_AVATAR_SIZE_TO_INTERNAL_SIZE[size]
  const utilitySize = F0_AVATAR_INTERNAL_SIZE_TO_UTILITY_SIZE[internalSize]
  const flagSize = F0_AVATAR_INTERNAL_SIZE_TO_FLAG_SIZE[internalSize]
  const moduleSize = F0_AVATAR_INTERNAL_SIZE_TO_MODULE_SIZE[internalSize]

  switch (avatar.type) {
    case "person":
      return (
        <F0AvatarPerson
          firstName={avatar.firstName}
          lastName={avatar.lastName}
          src={avatar.src}
          size={size}
          badge={avatar.badge}
          deactivated={avatar.deactivated}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
        />
      )
    case "team":
      return (
        <F0AvatarTeam
          name={avatar.name}
          src={avatar.src}
          size={size}
          badge={avatar.badge}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
        />
      )
    case "company":
      return (
        <F0AvatarCompany
          name={avatar.name}
          src={avatar.src}
          size={size}
          badge={avatar.badge}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
        />
      )
    case "emoji":
      return <F0AvatarEmoji emoji={avatar.emoji} size={utilitySize} />
    case "file":
      return (
        <F0AvatarFile file={avatar.file} size={size} badge={avatar.badge} />
      )
    case "icon":
      return <F0AvatarIcon icon={avatar.icon} size={utilitySize} />
    case "flag":
      return (
        <F0AvatarFlag flag={avatar.flag} size={flagSize} badge={avatar.badge} />
      )
    case "alert":
      return <F0AvatarAlert alertType={avatar.alertType} size={utilitySize} />
    case "date":
      return <F0AvatarDate date={avatar.date} />
    case "module":
      return <F0AvatarModule module={avatar.module} size={moduleSize} />
  }
}

F0AvatarRoot.displayName = "F0Avatar"
F0AvatarPerson.displayName = "F0Avatar.Person"
F0AvatarTeam.displayName = "F0Avatar.Team"
F0AvatarCompany.displayName = "F0Avatar.Company"
F0AvatarEmoji.displayName = "F0Avatar.Emoji"
F0AvatarFile.displayName = "F0Avatar.File"
F0AvatarIcon.displayName = "F0Avatar.Icon"
F0AvatarFlag.displayName = "F0Avatar.Flag"
F0AvatarAlert.displayName = "F0Avatar.Alert"
F0AvatarDate.displayName = "F0Avatar.Date"
F0AvatarModule.displayName = "F0Avatar.Module"
F0AvatarList.displayName = "F0Avatar.List"

type F0AvatarNamespace = typeof F0AvatarRoot & {
  Person: typeof F0AvatarPerson
  Team: typeof F0AvatarTeam
  Company: typeof F0AvatarCompany
  Emoji: typeof F0AvatarEmoji
  File: typeof F0AvatarFile
  Icon: typeof F0AvatarIcon
  Flag: typeof F0AvatarFlag
  Alert: typeof F0AvatarAlert
  Date: typeof F0AvatarDate
  Module: typeof F0AvatarModule
  List: typeof F0AvatarList
}

/**
 * Namespaced `F0Avatar` API entry point.
 *
 * Use `F0Avatar.*` semantic variants in product code,
 * or pass an `avatar` discriminated union to the root for polymorphic rendering.
 */
const F0Avatar = Object.assign(F0AvatarRoot, {
  Person: F0AvatarPerson,
  Team: F0AvatarTeam,
  Company: F0AvatarCompany,
  Emoji: F0AvatarEmoji,
  File: F0AvatarFile,
  Icon: F0AvatarIcon,
  Flag: F0AvatarFlag,
  Alert: F0AvatarAlert,
  Date: F0AvatarDate,
  Module: F0AvatarModule,
  List: F0AvatarList,
}) as F0AvatarNamespace

export {
  F0Avatar,
  F0AvatarRoot,
  F0AvatarPerson,
  F0AvatarTeam,
  F0AvatarCompany,
  F0AvatarEmoji,
  F0AvatarFile,
  F0AvatarIcon,
  F0AvatarFlag,
  F0AvatarAlert,
  F0AvatarDate,
  F0AvatarModule,
  F0AvatarList,
}
