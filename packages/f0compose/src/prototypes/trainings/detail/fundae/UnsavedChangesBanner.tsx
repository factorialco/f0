import { F0Box, F0Button, F0Icon, F0Text } from "@factorialco/f0-react"
import { AlertCircle } from "@factorialco/f0-react/icons/app"

type Props = {
  onDiscard: () => void
  onSave: () => void
}

/**
 * Smart-Surveys-style "unsaved changes" banner.
 * Appears inline when the user has modified the form but hasn't confirmed
 * those changes yet. Two clear actions: Discard or Save.
 */
export function UnsavedChangesBanner({ onDiscard, onSave }: Props) {
  return (
    <F0Box
      display="flex"
      alignItems="center"
      justifyContent="between"
      gap="md"
      background="info"
      border="default"
      borderColor="info"
      borderRadius="md"
      padding="md"
    >
      <F0Box display="flex" alignItems="center" gap="sm">
        <F0Icon icon={AlertCircle} size="md" color="info" />
        <F0Text variant="label" content="Tienes cambios sin guardar" />
      </F0Box>
      <F0Box display="flex" gap="sm">
        <F0Button label="Descartar" variant="outline" onClick={onDiscard} />
        <F0Button label="Guardar cambios" variant="default" onClick={onSave} />
      </F0Box>
    </F0Box>
  )
}
