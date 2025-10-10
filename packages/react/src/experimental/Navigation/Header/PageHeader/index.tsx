import { Button } from "@/components/Actions/Button"
import { ModuleId } from "@/components/avatars/F0AvatarModule"
import { IconType } from "@/components/F0Icon"
import type { StatusVariant } from "@/components/tags/F0TagStatus"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { useSidebar } from "@/experimental/Navigation/ApplicationFrame/FrameProvider"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { ChevronDown, ChevronLeft, ChevronUp, Menu } from "@/icons/app"
import { Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { AnimatePresence, motion } from "motion/react"
import { ReactElement, useRef, useState } from "react"

import { OneSwitch } from "@/experimental/AiChat/OneSwitch"
import { Breadcrumbs, BreadcrumbsProps } from "../Breadcrumbs"
import { FavoriteButton } from "../Favorites"
import { ProductUpdates, ProductUpdatesProp } from "../ProductUpdates"

export type PageAction = {
  label: string
  icon: IconType
} & (
  | {
      href: string
    }
  | {
      actions: Array<{ label: string; href: string }>
    }
)

type NavigationProps = {
  previous?: {
    url: string
    title: string
  }
  next?: {
    url: string
    title: string
  }
  counter?: {
    current: number
    total: number
  }
}

type HeaderProps = {
  module: {
    id: ModuleId
    name: string
    href: string
  }
  statusTag?: {
    text: string
    variant: StatusVariant
    tooltip?: string
  }
  actions?: PageAction[]
  navigation?: NavigationProps
  embedded?: boolean
  breadcrumbs?: BreadcrumbsProps["breadcrumbs"]
  productUpdates?: {
    isVisible?: boolean
  } & ProductUpdatesProp
  favorites?: {
    isMarked: boolean
    onChange: (newValue: boolean) => void
    label: string
  }
}

function PageNavigationLink({
  icon,
  href,
  label,
  disabled,
}: {
  icon: IconType
  href: string
  label: string
  disabled?: boolean
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  return (
    <Link
      href={href}
      title={label}
      aria-label={label}
      disabled={disabled}
      ref={ref}
    >
      <Button
        size="sm"
        variant="outline"
        round
        label={label}
        icon={icon}
        hideLabel
        disabled={disabled}
        onClick={(e) => {
          e.preventDefault()
          if (disabled) return
          ref.current?.click()
        }}
      />
    </Link>
  )
}

export function PageHeader({
  module,
  statusTag = undefined,
  breadcrumbs = [],
  actions = [],
  embedded = false,
  navigation,
  productUpdates,
  favorites,
}: HeaderProps) {
  const { sidebarState, toggleSidebar, isLastToggleInvokedByUser } =
    useSidebar()

  const breadcrumbsTree: typeof breadcrumbs = [
    {
      id: module.href,
      label: module.name,
      href: module.href,
      module: module.id,
    },
    ...breadcrumbs,
  ]
  const hasStatus = statusTag && Object.keys(statusTag).length !== 0
  const hasNavigation = breadcrumbs.length > 0
  const hasActions = !embedded && actions.length > 0
  const hasProductUpdates = !embedded && !!productUpdates?.isVisible
  const lastBreadcrumb = breadcrumbsTree[breadcrumbsTree.length - 1]
  const parentBreadcrumb = hasNavigation
    ? breadcrumbsTree[breadcrumbsTree.length - 2]
    : null

  return (
    <div
      className={cn(
        "flex items-center justify-between px-5 py-4 xs:px-6",
        embedded ? "h-12" : "h-16"
      )}
    >
      <div className="flex flex-grow items-center">
        <AnimatePresence>
          {!embedded && sidebarState !== "locked" && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
            >
              <div className="mr-3">
                <Button
                  ref={(buttonEl) => {
                    // if action was triggered by user, focus the close button
                    if (isLastToggleInvokedByUser) {
                      buttonEl?.focus()
                    }
                  }}
                  variant="ghost"
                  hideLabel
                  round
                  onClick={() => toggleSidebar()}
                  label="Open main menu"
                  icon={Menu}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={cn(
            "flex flex-grow items-center gap-2",
            embedded && hasNavigation && "justify-center"
          )}
        >
          {embedded &&
            hasNavigation &&
            parentBreadcrumb &&
            !("loading" in parentBreadcrumb) && (
              <div className="absolute left-4">
                <Link href={parentBreadcrumb.href}>
                  <Button
                    variant="ghost"
                    hideLabel
                    round
                    label="Back"
                    icon={ChevronLeft}
                    onClick={(e) => e.preventDefault()}
                  />
                </Link>
              </div>
            )}
          {embedded && hasNavigation ? (
            <div className="text-lg font-semibold text-f1-foreground">
              {"loading" in lastBreadcrumb ? (
                <Skeleton className="h-4 w-24" />
              ) : (
                lastBreadcrumb.label
              )}
            </div>
          ) : (
            <Breadcrumbs
              key={breadcrumbsTree[0].id}
              breadcrumbs={breadcrumbsTree}
              append={
                favorites !== undefined && (
                  <FavoriteButton
                    label={favorites.label}
                    isMarked={favorites.isMarked}
                    onChange={favorites?.onChange}
                  />
                )
              }
            />
          )}
        </div>
      </div>
      <div className="flex items-center gap-3">
        {!embedded && hasStatus && (
          <div>
            {statusTag.tooltip ? (
              <Tooltip label={statusTag.tooltip}>
                <div>
                  <F0TagStatus
                    text={statusTag.text}
                    variant={statusTag.variant}
                    additionalAccesibleText={statusTag.tooltip}
                  />
                </div>
              </Tooltip>
            ) : (
              <F0TagStatus text={statusTag.text} variant={statusTag.variant} />
            )}
          </div>
        )}
        {!embedded &&
          hasStatus &&
          (navigation || hasActions || hasProductUpdates) && (
            <div className="h-4 w-px bg-f1-border-secondary" />
          )}
        {navigation && (
          <div className="flex items-center gap-3">
            {navigation.counter && (
              <span className="text-sm text-f1-foreground-secondary">
                {navigation.counter.current}/{navigation.counter.total}
              </span>
            )}
            <div className="flex items-center gap-2">
              <PageNavigationLink
                icon={ChevronUp}
                label={navigation.previous?.title || "Previous"}
                href={navigation.previous?.url || ""}
                disabled={!navigation.previous}
              />
              <PageNavigationLink
                icon={ChevronDown}
                label={navigation.next?.title || "Next"}
                href={navigation.next?.url || ""}
                disabled={!navigation.next}
              />
            </div>
          </div>
        )}
        {navigation && hasActions && (
          <div className="h-4 w-px bg-f1-border-secondary" />
        )}
        {(hasProductUpdates || hasActions) && (
          <div className="flex items-center gap-2">
            {hasProductUpdates && (
              <div className="items-right flex gap-2">
                <ProductUpdates
                  {...productUpdates}
                  currentModule={module.name}
                />
              </div>
            )}
            {hasActions && (
              <div className="items-right flex gap-2">
                {actions.map((action, index) => (
                  <PageAction key={index} action={action} />
                ))}
              </div>
            )}
          </div>
        )}
        <div>
          <OneSwitch />
        </div>
      </div>
    </div>
  )
}

function PageAction({ action }: { action: PageAction }): ReactElement {
  const ref = useRef<HTMLAnchorElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  if ("actions" in action) {
    return (
      <Dropdown items={action.actions} open={isOpen} onOpenChange={setIsOpen}>
        <Button
          size="md"
          variant="outline"
          label={action.label}
          icon={action.icon}
          hideLabel
          pressed={isOpen}
        />
      </Dropdown>
    )
  }

  return (
    <Link
      href={action.href}
      title={action.label}
      aria-label={action.label}
      ref={ref}
    >
      <Button
        size="md"
        variant="outline"
        label={action.label}
        icon={action.icon}
        hideLabel
        onClick={(e) => {
          e.preventDefault()
          ref.current?.click()
        }}
      />
    </Link>
  )
}
