import { AvatarVariant, F0Avatar } from "@/components/avatars/F0Avatar"
import { Briefcase, Globe, Marker, Shield } from "@/icons/app"

import type { F0AudienceEntity } from "../types"

/**
 * Single source of audience-kind iconography. Individuals, teams and legal
 * entities use their semantic avatars; the remaining group kinds render as
 * icon tiles.
 */
export const getAudienceEntityAvatar = (
  entity: F0AudienceEntity
): AvatarVariant => {
  switch (entity.kind) {
    case "individual":
      return {
        type: "person",
        firstName: entity.firstName,
        lastName: entity.lastName,
        src: entity.src,
      }
    case "team":
      return { type: "team", name: entity.name }
    case "legal_entity":
      return { type: "company", name: entity.name }
    case "workplace":
      return { type: "icon", icon: Marker }
    case "role":
      return { type: "icon", icon: Briefcase }
    case "permission_group":
      return { type: "icon", icon: Shield }
    case "everyone":
      return { type: "icon", icon: Globe }
  }
}

export const AudienceAvatar = ({
  entity,
  size,
}: {
  entity: F0AudienceEntity
  size?: "xs" | "sm" | "md"
}) => <F0Avatar avatar={getAudienceEntityAvatar(entity)} size={size} />
