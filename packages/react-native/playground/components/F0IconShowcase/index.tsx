import React, { useState, useEffect } from "react"
import { ScrollView, View, Text, TextInput, Pressable } from "react-native"
import { useCSSVariable } from "uniwind"

import { F0Icon } from "../../../src/components/primitives/F0Icon"
import type {
  IconColor,
  IconType,
} from "../../../src/components/primitives/F0Icon/F0Icon.types"
import { AppIcons, ModuleIcons } from "../../../src/icons"

type IconCategoryType = "app" | "module"

interface IconDisplayProps {
  icon: IconType
  name: string
}

interface SizeVariantProps extends IconDisplayProps {
  size: "xs" | "sm" | "md" | "lg" | "xl"
}

interface ColorIconDisplayProps extends IconDisplayProps {
  color: IconColor
}

const asString = (value: string | number | undefined): string => {
  if (typeof value === "string") return value
  if (typeof value === "number") return String(value)
  return "#000000"
}

const IconDisplay = ({ icon, name }: IconDisplayProps) => {
  const [f0Foreground] = useCSSVariable(["--color-f0-foreground"])

  return (
    <View className="mb-4 w-20 items-center p-2">
      <F0Icon icon={icon} size="md" />
      <Text
        className="mt-2 text-center text-sm"
        style={{ color: asString(f0Foreground) }}
      >
        {name}
      </Text>
    </View>
  )
}

const SizeVariant = ({ icon, name, size }: SizeVariantProps) => {
  const [f0Foreground] = useCSSVariable(["--color-f0-foreground"])

  return (
    <View className="items-center justify-center">
      <F0Icon icon={icon} size={size} />
      <Text
        className="mt-2 text-center text-xs"
        style={{ color: asString(f0Foreground) }}
      >
        {name}
      </Text>
    </View>
  )
}

const ColorIconDisplay = ({
  icon,
  name,
  color,
}: ColorIconDisplayProps) => {
  const [f0Foreground] = useCSSVariable(["--color-f0-foreground"])

  return (
    <View className="items-center justify-center">
      <F0Icon icon={icon} size="lg" color={color} />
      <Text
        className="mt-2 text-center text-xs"
        style={{ color: asString(f0Foreground) }}
      >
        {name}
      </Text>
    </View>
  )
}

export function F0IconShowcase() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState<IconCategoryType>("app")
  const [appIconList, setAppIconList] = useState<
    Array<{ name: string; icon: IconType }>
  >([])
  const [moduleIconList, setModuleIconList] = useState<
    Array<{ name: string; icon: IconType }>
  >([])

  const [
    f0Foreground,
    f0Background,
    f0Border,
    f0BackgroundSecondary,
    f0IconInfo,
  ] = useCSSVariable([
    "--color-f0-foreground",
    "--color-f0-background",
    "--color-f0-border",
    "--color-f0-background-secondary",
    "--color-f0-icon-info",
  ])

  useEffect(() => {
    const appIcons = Object.entries(AppIcons).map(([name, icon]) => ({
      name,
      icon,
    }))

    const modIcons = Object.entries(ModuleIcons).map(([name, icon]) => ({
      name,
      icon,
    }))

    setAppIconList(appIcons)
    setModuleIconList(modIcons)
  }, [])

  const filteredIcons = (
    selectedType === "app" ? appIconList : moduleIconList
  ).filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const TabButton = ({
    type,
    label,
    count,
  }: {
    type: IconCategoryType
    label: string
    count: number
  }) => {
    const isSelected = selectedType === type

    return (
      <View className="flex-1">
        <Pressable
          onPress={() => setSelectedType(type)}
          className="rounded-lg px-4 py-2"
          style={{
            backgroundColor: isSelected
              ? asString(f0IconInfo)
              : asString(f0BackgroundSecondary),
          }}
        >
          <Text
            className="text-center text-sm font-medium"
            style={{
              color: isSelected ? "#ffffff" : asString(f0Foreground),
            }}
          >
            {label} ({count})
          </Text>
        </Pressable>
        {isSelected && (
          <View
            className="mt-1 h-0.5"
            style={{ backgroundColor: asString(f0IconInfo) }}
          />
        )}
      </View>
    )
  }

  return (
    <ScrollView
      className="p-4"
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ width: "100%" }}
    >
      {/* Search */}
      <View className="mb-4">
        <Text
          className="mb-2 text-lg font-bold"
          style={{ color: asString(f0Foreground) }}
        >
          Search Icons
        </Text>
        <TextInput
          className="mb-4 rounded-lg border p-3"
          style={{
            borderColor: asString(f0Border),
            color: asString(f0Foreground),
            backgroundColor: asString(f0Background),
          }}
          placeholder="Search icons..."
          placeholderTextColor={asString(f0Foreground)}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />

        <View className="mb-4 flex-row gap-2">
          <TabButton
            type="app"
            label="App Icons"
            count={
              appIconList.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              ).length
            }
          />
          <TabButton
            type="module"
            label="Module Icons"
            count={
              moduleIconList.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              ).length
            }
          />
        </View>
      </View>

      {/* Icons Grid */}
      {filteredIcons.length > 0 ? (
        <View className="mb-6 flex-row flex-wrap justify-start">
          {filteredIcons.map((item) => (
            <IconDisplay key={item.name} icon={item.icon} name={item.name} />
          ))}
        </View>
      ) : (
        <View className="mb-6 items-center justify-center p-10">
          <Text className="text-lg" style={{ color: asString(f0Foreground) }}>
            {`No icons found matching "${searchTerm}"`}
          </Text>
        </View>
      )}

      {/* Size Variants */}
      <Text
        className="mt-6 mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Size Variants
      </Text>
      <View
        className="mb-8 flex-row justify-around rounded-lg p-4"
        style={{ backgroundColor: asString(f0BackgroundSecondary) }}
      >
        <SizeVariant icon={AppIcons.ChevronDown} name="xs" size="xs" />
        <SizeVariant icon={AppIcons.ChevronDown} name="sm" size="sm" />
        <SizeVariant icon={AppIcons.ChevronDown} name="md" size="md" />
        <SizeVariant icon={AppIcons.ChevronDown} name="lg" size="lg" />
        <SizeVariant icon={AppIcons.ChevronDown} name="xl" size="xl" />
      </View>

      <View
        className="mb-8 flex-row justify-around rounded-lg p-4"
        style={{ backgroundColor: asString(f0BackgroundSecondary) }}
      >
        <SizeVariant icon={AppIcons.Archive} name="xs" size="xs" />
        <SizeVariant icon={AppIcons.Archive} name="sm" size="sm" />
        <SizeVariant icon={AppIcons.Archive} name="md" size="md" />
        <SizeVariant icon={AppIcons.Archive} name="lg" size="lg" />
        <SizeVariant icon={AppIcons.Archive} name="xl" size="xl" />
      </View>

      <View
        className="mb-8 flex-row justify-around rounded-lg p-4"
        style={{ backgroundColor: asString(f0BackgroundSecondary) }}
      >
        <SizeVariant icon={ModuleIcons.Home} name="xs" size="xs" />
        <SizeVariant icon={ModuleIcons.Home} name="sm" size="sm" />
        <SizeVariant icon={ModuleIcons.Home} name="md" size="md" />
        <SizeVariant icon={ModuleIcons.Home} name="lg" size="lg" />
        <SizeVariant icon={ModuleIcons.Home} name="xl" size="xl" />
      </View>

      {/* Color Variants — Core */}
      <Text
        className="mt-6 mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Color Variants — Core
      </Text>
      <View
        className="mb-4 flex-row flex-wrap justify-around rounded-lg p-4"
        style={{ backgroundColor: asString(f0BackgroundSecondary) }}
      >
        <ColorIconDisplay
          icon={AppIcons.Archive}
          name="default"
          color="default"
        />
        <ColorIconDisplay
          icon={AppIcons.Archive}
          name="secondary"
          color="secondary"
        />
        <ColorIconDisplay
          icon={AppIcons.Archive}
          name="bold"
          color="bold"
        />
        <ColorIconDisplay
          icon={AppIcons.Archive}
          name="inverse"
          color="inverse"
        />
      </View>

      {/* Color Variants — Semantic */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Color Variants — Semantic
      </Text>
      <View
        className="mb-4 flex-row flex-wrap justify-around rounded-lg p-4"
        style={{ backgroundColor: asString(f0BackgroundSecondary) }}
      >
        <ColorIconDisplay
          icon={AppIcons.Heart}
          name="critical"
          color="critical"
        />
        <ColorIconDisplay
          icon={AppIcons.Heart}
          name="critical-bold"
          color="critical-bold"
        />
        <ColorIconDisplay
          icon={AppIcons.InfoCircle}
          name="info"
          color="info"
        />
        <ColorIconDisplay
          icon={AppIcons.Check}
          name="positive"
          color="positive"
        />
        <ColorIconDisplay
          icon={AppIcons.Warning}
          name="warning"
          color="warning"
        />
        <ColorIconDisplay
          icon={AppIcons.Heart}
          name="accent"
          color="accent"
        />
        <ColorIconDisplay
          icon={AppIcons.Archive}
          name="promote"
          color="promote"
        />
      </View>

      {/* Color Variants — State */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Color Variants — State
      </Text>
      <View
        className="mb-4 flex-row flex-wrap justify-around rounded-lg p-4"
        style={{ backgroundColor: asString(f0BackgroundSecondary) }}
      >
        <ColorIconDisplay
          icon={AppIcons.Check}
          name="selected"
          color="selected"
        />
        <ColorIconDisplay
          icon={AppIcons.Check}
          name="selected-hover"
          color="selected-hover"
        />
      </View>

      {/* Color Variants — Mood */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Color Variants — Mood
      </Text>
      <View
        className="flex-row flex-wrap justify-around rounded-lg p-4"
        style={{ backgroundColor: asString(f0BackgroundSecondary) }}
      >
        <ColorIconDisplay
          icon={AppIcons.Heart}
          name="mood-super-negative"
          color="mood-super-negative"
        />
        <ColorIconDisplay
          icon={AppIcons.Heart}
          name="mood-negative"
          color="mood-negative"
        />
        <ColorIconDisplay
          icon={AppIcons.Heart}
          name="mood-neutral"
          color="mood-neutral"
        />
        <ColorIconDisplay
          icon={AppIcons.Heart}
          name="mood-positive"
          color="mood-positive"
        />
        <ColorIconDisplay
          icon={AppIcons.Heart}
          name="mood-super-positive"
          color="mood-super-positive"
        />
      </View>
    </ScrollView>
  )
}
