import { ComponentProps, useMemo } from "react";
import { Text } from "react-native";
import { FileLike, getFileTypeInfo } from "./utils";
import { Avatar } from "../../../ui/avatar";
import { cn } from "../../../lib/utils";
import { BaseAvatar } from "../BaseAvatar";
import { AvatarBadge } from "../types";
import { ModuleAvatar, ModuleAvatarProps } from "../ModuleAvatar";
import { Badge, BadgeProps } from "../../Badge";
import { View } from "react-native";
import { getInitials } from "../BaseAvatar/utils";

type BaseAvatarProps = ComponentProps<typeof BaseAvatar>;

type Props = {
  file: FileLike;
  className?: string;
  size?: BaseAvatarProps["size"];
  badge?: AvatarBadge;
};

const textSizes = {
  xsmall: "text-xs",
  small: "text-xs",
  medium: "text-sm",
  large: "text-md",
  xlarge: "text-2xl",
};

const getAvatarSize = (
  size: BaseAvatarProps["size"],
): ModuleAvatarProps["size"] | undefined => {
  const sizeMap: Partial<
    Record<
      Exclude<BaseAvatarProps["size"], undefined>,
      ModuleAvatarProps["size"]
    >
  > = {
    xlarge: "lg",
    large: "md",
    small: "sm",
  } as const;

  return size && sizeMap[size] ? sizeMap[size] : sizeMap.small;
};

const getBadgeSize = (
  size: BaseAvatarProps["size"],
): BadgeProps["size"] | undefined => {
  const sizeMap: Partial<
    Record<Exclude<BaseAvatarProps["size"], undefined>, BadgeProps["size"]>
  > = {
    xlarge: "lg",
    large: "md",
    small: "sm",
  } as const;

  return size && sizeMap[size] ? sizeMap[size] : sizeMap.small;
};
export const FileAvatar = ({
  file,
  className,
  size = "medium",
  badge,
  ...props
}: Props) => {
  const { type: fileType, color: fileColor } = getFileTypeInfo(file);
  const initials = getInitials(fileType, size, true);
  const badgeSize = getBadgeSize(size);
  const moduleAvatarSize = getAvatarSize(size);
  const badgeContent = useMemo(
    () =>
      badge ? (
        <>
          {badge.type === "module" && (
            <ModuleAvatar module={badge.module} size={moduleAvatarSize} />
          )}
          {badge.type !== "module" && (
            <Badge type={badge.type} icon={badge.icon} size={badgeSize} />
          )}
        </>
      ) : null,
    [badge, badgeSize, moduleAvatarSize],
  );

  return (
    <View
      className={`inline-flex ${badge && badge.type === "module" ? "p-[3px]" : ""}`}
    >
      <View className="h-fit w-fit">
        <Avatar
          size={size}
          className={cn(
            "border border-solid border-f1-border-secondary bg-f1-background",
            className,
          )}
          {...props}
        >
          <Text
            className={cn(
              "font-semibold text-f1-foreground-inverse/90",
              textSizes[size],
              fileColor,
            )}
          >
            {initials}
          </Text>
        </Avatar>
      </View>
      {badge && (
        <View className="absolute -bottom-0.5 -right-0.5">{badgeContent}</View>
      )}
    </View>
  );
};

FileAvatar.displayName = "FileAvatar";
