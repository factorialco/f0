import React from "react"
import { View } from "react-native"

import { AppIcons } from "../../icons"
import { F0Avatar } from "../F0Avatar/F0Avatar"
import { F0AvatarList } from "../F0Avatar/F0AvatarList"
import { F0Progress } from "../F0Progress"
import { F0Tag } from "../F0Tag/F0Tag"
import { F0TagList } from "../F0Tag/F0TagList"
import { F0Icon } from "../primitives/F0Icon"
import { F0Text } from "../primitives/F0Text"

import type { MetadataItemValue } from "./F0Metadata.types"

const { Warning, AlertCircle } = AppIcons

const DATE_ICON_CONFIG = {
  warning: { icon: Warning, color: "warning" as const },
  critical: { icon: AlertCircle, color: "critical" as const },
} as const

/**
 * Internal component that renders the value section of a metadata item.
 * Selects the correct F0 primitive based on `value.type`.
 */
export function F0MetadataValue({ value }: { value: MetadataItemValue }) {
  switch (value.type) {
    case "text":
      return (
        <F0Text variant="body-sm-default" color="default">
          {value.content}
        </F0Text>
      )

    case "avatar": {
      const displayName =
        value.avatarType === "person"
          ? `${value.firstName} ${value.lastName}`.trim()
          : value.name
      const isDeactivated =
        value.avatarType === "person" ? value.deactivated : false
      return (
        <View className="flex-row items-center gap-1.5">
          {value.avatarType === "person" && (
            <F0Avatar.Person
              firstName={value.firstName}
              lastName={value.lastName}
              src={value.src}
              deactivated={value.deactivated}
              size="xs"
            />
          )}
          {value.avatarType === "team" && (
            <F0Avatar.Team name={value.name} src={value.src} size="xs" />
          )}
          {value.avatarType === "company" && (
            <F0Avatar.Company name={value.name} src={value.src} size="xs" />
          )}
          <F0Text
            variant="body-sm-default"
            color={isDeactivated ? "disabled" : "default"}
          >
            {displayName}
          </F0Text>
        </View>
      )
    }

    case "status":
      return <F0Tag.Status text={value.label} variant={value.variant} />

    case "list":
      if (value.variant === "person") {
        return (
          <F0AvatarList
            type="person"
            avatars={value.avatars}
            size="xs"
            max={3}
          />
        )
      }
      if (value.variant === "team") {
        return (
          <F0AvatarList type="team" avatars={value.avatars} size="xs" max={3} />
        )
      }
      return (
        <F0AvatarList
          type="company"
          avatars={value.avatars}
          size="xs"
          max={3}
        />
      )

    case "data-list":
      return (
        <View className="flex-col gap-0.5">
          {value.data.map((item, index) => (
            <F0Text key={`${item}-${index}`} variant="body-sm-default">
              {item}
            </F0Text>
          ))}
        </View>
      )

    case "tag-list":
      return (
        <F0TagList type="raw" tags={value.tags.map((tag) => ({ text: tag }))} />
      )

    case "dot-tag":
      return <F0Tag.Dot text={value.label} color={value.color} />

    case "date": {
      if (!value.icon) {
        return <F0Text variant="body-sm-default">{value.formattedDate}</F0Text>
      }
      const { icon, color } = DATE_ICON_CONFIG[value.icon]
      return (
        <View className="flex-row items-center gap-0.5">
          <F0Icon icon={icon} color={color} size="sm" />
          <F0Text variant="body-sm-default" color={color}>
            {value.formattedDate}
          </F0Text>
        </View>
      )
    }

    case "progress-bar":
      return (
        <F0Progress
          type={value.progressType ?? "linear"}
          value={value.value}
          max={value.max}
          label={value.label}
        />
      )

    default: {
      const _exhaustiveCheck: never = value
      return null
    }
  }
}
