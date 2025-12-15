import { ModuleId } from "@/components/avatars/F0AvatarModule"
import { ButtonInternal } from "@/components/F0Button/internal"
import {
  DropdownInternal,
  DropdownInternalProps,
} from "@/experimental/Navigation/Dropdown/internal"
import { BreadcrumbItem } from "@/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbItem"
import CrossIcon from "@/icons/app/Cross"
import { cn } from "@/lib/utils"
import { BreadcrumbList } from "@/ui/breadcrumb"
import { DialogDescription, DialogTitle } from "@/ui/Dialog/dialog"
import { DrawerDescription, DrawerTitle } from "@/ui/drawer"
import { useOneModal } from "../OneModalProvider"
import { ContentPadding, ModalPosition } from "../types"

export type OneModalHeaderProps = {
  title?: string
  description?: string
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

const Titles = ({
  title,
  description,
  context,
}: {
  title?: string
  description?: string
  context: { position: ModalPosition }
}) => {
  const titleClassName = cn(
    "font-semibold text-f1-foreground",
    context.position === "center" ? "text-lg" : "text-xl"
  )
  const descriptionClassName = cn(
    "text-f1-foreground-secondary",
    context.position === "center" ? "text-base" : "text-lg"
  )
  return title || description ? (
    <div className="flex flex-col gap-1">
      {!!title && <DialogTitle className={titleClassName}>{title}</DialogTitle>}
      {!!description && (
        <DialogDescription className={descriptionClassName}>{description}</DialogDescription>
      )}
    </div>
  ) : null
}

export const OneModalHeader = ({
  title,
  description,
  module,
  otherActions,
}: OneModalHeaderProps) => {
  const { onClose, shownBottomSheet, position: modalPosition, contentPadding } = useOneModal()

  const Divider = () => {
    return <div className="h-4 w-px self-center bg-f1-background-secondary" />
  }

  const otherActionItems = otherActions?.filter((action) => action.type !== "separator") ?? []

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

  const containerClassName = cn("flex flex-col gap-3", classesByContentPadding[contentPadding])

  const drawerTitleClassName = cn(
    "font-semibold text-f1-foreground",
    modalPosition === "center" ? "text-lg" : "text-xl"
  )
  const drawerDescriptionClassName = cn(
    "text-f1-foreground-secondary",
    modalPosition === "center" ? "text-base" : "text-lg"
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
        <Titles title={title} description={description} context={{ position: modalPosition }} />
      </div>
    )
  }

  return (
    <div className={containerClassName}>
      <div className="flex flex-row items-center justify-between">
        {!shownBottomSheet ? (
          <Titles title={title} description={description} context={{ position: modalPosition }} />
        ) : (
          <>
            {module ? (
              <Module />
            ) : (
              <DrawerTitle className={drawerTitleClassName}>{title}</DrawerTitle>
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
      {module && !!title && <DrawerTitle className={drawerTitleClassName}>{title}</DrawerTitle>}

      {!!description && (
        <DrawerDescription className={drawerDescriptionClassName}>{description}</DrawerDescription>
      )}
    </div>
  )
}
