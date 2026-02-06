import React from "react";
import { ScrollView, View, Text } from "react-native";
import { DataList } from "../../../src/components/experimental/Lists/DataList";
import { AppIcons } from "../../../src/icons";
import { useCSSVariable } from "uniwind";

const { Check } = AppIcons;

export function DataListShowcase() {
  const [f1Foreground] = useCSSVariable(['--color-f1-foreground']);

  const asString = (value: string | number | undefined): string => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return String(value);
    return '#000000';
  };

  return (
    <ScrollView 
      className="p-4" 
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ width: "100%" }}
    >
      {/* Basic Items */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Basic Items
      </Text>
      <View className="mb-6">
        <DataList>
          <DataList.Item text="test" />
          <DataList.Item icon={Check} text="Make coffee" />
        </DataList>
      </View>

      {/* With Actions */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
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
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
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
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Company Items
      </Text>
      <View className="mb-6">
        <DataList>
          <DataList.CompanyItem
            name="Factorial"
            avatarUrl="https://avatars.githubusercontent.com/u/21041797?s=200&v=4"
          />
          <DataList.CompanyItem
            name="Acme Corp"
            action={{ type: "copy" }}
          />
        </DataList>
      </View>

      {/* Team Items */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Team Items
      </Text>
      <View className="mb-6">
        <DataList>
          <DataList.TeamItem name="Foundations" />
          <DataList.TeamItem 
            name="Engineering" 
            action={{ type: "generic", handlePress: () => console.log("Team clicked") }}
          />
        </DataList>
      </View>

      {/* Dot Tag Items */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
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
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        With Label
      </Text>
      <View className="mb-6">
        <DataList label="Related Data">
          <DataList.Item text="test" />
          <DataList.Item icon={Check} text="Make coffee" />
        </DataList>
      </View>

      {/* Horizontal Layout */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Horizontal Layout
      </Text>
      <View className="mb-6">
        <DataList isHorizontalItem label="Status">
          <DataList.Item text="Active" />
          <DataList.Item text="Pending" />
          <DataList.Item text="Completed" />
        </DataList>
      </View>

      {/* All Variants Combined */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        All Variants Combined
      </Text>
      <View className="mb-6">
        <DataList label="All Types">
          <DataList.Item text="Simple item" />
          <DataList.Item icon={Check} text="With icon" />
          <DataList.Item text="Copyable" action={{ type: "copy" }} />
          <DataList.Item text="Clickable" action={{ type: "generic", handlePress: () => console.log("Clicked") }} />
          <DataList.PersonItem firstName="John" lastName="Doe" />
          <DataList.CompanyItem name="Acme Corp" />
          <DataList.TeamItem name="Team Alpha" />
          <DataList.DotTagItem text="Tag" color="purple" />
        </DataList>
      </View>
    </ScrollView>
  );
}
