import React from "react"

import { F0_AVATAR_LIST_SIZE_TO_INTERNAL_SIZE } from "../F0Avatar.constants"
import { F0AvatarCompany } from "../F0AvatarCompany"
import { F0AvatarFile } from "../F0AvatarFile"
import { F0AvatarFlag } from "../F0AvatarFlag"
import type { AvatarListSize } from "../F0AvatarList.types"
import { F0AvatarPerson } from "../F0AvatarPerson"
import { F0AvatarTeam } from "../F0AvatarTeam"

import { getFileTypeInfo } from "./file-type"
import { AvatarRenderInput, SvgAvatarData } from "./list-types"
import { getAvatarColorByText, getAvatarInitials } from "./name"

const AVATAR_FILL: Record<string, string> = {
  viridian: "hsl(184, 92%, 35%)",
  malibu: "hsl(216, 90%, 65%)",
  yellow: "hsl(38, 92%, 54%)",
  purple: "hsl(258, 88%, 67%)",
  lilac: "hsl(340, 49%, 60%)",
  barbie: "hsl(331, 84%, 63%)",
  smoke: "hsl(192, 26%, 54%)",
  army: "hsl(162, 44%, 33%)",
  flubber: "hsl(84, 55%, 53%)",
  indigo: "hsl(239, 91%, 64%)",
  camel: "hsl(25, 46%, 53%)",
}

const FILE_TEXT_FILL: Record<string, string> = {
  accent: "hsl(347, 80%, 34%)",
  info: "hsl(216, 48%, 44%)",
  positive: "hsl(161, 84%, 27%)",
  warning: "hsl(24, 69%, 40%)",
  secondary: "hsla(217, 96%, 11%, 0.61)",
  default: "hsl(218, 48%, 10%)",
}

export function getSvgAvatarData(
  input: AvatarRenderInput,
  size: AvatarListSize
): SvgAvatarData {
  const internalSize = F0_AVATAR_LIST_SIZE_TO_INTERNAL_SIZE[size]

  switch (input.type) {
    case "person": {
      const { avatar } = input
      const { firstName, lastName } = avatar
      if (avatar.src) return { kind: "image", src: avatar.src }
      const colorName = getAvatarColorByText(firstName + lastName) ?? "viridian"
      return {
        kind: "initials",
        fill: AVATAR_FILL[colorName],
        text: getAvatarInitials([firstName, lastName], internalSize),
      }
    }
    case "team": {
      const { avatar } = input
      const { name } = avatar
      if (avatar.src) return { kind: "image", src: avatar.src }
      const colorName = getAvatarColorByText(name) ?? "viridian"
      return {
        kind: "initials",
        fill: AVATAR_FILL[colorName],
        text: getAvatarInitials(name, internalSize),
      }
    }
    case "company": {
      const { avatar } = input
      const { name } = avatar
      if (avatar.src) return { kind: "image", src: avatar.src }
      return {
        kind: "initials",
        fill: AVATAR_FILL.viridian,
        text: getAvatarInitials(name, internalSize),
      }
    }
    case "flag": {
      const { flag } = input.avatar
      return {
        kind: "image",
        src: `https://flagcdn.com/w80/${flag.toLowerCase()}.png`,
      }
    }
    case "file": {
      const { file } = input.avatar
      const { type: fileType, color: fileColor } = getFileTypeInfo(file)
      const isSmall = internalSize === "xsmall" || internalSize === "small"
      return {
        kind: "file",
        text: isSmall ? fileType[0] : fileType,
        textFill: FILE_TEXT_FILL[fileColor] ?? FILE_TEXT_FILL.default,
      }
    }
  }
}

export function renderAvatar(
  input: AvatarRenderInput,
  size: AvatarListSize
): React.ReactNode {
  switch (input.type) {
    case "person":
      return (
        <F0AvatarPerson
          firstName={input.avatar.firstName}
          lastName={input.avatar.lastName}
          src={input.avatar.src}
          size={size}
        />
      )
    case "team":
      return (
        <F0AvatarTeam
          name={input.avatar.name}
          src={input.avatar.src}
          size={size}
        />
      )
    case "company":
      return (
        <F0AvatarCompany
          name={input.avatar.name}
          src={input.avatar.src}
          size={size}
        />
      )
    case "flag":
      return <F0AvatarFlag flag={input.avatar.flag} size={size} />
    case "file":
      return <F0AvatarFile file={input.avatar.file} size={size} />
  }
}
