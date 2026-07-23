import { Chip } from "@/components/OneChip"
import { useI18n } from "@/lib/providers/i18n"

import type { F0AudienceEntity } from "../types"
import { getAudienceEntityAvatar } from "./AudienceAvatar"

export const AudienceChip = ({
  entity,
  onRemove,
}: {
  entity: F0AudienceEntity
  onRemove: (entity: F0AudienceEntity) => void
}) => {
  const { t } = useI18n()

  return (
    <Chip
      label={entity.name}
      avatar={getAudienceEntityAvatar(entity)}
      onClose={() => onRemove(entity)}
      closeLabel={t("audience.selector.removeItem", { name: entity.name })}
    />
  )
}
