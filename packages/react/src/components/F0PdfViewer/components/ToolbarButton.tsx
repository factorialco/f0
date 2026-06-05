import { F0Button } from "@/components/F0Button"
import { type IconType } from "@/components/F0Icon"

interface ToolbarButtonProps {
  label: string
  icon: IconType
  onClick: () => void
}

export const ToolbarButton = ({ label, icon, onClick }: ToolbarButtonProps) => {
  return (
    <F0Button
      label={label}
      icon={icon}
      onClick={onClick}
      hideLabel
      variant="outline"
      size="md"
    />
  )
}
