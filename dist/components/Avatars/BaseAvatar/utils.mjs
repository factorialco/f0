import { cva } from 'cva';
import 'clsx';
import 'tailwind-merge';
import 'react-native';
import 'react/jsx-runtime';

// src/ui/avatar.tsx
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
cva({
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

// src/components/Avatars/BaseAvatar/utils.ts
function getInitials(name, size, isFile) {
  const nameArray = Array.isArray(name) ? name : [name];
  const isSmall = size === "xsmall" || size === "small";
  const minChar = isFile ? 3 : 2;
  if (isSmall) return (nameArray[0]?.[0] ?? "").toUpperCase();
  if (!Array.isArray(name)) return name.slice(0, minChar).toUpperCase();
  return nameArray.slice(0, minChar).map((name2) => name2[0]).join("").toUpperCase();
}
function getAvatarColor(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  const index = (hash % color.length + color.length) % color.length;
  return color[index];
}
var getMask = {
  base: {
    xlarge: "path('M72 0H0V72H52.202C49.6089 69.459 48 65.9174 48 62C48 54.268 54.268 48 62 48C65.9174 48 69.459 49.6089 72 52.202V0ZM72 71.798C71.9333 71.866 71.866 71.9333 71.798 72H72V71.798Z')",
    large: "path('M56 0H0V56H39.0556C37.1554 53.877 36 51.0734 36 48C36 41.3726 41.3726 36 48 36C51.0734 36 53.877 37.1554 56 39.0556V0Z')",
    medium: "path('M32 0H0V32H22.2547C21.4638 30.8662 21 29.4872 21 28C21 24.134 24.134 21 28 21C29.4872 21 30.8662 21.4638 32 22.2547V0Z')",
    small: "path('M24 0H0V24H14.2547C13.4638 22.8662 13 21.4872 13 20C13 16.134 16.134 13 20 13C21.4872 13 22.8662 13.4638 24 14.2547V0Z')",
    xsmall: "path('M20 0H0V20H10.2547C9.46381 18.8662 9 17.4872 9 16C9 12.134 12.134 9 16 9C17.4872 9 18.8662 9.46381 20 10.2547V0Z')"
  },
  rounded: {
    xlarge: "path('M69.1842 49.9814C70.9975 45.6828 72 40.9585 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72C40.9585 72 45.6828 70.9975 49.9814 69.1842C48.7232 67.0839 48 64.6264 48 62C48 54.268 54.268 48 62 48C64.6264 48 67.0839 48.7232 69.1842 49.9814Z')",
    large: "path('M54.2534 37.7562C55.3828 34.7182 56 31.4312 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56C31.4312 56 34.7182 55.3828 37.7562 54.2534C36.6421 52.4324 36 50.2912 36 48C36 41.3726 41.3726 36 48 36C50.2912 36 52.4324 36.6421 54.2534 37.7562Z')",
    medium: "path('M30.9702 21.6596C31.6358 19.9001 32 17.9926 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C17.9926 32 19.9001 31.6358 21.6596 30.9702C21.2365 30.0686 21 29.0619 21 28C21 24.134 24.134 21 28 21C29.0619 21 30.0686 21.2365 30.9702 21.6596Z')",
    small: "path('M23.8119 14.128C23.9355 13.4373 24 12.7262 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C12.7262 24 13.4373 23.9355 14.128 23.8119C13.4145 22.7151 13 21.406 13 20C13 16.134 16.134 13 20 13C21.406 13 22.7151 13.4145 23.8119 14.128Z')",
    xsmall: "path('M19.9969 10.2525C19.999 10.1686 20 10.0844 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C10.0844 20 10.1686 19.999 10.2525 19.9969C9.46297 18.8636 9 17.4859 9 16C9 12.134 12.134 9 16 9C17.4859 9 18.8636 9.46297 19.9969 10.2525Z')"
  },
  get: (type = "base", size = "medium") => getMask[type][size]
};

export { getAvatarColor, getInitials, getMask };
//# sourceMappingURL=utils.mjs.map
//# sourceMappingURL=utils.mjs.map