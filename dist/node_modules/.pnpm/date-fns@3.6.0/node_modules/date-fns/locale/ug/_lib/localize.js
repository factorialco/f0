import { buildLocalizeFn as n } from "../../_lib/buildLocalizeFn.js";
const i = {
  narrow: ["ب", "ك"],
  abbreviated: ["ب", "ك"],
  wide: ["مىيلادىدىن بۇرۇن", "مىيلادىدىن كىيىن"]
}, a = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1", "2", "3", "4"],
  wide: ["بىرىنجى چارەك", "ئىككىنجى چارەك", "ئۈچىنجى چارەك", "تۆتىنجى چارەك"]
}, o = {
  narrow: ["ي", "ف", "م", "ا", "م", "ى", "ى", "ا", "س", "ۆ", "ن", "د"],
  abbreviated: [
    "يانۋار",
    "فېۋىرال",
    "مارت",
    "ئاپرىل",
    "ماي",
    "ئىيۇن",
    "ئىيول",
    "ئاۋغۇست",
    "سىنتەبىر",
    "ئۆكتەبىر",
    "نويابىر",
    "دىكابىر"
  ],
  wide: [
    "يانۋار",
    "فېۋىرال",
    "مارت",
    "ئاپرىل",
    "ماي",
    "ئىيۇن",
    "ئىيول",
    "ئاۋغۇست",
    "سىنتەبىر",
    "ئۆكتەبىر",
    "نويابىر",
    "دىكابىر"
  ]
}, t = {
  narrow: ["ي", "د", "س", "چ", "پ", "ج", "ش"],
  short: ["ي", "د", "س", "چ", "پ", "ج", "ش"],
  abbreviated: [
    "يەكشەنبە",
    "دۈشەنبە",
    "سەيشەنبە",
    "چارشەنبە",
    "پەيشەنبە",
    "جۈمە",
    "شەنبە"
  ],
  wide: [
    "يەكشەنبە",
    "دۈشەنبە",
    "سەيشەنبە",
    "چارشەنبە",
    "پەيشەنبە",
    "جۈمە",
    "شەنبە"
  ]
}, r = {
  narrow: {
    am: "ئە",
    pm: "چ",
    midnight: "ك",
    noon: "چ",
    morning: "ئەتىگەن",
    afternoon: "چۈشتىن كىيىن",
    evening: "ئاخشىم",
    night: "كىچە"
  },
  abbreviated: {
    am: "ئە",
    pm: "چ",
    midnight: "ك",
    noon: "چ",
    morning: "ئەتىگەن",
    afternoon: "چۈشتىن كىيىن",
    evening: "ئاخشىم",
    night: "كىچە"
  },
  wide: {
    am: "ئە",
    pm: "چ",
    midnight: "ك",
    noon: "چ",
    morning: "ئەتىگەن",
    afternoon: "چۈشتىن كىيىن",
    evening: "ئاخشىم",
    night: "كىچە"
  }
}, d = {
  narrow: {
    am: "ئە",
    pm: "چ",
    midnight: "ك",
    noon: "چ",
    morning: "ئەتىگەندە",
    afternoon: "چۈشتىن كىيىن",
    evening: "ئاخشامدا",
    night: "كىچىدە"
  },
  abbreviated: {
    am: "ئە",
    pm: "چ",
    midnight: "ك",
    noon: "چ",
    morning: "ئەتىگەندە",
    afternoon: "چۈشتىن كىيىن",
    evening: "ئاخشامدا",
    night: "كىچىدە"
  },
  wide: {
    am: "ئە",
    pm: "چ",
    midnight: "ك",
    noon: "چ",
    morning: "ئەتىگەندە",
    afternoon: "چۈشتىن كىيىن",
    evening: "ئاخشامدا",
    night: "كىچىدە"
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
