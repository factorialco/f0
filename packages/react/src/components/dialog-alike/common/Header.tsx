import { ButtonInternal } from "@/components/F0Button/internal"
import {
  DropdownInternal,
  DropdownInternalProps,
  DropdownItemObject,
} from "@/experimental/Navigation/Dropdown/internal"
import { BaseHeader } from "@/experimental/Information/Headers/BaseHeader"
import { BreadcrumbItem } from "@/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbItem"
import {
  NavigationProps,
  PageNavigation,
} from "@/experimental/Navigation/Header/PageNavigation"
import { ResourceHeaderProps } from "@/patterns/ResourceHeader"
import { ChevronLeft, Maximize } from "@/icons/app"
import CrossIcon from "@/icons/app/Cross"
import { DialogModule } from "@/lib/providers/dialogs-alike/module-types"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Tabs, TabsProps } from "@/patterns/Navigation/Tabs"
import { BreadcrumbList } from "@/ui/breadcrumb"
import { DialogTitle } from "@/ui/Dialog/dialog"
import { DrawerDescription } from "@/ui/drawer"

import { useDialogWrapperContext } from "./DialogWrapperProvider"

export type DrawerControls =
  | {
      kind: "resource"
      expand?: { label: string; url?: string; onClick?: () => void }
      navigation?: NavigationProps
    }
  | {
      kind: "back"
      label: string
      onClick: () => void
    }

export type HeaderProps = {
  /**
   * Disables the close button of the dialog.
   * @internal
   */
  disableClose?: boolean
  title?: string
  description?: string
  module?: DialogModule
  otherActions?: DropdownInternalProps["items"]
  /** Side-panel navigation rendered in the title row, next to the close button. */
  navigation?: NavigationProps
  /** Resource identity band rendered below the controls row (drawers only). */
  resourceHeader?: ResourceHeaderProps
  /** Controls the left slot of the controls row — back or resource (expand + prev/next). */
  controls?: DrawerControls
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>

export const Header = ({
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
  disableClose,
}: HeaderProps) => {
  const translations = useI18n()

  const { onClose } = useDialogWrapperContext()
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

  const CloseButton = () => (
    <ButtonInternal
      variant="outline"
      icon={CrossIcon}
      disabled={disableClose}
      onClick={onClose}
      label={translations.actions.close}
      hideLabel
    />
  )

  const TabsStrip = () =>
    tabs && tabs.length > 0 ? (
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

    const expandElementProps = controls.expand?.onClick
      ? { onClick: controls.expand.onClick, type: "button" as const }
      : { href: controls.expand?.url ?? "" }

    return (
      <>
        {controls.expand && (
          <ButtonInternal
            variant="outline"
            icon={Maximize}
            {...expandElementProps}
            label={controls.expand.label}
          />
        )}
        {controls.expand && controls.navigation && <Divider />}
        {controls.navigation && (
          <PageNavigation {...controls.navigation} counterPosition="end" />
        )}
      </>
    )
  }

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
        {resourceHeader ? (
          <>
            <DialogTitle className="sr-only">
              {resourceHeader.title ?? title}
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
          {navigation && (
            <PageNavigation {...navigation} counterPosition="end" />
          )}
          <Actions />
          {(navigation || otherActions) && <Divider />}
          <CloseButton />
        </div>
      </div>
      <TabsStrip />
    </>
  )
}
