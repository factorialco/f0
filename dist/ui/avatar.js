'use strict';

var cva = require('cva');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var reactNative = require('react-native');
var jsxRuntime = require('react/jsx-runtime');

// src/ui/avatar.tsx
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var sizes = ["xsmall", "small", "medium", "large", "xlarge"];
var type = ["base", "rounded"];
var color = [
  "viridian",
  "malibu",
  "yellow",
  "purple",
  "lilac",
  "barbie",
  "smoke",
  "army",
  "flubber",
  "indigo",
  "camel"
];
var textSizes = {
  xsmall: "text-sm",
  small: "text-sm",
  medium: "text-md",
  large: "text-2xl",
  xlarge: "text-3xl"
};
var avatarVariants = cva.cva({
  base: "flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold",
  variants: {
    size: {
      xsmall: "w-5 h-5 rounded-xs",
      small: "w-6 h-6 rounded-sm",
      medium: "w-8 h-8 rounded",
      large: "w-14 h-14 rounded-xl",
      xlarge: "w-18 h-18 rounded-[20px]"
    },
    type: {
      base: "",
      rounded: "rounded-full"
    },
    color: {
      viridian: "bg-[hsl(theme(colors.viridian.50))]",
      malibu: "bg-[hsl(theme(colors.malibu.50))]",
      yellow: "bg-[hsl(theme(colors.yellow.50))]",
      purple: "bg-[hsl(theme(colors.purple.50))]",
      lilac: "bg-[hsl(theme(colors.lilac.50))]",
      barbie: "bg-[hsl(theme(colors.barbie.50))]",
      smoke: "bg-[hsl(theme(colors.smoke.50))]",
      army: "bg-[hsl(theme(colors.army.50))]",
      flubber: "bg-[hsl(theme(colors.flubber.50))]",
      indigo: "bg-[hsl(theme(colors.indigo.50))]",
      camel: "bg-[hsl(theme(colors.camel.50))]"
    }
  },
  defaultVariants: {
    size: "medium",
    type: "base",
    color: "viridian"
  }
});
var Avatar = ({ size, type: type2, color: color2, className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
  reactNative.View,
  {
    className: cn(avatarVariants({ size, type: type2, color: color2, className })),
    ...props
  }
);
var AvatarImage = ({
  className,
  alt,
  src,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: cn("aspect-square h-full w-full", className), ...props, children: /* @__PURE__ */ jsxRuntime.jsx(
  reactNative.Image,
  {
    style: { width: "100%", height: "100%" },
    source: {
      uri: src
    },
    "aria-label": alt
  }
) });
var AvatarFallback = ({
  className,
  size = "medium",
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
  reactNative.Text,
  {
    className: cn("text-f1-foreground-inverse/90", textSizes[size], className),
    ...props
  }
);

exports.Avatar = Avatar;
exports.AvatarFallback = AvatarFallback;
exports.AvatarImage = AvatarImage;
exports.color = color;
exports.sizes = sizes;
exports.type = type;
//# sourceMappingURL=avatar.js.map
//# sourceMappingURL=avatar.js.map