import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "../../lib/utils";
import { Icon, type IconType } from "../Icon";
import { View, Text, Pressable } from "react-native";
import { CrossedCircle } from "../../icons/app";
import { PressableFeedback } from "../PressableFeedback";

export const chipContainerVariants = tv({
  base: "flex items-center gap-1 rounded-full border border-solid border-f1-border px-2 py-0.5 grow-0",
  variants: {
    variant: {
      default: "",
      selected: "border-f1-border-selected bg-f1-background-selected-secondary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const chipTextVariants = tv({
  base: "font-medium",
  variants: {
    variant: {
      default: "text-f1-foreground",
      selected: "text-f1-foreground-selected",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ChipProps extends VariantProps<typeof chipContainerVariants> {
  label: string;
  icon?: IconType;
  onClick?: () => void;
  onClose?: () => void;
}

export const OneChip = ({
  label,
  variant,
  onClick,
  onClose,
  icon,
}: ChipProps) => {
  return (
    <View className="flex items-start">
      <PressableFeedback
        className={cn(
          chipContainerVariants({ variant }),
          onClose && "pr-1.5",
          icon && "pl-1.5",
        )}
        onPress={onClick}
        variant="both"
        accessibilityRole="button"
        accessibilityLabel="Action"
      >
        <View className="flex flex-row items-center gap-0.5">
          {icon && (
            <Icon
              icon={icon}
              size="sm"
              className={chipTextVariants({ variant })}
            />
          )}
          <Text className={chipTextVariants({ variant })}>{label}</Text>
          {onClose && (
            <Pressable
              onPress={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="[&_svg]:text-f1-icon-secondary -m-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full"
              accessibilityRole="button"
              accessibilityLabel="Close"
            >
              <Icon
                icon={CrossedCircle}
                className={chipTextVariants({ variant })}
                size="sm"
              />
            </Pressable>
          )}
        </View>
      </PressableFeedback>
    </View>
  );
};
