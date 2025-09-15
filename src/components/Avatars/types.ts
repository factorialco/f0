import { BadgeProps } from "../Badge";
import { ModuleId } from "./ModuleAvatar/modules";

export type AvatarBadge = (
  | {
      type: "module";
      module: ModuleId;
    }
  | {
      type: Exclude<BadgeProps["type"], undefined>;
      icon: BadgeProps["icon"];
    }
) & {
  tooltip?: string;
};
