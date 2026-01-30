import { baseColors } from "../../../styles";
import { BaseTag } from "../BaseTag";
import { useTextFormatEnforcer } from "../../../lib/text";
import { View } from "react-native";

export type NewColor = Extract<
  keyof typeof baseColors,
  | "viridian"
  | "malibu"
  | "yellow"
  | "purple"
  | "lilac"
  | "barbie"
  | "smoke"
  | "army"
  | "flubber"
  | "indigo"
  | "camel"
>;

export const dotTagColors = Object.keys(baseColors) as NewColor[];

export type DotTagProps = {
  text: string;
} & ({ color: NewColor } | { customColor: string });

export const DotTag = ({ text, ...props }: DotTagProps) => {
  useTextFormatEnforcer(text, { disallowEmpty: true });

  const backgroundColor =
    "color" in props && props.color
      ? `hsl(${baseColors[props.color][50]})`
      : "customColor" in props && props.customColor;

  if (!backgroundColor) return null;

  return (
    <BaseTag
      classNameContainer="border border-solid border-f1-border-secondary"
      left={
        <View
          className="m-1 aspect-square w-2 rounded-full"
          style={{
            backgroundColor,
          }}
          aria-hidden
        />
      }
      text={text}
    />
  );
};

DotTag.displayName = "DotTag";
