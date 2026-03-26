import React from "react"
import { View } from "react-native"

import { metadataContainerVariants } from "./F0Metadata.styles"
import type { F0MetadataProps, MetadataItem } from "./F0Metadata.types"
import { F0MetadataItem } from "./F0MetadataItem"

/**
 * F0Metadata - Structured label–value list for displaying resource metadata.
 *
 * Supports 9 value types (text, avatar, status, list, data-list, tag-list,
 * dot-tag, date, progress-bar) covering full parity with the F0 web Metadata
 * component. `undefined` and `boolean` items are filtered out to enable
 * conditional item expressions.
 *
 * @example
 * <F0Metadata
 *   items={[
 *     { label: "Status", value: { type: "status", label: "Active", variant: "positive" } },
 *     { label: "Owner", value: { type: "avatar", avatarType: "person", firstName: "Alice", lastName: "Smith" } },
 *     condition && { label: "Due date", value: { type: "date", formattedDate: "Mar 25, 2026" } },
 *   ]}
 * />
 *
 * @example
 * <F0Metadata
 *   orientation="horizontal"
 *   items={[
 *     { label: "Department", value: { type: "text", content: "Engineering" } },
 *     { label: "Team", value: { type: "tag-list", tags: ["Frontend", "Mobile"] } },
 *   ]}
 * />
 */
export const F0Metadata = React.memo(function F0Metadata({
  items,
  orientation = "vertical",
}: F0MetadataProps) {
  const resolvedItems = items.filter(
    (item): item is MetadataItem =>
      item !== undefined && item !== true && item !== false
  )

  return (
    <View className={metadataContainerVariants({ orientation })}>
      {resolvedItems.map((item) => (
        <F0MetadataItem
          key={item.label}
          item={item}
          orientation={orientation}
        />
      ))}
    </View>
  )
})

F0Metadata.displayName = "F0Metadata"

export type {
  F0MetadataProps,
  MetadataItem,
  MetadataItemValue,
} from "./F0Metadata.types"
