import { ButtonInternal } from "@/components/F0Button/internal"
import { BaseHeader } from "@/experimental/Information/Headers/BaseHeader"
import {
  DropdownInternal,
  DropdownItemObject,
} from "@/experimental/Navigation/Dropdown/internal"
import { BreadcrumbItem } from "@/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbItem"
import { PageNavigation } from "@/experimental/Navigation/Header/PageNavigation"
import { ArrowLeft, Ellipsis, Maximize } from "@/icons/app"
import CrossIcon from "@/icons/app/Cross"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Tabs } from "@/patterns/Navigation/Tabs"
import { BreadcrumbList } from "@/ui/breadcrumb"
import { DialogTitle } from "@/ui/Dialog/dialog"
import { DrawerDescription } from "@/ui/drawer"
import { F0DialogHeaderProps } from "../internal-types"
import { useF0Dialog } from "./F0DialogProvider"

// Every part below sits at module scope on purpose. Declared inside
// F0DialogHeader they were a new component type on each render, so React tore
// the subtree down and rebuilt it instead of updating it — dropping focus and
// any state it held. Module scope keeps each type stable across renders.

const Divider = () => (
  <div className="h-4 w-px self-center bg-f1-background-secondary" />
)

const Actions = ({
  otherActions,
}: Pick<F0DialogHeaderProps, "otherActions">) => {
  const otherActionItems =
    otherActions?.filter(
      (action): action is DropdownItemObject =>
        action.type !== "separator" && action.type !== "label"
    ) ?? []

  if (!otherActionItems.length || !otherActions) {
    return null
  }

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

const Module = ({ module }: Pick<F0DialogHeaderProps, "module">) => {
  if (!module) {
    return null
  }

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

/** "3 of 11" — which of several things this dialog is currently showing. */
const Status = ({ headerStatus }: Pick<F0DialogHeaderProps, "headerStatus">) =>
  headerStatus ? (
    <span className="whitespace-nowrap text-f1-foreground-secondary">
      {headerStatus}
    </span>
  ) : null

// Nothing to close with on a forced choice — a button that did nothing would
// be worse than none at all.
const CloseButton = ({
  dismissable,
}: Pick<F0DialogHeaderProps, "dismissable">) => {
  const translations = useI18n()
  const { onClose } = useF0Dialog()

  return dismissable ? (
    <ButtonInternal
      variant="outline"
      icon={CrossIcon}
      onClick={onClose}
      label={translations.actions.close}
      hideLabel
    />
  ) : null
}

const TabsStrip = ({
  tabs,
  activeTabId,
  setActiveTabId,
}: Pick<F0DialogHeaderProps, "tabs" | "activeTabId" | "setActiveTabId">) =>
  tabs ? (
    <div className="shrink-0 overflow-hidden">
      <div className="-mx-2">
        <Tabs
          tabs={tabs}
          activeTabId={activeTabId}
          setActiveTabId={setActiveTabId}
        />
      </div>
    </div>
  ) : null

const Controls = ({ controls }: Pick<F0DialogHeaderProps, "controls">) => {
  if (!controls) {
    return null
  }

  if (controls.kind === "back") {
    return (
      <ButtonInternal
        variant="outline"
        icon={ArrowLeft}
        onClick={controls.onClick}
        label={controls.label}
      />
    )
  }

  return (
    <>
      {controls.expand ? (
        controls.expand.url !== undefined ? (
          <ButtonInternal
            variant="outline"
            icon={Maximize}
            href={controls.expand.url}
            label={controls.expand.label}
          />
        ) : (
          <ButtonInternal
            variant="outline"
            icon={Maximize}
            onClick={controls.expand.onClick}
            label={controls.expand.label}
          />
        )
      ) : null}
      {controls.expand && controls.navigation ? <Divider /> : null}
      {controls.navigation ? <PageNavigation {...controls.navigation} /> : null}
    </>
  )
}

export const F0DialogHeader = ({
  title,
  description,
  module,
  otherActions,
  navigation,
  resourceHeader,
  controls,
  headerStatus,
  dismissable = true,
  tabs,
  activeTabId,
  setActiveTabId,
}: F0DialogHeaderProps) => {
  const hasTabs = !!tabs

  // `navigation` alone is intentionally excluded so legacy title/module dialogs stay on the branch below.
  if (resourceHeader || controls) {
    return (
      <>
        <div className="flex flex-row items-center justify-between gap-3 px-4 py-3">
          <div className="flex flex-row items-center gap-2">
            <Controls controls={controls} />
          </div>
          <div className="flex flex-row items-center gap-2">
            <Status headerStatus={headerStatus} />
            <Actions otherActions={otherActions} />
            <CloseButton dismissable={dismissable} />
          </div>
        </div>
        {/* BaseHeader shows the title as a styled span, so emit a visually-hidden DialogTitle for the accessible name. */}
        {resourceHeader ? (
          <>
            <DialogTitle className="sr-only">
              {resourceHeader.title}
            </DialogTitle>
            <div className="[&_.resource-header]:px-4">
              <BaseHeader {...resourceHeader} />
            </div>
          </>
        ) : (
          title && <DialogTitle className="sr-only">{title}</DialogTitle>
        )}
        <TabsStrip
          tabs={tabs}
          activeTabId={activeTabId}
          setActiveTabId={setActiveTabId}
        />
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
          {module || title || !!description ? (
            <div className="flex flex-col gap-1">
              {module ? (
                <Module module={module} />
              ) : (
                title && (
                  <DialogTitle className="py-1 text-lg font-semibold text-f1-foreground">
                    {title}
                  </DialogTitle>
                )
              )}
              {description ? (
                <DrawerDescription className="text-base text-f1-foreground-secondary">
                  {description}
                </DrawerDescription>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="flex flex-row items-center gap-2">
          {navigation ? <PageNavigation {...navigation} /> : null}
          <Status headerStatus={headerStatus} />
          <Actions otherActions={otherActions} />
          {navigation || otherActions ? <Divider /> : null}
          <CloseButton dismissable={dismissable} />
        </div>
      </div>
      <TabsStrip
        tabs={tabs}
        activeTabId={activeTabId}
        setActiveTabId={setActiveTabId}
      />
    </>
  )
}
