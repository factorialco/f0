import { F0Button } from "@/components/F0Button"
import { type IconType } from "@/components/F0Icon"

interface ToolbarButtonProps {
  label: string
  icon: IconType
  onClick: () => void
  size?: "sm" | "md"
}

export const ToolbarButton = ({
  label,
  icon,
  onClick,
  size = "md",
}: ToolbarButtonProps) => {
  return (
    <F0Button
      label={label}
      icon={icon}
      onClick={onClick}
      hideLabel
      variant="outline"
      size={size}
    />
  )
}
