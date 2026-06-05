import { buildLocalizeFn as n } from "../../_lib/buildLocalizeFn.js";
const a = {
  narrow: ["ق", "ب"],
  abbreviated: ["ق.م.", "ب.م."],
  wide: ["قبل الميلاد", "بعد الميلاد"]
}, i = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["ر1", "ر2", "ر3", "ر4"],
  wide: ["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"]
}, o = {
  narrow: ["د", "ن", "أ", "س", "أ", "ج", "ج", "م", "أ", "م", "ف", "ج"],
  abbreviated: [
    "جانفي",
    "فيفري",
    "مارس",
    "أفريل",
    "ماي",
    "جوان",
    "جويلية",
    "أوت",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر"
  ],
  wide: [
    "جانفي",
    "فيفري",
    "مارس",
    "أفريل",
    "ماي",
    "جوان",
    "جويلية",
    "أوت",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر"
  ]
}, t = {
  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
  short: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
  abbreviated: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
  wide: [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت"
  ]
}, r = {
  narrow: {
    am: "ص",
    pm: "ع",
    morning: "الصباح",
    noon: "القايلة",
    afternoon: "بعد القايلة",
    evening: "العشية",
    night: "الليل",
    midnight: "نص الليل"
  },
  abbreviated: {
    am: "ص",
    pm: "ع",
    morning: "الصباح",
    noon: "القايلة",
    afternoon: "بعد القايلة",
    evening: "العشية",
    night: "الليل",
    midnight: "نص الليل"
  },
  wide: {
    am: "ص",
    pm: "ع",
    morning: "الصباح",
    noon: "القايلة",
    afternoon: "بعد القايلة",
    evening: "العشية",
    night: "الليل",
    midnight: "نص الليل"
  }
}, d = {
  narrow: {
    am: "ص",
    pm: "ع",
    morning: "في الصباح",
    noon: "في القايلة",
    afternoon: "بعد القايلة",
    evening: "في العشية",
    night: "في الليل",
    midnight: "نص الليل"
  },
  abbreviated: {
    am: "ص",
    pm: "ع",
    morning: "في الصباح",
    noon: "في القايلة",
    afternoon: "بعد القايلة",
    evening: "في العشية",
    night: "في الليل",
    midnight: "نص الليل"
  },
  wide: {
    am: "ص",
    pm: "ع",
    morning: "في الصباح",
    noon: "في القايلة",
    afternoon: "بعد القايلة",
    evening: "في العشية",
    night: "في الليل",
    midnight: "نص الليل"
  }
}, m = (e) => String(e), l = {
  ordinalNumber: m,
  era: n({
    values: a,
    defaultWidth: "wide"
  }),
  quarter: n({
    values: i,
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
  l as localize
};
