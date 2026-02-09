import { ReactNode } from "react";
import { Text, View } from "react-native";
import { cn } from "../../../lib/utils";
import { PressableFeedback } from "../../PressableFeedback";

type Props = {
  additionalAccesibleText?: string;
  onClick?: () => void;
  classNameContainer?: string;
  classNameText?: string;
} & (
  | {
      left: ReactNode;
      text?: string;
      right?: ReactNode;
    }
  | {
      left?: ReactNode;
      text: string;
      right?: ReactNode;
    }
);

export const BaseTag = ({
  left,
  text,
  right,
  additionalAccesibleText,
  onClick,
  classNameContainer,
  classNameText,
}: Props) => (
  <View className="flex items-start">
    <PressableFeedback
      className={cn(
        "flex flex-row items-center justify-start gap-0.5 rounded-full py-0.5 pr-2",
        onClick && "cursor-pointer",
        !text && "aspect-square w-6 items-center justify-center p-1",
        !left ? "pl-2" : "pl-1",
        classNameContainer,
      )}
      onPress={onClick}
      variant={onClick ? "both" : "none"}
      disabled={!onClick}
    >
      {left}
      {!!text && (
        <Text
          className={cn(
            "text-f1-foreground line-clamp-1 text-base font-medium",
            classNameText,
          )}
        >
          {text}
        </Text>
      )}
      {additionalAccesibleText && (
        <Text className="text-f1-foreground sr-only text-base font-medium">
          {additionalAccesibleText}
        </Text>
      )}
      {right}
    </PressableFeedback>
  </View>
);

BaseTag.displayName = "BaseTag";
