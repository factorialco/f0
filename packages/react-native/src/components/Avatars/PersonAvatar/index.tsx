import { ComponentProps } from "react";
import { BaseAvatar } from "../BaseAvatar";
import { AvatarBadge } from "../types";

type BaseAvatarProps = ComponentProps<typeof BaseAvatar>;

export type PersonAvatarProps = {
  firstName: string;
  lastName: string;
  src?: string;
  size?: BaseAvatarProps["size"];
  badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

export const PersonAvatar = ({
  firstName,
  lastName,
  src,
  size,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  badge,
}: PersonAvatarProps) => {
  return (
    <BaseAvatar
      type="rounded"
      name={[firstName, lastName]}
      src={src}
      size={size}
      color="random"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      badge={badge}
    />
  );
};

PersonAvatar.displayName = "PersonAvatar";
