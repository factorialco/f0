import { Dispatch, useEffect, useState } from "react"

import { DataAttributes } from "@/global.types"
import { TabNavigation, TabNavigationLink } from "@/ui/tab-navigation"

import { F0Icon } from "../../../components/F0Icon"
import { Upsell } from "../../../icons/app"
import { Link, useNavigation } from "../../../lib/linkHandler"
import { withSkeleton } from "../../../lib/skeleton"

export type TabItem = {
  label: string
  index?: boolean
  variant?: "default" | "upsell"
  // TODO: This is a temporary solution to allow for onClick handling. We should find a better way to handle this.
  onClick?: () => void
} & DataAttributes &
  ({ href: string } | { id: string })

export interface TabsProps {
  tabs: TabItem[]
  activeTabId?: string
  setActiveTabId?: Dispatch<string>
  secondary?: boolean
  embedded?: boolean
}

export const BaseTabs: React.FC<TabsProps> = ({
  tabs,
  activeTabId: initialActiveTabId,
  setActiveTabId: onChangeActiveTabId,
  secondary = false,
  embedded = false,
}) => {
  const firstTab = tabs[0]

  const [activeTabId, setActiveTabId] = useState(
    initialActiveTabId ?? ("id" in firstTab ? firstTab.id : undefined)
  )

  useEffect(() => {
    if (activeTabId) onChangeActiveTabId?.(activeTabId)
  }, [onChangeActiveTabId, activeTabId])

  const { isActive } = useNavigation()

  // If embedded, only show first tab
  const visibleTabs = embedded ? [tabs[0]] : tabs

  const sortedTabs = [...visibleTabs].sort((a, b) =>
    a.index ? 1 : b.index ? -1 : 0
  )
  const activeTab = sortedTabs.find((tab) =>
    "href" in tab ? isActive(tab.href) : activeTabId === tab.id
  )

  return (
    <TabNavigation
      secondary={secondary}
      asChild
      aria-label={secondary ? "primary-navigation" : "secondary-navigation"}
    >
      {visibleTabs.length === 1 ? (
        <li className="flex h-8 items-center justify-center whitespace-nowrap text-lg font-medium text-f1-foreground">
          {visibleTabs[0].label}
        </li>
      ) : (
        visibleTabs.map(({ label, ...props }, index) => {
          const active =
            activeTab && "href" in activeTab && "href" in props
              ? activeTab.href === props.href
              : "id" in props && activeTabId === props.id

          return (
            <TabNavigationLink
              key={index}
              active={active}
              href={"href" in props ? props.href : undefined}
              onClick={() => {
                if ("id" in props) {
                  setActiveTabId?.(props.id)
                }
              }}
              secondary={secondary}
              asChild
            >
              <Link role="link" {...props}>
                {props.variant === "upsell" && (
                  <F0Icon
                    icon={Upsell}
                    size="md"
                    className="mr-1 text-[hsl(var(--promote-50))]"
                  />
                )}
                {label}
              </Link>
            </TabNavigationLink>
          )
        })
      )}
    </TabNavigation>
  )
}

export const TabsSkeleton: React.FC<Pick<TabsProps, "secondary">> = ({
  secondary,
}) => {
  return (
    <TabNavigation
      aria-label={secondary ? "Secondary empty nav" : "Main empty nav"}
      secondary={secondary}
      aria-busy="true"
      aria-live="polite"
    >
      <TabNavigationLink.Skeleton className="w-24" />
      <TabNavigationLink.Skeleton className="w-20" />
      <TabNavigationLink.Skeleton className="w-28" />
      <TabNavigationLink.Skeleton className="w-20" />
    </TabNavigation>
  )
}

export const Tabs = withSkeleton(BaseTabs, TabsSkeleton)
