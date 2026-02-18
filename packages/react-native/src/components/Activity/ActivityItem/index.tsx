import { View, Text, Pressable } from "react-native";
import { useState } from "react";
import { IconType } from "../../Icon";
import { IconAvatar } from "../../Avatars/exports";

export type ActivityItemProps = {
  id: string;
  date: string;
  title: string;
  description?: string;
  icon?: IconType;
  category: string;
  isUnread?: boolean;
  onPress: (id: string) => void;
};

export const ActivityItem = ({
  id,
  date,
  title,
  description,
  icon,
  category,
  isUnread = false,
  onPress,
}: ActivityItemProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      className={`flex w-full flex-row gap-2 rounded-lg p-2 pr-3 ${isPressed ? "bg-f1-background-hover" : ""}`}
      onPressIn={() => setIsPressed(false)} // Disabled by default - no use case for now
      onPressOut={() => setIsPressed(false)}
      onPress={() => onPress(id)}
      accessibilityLabel="activity-item"
    >
      {icon && (
        <View accessibilityLabel="activity-icon-container">
          <IconAvatar icon={icon} size="md" />
        </View>
      )}
      <View className="flex-1">
        <Text className="line-clamp-1 text-lg font-medium text-f1-foreground">
          {title}
        </Text>
        <Text className="line-clamp-2 text-lg text-f1-foreground-secondary">
          {description}
        </Text>
        <View className="mt-1.5 flex flex-row">
          <Text className="text-md text-f1-foreground-secondary">{`${category} · ${date}`}</Text>
        </View>
      </View>
      <View className="ml-1">
        {isUnread && (
          <View
            accessibilityLabel="unread-indicator"
            className="mt-1.5 h-2 w-2 rounded-full bg-f1-icon-accent"
          />
        )}
      </View>
    </Pressable>
  );
};

export const ActivityItemSkeleton = () => {
  return (
    <View
      accessibilityLabel="activity-skeleton"
      className="flex w-full flex-row gap-2 rounded-lg p-2 pr-3"
    >
      {/* Avatar skeleton - match IconAvatar's border radius */}
      <View className="h-10 w-10 rounded-lg bg-f1-background-secondary" />

      <View className="flex-1">
        {/* Title skeleton */}
        <View className="mb-1 h-5 w-3/4 rounded-sm bg-f1-background-secondary" />

        {/* Description skeleton - two lines */}
        <View className="mb-1 h-5 w-full rounded-sm bg-f1-background-secondary" />
        <View className="mb-1.5 h-5 w-2/3 rounded-sm bg-f1-background-secondary" />

        {/* Category and date skeleton */}
        <View className="h-5 w-1/2 rounded-sm bg-f1-background-secondary" />
      </View>

      {/* Space for the unread indicator */}
      <View className="ml-1 w-2" />
    </View>
  );
};
