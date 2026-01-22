"use client"

import { OneEllipsis } from "@/components/OneEllipsis/OneEllipsis"
import { ScrollArea } from "@/ui/scrollarea"

import { CurrentVersionIndicator } from "./CurrentVersionIndicator"
import { F0VersionHistoryProps } from "./types"
import { VersionItem } from "./VersionItem"

export function F0VersionHistory({
  title,
  versions,
  currentVersion,
  activeVersionId,
}: F0VersionHistoryProps) {
  return (
    <nav
      className="flex h-full w-full min-w-[320px] max-w-[380px] flex-col overflow-hidden px-3 pb-3 pt-[6px]"
      aria-label={title}
    >
      <OneEllipsis
        tag="h2"
        lines={1}
        className="flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground"
      >
        {title}
      </OneEllipsis>

      <ScrollArea className="h-full flex-1">
        <div className="flex flex-col gap-1">
          {currentVersion && (
            <CurrentVersionIndicator
              title={currentVersion.title}
              onClick={currentVersion.onClick}
              isActive={activeVersionId === "current"}
            />
          )}
          {versions.map((version) => (
            <VersionItem
              key={version.id}
              author={version.author}
              timestamp={version.timestamp}
              onClick={version.onClick}
              isActive={activeVersionId === version.id}
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
