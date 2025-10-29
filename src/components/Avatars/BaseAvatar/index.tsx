import {
  Avatar as AvatarComponent,
  AvatarFallback,
  AvatarImage,
} from "../../../ui/avatar";
import { ComponentProps, useMemo } from "react";
import { Badge, BadgeProps } from "../../Badge";
import { getAvatarColor, getInitials } from "./utils";
import { View } from "react-native";
import { ModuleAvatar, ModuleAvatarProps } from "../ModuleAvatar";
import { AvatarBadge } from "../types";

const getAvatarSize = (
  size: ShadAvatarProps["size"],
): ModuleAvatarProps["size"] | undefined => {
  const sizeMap: Partial<
    Record<
      Exclude<ShadAvatarProps["size"], undefined>,
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
  size: ShadAvatarProps["size"],
): BadgeProps["size"] | undefined => {
  const sizeMap: Partial<
    Record<Exclude<ShadAvatarProps["size"], undefined>, BadgeProps["size"]>
  > = {
    xlarge: "lg",
    large: "md",
    small: "sm",
  } as const;

  return size && sizeMap[size] ? sizeMap[size] : sizeMap.small;
};

type ShadAvatarProps = ComponentProps<typeof AvatarComponent>;

type Props = {
  type: ShadAvatarProps["type"];
  name: string | string[];
  src?: string;
  size?: ShadAvatarProps["size"];
  color?: ShadAvatarProps["color"] | "random";
  badge?: AvatarBadge;
} & Pick<ShadAvatarProps, "aria-label" | "aria-labelledby">;

export const BaseAvatar = ({
  src,
  name,
  size,
  type = "base",
  color = "random",
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  badge,
}: Props) => {
  const initials = getInitials(name, size);
  const avatarColor =
    color === "random"
      ? getAvatarColor(Array.isArray(name) ? name.join("") : name)
      : color;

  const hasAria = Boolean(ariaLabel || ariaLabelledby);
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
        <AvatarComponent
          size={size}
          type={type}
          color={avatarColor}
          role="img"
          aria-hidden={!hasAria}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          data-a11y-color-contrast-ignore
          className={
            src
              ? "dark:bg-f1-background-inverse-secondary bg-f1-background"
              : ""
          }
        >
          {src ? (
            <AvatarImage src={src} alt={initials} />
          ) : (
            <AvatarFallback size={size} data-a11y-color-contrast-ignore>
              {initials}
            </AvatarFallback>
          )}
        </AvatarComponent>
      </View>
      {badge && (
        <View className="absolute -bottom-0.5 -right-0.5">{badgeContent}</View>
      )}
    </View>
  );
};

BaseAvatar.displayName = "BaseAvatar";
