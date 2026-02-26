import React from "react"
import { ScrollView, Text, View } from "react-native"
import { Clock } from "src/icons/app"
import { useCSSVariable } from "uniwind"

import { DetailsItemsList } from "../../../src/components/experimental/Lists/DetailsItemsList"

export function DetailsItemsListShowcase() {
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
      {/* Primary */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Primary
      </Text>
      <View className="mb-6">
        <DetailsItemsList
          title="Details"
          details={[
            {
              title: "Legal entity",
              content: {
                type: "item",
                text: "Everyday Software SL",
                action: {
                  type: "copy",
                },
              },
            },
            {
              title: "Manager",
              content: {
                type: "person",
                firstName: "Saul",
                lastName: "Dominguez",
                avatarUrl: "https://github.com/sauldom102.png",
                action: {
                  type: "generic",
                  handlePress: () => console.log("Its work"),
                },
              },
            },
            {
              title: "Teams",
              content: [
                {
                  type: "team",
                  name: "Management",
                  action: {
                    type: "generic",
                    handlePress: () => console.log("Its work"),
                  },
                },
                {
                  type: "team",
                  name: "Engineering",
                  action: {
                    type: "generic",
                    handlePress: () => console.log("Its work"),
                  },
                },
              ],
            },
            {
              title: "Type",
              content: {
                type: "dot-tag",
                text: "Holidays",
                customColor: "#07A2AD",
              },
            },
          ]}
        />
      </View>

      {/* Table View */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Table View
      </Text>
      <View className="mb-6">
        <DetailsItemsList
          title={undefined}
          tableView={true}
          details={[
            {
              title: "Legal entity",
              content: {
                type: "item",
                text: "Everyday Software SL",
                action: {
                  type: "copy",
                },
              },
            },
            {
              title: "Manager",
              content: {
                type: "person",
                firstName: "Saul",
                lastName: "Dominguez",
                avatarUrl: "https://github.com/sauldom102.png",
                action: {
                  type: "generic",
                  handlePress: () => console.log("Its work"),
                },
              },
            },
            {
              title: "Teams",
              content: [
                {
                  type: "team",
                  name: "Management",
                  action: {
                    type: "generic",
                    handlePress: () => console.log("Its work"),
                  },
                },
                {
                  type: "team",
                  name: "Engineering",
                  action: {
                    type: "generic",
                    handlePress: () => console.log("Its work"),
                  },
                },
              ],
            },
            {
              title: "Type",
              content: {
                type: "dot-tag",
                text: "Holidays",
                customColor: "#07A2AD",
              },
            },
          ]}
        />
      </View>

      {/* Table View Horizontal Items */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Table View Horizontal Items
      </Text>
      <View className="mb-6">
        <DetailsItemsList
          title={undefined}
          tableView={true}
          isHorizontalItem={true}
          details={[
            {
              title: "Legal entity",
              content: {
                type: "item",
                text: "Everyday Software SL",
                action: {
                  type: "copy",
                },
              },
            },
            {
              title: "Manager",
              content: {
                type: "person",
                firstName: "Saul",
                lastName: "Dominguez",
                avatarUrl: "https://github.com/sauldom102.png",
                action: {
                  type: "generic",
                  handlePress: () => console.log("Its work"),
                },
              },
            },
            {
              title: "Teams",
              content: [
                {
                  type: "team",
                  name: "Management",
                  action: {
                    type: "generic",
                    handlePress: () => console.log("Its work"),
                  },
                },
                {
                  type: "team",
                  name: "Engineering",
                  action: {
                    type: "generic",
                    handlePress: () => console.log("Its work"),
                  },
                },
              ],
            },
            {
              title: "Type",
              content: {
                type: "dot-tag",
                text: "Holidays",
                customColor: "#07A2AD",
              },
            },
          ]}
        />
      </View>
    </ScrollView>
  )
}
