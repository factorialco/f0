import { F0ButtonToggle } from "@/components/F0ButtonToggle"
import { EyeInvisible, EyeVisible } from "@/icons/app"

export type PasswordVisibilityToggleProps = {
  value: boolean
  onChange?: (value: boolean) => void
}

export const PasswordVisibilityToggle = ({
  value,
  onChange,
}: PasswordVisibilityToggleProps) => {
  return (
    <F0ButtonToggle
      label="Toggle password visibility"
      icon={[EyeInvisible, EyeVisible]}
      selected={value}
      size="sm"
      onSelectedChange={(value) => {
        onChange?.(Boolean(value))
      }}
    />
  )
}
