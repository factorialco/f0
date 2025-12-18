import * as AIIcons from "@/icons/ai";
import { forwardRef } from "react";
import { ButtonInternal } from "@/f0/F0Button/internal";
import { ButtonInternalProps } from "../F0Button/internal-types";

// Create a type that only includes AI icon types
type AIIconType = (typeof AIIcons)[keyof typeof AIIcons];

const privateProps = [
  "append",
  "className",
  "pressed",
  "compact",
  "noTitle",
  "noAutoTooltip",
  "style",
  "variant",
  "loading",
  "emoji",
] as const;

export type AIButtonProps = Omit<
  ButtonInternalProps,
  (typeof privateProps)[number] | "icon"
> & {
  icon?: AIIconType;
};

const AIButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  AIButtonProps
>((props, ref) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc;
    return rest;
  }, props as ButtonInternalProps);

  return (
    <ButtonInternal
      {...publicProps}
      variant="ai"
      ref={ref}
      iconRotate={props.icon == AIIcons.One ? true : false}
    />
  );
});

AIButton.displayName = "AIButton";

export { AIButton };
