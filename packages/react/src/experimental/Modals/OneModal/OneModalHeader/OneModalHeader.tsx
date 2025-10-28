import { ButtonInternal } from "@/components/F0Button/internal"
import { ModuleId } from "@/components/avatars/F0AvatarModule"
import {
  DropdownInternal,
  DropdownInternalProps,
} from "@/experimental/Navigation/Dropdown/internal"
import { BreadcrumbItem } from "@/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbItem"
import CrossIcon from "@/icons/app/Cross"
import { cn } from "@/lib/utils"
import { BreadcrumbList } from "@/ui/breadcrumb"
import { DialogTitle } from "@/ui/dialog"
import { DrawerTitle } from "@/ui/drawer"
import { useOneModal } from "../OneModalProvider"
import { ContentPadding } from "../types"

export type OneModalHeaderProps = {
  title?: string
  /**
   * Module configuration for the header. Only works when modal position is set to "right".
   * Displays module icon and name in the header.
   */
  module?: {
    id: ModuleId
    label: string
    href: string
  }
  otherActions?: DropdownInternalProps["items"]
}

const classesByContentPadding: Record<ContentPadding, string> = {
  sm: "py-3 px-4",
  md: "p-5 pb-3",
}

export const OneModalHeader = ({
  title,
  module,
  otherActions,
}: OneModalHeaderProps) => {
  const {
    onClose,
    shownBottomSheet,
    position: modalPosition,
    contentPadding,
  } = useOneModal()

  const dialogClassName = cn(
    "font-semibold text-f1-foreground",
    modalPosition === "center" ? "text-lg" : "text-xl"
  )

  const Divider = () => {
    return <div className="h-4 w-px self-center bg-f1-background-secondary" />
  }

  const otherActionItems =
    otherActions?.filter((action) => action.type !== "separator") ?? []

  const Actions = () => {
    if (!otherActionItems.length || !otherActions) return null

    if (otherActionItems.length <= 2) {
      return (
        <div className="flex flex-row gap-2">
          {otherActionItems.map((action) => (
            <ButtonInternal
              key={action.label}
              variant="outline"
              icon={action.icon}
              onClick={action.onClick}
              label={action.label}
              hideLabel
            />
          ))}
        </div>
      )
    }

    return <DropdownInternal items={otherActions} />
  }

  const Module = () => {
    if (!module) return null

    return (
      <BreadcrumbList>
        <BreadcrumbItem
          item={{
            id: module.id,
            label: module.label,
            href: module.href,
            module: module.id,
          }}
          isLast={false}
          isFirst={true}
        />
      </BreadcrumbList>
    )
  }

  const containerClassName = cn(
    "flex flex-col gap-3 bg-f1-background",
    classesByContentPadding[contentPadding]
  )

  if (module && !shownBottomSheet) {
    return (
      <div className={containerClassName}>
        <div className="flex flex-row justify-between">
          {module ? <Module /> : <Actions />}
          <div className="flex flex-row gap-2">
            {module && (
              <>
                <Actions />
                {otherActions && <Divider />}
              </>
            )}
            <ButtonInternal
              variant="outline"
              icon={CrossIcon}
              onClick={onClose}
              label="Close modal"
              hideLabel
            />
          </div>
        </div>
        {!!title && (
          <DialogTitle className={cn(dialogClassName, "text-2xl")}>
            {title}
          </DialogTitle>
        )}
      </div>
    )
  }

  return (
    <div className={containerClassName}>
      <div className="flex flex-row items-center justify-between">
        {!shownBottomSheet ? (
          !!title && (
            <DialogTitle className={dialogClassName}>{title}</DialogTitle>
          )
        ) : (
          <>
            {module ? (
              <Module />
            ) : (
              <DrawerTitle className={dialogClassName}>{title}</DrawerTitle>
            )}
          </>
        )}
        <div className="flex flex-row gap-2">
          <Actions />
          {otherActions && <Divider />}
          <ButtonInternal
            variant="outline"
            icon={CrossIcon}
            onClick={onClose}
            label="Close modal"
            hideLabel
          />
        </div>
      </div>
      {module && !!title && (
        <DrawerTitle className={dialogClassName}>{title}</DrawerTitle>
      )}
    </div>
  )
}
