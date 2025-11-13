"use client"

import { OneEllipsis } from "@/components/OneEllipsis/OneEllipsis"
import { ScrollArea } from "@/ui/scrollarea"
import { CurrentVersionIndicator } from "./CurrentVersionIndicator"
import { F0VersionHistoryProps } from "./types"
import { VersionItem } from "./VersionItem"

export function F0VersionHistory({
  title = "Version history",
  versions,
  currentVersion,
}: F0VersionHistoryProps) {
  return (
    <nav
      className="flex h-full w-[320px] flex-col overflow-hidden px-3 pb-3 pt-[6px]"
      aria-label="Version history"
    >
      <OneEllipsis
        tag="h2"
        lines={1}
        className="px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground"
      >
        {title}
      </OneEllipsis>

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
