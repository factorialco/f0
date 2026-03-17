import React, { useState } from "react"
import { Text, View } from "react-native"
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context"
import { useCSSVariable, withUniwind } from "uniwind"

import { ActivityShowcase } from "../../components/ActivityShowcase"
import { AnimatedF0TextShowcase } from "../../components/AnimatedF0TextShowcase"
import { AvatarShowcase } from "../../components/AvatarShowcase"
import { BadgeShowcase } from "../../components/BadgeShowcase"
import { ButtonShowcase } from "../../components/ButtonShowcase"
import { CounterShowcase } from "../../components/CounterShowcase"
import { F0CounterShowcase } from "../../components/F0CounterShowcase"
import { DataListShowcase } from "../../components/DataListShowcase"
import { DetailsItemShowcase } from "../../components/DetailsItemShowcase"
import { DetailsItemsListShowcase } from "../../components/DetailsItemsListShowcase"
import { F0AvatarShowcase } from "../../components/F0AvatarShowcase"
import { F0BadgeShowcase } from "../../components/F0BadgeShowcase"
import { F0ButtonShowcase } from "../../components/F0ButtonShowcase"
import { F0IconShowcase } from "../../components/F0IconShowcase"
import { F0ImageShowcase } from "../../components/F0ImageShowcase"
import { F0PresetShowcase } from "../../components/F0PresetShowcase"
import { F0TagShowcase } from "../../components/F0TagShowcase"
import { F0TextShowcase } from "../../components/F0TextShowcase/F0TextShowcase"
import { OneChipShowcase } from "../../components/OneChipShowcase"
import { OnePresetShowcase } from "../../components/OnePresetShowcase"
import { PageHeaderShowcase } from "../../components/PageHeaderShowcase"
import { PressableFeedbackShowcase } from "../../components/PressableFeedbackShowcase"
import { Select } from "../../components/Select"
import { TagShowcase } from "../../components/TagShowcase"
import { ThemeSwitcher } from "../../components/ThemeSwitcher"

const SafeAreaView = withUniwind(RNSafeAreaView)

type ComponentType =
  | "activity"
  | "animatedf0text"
  | "avatar"
  | "badge"
  | "button"
  | "counter"
  | "datalist"
  | "detailsitem"
  | "detailsitemslist"
  | "f0avatar"
  | "f0button"
  | "f0badge"
  | "f0counter"
  | "f0icon"
  | "f0preset"
  | "f0image"
  | "f0tag"
  | "f0text"
  | "onechip"
  | "onepreset"
  | "pageheader"
  | "pressablefeedback"
  | "tag"

const componentOptions = [
  { value: "activity" as ComponentType, label: "Activity" },
  { value: "animatedf0text" as ComponentType, label: "AnimatedF0Text" },
  { value: "avatar" as ComponentType, label: "Avatar (deprecated)" },
  { value: "badge" as ComponentType, label: "Badge (deprecated)" },
  { value: "button" as ComponentType, label: "Button (deprecated)" },
  { value: "counter" as ComponentType, label: "Counter (deprecated)" },
  { value: "datalist" as ComponentType, label: "DataList" },
  { value: "detailsitem" as ComponentType, label: "DetailsItem" },
  { value: "detailsitemslist" as ComponentType, label: "DetailsItemsList" },
  { value: "f0avatar" as ComponentType, label: "F0Avatar" },
  { value: "f0button" as ComponentType, label: "F0Button" },
  { value: "f0badge" as ComponentType, label: "F0Badge" },
  { value: "f0counter" as ComponentType, label: "F0Counter" },
  { value: "f0icon" as ComponentType, label: "F0Icon" },
  { value: "f0preset" as ComponentType, label: "F0Preset" },
  { value: "f0image" as ComponentType, label: "F0Image" },
  { value: "f0tag" as ComponentType, label: "F0Tag" },
  { value: "f0text" as ComponentType, label: "F0Text" },
  { value: "onechip" as ComponentType, label: "OneChip" },
  { value: "onepreset" as ComponentType, label: "OnePreset (deprecated)" },
  { value: "pageheader" as ComponentType, label: "PageHeader" },
  { value: "pressablefeedback" as ComponentType, label: "PressableFeedback" },
  { value: "tag" as ComponentType, label: "Tag (deprecated)" },
]

export default function ComponentsShowcase() {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentType>("activity")

  const [f0Background, f0Foreground] = useCSSVariable([
    "--color-f0-background",
    "--color-f0-foreground",
  ])

  const asString = (value: string | number | undefined): string => {
    if (typeof value === "string") return value
    if (typeof value === "number") return String(value)
    return "#000000"
  }

  const renderComponent = () => {
    switch (selectedComponent) {
      case "activity":
        return <ActivityShowcase />
      case "animatedf0text":
        return <AnimatedF0TextShowcase />
      case "avatar":
        return <AvatarShowcase />
      case "badge":
        return <BadgeShowcase />
      case "button":
        return <ButtonShowcase />
      case "counter":
        return <CounterShowcase />
      case "datalist":
        return <DataListShowcase />
      case "detailsitem":
        return <DetailsItemShowcase />
      case "detailsitemslist":
        return <DetailsItemsListShowcase />
      case "f0avatar":
        return <F0AvatarShowcase />
      case "f0button":
        return <F0ButtonShowcase />
      case "f0badge":
        return <F0BadgeShowcase />
      case "f0counter":
        return <F0CounterShowcase />
      case "f0icon":
        return <F0IconShowcase />
      case "f0preset":
        return <F0PresetShowcase />
      case "f0image":
        return <F0ImageShowcase />
      case "f0tag":
        return <F0TagShowcase />
      case "f0text":
        return <F0TextShowcase />
      case "onechip":
        return <OneChipShowcase />
      case "onepreset":
        return <OnePresetShowcase />
      case "pageheader":
        return <PageHeaderShowcase />
      case "pressablefeedback":
        return <PressableFeedbackShowcase />
      case "tag":
        return <TagShowcase />
      default:
        return <ButtonShowcase />
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-f0-background" edges={["top", "bottom"]}>
      <View
        className="flex-1"
        style={{ backgroundColor: asString(f0Background) }}
      >
        <View className="px-4 pt-3 pb-2">
          <View className="mb-2">
            <Text
              className="mb-1 text-xl font-bold"
              style={{ color: asString(f0Foreground) }}
            >
              Components Showcase
            </Text>
            <ThemeSwitcher />
          </View>

          <View className="mb-2">
            <Text
              className="mb-1 text-sm font-semibold"
              style={{ color: asString(f0Foreground) }}
            >
              Select Component
            </Text>
            <Select
              options={componentOptions}
              value={selectedComponent}
              onChange={setSelectedComponent}
            />
          </View>
        </View>

        <View className="flex-1" style={{ minHeight: 0 }}>
          {renderComponent()}
        </View>
      </View>
    </SafeAreaView>
  )
}
