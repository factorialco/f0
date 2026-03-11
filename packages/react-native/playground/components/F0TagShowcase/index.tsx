import React from "react"
import { ScrollView, Text, View } from "react-native"
import { useCSSVariable } from "uniwind"

import {
  F0Tag,
  F0TagList,
  type F0TagAlertLevel,
  type F0TagBalanceProps,
  type F0TagStatusVariant,
  dotTagColors,
} from "../../../src/components/F0Tag"
import { AppIcons } from "../../../src/icons"

const { Ai } = AppIcons

const alertLevels: F0TagAlertLevel[] = [
  "info",
  "warning",
  "critical",
  "positive",
]

const statusVariants: F0TagStatusVariant[] = [
  "neutral",
  "info",
  "positive",
  "warning",
  "critical",
]

const personAvatar =
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=256&auto=format&fit=crop"
const teamAvatar =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=256&auto=format&fit=crop"
const companyAvatar =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=256&auto=format&fit=crop"

const tagListDotTags = [
  { text: "Category 1", color: "viridian" as const },
  { text: "Category 2", color: "malibu" as const },
  { text: "Category 3", color: "yellow" as const },
  { text: "Category 4", color: "purple" as const },
]

type BalanceStoryCase = {
  title: string
} & F0TagBalanceProps

const balanceCases: BalanceStoryCase[] = [
  {
    title: "positive",
    percentage: 10,
    amount: 1000,
  },
  {
    title: "neutral",
    percentage: 0,
    amount: 0,
  },
  {
    title: "negative",
    percentage: -10,
    amount: -1000,
  },
  {
    title: "null",
    percentage: null,
    amount: null,
  },
  {
    title: "custom null text",
    percentage: null,
    amount: null,
    nullText: "No salary",
  },
  {
    title: "with info",
    percentage: 10,
    amount: 1000,
    info: "This is a balance tag with info",
  },
  {
    title: "with hint",
    percentage: 10,
    amount: 1000,
    hint: "vs last month",
  },
  {
    title: "with hint and info",
    percentage: 10,
    amount: 1000,
    hint: "vs last month",
    info: "This is a balance tag with info",
  },
  {
    title: "with invert status",
    percentage: 10,
    amount: 1000,
    invertStatus: true,
  },
  {
    title: "with decimal places in percent",
    percentage: {
      value: 10.23,
      decimalPlaces: 2,
    },
    amount: 1000.12345678,
  },
  {
    title: "with decimal places in amount",
    percentage: 10.123,
    amount: {
      value: 1000.23,
      units: "€",
      unitsPosition: "right",
      decimalPlaces: 1,
    },
  },
  {
    title: "with units position",
    percentage: 10,
    amount: {
      value: 1000.12345678,
      unitsPosition: "left",
      units: "$",
      decimalPlaces: 2,
    },
  },
  {
    title: "with locale",
    percentage: 10,
    amount: {
      value: 1000.1234,
      locale: "es-ES",
    },
  },
]

export function F0TagShowcase() {
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
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        TagDot
      </Text>
      <View className="mb-6 gap-2">
        {dotTagColors.map((color) => (
          <View key={color} className="flex-row items-center gap-3">
            <Text className="w-20 text-sm font-medium text-f0-foreground-secondary">
              {color}
            </Text>
            <F0Tag.Dot text="Label" color={color} />
          </View>
        ))}
        <F0Tag.Dot
          text="This is a long label text that should be truncated but should have an ellipsis"
          color="viridian"
        />
      </View>

      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        TagRaw
      </Text>
      <View className="mb-6 gap-2">
        <F0Tag.Raw text="Label" icon={Ai} />
        <F0Tag.Raw text="Label" />
        <F0Tag.Raw text="Label" icon={Ai} />
        <F0Tag.Raw text="Label" onlyIcon icon={Ai} />
      </View>

      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        TagAlert
      </Text>
      <View className="mb-6 flex-row flex-wrap gap-2">
        {alertLevels.map((level) => (
          <F0Tag.Alert key={level} text={level} level={level} />
        ))}
      </View>

      <View className="mb-6 flex-row flex-wrap gap-2">
        <F0Tag.Status
          text="This is a long label text that should be truncated but should have an ellipsis"
          variant="critical"
        />
      </View>

      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        TagStatus
      </Text>
      <View className="mb-6 flex-row flex-wrap gap-2">
        {statusVariants.map((variant) => (
          <F0Tag.Status key={variant} text={variant} variant={variant} />
        ))}
      </View>

      <View className="mb-6 flex-row flex-wrap gap-2">
        <F0Tag.Status
          text="This is a long label text that should be truncated but should have an ellipsis"
          variant="critical"
        />
      </View>

      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        TagPerson
      </Text>
      <View className="mb-6 gap-2">
        <F0Tag.Person name="John Doe" src={personAvatar} />
        <F0Tag.Person name="John Doe" />
        <F0Tag.Person name="John Doe with a very long name that should be truncated but should have an ellipsis and a tooltip" />
        <F0Tag.Person name="John Doe" src={personAvatar} deactivated />
      </View>

      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        TagTeam
      </Text>
      <View className="mb-6 gap-2">
        <F0Tag.Team name="Team Foundations" src={teamAvatar} />
        <F0Tag.Team name="Team Foundations" />
        <F0Tag.Team name="Team Foundations with a very long name that should be truncated but should have an ellipsis and a tooltip" />
      </View>

      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        TagCompany
      </Text>
      <View className="mb-6 gap-2">
        <F0Tag.Company name="Factorial" src={companyAvatar} />
        <F0Tag.Company name="Factorial" />
        <F0Tag.Company name="Factorial with a very long name that should be truncated but should have an ellipsis and a tooltip" />
      </View>

      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        TagBalance
      </Text>
      <View className="mb-6 gap-2">
        {balanceCases.map((item) => (
          <View key={item.title} className="flex-row items-center gap-3">
            <Text className="w-44 text-sm font-medium text-f0-foreground-secondary">
              {item.title}
            </Text>
            <F0Tag.Balance
              percentage={item.percentage}
              amount={item.amount}
              info={item.info}
              hint={item.hint}
              invertStatus={item.invertStatus}
              nullText={item.nullText}
            />
          </View>
        ))}
      </View>

      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        TagList - WithCustomMax
      </Text>
      <View className="mb-6 gap-2">
        <F0TagList type="dot" max={2} tags={tagListDotTags} />
      </View>

      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        TagList - WithRemainingCount
      </Text>
      <View className="mb-6 gap-2">
        <F0TagList
          type="dot"
          tags={tagListDotTags.slice(0, 2)}
          remainingCount={10}
        />
      </View>

      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        TagList - Snapshot
      </Text>
      <View className="mb-6 gap-4">
        <View className="gap-3 overflow-hidden border border-dashed border-f0-border">
          <Text className="font-semibold text-f0-foreground">dot</Text>
          <F0TagList type="dot" tags={tagListDotTags} />

          <Text className="font-semibold text-f0-foreground">person</Text>
          <F0TagList
            type="person"
            tags={[
              { name: "John Doe", src: personAvatar },
              { name: "Jane Smith", src: personAvatar },
              { name: "Bob Johnson" },
            ]}
          />

          <Text className="font-semibold text-f0-foreground">team</Text>
          <F0TagList
            type="team"
            tags={[
              { name: "Engineering", src: teamAvatar },
              { name: "Product" },
              { name: "Design", src: teamAvatar },
            ]}
          />

          <Text className="font-semibold text-f0-foreground">company</Text>
          <F0TagList
            type="company"
            tags={[
              { name: "Acme Inc", src: companyAvatar },
              { name: "Globex Corp", src: companyAvatar },
              { name: "Stark Industries" },
            ]}
          />

          <Text className="font-semibold text-f0-foreground">status</Text>
          <F0TagList
            type="status"
            tags={[
              { text: "Active", variant: "positive" },
              { text: "Pending", variant: "warning" },
              { text: "Inactive", variant: "critical" },
              { text: "Processing", variant: "info" },
            ]}
          />

          <Text className="font-semibold text-f0-foreground">alert</Text>
          <F0TagList
            type="alert"
            tags={[
              { text: "Information", level: "info" },
              { text: "Warning", level: "warning" },
              { text: "Critical", level: "critical" },
            ]}
          />

          <Text className="font-semibold text-f0-foreground">balance</Text>
          <F0TagList
            type="balance"
            tags={[
              { amount: 1234.56, percentage: 10 },
              { amount: -567.89, percentage: -10 },
              { amount: 0, percentage: 0 },
            ]}
          />

          <Text className="font-semibold text-f0-foreground">raw</Text>
          <F0TagList
            type="raw"
            tags={[
              { text: "Settings", icon: Ai },
              { text: "Profile" },
              { text: "Notifications" },
            ]}
          />
        </View>

        <View
          className="gap-3 overflow-hidden border border-dashed border-f0-border"
          style={{ width: 300 }}
        >
          <Text className="font-semibold text-f0-foreground">dot</Text>
          <F0TagList type="dot" tags={tagListDotTags} />
        </View>
      </View>
    </ScrollView>
  )
}
