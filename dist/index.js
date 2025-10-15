'use strict';

var reactNative = require('react-native');
var React3 = require('react');
var cva = require('cva');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var nativewind = require('nativewind');
var Svg = require('react-native-svg');
var dateFns = require('date-fns');
var twemojiParser = require('twemoji-parser');
var f0Core = require('@factorialco/f0-core');
var Clipboard = require('expo-clipboard');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React3__default = /*#__PURE__*/_interopDefault(React3);
var Svg__default = /*#__PURE__*/_interopDefault(Svg);
var Clipboard__namespace = /*#__PURE__*/_interopNamespace(Clipboard);

var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
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
var Avatar = ({ size, type, color: color2, className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
  reactNative.View,
  {
    className: cn(avatarVariants({ size, type, color: color2, className })),
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
var iconVariants = cva.cva({
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
    nativewind.cssInterop(icon, {
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
var Icon = React3.forwardRef(function Icon2({ size, icon, className, testID, ...props }, ref) {
  if (!icon) return null;
  const Component = applyIconInterop(icon);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Component,
    {
      ref,
      ...props,
      className: cn(iconVariants({ size }), className),
      testID
    }
  );
});
var badgeVariants = cva.cva({
  base: "flex shrink-0 items-center justify-center rounded-full",
  variants: {
    type: {
      neutral: "bg-transparent text-f1-icon",
      highlight: "text-f1-special-highlight",
      positive: "bg-f1-background-positive-bold text-f1-foreground-inverse",
      critical: "bg-f1-icon-critical text-f1-foreground-inverse",
      warning: "bg-f1-background-warning-bold text-f1-foreground-inverse"
    },
    size: {
      xs: "h-2.5 w-2.5",
      sm: "h-3 w-3",
      md: "h-5 w-5",
      lg: "h-6 w-6"
    }
  },
  defaultVariants: {
    type: "neutral",
    size: "md"
  }
});
var iconSizes = {
  xs: "xs",
  sm: "xs",
  md: "sm",
  lg: "md"
};
var Badge = ({ type, size = "md", icon }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Icon,
    {
      className: badgeVariants({ type, size }),
      icon,
      size: iconSizes[size]
    }
  );
};

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

// src/icons/app/index.ts
var app_exports = {};
__export(app_exports, {
  AcademicCap: () => AcademicCap_default,
  Add: () => Add_default,
  Ai: () => Ai_default,
  Alert: () => Alert_default,
  AlertCircle: () => AlertCircle_default,
  AlertCircleLine: () => AlertCircleLine_default,
  AlignTextCenter: () => AlignTextCenter_default,
  AlignTextJustify: () => AlignTextJustify_default,
  AlignTextLeft: () => AlignTextLeft_default,
  AlignTextRight: () => AlignTextRight_default,
  Appearance: () => Appearance_default,
  Archive: () => Archive_default,
  ArchiveOpen: () => ArchiveOpen_default,
  ArrowCycle: () => ArrowCycle_default,
  ArrowDown: () => ArrowDown_default,
  ArrowLeft: () => ArrowLeft_default,
  ArrowRight: () => ArrowRight_default,
  ArrowUp: () => ArrowUp_default,
  Bank: () => Bank_default,
  BarGraph: () => BarGraph_default,
  Bell: () => Bell_default,
  Bold: () => Bold_default,
  BookOpen: () => BookOpen_default,
  Briefcase: () => Briefcase_default,
  Bucket: () => Bucket_default,
  Building: () => Building_default,
  Bullet: () => Bullet_default,
  Calculator: () => Calculator_default,
  Calendar: () => Calendar_default,
  CalendarArrowDown: () => CalendarArrowDown_default,
  CalendarArrowLeft: () => CalendarArrowLeft_default,
  CalendarArrowRight: () => CalendarArrowRight_default,
  CameraPlus: () => CameraPlus_default,
  ChartLine: () => ChartLine_default,
  ChartPie: () => ChartPie_default,
  Check: () => Check_default,
  CheckCircle: () => CheckCircle_default,
  CheckCircleLine: () => CheckCircleLine_default,
  CheckDouble: () => CheckDouble_default,
  ChevronDown: () => ChevronDown_default,
  ChevronLeft: () => ChevronLeft_default,
  ChevronRight: () => ChevronRight_default,
  ChevronUp: () => ChevronUp_default,
  Circle: () => Circle_default,
  Clock: () => Clock_default,
  Code: () => Code_default,
  Coffee: () => Coffee_default,
  Comment: () => Comment_default,
  Completed: () => Completed_default,
  CreditCard: () => CreditCard_default,
  Cross: () => Cross_default,
  CrossedCircle: () => CrossedCircle_default,
  Crown: () => Crown_default,
  Delete: () => Delete_default,
  Deny: () => Deny_default,
  Desktop: () => Desktop_default,
  DollarBill: () => DollarBill_default,
  DottedCircle: () => DottedCircle_default,
  Download: () => Download_default,
  DropdownDefault: () => DropdownDefault_default,
  DropdownOpen: () => DropdownOpen_default,
  Ellipsis: () => Ellipsis_default,
  EllipsisHorizontal: () => EllipsisHorizontal_default,
  Envelope: () => Envelope_default,
  EnvelopeOpen: () => EnvelopeOpen_default,
  Exit: () => Exit_default,
  ExternalLink: () => ExternalLink_default,
  EyeInvisible: () => EyeInvisible_default,
  EyeVisible: () => EyeVisible_default,
  FaceNegative: () => FaceNegative_default,
  FaceNeutral: () => FaceNeutral_default,
  FacePositive: () => FacePositive_default,
  FaceSuperNegative: () => FaceSuperNegative_default,
  FaceSuperPositive: () => FaceSuperPositive_default,
  Feed: () => Feed_default,
  File: () => File_default,
  FileFilled: () => FileFilled_default,
  Filter: () => Filter_default,
  Flag: () => Flag_default,
  Folder: () => Folder_default,
  Folders: () => Folders_default,
  Globe: () => Globe_default,
  Graph: () => Graph_default,
  Handshake: () => Handshake_default,
  Heading1: () => Heading1_default,
  Heading2: () => Heading2_default,
  Heading3: () => Heading3_default,
  Heart: () => Heart_default,
  HoldHeart: () => HoldHeart_default,
  Home: () => Home_default,
  Hub: () => Hub_default,
  Image: () => Image_default,
  InProgressTask: () => InProgressTask_default,
  Inbox: () => Inbox_default,
  Info: () => Info_default,
  InfoCircle: () => InfoCircle_default,
  InfoCircleLine: () => InfoCircleLine_default,
  Italic: () => Italic_default,
  Kanban: () => Kanban_default,
  Laptop: () => Laptop_default,
  LayersFront: () => LayersFront_default,
  Lightbulb: () => Lightbulb_default,
  Link: () => Link_default,
  LinkRemove: () => LinkRemove_default,
  List: () => List_default,
  LockLocked: () => LockLocked_default,
  LockUnlocked: () => LockUnlocked_default,
  LogoAvatar: () => LogoAvatar_default,
  LogoEruditai: () => LogoEruditai_default,
  LogoTravelperk: () => LogoTravelperk_default,
  Masonry: () => Masonry_default,
  Maximize: () => Maximize_default,
  Megaphone: () => Megaphone_default,
  Menu: () => Menu_default,
  MessageFrown: () => MessageFrown_default,
  MessageHeart: () => MessageHeart_default,
  Messages: () => Messages_default,
  Microphone: () => Microphone_default,
  MicrophoneNegative: () => MicrophoneNegative_default,
  Minimize: () => Minimize_default,
  Minus: () => Minus_default,
  Mobile: () => Mobile_default,
  Money: () => Money_default,
  MoneyBag: () => MoneyBag_default,
  MoveDown: () => MoveDown_default,
  MoveTop: () => MoveTop_default,
  MoveUp: () => MoveUp_default,
  Office: () => Office_default,
  OlList: () => OlList_default,
  PalmTree: () => PalmTree_default,
  Paperclip: () => Paperclip_default,
  PartiallyCompleted: () => PartiallyCompleted_default,
  PauseCircle: () => PauseCircle_default,
  Pencil: () => Pencil_default,
  People: () => People_default,
  Person: () => Person_default,
  Phone: () => Phone_default,
  Pin: () => Pin_default,
  PixBrazil: () => PixBrazil_default,
  Placeholder: () => Placeholder_default,
  Plane: () => Plane_default,
  Plus: () => Plus_default,
  Present: () => Present_default,
  Printer: () => Printer_default,
  Proyector: () => Proyector_default,
  Question: () => Question_default,
  Quote: () => Quote_default,
  Reaction: () => Reaction_default,
  Receipt: () => Receipt_default,
  Record: () => Record_default,
  RemoveFavorite: () => RemoveFavorite_default,
  Replace: () => Replace_default,
  Reset: () => Reset_default,
  Rocket: () => Rocket_default,
  Salad: () => Salad_default,
  Save: () => Save_default,
  Schedule: () => Schedule_default,
  Search: () => Search_default,
  SearchPerson: () => SearchPerson_default,
  Settings: () => Settings_default,
  Share: () => Share_default,
  Sliders: () => Sliders_default,
  SolidPause: () => SolidPause_default,
  SolidPlay: () => SolidPlay_default,
  SolidStop: () => SolidStop_default,
  Sort: () => Sort_default,
  Sparkles: () => Sparkles_default,
  Spinner: () => Spinner_default,
  Split: () => Split_default,
  Star: () => Star_default,
  StarFilled: () => StarFilled_default,
  Strikethrough: () => Strikethrough_default,
  Suitcase: () => Suitcase_default,
  Table: () => Table_default,
  Target: () => Target_default,
  TextSize: () => TextSize_default,
  Timer: () => Timer_default,
  Underline: () => Underline_default,
  Upload: () => Upload_default,
  Video: () => Video_default,
  VideoRecorder: () => VideoRecorder_default,
  VideoRecorderNegative: () => VideoRecorderNegative_default,
  Wallet: () => Wallet_default,
  Warning: () => Warning_default,
  WhatsappChat: () => WhatsappChat_default,
  Windows: () => Windows_default
});
var SvgArrowCycle = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12.038 4.998a7.002 7.002 0 0 0-4.932 12.01m9.788-10.015a7 7 0 0 1 1.345 1.833 7.002 7.002 0 0 1-6.277 10.176"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef = React3.forwardRef(SvgArrowCycle);
var ArrowCycle_default = ForwardRef;
var SvgChartPie = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M11 13h7a7 7 0 1 1-7-7z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M14 4a6 6 0 0 1 6 6h-6z"
        }
      )
    ]
  }
);
var ForwardRef2 = React3.forwardRef(SvgChartPie);
var ChartPie_default = ForwardRef2;
var SvgCheckDouble = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m12 18 7.5-10M4.5 13l3.178 3.178a1 1 0 0 0 1.512-.114L15.5 7.5"
      }
    )
  }
);
var ForwardRef3 = React3.forwardRef(SvgCheckDouble);
var CheckDouble_default = ForwardRef3;
var SvgFileFilled = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M14.879 4.879 17.12 7.12A3 3 0 0 1 18 9.243V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h3.757a3 3 0 0 1 2.122.879M14 12h-4M12 16h-2"
      }
    )
  }
);
var ForwardRef4 = React3.forwardRef(SvgFileFilled);
var FileFilled_default = ForwardRef4;
var SvgMaximize = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M13.5 10.5 19 5m0 0h-4m4 0v4M10.5 13.5 5 19m0 0h4m-4 0v-4"
      }
    )
  }
);
var ForwardRef5 = React3.forwardRef(SvgMaximize);
var Maximize_default = ForwardRef5;
var SvgMicrophoneNegative = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 11V7a3 3 0 0 0-5.784-1.119M10.34 13.5a3 3 0 0 1-.886-.91"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M6 11a6 6 0 0 0 7.114 5.897M18 11c0 .923-.209 1.798-.581 2.58M12 17v3m0 0h-2m2 0h2M5 5l13 13"
        }
      )
    ]
  }
);
var ForwardRef6 = React3.forwardRef(SvgMicrophoneNegative);
var MicrophoneNegative_default = ForwardRef6;
var SvgMinimize = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m19 5-5.5 5.5m0 0h4m-4 0v-4M5 19l5.5-5.5m0 0h-4m4 0v4"
      }
    )
  }
);
var ForwardRef7 = React3.forwardRef(SvgMinimize);
var Minimize_default = ForwardRef7;
var SvgRecord = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 6, fill: "currentColor" })
    ]
  }
);
var ForwardRef8 = React3.forwardRef(SvgRecord);
var Record_default = ForwardRef8;
var SvgVideoRecorder = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Rect,
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
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef9 = React3.forwardRef(SvgVideoRecorder);
var VideoRecorder_default = ForwardRef9;
var SvgVideoRecorderNegative = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 13.7v-2.9c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C14.72 6 13.88 6 12.2 6H9.5m5.168 11.897C14.1 18 13.345 18 12.2 18H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 15.72 4 14.88 4 13.2v-2.4c0-1.036 0-1.752.077-2.3M17 11l4-2v6l-4-2z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", strokeLinecap: "round", d: "m5 5 13 13" })
    ]
  }
);
var ForwardRef10 = React3.forwardRef(SvgVideoRecorderNegative);
var VideoRecorderNegative_default = ForwardRef10;
var SvgAcademicCap = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "m3.16 8.536 8.654-3.462a.5.5 0 0 1 .372 0l8.653 3.462a.5.5 0 0 1 0 .928l-8.653 3.462a.5.5 0 0 1-.372 0L3.161 9.464a.5.5 0 0 1 0-.928Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M19 10v5.67a.5.5 0 0 1-.303.46l-6.5 2.786a.5.5 0 0 1-.394 0l-6.5-2.786A.5.5 0 0 1 5 15.67V10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef11 = React3.forwardRef(SvgAcademicCap);
var AcademicCap_default = ForwardRef11;
var SvgAdd = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 5v14M12 12H5h14"
      }
    )
  }
);
var ForwardRef12 = React3.forwardRef(SvgAdd);
var Add_default = ForwardRef12;
var SvgAi = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 13c3.314 0 6-3.134 6-7 0 3.866 2.686 7 6 7-3.314 0-6 3.134-6 7 0-3.866-2.686-7-6-7Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M17.5 3.35a.65.65 0 0 1 .65.65A1.85 1.85 0 0 0 20 5.85a.65.65 0 1 1 0 1.3A1.85 1.85 0 0 0 18.15 9a.65.65 0 1 1-1.3 0A1.85 1.85 0 0 0 15 7.15a.65.65 0 1 1 0-1.3A1.85 1.85 0 0 0 16.85 4a.65.65 0 0 1 .65-.65"
        }
      )
    ]
  }
);
var ForwardRef13 = React3.forwardRef(SvgAi);
var Ai_default = ForwardRef13;
var SvgAlertCircleLine = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", strokeLinecap: "round", d: "M12 12V9M12 15.1V15" })
    ]
  }
);
var ForwardRef14 = React3.forwardRef(SvgAlertCircleLine);
var AlertCircleLine_default = ForwardRef14;
var SvgAlertCircle = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-.967-11.94a.97.97 0 1 1 1.935 0l-.303 3.9a.667.667 0 0 1-1.33 0zM13 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      }
    )
  }
);
var ForwardRef15 = React3.forwardRef(SvgAlertCircle);
var AlertCircle_default = ForwardRef15;
var SvgAlert = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", strokeLinecap: "round", d: "M12 14V7M12 17.1V17" })
  }
);
var ForwardRef16 = React3.forwardRef(SvgAlert);
var Alert_default = ForwardRef16;
var SvgAlignTextCenter = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5 8h14M5 12h14M9 16h6"
      }
    )
  }
);
var ForwardRef17 = React3.forwardRef(SvgAlignTextCenter);
var AlignTextCenter_default = ForwardRef17;
var SvgAlignTextJustify = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5 8h14M5 12h14M5 16h14"
      }
    )
  }
);
var ForwardRef18 = React3.forwardRef(SvgAlignTextJustify);
var AlignTextJustify_default = ForwardRef18;
var SvgAlignTextLeft = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5 8h14M5 12h14M5 16h6"
      }
    )
  }
);
var ForwardRef19 = React3.forwardRef(SvgAlignTextLeft);
var AlignTextLeft_default = ForwardRef19;
var SvgAlignTextRight = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5 8h14M5 12h14M13 16h6"
      }
    )
  }
);
var ForwardRef20 = React3.forwardRef(SvgAlignTextRight);
var AlignTextRight_default = ForwardRef20;
var SvgAppearance = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Mask, { id: "appearance_svg__a", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fillRule: "evenodd",
          d: "M12 18.7V5.3a6.7 6.7 0 1 0 0 13.4m1.612-14.537a8 8 0 0 0-.614-.101h-.001a8 8 0 1 0 .615.101",
          clipRule: "evenodd"
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 18.7V5.3a6.7 6.7 0 1 0 0 13.4m1.612-14.537a8 8 0 0 0-.614-.101h-.001a8 8 0 1 0 .615.101",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M12 5.3h1.3V4H12zm0 13.4V20h1.3v-1.3zm1.612-14.537-.26 1.273zm-.614-.101-.16 1.29zm-.001 0-.16 1.29zm.001 15.876-.16-1.29zM10.7 5.3v13.4h2.6V5.3zM12 4a8 8 0 0 0-8 8h2.6A5.4 5.4 0 0 1 12 6.6zm-8 8a8 8 0 0 0 8 8v-2.6A5.4 5.4 0 0 1 6.6 12zm9.873-9.111a9 9 0 0 0-.714-.117l-.322 2.58q.261.032.515.084zm-.714-.117h-.003l-.318 2.58zm-.002 0A9 9 0 0 0 12 2.7v2.6q.426 0 .837.052zM12 2.7A9.3 9.3 0 0 0 2.7 12h2.6c0-3.7 3-6.7 6.7-6.7zM2.7 12a9.3 9.3 0 0 0 9.3 9.3v-2.6c-3.7 0-6.7-3-6.7-6.7zm9.3 9.3a9 9 0 0 0 1.159-.072l-.322-2.58A7 7 0 0 1 12 18.7zm1.159-.072c4.59-.57 8.141-4.484 8.141-9.228h-2.6a6.7 6.7 0 0 1-5.862 6.648zM21.3 12c0-4.496-3.189-8.244-7.427-9.111l-.521 2.547A6.7 6.7 0 0 1 18.7 12z",
          mask: "url(#appearance_svg__a)"
        }
      )
    ]
  }
);
var ForwardRef21 = React3.forwardRef(SvgAppearance);
var Appearance_default = ForwardRef21;
var SvgArchiveOpen = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m3.876 10.008-.252-2.016a1 1 0 0 1 .868-1.116l14.016-1.752a1 1 0 0 1 1.116.868l.252 2.016a1 1 0 0 1-.868 1.116L4.992 10.876a1 1 0 0 1-1.116-.868M19 12v3a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-4M14 14h-4"
      }
    )
  }
);
var ForwardRef22 = React3.forwardRef(SvgArchiveOpen);
var ArchiveOpen_default = ForwardRef22;
var SvgArchive = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4 9V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1M5 15v-5h14v5a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3M14 14h-4"
      }
    )
  }
);
var ForwardRef23 = React3.forwardRef(SvgArchive);
var Archive_default = ForwardRef23;
var SvgArrowDown = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m18 13-6 6-6-6"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef24 = React3.forwardRef(SvgArrowDown);
var ArrowDown_default = ForwardRef24;
var SvgArrowLeft = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m11 18-6-6 6-6M19 12H5.5"
      }
    )
  }
);
var ForwardRef25 = React3.forwardRef(SvgArrowLeft);
var ArrowLeft_default = ForwardRef25;
var SvgArrowRight = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m13 6 6 6-6 6M5 12h13.5"
      }
    )
  }
);
var ForwardRef26 = React3.forwardRef(SvgArrowRight);
var ArrowRight_default = ForwardRef26;
var SvgArrowUp = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m6 11 6-6 6 6M12 19V5.5"
      }
    )
  }
);
var ForwardRef27 = React3.forwardRef(SvgArrowUp);
var ArrowUp_default = ForwardRef27;
var SvgBank = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 16, height: 4, x: 4, y: 16, stroke: "currentColor", rx: 1 }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M4 5.78a1 1 0 0 1 .757-.97l7-1.75a1 1 0 0 1 .486 0l7 1.75a1 1 0 0 1 .757.97V8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM6 9v7M18 9v7M14 9v7M10 9v7"
        }
      )
    ]
  }
);
var ForwardRef28 = React3.forwardRef(SvgBank);
var Bank_default = ForwardRef28;
var SvgBarGraph = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 13v2M12 9v6M16 11v4"
        }
      )
    ]
  }
);
var ForwardRef29 = React3.forwardRef(SvgBarGraph);
var BarGraph_default = ForwardRef29;
var SvgBell = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9.764 18c.549.614 1.347 1 2.236 1 .888 0 1.687-.386 2.236-1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M12 4a5 5 0 0 0-5 5v.726c0 .175-.07.344-.194.468l-.774.774A2.362 2.362 0 0 0 7.702 15h8.596a2.362 2.362 0 0 0 1.67-4.032l-.774-.774A.66.66 0 0 1 17 9.726V9a5 5 0 0 0-5-5Z"
        }
      )
    ]
  }
);
var ForwardRef30 = React3.forwardRef(SvgBell);
var Bell_default = ForwardRef30;
var SvgBold = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M12.5 11.5a3 3 0 1 0 0-6H9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h6"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M14.833 18.5c2.025 0 3.667-1.567 3.667-3.5s-1.642-3.5-3.667-3.5H7.5"
        }
      )
    ]
  }
);
var ForwardRef31 = React3.forwardRef(SvgBold);
var Bold_default = ForwardRef31;
var SvgBookOpen = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 7.5c3-2.005 5.5-2 8 0v9.42c0 .838-.998 1.324-1.771 1-1.933-.811-3.935-.453-6.229 1.08m0-11.5c-3-2.005-5.5-2-8 0v9.42c0 .838.998 1.324 1.771 1C7.704 17.109 9.706 17.467 12 19m0-11.5V19"
      }
    )
  }
);
var ForwardRef32 = React3.forwardRef(SvgBookOpen);
var BookOpen_default = ForwardRef32;
var SvgBriefcase = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 16, height: 12, x: 4, y: 7, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", d: "M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", strokeLinejoin: "round", d: "M8 7v12M16 7v12" })
    ]
  }
);
var ForwardRef33 = React3.forwardRef(SvgBriefcase);
var Briefcase_default = ForwardRef33;
var SvgBucket = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "m9.002 4.538-4.149 5.659a3.5 3.5 0 0 0 .348 4.544l.152.153a3.5 3.5 0 0 0 4.575.325l5.574-4.18"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M15.502 11.038c-.85.85-3 .077-4.792-1.715C8.917 7.53 8.152 5.388 9.002 4.538s2.991-.085 4.784 1.708 2.566 3.943 1.716 4.792ZM19.5 17.5a2 2 0 1 1-4 0c0-1.641 1.347-3.282 1.83-3.818a.227.227 0 0 1 .34 0c.483.536 1.83 2.177 1.83 3.818Z"
        }
      )
    ]
  }
);
var ForwardRef34 = React3.forwardRef(SvgBucket);
var Bucket_default = ForwardRef34;
var SvgBuilding = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m5.53 6.64 5-2.813a3 3 0 0 1 2.94 0l5 2.813A3 3 0 0 1 20 9.255v5.49a3 3 0 0 1-1.53 2.615l-5 2.813a3 3 0 0 1-2.94 0l-5-2.813A3 3 0 0 1 4 14.746V9.255A3 3 0 0 1 5.53 6.64M5 8l7 4m0 8v-8m7-4-7 4"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M15 15.066v3.168a1 1 0 0 0 1.515.857l.5-.3a1 1 0 0 0 .485-.857v-4.05a.5.5 0 0 0-.757-.43l-1.257.755a1 1 0 0 0-.486.857"
        }
      )
    ]
  }
);
var ForwardRef35 = React3.forwardRef(SvgBuilding);
var Building_default = ForwardRef35;
var SvgBullet = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 20 20",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M10 7c-2.25 0-3 .75-3 3s.75 3 3 3 3-.75 3-3-.75-3-3-3"
      }
    )
  }
);
var ForwardRef36 = React3.forwardRef(SvgBullet);
var Bullet_default = ForwardRef36;
var SvgCalculator = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 12, height: 16, x: 6, y: 4, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", d: "M18 8H6M14 8v12M10 8v12M18 12H6M14 16H6" })
    ]
  }
);
var ForwardRef37 = React3.forwardRef(SvgCalculator);
var Calculator_default = ForwardRef37;
var SvgCalendarArrowDown = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 3v2m0 2V5m0 0H9m6 0h1a3 3 0 0 1 3 3v4M9 5V3m0 2v2m0-2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2M5 10h14M16.5 15v6m0 0L14 18.5m2.5 2.5 2.5-2.5"
      }
    )
  }
);
var ForwardRef38 = React3.forwardRef(SvgCalendarArrowDown);
var CalendarArrowDown_default = ForwardRef38;
var SvgCalendarArrowLeft = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 3v2m0 2V5m0 0H9m6 0h1a3 3 0 0 1 3 3v4M9 5V3m0 2v2m0-2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2M5 10h14M20 17.5h-7m0 0 3-3m-3 3 3 3"
      }
    )
  }
);
var ForwardRef39 = React3.forwardRef(SvgCalendarArrowLeft);
var CalendarArrowLeft_default = ForwardRef39;
var SvgCalendarArrowRight = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 3v2m0 2V5m0 0H9m6 0h1a3 3 0 0 1 3 3v4M9 5V3m0 2v2m0-2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2M5 10h14M13 17.5h7m0 0-3-3m3 3-3 3"
      }
    )
  }
);
var ForwardRef40 = React3.forwardRef(SvgCalendarArrowRight);
var CalendarArrowRight_default = ForwardRef40;
var SvgCalendar = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 3v2m0 2V5m0 0H9m6 0h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1m0 0V3m0 2v2M5 10h14"
      }
    )
  }
);
var ForwardRef41 = React3.forwardRef(SvgCalendar);
var Calendar_default = ForwardRef41;
var SvgCameraPlus = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M20 10v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h.28a1 1 0 0 0 .948-.684l.088-.265A3 3 0 0 1 11.162 4H14"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 3, stroke: "currentColor", strokeLinecap: "round" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", strokeLinecap: "round", d: "M19 6.5h-3M17.5 8V5" })
    ]
  }
);
var ForwardRef42 = React3.forwardRef(SvgCameraPlus);
var CameraPlus_default = ForwardRef42;
var SvgChartLine = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 6v9a3 3 0 0 0 3 3h13"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef43 = React3.forwardRef(SvgChartLine);
var ChartLine_default = ForwardRef43;
var SvgCheckCircleLine = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef44 = React3.forwardRef(SvgCheckCircleLine);
var CheckCircleLine_default = ForwardRef44;
var SvgCheckCircle = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-3.48-2.61a.65.65 0 1 0-1.04-.78l-4.05 5.4-2.47-2.47a.65.65 0 1 0-.92.92l3 3a.65.65 0 0 0 .98-.07z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef45 = React3.forwardRef(SvgCheckCircle);
var CheckCircle_default = ForwardRef45;
var SvgCheck = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m10.75 16.75 7-9.5M6.25 11.75l4.5 5"
      }
    )
  }
);
var ForwardRef46 = React3.forwardRef(SvgCheck);
var Check_default = ForwardRef46;
var SvgChevronDown = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m18 10-6 6M6 10l6 6"
      }
    )
  }
);
var ForwardRef47 = React3.forwardRef(SvgChevronDown);
var ChevronDown_default = ForwardRef47;
var SvgChevronLeft = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m15 6-6 6M15 18l-6-6"
      }
    )
  }
);
var ForwardRef48 = React3.forwardRef(SvgChevronLeft);
var ChevronLeft_default = ForwardRef48;
var SvgChevronRight = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m9 6 6 6M9 18l6-6"
      }
    )
  }
);
var ForwardRef49 = React3.forwardRef(SvgChevronRight);
var ChevronRight_default = ForwardRef49;
var SvgChevronUp = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m18 14-6-6M6 14l6-6"
      }
    )
  }
);
var ForwardRef50 = React3.forwardRef(SvgChevronUp);
var ChevronUp_default = ForwardRef50;
var SvgCircle = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 16, height: 16, x: 4, y: 4, fill: "currentColor", rx: 8 })
  }
);
var ForwardRef51 = React3.forwardRef(SvgCircle);
var Circle_default = ForwardRef51;
var SvgClock = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef52 = React3.forwardRef(SvgClock);
var Clock_default = ForwardRef52;
var SvgCode = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m9 17-5-5 5-5M15 17l5-5-5-5"
      }
    )
  }
);
var ForwardRef53 = React3.forwardRef(SvgCode);
var Code_default = ForwardRef53;
var SvgCoffee = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M6 17V8.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 2v0a1.414 1.414 0 0 0 0 2v0M12 2v0a1.414 1.414 0 0 0 0 2v0M16 11h1.5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H16"
        }
      )
    ]
  }
);
var ForwardRef54 = React3.forwardRef(SvgCoffee);
var Coffee_default = ForwardRef54;
var SvgComment = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        d: "M17 6H6.857A2.857 2.857 0 0 0 4 8.857v6.272A2.87 2.87 0 0 0 6.87 18a.18.18 0 0 1 .17.123l.521 1.56a1 1 0 0 0 1.549.485l2.623-1.968a1 1 0 0 1 .6-.2H17a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"
      }
    )
  }
);
var ForwardRef55 = React3.forwardRef(SvgComment);
var Comment_default = ForwardRef55;
var SvgCompleted = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.65 12a7.35 7.35 0 1 1 14.7 0 7.35 7.35 0 0 1-14.7 0M12 3.35a8.65 8.65 0 1 0 0 17.3 8.65 8.65 0 0 0 0-17.3M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef56 = React3.forwardRef(SvgCompleted);
var Completed_default = ForwardRef56;
var SvgCreditCard = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M20 10v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5m16 0V9a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v1m16 0H4M7 14h3"
      }
    )
  }
);
var ForwardRef57 = React3.forwardRef(SvgCreditCard);
var CreditCard_default = ForwardRef57;
var SvgCross = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M16.95 7.05 12 12l-4.95 4.95M12 12 7.05 7.05l9.9 9.9"
      }
    )
  }
);
var ForwardRef58 = React3.forwardRef(SvgCross);
var Cross_default = ForwardRef58;
var SvgCrossedCircle = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M3.35 12a8.65 8.65 0 1 1 17.3 0 8.65 8.65 0 0 1-17.3 0m6.11-3.46a.65.65 0 0 0-.92.92L11.08 12l-2.54 2.54a.65.65 0 1 0 .92.92L12 12.92l2.54 2.54a.65.65 0 1 0 .92-.92L12.92 12l2.54-2.54a.65.65 0 1 0-.92-.92L12 11.08z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef59 = React3.forwardRef(SvgCrossedCircle);
var CrossedCircle_default = ForwardRef59;
var SvgCrown = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m4.572 9.908 2 6.667A2 2 0 0 0 8.488 18h7.024a2 2 0 0 0 1.916-1.425l2-6.667a1 1 0 0 0-1.3-1.227l-2.73.993a1 1 0 0 1-1.265-.556l-1.21-2.903c-.342-.82-1.504-.82-1.846 0l-1.21 2.903a1 1 0 0 1-1.265.556l-2.73-.993a1 1 0 0 0-1.3 1.227"
      }
    )
  }
);
var ForwardRef60 = React3.forwardRef(SvgCrown);
var Crown_default = ForwardRef60;
var SvgDelete = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M17 8v9a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V8m10 0h-1.5M17 8h1.5M7 8h1.5M7 8H5.5m10 0V5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v3m7 0h-7"
      }
    )
  }
);
var ForwardRef61 = React3.forwardRef(SvgDelete);
var Delete_default = ForwardRef61;
var SvgDeny = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 20 20",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M3.983 10a6.017 6.017 0 0 1 9.787-4.69l-8.46 8.46A6 6 0 0 1 3.983 10m2.247 4.69a6.017 6.017 0 0 0 8.46-8.46zM10 2.682a7.317 7.317 0 1 0 0 14.634 7.317 7.317 0 0 0 0-14.634",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef62 = React3.forwardRef(SvgDeny);
var Deny_default = ForwardRef62;
var SvgDesktop = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M6 4h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef63 = React3.forwardRef(SvgDesktop);
var Desktop_default = ForwardRef63;
var SvgDollarBill = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14 9h-2.5a1.5 1.5 0 0 0-1.5 1.5v0a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5H10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", strokeLinecap: "round", d: "M7 12v.1M17 12v.1" })
    ]
  }
);
var ForwardRef64 = React3.forwardRef(SvgDollarBill);
var DollarBill_default = ForwardRef64;
var SvgDottedCircle = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor", strokeDasharray: "2 2" })
  }
);
var ForwardRef65 = React3.forwardRef(SvgDottedCircle);
var DottedCircle_default = ForwardRef65;
var SvgDownload = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19 15v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1M12 5v9m0 0-3-3m3 3 3-3"
      }
    )
  }
);
var ForwardRef66 = React3.forwardRef(SvgDownload);
var Download_default = ForwardRef66;
var SvgDropdownDefault = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Rect,
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
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", d: "m8.5 10.25 3.5 3.5 3.5-3.5" })
    ]
  }
);
var ForwardRef67 = React3.forwardRef(SvgDropdownDefault);
var DropdownDefault_default = ForwardRef67;
var SvgDropdownOpen = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Rect,
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
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", d: "m15.5 13.75-3.5-3.5-3.5 3.5" })
    ]
  }
);
var ForwardRef68 = React3.forwardRef(SvgDropdownOpen);
var DropdownOpen_default = ForwardRef68;
var SvgEllipsisHorizontal = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 1.5, fill: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 6.5, cy: 12, r: 1.5, fill: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 17.5, cy: 12, r: 1.5, fill: "currentColor" })
    ]
  }
);
var ForwardRef69 = React3.forwardRef(SvgEllipsisHorizontal);
var EllipsisHorizontal_default = ForwardRef69;
var SvgEllipsis = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Circle,
        {
          cx: 12,
          cy: 12,
          r: 1.5,
          fill: "currentColor",
          transform: "rotate(90 12 12)"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Circle,
        {
          cx: 12,
          cy: 6.5,
          r: 1.5,
          fill: "currentColor",
          transform: "rotate(90 12 6.5)"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Circle,
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
var ForwardRef70 = React3.forwardRef(SvgEllipsis);
var Ellipsis_default = ForwardRef70;
var SvgEnvelopeOpen = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M20 15V8.618a1 1 0 0 0-.553-.894L13.342 4.67a3 3 0 0 0-2.684 0L4.553 7.724A1 1 0 0 0 4 8.618V15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "m4 9 7.497 3.748c.317.159.69.159 1.006 0L20 9"
        }
      )
    ]
  }
);
var ForwardRef71 = React3.forwardRef(SvgEnvelopeOpen);
var EnvelopeOpen_default = ForwardRef71;
var SvgEnvelope = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "m4.5 9.5 6.654 3.105a2 2 0 0 0 1.692 0L19.5 9.5"
        }
      )
    ]
  }
);
var ForwardRef72 = React3.forwardRef(SvgEnvelope);
var Envelope_default = ForwardRef72;
var SvgExit = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M10 12h9m0 0-3-3m3 3-3 3M11 19H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h3"
      }
    )
  }
);
var ForwardRef73 = React3.forwardRef(SvgExit);
var Exit_default = ForwardRef73;
var SvgExternalLink = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M10 5H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.5M12.5 11.5 20 4m0 0h-4.5M20 4v4.5"
      }
    )
  }
);
var ForwardRef74 = React3.forwardRef(SvgExternalLink);
var ExternalLink_default = ForwardRef74;
var SvgEyeInvisible = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19.592 7.665c-1.274 2.632-4.038 5-7.592 5s-6.318-2.368-7.592-5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "m10.008 13.016-1.11 3.32M14.058 13.016l1.11 3.32M17.523 10.543 20 13.016M6.477 10.543 4 13.016"
        }
      )
    ]
  }
);
var ForwardRef75 = React3.forwardRef(SvgEyeInvisible);
var EyeInvisible_default = ForwardRef75;
var SvgEyeVisible = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M20 12c-1-3-4-6-8-6s-7 3-8 6c1 3 4 6 8 6s7-3 8-6Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 2.35, stroke: "currentColor" })
    ]
  }
);
var ForwardRef76 = React3.forwardRef(SvgEyeVisible);
var EyeVisible_default = ForwardRef76;
var SvgFaceNegative = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 9.5c-1.525 0-2.727.611-3.525 1.191-.401.292-.711.583-.923.804a6 6 0 0 0-.319.361l-.021.028-.007.01-.003.004-.002.002a1 1 0 0 0 1.6 1.2l-.001.002.003-.003q.008-.013.033-.042.05-.06.16-.177c.147-.154.369-.363.655-.571.577-.42 1.375-.809 2.35-.809s1.773.389 2.35.809a5 5 0 0 1 .815.748q.025.03.033.042l.002.002.001-.001a.999.999 0 1 0 1.599-1.2l-.002-.002-.003-.004-.007-.01-.021-.028-.07-.085a6 6 0 0 0-.249-.276 7 7 0 0 0-.923-.804c-.798-.58-2-1.191-3.525-1.191M8 9a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zm6 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef77 = React3.forwardRef(SvgFaceNegative);
var FaceNegative_default = ForwardRef77;
var SvgFaceNeutral = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18M8 14a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm2-6a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef78 = React3.forwardRef(SvgFaceNeutral);
var FaceNeutral_default = ForwardRef78;
var SvgFacePositive = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m4.6 10.7a1 1 0 0 0-1.4.2l.001-.002-.003.003-.033.042q-.05.061-.16.177a5 5 0 0 1-.655.571c-.577.42-1.376.809-2.35.809s-1.773-.389-2.35-.809a5 5 0 0 1-.815-.748l-.033-.042L8.8 13.9l-.001.001A.999.999 0 1 0 7.2 15.1l.002.002.003.004.007.01.021.028.07.085a6.96 6.96 0 0 0 1.17 1.08c.8.58 2.002 1.19 3.527 1.191 1.525 0 2.727-.611 3.525-1.191.4-.292.711-.583.923-.804.107-.111.19-.207.248-.277q.045-.052.07-.084.015-.016.022-.028l.007-.01.003-.004.002-.002a1 1 0 0 0-.2-1.4M10 8a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef79 = React3.forwardRef(SvgFacePositive);
var FacePositive_default = ForwardRef79;
var SvgFaceSuperNegative = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 10.5c-1.037 0-1.988.325-2.7.825-.677.476-1.3 1.24-1.3 2.175a1 1 0 0 0 .897.995L9 17.5h6a1 1 0 0 0 .995-.898L16 16.5c0-.934-.623-1.699-1.3-2.175-.712-.5-1.663-.825-2.7-.825M8.44 8.103a1 1 0 0 0-1.054 1.686l.084.059.643.402-.643.402a1 1 0 0 0 1.06 1.696l2-1.25.104-.075a1 1 0 0 0 0-1.546l-.104-.075-2-1.25zm8.408.367a1 1 0 0 0-1.288-.367l-.09.05-2 1.25-.104.074a1 1 0 0 0 0 1.546l.104.075 2 1.25a1 1 0 0 0 1.06-1.696l-.643-.402.643-.402.084-.059a1 1 0 0 0 .234-1.32",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef80 = React3.forwardRef(SvgFaceSuperNegative);
var FaceSuperNegative_default = ForwardRef80;
var SvgFaceSuperPositive = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18M9 14a1 1 0 0 0-.995.898L8 15c0 .935.623 1.699 1.3 2.175.712.5 1.663.825 2.7.825s1.988-.325 2.7-.825c.677-.476 1.3-1.24 1.3-2.175a1 1 0 0 0-.898-.995L15 14zm-.25-5c-.887 0-1.615.518-2.077 1.198l-.054.088a1 1 0 0 0 1.647 1.117l.061-.082c.196-.289.368-.321.423-.321.04 0 .172.018.353.231l.08.105.062.08a1 1 0 0 0 1.627-1.146l-.055-.086-.184-.24C10.175 9.404 9.534 9 8.75 9m6.5 0c-.887 0-1.615.518-2.077 1.198l-.054.088a1 1 0 0 0 1.647 1.117l.061-.082c.196-.289.368-.321.423-.321.04 0 .172.018.352.231l.08.105.063.08a1 1 0 0 0 1.627-1.146l-.055-.086-.184-.24C16.675 9.404 16.034 9 15.25 9",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef81 = React3.forwardRef(SvgFaceSuperPositive);
var FaceSuperPositive_default = ForwardRef81;
var SvgFeed = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4 12h3l2.5-5.5 5 11L17 12h3"
      }
    )
  }
);
var ForwardRef82 = React3.forwardRef(SvgFeed);
var Feed_default = ForwardRef82;
var SvgFile = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M14.879 4.879 17.12 7.12A3 3 0 0 1 18 9.243V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h3.757a3 3 0 0 1 2.122.879"
      }
    )
  }
);
var ForwardRef83 = React3.forwardRef(SvgFile);
var File_default = ForwardRef83;
var SvgFilter = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        d: "M5.415 6.65A1 1 0 0 1 6.175 5h11.65a1 1 0 0 1 .76 1.65l-4.344 5.07a1 1 0 0 0-.241.65v4.13a1 1 0 0 1-.4.8l-2 1.5A1 1 0 0 1 10 18v-5.63a1 1 0 0 0-.24-.65z"
      }
    )
  }
);
var ForwardRef84 = React3.forwardRef(SvgFilter);
var Filter_default = ForwardRef84;
var SvgFlag = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 5.5c3.5-1 5-.5 6.5.5S16 7 18 5.5V15c-2 1.5-4 1.5-5.5.5S9.5 14 6 15M6 4v16"
      }
    )
  }
);
var ForwardRef85 = React3.forwardRef(SvgFlag);
var Flag_default = ForwardRef85;
var SvgFolder = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        d: "M11.438 6a1.96 1.96 0 0 0-1.71-1H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 6.52 4 7.08 4 8.2v6c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 19 7.12 19 8.8 19h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 16.72 20 15.88 20 14.2v-2.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 7 16.88 7 15.2 7h-2.053a1.96 1.96 0 0 1-1.71-1Z"
      }
    )
  }
);
var ForwardRef86 = React3.forwardRef(SvgFolder);
var Folder_default = ForwardRef86;
var SvgFolders = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M10.438 5a1.96 1.96 0 0 0-1.71-1H7.13c-1.054 0-1.581 0-1.988.194a2 2 0 0 0-.948.948C4 5.549 4 6.076 4 7.13v4.07c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 16 7.12 16 8.8 16h4.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C18 13.72 18 12.88 18 11.2v-.783c0-1.32 0-1.98-.204-2.504a3 3 0 0 0-1.709-1.709C15.563 6 14.903 6 13.583 6h-1.436a1.96 1.96 0 0 1-1.71-1Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M7 19h4.4c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C21 14.44 21 12.76 21 9.4V9"
        }
      )
    ]
  }
);
var ForwardRef87 = React3.forwardRef(SvgFolders);
var Folders_default = ForwardRef87;
var SvgGlobe = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 12H5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M12 20c-1.767-1.804-3-5.275-3-8s1.233-6.196 3-8M12 20c1.767-1.804 3-5.275 3-8s-1.233-6.196-3-8"
        }
      )
    ]
  }
);
var ForwardRef88 = React3.forwardRef(SvgGlobe);
var Globe_default = ForwardRef88;
var SvgGraph = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 6v9a3 3 0 0 0 3 3h13"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef89 = React3.forwardRef(SvgGraph);
var Graph_default = ForwardRef89;
var SvgHandshake = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "m5.328 14.328.172.172 5-5 1.75 1.75a1.768 1.768 0 1 0 2.5-2.5l-2.629-2.629a3 3 0 0 0-4.242 0l-2.55 2.55a4 4 0 0 0 0 5.657Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M13 7a2.83 2.83 0 0 1 4 0l1.672 1.672a4 4 0 0 1 0 5.656l-4.258 4.258a2 2 0 0 1-2.828 0L11 18l-.086.086a2 2 0 0 1-2.828 0L7.5 17.5a1.414 1.414 0 0 1-2 0l-.25-.25c-.69-.69-.69-1.81 0-2.5L6 14"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M10.46 15.46a.65.65 0 1 0-.92-.92zm-2.5 2.5 2.5-2.5-.92-.92-2.5 2.5zM13.46 16.46a.65.65 0 1 0-.92-.92zm-2.5 2.5 2.5-2.5-.92-.92-2.5 2.5z"
        }
      )
    ]
  }
);
var ForwardRef90 = React3.forwardRef(SvgHandshake);
var Handshake_default = ForwardRef90;
var SvgHeading1 = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5 7v5m0 5v-5m0 0h7V7v10M18 7v10M16 9c1 0 2-1 2-2"
      }
    )
  }
);
var ForwardRef91 = React3.forwardRef(SvgHeading1);
var Heading1_default = ForwardRef91;
var SvgHeading2 = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4 7v5m0 5v-5m0 0h7V7v10M15 9.5A2.5 2.5 0 0 1 17.5 7v0A2.5 2.5 0 0 1 20 9.5v0a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 0-2.5 2.5V17h5"
      }
    )
  }
);
var ForwardRef92 = React3.forwardRef(SvgHeading2);
var Heading2_default = ForwardRef92;
var SvgHeading3 = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 9a2 2 0 0 1 2-2h.5A2.5 2.5 0 0 1 20 9.5v0a2.5 2.5 0 0 1-2.5 2.5v0M15 15a2 2 0 0 0 2 2h.5a2.5 2.5 0 0 0 2.5-2.5v0a2.5 2.5 0 0 0-2.5-2.5v0M4 7v5m0 5v-5m0 0h7V7v10"
      }
    )
  }
);
var ForwardRef93 = React3.forwardRef(SvgHeading3);
var Heading3_default = ForwardRef93;
var SvgHeart = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.063 6C12.875 6 12 8 12 8s-.875-2-3.062-2C7.188 6 5 7.714 5 10.286 5 14.57 12 19 12 19s7-4.429 7-8.714C19 8.143 17.25 6 15.063 6"
      }
    )
  }
);
var ForwardRef94 = React3.forwardRef(SvgHeart);
var Heart_default = ForwardRef94;
var SvgHoldHeart = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6.027 21H8.7a.49.49 0 0 0 .442-.276c.598-1.27.853-2.514.853-3.72 0-.652-.228-1.081-.533-1.783-.194-.446-.427-.95-.587-1.207-.321-.518-.948-.68-1.411-.448s-.582.789-.332 1.289.953 1.87.287 2.307c-.418.275-.937.2-1.317-.273-.224-.28-.6-.774-.6-1.193V11c0-1-.253-2-1.269-2C3.22 9 3 10 3 11v5c0 1.51.596 2.266 2.204 4.57.187.268.495.43.823.43M17.97 21h-2.675a.49.49 0 0 1-.441-.276c-.598-1.27-.854-2.514-.854-3.72 0-.652.228-1.081.533-1.783.194-.446.428-.95.587-1.207.322-.518.948-.68 1.411-.448s.583.789.333 1.289-.954 1.87-.288 2.307c.419.275.938.2 1.317-.273.224-.28.6-.774.6-1.193V11c0-1 .253-2 1.269-2 1.015 0 1.234 1 1.234 2v5c0 1.51-.596 2.266-2.203 4.57-.188.268-.496.43-.823.43M14.261 2C16.198 2 17.5 3.764 17.5 5.41 17.5 8.745 12 12 12 12c-.098 0-5.5-3.256-5.5-6.59C6.5 3.765 7.802 2 9.739 2c1.112 0 1.84.539 2.261 1.013A2.95 2.95 0 0 1 14.261 2"
      }
    )
  }
);
var ForwardRef95 = React3.forwardRef(SvgHoldHeart);
var HoldHeart_default = ForwardRef95;
var SvgHome = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "m6.256 7.603 4-2.857a3 3 0 0 1 3.488 0l4 2.857A3 3 0 0 1 19 10.043V16a3 3 0 0 1-3 3h-1a1 1 0 0 1-1-1v-2.5a2 2 0 1 0-4 0V18a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3v-5.956a3 3 0 0 1 1.256-2.441Z"
      }
    )
  }
);
var ForwardRef96 = React3.forwardRef(SvgHome);
var Home_default = ForwardRef96;
var SvgHub = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Rect,
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
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Rect,
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
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Rect,
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
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Rect,
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
var ForwardRef97 = React3.forwardRef(SvgHub);
var Hub_default = ForwardRef97;
var SvgImage = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M4 15V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", d: "m20 15-1.879-1.879a3 3 0 0 0-4.242 0L9 18" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 9, cy: 11, r: 2.35, stroke: "currentColor" })
    ]
  }
);
var ForwardRef98 = React3.forwardRef(SvgImage);
var Image_default = ForwardRef98;
var SvgInProgressTask = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { fill: "currentColor", d: "M12 18a6 6 0 0 0 0-12z" })
    ]
  }
);
var ForwardRef99 = React3.forwardRef(SvgInProgressTask);
var InProgressTask_default = ForwardRef99;
var SvgInbox = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M20 15v-4.285a2 2 0 0 0-.453-1.268L17.624 7.1A3 3 0 0 0 15.303 6H8.31a3 3 0 0 0-2.48 1.312L4.347 9.49A2 2 0 0 0 4 10.616V15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef100 = React3.forwardRef(SvgInbox);
var Inbox_default = ForwardRef100;
var SvgInfoCircleLine = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 12v3"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef101 = React3.forwardRef(SvgInfoCircleLine);
var InfoCircleLine_default = ForwardRef101;
var SvgInfoCircle = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8.65-2.9a.65.65 0 1 0 1.3 0V9a.65.65 0 1 0-1.3 0zm0 6a.65.65 0 1 0 1.3 0v-3a.65.65 0 1 0-1.3 0z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef102 = React3.forwardRef(SvgInfoCircle);
var InfoCircle_default = ForwardRef102;
var SvgInfo = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M10 10h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1 4M12 7v.1"
      }
    )
  }
);
var ForwardRef103 = React3.forwardRef(SvgInfo);
var Info_default = ForwardRef103;
var SvgItalic = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M17 6h-4M9 6h4m0 0-2 12H7h8"
      }
    )
  }
);
var ForwardRef104 = React3.forwardRef(SvgItalic);
var Italic_default = ForwardRef104;
var SvgKanban = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5 6.5A1.5 1.5 0 0 1 6.5 5H9a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 9 19H6.5A1.5 1.5 0 0 1 5 17.5zM13.5 6.5A1.5 1.5 0 0 1 15 5h2.5A1.5 1.5 0 0 1 19 6.5v7a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5z"
      }
    )
  }
);
var ForwardRef105 = React3.forwardRef(SvgKanban);
var Kanban_default = ForwardRef105;
var SvgLaptop = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M5 15V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8M18 19H6a3 3 0 0 1-3-3 1 1 0 0 1 1-1h5.5a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5H20a1 1 0 0 1 1 1 3 3 0 0 1-3 3Z"
      }
    )
  }
);
var ForwardRef106 = React3.forwardRef(SvgLaptop);
var Laptop_default = ForwardRef106;
var SvgLayersFront = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20h1.4c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C20 15.44 20 13.76 20 10.4V9"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef107 = React3.forwardRef(SvgLayersFront);
var LayersFront_default = ForwardRef107;
var SvgLightbulb = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", d: "M8 16h8v1a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3z" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 16v-4.5m0 0-1.5-1m1.5 1 1.5-1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M8 16v-2.08a1.1 1.1 0 0 0-.322-.758 6 6 0 1 1 8.644 0 1.1 1.1 0 0 0-.322.757V16"
        }
      )
    ]
  }
);
var ForwardRef108 = React3.forwardRef(SvgLightbulb);
var Lightbulb_default = ForwardRef108;
var SvgLinkRemove = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        d: "m5 5 1 1M9 5V4M5 9H4M19 19l-1-1M15 19v1M19 15h1M12 17l-1 1a3.536 3.536 0 0 1-5 0v0a3.536 3.536 0 0 1 0-5l1-1M12 7l1-1a3.536 3.536 0 0 1 5 0v0a3.536 3.536 0 0 1 0 5l-1 1"
      }
    )
  }
);
var ForwardRef109 = React3.forwardRef(SvgLinkRemove);
var LinkRemove_default = ForwardRef109;
var SvgLink = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M11 18v0a3.536 3.536 0 0 1-5 0v0a3.536 3.536 0 0 1 0-5l3-3a2.83 2.83 0 0 1 4 0v0"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M13 6v0a3.536 3.536 0 0 1 5 0v0a3.536 3.536 0 0 1 0 5l-3 3a2.83 2.83 0 0 1-4 0v0"
        }
      )
    ]
  }
);
var ForwardRef110 = React3.forwardRef(SvgLink);
var Link_default = ForwardRef110;
var SvgList = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 8h10M9 12h10M9 16h10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M4.5 8a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm0 4a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm0 4a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z"
        }
      )
    ]
  }
);
var ForwardRef111 = React3.forwardRef(SvgList);
var List_default = ForwardRef111;
var SvgLockLocked = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M16 10H8a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3M12 14v1M8 10V8a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v2"
      }
    )
  }
);
var ForwardRef112 = React3.forwardRef(SvgLockLocked);
var LockLocked_default = ForwardRef112;
var SvgLockUnlocked = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M16 10H8a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3M12 14v1M8 10V8a4 4 0 0 1 4-4v0"
      }
    )
  }
);
var ForwardRef113 = React3.forwardRef(SvgLockUnlocked);
var LockUnlocked_default = ForwardRef113;
var SvgLogoAvatar = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M6.919 16.284a6.646 6.646 0 1 1 10.162 0q.505.315.964.689l.134.108a8 8 0 1 0-12.358 0l.134-.108q.46-.374.964-.689"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M17.037 18.215A7.97 7.97 0 0 1 12 20a7.97 7.97 0 0 1-5.037-1.785A7.97 7.97 0 0 1 12 16.431c1.91 0 3.662.668 5.037 1.784M12 14.708A2.954 2.954 0 1 0 12 8.8a2.954 2.954 0 0 0 0 5.908"
        }
      )
    ]
  }
);
var ForwardRef114 = React3.forwardRef(SvgLogoAvatar);
var LogoAvatar_default = ForwardRef114;
var SvgLogoEruditai = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M14.939 10.137q.03-.288.03-.584C14.969 6.486 12.513 4 9.484 4S4 6.486 4 9.553s2.455 5.552 5.484 5.552q.33 0 .65-.039v3.867c0 .59.472 1.067 1.053 1.067h7.275a1.06 1.06 0 0 0 1.053-1.067v-7.73a1.06 1.06 0 0 0-1.053-1.066zm0 0c-.266 2.575-2.271 4.627-4.805 4.93v-3.863c0-.59.472-1.067 1.053-1.067z"
      }
    )
  }
);
var ForwardRef115 = React3.forwardRef(SvgLogoEruditai);
var LogoEruditai_default = ForwardRef115;
var SvgLogoTravelperk = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M13.635 6.372c.3-.296 1.566-1.118 1.833-.855.25.263-.567 1.529-.85 1.808-.283.296-.5.51-.65.658l.467 4.768-.533.526-1.6-3.65-.633.625c-.45.46-1.117.937-1.666 1.266l.083 1.644-.25.246s-.783-1.446-.816-1.48c-.017-.032-1.483-.821-1.483-.821l.25-.247 1.65.082c.332-.542.799-1.2 1.265-1.66l.617-.608-3.666-1.595.533-.526 4.8.477c.15-.165.366-.379.649-.658"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M6.337 3.33C9.469.223 14.535.223 17.65 3.33a7.923 7.923 0 0 1 0 11.262c-3.133 3.107-8.198 3.107-11.314 0a7.95 7.95 0 0 1 0-11.262m1 10.292a6.62 6.62 0 0 0 9.33 0c2.583-2.581 2.583-6.74 0-9.289a6.62 6.62 0 0 0-9.33 0 6.537 6.537 0 0 0 0 9.29"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M12.002 18.34c1.383 0 2.7-.279 3.932-.854a.697.697 0 0 1 .934.345c.15.345 0 .756-.35.92a10.6 10.6 0 0 1-4.516.987c-1.566 0-3.1-.329-4.515-.986a.68.68 0 0 1-.35-.921.697.697 0 0 1 .933-.345 9.5 9.5 0 0 0 3.932.855M12.002 22.5c-1.25 0-2.466-.18-3.649-.559a.716.716 0 0 1-.466-.871.71.71 0 0 1 .883-.46c1.033.328 2.132.493 3.232.493s2.166-.165 3.216-.477a.715.715 0 0 1 .883.46.69.69 0 0 1-.466.872c-1.184.361-2.4.542-3.633.542"
        }
      )
    ]
  }
);
var ForwardRef116 = React3.forwardRef(SvgLogoTravelperk);
var LogoTravelperk_default = ForwardRef116;
var SvgMasonry = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        d: "M5 6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zM5 14a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zM14 16a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zM14 6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1z"
      }
    )
  }
);
var ForwardRef117 = React3.forwardRef(SvgMasonry);
var Masonry_default = ForwardRef117;
var SvgMegaphone = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "m17 6-3.033 1.213A11 11 0 0 1 9.882 8H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v2.25a1.75 1.75 0 1 0 3.5 0V15h.345c.763 0 1.52.146 2.228.43L17 17z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", strokeLinecap: "round", d: "M20 10v4" })
    ]
  }
);
var ForwardRef118 = React3.forwardRef(SvgMegaphone);
var Megaphone_default = ForwardRef118;
var SvgMenu = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5 7h14M5 12h14M5 17h14"
      }
    )
  }
);
var ForwardRef119 = React3.forwardRef(SvgMenu);
var Menu_default = ForwardRef119;
var SvgMessageFrown = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M17 6H6.857A2.857 2.857 0 0 0 4 8.857v6.272A2.87 2.87 0 0 0 6.87 18a.18.18 0 0 1 .17.123l.521 1.56a1 1 0 0 0 1.549.485l2.623-1.968a1 1 0 0 1 .6-.2H17a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef120 = React3.forwardRef(SvgMessageFrown);
var MessageFrown_default = ForwardRef120;
var SvgMessageHeart = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M17 6H6.857A2.857 2.857 0 0 0 4 8.857v6.272A2.87 2.87 0 0 0 6.87 18a.18.18 0 0 1 .17.123l.521 1.56a1 1 0 0 0 1.549.485l2.623-1.968a1 1 0 0 1 .6-.2H17a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef121 = React3.forwardRef(SvgMessageHeart);
var MessageHeart_default = ForwardRef121;
var SvgMessages = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M14 17v-3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5.793a.5.5 0 0 0 .854.353L7 19h5a2 2 0 0 0 2-2M10 9V7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5.793a.5.5 0 0 1-.854.353L17 12h-.5"
      }
    )
  }
);
var ForwardRef122 = React3.forwardRef(SvgMessages);
var Messages_default = ForwardRef122;
var SvgMicrophone = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 7a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3v0a3 3 0 0 1-3-3z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 11v0a6 6 0 0 1-6 6v0a6 6 0 0 1-6-6v0M12 17v3m0 0h-2m2 0h2"
        }
      )
    ]
  }
);
var ForwardRef123 = React3.forwardRef(SvgMicrophone);
var Microphone_default = ForwardRef123;
var SvgMinus = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19 12H5"
      }
    )
  }
);
var ForwardRef124 = React3.forwardRef(SvgMinus);
var Minus_default = ForwardRef124;
var SvgMobile = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M10.8 4h2.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C18 6.28 18 7.12 18 8.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C15.72 20 14.88 20 13.2 20h-2.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C6 17.72 6 16.88 6 15.2V8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C8.28 4 9.12 4 10.8 4Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { fill: "currentColor", d: "M11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })
    ]
  }
);
var ForwardRef125 = React3.forwardRef(SvgMobile);
var Mobile_default = ForwardRef125;
var SvgMoneyBag = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "m5.55 14.121.714-4A5 5 0 0 1 11.186 6h1.628a5 5 0 0 1 4.922 4.121l.714 4A5 5 0 0 1 13.528 20h-3.056a5 5 0 0 1-4.922-5.879ZM10.326 2.5h3.348a1 1 0 0 1 .962 1.275L14 6h-4l-.636-2.225a1 1 0 0 1 .962-1.275Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14 10h-2.5a1.5 1.5 0 0 0-1.5 1.5v0a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5H10M12 16v1M12 9v1"
        }
      )
    ]
  }
);
var ForwardRef126 = React3.forwardRef(SvgMoneyBag);
var MoneyBag_default = ForwardRef126;
var SvgMoney = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 3h5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20h1.4c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C20 15.44 20 13.76 20 10.4V9M13.5 7H11a1.5 1.5 0 0 0-1.5 1.5v0A1.5 1.5 0 0 0 11 10h1a1.5 1.5 0 0 1 1.5 1.5v0A1.5 1.5 0 0 1 12 13H9.5M11.5 7V6M11.5 14v-1"
        }
      )
    ]
  }
);
var ForwardRef127 = React3.forwardRef(SvgMoney);
var Money_default = ForwardRef127;
var SvgMoveDown = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M12.5 7H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m8 19 2-2-2-2"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Rect,
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
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Rect,
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
var ForwardRef128 = React3.forwardRef(SvgMoveDown);
var MoveDown_default = ForwardRef128;
var SvgMoveTop = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M13 19H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2.8"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m8 3 2 2-2 2"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          stroke: "currentColor",
          d: "M14 2.65h4c.746 0 1.35.604 1.35 1.35v2A1.35 1.35 0 0 1 18 7.35h-4A1.35 1.35 0 0 1 12.65 6V4c0-.746.604-1.35 1.35-1.35Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M14 9.65h4c.746 0 1.35.604 1.35 1.35v2A1.35 1.35 0 0 1 18 14.35h-4A1.35 1.35 0 0 1 12.65 13v-2c0-.746.604-1.35 1.35-1.35ZM14 16.65h4c.746 0 1.35.604 1.35 1.35v2A1.35 1.35 0 0 1 18 21.35h-4A1.35 1.35 0 0 1 12.65 20v-2c0-.746.604-1.35 1.35-1.35Z"
        }
      )
    ]
  }
);
var ForwardRef129 = React3.forwardRef(SvgMoveTop);
var MoveTop_default = ForwardRef129;
var SvgMoveUp = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M12.5 17H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m8 5 2 2-2 2"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Rect,
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
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Rect,
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
var ForwardRef130 = React3.forwardRef(SvgMoveUp);
var MoveUp_default = ForwardRef130;
var SvgOffice = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zM10 12h4M10 8h4"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M10 16.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V20h-4z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef131 = React3.forwardRef(SvgOffice);
var Office_default = ForwardRef131;
var SvgOlList = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7 4v6M13 7h6M13 12h6M13 17h6M5 14a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2v0a2 2 0 0 0-2 2v1h4M5 6c1 0 2-1 2-2"
      }
    )
  }
);
var ForwardRef132 = React3.forwardRef(SvgOlList);
var OlList_default = ForwardRef132;
var SvgPalmTree = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        d: "m12 12 5.954 2.977c.024.012.054 0 .062-.027.461-1.446-.003-2.888-.943-3.908-.027-.029-.007-.077.033-.077h2.849c.025 0 .045-.02.045-.044-.03-1.448-1.508-3.385-4.905-3.42-.038 0-.06-.045-.037-.074l1.924-2.405a.04.04 0 0 0 .005-.047c-.53-.983-3.004-1.458-4.987.525M12 12l-5.954 2.977a.045.045 0 0 1-.062-.027c-.461-1.446.003-2.888.943-3.908.027-.029.007-.077-.033-.077H4.045A.044.044 0 0 1 4 10.921c.03-1.448 1.508-3.385 4.905-3.42.038 0 .06-.045.037-.074L7.018 5.022a.04.04 0 0 1-.005-.047c.53-.983 3.004-1.458 4.987.525M8 19h8m-2.5-6 .5 6m-3.5-6-.5 6"
      }
    )
  }
);
var ForwardRef133 = React3.forwardRef(SvgPalmTree);
var PalmTree_default = ForwardRef133;
var SvgPaperclip = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        d: "m15 11-5 5a1.414 1.414 0 0 1-2 0v0a1.414 1.414 0 0 1 0-2l7-7a2.83 2.83 0 0 1 4 0v0a2.83 2.83 0 0 1 0 4l-7 7a4.243 4.243 0 0 1-6 0v0a4.243 4.243 0 0 1 0-6l5-5"
      }
    )
  }
);
var ForwardRef134 = React3.forwardRef(SvgPaperclip);
var Paperclip_default = ForwardRef134;
var SvgPartiallyCompleted = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.65 12a7.35 7.35 0 1 1 14.7 0 7.35 7.35 0 0 1-14.7 0M12 3.35a8.65 8.65 0 1 0 0 17.3 8.65 8.65 0 0 0 0-17.3M18 12a6 6 0 0 1-6 6c-4.8 0-6-4-6-6h6V6a6 6 0 0 1 6 6",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef135 = React3.forwardRef(SvgPartiallyCompleted);
var PartiallyCompleted_default = ForwardRef135;
var SvgPauseCircle = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16M10 8.35a.65.65 0 0 1 .65.65v6a.65.65 0 1 1-1.3 0V9a.65.65 0 0 1 .65-.65m4.65.65a.65.65 0 1 0-1.3 0v6a.65.65 0 1 0 1.3 0z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef136 = React3.forwardRef(SvgPauseCircle);
var PauseCircle_default = ForwardRef136;
var SvgPencil = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m7 13-1.5 5.5L11 17m-4-4 7.5-7.5a2.83 2.83 0 0 1 4 0v0a2.83 2.83 0 0 1 0 4L11 17m-4-4 4 4"
      }
    )
  }
);
var ForwardRef137 = React3.forwardRef(SvgPencil);
var Pencil_default = ForwardRef137;
var SvgPeople = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 9, cy: 9, r: 4, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 13a3 3 0 1 0 0-6"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef138 = React3.forwardRef(SvgPeople);
var People_default = ForwardRef138;
var SvgPerson = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 9, r: 4, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef139 = React3.forwardRef(SvgPerson);
var Person_default = ForwardRef139;
var SvgPhone = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "m10.728 5.684.974 2.921a1 1 0 0 1-.577 1.245L9.5 10.5c1 2 2 3 4 4l.65-1.624a1 1 0 0 1 1.245-.578l2.921.974a1 1 0 0 1 .684.949v2.28c0 1.656-1.35 2.977-2.978 2.663-2.54-.49-6.148-1.696-8.522-4.664-2.189-2.736-2.88-5.322-3.058-7.104C4.302 5.997 5.501 5 6.907 5H9.78a1 1 0 0 1 .948.684Z"
      }
    )
  }
);
var ForwardRef140 = React3.forwardRef(SvgPhone);
var Phone_default = ForwardRef140;
var SvgPin = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 20c3-3.2 6-6.065 6-9.6S15.314 4 12 4s-6 2.865-6 6.4 3 6.4 6 9.6"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 4, height: 4, x: 10, y: 8, stroke: "currentColor", rx: 2 })
    ]
  }
);
var ForwardRef141 = React3.forwardRef(SvgPin);
var Pin_default = ForwardRef141;
var SvgPixBrazil = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "m6.11 8.841-1.422 1.424a2.43 2.43 0 0 0 0 3.441l1.424 1.424 1.392-.007c.315 0 .617-.125.885-.37l2.397-2.395c.175-.176.388-.301.616-.373a1.9 1.9 0 0 1-.596-.352l-.01-.009-2.408-2.407c-.268-.246-.57-.371-.884-.371zM7.484 16.505c.67-.147 1.677-.388 1.967-.678l2.404-2.404c.002-.002.012-.01.032-.01.019 0 .029.008.03.01l2.414 2.413c.323.323 1.23.742 1.876.951l-2.498 2.498a2.48 2.48 0 0 1-3.441 0zM17.646 15.348l-1.367-.216c-.326 0-.647-.132-.88-.365l-2.412-2.413a1.5 1.5 0 0 0-.614-.37 1.9 1.9 0 0 0 .594-.351l.01-.009L15.4 9.203c.232-.23.554-.364.88-.364l1.587.005 1.422 1.421c.95.95.95 2.492 0 3.441zM16.207 7.182l-2.498-2.497a2.436 2.436 0 0 0-3.444 0L7.39 7.562c.699.109 1.773.277 2.066.587l2.4 2.4.002.003.012.01h.005c.003 0 .024-.002.056-.026l2.4-2.4c.324-.324 1.23-.745 1.876-.954"
      }
    )
  }
);
var ForwardRef142 = React3.forwardRef(SvgPixBrazil);
var PixBrazil_default = ForwardRef142;
var SvgPlaceholder = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "m17.5 6.5-11 11M17.5 17.5l-11-11"
        }
      )
    ]
  }
);
var ForwardRef143 = React3.forwardRef(SvgPlaceholder);
var Placeholder_default = ForwardRef143;
var SvgPlane = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m4.92 16.48 1.428.357c.237.06.356.089.452.15a.7.7 0 0 1 .212.213c.062.096.092.215.151.452l.357 1.429c.157.628.236.942.412 1.089a.7.7 0 0 0 .553.153c.227-.035.456-.264.914-.722l.273-.273c.121-.121.182-.182.225-.252a.7.7 0 0 0 .084-.203c.019-.08.019-.166.019-.337v-1.072c0-.171 0-.257.02-.337a.7.7 0 0 1 .083-.203c.043-.07.104-.131.225-.252l1.471-1.471c.401-.401.601-.601.811-.642a.7.7 0 0 1 .528.108c.177.12.282.383.493.91l.738 1.846c.21.527.316.79.493.91a.7.7 0 0 0 .528.108c.21-.04.41-.241.811-.642l.391-.391c.15-.15.224-.224.273-.312a.7.7 0 0 0 .08-.252c.012-.1-.005-.204-.04-.413l-.81-4.863c-.035-.208-.052-.312-.04-.412a.7.7 0 0 1 .08-.252c.049-.088.123-.162.273-.312L18.5 8.5a2.121 2.121 0 0 0-3-3l-2.092 2.092c-.15.15-.224.224-.312.273a.7.7 0 0 1-.252.08c-.1.012-.204-.005-.412-.04l-4.863-.81c-.209-.035-.313-.052-.413-.04a.7.7 0 0 0-.251.08c-.089.049-.163.123-.313.273l-.391.391C5.8 8.2 5.6 8.4 5.559 8.61a.7.7 0 0 0 .108.528c.12.177.383.282.91.493l1.846.738c.527.21.79.316.91.493a.7.7 0 0 1 .108.528c-.04.21-.241.41-.642.811h0l-1.471 1.471c-.121.121-.182.182-.252.225a.7.7 0 0 1-.203.084c-.08.019-.166.019-.337.019H5.464c-.171 0-.257 0-.337.02a.7.7 0 0 0-.203.083c-.07.043-.131.104-.252.225l-.273.273c-.458.458-.687.687-.722.914a.7.7 0 0 0 .153.553c.147.176.46.255 1.09.412"
      }
    )
  }
);
var ForwardRef144 = React3.forwardRef(SvgPlane);
var Plane_default = ForwardRef144;
var SvgPlus = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.65 5a.65.65 0 1 0-1.3 0v6.35H5a.65.65 0 1 0 0 1.3h6.35V19a.65.65 0 1 0 1.3 0v-6.35H19a.65.65 0 1 0 0-1.3h-6.35z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef145 = React3.forwardRef(SvgPlus);
var Plus_default = ForwardRef145;
var SvgPresent = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 8v11M7 5.5A2.5 2.5 0 0 1 9.5 3v0A2.5 2.5 0 0 1 12 5.5V8H9.5A2.5 2.5 0 0 1 7 5.5M17 5.5A2.5 2.5 0 0 0 14.5 3v0A2.5 2.5 0 0 0 12 5.5V8h2.5A2.5 2.5 0 0 0 17 5.5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M5 12v-.65a.65.65 0 0 0-.65.65zm14 0h.65a.65.65 0 0 0-.65-.65zm-14 .65h14v-1.3H5zM18.35 12v4h1.3v-4zM16 18.35H8v1.3h8zM5.65 16v-4h-1.3v4zM8 18.35A2.35 2.35 0 0 1 5.65 16h-1.3A3.65 3.65 0 0 0 8 19.65zM18.35 16A2.35 2.35 0 0 1 16 18.35v1.3A3.65 3.65 0 0 0 19.65 16z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef146 = React3.forwardRef(SvgPresent);
var Present_default = ForwardRef146;
var SvgPrinter = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 13v-1.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 7 7.12 7 8.8 7h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 9.28 20 10.12 20 11.8V13c0 .93 0 1.395-.102 1.777a3 3 0 0 1-2.122 2.12C17.396 17 16.93 17 16 17v-1.4c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C15.24 14 14.96 14 14.4 14H9.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C8 14.76 8 15.04 8 15.6V17c-.93 0-1.395 0-1.776-.102a3 3 0 0 1-2.122-2.121C4 14.395 4 13.93 4 13ZM17 7a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M16 16.8v-1.2c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C15.24 14 14.96 14 14.4 14H9.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C8 14.76 8 15.04 8 15.6v1.2c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C9.52 20 10.08 20 11.2 20h1.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C16 18.48 16 17.92 16 16.8Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 17, cy: 11, r: 1, fill: "currentColor" })
    ]
  }
);
var ForwardRef147 = React3.forwardRef(SvgPrinter);
var Printer_default = ForwardRef147;
var SvgProyector = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", d: "M5 5h14v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef148 = React3.forwardRef(SvgProyector);
var Proyector_default = ForwardRef148;
var SvgQuestion = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 9c0-2 1.5-3 3-3s3 1.5 3 3c0 3-3 2.5-3 5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", strokeLinecap: "round", d: "M12 17v.1" })
    ]
  }
);
var ForwardRef149 = React3.forwardRef(SvgQuestion);
var Question_default = ForwardRef149;
var SvgQuote = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M10 6a5 5 0 0 0-5 5v2m0 0v2.5A2.5 2.5 0 0 0 7.5 18v0a2.5 2.5 0 0 0 2.5-2.5v0A2.5 2.5 0 0 0 7.5 13zM19 6a5 5 0 0 0-5 5v2m0 0v2.5a2.5 2.5 0 0 0 2.5 2.5v0a2.5 2.5 0 0 0 2.5-2.5v0a2.5 2.5 0 0 0-2.5-2.5z"
      }
    )
  }
);
var ForwardRef150 = React3.forwardRef(SvgQuote);
var Quote_default = ForwardRef150;
var SvgReaction = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 12a7 7 0 1 1-7-7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10 10v1M14 10v1M9.5 14v0a4 4 0 0 0 5 0v0"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef151 = React3.forwardRef(SvgReaction);
var Reaction_default = ForwardRef151;
var SvgReceipt = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        d: "M18 7v11.826a1 1 0 0 1-1.65.759l-1.184-1.014a1 1 0 0 0-1.319.015l-1.187 1.067a1 1 0 0 1-1.34-.003l-1.167-1.058a1 1 0 0 0-1.322-.018l-1.18 1.011A1 1 0 0 1 6 18.825V7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3ZM9 8h6M9 12h4"
      }
    )
  }
);
var ForwardRef152 = React3.forwardRef(SvgReceipt);
var Receipt_default = ForwardRef152;
var SvgRemoveFavorite = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.456 4.108a1.02 1.02 0 0 0-.917 0c-.24.12-.373.329-.445.45a6 6 0 0 0-.233.466l-.01.023-.863 1.832a.65.65 0 0 0 1.176.554l.834-1.771 1.675 3.56.011.024c.039.083.105.225.21.343q.135.154.322.246c.146.071.305.095.392.107l.024.004 3.81.584-.018.019-2.206 2.253a.65.65 0 0 0 .93.91l2.205-2.254.017-.017c.13-.133.257-.263.351-.378s.233-.305.266-.564a1.07 1.07 0 0 0-.266-.852 1.1 1.1 0 0 0-.555-.307 6 6 0 0 0-.5-.09l-.024-.005-3.795-.581-1.702-3.617-.01-.023a6 6 0 0 0-.234-.465c-.072-.123-.204-.33-.445-.45m-5.585 6.22a.65.65 0 0 0-.197-1.285l-1.32.202-.025.004a6 6 0 0 0-.5.09 1.1 1.1 0 0 0-.555.308c-.21.234-.304.547-.266.852.033.259.173.45.266.564.094.115.221.244.351.378l.018.017L7.4 14.276l.004.005-.002.014-.65 3.98-.005.024c-.03.19-.06.37-.072.52a1.13 1.13 0 0 0 .102.614c.144.277.406.484.725.546.27.053.504-.037.634-.094.135-.058.293-.146.454-.234l.022-.012 3.385-1.867 3.385 1.867a.65.65 0 1 0 .627-1.139l-3.408-1.88-.022-.012c-.077-.043-.217-.122-.376-.155a1 1 0 0 0-.412 0c-.16.033-.3.112-.377.155l-.022.012-3.356 1.851.649-3.966.004-.026c.016-.091.042-.244.024-.399a1.1 1.1 0 0 0-.118-.38 1.4 1.4 0 0 0-.248-.315l-.018-.018-2.758-2.818-.02-.02zM6.46 5.54a.65.65 0 0 0-.92.92l12 12a.65.65 0 1 0 .92-.92z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef153 = React3.forwardRef(SvgRemoveFavorite);
var RemoveFavorite_default = ForwardRef153;
var SvgReplace = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M20 10V9a3 3 0 0 0-3-3h-3m0 0 2-2m-2 2 2 2M4 14v1a3 3 0 0 0 3 3h3m0 0-2 2m2-2-2-2M16 14h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2M6 4h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"
      }
    )
  }
);
var ForwardRef154 = React3.forwardRef(SvgReplace);
var Replace_default = ForwardRef154;
var SvgReset = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 13.5a7 7 0 1 0 7-7H5.5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef155 = React3.forwardRef(SvgReset);
var Reset_default = ForwardRef155;
var SvgRocket = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m11 15-2-2m2 2c1.075-.409 2.413-.924 3.385-1.539M11 15v4s3.254-.885 4-2c.83-1.246-.615-3.539-.615-3.539M9 13c.41-1.062.925-2.388 1.539-3.346M9 13H5s.885-3.254 2-4c1.246-.83 3.539.654 3.539.654m0 0C12.5 6.5 14.5 5 19 5c0 3.5-1 6.5-4.615 8.461"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4.67 17.526a1.668 1.668 0 0 1 3.33.142c0 .867-.663 1.589-1.526 1.663L4.5 19.5z"
        }
      )
    ]
  }
);
var ForwardRef156 = React3.forwardRef(SvgRocket);
var Rocket_default = ForwardRef156;
var SvgSalad = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 20 20",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M8.14 2.46a.65.65 0 0 1 .556-.08c.583.184 1.343.513 2.042.912.494.282 1.004.626 1.4 1.01 1.055-.56 2.11-.848 2.768-.945a.65.65 0 0 1 .688.379c.346.777.811 2.018 1.09 3.231.139.606.236 1.229.241 1.795a4 4 0 0 1-.033.588H17a.65.65 0 0 1 .65.65 7.64 7.64 0 0 1-3.392 6.357V18a.65.65 0 0 1-.65.65H6.393a.65.65 0 0 1-.65-.65v-1.643A7.64 7.64 0 0 1 2.35 10 .65.65 0 0 1 3 9.35h.124a7 7 0 0 1-.086-.957c-.022-.801.065-1.757.345-2.599A.65.65 0 0 1 4 5.35c.402 0 .97.04 1.594.149.147-.32.355-.697.618-1.085.45-.661 1.089-1.396 1.928-1.955M6.886 5.815c.605.197 1.22.478 1.734.877a3.1 3.1 0 0 1 1.068-.322A6.3 6.3 0 0 1 11 5.029a7 7 0 0 0-.907-.608 10.4 10.4 0 0 0-1.488-.698c-.543.416-.984.93-1.317 1.421a7 7 0 0 0-.402.672m4.326.755q.395.158.729.41c.726.545 1.21 1.4 1.256 2.369h2.376c.033-.146.054-.337.052-.577-.004-.437-.08-.959-.208-1.515a17.4 17.4 0 0 0-.81-2.518 8.2 8.2 0 0 0-2.266.943c-.407.25-.793.545-1.13.888m5.105 4.079H3.683a6.35 6.35 0 0 0 3.045 4.793.65.65 0 0 1 .315.557v1.35h5.915V16c0-.228.119-.44.314-.557a6.35 6.35 0 0 0 3.045-4.793M4.448 9.35h2.456c.031-.679.279-1.302.673-1.802-.478-.302-1.087-.523-1.724-.67A9 9 0 0 0 4.49 6.67a7 7 0 0 0-.152 1.687 5.6 5.6 0 0 0 .111.993m3.758 0h3.688a1.847 1.847 0 0 0-1.844-1.7 1.847 1.847 0 0 0-1.844 1.7",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef157 = React3.forwardRef(SvgSalad);
var Salad_default = ForwardRef157;
var SvgSave = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 19a3 3 0 0 0 3-3v-5.757a3 3 0 0 0-.879-2.122L15.88 5.88A3 3 0 0 0 13.757 5H8v0a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3v0m8 0v-3a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3m8 0H8"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef158 = React3.forwardRef(SvgSave);
var Save_default = ForwardRef158;
var SvgSchedule = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10.5 18H7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v0"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 17.5, cy: 15.5, r: 4.5, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M17.5 14v1.054c0 .279.14.539.371.693L19 16.5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef159 = React3.forwardRef(SvgSchedule);
var Schedule_default = ForwardRef159;
var SvgSearchPerson = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6.5 16c2.106-3.276 6.894-3.276 9 0v0"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", strokeLinecap: "round", d: "m16 16 3 3" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 11, cy: 10.5, r: 2.5, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 11, cy: 11, r: 7, stroke: "currentColor" })
    ]
  }
);
var ForwardRef160 = React3.forwardRef(SvgSearchPerson);
var SearchPerson_default = ForwardRef160;
var SvgSearch = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", strokeLinecap: "round", d: "m16 16 3 3" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 14, height: 14, x: 4, y: 4, stroke: "currentColor", rx: 7 })
    ]
  }
);
var ForwardRef161 = React3.forwardRef(SvgSearch);
var Search_default = ForwardRef161;
var SvgSettings = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M10.304 4.716a2 2 0 0 1 3.392 0l.74 1.185a2 2 0 0 0 1.628.94l1.396.048a2 2 0 0 1 1.696 2.938l-.656 1.234a2 2 0 0 0 0 1.878l.656 1.234a2 2 0 0 1-1.696 2.938l-1.396.048a2 2 0 0 0-1.628.94l-.74 1.185a2 2 0 0 1-3.392 0l-.74-1.185a2 2 0 0 0-1.627-.94l-1.397-.048a2 2 0 0 1-1.696-2.938l.656-1.234a2 2 0 0 0 0-1.878l-.656-1.234A2 2 0 0 1 6.54 6.89l1.397-.048a2 2 0 0 0 1.627-.94z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 11.999, cy: 12, r: 2.5, stroke: "currentColor" })
    ]
  }
);
var ForwardRef162 = React3.forwardRef(SvgSettings);
var Settings_default = ForwardRef162;
var SvgShare = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 5H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef163 = React3.forwardRef(SvgShare);
var Share_default = ForwardRef163;
var SvgSliders = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 13v8M16 3v8M8 3v1M16 20v1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 6, height: 3, x: 5, y: 7, stroke: "currentColor", rx: 1.5 }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 6, height: 3, x: 13, y: 14, stroke: "currentColor", rx: 1.5 })
    ]
  }
);
var ForwardRef164 = React3.forwardRef(SvgSliders);
var Sliders_default = ForwardRef164;
var SvgSolidPause = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M6 17V7a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0M14 17V7a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0"
      }
    )
  }
);
var ForwardRef165 = React3.forwardRef(SvgSolidPause);
var SolidPause_default = ForwardRef165;
var SvgSolidPlay = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M6 16.554V7.446C6 5.911 7.659 4.948 8.992 5.71l7.969 4.554c1.344.767 1.344 2.705 0 3.473L8.992 18.29C7.66 19.052 6 18.09 6 16.554"
      }
    )
  }
);
var ForwardRef166 = React3.forwardRef(SvgSolidPlay);
var SolidPlay_default = ForwardRef166;
var SvgSolidStop = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M8 5h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3"
      }
    )
  }
);
var ForwardRef167 = React3.forwardRef(SvgSolidStop);
var SolidStop_default = ForwardRef167;
var SvgSort = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 20 20",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.667 13.15a.65.65 0 0 1-.65-.65V6.57l-1.39 1.39-.103.083a.65.65 0 0 1-.9-.9l.083-.103 2.5-2.5a.65.65 0 0 1 .92 0l2.5 2.5a.65.65 0 0 1-.92.92l-1.39-1.39v5.93a.65.65 0 0 1-.65.65m6.666-6.3a.65.65 0 0 0-.65.65v5.93l-1.39-1.39-.102-.083a.65.65 0 0 0-.9.9l.082.103 2.5 2.5a.65.65 0 0 0 .92 0l2.5-2.5a.65.65 0 0 0-.92-.92l-1.39 1.39V7.5a.65.65 0 0 0-.65-.65",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef168 = React3.forwardRef(SvgSort);
var Sort_default = ForwardRef168;
var SvgSparkles = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M11.798 3.698a.45.45 0 0 1 .404 0 .47.47 0 0 1 .193.19c.025.042.049.094.07.138l.004.008.424.901.942.145.01.001c.045.007.101.016.148.028a.47.47 0 0 1 .238.135.47.47 0 0 1 .115.37.5.5 0 0 1-.11.24 2 2 0 0 1-.104.113l-.006.007-.691.706.163 1 .002.01c.008.049.017.105.02.154a.457.457 0 0 1-.365.499.46.46 0 0 1-.273-.037 2 2 0 0 1-.136-.07l-.008-.005L12 7.77l-.838.462-.008.005c-.041.023-.091.05-.136.07a.46.46 0 0 1-.275.036.457.457 0 0 1-.364-.498c.004-.049.013-.105.02-.154l.002-.01.164-1-.69-.706-.008-.007a2 2 0 0 1-.104-.112.5.5 0 0 1-.11-.241.47.47 0 0 1 .116-.37.47.47 0 0 1 .238-.135c.047-.012.103-.02.149-.028l.01-.001.94-.145.425-.9.004-.01c.02-.043.045-.095.07-.137a.47.47 0 0 1 .193-.19M5.798 6.698a.45.45 0 0 1 .404 0 .47.47 0 0 1 .193.19c.025.042.049.094.07.138l.004.008.424.901.942.145.01.001c.045.007.101.016.148.028a.47.47 0 0 1 .238.135.47.47 0 0 1 .115.37.5.5 0 0 1-.11.24c-.03.039-.07.08-.104.113l-.006.007-.691.706.163 1 .002.01c.008.049.017.105.02.154a.457.457 0 0 1-.364.499.46.46 0 0 1-.274-.037c-.045-.02-.095-.047-.136-.07l-.008-.005L6 10.77l-.838.463-.008.004c-.041.023-.091.05-.136.07a.46.46 0 0 1-.275.037.457.457 0 0 1-.364-.5c.004-.048.013-.104.02-.153l.002-.01.164-1-.69-.706-.008-.007a2 2 0 0 1-.104-.112.5.5 0 0 1-.11-.241.47.47 0 0 1 .116-.37.47.47 0 0 1 .237-.135c.048-.012.104-.02.15-.028l.01-.001.94-.145.425-.9.004-.01c.02-.043.045-.095.07-.137a.47.47 0 0 1 .193-.19M17.798 6.698a.45.45 0 0 1 .404 0 .47.47 0 0 1 .193.19c.025.042.049.094.07.138l.004.008.424.901.942.145.01.001c.045.007.101.016.148.028a.47.47 0 0 1 .238.135.47.47 0 0 1 .115.37.5.5 0 0 1-.11.24 2 2 0 0 1-.104.113l-.006.007-.691.706.164 1 .001.01c.008.049.017.105.02.154a.457.457 0 0 1-.364.499.46.46 0 0 1-.274-.037 2 2 0 0 1-.136-.07l-.008-.005L18 10.77l-.838.463-.008.004c-.041.023-.091.05-.136.07a.46.46 0 0 1-.275.037.457.457 0 0 1-.364-.5c.004-.048.013-.104.02-.153l.002-.01.164-1-.69-.706-.008-.007a2 2 0 0 1-.104-.112.5.5 0 0 1-.11-.241.47.47 0 0 1 .116-.37.47.47 0 0 1 .237-.135c.048-.012.104-.02.15-.028l.01-.001.94-.145.425-.9.004-.01c.02-.043.045-.095.07-.137a.47.47 0 0 1 .193-.19"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef169 = React3.forwardRef(SvgSparkles);
var Sparkles_default = ForwardRef169;
var SvgSpinner = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        d: "M19 12a7 7 0 1 1-7-7"
      }
    )
  }
);
var ForwardRef170 = React3.forwardRef(SvgSpinner);
var Spinner_default = ForwardRef170;
var SvgSplit = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5 12h4l1.619-2.59A3 3 0 0 1 13.163 8H19m0 0-2-2m2 2-2 2M19 16h-5.837a3 3 0 0 1-2.544-1.41L9 12H5m14 4-2-2m2 2-2 2"
      }
    )
  }
);
var ForwardRef171 = React3.forwardRef(SvgSplit);
var Split_default = ForwardRef171;
var SvgStarFilled = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M11.55 4.457c.284-.143.616-.143.9 0 .238.118.369.323.437.44.072.124.147.283.224.446l1.624 3.453 3.624.555c.17.026.34.052.477.087s.366.105.545.302c.206.23.298.537.26.836-.031.255-.17.443-.26.553s-.211.235-.335.362l-2.638 2.695.623 3.813c.03.18.058.354.069.497.01.14.018.374-.1.602-.141.272-.399.475-.712.536a1.05 1.05 0 0 1-.623-.091 6 6 0 0 1-.433-.224L12 17.536l-3.232 1.783a6 6 0 0 1-.434.224 1.05 1.05 0 0 1-.622.091A1.02 1.02 0 0 1 7 19.098a1.1 1.1 0 0 1-.1-.602c.01-.143.04-.317.069-.497l.623-3.813-2.638-2.695a6 6 0 0 1-.336-.362 1.1 1.1 0 0 1-.26-.553c-.037-.3.054-.607.261-.836a1.06 1.06 0 0 1 .545-.302c.137-.035.307-.06.477-.087l.025-.003 3.599-.552 1.614-3.431.01-.022c.077-.163.152-.322.224-.446.068-.117.199-.322.437-.44"
      }
    )
  }
);
var ForwardRef172 = React3.forwardRef(SvgStarFilled);
var StarFilled_default = ForwardRef172;
var SvgStar = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.54 4.108c.288-.144.627-.144.916 0 .24.12.373.329.445.45.075.13.153.295.233.466l.01.023 1.703 3.617 3.795.581.025.004c.179.028.356.055.498.09.142.036.375.108.556.308.21.234.304.547.266.852-.033.259-.173.45-.266.564-.094.115-.22.245-.351.378l-.017.017-2.758 2.818-.005.005.002.014.65 3.98.005.024c.03.19.06.37.072.52.01.144.018.383-.102.614a1.04 1.04 0 0 1-.724.546c-.271.053-.505-.037-.635-.094-.135-.058-.293-.146-.453-.234l-.022-.012-3.385-1.867-3.385 1.867-.022.012a6 6 0 0 1-.454.234c-.13.057-.364.147-.634.094a1.04 1.04 0 0 1-.725-.546 1.13 1.13 0 0 1-.102-.614c.012-.15.041-.33.072-.52l.004-.024.651-3.98.002-.014-.004-.005-2.758-2.818-.018-.017a6 6 0 0 1-.35-.378 1.1 1.1 0 0 1-.267-.564 1.07 1.07 0 0 1 .266-.852c.181-.2.414-.272.556-.307.142-.036.32-.063.499-.09l.024-.005 3.795-.581 1.702-3.617.01-.023a6 6 0 0 1 .234-.465c.072-.122.205-.33.445-.45m.458 1.554-1.676 3.56-.011.024c-.038.083-.104.225-.209.343q-.136.155-.323.246c-.146.071-.305.095-.391.107l-.025.004-3.81.584.019.019 2.758 2.818.018.018c.063.064.173.175.248.316q.095.179.118.38c.018.154-.008.306-.024.398l-.004.026-.649 3.966 3.356-1.85.022-.013c.077-.043.218-.122.377-.155a1 1 0 0 1 .412 0c.159.033.3.112.376.155l.022.012 3.356 1.851-.649-3.966-.004-.026c-.016-.091-.041-.244-.024-.399q.024-.199.118-.38c.075-.14.185-.25.249-.315l.018-.018 2.758-2.818.018-.019-3.81-.584-.024-.004a1.3 1.3 0 0 1-.392-.107 1 1 0 0 1-.323-.246c-.104-.118-.17-.26-.209-.343l-.01-.024z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef173 = React3.forwardRef(SvgStar);
var Star_default = ForwardRef173;
var SvgStrikethrough = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 7.5A2.19 2.19 0 0 0 12.919 6h-1.313a3 3 0 0 0-2.497 1.336v0a3 3 0 0 0 0 3.328v0A3 3 0 0 0 11.606 12h.788a3 3 0 0 1 2.497 1.336v0a3 3 0 0 1 0 3.328v0A3 3 0 0 1 12.394 18h-1.313A2.19 2.19 0 0 1 9 16.5v0M19 12H5"
      }
    )
  }
);
var ForwardRef174 = React3.forwardRef(SvgStrikethrough);
var Strikethrough_default = ForwardRef174;
var SvgSuitcase = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 16, height: 12, x: 4, y: 7.5, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", d: "M9 7.5v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M20 12.5H4M11 12.5v1.75c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25V12.5"
        }
      )
    ]
  }
);
var ForwardRef175 = React3.forwardRef(SvgSuitcase);
var Suitcase_default = ForwardRef175;
var SvgTable = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4 9.5V17a2 2 0 0 0 2 2h6M4 9.5V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2.5m-16 0h8m8 0V17a2 2 0 0 1-2 2h-6m8-9.5h-8M4 14h16m-8 5V9.5"
      }
    )
  }
);
var ForwardRef176 = React3.forwardRef(SvgTable);
var Table_default = ForwardRef176;
var SvgTarget = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m12 12 3-3m0 0V6l3-3 1 2 2 1-3 3z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 12a7 7 0 1 1-7-7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15.5 12A3.5 3.5 0 1 1 12 8.5"
        }
      )
    ]
  }
);
var ForwardRef177 = React3.forwardRef(SvgTarget);
var Target_default = ForwardRef177;
var SvgTextSize = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4 6h5m5 0H9m0 0v12m4-6h3m3 0h-3m0 0v6"
      }
    )
  }
);
var ForwardRef178 = React3.forwardRef(SvgTextSize);
var TextSize_default = ForwardRef178;
var SvgTimer = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 13, r: 7.35, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 10.33v2.667l3 1.666"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef179 = React3.forwardRef(SvgTimer);
var Timer_default = ForwardRef179;
var SvgUnderline = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 6v5a4 4 0 0 1-8 0V6"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
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
var ForwardRef180 = React3.forwardRef(SvgUnderline);
var Underline_default = ForwardRef180;
var SvgUpload = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 14V5m0 0L9 8m3-3 3 3M19 15v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1"
      }
    )
  }
);
var ForwardRef181 = React3.forwardRef(SvgUpload);
var Upload_default = ForwardRef181;
var SvgVideo = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M8.8 6h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 8.28 20 9.12 20 10.8v2.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 18 16.88 18 15.2 18H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 15.72 4 14.88 4 13.2v-2.4c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 6 7.12 6 8.8 6Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M10 14.117V9.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43Z"
        }
      )
    ]
  }
);
var ForwardRef182 = React3.forwardRef(SvgVideo);
var Video_default = ForwardRef182;
var SvgWallet = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 7v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M6 5h9a2 2 0 0 1 2 2v2H6a2 2 0 1 1 0-4Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 16.25, cy: 13.75, r: 1.25, fill: "currentColor" })
    ]
  }
);
var ForwardRef183 = React3.forwardRef(SvgWallet);
var Wallet_default = ForwardRef183;
var SvgWarning = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M5.399 19c-1.525 0-2.489-1.638-1.748-2.971l6.6-11.882c.763-1.372 2.735-1.372 3.497 0l6.601 11.882c.74 1.333-.223 2.971-1.748 2.971zM12 7.5a.97.97 0 0 0-.967 1.045l.302 3.9a.667.667 0 0 0 1.33 0l.303-3.9A.97.97 0 0 0 12 7.5m0 8.987a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef184 = React3.forwardRef(SvgWarning);
var Warning_default = ForwardRef184;
var SvgWhatsappChat = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M12 5a7 7 0 0 0-6.297 10.062l.16.328-.824 3.278 3.237-.727.333.185A7 7 0 1 0 12 5m-9 7a9 9 0 1 1 4.984 8.056l-2.507.564a2 2 0 0 1-2.378-2.44l.65-2.582A9 9 0 0 1 3 12"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M8.941 8h1.544a.5.5 0 0 1 .464.314l.658 1.644a.5.5 0 0 1-.207.614l-.812.487a5.18 5.18 0 0 0 2.353 2.353l.487-.812a.5.5 0 0 1 .614-.207l1.644.658a.5.5 0 0 1 .314.464v1.544a.94.94 0 0 1-.941.941A7.53 7.53 0 0 1 8 8.941.94.94 0 0 1 8.941 8"
        }
      )
    ]
  }
);
var ForwardRef185 = React3.forwardRef(SvgWhatsappChat);
var WhatsappChat_default = ForwardRef185;
var SvgWindows = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m20 4-8.537 1.247v6.16H20zm0 16.25v-7.524l-8.537-.016v6.19zm-9.671-7.587v6.129l-6.324-.885v-5.275zm0-7.307L4 6.24l.003 5.244h6.326z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef186 = React3.forwardRef(SvgWindows);
var Windows_default = ForwardRef186;

// src/icons/modules/index.ts
var modules_exports = {};
__export(modules_exports, {
  Benefits: () => Benefits_default,
  Calendar: () => Calendar_default2,
  Cards: () => Cards_default,
  ClockIn: () => ClockIn_default,
  Discover: () => Discover_default,
  Documents: () => Documents_default,
  Engagement: () => Engagement_default,
  Finance: () => Finance_default,
  Goals: () => Goals_default,
  Home: () => Home_default2,
  Hub: () => Hub_default2,
  Inbox: () => Inbox_default2,
  Kudos: () => Kudos_default,
  MyDocuments: () => MyDocuments_default,
  Organization: () => Organization_default,
  Overviews: () => Overviews_default,
  Payroll: () => Payroll_default,
  Performance: () => Performance_default,
  Profile: () => Profile_default,
  Projects: () => Projects_default,
  Recruitment: () => Recruitment_default,
  Reports: () => Reports_default,
  Sales: () => Sales_default,
  Settings: () => Settings_default2,
  Shifts: () => Shifts_default,
  Social: () => Social_default,
  Software: () => Software_default,
  Spaces: () => Spaces_default,
  Spending: () => Spending_default,
  Tasks: () => Tasks_default,
  TimeOff: () => TimeOff_default,
  TimeTracking: () => TimeTracking_default,
  Trainings: () => Trainings_default,
  Treasury: () => Treasury_default,
  Workflows: () => Workflows_default
});
var SvgBenefits = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M6.25 6.5A3.25 3.25 0 0 1 12 4.423 3.25 3.25 0 1 1 16.577 9h.756c.62 0 .93 0 1.185.068a2 2 0 0 1 1.414 1.414c.068.255.068.565.068 1.185 0 .31 0 .465-.034.592a1 1 0 0 1-.707.707c-.127.034-.282.034-.592.034H5.333c-.31 0-.465 0-.592-.034a1 1 0 0 1-.707-.707C4 12.132 4 11.977 4 11.667c0-.62 0-.93.068-1.185a2 2 0 0 1 1.414-1.414C5.737 9 6.047 9 6.667 9h.756A3.24 3.24 0 0 1 6.25 6.5M9.5 4.75c.966 0 1.75.784 1.75 1.75v1.75H9.5a1.75 1.75 0 1 1 0-3.5m5 3.5h-1.75V6.5a1.75 1.75 0 1 1 1.75 1.75",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M5 14.5a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H8a3 3 0 0 1-3-3zM12.5 14.5a.5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .5.5V17a3 3 0 0 1-3 3h-3a.5.5 0 0 1-.5-.5z"
        }
      )
    ]
  }
);
var ForwardRef187 = React3.forwardRef(SvgBenefits);
var Benefits_default = ForwardRef187;
var SvgCalendar2 = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M10 4a1 1 0 1 0-2 0v1h-.5A3.5 3.5 0 0 0 4 8.5v9A3.5 3.5 0 0 0 7.5 21h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 5H16V4a1 1 0 1 0-2 0v1h-4zm-2.4 6h8.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C18 10.76 18 11.04 18 11.6v4.2c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C16.48 19 15.92 19 14.8 19H9.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C6 17.48 6 16.92 6 15.8v-4.2c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C6.76 10 7.04 10 7.6 10",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef188 = React3.forwardRef(SvgCalendar2);
var Calendar_default2 = ForwardRef188;
var SvgCards = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M3.022 8.125h17.956c-.032-.655-.11-1.106-.305-1.487a3 3 0 0 0-1.311-1.311C18.72 5 17.88 5 16.2 5H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311c-.194.381-.273.832-.305 1.487"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M21 9.875H3V14.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 19 6.12 19 7.8 19h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 16.72 21 15.88 21 14.2zM13.125 15c0-.483.392-.875.875-.875h3a.875.875 0 0 1 0 1.75h-3a.875.875 0 0 1-.875-.875",
          clipRule: "evenodd"
        }
      )
    ]
  }
);
var ForwardRef189 = React3.forwardRef(SvgCards);
var Cards_default = ForwardRef189;
var SvgClockIn = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-7-3a1 1 0 1 0-2 0v2.465a2 2 0 0 0 .89 1.664l2.555 1.703a1 1 0 0 0 1.11-1.664L13 11.465z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef190 = React3.forwardRef(SvgClockIn);
var ClockIn_default = ForwardRef190;
var SvgDiscover = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M11.715 3.332c.18-.09.39-.09.57 0a.66.66 0 0 1 .27.263c.03.051.06.112.08.157l.005.01.413.878.914.14.011.002c.047.007.114.017.172.032a.65.65 0 0 1 .33.191.65.65 0 0 1 .162.518.66.66 0 0 1-.151.336 2 2 0 0 1-.119.128l-.008.009-.675.69.16.98.002.011c.008.05.02.116.024.175a.642.642 0 0 1-.514.696.65.65 0 0 1-.385-.05 2 2 0 0 1-.156-.079l-.01-.005-.81-.447-.81.447-.01.005a2 2 0 0 1-.156.08.65.65 0 0 1-.385.049.64.64 0 0 1-.514-.696c.005-.059.016-.125.024-.175l.002-.011.16-.98-.675-.69-.008-.009c-.034-.034-.082-.083-.119-.128a.66.66 0 0 1-.15-.336.65.65 0 0 1 .161-.518.65.65 0 0 1 .33-.191c.058-.015.125-.025.172-.032l.011-.002.914-.14.413-.877.005-.01c.02-.046.05-.107.08-.158a.66.66 0 0 1 .27-.263M5.362 6.509c.18-.09.39-.09.57 0a.66.66 0 0 1 .27.263c.03.05.06.112.08.157l.005.01.413.878.914.14.011.002c.047.007.114.017.172.031a.65.65 0 0 1 .33.192.65.65 0 0 1 .162.517.66.66 0 0 1-.15.336c-.038.046-.085.094-.12.129l-.008.008-.675.69.16.98.002.012c.008.05.02.116.024.175a.642.642 0 0 1-.514.696.65.65 0 0 1-.385-.05 2 2 0 0 1-.156-.08l-.01-.005-.81-.447-.81.447-.01.005a2 2 0 0 1-.156.08.65.65 0 0 1-.385.05.64.64 0 0 1-.514-.697 2 2 0 0 1 .026-.186l.16-.98-.675-.69-.008-.008a2 2 0 0 1-.119-.129.66.66 0 0 1-.15-.336.65.65 0 0 1 .161-.517.65.65 0 0 1 .33-.192 2 2 0 0 1 .183-.033l.914-.14.413-.878.005-.01c.02-.045.05-.106.08-.157a.66.66 0 0 1 .27-.263M12 10.147c.585 0 1.059.474 1.059 1.059v8.47a1.059 1.059 0 0 1-2.118 0v-8.47c0-.585.474-1.059 1.059-1.059M4.643 14.048a1.06 1.06 0 0 1 1.339-.67c1.46.486 3.9 2.634 3.9 6.299a1.059 1.059 0 0 1-2.117 0c0-2.689-1.795-4.07-2.453-4.29a1.06 1.06 0 0 1-.67-1.34M19.357 14.048a1.06 1.06 0 0 0-1.339-.67c-1.46.486-3.9 2.634-3.9 6.299a1.059 1.059 0 0 0 2.117 0c0-2.689 1.795-4.07 2.453-4.29.555-.185.854-.785.67-1.34",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M18.638 6.509a.64.64 0 0 0-.57 0 .66.66 0 0 0-.27.263c-.03.05-.06.112-.08.157l-.005.01-.413.878-.914.14-.011.002a2 2 0 0 0-.172.031.65.65 0 0 0-.33.192.65.65 0 0 0-.162.517.66.66 0 0 0 .15.336c.038.046.085.094.12.129l.008.008.675.69-.16.98-.002.012c-.008.05-.02.116-.024.175a.642.642 0 0 0 .514.696.65.65 0 0 0 .385-.05c.054-.024.114-.056.156-.08l.01-.005.81-.447.81.447.01.005c.042.024.102.056.156.08.05.022.2.085.385.05a.64.64 0 0 0 .514-.697 2 2 0 0 0-.024-.174l-.002-.012-.16-.98.675-.69.008-.008c.034-.035.082-.083.119-.129a.66.66 0 0 0 .15-.336.65.65 0 0 0-.161-.517.65.65 0 0 0-.33-.192 2 2 0 0 0-.172-.031l-.011-.002-.914-.14-.413-.878-.005-.01a2 2 0 0 0-.08-.157.66.66 0 0 0-.27-.263"
        }
      )
    ]
  }
);
var ForwardRef191 = React3.forwardRef(SvgDiscover);
var Discover_default = ForwardRef191;
var SvgDocuments = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M5.7 3.85A2.7 2.7 0 0 0 3 6.55v9a3.6 3.6 0 0 0 3.6 3.6h10.8a3.6 3.6 0 0 0 3.6-3.6v-5.4a3.6 3.6 0 0 0-3.6-3.6h-4.243a.257.257 0 0 1-.257-.257 2.443 2.443 0 0 0-2.443-2.443z"
      }
    )
  }
);
var ForwardRef192 = React3.forwardRef(SvgDocuments);
var Documents_default = ForwardRef192;
var SvgEngagement = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M7.2 4.03A3.2 3.2 0 0 0 4 7.23v6.4a3.2 3.2 0 0 0 3.2 3.2v2.234c0 1.069 1.293 1.604 2.049.848l2.848-2.848a.8.8 0 0 1 .566-.235H16.8a3.2 3.2 0 0 0 3.2-3.2v-6.4a3.2 3.2 0 0 0-3.2-3.2zm1.349 6.953q.4.747 1.097 1.44c.779.696 1.21 1.047 1.956 1.515h.002c.126.07.262.122.398.122s.27-.052.394-.122q.174-.096.357-.216v-.001a10.7 10.7 0 0 0 1.605-1.299 6 6 0 0 0 1.093-1.439q.406-.757.408-1.543.001-.578-.189-1.063a2.5 2.5 0 0 0-.525-.824 2.3 2.3 0 0 0-.763-.528c-.177-.094-.545-.187-.907-.195-.623-.013-1.22.251-1.474.557a2 2 0 0 0-.465-.33c-.286-.15-.626-.22-1.007-.22q-.476 0-.908.189-.428.186-.762.527-.335.348-.525.823v.001q-.191.485-.19 1.063c0 .524.138 1.04.405 1.543",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef193 = React3.forwardRef(SvgEngagement);
var Engagement_default = ForwardRef193;
var SvgFinance = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M9.2 2.899a.933.933 0 0 0-.897 1.19l.708 2.478c-.641.36-1.507 1.031-2.27 2.257C5.767 10.384 5 12.776 5 16.432c0 1.157.43 2.301 1.15 3.165.723.87 1.786 1.504 3.05 1.504h5.6c1.264 0 2.327-.635 3.05-1.504A5 5 0 0 0 19 16.432c0-3.656-.768-6.048-1.74-7.608-.764-1.226-1.63-1.898-2.27-2.257l.707-2.478a.933.933 0 0 0-.897-1.19zm3.963 3.267.4-1.4h-3.126l.4 1.4zM12.115 9.5c.479 0 .867.388.867.866v.263c.483.185 1.044.515 1.015 1.107-.025.507-.4.857-.864.816-.176 0-.323-.104-.482-.217-.187-.134-.391-.28-.68-.28-.45 0-.62.191-.62.553 0 .433.529.614 1.144.824.856.293 1.88.643 1.88 1.81 0 .958-.49 1.68-1.393 2.061v.33a.866.866 0 1 1-1.733 0v-.228a2.66 2.66 0 0 1-1.31-.819.866.866 0 0 1 1.304-1.14l.028.031c.125.146.342.4.7.4.262 0 .627-.208.627-.551 0-.409-.468-.535-1.033-.687-.856-.232-1.935-.523-1.935-1.953a2.22 2.22 0 0 1 1.62-2.135v-.185c0-.478.387-.866.865-.866",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef194 = React3.forwardRef(SvgFinance);
var Finance_default = ForwardRef194;
var SvgGoals = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M5.9 3a.9.9 0 0 1 .9.9v.357c.655-.202 1.537-.357 2.7-.357 1.62 0 2.48.571 3.2 1.051l.003.002c.628.42 1.12.747 2.197.747 1.249 0 2.033-.208 2.478-.386.223-.089.365-.172.44-.222l.066-.048A.9.9 0 0 1 19.4 5.7v7.984c0 .027.004.172-.041.33a1.1 1.1 0 0 1-.403.577l-.005.003c-.46.347-1.658 1.006-4.051 1.006-1.62 0-2.48-.571-3.2-1.051l-.003-.002c-.628-.42-1.12-.747-2.197-.747-1.249 0-2.034.208-2.478.386q-.129.051-.222.098V20.1a.9.9 0 1 1-1.8 0V3.9a.9.9 0 0 1 .9-.9"
      }
    )
  }
);
var ForwardRef195 = React3.forwardRef(SvgGoals);
var Goals_default = ForwardRef195;
var SvgHome2 = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M9.675 3.932a4 4 0 0 1 4.65 0l4 2.857A4 4 0 0 1 20 10.044V16a4 4 0 0 1-4 4h-1a2 2 0 0 1-2-2v-2.5a1 1 0 1 0-2 0V18a2 2 0 0 1-2 2H8a4 4 0 0 1-4-4v-5.956a4 4 0 0 1 1.675-3.255z"
      }
    )
  }
);
var ForwardRef196 = React3.forwardRef(SvgHome2);
var Home_default2 = ForwardRef196;
var SvgHub2 = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.G, { fill: "currentColor", filter: "url(#Hub_svg__a)", children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4.5 7.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M4.5 15A1.5 1.5 0 0 1 6 13.5h3a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 9 19.5H6A1.5 1.5 0 0 1 4.5 18zM13.5 6A1.5 1.5 0 0 1 15 4.5h3A1.5 1.5 0 0 1 19.5 6v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 13.5 9zM13.5 15a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5z" }) }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Defs, {})
    ]
  }
);
var ForwardRef197 = React3.forwardRef(SvgHub2);
var Hub_default2 = ForwardRef197;
var SvgInbox2 = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M5.004 6.749A4 4 0 0 1 8.31 5h6.993a4 4 0 0 1 3.094 1.465l2.377 2.901A1 1 0 0 1 21 10v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5a1 1 0 0 1 .173-.563zM8.31 7a2 2 0 0 0-1.653.874L5.891 9h1.088c1.367 0 2.533.988 2.757 2.336a.795.795 0 0 0 .784.664h2.96c.388 0 .72-.281.783-.664A2.795 2.795 0 0 1 17.02 9h.868L16.85 7.733A2 2 0 0 0 15.303 7z"
      }
    )
  }
);
var ForwardRef198 = React3.forwardRef(SvgInbox2);
var Inbox_default2 = ForwardRef198;
var SvgKudos = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "m11.895 5.955.105.082.105-.082C12.747 5.465 13.72 5 15.062 5c1.434 0 2.676.702 3.539 1.677C19.46 7.648 20 8.95 20 10.286c0 1.338-.542 2.608-1.253 3.711-.716 1.111-1.654 2.13-2.563 2.982a27.5 27.5 0 0 1-3.623 2.85l-.018.011-.006.003-.002.002a1 1 0 0 1-1.07 0L12 19c-.535.845-.536.844-.536.844h-.001l-.006-.004-.018-.012a12 12 0 0 1-.3-.198 27.48 27.48 0 0 1-3.323-2.65c-.91-.854-1.847-1.872-2.563-2.983C4.543 12.894 4 11.624 4 10.286 4 7.143 6.655 5 8.938 5c1.34 0 2.315.465 2.957.955"
      }
    )
  }
);
var ForwardRef199 = React3.forwardRef(SvgKudos);
var Kudos_default = ForwardRef199;
var SvgMyDocuments = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M3 6.55a2.7 2.7 0 0 1 2.7-2.7h4.757A2.443 2.443 0 0 1 12.9 6.293c0 .142.115.257.257.257H17.4a3.6 3.6 0 0 1 3.6 3.6v5.4a3.6 3.6 0 0 1-3.6 3.6H6.6a3.6 3.6 0 0 1-3.6-3.6zm11.118 4.394a2.144 2.144 0 1 1-4.289 0 2.144 2.144 0 0 1 4.289 0m-2.145 2.919c-1.203 0-2.264.567-3.081 1.21-.847.668-.284 1.827.795 1.827h4.573c1.079 0 1.642-1.159.795-1.826-.817-.644-1.878-1.211-3.081-1.211",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef200 = React3.forwardRef(SvgMyDocuments);
var MyDocuments_default = ForwardRef200;
var SvgOrganization = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M14.506 8.99c0 .647-.124 1.265-.35 1.833a3.403 3.403 0 1 0-.978-5.21 4.94 4.94 0 0 1 1.328 3.376M12.22 13.814c1.028-.62 2.23-1.075 3.545-1.075 2.173 0 4.037 1.239 5.32 2.422.89.818.246 2.116-.962 2.116h-3.19a2.6 2.6 0 0 0-.65-.916c-1.013-.933-2.4-1.965-4.064-2.547M13.356 8.99a3.81 3.81 0 1 1-7.621 0 3.81 3.81 0 0 1 7.621 0M9.545 14.494c-2.433 0-4.52 1.387-5.958 2.712-.995.916-.275 2.37 1.078 2.37h9.761c1.353 0 2.073-1.454 1.078-2.37-1.438-1.325-3.525-2.712-5.959-2.712"
      }
    )
  }
);
var ForwardRef201 = React3.forwardRef(SvgOrganization);
var Organization_default = ForwardRef201;
var SvgOverviews = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M11 12.2a.8.8 0 0 0 .8.8H17c.552 0 1.008.45.93.997A7.001 7.001 0 0 1 4 13a7 7 0 0 1 6.003-6.93c.547-.078.997.378.997.93z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M14 4c0-.552.45-1.007.997-.93a7 7 0 0 1 5.933 5.933c.078.547-.378.997-.93.997h-5.5a.5.5 0 0 1-.5-.5z"
        }
      )
    ]
  }
);
var ForwardRef202 = React3.forwardRef(SvgOverviews);
var Overviews_default = ForwardRef202;
var SvgPayroll = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M6.046 4.51A3.046 3.046 0 0 0 3 7.556v6.092a3.046 3.046 0 0 0 3.046 3.045h9.137a3.046 3.046 0 0 0 3.046-3.046V7.557a3.046 3.046 0 0 0-3.046-3.046zm4.569 2.284c.42 0 .761.341.761.762h.761a.761.761 0 0 1 0 1.523h-1.903a.38.38 0 0 0 0 .761h.761a1.904 1.904 0 0 1 .381 3.77v.038a.761.761 0 0 1-1.523 0h-.761a.761.761 0 1 1 0-1.523h1.903a.38.38 0 0 0 0-.762h-.761a1.904 1.904 0 0 1-.38-3.77v-.037c0-.42.34-.762.76-.762",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M21 9.586a.761.761 0 1 0-1.523 0v4.57a3.807 3.807 0 0 1-3.807 3.806H8.055a.761.761 0 1 0 0 1.523h7.615a5.33 5.33 0 0 0 5.33-5.33z"
        }
      )
    ]
  }
);
var ForwardRef203 = React3.forwardRef(SvgPayroll);
var Payroll_default = ForwardRef203;
var SvgPerformance = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M15.333 8.667a1.333 1.333 0 0 1 0-2.667h5.334C21.403 6 22 6.597 22 7.333v5.334a1.333 1.333 0 0 1-2.667 0v-2.115l-4.991 4.992a7 7 0 0 1-.374.355 2 2 0 0 1-.683.394 2 2 0 0 1-1.236 0c-.31-.101-.535-.268-.683-.394-.128-.109-.262-.243-.375-.355l-2.324-2.325-4.39 4.39a1.333 1.333 0 0 1-1.886-1.885l4.6-4.601c.113-.112.247-.246.375-.355.148-.126.372-.293.683-.394.401-.13.834-.13 1.236 0 .31.1.535.268.683.394.128.108.262.243.374.355l2.325 2.325 4.78-4.781z"
      }
    )
  }
);
var ForwardRef204 = React3.forwardRef(SvgPerformance);
var Performance_default = ForwardRef204;
var SvgProfile = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M12 12.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M4.965 17.702C6.663 16.138 9.127 14.5 12 14.5s5.337 1.638 7.035 3.202c1.175 1.082.325 2.798-1.272 2.798H6.237c-1.597 0-2.447-1.716-1.272-2.798"
      }
    )
  }
);
var ForwardRef205 = React3.forwardRef(SvgProfile);
var Profile_default = ForwardRef205;
var SvgProjects = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M8 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3h1a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4zm-3 7v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3h-5v.75c0 .69-.56 1.25-1.25 1.25h-1.5c-.69 0-1.25-.56-1.25-1.25V13zm5-7h4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1m2 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef206 = React3.forwardRef(SvgProjects);
var Projects_default = ForwardRef206;
var SvgRecruitment = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.579 3.5a7.579 7.579 0 1 0 4.73 13.5l2.253 2.253a.842.842 0 0 0 1.191-1.19L17.5 15.81A7.579 7.579 0 0 0 11.578 3.5m2.32 5.65a2.15 2.15 0 1 1-4.298 0 2.15 2.15 0 0 1 4.298 0m-2.149 2.924c-1.206 0-2.27.569-3.09 1.215-.848.668-.283 1.83.798 1.83h4.584c1.081 0 1.646-1.162.797-1.83-.82-.646-1.883-1.215-3.089-1.215",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef207 = React3.forwardRef(SvgRecruitment);
var Recruitment_default = ForwardRef207;
var SvgReports = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 2.85c.36 0 .65.292.65.65v.85H20a.65.65 0 0 1 0 1.3h-.35V12A3.65 3.65 0 0 1 16 15.65h-2.43l3.89 3.89a.651.651 0 0 1-.92.92l-3.89-3.89V20a.651.651 0 0 1-1.3 0v-3.43l-3.89 3.89a.651.651 0 0 1-.92-.92l3.891-3.89h-2.43A3.65 3.65 0 0 1 4.35 12V5.65H4a.65.65 0 1 1 0-1.3h7.35V3.5a.65.65 0 0 1 .65-.65m3.96 5.69a.65.65 0 0 0-.817-.083l-.103.083L13 10.58l-1.54-1.54a.65.65 0 0 0-.817-.083l-.103.083-2 2a.65.65 0 0 0 .92.92L11 10.42l1.54 1.54a.65.65 0 0 0 .92 0l2.5-2.5.083-.102a.65.65 0 0 0-.083-.818",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef208 = React3.forwardRef(SvgReports);
var Reports_default = ForwardRef208;
var SvgSales = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "m5.172 14.086.171.171 5-5 1.75 1.75a1.768 1.768 0 0 0 2.5-2.5L11.964 5.88a3 3 0 0 0-4.242 0l-2.55 2.55a4 4 0 0 0 0 5.657"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M13.987 6.063a2.83 2.83 0 0 1 2.856.694l1.672 1.672a4 4 0 0 1 0 5.656l-4.258 4.258a2 2 0 0 1-2.828 0l-.586-.586-.086.086a2 2 0 0 1-2.828 0c-.323-.323-.857-.29-1.305-.2a1.41 1.41 0 0 1-1.28-.386l-.25-.25a1.77 1.77 0 0 1-.467-1.667c.504.335 1.19.281 1.635-.164l4.081-4.08.831.83.115.11a3.068 3.068 0 0 0 4.333-4.333l-.11-.115z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "m14.593 8.507.121.134a1.768 1.768 0 0 1-2.62 2.366l-1.75-1.75 2.5-2.5z"
        }
      )
    ]
  }
);
var ForwardRef209 = React3.forwardRef(SvgSales);
var Sales_default = ForwardRef209;
var SvgSettings2 = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M9.752 4.372c1.038-1.662 3.458-1.662 4.496 0l.74 1.185c.238.38.65.619 1.098.634l1.396.048c1.958.068 3.168 2.164 2.248 3.894l-.656 1.233a1.35 1.35 0 0 0 0 1.268l.656 1.233c.92 1.73-.29 3.826-2.248 3.893l-1.396.049a1.35 1.35 0 0 0-1.098.634l-.74 1.185c-1.038 1.662-3.458 1.662-4.496 0l-.74-1.185a1.35 1.35 0 0 0-1.098-.634l-1.396-.049c-1.958-.067-3.168-2.163-2.248-3.893l.656-1.233a1.35 1.35 0 0 0 0-1.268l-.656-1.233c-.92-1.73.29-3.826 2.248-3.894l1.396-.048a1.35 1.35 0 0 0 1.098-.634zM12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef210 = React3.forwardRef(SvgSettings2);
var Settings_default2 = ForwardRef210;
var SvgShifts = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M5.65 5A3.65 3.65 0 0 0 2 8.65V15a3.65 3.65 0 0 0 3.65 3.65h6.98a5.8 5.8 0 0 1 7.02-8.538V8.65A3.65 3.65 0 0 0 16 5zM5 9.65A.65.65 0 0 1 5.65 9h4a.65.65 0 1 1 0 1.3h-4A.65.65 0 0 1 5 9.65M5 14a.65.65 0 0 1 .65-.65h2a.65.65 0 1 1 0 1.3h-2A.65.65 0 0 1 5 14",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M17.5 11a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m0 2.35a.65.65 0 0 1 .65.65v1.054c0 .061.03.118.082.152l1.128.753a.65.65 0 0 1-.72 1.082l-1.13-.753a1.48 1.48 0 0 1-.66-1.234V14a.65.65 0 0 1 .65-.65",
          clipRule: "evenodd"
        }
      )
    ]
  }
);
var ForwardRef211 = React3.forwardRef(SvgShifts);
var Shifts_default = ForwardRef211;
var SvgSocial = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 4.35A7.65 7.65 0 1 1 12 19.65 7.65 7.65 0 0 1 12 4.35m3.184 9.104a.876.876 0 0 0-1.23-.137 3.13 3.13 0 0 1-3.907 0 .876.876 0 0 0-1.094 1.366 4.88 4.88 0 0 0 6.094 0 .876.876 0 0 0 .137-1.23M10 9.125a.875.875 0 0 0-.875.875v1a.875.875 0 0 0 1.75 0v-1A.875.875 0 0 0 10 9.125m4 0a.875.875 0 0 0-.875.875v1a.875.875 0 0 0 1.75 0v-1A.875.875 0 0 0 14 9.125",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef212 = React3.forwardRef(SvgSocial);
var Social_default = ForwardRef212;
var SvgSoftware = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M3 7.5a3.6 3.6 0 0 1 3.6-3.6h10.8A3.6 3.6 0 0 1 21 7.5v5.4a3.6 3.6 0 0 1-3.6 3.6h-1.8v1.8h.9a.9.9 0 1 1 0 1.8h-9a.9.9 0 0 1 0-1.8h.9v-1.8H6.6A3.6 3.6 0 0 1 3 12.9zm3.6 7.2h10.8a1.8 1.8 0 0 0 1.8-1.8V7.5a1.8 1.8 0 0 0-1.8-1.8H6.6a1.8 1.8 0 0 0-1.8 1.8v5.4a1.8 1.8 0 0 0 1.8 1.8"
      }
    )
  }
);
var ForwardRef213 = React3.forwardRef(SvgSoftware);
var Software_default = ForwardRef213;
var SvgSpaces = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M10.446 3.948a3.2 3.2 0 0 1 3.108 0l4.8 2.667A3.2 3.2 0 0 1 20 9.412v5.176a3.2 3.2 0 0 1-1.646 2.797l-4.8 2.667a3.2 3.2 0 0 1-3.108 0l-4.8-2.667A3.2 3.2 0 0 1 4 14.588V9.412a3.2 3.2 0 0 1 1.646-2.797zm2.331 1.399a1.6 1.6 0 0 0-1.554 0L6.447 8 12 11.085 17.553 8zm5.622 4.013L12.8 12.47v6.17l1.6-.889v-3.236a1.6 1.6 0 0 1 .823-1.399l.388-.215a.8.8 0 0 1 1.189.699v2.818l.777-.431a1.6 1.6 0 0 0 .823-1.4V9.36",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef214 = React3.forwardRef(SvgSpaces);
var Spaces_default = ForwardRef214;
var SvgSpending = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.667 4.889A2.667 2.667 0 0 0 4 7.6v7.956a3.555 3.555 0 0 0 3.556 3.555h8.889A3.555 3.555 0 0 0 20 15.555V12a3.56 3.56 0 0 0-2.667-3.443V7.556a2.667 2.667 0 0 0-2.667-2.667zm-.889 2.692a.89.89 0 0 0 .889.864h8.888v-.89a.89.89 0 0 0-.889-.888h-8a.89.89 0 0 0-.888.889zm11.555 6.197a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef215 = React3.forwardRef(SvgSpending);
var Spending_default = ForwardRef215;
var SvgTasks = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0m11.338-2.592a.8.8 0 0 1 .054 1.13l-4 4.4a.8.8 0 0 1-1.158.028l-1.6-1.6a.8.8 0 0 1 1.132-1.132l1.006 1.007 3.436-3.78a.8.8 0 0 1 1.13-.053",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef216 = React3.forwardRef(SvgTasks);
var Tasks_default = ForwardRef216;
var SvgTimeOff = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M8.907 3.573c-1.102-.007-2.253.416-2.734 1.31a.89.89 0 0 0 .089.974l1.043 1.305C4.51 7.693 3.036 9.572 3 11.328c-.01.517.41.906.888.906h1.418a4.7 4.7 0 0 0-.244 3.477.888.888 0 0 0 1.244.524l3.222-1.61-.343 4.116H7.921a.843.843 0 0 0 0 1.686h8.158a.843.843 0 0 0 0-1.686h-1.264l-.343-4.117 3.222 1.611a.888.888 0 0 0 1.244-.524 4.7 4.7 0 0 0-.244-3.477h1.418a.89.89 0 0 0 .888-.906c-.036-1.757-1.51-3.635-4.305-4.166l1.043-1.305a.89.89 0 0 0 .09-.974c-.482-.894-1.633-1.317-2.735-1.31-.98.007-2.08.338-3.093 1.123-1.013-.785-2.112-1.116-3.093-1.123m3.8 10.169L12 13.388l-.707.354-.417 5h2.248z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef217 = React3.forwardRef(SvgTimeOff);
var TimeOff_default = ForwardRef217;
var SvgTimeTracking = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M8.85 2.05a.9.9 0 1 0 0 1.8h2.25v.95a8.101 8.101 0 1 0 1.8 0v-.95h2.25a.9.9 0 1 0 0-1.8zM12.9 9.7a.9.9 0 0 0-1.8 0v2.628a1.8 1.8 0 0 0 .907 1.563l2.697 1.54a.9.9 0 1 0 .893-1.562L12.9 12.328z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M6.336 5.836a.9.9 0 1 0-1.272-1.272l-1.8 1.8a.9.9 0 0 0 1.272 1.272zM18.936 4.564a.9.9 0 0 0-1.272 1.272l1.8 1.8a.9.9 0 0 0 1.272-1.272z"
        }
      )
    ]
  }
);
var ForwardRef218 = React3.forwardRef(SvgTimeTracking);
var TimeTracking_default = ForwardRef218;
var SvgTrainings = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M12 6.83C10.748 6.076 9.515 5.3 8.277 5.3c-1.414 0-2.715.547-3.943 1.53A.89.89 0 0 0 4 7.524v8.373c0 .765.464 1.328.998 1.615.524.282 1.198.35 1.81.094 1.354-.569 2.815-.38 4.698.88.299.199.689.199.988 0 1.883-1.26 3.344-1.449 4.699-.88.61.256 1.285.188 1.81-.094.533-.287.997-.85.997-1.615V7.524a.89.89 0 0 0-.334-.694c-1.228-.983-2.529-1.53-3.943-1.53-1.239 0-2.471.776-3.723 1.53"
      }
    )
  }
);
var ForwardRef219 = React3.forwardRef(SvgTrainings);
var Trainings_default = ForwardRef219;
var SvgTreasury = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M11.77 3.054c.151-.036.309-.036.46 0l7.5 1.765a1 1 0 0 1 .77.973V8a1 1 0 0 1-1 1h-.85v7h.85a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.85V9H4.5a1 1 0 0 1-1-1V5.792a1 1 0 0 1 .77-.973zM10.65 16h2.7V9h-2.7zm4 0h2.7V9h-2.7zm-8 0h2.7V9h-2.7z"
      }
    )
  }
);
var ForwardRef220 = React3.forwardRef(SvgTreasury);
var Treasury_default = ForwardRef220;
var SvgWorkflows = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M17.42 4.455a1.125 1.125 0 0 0-1.59 1.59l.329.33h-3.85A4.5 4.5 0 0 0 8.491 8.49l-.83 1.328a2.25 2.25 0 0 1-1.908 1.057H3.125a1.125 1.125 0 0 0 0 2.25h2.63c.775 0 1.496.4 1.907 1.057l.83 1.328a4.5 4.5 0 0 0 3.816 2.115h3.851l-.33.33a1.125 1.125 0 0 0 1.592 1.59l2.25-2.25c.439-.439.439-1.151 0-1.59l-2.25-2.25a1.125 1.125 0 0 0-1.591 1.59l.329.33h-3.85a2.25 2.25 0 0 1-1.909-1.057l-.83-1.328a4.5 4.5 0 0 0-.839-.99c.322-.284.606-.616.84-.99l.83-1.328a2.25 2.25 0 0 1 1.907-1.057h3.851l-.33.33a1.125 1.125 0 0 0 1.592 1.59l2.25-2.25c.439-.439.439-1.151 0-1.59z"
      }
    )
  }
);
var ForwardRef221 = React3.forwardRef(SvgWorkflows);
var Workflows_default = ForwardRef221;

// src/components/Avatars/ModuleAvatar/modules.ts
var modules = {
  "ai-reports": modules_exports.Reports,
  analytics: modules_exports.Reports,
  ats: modules_exports.Recruitment,
  benefits: modules_exports.Benefits,
  billing: modules_exports.Finance,
  calendar: modules_exports.Calendar,
  cards: modules_exports.Cards,
  "clock-in": modules_exports.ClockIn,
  company_attendance: modules_exports.TimeTracking,
  company_documents: modules_exports.Documents,
  company_projects: modules_exports.Projects,
  company_trainings: modules_exports.Trainings,
  compensations: modules_exports.Payroll,
  discover: modules_exports.Discover,
  documents: modules_exports.Documents,
  employee_attendance: modules_exports.ClockIn,
  employees: modules_exports.Organization,
  engagement: modules_exports.Engagement,
  engagement_insights: modules_exports.Engagement,
  my_surveys: modules_exports.Engagement,
  "finance-accounting": modules_exports.Finance,
  "finance-sales": modules_exports.Sales,
  "finance-spending": modules_exports.Spending,
  "finance-treasury": modules_exports.Treasury,
  "finance-workspace": modules_exports.Reports,
  goals: modules_exports.Goals,
  home: modules_exports.Home,
  hub: modules_exports.Hub,
  kudos: modules_exports.Kudos,
  my_benefits: modules_exports.Benefits,
  my_documents: modules_exports.MyDocuments,
  my_projects: modules_exports.Projects,
  my_spending: modules_exports.Spending,
  my_trainings: modules_exports.Trainings,
  "new-trainings": modules_exports.Trainings,
  notifications: modules_exports.Inbox,
  inbox: modules_exports.Inbox,
  overviews: modules_exports.Overviews,
  payroll_bundle: modules_exports.Payroll,
  performance_v2: modules_exports.Performance,
  performance: modules_exports.Performance,
  playground: modules_exports.Home,
  processes: modules_exports.Workflows,
  profile: modules_exports.Profile,
  project_management: modules_exports.Projects,
  reports: modules_exports.Reports,
  settings: modules_exports.Settings,
  personal_settings: modules_exports.Settings,
  shift_management: modules_exports.Shifts,
  shifts: modules_exports.Shifts,
  social: modules_exports.Social,
  software: modules_exports.Software,
  space_control: modules_exports.Spaces,
  talent_analytics: modules_exports.Performance,
  tasks: modules_exports.Tasks,
  "time-tracking": modules_exports.TimeTracking,
  timeoff: modules_exports.TimeOff,
  workflows: modules_exports.Workflows
};
var moduleAvatarVariants = cva.cva({
  base: "relative flex shrink-0 items-center justify-center",
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-10 w-10"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var iconContainerVariants = cva.cva({
  base: "absolute inset-0 items-center justify-center z-10",
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-10 w-10"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var iconSizeVariants = cva.cva({
  base: "relative text-f1-foreground-inverse drop-shadow",
  variants: {
    size: {
      sm: "h-[14px] w-[14px]",
      md: "h-[18px] w-[18px]",
      lg: "h-6 w-6",
      xl: "h-8 w-8"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var squirclePath = "M50,0 C43,0 36,0 30,1 23,2 17,5 12,9 5,16 1,25 0,36 0,43 0,57 0,64 1,75 5,84 12,91 17,95 23,98 30,99 36,100 43,100 50,100 57,100 64,100 70,99 77,98 83,95 88,91 95,84 99,75 100,64 100,57 100,43 100,36 99,25 95,16 88,9 83,5 77,2 70,1 64,0 57,0 50,0";
var ModuleAvatar = ({ size = "md", ...props }) => {
  const IconComponent = "icon" in props ? applyIconInterop(props.icon) : applyIconInterop(modules[props.module]);
  const code = Math.random().toString(36).substring(2, 15);
  const gradientId = `gradient-${code}`;
  return /* @__PURE__ */ jsxRuntime.jsxs(reactNative.View, { className: moduleAvatarVariants({ size }), accessibilityRole: "image", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      Svg__default.default,
      {
        viewBox: "0 0 100 100",
        className: "absolute h-full w-full",
        preserveAspectRatio: "none",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Defs, { children: /* @__PURE__ */ jsxRuntime.jsxs(Svg.LinearGradient, { id: gradientId, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ jsxRuntime.jsx(Svg.Stop, { offset: "0%", stopColor: "#FF355E" }),
            /* @__PURE__ */ jsxRuntime.jsx(Svg.Stop, { offset: "44%", stopColor: "#FF355E" }),
            /* @__PURE__ */ jsxRuntime.jsx(Svg.Stop, { offset: "100%", stopColor: "#D62D4F" })
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            Svg.Path,
            {
              d: squirclePath,
              fill: `url(#${gradientId})`,
              stroke: "white",
              strokeWidth: 10,
              transform: "scale(0.95) translate(2.5 2.5)"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: iconContainerVariants({ size }), children: /* @__PURE__ */ jsxRuntime.jsx(IconComponent, { className: iconSizeVariants({ size }) }) })
  ] });
};
ModuleAvatar.displayName = "IconAvatar";
var getAvatarSize = (size) => {
  const sizeMap = {
    xlarge: "lg",
    large: "md",
    small: "sm"
  };
  return size && sizeMap[size] ? sizeMap[size] : sizeMap.small;
};
var getBadgeSize = (size) => {
  const sizeMap = {
    xlarge: "lg",
    large: "md",
    small: "sm"
  };
  return size && sizeMap[size] ? sizeMap[size] : sizeMap.small;
};
var BaseAvatar = ({
  src,
  name,
  size,
  type = "base",
  color: color2 = "random",
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  badge
}) => {
  const initials = getInitials(name, size);
  const avatarColor = color2 === "random" ? getAvatarColor(Array.isArray(name) ? name.join("") : name) : color2;
  const hasAria = Boolean(ariaLabel || ariaLabelledby);
  const badgeSize = getBadgeSize(size);
  const moduleAvatarSize = getAvatarSize(size);
  const badgeContent = React3.useMemo(
    () => badge ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      badge.type === "module" && /* @__PURE__ */ jsxRuntime.jsx(ModuleAvatar, { module: badge.module, size: moduleAvatarSize }),
      badge.type !== "module" && /* @__PURE__ */ jsxRuntime.jsx(Badge, { type: badge.type, icon: badge.icon, size: badgeSize })
    ] }) : null,
    [badge, badgeSize, moduleAvatarSize]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(
    reactNative.View,
    {
      className: `inline-flex ${badge && badge.type === "module" ? "p-[3px]" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "h-fit w-fit", children: /* @__PURE__ */ jsxRuntime.jsx(
          Avatar,
          {
            size,
            type,
            color: avatarColor,
            role: "img",
            "aria-hidden": !hasAria,
            "aria-label": ariaLabel,
            "aria-labelledby": ariaLabelledby,
            "data-a11y-color-contrast-ignore": true,
            className: src ? "dark:bg-f1-background-inverse-secondary bg-f1-background" : "",
            children: src ? /* @__PURE__ */ jsxRuntime.jsx(AvatarImage, { src, alt: initials }) : /* @__PURE__ */ jsxRuntime.jsx(AvatarFallback, { size, "data-a11y-color-contrast-ignore": true, children: initials })
          }
        ) }),
        badge && /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "absolute -bottom-0.5 -right-0.5", children: badgeContent })
      ]
    }
  );
};
BaseAvatar.displayName = "BaseAvatar";
var CompanyAvatar = ({
  name,
  src,
  size,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  badge
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    BaseAvatar,
    {
      type: "base",
      name,
      src,
      size,
      color: "viridian",
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      badge
    }
  );
};
CompanyAvatar.displayName = "CompanyAvatar";
var PersonAvatar = ({
  firstName,
  lastName,
  src,
  size,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  badge
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    BaseAvatar,
    {
      type: "rounded",
      name: [firstName, lastName],
      src,
      size,
      color: "random",
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      badge
    }
  );
};
PersonAvatar.displayName = "PersonAvatar";
var TeamAvatar = ({
  name,
  src,
  size,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  badge
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    BaseAvatar,
    {
      type: "base",
      name,
      src,
      size,
      color: "random",
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      badge
    }
  );
};
TeamAvatar.displayName = "TeamAvatar";
var Avatar2 = ({
  avatar,
  size = "xsmall"
}) => {
  switch (avatar.type) {
    case "person":
      return /* @__PURE__ */ jsxRuntime.jsx(
        PersonAvatar,
        {
          firstName: avatar.firstName,
          lastName: avatar.lastName,
          src: avatar.src,
          size,
          "aria-label": avatar["aria-label"],
          "aria-labelledby": avatar["aria-labelledby"]
        }
      );
    case "team":
      return /* @__PURE__ */ jsxRuntime.jsx(
        TeamAvatar,
        {
          name: avatar.name,
          src: avatar.src,
          size,
          "aria-label": avatar["aria-label"],
          "aria-labelledby": avatar["aria-labelledby"]
        }
      );
    case "company":
      return /* @__PURE__ */ jsxRuntime.jsx(
        CompanyAvatar,
        {
          name: avatar.name,
          src: avatar.src,
          size,
          "aria-label": avatar["aria-label"],
          "aria-labelledby": avatar["aria-labelledby"]
        }
      );
  }
};
function getAbbreviateMonth(date) {
  return dateFns.format(date, "LLL");
}
function getDayOfMonth(date) {
  return date.getDate();
}
var DateAvatar = ({ date }) => {
  const dateDay = getDayOfMonth(date);
  const month = getAbbreviateMonth(date);
  return /* @__PURE__ */ jsxRuntime.jsxs(reactNative.View, { className: "flex h-10 w-10 flex-col items-center justify-center rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary", children: [
    /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: "pt-0.5 text-xs font-semibold uppercase leading-3 text-f1-special-highlight dark:text-f1-foreground-inverse-secondary", children: month }),
    /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: "flex items-center justify-center text-lg font-medium leading-tight text-f1-foreground", children: dateDay })
  ] });
};
function EmojiImage({ emoji, size, className }) {
  const emojiEntity = parseEmoji(emoji);
  const [error, setError] = React3.useState(false);
  return emojiEntity && !error ? /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: size?.icon, children: /* @__PURE__ */ jsxRuntime.jsx(
    Svg.SvgUri,
    {
      onError: () => setError(true),
      width: "100%",
      height: "100%",
      uri: emojiEntity.url
    }
  ) }) : /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: cn(size?.text, className), children: emoji }, emoji);
}
var parseEmoji = (emoji) => {
  const [entity] = twemojiParser.parse(emoji, {
    buildUrl: (codePoints) => `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${codePoints}.svg`
  });
  return entity || null;
};
var sizes2 = {
  sm: "w-6 h-6 rounded-sm",
  md: "w-9 h-9 rounded-md",
  lg: "w-10 h-10 rounded-lg"
};
var emojiSize = {
  sm: { icon: "w-4 h-4", text: "text-xs" },
  md: { icon: "w-5 h-5", text: "text-sm" },
  lg: { icon: "w-6 h-6", text: "text-md" }
};
var EmojiAvatar = ({ emoji, size = "md", className }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactNative.View,
    {
      className: cn(
        className,
        sizes2[size],
        "flex aspect-square items-center justify-center border border-solid border-f1-border-secondary bg-f1-background dark:bg-f1-background-inverse-secondary"
      ),
      children: /* @__PURE__ */ jsxRuntime.jsx(EmojiImage, { emoji, size: emojiSize[size] })
    }
  );
};
EmojiAvatar.displayName = "EmojiAvatar";

// src/components/Avatars/FileAvatar/utils.ts
var FILE_TYPE_MAP = {
  pdf: { type: "PDF", color: "text-f1-foreground-accent" },
  image: { type: "IMG", color: "text-f1-foreground-info" },
  doc: { type: "DOC", color: "text-f1-foreground-info" },
  excel: { type: "XLS", color: "text-f1-foreground-positive" },
  ppt: { type: "PPT", color: "text-f1-foreground-warning" },
  txt: { type: "TXT", color: "text-f1-foreground-secondary" },
  video: { type: "VID", color: "text-f1-foreground-info" },
  audio: { type: "AUD", color: "text-f1-foreground-accent" },
  archive: { type: "ZIP", color: "text-f1-foreground-warning" },
  csv: { type: "CSV", color: "text-f1-foreground-positive" },
  html: { type: "HTML", color: "text-f1-foreground-accent" },
  markdown: { type: "MD", color: "text-f1-foreground-secondary" },
  default: { type: "FILE", color: "text-f1-foreground" }
};
var MIME_MATCH_MAP = {
  pdf: "pdf",
  image: "image",
  word: "doc",
  excel: "excel",
  powerpoint: "ppt",
  text: "txt",
  video: "video",
  audio: "audio",
  archive: "archive",
  csv: "csv",
  html: "html",
  markdown: "markdown",
  zip: "archive",
  rar: "archive",
  tar: "archive",
  gz: "archive",
  "7z": "archive"
};
var EXTENSION_MAP = {
  pdf: "pdf",
  jpg: "image",
  jpeg: "image",
  png: "image",
  gif: "image",
  svg: "image",
  doc: "doc",
  docx: "doc",
  xls: "excel",
  xlsx: "excel",
  csv: "csv",
  ppt: "ppt",
  pptx: "ppt",
  txt: "txt",
  mp4: "video",
  mov: "video",
  mkv: "video",
  avi: "video",
  webm: "video",
  mp3: "audio",
  wav: "audio",
  flac: "audio",
  ogg: "audio",
  zip: "archive",
  rar: "archive",
  tar: "archive",
  gz: "archive",
  "7z": "archive",
  html: "html",
  htm: "html",
  md: "markdown",
  markdown: "markdown"
};
var getFileTypeInfo = (file) => {
  const mimeType = file.type?.toLowerCase() ?? "";
  const matchedMimeKey = Object.keys(MIME_MATCH_MAP).find(
    (key) => mimeType.includes(key)
  );
  if (matchedMimeKey) {
    const fileTypeKey = MIME_MATCH_MAP[matchedMimeKey];
    if (fileTypeKey && FILE_TYPE_MAP[fileTypeKey]) {
      return FILE_TYPE_MAP[fileTypeKey];
    }
  }
  const extension = file.name.toLowerCase().split(".").pop();
  if (extension && EXTENSION_MAP[extension]) {
    const fileTypeKey = EXTENSION_MAP[extension];
    if (fileTypeKey && FILE_TYPE_MAP[fileTypeKey]) {
      return FILE_TYPE_MAP[fileTypeKey];
    }
  }
  return FILE_TYPE_MAP.default;
};
var textSizes2 = {
  xsmall: "text-xs",
  small: "text-xs",
  medium: "text-sm",
  large: "text-md",
  xlarge: "text-2xl"
};
var getAvatarSize2 = (size) => {
  const sizeMap = {
    xlarge: "lg",
    large: "md",
    small: "sm"
  };
  return size && sizeMap[size] ? sizeMap[size] : sizeMap.small;
};
var getBadgeSize2 = (size) => {
  const sizeMap = {
    xlarge: "lg",
    large: "md",
    small: "sm"
  };
  return size && sizeMap[size] ? sizeMap[size] : sizeMap.small;
};
var FileAvatar = ({
  file,
  className,
  size = "medium",
  badge,
  ...props
}) => {
  const { type: fileType, color: fileColor } = getFileTypeInfo(file);
  const initials = getInitials(fileType, size, true);
  const badgeSize = getBadgeSize2(size);
  const moduleAvatarSize = getAvatarSize2(size);
  const badgeContent = React3.useMemo(
    () => badge ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      badge.type === "module" && /* @__PURE__ */ jsxRuntime.jsx(ModuleAvatar, { module: badge.module, size: moduleAvatarSize }),
      badge.type !== "module" && /* @__PURE__ */ jsxRuntime.jsx(Badge, { type: badge.type, icon: badge.icon, size: badgeSize })
    ] }) : null,
    [badge, badgeSize, moduleAvatarSize]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(
    reactNative.View,
    {
      className: `inline-flex ${badge && badge.type === "module" ? "p-[3px]" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "h-fit w-fit", children: /* @__PURE__ */ jsxRuntime.jsx(
          Avatar,
          {
            size,
            className: cn(
              "border border-solid border-f1-border-secondary bg-f1-background",
              className
            ),
            ...props,
            children: /* @__PURE__ */ jsxRuntime.jsx(
              reactNative.Text,
              {
                className: cn(
                  "font-semibold text-f1-foreground-inverse/90",
                  textSizes2[size],
                  fileColor
                ),
                children: initials
              }
            )
          }
        ) }),
        badge && /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "absolute -bottom-0.5 -right-0.5", children: badgeContent })
      ]
    }
  );
};
FileAvatar.displayName = "FileAvatar";
var sizes3 = {
  sm: "h-6 w-6 rounded-sm",
  md: "h-9 w-9 rounded-md",
  lg: "h-10 w-10 rounded-lg"
};
var IconAvatar = ({ icon, size = "md", className }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactNative.View,
    {
      className: cn(
        "flex aspect-square items-center justify-center border border-solid border-f1-border-secondary",
        sizes3[size],
        className
      ),
      children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon, size, className: "text-f1-foreground-secondary" })
    }
  );
};
IconAvatar.displayName = "IconAvatar";
var ActivityItem = ({
  id,
  date,
  title,
  description,
  icon,
  category,
  isUnread = false,
  onPress
}) => {
  const [isPressed, setIsPressed] = React3.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    reactNative.Pressable,
    {
      className: `flex w-full flex-row gap-2 rounded-lg p-2 pr-3 ${isPressed ? "bg-f1-background-hover" : ""}`,
      onPressIn: () => setIsPressed(false),
      onPressOut: () => setIsPressed(false),
      onPress: () => onPress(id),
      accessibilityLabel: "activity-item",
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { accessibilityLabel: "activity-icon-container", children: /* @__PURE__ */ jsxRuntime.jsx(IconAvatar, { icon, size: "md" }) }),
        /* @__PURE__ */ jsxRuntime.jsxs(reactNative.View, { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: "line-clamp-1 text-lg font-medium text-f1-foreground", children: title }),
          /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: "line-clamp-2 text-lg text-f1-foreground-secondary", children: description }),
          /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "mt-1.5 flex flex-row", children: /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: "text-md text-f1-foreground-secondary", children: `${category} \xB7 ${date}` }) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "ml-1", children: isUnread && /* @__PURE__ */ jsxRuntime.jsx(
          reactNative.View,
          {
            accessibilityLabel: "unread-indicator",
            className: "mt-1.5 h-2 w-2 rounded-full bg-f1-icon-accent"
          }
        ) })
      ]
    }
  );
};
var ActivityItemSkeleton = () => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    reactNative.View,
    {
      accessibilityLabel: "activity-skeleton",
      className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "h-10 w-10 rounded-lg bg-f1-background-secondary" }),
        /* @__PURE__ */ jsxRuntime.jsxs(reactNative.View, { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "mb-1 h-5 w-3/4 rounded-sm bg-f1-background-secondary" }),
          /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "mb-1 h-5 w-full rounded-sm bg-f1-background-secondary" }),
          /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "mb-1.5 h-5 w-2/3 rounded-sm bg-f1-background-secondary" }),
          /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "h-5 w-1/2 rounded-sm bg-f1-background-secondary" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "ml-1 w-2" })
      ]
    }
  );
};
var variants = [
  "default",
  "outline",
  "critical",
  "neutral",
  "ghost",
  "promote"
];
var sizes4 = ["sm", "md", "lg"];
var buttonVariants = cva.cva({
  base: "flex-row items-center justify-center rounded border-none grow-0",
  variants: {
    variant: {
      default: "bg-f1-background-accent-bold",
      outline: "bg-f1-background-inverse-secondary border border-f1-border",
      neutral: "bg-f1-background-secondary",
      critical: "bg-f1-background-secondary border border-f1-border",
      ghost: "bg-transparent",
      promote: "bg-f1-background-promote border border-f1-border-promote"
    },
    size: {
      sm: "h-6 rounded-sm",
      md: "h-8 rounded",
      lg: "h-10 rounded-md"
    },
    disabled: {
      true: "opacity-50",
      false: ""
    },
    round: {
      true: "aspect-square p-0",
      false: "gap-1 px-2 sm:px-3 lg:px-4"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    disabled: false,
    round: false
  }
});
var pressedVariants = cva.cva({
  base: "",
  variants: {
    variant: {
      default: "bg-f1-background-accent-bold-hover",
      outline: "bg-f1-background-tertiary border-opacity-70",
      neutral: "bg-f1-background-secondary-hover",
      critical: "bg-f1-background-critical-bold border-transparent",
      ghost: "bg-f1-background-secondary-hover",
      promote: "bg-f1-background-promote-hover"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var getIconColor = (variant, isPressed) => {
  switch (variant) {
    case "default":
      return "text-f1-icon-inverse";
    case "critical":
      return isPressed ? "text-f1-icon-inverse" : "text-f1-icon-critical-bold";
    default:
      return "text-f1-icon";
  }
};
var getIconOnlyColor = (variant, isPressed) => {
  switch (variant) {
    case "critical":
      return isPressed ? "text-f1-icon-inverse" : "text-f1-icon-critical-bold";
    case "default":
      return "text-f1-icon-inverse";
    case "outline":
    case "neutral":
    case "ghost":
    case "promote":
    default:
      return "text-f1-icon-bold";
  }
};
var getTextColorClass = (variant, isPressed) => {
  if (isPressed && variant === "critical") {
    return "text-f1-foreground-inverse";
  }
  switch (variant) {
    case "default":
      return "text-f1-foreground-inverse";
    case "critical":
      return "text-f1-foreground-critical";
    default:
      return "text-f1-foreground";
  }
};
var Button = React3.forwardRef(function Button2({
  label,
  onPress,
  disabled = false,
  loading = false,
  icon,
  emoji,
  hideLabel = false,
  variant = "default",
  size = "md",
  round = false,
  className,
  accessibilityHint,
  showBadge = false,
  fullWidth = false
}, ref) {
  const [isLoading, setIsLoading] = React3.useState(false);
  const [isPressed, setIsPressed] = React3.useState(false);
  const handlePress = async () => {
    if (!onPress || disabled || loading || isLoading) return;
    const result = onPress();
    if (result instanceof Promise) {
      setIsLoading(true);
      try {
        await result;
      } finally {
        setIsLoading(false);
      }
    }
  };
  const isDisabled = disabled || loading || isLoading;
  const accessibilityLabel = `${label}${isDisabled ? ", disabled" : ""}${loading || isLoading ? ", loading" : ""}`;
  const shouldShowPressed = isPressed && !isDisabled;
  return /* @__PURE__ */ jsxRuntime.jsxs(reactNative.View, { className: `flex ${fullWidth ? "flex-1" : "item-start"}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      reactNative.Pressable,
      {
        ref,
        disabled: isDisabled,
        onPressIn: () => setIsPressed(true),
        onPressOut: () => setIsPressed(false),
        onPress: handlePress,
        className: cn(
          buttonVariants({
            variant,
            size,
            disabled: isDisabled,
            round: hideLabel && round
          }),
          shouldShowPressed && pressedVariants({ variant }),
          className
        ),
        accessibilityLabel,
        accessibilityRole: "button",
        accessibilityState: {
          disabled: isDisabled,
          busy: loading || isLoading
        },
        accessibilityHint,
        children: [
          icon && /* @__PURE__ */ jsxRuntime.jsx(
            Icon,
            {
              icon,
              size: size === "sm" ? "sm" : "md",
              className: cn(
                hideLabel && round ? void 0 : "-ml-0.5",
                hideLabel && round ? getIconOnlyColor(variant, shouldShowPressed) : getIconColor(variant, shouldShowPressed)
              )
            }
          ),
          emoji && /* @__PURE__ */ jsxRuntime.jsx(
            reactNative.Text,
            {
              className: cn(
                "text-base font-medium",
                getTextColorClass(variant, shouldShowPressed)
              ),
              children: emoji
            }
          ),
          !hideLabel && /* @__PURE__ */ jsxRuntime.jsx(
            reactNative.Text,
            {
              className: cn(
                "text-base font-medium",
                getTextColorClass(variant, shouldShowPressed)
              ),
              children: label
            }
          )
        ]
      }
    ),
    showBadge && variant === "outline" && /* @__PURE__ */ jsxRuntime.jsx(
      reactNative.View,
      {
        accessibilityLabel: "Notification Badge",
        className: "absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-f1-icon-accent"
      }
    )
  ] });
});
var counterContainerVariants = cva.cva({
  base: "flex items-center justify-center rounded-xs grow-0 px-0.5",
  variants: {
    size: {
      md: "min-w-5 h-5",
      sm: "min-w-4 h-4"
    },
    type: {
      default: "bg-f1-background-secondary border border-f1-border",
      selected: "bg-f1-background-selected-bold outline-f1-border-selected",
      bold: "bg-f1-background-accent-bold"
    }
  },
  defaultVariants: {
    size: "md",
    type: "default"
  }
});
var counterTextVariants = cva.cva({
  base: "text-center text-sm font-medium tabular-nums whitespace-nowrap",
  variants: {
    size: {
      md: "",
      sm: "leading-none py-0.5"
    },
    type: {
      default: "text-f1-foreground",
      selected: "text-f1-foreground-inverse",
      bold: "text-f1-foreground-inverse"
    }
  },
  defaultVariants: {
    type: "default"
  }
});
function Counter({ size, type, value, maxValue }) {
  const displayValue = maxValue && value > maxValue ? `+${maxValue}` : value;
  return /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "flex items-start", children: /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: cn(counterContainerVariants({ size, type })), children: /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: cn(counterTextVariants({ type, size })), children: displayValue }) }) });
}
var ExampleComponent = ({
  text = "Hello World"
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "rounded-lg bg-f1-background p-4", children: /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: "text-base font-medium text-f1-foreground", children: text }) });
};
var NotificationsAction = ({ label, onPress, showBadge }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Button,
    {
      variant: "outline",
      icon: app_exports.Bell,
      label,
      hideLabel: true,
      onPress,
      showBadge,
      size: "md",
      round: true
    }
  );
};
var PageHeader = React3.memo(({ title, actions }) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(reactNative.View, { className: "flex-row items-center justify-between px-5 py-3", children: [
    /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: "text-3xl font-semibold text-f1-foreground", children: title }),
    /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "flex-row gap-2", children: actions?.map((action) => {
      switch (action.type) {
        case "notifications":
          return /* @__PURE__ */ React3.createElement(NotificationsAction, { ...action, key: action.label });
        default:
          return null;
      }
    }) })
  ] });
});
PageHeader.displayName = "PageHeader";
var chipContainerVariants = cva.cva({
  base: "flex items-center gap-1 rounded-full border border-solid border-f1-border px-2 py-0.5 grow-0",
  variants: {
    variant: {
      default: "",
      selected: "border-f1-border-selected bg-f1-background-selected-secondary"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var chipTextVariants = cva.cva({
  base: "font-medium",
  variants: {
    variant: {
      default: "text-f1-foreground",
      selected: "text-f1-foreground-selected"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var OneChip = ({
  label,
  variant,
  onClick,
  onClose,
  icon
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "flex items-start", children: /* @__PURE__ */ jsxRuntime.jsx(
    reactNative.Pressable,
    {
      className: cn(
        chipContainerVariants({ variant }),
        onClose && "pr-1.5",
        icon && "pl-1.5"
      ),
      onPress: onClick,
      tabIndex: onClick ? 0 : void 0,
      "aria-label": "Action",
      children: /* @__PURE__ */ jsxRuntime.jsxs(reactNative.View, { className: "flex flex-row items-center gap-0.5", children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx(
          Icon,
          {
            icon,
            size: "sm",
            className: chipTextVariants({ variant })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: chipTextVariants({ variant }), children: label }),
        onClose && /* @__PURE__ */ jsxRuntime.jsx(
          reactNative.Pressable,
          {
            onPress: (e) => {
              e.stopPropagation();
              onClose();
            },
            className: "-m-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full [&_svg]:text-f1-icon-secondary",
            tabIndex: 0,
            "aria-label": "Close",
            children: /* @__PURE__ */ jsxRuntime.jsx(
              Icon,
              {
                icon: CrossedCircle_default,
                className: chipTextVariants({ variant }),
                size: "sm"
              }
            )
          }
        )
      ] })
    }
  ) });
};
var OnePreset = ({
  label,
  number,
  onClick,
  selected
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "flex items-start", children: /* @__PURE__ */ jsxRuntime.jsxs(
    reactNative.Pressable,
    {
      onPress: onClick,
      className: cn(
        "flex grow-0 flex-row items-center gap-2 rounded border border-f1-border px-2.5 py-1.5 font-medium text-f1-foreground",
        number !== void 0 && number !== null && "pr-1.5",
        selected && "border-f1-border-selected bg-f1-background-selected-secondary text-f1-foreground-selected"
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: "whitespace-nowrap text-f1-foreground", children: label }),
        number !== void 0 && number !== null && /* @__PURE__ */ jsxRuntime.jsx(Counter, { value: number, type: selected ? "selected" : "default" })
      ]
    }
  ) });
};
var BaseTag = ({
  left,
  text,
  right,
  additionalAccesibleText,
  onClick,
  classNameContainer,
  classNameText
}) => /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "flex items-start", children: /* @__PURE__ */ jsxRuntime.jsxs(
  reactNative.Pressable,
  {
    className: cn(
      "flex flex-row items-center justify-start gap-0.5 rounded-full py-0.5 pr-2",
      onClick && "cursor-pointer hover:bg-f1-background-hover",
      !text && "aspect-square w-6 items-center justify-center p-1",
      !left ? "pl-2" : "pl-1",
      classNameContainer
    ),
    onPress: onClick,
    children: [
      left,
      !!text && /* @__PURE__ */ jsxRuntime.jsx(
        reactNative.Text,
        {
          className: cn(
            "line-clamp-1 text-base font-medium text-f1-foreground",
            classNameText
          ),
          children: text
        }
      ),
      additionalAccesibleText && /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: "sr-only text-base font-medium text-f1-foreground", children: additionalAccesibleText }),
      right
    ]
  }
) });
BaseTag.displayName = "BaseTag";
var textFormatEnforcer = (text, rules) => {
  if (rules.disallowEmpty && text.length === 0) {
    throw Error("You need to provide some text that is not empty");
  }
  if (rules.maxLength !== void 0 && text.length > rules.maxLength) {
    throw Error(
      `"${text}" should have no more than ${rules.maxLength} characters`
    );
  }
  if (rules.minLength !== void 0 && text.length < rules.minLength) {
    throw Error(`"${text}" should have at least ${rules.minLength} characters`);
  }
};
var useTextFormatEnforcer = (text, rules) => {
  React3.useEffect(() => {
    if (text !== void 0 && rules) {
      textFormatEnforcer(text, rules);
    }
  }, [text, rules]);
};
var iconMap = {
  info: InfoCircle_default,
  warning: Warning_default,
  critical: AlertCircle_default
};
var AlertTag = ({ text, level }) => {
  useTextFormatEnforcer(text, { disallowEmpty: true });
  return /* @__PURE__ */ jsxRuntime.jsx(
    BaseTag,
    {
      classNameText: cn(
        {
          info: "text-f1-foreground-info",
          warning: "text-f1-foreground-warning",
          critical: "text-f1-foreground-critical"
        }[level]
      ),
      classNameContainer: cn(
        "pl-0.5",
        {
          info: "bg-f1-background-info text-f1-foreground-info",
          warning: "bg-f1-background-warning text-f1-foreground-warning",
          critical: "bg-f1-background-critical text-f1-foreground-critical"
        }[level]
      ),
      left: /* @__PURE__ */ jsxRuntime.jsx(
        Icon,
        {
          icon: iconMap[level],
          className: cn(
            {
              info: "text-f1-foreground-info",
              warning: "text-f1-foreground-warning",
              critical: "text-f1-foreground-critical"
            }[level]
          ),
          size: "md",
          "aria-hidden": true
        }
      ),
      text
    }
  );
};
AlertTag.displayName = "AlertTag";
var dotTagColors = Object.keys(f0Core.baseColors);
var DotTag = ({ text, ...props }) => {
  useTextFormatEnforcer(text, { disallowEmpty: true });
  const backgroundColor = "color" in props && props.color ? `hsl(${f0Core.baseColors[props.color][50]})` : "customColor" in props && props.customColor;
  if (!backgroundColor) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    BaseTag,
    {
      classNameContainer: "border border-solid border-f1-border-secondary",
      left: /* @__PURE__ */ jsxRuntime.jsx(
        reactNative.View,
        {
          className: "m-1 aspect-square w-2 rounded-full",
          style: {
            backgroundColor
          },
          "aria-hidden": true
        }
      ),
      text
    }
  );
};
DotTag.displayName = "DotTag";
var RawTag = ({
  text,
  additionalAccesibleText,
  icon,
  noBorder,
  className
}) => {
  useTextFormatEnforcer(text, { disallowEmpty: true });
  return /* @__PURE__ */ jsxRuntime.jsx(
    BaseTag,
    {
      classNameContainer: cn(
        !noBorder && "border border-solid border-f1-border-secondary",
        className
      ),
      classNameText: "text-f1-foreground",
      left: icon ? /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon, size: "sm", className: "text-f1-icon", "aria-hidden": true }) : null,
      text,
      additionalAccesibleText
    }
  );
};
RawTag.displayName = "RawTag";
var COPIED_SHOWN_MS = 750;
var CopyAction = ({ text, children }) => {
  const [copied, setCopied] = React3.useState(false);
  React3.useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), COPIED_SHOWN_MS);
      return () => clearTimeout(timer);
    }
  }, [copied]);
  const copyHandler = async () => {
    try {
      if (text) {
        await Clipboard__namespace.setStringAsync(text);
        setCopied(true);
      }
    } catch (error) {
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    reactNative.Pressable,
    {
      "aria-label": copied ? "Copied!" : `Copy ${text}`,
      className: cn(
        "group flex flex-row justify-between gap-1.5 rounded p-1.5",
        "transition-colors duration-300 active:bg-f1-background-secondary-hover",
        copied ? "bg-f1-background-positive" : void 0
      ),
      onPress: copyHandler,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "flex flex-row items-center gap-1.5", children }),
        /* @__PURE__ */ jsxRuntime.jsxs(reactNative.View, { className: "flex", children: [
          !copied && /* @__PURE__ */ jsxRuntime.jsx(
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
          copied && /* @__PURE__ */ jsxRuntime.jsx(
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
var GenericAction = React3.memo(
  ({ children, className, ...props }) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      reactNative.Pressable,
      {
        onPress: props.handlePress,
        ...props,
        className: cn(
          "text-inherit group flex items-center justify-between gap-1.5 rounded p-1.5 text-f1-foreground",
          "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
          className
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "flex flex-row items-center gap-1.5", children }),
          /* @__PURE__ */ jsxRuntime.jsx(
            Icon,
            {
              "aria-hidden": true,
              icon: ChevronRight_default,
              size: "md",
              className: "text-f1-foreground"
            }
          )
        ]
      }
    );
  }
);
GenericAction.displayName = "GenericAction";
var ItemContainer = (props) => {
  const {
    text,
    leftIcon: LeftIcon,
    className,
    action = { type: "noop" }
  } = props;
  return /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "flex rounded font-medium text-f1-foreground *:flex-1", children: /* @__PURE__ */ jsxRuntime.jsxs(
    Action,
    {
      action,
      className: cn("flex flex-row items-center gap-1.5 p-1.5", className),
      children: [
        LeftIcon && (typeof LeftIcon === "function" ? LeftIcon({}) : /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: LeftIcon, size: "md" })),
        /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: "line-clamp-5 text-left text-f1-foreground", children: text })
      ]
    }
  ) });
};
var Action = ({
  children,
  action,
  ...props
}) => {
  const type = action.type;
  switch (type) {
    case "copy":
      return /* @__PURE__ */ jsxRuntime.jsx(CopyAction, { ...action, ...props, children });
    case "generic":
      return /* @__PURE__ */ jsxRuntime.jsx(GenericAction, { ...action, ...props, children });
    case "noop":
      return /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { ...props, children });
    default: {
      const _exhaustiveCheck = type;
      return _exhaustiveCheck;
    }
  }
};
var _DataList = ({
  children,
  label,
  isHorizontalItem = false,
  tableView = false
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    reactNative.View,
    {
      className: cn(
        isHorizontalItem ? "flex min-h-12 flex-shrink flex-row" : "min-w-32 max-w-72",
        tableView ? "px-[8px] pb-[10px] pt-[14px]" : ""
      ),
      children: [
        !!label && /* @__PURE__ */ jsxRuntime.jsx(
          reactNative.Text,
          {
            className: cn(
              "px-1.5 text-f1-foreground-secondary",
              isHorizontalItem ? "mt-1.5 w-36 shrink-0" : ""
            ),
            children: label
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "flex flex-shrink justify-center gap-0.5", children })
      ]
    }
  );
};
var Item = ({ text, icon, action }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ItemContainer,
    {
      text,
      leftIcon: icon,
      action: getInternalAction(action, text)
    }
  );
};
var PersonItem = ({
  action,
  avatarUrl,
  firstName,
  lastName
}) => {
  const fullName = `${firstName} ${lastName}`;
  return /* @__PURE__ */ jsxRuntime.jsx(
    ItemContainer,
    {
      leftIcon: () => /* @__PURE__ */ jsxRuntime.jsx(
        PersonAvatar,
        {
          size: "xsmall",
          src: avatarUrl,
          firstName,
          lastName
        }
      ),
      text: fullName,
      action: getInternalAction(action, fullName)
    }
  );
};
var CompanyItem = ({ avatarUrl, name, action }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ItemContainer,
    {
      leftIcon: () => /* @__PURE__ */ jsxRuntime.jsx(CompanyAvatar, { name, size: "xsmall", src: avatarUrl }),
      text: name,
      action: getInternalAction(action, name)
    }
  );
};
var TeamItem = ({ action, name }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ItemContainer,
    {
      leftIcon: () => /* @__PURE__ */ jsxRuntime.jsx(TeamAvatar, { name, size: "xsmall" }),
      text: name,
      action: getInternalAction(action, name)
    }
  );
};
var DotTagItem = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "flex items-start pt-1", children: /* @__PURE__ */ jsxRuntime.jsx(DotTag, { ...props }) });
};
var getInternalAction = (action, defaultCopyText) => {
  if (action && action.type === "copy") {
    return { type: "copy", text: action.text ?? defaultCopyText };
  }
  return action;
};
var DataList = Object.assign(_DataList, {
  Item,
  CompanyItem,
  PersonItem,
  TeamItem,
  DotTagItem
});
var ItemContent = ({ content }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  content.type === "person" && /* @__PURE__ */ jsxRuntime.jsx(DataList.PersonItem, { ...content }),
  content.type === "item" && /* @__PURE__ */ jsxRuntime.jsx(DataList.Item, { ...content }),
  content.type === "team" && /* @__PURE__ */ jsxRuntime.jsx(DataList.TeamItem, { ...content }),
  content.type === "company" && /* @__PURE__ */ jsxRuntime.jsx(DataList.CompanyItem, { ...content }),
  content.type === "dot-tag" && /* @__PURE__ */ jsxRuntime.jsx(DataList.DotTagItem, { ...content })
] });
var DetailsItem = ({
  title,
  content,
  isHorizontalItem = false,
  tableView = false,
  spacingAtTheBottom
}) => {
  const contentArray = Array.isArray(content) ? content : [content];
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactNative.View,
    {
      className: cn(
        "flex gap-0.5",
        spacingAtTheBottom && !isHorizontalItem && "pb-3"
      ),
      children: /* @__PURE__ */ jsxRuntime.jsx(
        DataList,
        {
          label: title,
          isHorizontalItem,
          tableView,
          children: contentArray.map((c, i) => /* @__PURE__ */ jsxRuntime.jsx(ItemContent, { content: c }, i))
        }
      )
    }
  );
};
var DetailsItemsList = function DetailsItemList({
  title,
  tableView = false,
  isHorizontalItem = false,
  details
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(reactNative.View, { className: "flex gap-4", children: [
    !!title && /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: "mb-1 pl-1.5 text-sm font-semibold text-f1-foreground-secondary", children: title.toLocaleUpperCase() }),
    /* @__PURE__ */ jsxRuntime.jsx(
      reactNative.View,
      {
        className: cn(
          "flex",
          tableView ? "rounded-[16px] border border-solid border-f1-border-secondary" : "gap-3"
        ),
        children: details?.map((item, index) => /* @__PURE__ */ jsxRuntime.jsxs(React3__default.default.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            DetailsItem,
            {
              title: item.title,
              content: item.content,
              spacingAtTheBottom: item.spacingAtTheBottom,
              tableView,
              isHorizontalItem
            },
            item.title
          ),
          tableView && index !== details.length - 1 && /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "h-[1px] w-full bg-f1-border-secondary" })
        ] }, item.title))
      }
    )
  ] });
};

exports.ActivityItem = ActivityItem;
exports.ActivityItemSkeleton = ActivityItemSkeleton;
exports.AlertTag = AlertTag;
exports.AppIcons = app_exports;
exports.Avatar = Avatar2;
exports.Badge = Badge;
exports.Button = Button;
exports.CompanyAvatar = CompanyAvatar;
exports.Counter = Counter;
exports.DataList = DataList;
exports.DateAvatar = DateAvatar;
exports.DetailsItem = DetailsItem;
exports.DetailsItemsList = DetailsItemsList;
exports.DotTag = DotTag;
exports.EmojiAvatar = EmojiAvatar;
exports.ExampleComponent = ExampleComponent;
exports.FileAvatar = FileAvatar;
exports.Icon = Icon;
exports.IconAvatar = IconAvatar;
exports.ModuleAvatar = ModuleAvatar;
exports.ModuleIcons = modules_exports;
exports.OneChip = OneChip;
exports.OnePreset = OnePreset;
exports.PageHeader = PageHeader;
exports.PersonAvatar = PersonAvatar;
exports.RawTag = RawTag;
exports.TeamAvatar = TeamAvatar;
exports.applyIconInterop = applyIconInterop;
exports.chipContainerVariants = chipContainerVariants;
exports.chipTextVariants = chipTextVariants;
exports.dotTagColors = dotTagColors;
exports.sizes = sizes4;
exports.variants = variants;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map