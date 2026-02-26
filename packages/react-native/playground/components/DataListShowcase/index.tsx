import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Calendar } from "src/icons/app";
import { useCSSVariable } from "uniwind";

import { DataList } from "../../../src/components/experimental/Lists/DataList";
import { AppIcons } from "../../../src/icons";

const { Check, Clock } = AppIcons;

export function DataListShowcase() {
  const [f0Foreground] = useCSSVariable(["--color-f0-foreground"]);

  const asString = (value: string | number | undefined): string => {
    if (typeof value === "string") return value;
    if (typeof value === "number") return String(value);
    return "#000000";
  };

  return (
    <ScrollView
      className="p-4"
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ width: "100%" }}
    >
      {/* Basic Items */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Basic Items
      </Text>
      <View className="mb-6">
        <DataList>
          <DataList.Item text="test" />
          <DataList.Item icon={Check} text="Make coffee" />
        </DataList>
      </View>

      {/* With Actions */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Items with Actions
      </Text>
      <View className="mb-6">
        <DataList>
          <DataList.Item text="hellen@factorial.co" action={{ type: "copy" }} />
          <DataList.Item
            action={{
              type: "generic",
              handlePress: () => console.log("Its work"),
            }}
            text="Factorial"
          />
          <DataList.Item
            action={{
              type: "generic",
              handlePress: () => console.log("Its work"),
            }}
            text="Banco Bilbao Vizcaya Argentaria"
          />
        </DataList>
      </View>

      {/* Person Items */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Person Items
      </Text>
      <View className="mb-6">
        <DataList>
          <DataList.PersonItem
            firstName="Saul"
            lastName="Dominguez"
            avatarUrl="https://avatars.githubusercontent.com/u/22561733?v=4"
          />
          <DataList.PersonItem
            firstName="Dani"
            lastName="Moreno"
            avatarUrl="https://avatars.githubusercontent.com/u/96433370?s=60&v=4"
            action={{ type: "copy", text: "Dani" }}
          />
          <DataList.PersonItem
            firstName="Josep Jaume"
            lastName="Rey Peroy"
            avatarUrl="https://avatars.githubusercontent.com/u/111746?s=60&v=4"
            action={{
              type: "generic",
              handlePress: () => console.log("Its work"),
            }}
          />
        </DataList>
      </View>

      {/* Company Items */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Company Items
      </Text>
      <View className="mb-6">
        <DataList>
          <DataList.CompanyItem
            name="Factorial"
            avatarUrl="https://avatars.githubusercontent.com/u/21041797?s=200&v=4"
          />
          <DataList.CompanyItem name="Acme Corp" action={{ type: "copy" }} />
        </DataList>
      </View>

      {/* Team Items */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Team Items
      </Text>
      <View className="mb-6">
        <DataList>
          <DataList.TeamItem name="Foundations" />
          <DataList.TeamItem
            name="Engineering"
            action={{
              type: "generic",
              handlePress: () => console.log("Team clicked"),
            }}
          />
        </DataList>
      </View>

      {/* Dot Tag Items */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Dot Tag Items
      </Text>
      <View className="mb-6">
        <DataList>
          <DataList.DotTagItem text="Design" color="viridian" />
          <DataList.DotTagItem text="Development" color="malibu" />
          <DataList.DotTagItem text="Marketing" color="yellow" />
        </DataList>
      </View>

      {/* With Label */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        With Label
      </Text>
      <View className="mb-6">
        <DataList label="Related Data">
          <DataList.Item text="test" />
          <DataList.Item icon={Check} text="Make coffee" />
        </DataList>
      </View>

      {/* Horizontal Layout */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Horizontal Layout
      </Text>
      <View className="mb-6">
        <DataList isHorizontalItem label="Status">
          <DataList.Item text="Active" />
          <DataList.Item text="Pending" />
          <DataList.Item text="Completed" />
        </DataList>
      </View>

      {/* Card Items */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Card Items
      </Text>
      <View className="mb-6">
        <DataList fullWidth>
          <DataList.CardItem
            name="Comprehensive Introduction to the Socio-Economic Impact of Fourth Industrial Revolution Technologies on Developing Markets in Southeast Asia"
            thumbnailUrl="https://picsum.photos/seed/training/600/400"
            action={{
              type: "generic",
              handlePress: () =>
                console.log("CardItem pressed: Training course"),
            }}
            metadata={[
              {
                type: "text",
                icon: Clock,
                value: "2 hours",
              },
              {
                type: "progress",
                value: "50",
              },
              {
                type: "dateAlert",
                value: "Due on Feb 13",
                level: "warning",
              },
            ]}
          />
          <DataList.CardItem
            name="Leadership & Team Management"
            thumbnailUrl="https://picsum.photos/seed/leadership/600/400"
            action={{
              type: "generic",
              handlePress: () => console.log("CardItem pressed: Leadership"),
            }}
            metadata={[
              {
                type: "statusTag",
                value: "Completed",
                status: "completed",
              },
              {
                type: "text",
                icon: Clock,
                value: "4 hours",
              },
              {
                type: "text",
                icon: Calendar,
                value: "Due Feb 13",
              },
            ]}
          />
          <DataList.CardItem
            name="Data Privacy & GDPR Compliance"
            thumbnailUrl="https://picsum.photos/seed/gdpr/600/400"
            metadata={[
              {
                type: "statusTag",
                value: "Not started",
                status: "neutral",
              },
              {
                type: "text",
                icon: Clock,
                value: "1 hour",
              },
              {
                type: "dateAlert",
                value: "Overdue",
                level: "critical",
              },
            ]}
          />
          <DataList.CardItem
            name="Introduction to TypeScript"
            metadata={[
              {
                type: "progress",
                value: "75",
              },
              {
                type: "text",
                icon: Clock,
                value: "1 hour",
              },
            ]}
          />
        </DataList>
      </View>

      {/* All Variants Combined */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        All Variants Combined
      </Text>
      <View className="mb-6">
        <DataList label="All Types">
          <DataList.Item text="Simple item" />
          <DataList.Item icon={Check} text="With icon" />
          <DataList.Item text="Copyable" action={{ type: "copy" }} />
          <DataList.Item
            text="Clickable"
            action={{
              type: "generic",
              handlePress: () => console.log("Clicked"),
            }}
          />
          <DataList.PersonItem firstName="John" lastName="Doe" />
          <DataList.CompanyItem name="Acme Corp" />
          <DataList.TeamItem name="Team Alpha" />
          <DataList.DotTagItem text="Tag" color="purple" />
        </DataList>
      </View>
    </ScrollView>
  );
}
