import { F0ButtonToggle } from "@/components/F0ButtonToggle"
import { EyeInvisible, EyeVisible } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

export type PasswordVisibilityToggleProps = {
  value: boolean
  onChange?: (value: boolean) => void
}

export const PasswordVisibilityToggle = ({
  value,
  onChange,
}: PasswordVisibilityToggleProps) => {

  const i18n = useI18n()
  return (
    <F0ButtonToggle
      label={[i18n.inputs.password.show, i18n.inputs.password.hide]}
      icon={[EyeInvisible, EyeVisible]}
      selected={value}
      size="sm"
      onSelectedChange={(value) => {
        onChange?.(Boolean(value))
      }}
    />
  )
}
