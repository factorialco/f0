"use client"

import { F0Button } from "@/components/F0Button"
import { OneEllipsis } from "@/components/OneEllipsis/OneEllipsis"
import { ScrollArea } from "@/ui/scrollarea"
import { CurrentVersionIndicator } from "./CurrentVersionIndicator"
import { F0VersionHistoryProps } from "./types"
import { VersionItem } from "./VersionItem"

export function F0VersionHistory({
  title = "Version history",
  versions,
  currentVersion,
  action,
}: F0VersionHistoryProps) {
  return (
    <nav
      className="flex h-full w-[320px] flex-col overflow-hidden px-3 pb-3 pt-[6px]"
      aria-label="Version history"
    >
      <div className="flex flex-shrink-0 flex-row items-center justify-between px-[6px] pb-3 pt-3">
        <OneEllipsis
          tag="h2"
          lines={1}
          className="text-[16px] font-semibold text-f1-foreground"
        >
          {title}
        </OneEllipsis>
        {action && (
          <F0Button
            label={action.label}
            onClick={action.onClick}
            icon={action.icon}
            variant="outline"
            size="sm"
            hideLabel
          />
        )}
      </div>

      <ScrollArea className="h-full min-h-0">
        <div className="flex flex-col gap-1">
          {currentVersion && (
            <CurrentVersionIndicator
              title={currentVersion.title}
              onClick={currentVersion.onClick}
              isActive={currentVersion.isActive}
            />
          )}
          {versions.map((version, index) => (
            <VersionItem
              key={index}
              author={version.author}
              date={version.date}
              time={version.time}
              onClick={version.onClick}
              isActive={version.isActive}
            />
          ))}
        </div>
      </ScrollArea>
    </nav>
  )
}

export type {
  CurrentVersion,
  F0VersionHistoryProps,
  Version,
  VersionAuthor,
} from "./types"
