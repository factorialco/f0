import { EntitySelectEntity, EntitySelectSubEntity } from "./types"

export const mapEntitySelectEntityToSubentity = (original: EntitySelectEntity) => {
  return {
    subId: original.id,
    subName: original.name,
    subAvatar: original.avatar,
  } as EntitySelectSubEntity
}
