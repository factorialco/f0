import { avatarSizes } from "../types"

export const baseAvatarArgTypes = {
  size: {
    control: "select",
    options: avatarSizes,
    description: "The size of the avatar",
    table: {
      type: {
        summary: "AvatarSize",
      },
    },
  },
  "aria-label": {
    control: "text",
    description: "The label for the avatar",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  "aria-labelledby": {
    control: "text",
    description: "The id of the element that labels the avatar",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  badge: {
    control: "object",
    description: "The badge to display on the avatar",
    table: {
      type: {
        summary: "AvatarBadge",
      },
    },
  },
}

export const getBaseAvatarArgTypes = (include: string[]) => {
  return Object.fromEntries(
    Object.entries(baseAvatarArgTypes).filter(
      ([key]) => include.includes(key) || include.length === 0
    )
  )
}
