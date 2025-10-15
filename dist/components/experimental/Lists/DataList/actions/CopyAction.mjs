import { forwardRef, useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cva } from 'cva';
import { cssInterop } from 'nativewind';
import { jsx, jsxs } from 'react/jsx-runtime';
import Svg, { Path, Circle, Rect, Mask } from 'react-native-svg';
import { Pressable, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';

// src/components/experimental/Lists/DataList/actions/CopyAction.tsx
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var iconVariants = cva({
  base: "shrink-0",
  variants: {
    size: {
      xl: "w-8 h-8 stroke-xl",
      lg: "w-6 h-6 stroke-lg",
      md: "w-5 h-5 stroke-md",
      sm: "w-4 h-4 stroke-sm",
      xs: "w-3 h-3 stroke-xs"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var interopAppliedIcons = /* @__PURE__ */ new WeakSet();
function applyIconInterop(icon) {
  if (!interopAppliedIcons.has(icon)) {
    cssInterop(icon, {
      className: {
        target: "style",
        nativeStyleToProp: {
          color: true,
          opacity: true
        }
      }
    });
    interopAppliedIcons.add(icon);
  }
  return icon;
}
var Icon = forwardRef(function Icon2({ size, icon, className, testID, ...props }, ref) {
  if (!icon) return null;
  const Component = applyIconInterop(icon);
  return /* @__PURE__ */ jsx(
    Component,
    {
      ref,
      ...props,
      className: cn(iconVariants({ size }), className),
      testID
    }
  );
});
var SvgArrowCycle = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12.038 4.998a7.002 7.002 0 0 0-4.932 12.01m9.788-10.015a7 7 0 0 1 1.345 1.833 7.002 7.002 0 0 1-6.277 10.176"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m8.516 15.426-.58 2.769-2.768-.58M16.14 9.236l.58-2.769 2.768.579"
        }
      )
    ]
  }
);
forwardRef(SvgArrowCycle);
var SvgChartPie = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M11 13h7a7 7 0 1 1-7-7z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M14 4a6 6 0 0 1 6 6h-6z"
        }
      )
    ]
  }
);
forwardRef(SvgChartPie);
var SvgCheckDouble = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m12 18 7.5-10M4.5 13l3.178 3.178a1 1 0 0 0 1.512-.114L15.5 7.5"
      }
    )
  }
);
forwardRef(SvgCheckDouble);
var SvgFileFilled = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M14.879 4.879 17.12 7.12A3 3 0 0 1 18 9.243V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h3.757a3 3 0 0 1 2.122.879M14 12h-4M12 16h-2"
      }
    )
  }
);
forwardRef(SvgFileFilled);
var SvgMaximize = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M13.5 10.5 19 5m0 0h-4m4 0v4M10.5 13.5 5 19m0 0h4m-4 0v-4"
      }
    )
  }
);
forwardRef(SvgMaximize);
var SvgMicrophoneNegative = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 11V7a3 3 0 0 0-5.784-1.119M10.34 13.5a3 3 0 0 1-.886-.91"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M6 11a6 6 0 0 0 7.114 5.897M18 11c0 .923-.209 1.798-.581 2.58M12 17v3m0 0h-2m2 0h2M5 5l13 13"
        }
      )
    ]
  }
);
forwardRef(SvgMicrophoneNegative);
var SvgMinimize = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m19 5-5.5 5.5m0 0h4m-4 0v-4M5 19l5.5-5.5m0 0h-4m4 0v4"
      }
    )
  }
);
forwardRef(SvgMinimize);
var SvgRecord = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 6, fill: "currentColor" })
    ]
  }
);
forwardRef(SvgRecord);
var SvgVideoRecorder = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 13,
          height: 12,
          x: 4,
          y: 6,
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          rx: 3
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m17 11 4-2v6l-4-2z"
        }
      )
    ]
  }
);
forwardRef(SvgVideoRecorder);
var SvgVideoRecorderNegative = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 13.7v-2.9c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C14.72 6 13.88 6 12.2 6H9.5m5.168 11.897C14.1 18 13.345 18 12.2 18H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 15.72 4 14.88 4 13.2v-2.4c0-1.036 0-1.752.077-2.3M17 11l4-2v6l-4-2z"
        }
      ),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinecap: "round", d: "m5 5 13 13" })
    ]
  }
);
forwardRef(SvgVideoRecorderNegative);
var SvgAcademicCap = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "m3.16 8.536 8.654-3.462a.5.5 0 0 1 .372 0l8.653 3.462a.5.5 0 0 1 0 .928l-8.653 3.462a.5.5 0 0 1-.372 0L3.161 9.464a.5.5 0 0 1 0-.928Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M19 10v5.67a.5.5 0 0 1-.303.46l-6.5 2.786a.5.5 0 0 1-.394 0l-6.5-2.786A.5.5 0 0 1 5 15.67V10"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m12 9 4 2v2.5"
        }
      )
    ]
  }
);
forwardRef(SvgAcademicCap);
var SvgAdd = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 5v14M12 12H5h14"
      }
    )
  }
);
forwardRef(SvgAdd);
var SvgAi = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 13c3.314 0 6-3.134 6-7 0 3.866 2.686 7 6 7-3.314 0-6 3.134-6 7 0-3.866-2.686-7-6-7Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          d: "M17.5 3.35a.65.65 0 0 1 .65.65A1.85 1.85 0 0 0 20 5.85a.65.65 0 1 1 0 1.3A1.85 1.85 0 0 0 18.15 9a.65.65 0 1 1-1.3 0A1.85 1.85 0 0 0 15 7.15a.65.65 0 1 1 0-1.3A1.85 1.85 0 0 0 16.85 4a.65.65 0 0 1 .65-.65"
        }
      )
    ]
  }
);
forwardRef(SvgAi);
var SvgAlertCircleLine = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinecap: "round", d: "M12 12V9M12 15.1V15" })
    ]
  }
);
forwardRef(SvgAlertCircleLine);
var SvgAlertCircle = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-.967-11.94a.97.97 0 1 1 1.935 0l-.303 3.9a.667.667 0 0 1-1.33 0zM13 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      }
    )
  }
);
forwardRef(SvgAlertCircle);
var SvgAlert = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinecap: "round", d: "M12 14V7M12 17.1V17" })
  }
);
forwardRef(SvgAlert);
var SvgAlignTextCenter = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5 8h14M5 12h14M9 16h6"
      }
    )
  }
);
forwardRef(SvgAlignTextCenter);
var SvgAlignTextJustify = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5 8h14M5 12h14M5 16h14"
      }
    )
  }
);
forwardRef(SvgAlignTextJustify);
var SvgAlignTextLeft = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5 8h14M5 12h14M5 16h6"
      }
    )
  }
);
forwardRef(SvgAlignTextLeft);
var SvgAlignTextRight = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5 8h14M5 12h14M13 16h6"
      }
    )
  }
);
forwardRef(SvgAlignTextRight);
var SvgAppearance = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Mask, { id: "appearance_svg__a", fill: "currentColor", children: /* @__PURE__ */ jsx(
        Path,
        {
          fillRule: "evenodd",
          d: "M12 18.7V5.3a6.7 6.7 0 1 0 0 13.4m1.612-14.537a8 8 0 0 0-.614-.101h-.001a8 8 0 1 0 .615.101",
          clipRule: "evenodd"
        }
      ) }),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 18.7V5.3a6.7 6.7 0 1 0 0 13.4m1.612-14.537a8 8 0 0 0-.614-.101h-.001a8 8 0 1 0 .615.101",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          d: "M12 5.3h1.3V4H12zm0 13.4V20h1.3v-1.3zm1.612-14.537-.26 1.273zm-.614-.101-.16 1.29zm-.001 0-.16 1.29zm.001 15.876-.16-1.29zM10.7 5.3v13.4h2.6V5.3zM12 4a8 8 0 0 0-8 8h2.6A5.4 5.4 0 0 1 12 6.6zm-8 8a8 8 0 0 0 8 8v-2.6A5.4 5.4 0 0 1 6.6 12zm9.873-9.111a9 9 0 0 0-.714-.117l-.322 2.58q.261.032.515.084zm-.714-.117h-.003l-.318 2.58zm-.002 0A9 9 0 0 0 12 2.7v2.6q.426 0 .837.052zM12 2.7A9.3 9.3 0 0 0 2.7 12h2.6c0-3.7 3-6.7 6.7-6.7zM2.7 12a9.3 9.3 0 0 0 9.3 9.3v-2.6c-3.7 0-6.7-3-6.7-6.7zm9.3 9.3a9 9 0 0 0 1.159-.072l-.322-2.58A7 7 0 0 1 12 18.7zm1.159-.072c4.59-.57 8.141-4.484 8.141-9.228h-2.6a6.7 6.7 0 0 1-5.862 6.648zM21.3 12c0-4.496-3.189-8.244-7.427-9.111l-.521 2.547A6.7 6.7 0 0 1 18.7 12z",
          mask: "url(#appearance_svg__a)"
        }
      )
    ]
  }
);
forwardRef(SvgAppearance);
var SvgArchiveOpen = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m3.876 10.008-.252-2.016a1 1 0 0 1 .868-1.116l14.016-1.752a1 1 0 0 1 1.116.868l.252 2.016a1 1 0 0 1-.868 1.116L4.992 10.876a1 1 0 0 1-1.116-.868M19 12v3a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-4M14 14h-4"
      }
    )
  }
);
forwardRef(SvgArchiveOpen);
var SvgArchive = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4 9V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1M5 15v-5h14v5a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3M14 14h-4"
      }
    )
  }
);
forwardRef(SvgArchive);
var SvgArrowDown = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m18 13-6 6-6-6"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 5v13.5"
        }
      )
    ]
  }
);
forwardRef(SvgArrowDown);
var SvgArrowLeft = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m11 18-6-6 6-6M19 12H5.5"
      }
    )
  }
);
forwardRef(SvgArrowLeft);
var SvgArrowRight = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m13 6 6 6-6 6M5 12h13.5"
      }
    )
  }
);
forwardRef(SvgArrowRight);
var SvgArrowUp = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m6 11 6-6 6 6M12 19V5.5"
      }
    )
  }
);
forwardRef(SvgArrowUp);
var SvgBank = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Rect, { width: 16, height: 4, x: 4, y: 16, stroke: "currentColor", rx: 1 }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M4 5.78a1 1 0 0 1 .757-.97l7-1.75a1 1 0 0 1 .486 0l7 1.75a1 1 0 0 1 .757.97V8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM6 9v7M18 9v7M14 9v7M10 9v7"
        }
      )
    ]
  }
);
forwardRef(SvgBank);
var SvgBarGraph = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Rect, { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 13v2M12 9v6M16 11v4"
        }
      )
    ]
  }
);
forwardRef(SvgBarGraph);
var SvgBell = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9.764 18c.549.614 1.347 1 2.236 1 .888 0 1.687-.386 2.236-1"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M12 4a5 5 0 0 0-5 5v.726c0 .175-.07.344-.194.468l-.774.774A2.362 2.362 0 0 0 7.702 15h8.596a2.362 2.362 0 0 0 1.67-4.032l-.774-.774A.66.66 0 0 1 17 9.726V9a5 5 0 0 0-5-5Z"
        }
      )
    ]
  }
);
forwardRef(SvgBell);
var SvgBold = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M12.5 11.5a3 3 0 1 0 0-6H9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h6"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M14.833 18.5c2.025 0 3.667-1.567 3.667-3.5s-1.642-3.5-3.667-3.5H7.5"
        }
      )
    ]
  }
);
forwardRef(SvgBold);
var SvgBookOpen = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 7.5c3-2.005 5.5-2 8 0v9.42c0 .838-.998 1.324-1.771 1-1.933-.811-3.935-.453-6.229 1.08m0-11.5c-3-2.005-5.5-2-8 0v9.42c0 .838.998 1.324 1.771 1C7.704 17.109 9.706 17.467 12 19m0-11.5V19"
      }
    )
  }
);
forwardRef(SvgBookOpen);
var SvgBriefcase = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Rect, { width: 16, height: 12, x: 4, y: 7, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", d: "M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" }),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinejoin: "round", d: "M8 7v12M16 7v12" })
    ]
  }
);
forwardRef(SvgBriefcase);
var SvgBucket = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "m9.002 4.538-4.149 5.659a3.5 3.5 0 0 0 .348 4.544l.152.153a3.5 3.5 0 0 0 4.575.325l5.574-4.18"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M15.502 11.038c-.85.85-3 .077-4.792-1.715C8.917 7.53 8.152 5.388 9.002 4.538s2.991-.085 4.784 1.708 2.566 3.943 1.716 4.792ZM19.5 17.5a2 2 0 1 1-4 0c0-1.641 1.347-3.282 1.83-3.818a.227.227 0 0 1 .34 0c.483.536 1.83 2.177 1.83 3.818Z"
        }
      )
    ]
  }
);
forwardRef(SvgBucket);
var SvgBuilding = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m5.53 6.64 5-2.813a3 3 0 0 1 2.94 0l5 2.813A3 3 0 0 1 20 9.255v5.49a3 3 0 0 1-1.53 2.615l-5 2.813a3 3 0 0 1-2.94 0l-5-2.813A3 3 0 0 1 4 14.746V9.255A3 3 0 0 1 5.53 6.64M5 8l7 4m0 8v-8m7-4-7 4"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          d: "M15 15.066v3.168a1 1 0 0 0 1.515.857l.5-.3a1 1 0 0 0 .485-.857v-4.05a.5.5 0 0 0-.757-.43l-1.257.755a1 1 0 0 0-.486.857"
        }
      )
    ]
  }
);
forwardRef(SvgBuilding);
var SvgBullet = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 20 20",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        d: "M10 7c-2.25 0-3 .75-3 3s.75 3 3 3 3-.75 3-3-.75-3-3-3"
      }
    )
  }
);
forwardRef(SvgBullet);
var SvgCalculator = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Rect, { width: 12, height: 16, x: 6, y: 4, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", d: "M18 8H6M14 8v12M10 8v12M18 12H6M14 16H6" })
    ]
  }
);
forwardRef(SvgCalculator);
var SvgCalendarArrowDown = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 3v2m0 2V5m0 0H9m6 0h1a3 3 0 0 1 3 3v4M9 5V3m0 2v2m0-2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2M5 10h14M16.5 15v6m0 0L14 18.5m2.5 2.5 2.5-2.5"
      }
    )
  }
);
forwardRef(SvgCalendarArrowDown);
var SvgCalendarArrowLeft = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 3v2m0 2V5m0 0H9m6 0h1a3 3 0 0 1 3 3v4M9 5V3m0 2v2m0-2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2M5 10h14M20 17.5h-7m0 0 3-3m-3 3 3 3"
      }
    )
  }
);
forwardRef(SvgCalendarArrowLeft);
var SvgCalendarArrowRight = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 3v2m0 2V5m0 0H9m6 0h1a3 3 0 0 1 3 3v4M9 5V3m0 2v2m0-2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2M5 10h14M13 17.5h7m0 0-3-3m3 3-3 3"
      }
    )
  }
);
forwardRef(SvgCalendarArrowRight);
var SvgCalendar = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 3v2m0 2V5m0 0H9m6 0h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1m0 0V3m0 2v2M5 10h14"
      }
    )
  }
);
forwardRef(SvgCalendar);
var SvgCameraPlus = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M20 10v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h.28a1 1 0 0 0 .948-.684l.088-.265A3 3 0 0 1 11.162 4H14"
        }
      ),
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 3, stroke: "currentColor", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinecap: "round", d: "M19 6.5h-3M17.5 8V5" })
    ]
  }
);
forwardRef(SvgCameraPlus);
var SvgChartLine = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 6v9a3 3 0 0 0 3 3h13"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m4 13 4.5-4 3.5 1 4.5-4L20 9M5.5 17 9 13.5l3.5 2 4-3.5 3.5 2.5"
        }
      )
    ]
  }
);
forwardRef(SvgChartLine);
var SvgCheckCircleLine = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m9 12 2.4 2.4L15 9.6"
        }
      )
    ]
  }
);
forwardRef(SvgCheckCircleLine);
var SvgCheckCircle = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-3.48-2.61a.65.65 0 1 0-1.04-.78l-4.05 5.4-2.47-2.47a.65.65 0 1 0-.92.92l3 3a.65.65 0 0 0 .98-.07z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef45 = forwardRef(SvgCheckCircle);
var CheckCircle_default = ForwardRef45;
var SvgCheck = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m10.75 16.75 7-9.5M6.25 11.75l4.5 5"
      }
    )
  }
);
forwardRef(SvgCheck);
var SvgChevronDown = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m18 10-6 6M6 10l6 6"
      }
    )
  }
);
forwardRef(SvgChevronDown);
var SvgChevronLeft = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m15 6-6 6M15 18l-6-6"
      }
    )
  }
);
forwardRef(SvgChevronLeft);
var SvgChevronRight = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m9 6 6 6M9 18l6-6"
      }
    )
  }
);
forwardRef(SvgChevronRight);
var SvgChevronUp = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m18 14-6-6M6 14l6-6"
      }
    )
  }
);
forwardRef(SvgChevronUp);
var SvgCircle = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(Rect, { width: 16, height: 16, x: 4, y: 4, fill: "currentColor", rx: 8 })
  }
);
forwardRef(SvgCircle);
var SvgClock = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 9v3l3.5 2"
        }
      )
    ]
  }
);
forwardRef(SvgClock);
var SvgCode = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m9 17-5-5 5-5M15 17l5-5-5-5"
      }
    )
  }
);
forwardRef(SvgCode);
var SvgCoffee = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M6 17V8.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 2v0a1.414 1.414 0 0 0 0 2v0M12 2v0a1.414 1.414 0 0 0 0 2v0M16 11h1.5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H16"
        }
      )
    ]
  }
);
forwardRef(SvgCoffee);
var SvgComment = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        d: "M17 6H6.857A2.857 2.857 0 0 0 4 8.857v6.272A2.87 2.87 0 0 0 6.87 18a.18.18 0 0 1 .17.123l.521 1.56a1 1 0 0 0 1.549.485l2.623-1.968a1 1 0 0 1 .6-.2H17a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"
      }
    )
  }
);
forwardRef(SvgComment);
var SvgCompleted = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.65 12a7.35 7.35 0 1 1 14.7 0 7.35 7.35 0 0 1-14.7 0M12 3.35a8.65 8.65 0 1 0 0 17.3 8.65 8.65 0 0 0 0-17.3M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12",
        clipRule: "evenodd"
      }
    )
  }
);
forwardRef(SvgCompleted);
var SvgCreditCard = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M20 10v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5m16 0V9a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v1m16 0H4M7 14h3"
      }
    )
  }
);
forwardRef(SvgCreditCard);
var SvgCross = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M16.95 7.05 12 12l-4.95 4.95M12 12 7.05 7.05l9.9 9.9"
      }
    )
  }
);
forwardRef(SvgCross);
var SvgCrossedCircle = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M3.35 12a8.65 8.65 0 1 1 17.3 0 8.65 8.65 0 0 1-17.3 0m6.11-3.46a.65.65 0 0 0-.92.92L11.08 12l-2.54 2.54a.65.65 0 1 0 .92.92L12 12.92l2.54 2.54a.65.65 0 1 0 .92-.92L12.92 12l2.54-2.54a.65.65 0 1 0-.92-.92L12 11.08z",
        clipRule: "evenodd"
      }
    )
  }
);
forwardRef(SvgCrossedCircle);
var SvgCrown = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m4.572 9.908 2 6.667A2 2 0 0 0 8.488 18h7.024a2 2 0 0 0 1.916-1.425l2-6.667a1 1 0 0 0-1.3-1.227l-2.73.993a1 1 0 0 1-1.265-.556l-1.21-2.903c-.342-.82-1.504-.82-1.846 0l-1.21 2.903a1 1 0 0 1-1.265.556l-2.73-.993a1 1 0 0 0-1.3 1.227"
      }
    )
  }
);
forwardRef(SvgCrown);
var SvgDelete = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M17 8v9a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V8m10 0h-1.5M17 8h1.5M7 8h1.5M7 8H5.5m10 0V5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v3m7 0h-7"
      }
    )
  }
);
forwardRef(SvgDelete);
var SvgDeny = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 20 20",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M3.983 10a6.017 6.017 0 0 1 9.787-4.69l-8.46 8.46A6 6 0 0 1 3.983 10m2.247 4.69a6.017 6.017 0 0 0 8.46-8.46zM10 2.682a7.317 7.317 0 1 0 0 14.634 7.317 7.317 0 0 0 0-14.634",
        clipRule: "evenodd"
      }
    )
  }
);
forwardRef(SvgDeny);
var SvgDesktop = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M6 4h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 20h10M9 20v-4M15 20v-4"
        }
      )
    ]
  }
);
forwardRef(SvgDesktop);
var SvgDollarBill = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Rect, { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14 9h-2.5a1.5 1.5 0 0 0-1.5 1.5v0a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5H10"
        }
      ),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinecap: "round", d: "M7 12v.1M17 12v.1" })
    ]
  }
);
forwardRef(SvgDollarBill);
var SvgDottedCircle = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor", strokeDasharray: "2 2" })
  }
);
forwardRef(SvgDottedCircle);
var SvgDownload = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19 15v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1M12 5v9m0 0-3-3m3 3 3-3"
      }
    )
  }
);
forwardRef(SvgDownload);
var SvgDropdownDefault = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 16,
          height: 16,
          x: 4,
          y: 4,
          fill: "#052657",
          fillOpacity: 0.06,
          rx: 4
        }
      ),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", d: "m8.5 10.25 3.5 3.5 3.5-3.5" })
    ]
  }
);
forwardRef(SvgDropdownDefault);
var SvgDropdownOpen = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 16,
          height: 16,
          x: 4,
          y: 4,
          fill: "#052657",
          fillOpacity: 0.06,
          rx: 4
        }
      ),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", d: "m15.5 13.75-3.5-3.5-3.5 3.5" })
    ]
  }
);
forwardRef(SvgDropdownOpen);
var SvgEllipsisHorizontal = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 1.5, fill: "currentColor" }),
      /* @__PURE__ */ jsx(Circle, { cx: 6.5, cy: 12, r: 1.5, fill: "currentColor" }),
      /* @__PURE__ */ jsx(Circle, { cx: 17.5, cy: 12, r: 1.5, fill: "currentColor" })
    ]
  }
);
forwardRef(SvgEllipsisHorizontal);
var SvgEllipsis = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Circle,
        {
          cx: 12,
          cy: 12,
          r: 1.5,
          fill: "currentColor",
          transform: "rotate(90 12 12)"
        }
      ),
      /* @__PURE__ */ jsx(
        Circle,
        {
          cx: 12,
          cy: 6.5,
          r: 1.5,
          fill: "currentColor",
          transform: "rotate(90 12 6.5)"
        }
      ),
      /* @__PURE__ */ jsx(
        Circle,
        {
          cx: 12,
          cy: 17.5,
          r: 1.5,
          fill: "currentColor",
          transform: "rotate(90 12 17.5)"
        }
      )
    ]
  }
);
forwardRef(SvgEllipsis);
var SvgEnvelopeOpen = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M20 15V8.618a1 1 0 0 0-.553-.894L13.342 4.67a3 3 0 0 0-2.684 0L4.553 7.724A1 1 0 0 0 4 8.618V15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "m4 9 7.497 3.748c.317.159.69.159 1.006 0L20 9"
        }
      )
    ]
  }
);
forwardRef(SvgEnvelopeOpen);
var SvgEnvelope = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Rect, { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "m4.5 9.5 6.654 3.105a2 2 0 0 0 1.692 0L19.5 9.5"
        }
      )
    ]
  }
);
forwardRef(SvgEnvelope);
var SvgExit = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M10 12h9m0 0-3-3m3 3-3 3M11 19H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h3"
      }
    )
  }
);
forwardRef(SvgExit);
var SvgExternalLink = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M10 5H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.5M12.5 11.5 20 4m0 0h-4.5M20 4v4.5"
      }
    )
  }
);
forwardRef(SvgExternalLink);
var SvgEyeInvisible = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19.592 7.665c-1.274 2.632-4.038 5-7.592 5s-6.318-2.368-7.592-5"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "m10.008 13.016-1.11 3.32M14.058 13.016l1.11 3.32M17.523 10.543 20 13.016M6.477 10.543 4 13.016"
        }
      )
    ]
  }
);
forwardRef(SvgEyeInvisible);
var SvgEyeVisible = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M20 12c-1-3-4-6-8-6s-7 3-8 6c1 3 4 6 8 6s7-3 8-6Z"
        }
      ),
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 2.35, stroke: "currentColor" })
    ]
  }
);
forwardRef(SvgEyeVisible);
var SvgFaceNegative = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 9.5c-1.525 0-2.727.611-3.525 1.191-.401.292-.711.583-.923.804a6 6 0 0 0-.319.361l-.021.028-.007.01-.003.004-.002.002a1 1 0 0 0 1.6 1.2l-.001.002.003-.003q.008-.013.033-.042.05-.06.16-.177c.147-.154.369-.363.655-.571.577-.42 1.375-.809 2.35-.809s1.773.389 2.35.809a5 5 0 0 1 .815.748q.025.03.033.042l.002.002.001-.001a.999.999 0 1 0 1.599-1.2l-.002-.002-.003-.004-.007-.01-.021-.028-.07-.085a6 6 0 0 0-.249-.276 7 7 0 0 0-.923-.804c-.798-.58-2-1.191-3.525-1.191M8 9a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zm6 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z",
        clipRule: "evenodd"
      }
    )
  }
);
forwardRef(SvgFaceNegative);
var SvgFaceNeutral = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18M8 14a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm2-6a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1",
        clipRule: "evenodd"
      }
    )
  }
);
forwardRef(SvgFaceNeutral);
var SvgFacePositive = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m4.6 10.7a1 1 0 0 0-1.4.2l.001-.002-.003.003-.033.042q-.05.061-.16.177a5 5 0 0 1-.655.571c-.577.42-1.376.809-2.35.809s-1.773-.389-2.35-.809a5 5 0 0 1-.815-.748l-.033-.042L8.8 13.9l-.001.001A.999.999 0 1 0 7.2 15.1l.002.002.003.004.007.01.021.028.07.085a6.96 6.96 0 0 0 1.17 1.08c.8.58 2.002 1.19 3.527 1.191 1.525 0 2.727-.611 3.525-1.191.4-.292.711-.583.923-.804.107-.111.19-.207.248-.277q.045-.052.07-.084.015-.016.022-.028l.007-.01.003-.004.002-.002a1 1 0 0 0-.2-1.4M10 8a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1",
        clipRule: "evenodd"
      }
    )
  }
);
forwardRef(SvgFacePositive);
var SvgFaceSuperNegative = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 10.5c-1.037 0-1.988.325-2.7.825-.677.476-1.3 1.24-1.3 2.175a1 1 0 0 0 .897.995L9 17.5h6a1 1 0 0 0 .995-.898L16 16.5c0-.934-.623-1.699-1.3-2.175-.712-.5-1.663-.825-2.7-.825M8.44 8.103a1 1 0 0 0-1.054 1.686l.084.059.643.402-.643.402a1 1 0 0 0 1.06 1.696l2-1.25.104-.075a1 1 0 0 0 0-1.546l-.104-.075-2-1.25zm8.408.367a1 1 0 0 0-1.288-.367l-.09.05-2 1.25-.104.074a1 1 0 0 0 0 1.546l.104.075 2 1.25a1 1 0 0 0 1.06-1.696l-.643-.402.643-.402.084-.059a1 1 0 0 0 .234-1.32",
        clipRule: "evenodd"
      }
    )
  }
);
forwardRef(SvgFaceSuperNegative);
var SvgFaceSuperPositive = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18M9 14a1 1 0 0 0-.995.898L8 15c0 .935.623 1.699 1.3 2.175.712.5 1.663.825 2.7.825s1.988-.325 2.7-.825c.677-.476 1.3-1.24 1.3-2.175a1 1 0 0 0-.898-.995L15 14zm-.25-5c-.887 0-1.615.518-2.077 1.198l-.054.088a1 1 0 0 0 1.647 1.117l.061-.082c.196-.289.368-.321.423-.321.04 0 .172.018.353.231l.08.105.062.08a1 1 0 0 0 1.627-1.146l-.055-.086-.184-.24C10.175 9.404 9.534 9 8.75 9m6.5 0c-.887 0-1.615.518-2.077 1.198l-.054.088a1 1 0 0 0 1.647 1.117l.061-.082c.196-.289.368-.321.423-.321.04 0 .172.018.352.231l.08.105.063.08a1 1 0 0 0 1.627-1.146l-.055-.086-.184-.24C16.675 9.404 16.034 9 15.25 9",
        clipRule: "evenodd"
      }
    )
  }
);
forwardRef(SvgFaceSuperPositive);
var SvgFeed = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4 12h3l2.5-5.5 5 11L17 12h3"
      }
    )
  }
);
forwardRef(SvgFeed);
var SvgFile = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M14.879 4.879 17.12 7.12A3 3 0 0 1 18 9.243V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h3.757a3 3 0 0 1 2.122.879"
      }
    )
  }
);
forwardRef(SvgFile);
var SvgFilter = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        d: "M5.415 6.65A1 1 0 0 1 6.175 5h11.65a1 1 0 0 1 .76 1.65l-4.344 5.07a1 1 0 0 0-.241.65v4.13a1 1 0 0 1-.4.8l-2 1.5A1 1 0 0 1 10 18v-5.63a1 1 0 0 0-.24-.65z"
      }
    )
  }
);
forwardRef(SvgFilter);
var SvgFlag = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 5.5c3.5-1 5-.5 6.5.5S16 7 18 5.5V15c-2 1.5-4 1.5-5.5.5S9.5 14 6 15M6 4v16"
      }
    )
  }
);
forwardRef(SvgFlag);
var SvgFolder = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        d: "M11.438 6a1.96 1.96 0 0 0-1.71-1H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 6.52 4 7.08 4 8.2v6c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 19 7.12 19 8.8 19h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 16.72 20 15.88 20 14.2v-2.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 7 16.88 7 15.2 7h-2.053a1.96 1.96 0 0 1-1.71-1Z"
      }
    )
  }
);
forwardRef(SvgFolder);
var SvgFolders = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M10.438 5a1.96 1.96 0 0 0-1.71-1H7.13c-1.054 0-1.581 0-1.988.194a2 2 0 0 0-.948.948C4 5.549 4 6.076 4 7.13v4.07c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 16 7.12 16 8.8 16h4.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C18 13.72 18 12.88 18 11.2v-.783c0-1.32 0-1.98-.204-2.504a3 3 0 0 0-1.709-1.709C15.563 6 14.903 6 13.583 6h-1.436a1.96 1.96 0 0 1-1.71-1Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M7 19h4.4c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C21 14.44 21 12.76 21 9.4V9"
        }
      )
    ]
  }
);
forwardRef(SvgFolders);
var SvgGlobe = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 12H5"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M12 20c-1.767-1.804-3-5.275-3-8s1.233-6.196 3-8M12 20c1.767-1.804 3-5.275 3-8s-1.233-6.196-3-8"
        }
      )
    ]
  }
);
forwardRef(SvgGlobe);
var SvgGraph = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 6v9a3 3 0 0 0 3 3h13"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m8 14 3.646-3.646a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 0 .708 0L20 8m0 0v3m0-3h-3"
        }
      )
    ]
  }
);
forwardRef(SvgGraph);
var SvgHandshake = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "m5.328 14.328.172.172 5-5 1.75 1.75a1.768 1.768 0 1 0 2.5-2.5l-2.629-2.629a3 3 0 0 0-4.242 0l-2.55 2.55a4 4 0 0 0 0 5.657Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M13 7a2.83 2.83 0 0 1 4 0l1.672 1.672a4 4 0 0 1 0 5.656l-4.258 4.258a2 2 0 0 1-2.828 0L11 18l-.086.086a2 2 0 0 1-2.828 0L7.5 17.5a1.414 1.414 0 0 1-2 0l-.25-.25c-.69-.69-.69-1.81 0-2.5L6 14"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          d: "M10.46 15.46a.65.65 0 1 0-.92-.92zm-2.5 2.5 2.5-2.5-.92-.92-2.5 2.5zM13.46 16.46a.65.65 0 1 0-.92-.92zm-2.5 2.5 2.5-2.5-.92-.92-2.5 2.5z"
        }
      )
    ]
  }
);
forwardRef(SvgHandshake);
var SvgHeading1 = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5 7v5m0 5v-5m0 0h7V7v10M18 7v10M16 9c1 0 2-1 2-2"
      }
    )
  }
);
forwardRef(SvgHeading1);
var SvgHeading2 = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4 7v5m0 5v-5m0 0h7V7v10M15 9.5A2.5 2.5 0 0 1 17.5 7v0A2.5 2.5 0 0 1 20 9.5v0a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 0-2.5 2.5V17h5"
      }
    )
  }
);
forwardRef(SvgHeading2);
var SvgHeading3 = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 9a2 2 0 0 1 2-2h.5A2.5 2.5 0 0 1 20 9.5v0a2.5 2.5 0 0 1-2.5 2.5v0M15 15a2 2 0 0 0 2 2h.5a2.5 2.5 0 0 0 2.5-2.5v0a2.5 2.5 0 0 0-2.5-2.5v0M4 7v5m0 5v-5m0 0h7V7v10"
      }
    )
  }
);
forwardRef(SvgHeading3);
var SvgHeart = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.063 6C12.875 6 12 8 12 8s-.875-2-3.062-2C7.188 6 5 7.714 5 10.286 5 14.57 12 19 12 19s7-4.429 7-8.714C19 8.143 17.25 6 15.063 6"
      }
    )
  }
);
forwardRef(SvgHeart);
var SvgHoldHeart = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6.027 21H8.7a.49.49 0 0 0 .442-.276c.598-1.27.853-2.514.853-3.72 0-.652-.228-1.081-.533-1.783-.194-.446-.427-.95-.587-1.207-.321-.518-.948-.68-1.411-.448s-.582.789-.332 1.289.953 1.87.287 2.307c-.418.275-.937.2-1.317-.273-.224-.28-.6-.774-.6-1.193V11c0-1-.253-2-1.269-2C3.22 9 3 10 3 11v5c0 1.51.596 2.266 2.204 4.57.187.268.495.43.823.43M17.97 21h-2.675a.49.49 0 0 1-.441-.276c-.598-1.27-.854-2.514-.854-3.72 0-.652.228-1.081.533-1.783.194-.446.428-.95.587-1.207.322-.518.948-.68 1.411-.448s.583.789.333 1.289-.954 1.87-.288 2.307c.419.275.938.2 1.317-.273.224-.28.6-.774.6-1.193V11c0-1 .253-2 1.269-2 1.015 0 1.234 1 1.234 2v5c0 1.51-.596 2.266-2.203 4.57-.188.268-.496.43-.823.43M14.261 2C16.198 2 17.5 3.764 17.5 5.41 17.5 8.745 12 12 12 12c-.098 0-5.5-3.256-5.5-6.59C6.5 3.765 7.802 2 9.739 2c1.112 0 1.84.539 2.261 1.013A2.95 2.95 0 0 1 14.261 2"
      }
    )
  }
);
forwardRef(SvgHoldHeart);
var SvgHome = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "m6.256 7.603 4-2.857a3 3 0 0 1 3.488 0l4 2.857A3 3 0 0 1 19 10.043V16a3 3 0 0 1-3 3h-1a1 1 0 0 1-1-1v-2.5a2 2 0 1 0-4 0V18a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3v-5.956a3 3 0 0 1 1.256-2.441Z"
      }
    )
  }
);
forwardRef(SvgHome);
var SvgHub = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 6,
          height: 6,
          x: 4.5,
          y: 4.5,
          stroke: "currentColor",
          strokeLinejoin: "round",
          rx: 3
        }
      ),
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 6,
          height: 6,
          x: 4.5,
          y: 13.5,
          stroke: "currentColor",
          strokeLinejoin: "round",
          rx: 1.5
        }
      ),
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 6,
          height: 6,
          x: 13.5,
          y: 4.5,
          stroke: "currentColor",
          strokeLinejoin: "round",
          rx: 1.5
        }
      ),
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 6,
          height: 6,
          x: 13.5,
          y: 13.5,
          stroke: "currentColor",
          strokeLinejoin: "round",
          rx: 1.5
        }
      )
    ]
  }
);
forwardRef(SvgHub);
var SvgImage = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M4 15V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z"
        }
      ),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", d: "m20 15-1.879-1.879a3 3 0 0 0-4.242 0L9 18" }),
      /* @__PURE__ */ jsx(Circle, { cx: 9, cy: 11, r: 2.35, stroke: "currentColor" })
    ]
  }
);
forwardRef(SvgImage);
var SvgInProgressTask = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(Path, { fill: "currentColor", d: "M12 18a6 6 0 0 0 0-12z" })
    ]
  }
);
forwardRef(SvgInProgressTask);
var SvgInbox = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M20 15v-4.285a2 2 0 0 0-.453-1.268L17.624 7.1A3 3 0 0 0 15.303 6H8.31a3 3 0 0 0-2.48 1.312L4.347 9.49A2 2 0 0 0 4 10.616V15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4.5 10h3.153a1 1 0 0 1 .986.836l.222 1.328a1 1 0 0 0 .986.836h4.306a1 1 0 0 0 .986-.836l.222-1.328a1 1 0 0 1 .986-.836H19.5"
        }
      )
    ]
  }
);
forwardRef(SvgInbox);
var SvgInfoCircleLine = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 12v3"
        }
      ),
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 9v.1"
        }
      )
    ]
  }
);
forwardRef(SvgInfoCircleLine);
var SvgInfoCircle = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8.65-2.9a.65.65 0 1 0 1.3 0V9a.65.65 0 1 0-1.3 0zm0 6a.65.65 0 1 0 1.3 0v-3a.65.65 0 1 0-1.3 0z",
        clipRule: "evenodd"
      }
    )
  }
);
forwardRef(SvgInfoCircle);
var SvgInfo = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M10 10h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1 4M12 7v.1"
      }
    )
  }
);
forwardRef(SvgInfo);
var SvgItalic = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M17 6h-4M9 6h4m0 0-2 12H7h8"
      }
    )
  }
);
forwardRef(SvgItalic);
var SvgKanban = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5 6.5A1.5 1.5 0 0 1 6.5 5H9a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 9 19H6.5A1.5 1.5 0 0 1 5 17.5zM13.5 6.5A1.5 1.5 0 0 1 15 5h2.5A1.5 1.5 0 0 1 19 6.5v7a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5z"
      }
    )
  }
);
forwardRef(SvgKanban);
var SvgLaptop = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M5 15V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8M18 19H6a3 3 0 0 1-3-3 1 1 0 0 1 1-1h5.5a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5H20a1 1 0 0 1 1 1 3 3 0 0 1-3 3Z"
      }
    )
  }
);
forwardRef(SvgLaptop);
var SvgLayersFront = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20h1.4c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C20 15.44 20 13.76 20 10.4V9"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 5h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3"
        }
      )
    ]
  }
);
var ForwardRef107 = forwardRef(SvgLayersFront);
var LayersFront_default = ForwardRef107;
var SvgLightbulb = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", d: "M8 16h8v1a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3z" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 16v-4.5m0 0-1.5-1m1.5 1 1.5-1"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M8 16v-2.08a1.1 1.1 0 0 0-.322-.758 6 6 0 1 1 8.644 0 1.1 1.1 0 0 0-.322.757V16"
        }
      )
    ]
  }
);
forwardRef(SvgLightbulb);
var SvgLinkRemove = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        d: "m5 5 1 1M9 5V4M5 9H4M19 19l-1-1M15 19v1M19 15h1M12 17l-1 1a3.536 3.536 0 0 1-5 0v0a3.536 3.536 0 0 1 0-5l1-1M12 7l1-1a3.536 3.536 0 0 1 5 0v0a3.536 3.536 0 0 1 0 5l-1 1"
      }
    )
  }
);
forwardRef(SvgLinkRemove);
var SvgLink = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M11 18v0a3.536 3.536 0 0 1-5 0v0a3.536 3.536 0 0 1 0-5l3-3a2.83 2.83 0 0 1 4 0v0"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M13 6v0a3.536 3.536 0 0 1 5 0v0a3.536 3.536 0 0 1 0 5l-3 3a2.83 2.83 0 0 1-4 0v0"
        }
      )
    ]
  }
);
forwardRef(SvgLink);
var SvgList = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 8h10M9 12h10M9 16h10"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M4.5 8a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm0 4a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm0 4a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z"
        }
      )
    ]
  }
);
forwardRef(SvgList);
var SvgLockLocked = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M16 10H8a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3M12 14v1M8 10V8a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v2"
      }
    )
  }
);
forwardRef(SvgLockLocked);
var SvgLockUnlocked = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M16 10H8a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3M12 14v1M8 10V8a4 4 0 0 1 4-4v0"
      }
    )
  }
);
forwardRef(SvgLockUnlocked);
var SvgLogoAvatar = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          d: "M6.919 16.284a6.646 6.646 0 1 1 10.162 0q.505.315.964.689l.134.108a8 8 0 1 0-12.358 0l.134-.108q.46-.374.964-.689"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          d: "M17.037 18.215A7.97 7.97 0 0 1 12 20a7.97 7.97 0 0 1-5.037-1.785A7.97 7.97 0 0 1 12 16.431c1.91 0 3.662.668 5.037 1.784M12 14.708A2.954 2.954 0 1 0 12 8.8a2.954 2.954 0 0 0 0 5.908"
        }
      )
    ]
  }
);
forwardRef(SvgLogoAvatar);
var SvgLogoEruditai = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        d: "M14.939 10.137q.03-.288.03-.584C14.969 6.486 12.513 4 9.484 4S4 6.486 4 9.553s2.455 5.552 5.484 5.552q.33 0 .65-.039v3.867c0 .59.472 1.067 1.053 1.067h7.275a1.06 1.06 0 0 0 1.053-1.067v-7.73a1.06 1.06 0 0 0-1.053-1.066zm0 0c-.266 2.575-2.271 4.627-4.805 4.93v-3.863c0-.59.472-1.067 1.053-1.067z"
      }
    )
  }
);
forwardRef(SvgLogoEruditai);
var SvgLogoTravelperk = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          d: "M13.635 6.372c.3-.296 1.566-1.118 1.833-.855.25.263-.567 1.529-.85 1.808-.283.296-.5.51-.65.658l.467 4.768-.533.526-1.6-3.65-.633.625c-.45.46-1.117.937-1.666 1.266l.083 1.644-.25.246s-.783-1.446-.816-1.48c-.017-.032-1.483-.821-1.483-.821l.25-.247 1.65.082c.332-.542.799-1.2 1.265-1.66l.617-.608-3.666-1.595.533-.526 4.8.477c.15-.165.366-.379.649-.658"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          d: "M6.337 3.33C9.469.223 14.535.223 17.65 3.33a7.923 7.923 0 0 1 0 11.262c-3.133 3.107-8.198 3.107-11.314 0a7.95 7.95 0 0 1 0-11.262m1 10.292a6.62 6.62 0 0 0 9.33 0c2.583-2.581 2.583-6.74 0-9.289a6.62 6.62 0 0 0-9.33 0 6.537 6.537 0 0 0 0 9.29"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          d: "M12.002 18.34c1.383 0 2.7-.279 3.932-.854a.697.697 0 0 1 .934.345c.15.345 0 .756-.35.92a10.6 10.6 0 0 1-4.516.987c-1.566 0-3.1-.329-4.515-.986a.68.68 0 0 1-.35-.921.697.697 0 0 1 .933-.345 9.5 9.5 0 0 0 3.932.855M12.002 22.5c-1.25 0-2.466-.18-3.649-.559a.716.716 0 0 1-.466-.871.71.71 0 0 1 .883-.46c1.033.328 2.132.493 3.232.493s2.166-.165 3.216-.477a.715.715 0 0 1 .883.46.69.69 0 0 1-.466.872c-1.184.361-2.4.542-3.633.542"
        }
      )
    ]
  }
);
forwardRef(SvgLogoTravelperk);
var SvgMasonry = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        d: "M5 6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zM5 14a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zM14 16a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zM14 6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1z"
      }
    )
  }
);
forwardRef(SvgMasonry);
var SvgMegaphone = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "m17 6-3.033 1.213A11 11 0 0 1 9.882 8H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v2.25a1.75 1.75 0 1 0 3.5 0V15h.345c.763 0 1.52.146 2.228.43L17 17z"
        }
      ),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinecap: "round", d: "M20 10v4" })
    ]
  }
);
forwardRef(SvgMegaphone);
var SvgMenu = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5 7h14M5 12h14M5 17h14"
      }
    )
  }
);
forwardRef(SvgMenu);
var SvgMessageFrown = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M17 6H6.857A2.857 2.857 0 0 0 4 8.857v6.272A2.87 2.87 0 0 0 6.87 18a.18.18 0 0 1 .17.123l.521 1.56a1 1 0 0 0 1.549.485l2.623-1.968a1 1 0 0 1 .6-.2H17a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m15 14-.764-.382a5 5 0 0 0-4.472 0L9 14M10 10v1M14 10v1"
        }
      )
    ]
  }
);
forwardRef(SvgMessageFrown);
var SvgMessageHeart = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M17 6H6.857A2.857 2.857 0 0 0 4 8.857v6.272A2.87 2.87 0 0 0 6.87 18a.18.18 0 0 1 .17.123l.521 1.56a1 1 0 0 0 1.549.485l2.623-1.968a1 1 0 0 1 .6-.2H17a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M13.439 9c1.233 0 2.061 1.117 2.061 2.16 0 2.111-3.438 3.84-3.5 3.84s-3.5-1.729-3.5-3.84c0-1.043.828-2.16 2.061-2.16.708 0 1.17.341 1.439.641.268-.3.731-.641 1.439-.641"
        }
      )
    ]
  }
);
forwardRef(SvgMessageHeart);
var SvgMessages = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M14 17v-3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5.793a.5.5 0 0 0 .854.353L7 19h5a2 2 0 0 0 2-2M10 9V7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5.793a.5.5 0 0 1-.854.353L17 12h-.5"
      }
    )
  }
);
forwardRef(SvgMessages);
var SvgMicrophone = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 7a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3v0a3 3 0 0 1-3-3z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 11v0a6 6 0 0 1-6 6v0a6 6 0 0 1-6-6v0M12 17v3m0 0h-2m2 0h2"
        }
      )
    ]
  }
);
forwardRef(SvgMicrophone);
var SvgMinus = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19 12H5"
      }
    )
  }
);
forwardRef(SvgMinus);
var SvgMobile = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M10.8 4h2.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C18 6.28 18 7.12 18 8.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C15.72 20 14.88 20 13.2 20h-2.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C6 17.72 6 16.88 6 15.2V8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C8.28 4 9.12 4 10.8 4Z"
        }
      ),
      /* @__PURE__ */ jsx(Path, { fill: "currentColor", d: "M11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })
    ]
  }
);
forwardRef(SvgMobile);
var SvgMoneyBag = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "m5.55 14.121.714-4A5 5 0 0 1 11.186 6h1.628a5 5 0 0 1 4.922 4.121l.714 4A5 5 0 0 1 13.528 20h-3.056a5 5 0 0 1-4.922-5.879ZM10.326 2.5h3.348a1 1 0 0 1 .962 1.275L14 6h-4l-.636-2.225a1 1 0 0 1 .962-1.275Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14 10h-2.5a1.5 1.5 0 0 0-1.5 1.5v0a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5H10M12 16v1M12 9v1"
        }
      )
    ]
  }
);
forwardRef(SvgMoneyBag);
var SvgMoney = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 3h5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20h1.4c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C20 15.44 20 13.76 20 10.4V9M13.5 7H11a1.5 1.5 0 0 0-1.5 1.5v0A1.5 1.5 0 0 0 11 10h1a1.5 1.5 0 0 1 1.5 1.5v0A1.5 1.5 0 0 1 12 13H9.5M11.5 7V6M11.5 14v-1"
        }
      )
    ]
  }
);
forwardRef(SvgMoney);
var SvgMoveDown = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M12.5 7H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m8 19 2-2-2-2"
        }
      ),
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 6.7,
          height: 6.7,
          x: 0.65,
          y: -0.65,
          fill: "currentColor",
          stroke: "currentColor",
          rx: 1.35,
          transform: "matrix(1 0 0 -1 12 19.7)"
        }
      ),
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 6.7,
          height: 6.7,
          x: 0.65,
          y: -0.65,
          stroke: "currentColor",
          rx: 1.35,
          transform: "matrix(1 0 0 -1 12 9.7)"
        }
      )
    ]
  }
);
forwardRef(SvgMoveDown);
var SvgMoveTop = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M13 19H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2.8"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m8 3 2 2-2 2"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          stroke: "currentColor",
          d: "M14 2.65h4c.746 0 1.35.604 1.35 1.35v2A1.35 1.35 0 0 1 18 7.35h-4A1.35 1.35 0 0 1 12.65 6V4c0-.746.604-1.35 1.35-1.35Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M14 9.65h4c.746 0 1.35.604 1.35 1.35v2A1.35 1.35 0 0 1 18 14.35h-4A1.35 1.35 0 0 1 12.65 13v-2c0-.746.604-1.35 1.35-1.35ZM14 16.65h4c.746 0 1.35.604 1.35 1.35v2A1.35 1.35 0 0 1 18 21.35h-4A1.35 1.35 0 0 1 12.65 20v-2c0-.746.604-1.35 1.35-1.35Z"
        }
      )
    ]
  }
);
forwardRef(SvgMoveTop);
var SvgMoveUp = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M12.5 17H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.5"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m8 5 2 2-2 2"
        }
      ),
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 6.7,
          height: 6.7,
          x: 12.65,
          y: 3.65,
          fill: "currentColor",
          stroke: "currentColor",
          rx: 1.35
        }
      ),
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 6.7,
          height: 6.7,
          x: 12.65,
          y: 13.65,
          stroke: "currentColor",
          rx: 1.35
        }
      )
    ]
  }
);
forwardRef(SvgMoveUp);
var SvgOffice = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zM10 12h4M10 8h4"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M10 16.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V20h-4z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 20H5"
        }
      )
    ]
  }
);
forwardRef(SvgOffice);
var SvgOlList = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7 4v6M13 7h6M13 12h6M13 17h6M5 14a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2v0a2 2 0 0 0-2 2v1h4M5 6c1 0 2-1 2-2"
      }
    )
  }
);
forwardRef(SvgOlList);
var SvgPalmTree = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        d: "m12 12 5.954 2.977c.024.012.054 0 .062-.027.461-1.446-.003-2.888-.943-3.908-.027-.029-.007-.077.033-.077h2.849c.025 0 .045-.02.045-.044-.03-1.448-1.508-3.385-4.905-3.42-.038 0-.06-.045-.037-.074l1.924-2.405a.04.04 0 0 0 .005-.047c-.53-.983-3.004-1.458-4.987.525M12 12l-5.954 2.977a.045.045 0 0 1-.062-.027c-.461-1.446.003-2.888.943-3.908.027-.029.007-.077-.033-.077H4.045A.044.044 0 0 1 4 10.921c.03-1.448 1.508-3.385 4.905-3.42.038 0 .06-.045.037-.074L7.018 5.022a.04.04 0 0 1-.005-.047c.53-.983 3.004-1.458 4.987.525M8 19h8m-2.5-6 .5 6m-3.5-6-.5 6"
      }
    )
  }
);
forwardRef(SvgPalmTree);
var SvgPaperclip = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        d: "m15 11-5 5a1.414 1.414 0 0 1-2 0v0a1.414 1.414 0 0 1 0-2l7-7a2.83 2.83 0 0 1 4 0v0a2.83 2.83 0 0 1 0 4l-7 7a4.243 4.243 0 0 1-6 0v0a4.243 4.243 0 0 1 0-6l5-5"
      }
    )
  }
);
forwardRef(SvgPaperclip);
var SvgPartiallyCompleted = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.65 12a7.35 7.35 0 1 1 14.7 0 7.35 7.35 0 0 1-14.7 0M12 3.35a8.65 8.65 0 1 0 0 17.3 8.65 8.65 0 0 0 0-17.3M18 12a6 6 0 0 1-6 6c-4.8 0-6-4-6-6h6V6a6 6 0 0 1 6 6",
        clipRule: "evenodd"
      }
    )
  }
);
forwardRef(SvgPartiallyCompleted);
var SvgPauseCircle = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16M10 8.35a.65.65 0 0 1 .65.65v6a.65.65 0 1 1-1.3 0V9a.65.65 0 0 1 .65-.65m4.65.65a.65.65 0 1 0-1.3 0v6a.65.65 0 1 0 1.3 0z",
        clipRule: "evenodd"
      }
    )
  }
);
forwardRef(SvgPauseCircle);
var SvgPencil = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m7 13-1.5 5.5L11 17m-4-4 7.5-7.5a2.83 2.83 0 0 1 4 0v0a2.83 2.83 0 0 1 0 4L11 17m-4-4 4 4"
      }
    )
  }
);
forwardRef(SvgPencil);
var SvgPeople = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 9, cy: 9, r: 4, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 13a3 3 0 1 0 0-6"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 18s1.5-2 5-2 5 2 5 2M17 16c2 0 2.75 1 2.75 1"
        }
      )
    ]
  }
);
forwardRef(SvgPeople);
var SvgPerson = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 9, r: 4, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 18s1.5-2 5-2 5 2 5 2"
        }
      )
    ]
  }
);
forwardRef(SvgPerson);
var SvgPhone = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "m10.728 5.684.974 2.921a1 1 0 0 1-.577 1.245L9.5 10.5c1 2 2 3 4 4l.65-1.624a1 1 0 0 1 1.245-.578l2.921.974a1 1 0 0 1 .684.949v2.28c0 1.656-1.35 2.977-2.978 2.663-2.54-.49-6.148-1.696-8.522-4.664-2.189-2.736-2.88-5.322-3.058-7.104C4.302 5.997 5.501 5 6.907 5H9.78a1 1 0 0 1 .948.684Z"
      }
    )
  }
);
forwardRef(SvgPhone);
var SvgPin = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 20c3-3.2 6-6.065 6-9.6S15.314 4 12 4s-6 2.865-6 6.4 3 6.4 6 9.6"
        }
      ),
      /* @__PURE__ */ jsx(Rect, { width: 4, height: 4, x: 10, y: 8, stroke: "currentColor", rx: 2 })
    ]
  }
);
forwardRef(SvgPin);
var SvgPixBrazil = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        d: "m6.11 8.841-1.422 1.424a2.43 2.43 0 0 0 0 3.441l1.424 1.424 1.392-.007c.315 0 .617-.125.885-.37l2.397-2.395c.175-.176.388-.301.616-.373a1.9 1.9 0 0 1-.596-.352l-.01-.009-2.408-2.407c-.268-.246-.57-.371-.884-.371zM7.484 16.505c.67-.147 1.677-.388 1.967-.678l2.404-2.404c.002-.002.012-.01.032-.01.019 0 .029.008.03.01l2.414 2.413c.323.323 1.23.742 1.876.951l-2.498 2.498a2.48 2.48 0 0 1-3.441 0zM17.646 15.348l-1.367-.216c-.326 0-.647-.132-.88-.365l-2.412-2.413a1.5 1.5 0 0 0-.614-.37 1.9 1.9 0 0 0 .594-.351l.01-.009L15.4 9.203c.232-.23.554-.364.88-.364l1.587.005 1.422 1.421c.95.95.95 2.492 0 3.441zM16.207 7.182l-2.498-2.497a2.436 2.436 0 0 0-3.444 0L7.39 7.562c.699.109 1.773.277 2.066.587l2.4 2.4.002.003.012.01h.005c.003 0 .024-.002.056-.026l2.4-2.4c.324-.324 1.23-.745 1.876-.954"
      }
    )
  }
);
forwardRef(SvgPixBrazil);
var SvgPlaceholder = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "m17.5 6.5-11 11M17.5 17.5l-11-11"
        }
      )
    ]
  }
);
forwardRef(SvgPlaceholder);
var SvgPlane = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m4.92 16.48 1.428.357c.237.06.356.089.452.15a.7.7 0 0 1 .212.213c.062.096.092.215.151.452l.357 1.429c.157.628.236.942.412 1.089a.7.7 0 0 0 .553.153c.227-.035.456-.264.914-.722l.273-.273c.121-.121.182-.182.225-.252a.7.7 0 0 0 .084-.203c.019-.08.019-.166.019-.337v-1.072c0-.171 0-.257.02-.337a.7.7 0 0 1 .083-.203c.043-.07.104-.131.225-.252l1.471-1.471c.401-.401.601-.601.811-.642a.7.7 0 0 1 .528.108c.177.12.282.383.493.91l.738 1.846c.21.527.316.79.493.91a.7.7 0 0 0 .528.108c.21-.04.41-.241.811-.642l.391-.391c.15-.15.224-.224.273-.312a.7.7 0 0 0 .08-.252c.012-.1-.005-.204-.04-.413l-.81-4.863c-.035-.208-.052-.312-.04-.412a.7.7 0 0 1 .08-.252c.049-.088.123-.162.273-.312L18.5 8.5a2.121 2.121 0 0 0-3-3l-2.092 2.092c-.15.15-.224.224-.312.273a.7.7 0 0 1-.252.08c-.1.012-.204-.005-.412-.04l-4.863-.81c-.209-.035-.313-.052-.413-.04a.7.7 0 0 0-.251.08c-.089.049-.163.123-.313.273l-.391.391C5.8 8.2 5.6 8.4 5.559 8.61a.7.7 0 0 0 .108.528c.12.177.383.282.91.493l1.846.738c.527.21.79.316.91.493a.7.7 0 0 1 .108.528c-.04.21-.241.41-.642.811h0l-1.471 1.471c-.121.121-.182.182-.252.225a.7.7 0 0 1-.203.084c-.08.019-.166.019-.337.019H5.464c-.171 0-.257 0-.337.02a.7.7 0 0 0-.203.083c-.07.043-.131.104-.252.225l-.273.273c-.458.458-.687.687-.722.914a.7.7 0 0 0 .153.553c.147.176.46.255 1.09.412"
      }
    )
  }
);
forwardRef(SvgPlane);
var SvgPlus = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.65 5a.65.65 0 1 0-1.3 0v6.35H5a.65.65 0 1 0 0 1.3h6.35V19a.65.65 0 1 0 1.3 0v-6.35H19a.65.65 0 1 0 0-1.3h-6.35z",
        clipRule: "evenodd"
      }
    )
  }
);
forwardRef(SvgPlus);
var SvgPresent = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 8v11M7 5.5A2.5 2.5 0 0 1 9.5 3v0A2.5 2.5 0 0 1 12 5.5V8H9.5A2.5 2.5 0 0 1 7 5.5M17 5.5A2.5 2.5 0 0 0 14.5 3v0A2.5 2.5 0 0 0 12 5.5V8h2.5A2.5 2.5 0 0 0 17 5.5"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          d: "M5 12v-.65a.65.65 0 0 0-.65.65zm14 0h.65a.65.65 0 0 0-.65-.65zm-14 .65h14v-1.3H5zM18.35 12v4h1.3v-4zM16 18.35H8v1.3h8zM5.65 16v-4h-1.3v4zM8 18.35A2.35 2.35 0 0 1 5.65 16h-1.3A3.65 3.65 0 0 0 8 19.65zM18.35 16A2.35 2.35 0 0 1 16 18.35v1.3A3.65 3.65 0 0 0 19.65 16z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 10.667c0-.62 0-.93.068-1.185a2 2 0 0 1 1.414-1.414C5.737 8 6.047 8 6.667 8h10.666c.62 0 .93 0 1.185.068a2 2 0 0 1 1.414 1.414c.068.255.068.565.068 1.185v0c0 .31 0 .465-.034.592a1 1 0 0 1-.707.707c-.127.034-.282.034-.592.034H5.333c-.31 0-.465 0-.592-.034a1 1 0 0 1-.707-.707C4 11.132 4 10.977 4 10.667"
        }
      )
    ]
  }
);
forwardRef(SvgPresent);
var SvgPrinter = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 13v-1.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 7 7.12 7 8.8 7h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 9.28 20 10.12 20 11.8V13c0 .93 0 1.395-.102 1.777a3 3 0 0 1-2.122 2.12C17.396 17 16.93 17 16 17v-1.4c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C15.24 14 14.96 14 14.4 14H9.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C8 14.76 8 15.04 8 15.6V17c-.93 0-1.395 0-1.776-.102a3 3 0 0 1-2.122-2.121C4 14.395 4 13.93 4 13ZM17 7a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M16 16.8v-1.2c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C15.24 14 14.96 14 14.4 14H9.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C8 14.76 8 15.04 8 15.6v1.2c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C9.52 20 10.08 20 11.2 20h1.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C16 18.48 16 17.92 16 16.8Z"
        }
      ),
      /* @__PURE__ */ jsx(Circle, { cx: 17, cy: 11, r: 1, fill: "currentColor" })
    ]
  }
);
forwardRef(SvgPrinter);
var SvgProyector = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", d: "M5 5h14v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 15v5M12 15l-5 5M12 15l5 5M4 5h16M9 11.5l2-2 2 2L15.5 9M12 5V3.5"
        }
      )
    ]
  }
);
forwardRef(SvgProyector);
var SvgQuestion = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 9c0-2 1.5-3 3-3s3 1.5 3 3c0 3-3 2.5-3 5"
        }
      ),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinecap: "round", d: "M12 17v.1" })
    ]
  }
);
forwardRef(SvgQuestion);
var SvgQuote = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M10 6a5 5 0 0 0-5 5v2m0 0v2.5A2.5 2.5 0 0 0 7.5 18v0a2.5 2.5 0 0 0 2.5-2.5v0A2.5 2.5 0 0 0 7.5 13zM19 6a5 5 0 0 0-5 5v2m0 0v2.5a2.5 2.5 0 0 0 2.5 2.5v0a2.5 2.5 0 0 0 2.5-2.5v0a2.5 2.5 0 0 0-2.5-2.5z"
      }
    )
  }
);
forwardRef(SvgQuote);
var SvgReaction = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 12a7 7 0 1 1-7-7"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10 10v1M14 10v1M9.5 14v0a4 4 0 0 0 5 0v0"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M18 3v3m0 3V6m0 0h-3 6"
        }
      )
    ]
  }
);
forwardRef(SvgReaction);
var SvgReceipt = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        d: "M18 7v11.826a1 1 0 0 1-1.65.759l-1.184-1.014a1 1 0 0 0-1.319.015l-1.187 1.067a1 1 0 0 1-1.34-.003l-1.167-1.058a1 1 0 0 0-1.322-.018l-1.18 1.011A1 1 0 0 1 6 18.825V7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3ZM9 8h6M9 12h4"
      }
    )
  }
);
forwardRef(SvgReceipt);
var SvgRemoveFavorite = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.456 4.108a1.02 1.02 0 0 0-.917 0c-.24.12-.373.329-.445.45a6 6 0 0 0-.233.466l-.01.023-.863 1.832a.65.65 0 0 0 1.176.554l.834-1.771 1.675 3.56.011.024c.039.083.105.225.21.343q.135.154.322.246c.146.071.305.095.392.107l.024.004 3.81.584-.018.019-2.206 2.253a.65.65 0 0 0 .93.91l2.205-2.254.017-.017c.13-.133.257-.263.351-.378s.233-.305.266-.564a1.07 1.07 0 0 0-.266-.852 1.1 1.1 0 0 0-.555-.307 6 6 0 0 0-.5-.09l-.024-.005-3.795-.581-1.702-3.617-.01-.023a6 6 0 0 0-.234-.465c-.072-.123-.204-.33-.445-.45m-5.585 6.22a.65.65 0 0 0-.197-1.285l-1.32.202-.025.004a6 6 0 0 0-.5.09 1.1 1.1 0 0 0-.555.308c-.21.234-.304.547-.266.852.033.259.173.45.266.564.094.115.221.244.351.378l.018.017L7.4 14.276l.004.005-.002.014-.65 3.98-.005.024c-.03.19-.06.37-.072.52a1.13 1.13 0 0 0 .102.614c.144.277.406.484.725.546.27.053.504-.037.634-.094.135-.058.293-.146.454-.234l.022-.012 3.385-1.867 3.385 1.867a.65.65 0 1 0 .627-1.139l-3.408-1.88-.022-.012c-.077-.043-.217-.122-.376-.155a1 1 0 0 0-.412 0c-.16.033-.3.112-.377.155l-.022.012-3.356 1.851.649-3.966.004-.026c.016-.091.042-.244.024-.399a1.1 1.1 0 0 0-.118-.38 1.4 1.4 0 0 0-.248-.315l-.018-.018-2.758-2.818-.02-.02zM6.46 5.54a.65.65 0 0 0-.92.92l12 12a.65.65 0 1 0 .92-.92z",
        clipRule: "evenodd"
      }
    )
  }
);
forwardRef(SvgRemoveFavorite);
var SvgReplace = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M20 10V9a3 3 0 0 0-3-3h-3m0 0 2-2m-2 2 2 2M4 14v1a3 3 0 0 0 3 3h3m0 0-2 2m2-2-2-2M16 14h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2M6 4h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"
      }
    )
  }
);
forwardRef(SvgReplace);
var SvgReset = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 13.5a7 7 0 1 0 7-7H5.5"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m8 3.5-3 3 3 3"
        }
      )
    ]
  }
);
forwardRef(SvgReset);
var SvgRocket = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m11 15-2-2m2 2c1.075-.409 2.413-.924 3.385-1.539M11 15v4s3.254-.885 4-2c.83-1.246-.615-3.539-.615-3.539M9 13c.41-1.062.925-2.388 1.539-3.346M9 13H5s.885-3.254 2-4c1.246-.83 3.539.654 3.539.654m0 0C12.5 6.5 14.5 5 19 5c0 3.5-1 6.5-4.615 8.461"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4.67 17.526a1.668 1.668 0 0 1 3.33.142c0 .867-.663 1.589-1.526 1.663L4.5 19.5z"
        }
      )
    ]
  }
);
forwardRef(SvgRocket);
var SvgSalad = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 20 20",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M8.14 2.46a.65.65 0 0 1 .556-.08c.583.184 1.343.513 2.042.912.494.282 1.004.626 1.4 1.01 1.055-.56 2.11-.848 2.768-.945a.65.65 0 0 1 .688.379c.346.777.811 2.018 1.09 3.231.139.606.236 1.229.241 1.795a4 4 0 0 1-.033.588H17a.65.65 0 0 1 .65.65 7.64 7.64 0 0 1-3.392 6.357V18a.65.65 0 0 1-.65.65H6.393a.65.65 0 0 1-.65-.65v-1.643A7.64 7.64 0 0 1 2.35 10 .65.65 0 0 1 3 9.35h.124a7 7 0 0 1-.086-.957c-.022-.801.065-1.757.345-2.599A.65.65 0 0 1 4 5.35c.402 0 .97.04 1.594.149.147-.32.355-.697.618-1.085.45-.661 1.089-1.396 1.928-1.955M6.886 5.815c.605.197 1.22.478 1.734.877a3.1 3.1 0 0 1 1.068-.322A6.3 6.3 0 0 1 11 5.029a7 7 0 0 0-.907-.608 10.4 10.4 0 0 0-1.488-.698c-.543.416-.984.93-1.317 1.421a7 7 0 0 0-.402.672m4.326.755q.395.158.729.41c.726.545 1.21 1.4 1.256 2.369h2.376c.033-.146.054-.337.052-.577-.004-.437-.08-.959-.208-1.515a17.4 17.4 0 0 0-.81-2.518 8.2 8.2 0 0 0-2.266.943c-.407.25-.793.545-1.13.888m5.105 4.079H3.683a6.35 6.35 0 0 0 3.045 4.793.65.65 0 0 1 .315.557v1.35h5.915V16c0-.228.119-.44.314-.557a6.35 6.35 0 0 0 3.045-4.793M4.448 9.35h2.456c.031-.679.279-1.302.673-1.802-.478-.302-1.087-.523-1.724-.67A9 9 0 0 0 4.49 6.67a7 7 0 0 0-.152 1.687 5.6 5.6 0 0 0 .111.993m3.758 0h3.688a1.847 1.847 0 0 0-1.844-1.7 1.847 1.847 0 0 0-1.844 1.7",
        clipRule: "evenodd"
      }
    )
  }
);
forwardRef(SvgSalad);
var SvgSave = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 19a3 3 0 0 0 3-3v-5.757a3 3 0 0 0-.879-2.122L15.88 5.88A3 3 0 0 0 13.757 5H8v0a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3v0m8 0v-3a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3m8 0H8"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 6v4H9V6"
        }
      )
    ]
  }
);
forwardRef(SvgSave);
var SvgSchedule = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10.5 18H7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v0"
        }
      ),
      /* @__PURE__ */ jsx(Circle, { cx: 17.5, cy: 15.5, r: 4.5, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M17.5 14v1.054c0 .279.14.539.371.693L19 16.5"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 10h4M7 14h2"
        }
      )
    ]
  }
);
forwardRef(SvgSchedule);
var SvgSearchPerson = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6.5 16c2.106-3.276 6.894-3.276 9 0v0"
        }
      ),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinecap: "round", d: "m16 16 3 3" }),
      /* @__PURE__ */ jsx(Circle, { cx: 11, cy: 10.5, r: 2.5, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(Circle, { cx: 11, cy: 11, r: 7, stroke: "currentColor" })
    ]
  }
);
forwardRef(SvgSearchPerson);
var SvgSearch = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinecap: "round", d: "m16 16 3 3" }),
      /* @__PURE__ */ jsx(Rect, { width: 14, height: 14, x: 4, y: 4, stroke: "currentColor", rx: 7 })
    ]
  }
);
forwardRef(SvgSearch);
var SvgSettings = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M10.304 4.716a2 2 0 0 1 3.392 0l.74 1.185a2 2 0 0 0 1.628.94l1.396.048a2 2 0 0 1 1.696 2.938l-.656 1.234a2 2 0 0 0 0 1.878l.656 1.234a2 2 0 0 1-1.696 2.938l-1.396.048a2 2 0 0 0-1.628.94l-.74 1.185a2 2 0 0 1-3.392 0l-.74-1.185a2 2 0 0 0-1.627-.94l-1.397-.048a2 2 0 0 1-1.696-2.938l.656-1.234a2 2 0 0 0 0-1.878l-.656-1.234A2 2 0 0 1 6.54 6.89l1.397-.048a2 2 0 0 0 1.627-.94z"
        }
      ),
      /* @__PURE__ */ jsx(Circle, { cx: 11.999, cy: 12, r: 2.5, stroke: "currentColor" })
    ]
  }
);
forwardRef(SvgSettings);
var SvgShare = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 5H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.5"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m17 4 3 3m0 0-3 3m3-3h-4a4 4 0 0 0-4 4v.5"
        }
      )
    ]
  }
);
forwardRef(SvgShare);
var SvgSliders = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 13v8M16 3v8M8 3v1M16 20v1"
        }
      ),
      /* @__PURE__ */ jsx(Rect, { width: 6, height: 3, x: 5, y: 7, stroke: "currentColor", rx: 1.5 }),
      /* @__PURE__ */ jsx(Rect, { width: 6, height: 3, x: 13, y: 14, stroke: "currentColor", rx: 1.5 })
    ]
  }
);
forwardRef(SvgSliders);
var SvgSolidPause = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        d: "M6 17V7a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0M14 17V7a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0"
      }
    )
  }
);
forwardRef(SvgSolidPause);
var SvgSolidPlay = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        d: "M6 16.554V7.446C6 5.911 7.659 4.948 8.992 5.71l7.969 4.554c1.344.767 1.344 2.705 0 3.473L8.992 18.29C7.66 19.052 6 18.09 6 16.554"
      }
    )
  }
);
forwardRef(SvgSolidPlay);
var SvgSolidStop = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        d: "M8 5h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3"
      }
    )
  }
);
forwardRef(SvgSolidStop);
var SvgSort = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 20 20",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.667 13.15a.65.65 0 0 1-.65-.65V6.57l-1.39 1.39-.103.083a.65.65 0 0 1-.9-.9l.083-.103 2.5-2.5a.65.65 0 0 1 .92 0l2.5 2.5a.65.65 0 0 1-.92.92l-1.39-1.39v5.93a.65.65 0 0 1-.65.65m6.666-6.3a.65.65 0 0 0-.65.65v5.93l-1.39-1.39-.102-.083a.65.65 0 0 0-.9.9l.082.103 2.5 2.5a.65.65 0 0 0 .92 0l2.5-2.5a.65.65 0 0 0-.92-.92l-1.39 1.39V7.5a.65.65 0 0 0-.65-.65",
        clipRule: "evenodd"
      }
    )
  }
);
forwardRef(SvgSort);
var SvgSparkles = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          d: "M11.798 3.698a.45.45 0 0 1 .404 0 .47.47 0 0 1 .193.19c.025.042.049.094.07.138l.004.008.424.901.942.145.01.001c.045.007.101.016.148.028a.47.47 0 0 1 .238.135.47.47 0 0 1 .115.37.5.5 0 0 1-.11.24 2 2 0 0 1-.104.113l-.006.007-.691.706.163 1 .002.01c.008.049.017.105.02.154a.457.457 0 0 1-.365.499.46.46 0 0 1-.273-.037 2 2 0 0 1-.136-.07l-.008-.005L12 7.77l-.838.462-.008.005c-.041.023-.091.05-.136.07a.46.46 0 0 1-.275.036.457.457 0 0 1-.364-.498c.004-.049.013-.105.02-.154l.002-.01.164-1-.69-.706-.008-.007a2 2 0 0 1-.104-.112.5.5 0 0 1-.11-.241.47.47 0 0 1 .116-.37.47.47 0 0 1 .238-.135c.047-.012.103-.02.149-.028l.01-.001.94-.145.425-.9.004-.01c.02-.043.045-.095.07-.137a.47.47 0 0 1 .193-.19M5.798 6.698a.45.45 0 0 1 .404 0 .47.47 0 0 1 .193.19c.025.042.049.094.07.138l.004.008.424.901.942.145.01.001c.045.007.101.016.148.028a.47.47 0 0 1 .238.135.47.47 0 0 1 .115.37.5.5 0 0 1-.11.24c-.03.039-.07.08-.104.113l-.006.007-.691.706.163 1 .002.01c.008.049.017.105.02.154a.457.457 0 0 1-.364.499.46.46 0 0 1-.274-.037c-.045-.02-.095-.047-.136-.07l-.008-.005L6 10.77l-.838.463-.008.004c-.041.023-.091.05-.136.07a.46.46 0 0 1-.275.037.457.457 0 0 1-.364-.5c.004-.048.013-.104.02-.153l.002-.01.164-1-.69-.706-.008-.007a2 2 0 0 1-.104-.112.5.5 0 0 1-.11-.241.47.47 0 0 1 .116-.37.47.47 0 0 1 .237-.135c.048-.012.104-.02.15-.028l.01-.001.94-.145.425-.9.004-.01c.02-.043.045-.095.07-.137a.47.47 0 0 1 .193-.19M17.798 6.698a.45.45 0 0 1 .404 0 .47.47 0 0 1 .193.19c.025.042.049.094.07.138l.004.008.424.901.942.145.01.001c.045.007.101.016.148.028a.47.47 0 0 1 .238.135.47.47 0 0 1 .115.37.5.5 0 0 1-.11.24 2 2 0 0 1-.104.113l-.006.007-.691.706.164 1 .001.01c.008.049.017.105.02.154a.457.457 0 0 1-.364.499.46.46 0 0 1-.274-.037 2 2 0 0 1-.136-.07l-.008-.005L18 10.77l-.838.463-.008.004c-.041.023-.091.05-.136.07a.46.46 0 0 1-.275.037.457.457 0 0 1-.364-.5c.004-.048.013-.104.02-.153l.002-.01.164-1-.69-.706-.008-.007a2 2 0 0 1-.104-.112.5.5 0 0 1-.11-.241.47.47 0 0 1 .116-.37.47.47 0 0 1 .237-.135c.048-.012.104-.02.15-.028l.01-.001.94-.145.425-.9.004-.01c.02-.043.045-.095.07-.137a.47.47 0 0 1 .193-.19"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 11v8M6 14c1 .333 3 2 3 5M18 14c-1 .333-3 2-3 5"
        }
      )
    ]
  }
);
forwardRef(SvgSparkles);
var SvgSpinner = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        d: "M19 12a7 7 0 1 1-7-7"
      }
    )
  }
);
forwardRef(SvgSpinner);
var SvgSplit = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5 12h4l1.619-2.59A3 3 0 0 1 13.163 8H19m0 0-2-2m2 2-2 2M19 16h-5.837a3 3 0 0 1-2.544-1.41L9 12H5m14 4-2-2m2 2-2 2"
      }
    )
  }
);
forwardRef(SvgSplit);
var SvgStarFilled = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        d: "M11.55 4.457c.284-.143.616-.143.9 0 .238.118.369.323.437.44.072.124.147.283.224.446l1.624 3.453 3.624.555c.17.026.34.052.477.087s.366.105.545.302c.206.23.298.537.26.836-.031.255-.17.443-.26.553s-.211.235-.335.362l-2.638 2.695.623 3.813c.03.18.058.354.069.497.01.14.018.374-.1.602-.141.272-.399.475-.712.536a1.05 1.05 0 0 1-.623-.091 6 6 0 0 1-.433-.224L12 17.536l-3.232 1.783a6 6 0 0 1-.434.224 1.05 1.05 0 0 1-.622.091A1.02 1.02 0 0 1 7 19.098a1.1 1.1 0 0 1-.1-.602c.01-.143.04-.317.069-.497l.623-3.813-2.638-2.695a6 6 0 0 1-.336-.362 1.1 1.1 0 0 1-.26-.553c-.037-.3.054-.607.261-.836a1.06 1.06 0 0 1 .545-.302c.137-.035.307-.06.477-.087l.025-.003 3.599-.552 1.614-3.431.01-.022c.077-.163.152-.322.224-.446.068-.117.199-.322.437-.44"
      }
    )
  }
);
forwardRef(SvgStarFilled);
var SvgStar = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.54 4.108c.288-.144.627-.144.916 0 .24.12.373.329.445.45.075.13.153.295.233.466l.01.023 1.703 3.617 3.795.581.025.004c.179.028.356.055.498.09.142.036.375.108.556.308.21.234.304.547.266.852-.033.259-.173.45-.266.564-.094.115-.22.245-.351.378l-.017.017-2.758 2.818-.005.005.002.014.65 3.98.005.024c.03.19.06.37.072.52.01.144.018.383-.102.614a1.04 1.04 0 0 1-.724.546c-.271.053-.505-.037-.635-.094-.135-.058-.293-.146-.453-.234l-.022-.012-3.385-1.867-3.385 1.867-.022.012a6 6 0 0 1-.454.234c-.13.057-.364.147-.634.094a1.04 1.04 0 0 1-.725-.546 1.13 1.13 0 0 1-.102-.614c.012-.15.041-.33.072-.52l.004-.024.651-3.98.002-.014-.004-.005-2.758-2.818-.018-.017a6 6 0 0 1-.35-.378 1.1 1.1 0 0 1-.267-.564 1.07 1.07 0 0 1 .266-.852c.181-.2.414-.272.556-.307.142-.036.32-.063.499-.09l.024-.005 3.795-.581 1.702-3.617.01-.023a6 6 0 0 1 .234-.465c.072-.122.205-.33.445-.45m.458 1.554-1.676 3.56-.011.024c-.038.083-.104.225-.209.343q-.136.155-.323.246c-.146.071-.305.095-.391.107l-.025.004-3.81.584.019.019 2.758 2.818.018.018c.063.064.173.175.248.316q.095.179.118.38c.018.154-.008.306-.024.398l-.004.026-.649 3.966 3.356-1.85.022-.013c.077-.043.218-.122.377-.155a1 1 0 0 1 .412 0c.159.033.3.112.376.155l.022.012 3.356 1.851-.649-3.966-.004-.026c-.016-.091-.041-.244-.024-.399q.024-.199.118-.38c.075-.14.185-.25.249-.315l.018-.018 2.758-2.818.018-.019-3.81-.584-.024-.004a1.3 1.3 0 0 1-.392-.107 1 1 0 0 1-.323-.246c-.104-.118-.17-.26-.209-.343l-.01-.024z",
        clipRule: "evenodd"
      }
    )
  }
);
forwardRef(SvgStar);
var SvgStrikethrough = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 7.5A2.19 2.19 0 0 0 12.919 6h-1.313a3 3 0 0 0-2.497 1.336v0a3 3 0 0 0 0 3.328v0A3 3 0 0 0 11.606 12h.788a3 3 0 0 1 2.497 1.336v0a3 3 0 0 1 0 3.328v0A3 3 0 0 1 12.394 18h-1.313A2.19 2.19 0 0 1 9 16.5v0M19 12H5"
      }
    )
  }
);
forwardRef(SvgStrikethrough);
var SvgSuitcase = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Rect, { width: 16, height: 12, x: 4, y: 7.5, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", d: "M9 7.5v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M20 12.5H4M11 12.5v1.75c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25V12.5"
        }
      )
    ]
  }
);
forwardRef(SvgSuitcase);
var SvgTable = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4 9.5V17a2 2 0 0 0 2 2h6M4 9.5V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2.5m-16 0h8m8 0V17a2 2 0 0 1-2 2h-6m8-9.5h-8M4 14h16m-8 5V9.5"
      }
    )
  }
);
forwardRef(SvgTable);
var SvgTarget = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m12 12 3-3m0 0V6l3-3 1 2 2 1-3 3z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 12a7 7 0 1 1-7-7"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15.5 12A3.5 3.5 0 1 1 12 8.5"
        }
      )
    ]
  }
);
forwardRef(SvgTarget);
var SvgTextSize = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4 6h5m5 0H9m0 0v12m4-6h3m3 0h-3m0 0v6"
      }
    )
  }
);
forwardRef(SvgTextSize);
var SvgTimer = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 13, r: 7.35, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 10.33v2.667l3 1.666"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 5.5V3M10 3h4M19.09 6l1.414 1.414M4.91 6 3.496 7.414"
        }
      )
    ]
  }
);
forwardRef(SvgTimer);
var SvgUnderline = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 6v5a4 4 0 0 1-8 0V6"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 18h10"
        }
      )
    ]
  }
);
forwardRef(SvgUnderline);
var SvgUpload = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 14V5m0 0L9 8m3-3 3 3M19 15v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1"
      }
    )
  }
);
forwardRef(SvgUpload);
var SvgVideo = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M8.8 6h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 8.28 20 9.12 20 10.8v2.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 18 16.88 18 15.2 18H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 15.72 4 14.88 4 13.2v-2.4c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 6 7.12 6 8.8 6Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M10 14.117V9.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43Z"
        }
      )
    ]
  }
);
forwardRef(SvgVideo);
var SvgWallet = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 7v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-1"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M6 5h9a2 2 0 0 1 2 2v2H6a2 2 0 1 1 0-4Z"
        }
      ),
      /* @__PURE__ */ jsx(Circle, { cx: 16.25, cy: 13.75, r: 1.25, fill: "currentColor" })
    ]
  }
);
forwardRef(SvgWallet);
var SvgWarning = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M5.399 19c-1.525 0-2.489-1.638-1.748-2.971l6.6-11.882c.763-1.372 2.735-1.372 3.497 0l6.601 11.882c.74 1.333-.223 2.971-1.748 2.971zM12 7.5a.97.97 0 0 0-.967 1.045l.302 3.9a.667.667 0 0 0 1.33 0l.303-3.9A.97.97 0 0 0 12 7.5m0 8.987a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
        clipRule: "evenodd"
      }
    )
  }
);
forwardRef(SvgWarning);
var SvgWhatsappChat = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          d: "M12 5a7 7 0 0 0-6.297 10.062l.16.328-.824 3.278 3.237-.727.333.185A7 7 0 1 0 12 5m-9 7a9 9 0 1 1 4.984 8.056l-2.507.564a2 2 0 0 1-2.378-2.44l.65-2.582A9 9 0 0 1 3 12"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          d: "M8.941 8h1.544a.5.5 0 0 1 .464.314l.658 1.644a.5.5 0 0 1-.207.614l-.812.487a5.18 5.18 0 0 0 2.353 2.353l.487-.812a.5.5 0 0 1 .614-.207l1.644.658a.5.5 0 0 1 .314.464v1.544a.94.94 0 0 1-.941.941A7.53 7.53 0 0 1 8 8.941.94.94 0 0 1 8.941 8"
        }
      )
    ]
  }
);
forwardRef(SvgWhatsappChat);
var SvgWindows = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m20 4-8.537 1.247v6.16H20zm0 16.25v-7.524l-8.537-.016v6.19zm-9.671-7.587v6.129l-6.324-.885v-5.275zm0-7.307L4 6.24l.003 5.244h6.326z",
        clipRule: "evenodd"
      }
    )
  }
);
forwardRef(SvgWindows);
var COPIED_SHOWN_MS = 750;
var CopyAction = ({ text, children }) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), COPIED_SHOWN_MS);
      return () => clearTimeout(timer);
    }
  }, [copied]);
  const copyHandler = async () => {
    try {
      if (text) {
        await Clipboard.setStringAsync(text);
        setCopied(true);
      }
    } catch (error) {
    }
  };
  return /* @__PURE__ */ jsxs(
    Pressable,
    {
      "aria-label": copied ? "Copied!" : `Copy ${text}`,
      className: cn(
        "group flex flex-row justify-between gap-1.5 rounded p-1.5",
        "transition-colors duration-300 active:bg-f1-background-secondary-hover",
        copied ? "bg-f1-background-positive" : void 0
      ),
      onPress: copyHandler,
      children: [
        /* @__PURE__ */ jsx(View, { className: "flex flex-row items-center gap-1.5", children }),
        /* @__PURE__ */ jsxs(View, { className: "flex", children: [
          !copied && /* @__PURE__ */ jsx(
            Icon,
            {
              icon: LayersFront_default,
              size: "md",
              "aria-hidden": true,
              className: cn(
                "col-start-1 col-end-2 row-start-1 row-end-2 text-f1-icon-bold"
              )
            }
          ),
          copied && /* @__PURE__ */ jsx(
            Icon,
            {
              icon: CheckCircle_default,
              size: "md",
              "aria-hidden": true,
              className: cn(
                "col-start-1 col-end-2 row-start-1 row-end-2",
                "text-f1-icon-positive"
              )
            }
          )
        ] })
      ]
    }
  );
};

export { CopyAction };
//# sourceMappingURL=CopyAction.mjs.map
//# sourceMappingURL=CopyAction.mjs.map