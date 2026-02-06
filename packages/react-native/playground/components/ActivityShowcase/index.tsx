import React from "react";
import { ScrollView, View, Text } from "react-native";
import { ActivityItem, ActivityItemSkeleton } from "../../../src/components/Activity/ActivityItem";
import { AppIcons } from "../../../src/icons";
import { useCSSVariable } from "uniwind";

const { Check, Alert, Home, Settings, Archive, Bell, MessageFilled } = AppIcons;

export function ActivityShowcase() {
  const [f1Foreground] = useCSSVariable(['--color-f1-foreground']);

  const asString = (value: string | number | undefined): string => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return String(value);
    return '#000000';
  };

  const handlePress = (id: string) => {
    console.log("Activity pressed:", id);
  };

  return (
    <ScrollView 
      className="p-4" 
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ width: "100%" }}
    >
      {/* Basic Activity Items */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Basic Activity Items
      </Text>
      <View className="gap-2 mb-6">
        <ActivityItem
          id="1"
          title="New message received"
          description="You have a new message from John Doe"
          category="Messages"
          date="2 hours ago"
          icon={MessageFilled}
          onPress={handlePress}
        />
        <ActivityItem
          id="2"
          title="Task completed"
          description="Your task 'Review design mockups' has been completed"
          category="Tasks"
          date="5 hours ago"
          icon={Check}
          onPress={handlePress}
        />
        <ActivityItem
          id="3"
          title="System alert"
          description="System maintenance scheduled for tonight at 2 AM"
          category="System"
          date="1 day ago"
          icon={Alert}
          onPress={handlePress}
        />
      </View>

      {/* With Unread Indicator */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Unread Activities
      </Text>
      <View className="gap-2 mb-6">
        <ActivityItem
          id="4"
          title="New notification"
          description="You have 3 new notifications"
          category="Notifications"
          date="30 minutes ago"
          icon={Bell}
          isUnread
          onPress={handlePress}
        />
        <ActivityItem
          id="5"
          title="Archive updated"
          description="New files have been added to the archive"
          category="Archive"
          date="1 hour ago"
          icon={Archive}
          isUnread
          onPress={handlePress}
        />
      </View>

      {/* Without Description */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Without Description
      </Text>
      <View className="gap-2 mb-6">
        <ActivityItem
          id="6"
          title="Settings updated"
          category="Settings"
          date="3 hours ago"
          icon={Settings}
          onPress={handlePress}
        />
        <ActivityItem
          id="7"
          title="Home page visited"
          category="Navigation"
          date="6 hours ago"
          icon={Home}
          onPress={handlePress}
        />
      </View>

      {/* Without Icon */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Without Icon
      </Text>
      <View className="gap-2 mb-6">
        <ActivityItem
          id="8"
          title="Activity without icon"
          description="This activity item doesn't have an icon"
          category="General"
          date="2 days ago"
          onPress={handlePress}
        />
        <ActivityItem
          id="9"
          title="Another activity"
          description="This is another example without an icon"
          category="General"
          date="3 days ago"
          isUnread
          onPress={handlePress}
        />
      </View>

      {/* Long Descriptions */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Long Descriptions
      </Text>
      <View className="gap-2 mb-6">
        <ActivityItem
          id="10"
          title="Long title that might wrap to multiple lines if it's really long"
          description="This is a very long description that should be truncated after two lines. It contains a lot of text to demonstrate how the component handles long content gracefully."
          category="Long Content"
          date="1 week ago"
          icon={Alert}
          onPress={handlePress}
        />
      </View>

      {/* Skeleton Loading State */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Skeleton Loading State
      </Text>
      <View className="gap-2 mb-6">
        <ActivityItemSkeleton />
        <ActivityItemSkeleton />
        <ActivityItemSkeleton />
      </View>

      {/* Mixed States */}
      <Text className="text-lg font-bold mb-4" style={{ color: asString(f1Foreground) }}>
        Mixed States
      </Text>
      <View className="gap-2 mb-6">
        <ActivityItem
          id="11"
          title="Read activity"
          description="This activity has been read"
          category="General"
          date="1 hour ago"
          icon={Check}
          onPress={handlePress}
        />
        <ActivityItem
          id="12"
          title="Unread activity"
          description="This activity is unread"
          category="General"
          date="30 minutes ago"
          icon={Bell}
          isUnread
          onPress={handlePress}
        />
        <ActivityItem
          id="13"
          title="Activity without description"
          category="General"
          date="2 hours ago"
          icon={Home}
          onPress={handlePress}
        />
        <ActivityItem
          id="14"
          title="Activity without icon"
          description="This activity doesn't have an icon"
          category="General"
          date="3 hours ago"
          isUnread
          onPress={handlePress}
        />
      </View>
    </ScrollView>
  );
}
