import { tv, type VariantProps } from "tailwind-variants";

/**
 * Text component variants using tailwind-variants
 * Font weights (font-normal, font-medium, font-semibold) map to
 * Inter font families (Inter-Regular, Inter-Medium, Inter-SemiBold)
 */
export const textVariants = tv({
  base: "",
  variants: {
    variant: {
      // Heading variants
      "heading-lg":
        "text-[24px] leading-[32px] tracking-[-0.2px] font-semibold",
      "heading-md":
        "text-[20px] leading-[28px] tracking-[-0.2px] font-semibold",
      "heading-sm": "text-[16px] leading-[24px] font-semibold",

      // Body variants with weight included in variant name
      "body-md-default": "text-[16px] leading-[24px] font-normal",
      "body-md-medium": "text-[16px] leading-[24px] font-medium",
      "body-md-semibold": "text-[16px] leading-[24px] font-semibold",
      "body-sm-default": "text-[14px] leading-[20px] font-normal",
      "body-sm-medium": "text-[14px] leading-[20px] font-medium",
      "body-sm-semibold": "text-[14px] leading-[20px] font-semibold",
      "body-xs-medium": "text-[12px] leading-[16px] font-medium",
    },
    color: {
      default: "text-f1-foreground",
      secondary: "text-f1-foreground-secondary",
      tertiary: "text-f1-foreground-tertiary",
      inverse: "text-f1-foreground-inverse",
      "inverse-secondary": "text-f1-foreground-inverse-secondary",
      disabled: "text-f1-foreground-disabled",
      accent: "text-f1-foreground-accent",
      critical: "text-f1-foreground-critical",
      info: "text-f1-foreground-info",
      warning: "text-f1-foreground-warning",
      positive: "text-f1-foreground-positive",
      selected: "text-f1-foreground-selected",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    decoration: {
      none: "",
      underline: "underline",
      "line-through": "line-through",
    },
    transform: {
      none: "",
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
    },
  },
  defaultVariants: {
    variant: "body-sm-default",
    color: "default",
    align: "left",
    decoration: "none",
    transform: "none",
  },
});

export type TextVariants = VariantProps<typeof textVariants>;
