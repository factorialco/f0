import { ButtonInternal } from "@/components/F0Button/internal"
import {
  DropdownInternal,
  DropdownItemObject,
} from "@/experimental/Navigation/Dropdown/internal"
import { BreadcrumbItem } from "@/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbItem"
import { Tabs } from "@/experimental/Navigation/Tabs"
import CrossIcon from "@/icons/app/Cross"
import { cn } from "@/lib/utils"
import { BreadcrumbList } from "@/ui/breadcrumb"
import { DialogTitle } from "@/ui/Dialog/dialog"
import { DrawerDescription } from "@/ui/drawer"
import { F0ModalHeaderProps } from "../internal-types"
import { useF0Modal } from "./F0ModalProvider"

export const F0ModalHeader = ({
  title,
  description,
  module,
  otherActions,
  tabs,
  activeTabId,
  setActiveTabId,
}: F0ModalHeaderProps) => {
  const { onClose } = useF0Modal()
  const hasTabs = !!tabs

  const Divider = () => {
    return <div className="h-4 w-px self-center bg-f1-background-secondary" />
  }

  const otherActionItems =
    otherActions?.filter(
      (action): action is DropdownItemObject =>
        action.type !== "separator" && action.type !== "label"
    ) ?? []

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

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-start justify-between gap-3 px-4 py-3",
          !hasTabs &&
            "border border-x-0 border-b border-t-0 border-solid border-f1-border-secondary"
        )}
      >
        <div className="flex flex-col gap-1">
          {module ? (
            <Module />
          ) : (
            title && (
              <DialogTitle className="py-1 text-lg font-semibold text-f1-foreground">
                {title}
              </DialogTitle>
            )
          )}
          {!!description && (
            <DrawerDescription className="text-base text-f1-foreground-secondary">
              {description}
            </DrawerDescription>
          )}
        </div>
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
      {tabs && (
        <div className="-mx-2">
          <Tabs
            tabs={tabs}
            activeTabId={activeTabId}
            setActiveTabId={setActiveTabId}
          />
        </div>
      )}
    </>
  )
}
