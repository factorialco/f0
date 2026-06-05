import { cva as e } from "../../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
const o = e({
  base: [
    "relative flex flex-col rounded-2xl bg-f1-background",
    "border border-solid border-f1-border-secondary",
    "shadow transition-shadow duration-200",
    "w-[217px] h-[200px] p-4 gap-2"
  ],
  variants: {
    selected: {
      true: "shadow-none",
      false: "hover:shadow-md"
    }
  },
  defaultVariants: {
    selected: !1
  }
}), r = e({
  base: "text-lg font-semibold text-f1-foreground line-clamp-3"
}), t = e({
  base: "text-sm text-f1-foreground-secondary leading-normal"
}), n = e({
  base: "text-sm font-medium text-f1-foreground leading-normal"
});
export {
  o as cardVariants,
  t as descriptionVariants,
  r as headingVariants,
  n as labelVariants
};
