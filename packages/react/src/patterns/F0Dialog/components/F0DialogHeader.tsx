import { ButtonInternal } from "@/components/F0Button/internal"
import {
  DropdownInternal,
  DropdownItemObject,
} from "@/experimental/Navigation/Dropdown/internal"
import { BaseHeader } from "@/experimental/Information/Headers/BaseHeader"
import { BreadcrumbItem } from "@/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbItem"
import { PageNavigation } from "@/experimental/Navigation/Header/PageNavigation"
import { Tabs } from "@/patterns/Navigation/Tabs"
import CrossIcon from "@/icons/app/Cross"
import { ChevronLeft, Ellipsis, Maximize } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { BreadcrumbList } from "@/ui/breadcrumb"
import { DialogTitle } from "@/ui/Dialog/dialog"
import { DrawerDescription } from "@/ui/drawer"

import { F0DialogHeaderProps } from "../internal-types"
import { useF0Dialog } from "./F0DialogProvider"

export const F0DialogHeader = ({
  title,
  description,
  module,
  otherActions,
  navigation,
  resourceHeader,
  controls,
  tabs,
  activeTabId,
  setActiveTabId,
}: F0DialogHeaderProps) => {
  const translations = useI18n()

  const { onClose } = useF0Dialog()
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

    const hasCriticalAction = otherActionItems.some((action) => action.critical)

    if (otherActionItems.length <= 2 && !hasCriticalAction) {
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

    return <DropdownInternal items={otherActions} icon={Ellipsis} />
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

  const CloseButton = () => (
    <ButtonInternal
      variant="outline"
      icon={CrossIcon}
      onClick={onClose}
      label={translations.actions.close}
      hideLabel
    />
  )

  const TabsStrip = () =>
    tabs ? (
      <div className="-mx-2">
        <Tabs
          tabs={tabs}
          activeTabId={activeTabId}
          setActiveTabId={setActiveTabId}
        />
      </div>
    ) : null

  const Controls = () => {
    if (!controls) return null

    if (controls.kind === "back") {
      return (
        <ButtonInternal
          variant="outline"
          icon={ChevronLeft}
          onClick={controls.onClick}
          label={controls.label}
        />
      )
    }

    return (
      <>
        {controls.expand && (
          <ButtonInternal
            variant="outline"
            icon={Maximize}
            onClick={controls.expand.onClick}
            label={controls.expand.label}
          />
        )}
        {controls.expand && controls.navigation && <Divider />}
        {controls.navigation && <PageNavigation {...controls.navigation} />}
      </>
    )
  }

  // `navigation` alone is intentionally excluded so legacy title/module dialogs stay on the branch below.
  if (resourceHeader || controls) {
    return (
      <>
        <div className="flex flex-row items-center justify-between gap-3 px-4 py-3">
          <div className="flex flex-row items-center gap-2">
            <Controls />
          </div>
          <div className="flex flex-row items-center gap-2">
            <Actions />
            <CloseButton />
          </div>
        </div>
        {/* BaseHeader shows the title as a styled span, so emit a visually-hidden DialogTitle for the accessible name. */}
        {resourceHeader ? (
          <>
            <DialogTitle className="sr-only">
              {resourceHeader.title}
            </DialogTitle>
            <BaseHeader {...resourceHeader} />
          </>
        ) : (
          title && <DialogTitle className="sr-only">{title}</DialogTitle>
        )}
        <TabsStrip />
      </>
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
        <div className="flex flex-row items-center gap-3">
          {(module || title || !!description) && (
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
          )}
        </div>
        <div className="flex flex-row items-center gap-2">
          {navigation && <PageNavigation {...navigation} />}
          <Actions />
          {(navigation || otherActions) && <Divider />}
          <CloseButton />
        </div>
      </div>
      <TabsStrip />
    </>
  )
}
