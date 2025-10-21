import { cva, type VariantProps } from "cva";
import { Text, View } from "react-native";
import { cn } from "../../lib/utils";

const counterContainerVariants = cva({
  base: "flex items-center justify-center rounded-xs grow-0 px-0.5",
  variants: {
    size: {
      md: "min-w-5 h-5",
      sm: "min-w-4 h-4",
    },
    type: {
      default: "bg-f1-background-secondary border border-f1-border",
      selected: "bg-f1-background-selected-bold outline-f1-border-selected",
      bold: "bg-f1-background-accent-bold",
    },
  },
  defaultVariants: {
    size: "md",
    type: "default",
  },
});

const counterTextVariants = cva({
  base: "text-center text-sm font-medium tabular-nums whitespace-nowrap",
  variants: {
    size: {
      md: "",
      sm: "leading-none py-0.5",
    },
    type: {
      default: "text-f1-foreground",
      selected: "text-f1-foreground-inverse",
      bold: "text-f1-foreground-inverse",
    },
  },
  defaultVariants: {
    type: "default",
  },
});

type CounterProps = {
  value: number;
  maxValue?: number;
} & VariantProps<typeof counterContainerVariants>;

export function Counter({ size, type, value, maxValue }: CounterProps) {
  const displayValue = maxValue && value > maxValue ? `+${maxValue}` : value;

  return (
    <View className="flex items-start">
      <View className={cn(counterContainerVariants({ size, type }))}>
        <Text className={cn(counterTextVariants({ type, size }))}>
          {displayValue}
        </Text>
      </View>
    </View>
  );
}
