import { buildLocalizeFn as n } from "../../_lib/buildLocalizeFn.js";
const i = {
  narrow: ["ق", "ب"],
  abbreviated: ["ق.م.", "ب.م."],
  wide: ["قبل از میلاد", "بعد از میلاد"]
}, a = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["س‌م1", "س‌م2", "س‌م3", "س‌م4"],
  wide: ["سه‌ماهه 1", "سه‌ماهه 2", "سه‌ماهه 3", "سه‌ماهه 4"]
}, o = {
  narrow: ["ژ", "ف", "م", "آ", "م", "ج", "ج", "آ", "س", "ا", "ن", "د"],
  abbreviated: [
    "ژانـ",
    "فور",
    "مارس",
    "آپر",
    "می",
    "جون",
    "جولـ",
    "آگو",
    "سپتـ",
    "اکتـ",
    "نوامـ",
    "دسامـ"
  ],
  wide: [
    "ژانویه",
    "فوریه",
    "مارس",
    "آپریل",
    "می",
    "جون",
    "جولای",
    "آگوست",
    "سپتامبر",
    "اکتبر",
    "نوامبر",
    "دسامبر"
  ]
}, t = {
  narrow: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
  short: ["1ش", "2ش", "3ش", "4ش", "5ش", "ج", "ش"],
  abbreviated: [
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
    "شنبه"
  ],
  wide: ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"]
}, r = {
  narrow: {
    am: "ق",
    pm: "ب",
    midnight: "ن",
    noon: "ظ",
    morning: "ص",
    afternoon: "ب.ظ.",
    evening: "ع",
    night: "ش"
  },
  abbreviated: {
    am: "ق.ظ.",
    pm: "ب.ظ.",
    midnight: "نیمه‌شب",
    noon: "ظهر",
    morning: "صبح",
    afternoon: "بعدازظهر",
    evening: "عصر",
    night: "شب"
  },
  wide: {
    am: "قبل‌ازظهر",
    pm: "بعدازظهر",
    midnight: "نیمه‌شب",
    noon: "ظهر",
    morning: "صبح",
    afternoon: "بعدازظهر",
    evening: "عصر",
    night: "شب"
  }
}, d = {
  narrow: {
    am: "ق",
    pm: "ب",
    midnight: "ن",
    noon: "ظ",
    morning: "ص",
    afternoon: "ب.ظ.",
    evening: "ع",
    night: "ش"
  },
  abbreviated: {
    am: "ق.ظ.",
    pm: "ب.ظ.",
    midnight: "نیمه‌شب",
    noon: "ظهر",
    morning: "صبح",
    afternoon: "بعدازظهر",
    evening: "عصر",
    night: "شب"
  },
  wide: {
    am: "قبل‌ازظهر",
    pm: "بعدازظهر",
    midnight: "نیمه‌شب",
    noon: "ظهر",
    morning: "صبح",
    afternoon: "بعدازظهر",
    evening: "عصر",
    night: "شب"
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
