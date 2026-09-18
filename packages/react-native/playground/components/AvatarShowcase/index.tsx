import React from "react"
import { ScrollView, View, Text } from "react-native"
import { useCSSVariable } from "uniwind"

import {
  PersonAvatar,
  CompanyAvatar,
  TeamAvatar,
  DateAvatar,
  EmojiAvatar,
  IconAvatar,
  ModuleAvatar,
  FileAvatar,
} from "../../../src/components/Avatars/exports"
import { AppIcons } from "../../../src/icons"
import { Avatar } from "../../../src/ui/avatar"

const { Check, Alert, Home } = AppIcons

export function AvatarShowcase() {
  const [f0Foreground] = useCSSVariable(["--color-f0-foreground"])

  const asString = (value: string | number | undefined): string => {
    if (typeof value === "string") return value
    if (typeof value === "number") return String(value)
    return "#000000"
  }

  return (
    <ScrollView
      className="p-4"
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ width: "100%" }}
    >
      {/* PersonAvatar */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Person Avatar
      </Text>
      <View className="mb-6 flex-row flex-wrap items-center gap-4">
        <View className="items-center">
          <PersonAvatar firstName="John" lastName="Doe" size="xsmall" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            XSmall
          </Text>
        </View>
        <View className="items-center">
          <PersonAvatar firstName="Jane" lastName="Smith" size="small" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Small
          </Text>
        </View>
        <View className="items-center">
          <PersonAvatar firstName="Bob" lastName="Johnson" size="medium" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Medium
          </Text>
        </View>
        <View className="items-center">
          <PersonAvatar firstName="Alice" lastName="Williams" size="large" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Large
          </Text>
        </View>
        <View className="items-center">
          <PersonAvatar firstName="Charlie" lastName="Brown" size="xlarge" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            XLarge
          </Text>
        </View>
      </View>

      {/* CompanyAvatar */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Company Avatar
      </Text>
      <View className="mb-6 flex-row flex-wrap items-center gap-4">
        <View className="items-center">
          <CompanyAvatar name="Acme Corp" size="small" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Small
          </Text>
        </View>
        <View className="items-center">
          <CompanyAvatar name="Tech Inc" size="medium" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Medium
          </Text>
        </View>
        <View className="items-center">
          <CompanyAvatar name="Global Systems" size="large" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Large
          </Text>
        </View>
      </View>

      {/* TeamAvatar */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Team Avatar
      </Text>
      <View className="mb-6 flex-row flex-wrap items-center gap-4">
        <View className="items-center">
          <TeamAvatar name="Engineering" size="small" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Small
          </Text>
        </View>
        <View className="items-center">
          <TeamAvatar name="Design Team" size="medium" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Medium
          </Text>
        </View>
        <View className="items-center">
          <TeamAvatar name="Marketing" size="large" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Large
          </Text>
        </View>
      </View>

      {/* DateAvatar */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Date Avatar
      </Text>
      <View className="mb-6 flex-row flex-wrap items-center gap-4">
        <View className="items-center">
          <DateAvatar date={new Date(2024, 0, 15)} />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Jan 15
          </Text>
        </View>
        <View className="items-center">
          <DateAvatar date={new Date(2024, 5, 20)} />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Jun 20
          </Text>
        </View>
        <View className="items-center">
          <DateAvatar date={new Date(2024, 11, 25)} />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Dec 25
          </Text>
        </View>
      </View>

      {/* EmojiAvatar */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Emoji Avatar
      </Text>
      <View className="mb-6 flex-row flex-wrap items-center gap-4">
        <View className="items-center">
          <EmojiAvatar emoji="😀" size="sm" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Small
          </Text>
        </View>
        <View className="items-center">
          <EmojiAvatar emoji="🎉" size="md" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Medium
          </Text>
        </View>
        <View className="items-center">
          <EmojiAvatar emoji="🚀" size="lg" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Large
          </Text>
        </View>
      </View>

      {/* IconAvatar */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Icon Avatar
      </Text>
      <View className="mb-6 flex-row flex-wrap items-center gap-4">
        <View className="items-center">
          <IconAvatar icon={Home} size="sm" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Small
          </Text>
        </View>
        <View className="items-center">
          <IconAvatar icon={Check} size="md" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Medium
          </Text>
        </View>
        <View className="items-center">
          <IconAvatar icon={Alert} size="lg" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Large
          </Text>
        </View>
      </View>

      {/* ModuleAvatar */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Module Avatar
      </Text>
      <View className="mb-6 flex-row flex-wrap items-center gap-4">
        <View className="items-center">
          <ModuleAvatar module="home" size="sm" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Small
          </Text>
        </View>
        <View className="items-center">
          <ModuleAvatar module="calendar" size="md" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Medium
          </Text>
        </View>
        <View className="items-center">
          <ModuleAvatar module="tasks" size="lg" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Large
          </Text>
        </View>
        <View className="items-center">
          <ModuleAvatar module="goals" size="xl" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            XLarge
          </Text>
        </View>
      </View>

      {/* FileAvatar */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        File Avatar
      </Text>
      <View className="mb-6 flex-row flex-wrap items-center gap-4">
        <View className="items-center">
          <FileAvatar file={{ name: "document.pdf" }} size="small" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            PDF
          </Text>
        </View>
        <View className="items-center">
          <FileAvatar file={{ name: "image.jpg" }} size="medium" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Image
          </Text>
        </View>
        <View className="items-center">
          <FileAvatar file={{ name: "spreadsheet.xlsx" }} size="large" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Excel
          </Text>
        </View>
      </View>

      {/* Avatar Colors */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Avatar Colors
      </Text>
      <View className="mb-6 flex-row flex-wrap items-center gap-4">
        {(
          [
            "viridian",
            "malibu",
            "yellow",
            "purple",
            "lilac",
            "barbie",
            "smoke",
            "army",
            "flubber",
            "indigo",
            "camel",
          ] as const
        ).map((color) => (
          <View key={color} className="items-center">
            <Avatar size="medium" color={color} />
            <Text
              className="mt-2 text-center text-xs capitalize"
              style={{ color: asString(f0Foreground) }}
            >
              {color}
            </Text>
          </View>
        ))}
      </View>

      {/* Avatars with Badges */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Avatars with Badges
      </Text>
      <View className="mb-6 flex-row flex-wrap items-center gap-4">
        <View className="items-center">
          <PersonAvatar
            firstName="John"
            lastName="Doe"
            size="medium"
            badge={{ type: "positive", icon: Check }}
          />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            With Badge
          </Text>
        </View>
        <View className="items-center">
          <CompanyAvatar
            name="Acme Corp"
            size="medium"
            badge={{ type: "module", module: "home" }}
          />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Module Badge
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
