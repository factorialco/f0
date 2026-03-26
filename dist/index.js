"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  absoluteSpacing: () => absoluteSpacing,
  baseColors: () => baseColors,
  betweenSpacing: () => betweenSpacing,
  borderRadius: () => borderRadius,
  breakpoints: () => breakpoints,
  f1Colors: () => f1Colors,
  relativeSpacing: () => relativeSpacing
});
module.exports = __toCommonJS(index_exports);

// src/tokens/borderRadius.ts
var borderRadius = {
  none: "0px",
  "2xs": "0.25rem",
  xs: "0.375rem",
  sm: "0.5rem",
  DEFAULT: "0.625rem",
  md: "0.75rem",
  lg: "0.875rem",
  xl: "1rem",
  "2xl": "1.5rem",
  full: "9999px"
};

// src/tokens/breakpoints.ts
var breakpoints = {
  md: 900,
  lg: 1200,
  xl: 1440
};

// src/tokens/colors.ts
var baseColors = {
  white: {
    3: "0 0% 100% / 0.03",
    5: "0 0% 100% / 0.05",
    10: "0 0% 100% / 0.1",
    20: "0 0% 100% / 0.2",
    30: "0 0% 100% / 0.3",
    40: "0 0% 100% / 0.4",
    50: "0 0% 100% / 0.5",
    60: "0 0% 100% / 0.6",
    70: "0 0% 100% / 0.7",
    80: "0 0% 100% / 0.8",
    90: "0 0% 100% / 0.9",
    100: "0 0% 100%"
  },
  current: "currentColor",
  transparent: "transparent",
  grey: {
    0: "210 91% 22% / 0.02",
    5: "220 88% 17% / 0.04",
    10: "216 89% 18% / 0.06",
    20: "214 70% 20% / 0.1",
    30: "213 87% 15% / 0.20",
    40: "219 97% 15% / 0.45",
    50: "217 96% 11% / 0.61",
    60: "220 88% 10% / 0.82",
    70: "219 91% 8% / 0.88",
    80: "219 94% 7% / 0.9",
    90: "219 88% 6% / 0.92",
    100: "218 48% 10%",
    solid: {
      40: "219 18% 69%",
      50: "218 14% 45%"
    }
  },
  lilac: {
    50: "340 49% 60%",
    60: "341 34% 50%",
    70: "340 33% 41%"
  },
  barbie: {
    50: "331 84% 63%",
    60: "331 55% 53%",
    70: "330 49% 43%"
  },
  smoke: {
    50: "192 26% 54%",
    60: "192 22% 45%",
    70: "192 22% 37%"
  },
  army: {
    50: "162 44% 33%",
    60: "163 45% 28%",
    70: "162 44% 23%"
  },
  flubber: {
    50: "84 55% 53%",
    60: "84 48% 45%",
    70: "83 48% 33%"
  },
  indigo: {
    50: "239 91% 64%",
    60: "239 59% 54%",
    70: "239 51% 44%"
  },
  camel: {
    50: "25 46% 53%",
    60: "25 42% 44%",
    70: "25 42% 36%"
  },
  radical: {
    50: "348 80% 50%",
    60: "348 80% 42%",
    70: "347 80% 34%"
  },
  viridian: {
    50: "184 92% 35%",
    60: "184 92% 28%",
    70: "184 92% 24%"
  },
  orange: {
    50: "25 95% 53%",
    60: "24 69% 49%",
    70: "24 69% 40%"
  },
  red: {
    50: "5 100% 65%",
    60: "4 61% 49%",
    70: "3 71% 41%"
  },
  grass: {
    50: "160 84% 39%",
    60: "160 85% 33%",
    70: "161 84% 27%"
  },
  malibu: {
    50: "216 90% 65%",
    60: "216 59% 55%",
    70: "216 48% 44%"
  },
  yellow: {
    50: "38 92% 54%",
    60: "38 79% 45%",
    70: "38 80% 36%"
  },
  purple: {
    50: "258 88% 67%",
    60: "258 56% 56%",
    70: "258 43% 46%"
  }
};
var f1Colors = {
  foreground: {
    DEFAULT: "hsl(var(--neutral-100))",
    secondary: "hsl(var(--neutral-50))",
    tertiary: "hsl(var(--neutral-40))",
    inverse: {
      DEFAULT: "hsl(var(--white-100))",
      secondary: "hsl(var(--white-80))"
    },
    disabled: "hsl(var(--neutral-30))",
    accent: "hsl(var(--accent-70))",
    critical: "hsl(var(--critical-70))",
    info: "hsl(var(--info-70))",
    warning: "hsl(var(--warning-70))",
    positive: "hsl(var(--positive-70))",
    selected: "hsl(var(--selected-70))"
  },
  background: {
    DEFAULT: "hsl(var(--neutral-0))",
    hover: "hsl(var(--neutral-5))",
    secondary: {
      DEFAULT: "hsl(var(--neutral-10))",
      hover: "hsl(var(--neutral-20))"
    },
    tertiary: "hsl(var(--neutral-5))",
    inverse: {
      DEFAULT: "hsl(var(--neutral-90))",
      secondary: "hsl(var(--white-60))"
    },
    bold: "hsl(var(--neutral-90))",
    accent: {
      DEFAULT: "hsl(var(--accent-50) / 0.05)",
      bold: {
        DEFAULT: "hsl(var(--accent-50))",
        hover: "hsl(var(--accent-60))"
      }
    },
    promote: {
      DEFAULT: "hsl(var(--promote-50) / 0.3)",
      hover: "hsl(var(--promote-50) / 0.4)"
    },
    critical: {
      DEFAULT: "hsl(var(--critical-50) / 0.1)",
      bold: "hsl(var(--critical-60))"
    },
    info: {
      DEFAULT: "hsl(var(--info-50) / 0.1)",
      bold: "hsl(var(--info-50))"
    },
    warning: {
      DEFAULT: "hsl(var(--warning-50) / 0.1)",
      bold: "hsl(var(--warning-50))"
    },
    positive: {
      DEFAULT: "hsl(var(--positive-50) / 0.1)",
      bold: "hsl(var(--positive-50))"
    },
    selected: {
      DEFAULT: "hsl(var(--selected-50) / 0.1)",
      secondary: "hsl(var(--selected-50) / 0.05)",
      hover: "hsl(var(--selected-50) / 0.2)",
      bold: {
        DEFAULT: "hsl(var(--selected-60))",
        hover: "hsl(var(--selected-70))"
      }
    },
    overlay: {
      DEFAULT: "hsl(var(--neutral-40))"
    }
  },
  border: {
    DEFAULT: "hsl(var(--neutral-30))",
    hover: "hsl(var(--neutral-40))",
    secondary: "hsl(var(--neutral-10))",
    inverse: "hsl(var(--neutral-0) / 0.2)",
    bold: "hsl(var(--neutral-100))",
    promote: {
      DEFAULT: "hsl(var(--promote-50) / 0.4)"
    },
    selected: {
      DEFAULT: "hsl(var(--selected-50) / 0.4)",
      bold: "hsl(var(--selected-50))"
    },
    critical: {
      DEFAULT: "hsl(var(--critical-50) / 0.1)",
      bold: "hsl(var(--critical-50))"
    },
    warning: {
      DEFAULT: "hsl(var(--warning-50) / 0.1)",
      bold: "hsl(var(--warning-50))"
    },
    info: {
      DEFAULT: "hsl(var(--info-50) / 0.1)",
      bold: "hsl(var(--info-50))"
    },
    positive: {
      DEFAULT: "hsl(var(--positive-50) / 0.1)",
      bold: "hsl(var(--positive-50))"
    }
  },
  icon: {
    DEFAULT: "hsl(var(--neutral-solid-50))",
    secondary: "hsl(var(--neutral-solid-40))",
    inverse: "hsl(var(--neutral-0))",
    bold: "hsl(var(--neutral-100))",
    critical: {
      DEFAULT: "hsl(var(--critical-50))",
      bold: "hsl(var(--critical-70))"
    },
    accent: "hsl(var(--accent-50))",
    info: "hsl(var(--info-50))",
    warning: "hsl(var(--warning-50))",
    positive: "hsl(var(--positive-50))",
    promote: "hsl(var(--promote-50))",
    selected: {
      DEFAULT: "hsl(var(--selected-60))",
      hover: "hsl(var(--selected-70))"
    },
    mood: {
      "super-negative": "hsl(var(--mood-super-negative))",
      negative: "hsl(var(--mood-negative))",
      neutral: "hsl(var(--mood-neutral))",
      positive: "hsl(var(--mood-positive))",
      "super-positive": "hsl(var(--mood-super-positive))"
    }
  },
  special: {
    ring: "hsl(var(--ring))",
    page: "hsl(var(--page))",
    highlight: "hsl(var(--accent-50))"
  }
};

// src/tokens/spacing.ts
var absoluteSpacing = {
  px: "1px",
  0: "0px",
  0.5: "2px",
  1: "4px",
  1.5: "6px",
  2: "8px",
  2.5: "10px",
  3: "12px",
  3.5: "14px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  11: "44px",
  12: "48px",
  14: "56px",
  16: "64px",
  18: "72px",
  20: "80px",
  24: "96px",
  28: "112px",
  32: "128px",
  36: "144px",
  40: "160px",
  44: "176px",
  48: "192px",
  52: "208px",
  56: "224px",
  60: "240px",
  64: "256px",
  72: "288px",
  80: "320px",
  96: "384px"
};
var relativeSpacing = {
  px: "1px",
  0: "0px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  18: "4.5rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};
var betweenSpacing = {
  sm: relativeSpacing[1],
  md: relativeSpacing[2],
  lg: relativeSpacing[3],
  xl: relativeSpacing[4]
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  absoluteSpacing,
  baseColors,
  betweenSpacing,
  borderRadius,
  breakpoints,
  f1Colors,
  relativeSpacing
});
//# sourceMappingURL=index.js.map