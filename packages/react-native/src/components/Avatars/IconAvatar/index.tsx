import { View } from "react-native";
import { cn } from "../../../lib/utils";
import { Icon, IconType } from "../../Icon";

type Props = {
  icon: IconType;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "h-6 w-6 rounded-sm",
  md: "h-9 w-9 rounded-md",
  lg: "h-10 w-10 rounded-lg",
};

export const IconAvatar = ({ icon, size = "md", className }: Props) => {
  return (
    <View
      className={cn(
        "flex aspect-square items-center justify-center border border-solid border-f1-border-secondary",
        sizes[size],
        className,
      )}
    >
      <Icon icon={icon} size={size} className="text-f1-foreground-secondary" />
    </View>
  );
};

IconAvatar.displayName = "IconAvatar";
