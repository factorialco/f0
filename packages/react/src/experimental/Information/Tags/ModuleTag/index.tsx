import { IconType } from "@/components/Utilities/Icon"
import { Home } from "@/icons/modules"
import { useTextFormatEnforcer } from "@/lib/text"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { ModuleAvatar } from "../../ModuleAvatar"
import { BaseTag } from "../BaseTag"

type Props = {
  moduleName: string
  icon: IconType
  onClick?: () => void
}

export const ModuleTag = forwardRef<HTMLDivElement, Props>(
  ({ moduleName, icon = Home, onClick }, ref) => {
    useTextFormatEnforcer(moduleName, { disallowEmpty: true })

    return (
      <BaseTag
        ref={ref}
        className={cn(
          "gap-1 rounded-[8px] border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]"
        )}
        left={<ModuleAvatar icon={icon} size="sm" />}
        text={moduleName}
        onClick={onClick}
      />
    )
  }
)

ModuleTag.displayName = "ModuleTag"
