import React from "react";
import { ScrollView, View, Text } from "react-native";
import {
  PersonAvatar,
  CompanyAvatar,
  TeamAvatar,
  DateAvatar,
  EmojiAvatar,
  IconAvatar,
  ModuleAvatar,
  FileAvatar,
} from "../../../src/components/Avatars/exports";
import { Avatar } from "../../../src/ui/avatar";
import { AppIcons } from "../../../src/icons";
import { useCSSVariable } from "uniwind";

const { Check, Alert, Home } = AppIcons;

export function AvatarShowcase() {
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
      {/* PersonAvatar */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Person Avatar
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        <View className="items-center">
          <PersonAvatar firstName="John" lastName="Doe" size="xsmall" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            XSmall
          </Text>
        </View>
        <View className="items-center">
          <PersonAvatar firstName="Jane" lastName="Smith" size="small" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Small
          </Text>
        </View>
        <View className="items-center">
          <PersonAvatar firstName="Bob" lastName="Johnson" size="medium" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Medium
          </Text>
        </View>
        <View className="items-center">
          <PersonAvatar firstName="Alice" lastName="Williams" size="large" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Large
          </Text>
        </View>
        <View className="items-center">
          <PersonAvatar firstName="Charlie" lastName="Brown" size="xlarge" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            XLarge
          </Text>
        </View>
      </View>

      {/* CompanyAvatar */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Company Avatar
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        <View className="items-center">
          <CompanyAvatar name="Acme Corp" size="small" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Small
          </Text>
        </View>
        <View className="items-center">
          <CompanyAvatar name="Tech Inc" size="medium" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Medium
          </Text>
        </View>
        <View className="items-center">
          <CompanyAvatar name="Global Systems" size="large" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Large
          </Text>
        </View>
      </View>

      {/* TeamAvatar */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Team Avatar
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        <View className="items-center">
          <TeamAvatar name="Engineering" size="small" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Small
          </Text>
        </View>
        <View className="items-center">
          <TeamAvatar name="Design Team" size="medium" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Medium
          </Text>
        </View>
        <View className="items-center">
          <TeamAvatar name="Marketing" size="large" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Large
          </Text>
        </View>
      </View>

      {/* DateAvatar */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Date Avatar
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        <View className="items-center">
          <DateAvatar date={new Date(2024, 0, 15)} />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Jan 15
          </Text>
        </View>
        <View className="items-center">
          <DateAvatar date={new Date(2024, 5, 20)} />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Jun 20
          </Text>
        </View>
        <View className="items-center">
          <DateAvatar date={new Date(2024, 11, 25)} />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Dec 25
          </Text>
        </View>
      </View>

      {/* EmojiAvatar */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Emoji Avatar
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        <View className="items-center">
          <EmojiAvatar emoji="😀" size="sm" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Small
          </Text>
        </View>
        <View className="items-center">
          <EmojiAvatar emoji="🎉" size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Medium
          </Text>
        </View>
        <View className="items-center">
          <EmojiAvatar emoji="🚀" size="lg" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Large
          </Text>
        </View>
      </View>

      {/* IconAvatar */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Icon Avatar
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        <View className="items-center">
          <IconAvatar icon={Home} size="sm" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Small
          </Text>
        </View>
        <View className="items-center">
          <IconAvatar icon={Check} size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Medium
          </Text>
        </View>
        <View className="items-center">
          <IconAvatar icon={Alert} size="lg" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Large
          </Text>
        </View>
      </View>

      {/* ModuleAvatar */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Module Avatar
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        <View className="items-center">
          <ModuleAvatar module="home" size="sm" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Small
          </Text>
        </View>
        <View className="items-center">
          <ModuleAvatar module="calendar" size="md" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Medium
          </Text>
        </View>
        <View className="items-center">
          <ModuleAvatar module="tasks" size="lg" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Large
          </Text>
        </View>
        <View className="items-center">
          <ModuleAvatar module="goals" size="xl" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            XLarge
          </Text>
        </View>
      </View>

      {/* FileAvatar */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        File Avatar
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        <View className="items-center">
          <FileAvatar file={{ name: "document.pdf" }} size="small" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            PDF
          </Text>
        </View>
        <View className="items-center">
          <FileAvatar file={{ name: "image.jpg" }} size="medium" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Image
          </Text>
        </View>
        <View className="items-center">
          <FileAvatar file={{ name: "spreadsheet.xlsx" }} size="large" />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Excel
          </Text>
        </View>
      </View>

      {/* Avatar Colors */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Avatar Colors
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        {(["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"] as const).map((color) => (
          <View key={color} className="items-center">
            <Avatar size="medium" color={color} />
            <Text className="text-xs mt-2 text-center capitalize" style={{ color: asString(f1Foreground) }}>
              {color}
            </Text>
          </View>
        ))}
      </View>

      {/* Avatars with Badges */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Avatars with Badges
      </Text>
      <View className="flex-row flex-wrap gap-4 mb-6 items-center">
        <View className="items-center">
          <PersonAvatar
            firstName="John"
            lastName="Doe"
            size="medium"
            badge={{ type: "positive", icon: Check }}
          />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            With Badge
          </Text>
        </View>
        <View className="items-center">
          <CompanyAvatar
            name="Acme Corp"
            size="medium"
            badge={{ type: "module", module: "home" }}
          />
          <Text className="text-xs mt-2 text-center" style={{ color: asString(f1Foreground) }}>
            Module Badge
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
