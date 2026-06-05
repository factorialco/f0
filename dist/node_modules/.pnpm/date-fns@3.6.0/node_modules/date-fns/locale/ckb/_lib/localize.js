import { buildLocalizeFn as n } from "../../_lib/buildLocalizeFn.js";
const i = {
  narrow: ["پ", "د"],
  abbreviated: ["پ-ز", "د-ز"],
  wide: ["پێش زاین", "دوای زاین"]
}, a = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["چ1م", "چ2م", "چ3م", "چ4م"],
  wide: ["چارەگی یەکەم", "چارەگی دووەم", "چارەگی سێیەم", "چارەگی چوارەم"]
}, o = {
  narrow: [
    "ک-د",
    "ش",
    "ئا",
    "ن",
    "م",
    "ح",
    "ت",
    "ئا",
    "ئە",
    "تش-ی",
    "تش-د",
    "ک-ی"
  ],
  abbreviated: [
    "کان-دوو",
    "شوب",
    "ئاد",
    "نیس",
    "مایس",
    "حوز",
    "تەم",
    "ئاب",
    "ئەل",
    "تش-یەک",
    "تش-دوو",
    "کان-یەک"
  ],
  wide: [
    "کانوونی دووەم",
    "شوبات",
    "ئادار",
    "نیسان",
    "مایس",
    "حوزەیران",
    "تەمموز",
    "ئاب",
    "ئەیلول",
    "تشرینی یەکەم",
    "تشرینی دووەم",
    "کانوونی یەکەم"
  ]
}, t = {
  narrow: ["ی-ش", "د-ش", "س-ش", "چ-ش", "پ-ش", "هە", "ش"],
  short: ["یە-شە", "دوو-شە", "سێ-شە", "چو-شە", "پێ-شە", "هەی", "شە"],
  abbreviated: [
    "یەک-شەم",
    "دوو-شەم",
    "سێ-شەم",
    "چوار-شەم",
    "پێنج-شەم",
    "هەینی",
    "شەمە"
  ],
  wide: [
    "یەک شەمە",
    "دوو شەمە",
    "سێ شەمە",
    "چوار شەمە",
    "پێنج شەمە",
    "هەینی",
    "شەمە"
  ]
}, r = {
  narrow: {
    am: "پ",
    pm: "د",
    midnight: "ن-ش",
    noon: "ن",
    morning: "بەیانی",
    afternoon: "دوای نیوەڕۆ",
    evening: "ئێوارە",
    night: "شەو"
  },
  abbreviated: {
    am: "پ-ن",
    pm: "د-ن",
    midnight: "نیوە شەو",
    noon: "نیوەڕۆ",
    morning: "بەیانی",
    afternoon: "دوای نیوەڕۆ",
    evening: "ئێوارە",
    night: "شەو"
  },
  wide: {
    am: "پێش نیوەڕۆ",
    pm: "دوای نیوەڕۆ",
    midnight: "نیوە شەو",
    noon: "نیوەڕۆ",
    morning: "بەیانی",
    afternoon: "دوای نیوەڕۆ",
    evening: "ئێوارە",
    night: "شەو"
  }
}, d = {
  narrow: {
    am: "پ",
    pm: "د",
    midnight: "ن-ش",
    noon: "ن",
    morning: "لە بەیانیدا",
    afternoon: "لە دوای نیوەڕۆدا",
    evening: "لە ئێوارەدا",
    night: "لە شەودا"
  },
  abbreviated: {
    am: "پ-ن",
    pm: "د-ن",
    midnight: "نیوە شەو",
    noon: "نیوەڕۆ",
    morning: "لە بەیانیدا",
    afternoon: "لە دوای نیوەڕۆدا",
    evening: "لە ئێوارەدا",
    night: "لە شەودا"
  },
  wide: {
    am: "پێش نیوەڕۆ",
    pm: "دوای نیوەڕۆ",
    midnight: "نیوە شەو",
    noon: "نیوەڕۆ",
    morning: "لە بەیانیدا",
    afternoon: "لە دوای نیوەڕۆدا",
    evening: "لە ئێوارەدا",
    night: "لە شەودا"
  }
}, m = (e, g) => String(e), u = {
  ordinalNumber: m,
  era: n({
    values: i,
    defaultWidth: "wide"
  }),
  quarter: n({
    values: a,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: n({
    values: o,
    defaultWidth: "wide"
  }),
  day: n({
    values: t,
    defaultWidth: "wide"
  }),
  dayPeriod: n({
    values: r,
    defaultWidth: "wide",
    formattingValues: d,
    defaultFormattingWidth: "wide"
  })
};
export {
  u as localize
};
