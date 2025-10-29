import { ButtonInternal } from "@/components/F0Button/internal"
import { ButtonSize } from "@/components/F0Button/types"
import { One } from "@/icons/special"

export type OneButtonProps = {
  label: string
  onClick: () => void
  disabled?: boolean
  loading?: boolean
  size?: ButtonSize
}

export const OneButton = ({
  label,
  onClick,
  disabled,
  loading,
  size,
}: OneButtonProps) => {
  return (
    <ButtonInternal
      label={label}
      onClick={onClick}
      disabled={disabled}
      loading={loading}
      variant="outline"
      size={size}
      icon={One}
    />
  )
}
