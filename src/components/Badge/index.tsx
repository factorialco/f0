import { cva, type VariantProps } from "cva";
import { Icon, IconType } from "../Icon";

const badgeVariants = cva({
  base: "flex shrink-0 items-center justify-center rounded-full",
  variants: {
    type: {
      neutral: "bg-transparent text-f1-icon",
      highlight: "text-f1-special-highlight",
      positive: "bg-f1-background-positive-bold text-f1-foreground-inverse",
      critical: "bg-f1-icon-critical text-f1-foreground-inverse",
      warning: "bg-f1-background-warning-bold text-f1-foreground-inverse",
    },
    size: {
      xs: "h-2.5 w-2.5",
      sm: "h-3 w-3",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
  },
  defaultVariants: {
    type: "neutral",
    size: "md",
  },
});

const iconSizes = {
  xs: "xs",
  sm: "xs",
  md: "sm",
  lg: "md",
} as const;

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  icon: IconType;
  size?: keyof typeof iconSizes;
}

export const Badge = ({ type, size = "md", icon }: BadgeProps) => {
  return (
    <Icon
      className={badgeVariants({ type, size })}
      icon={icon}
      size={iconSizes[size]}
    />
  );
};
