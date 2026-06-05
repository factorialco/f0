import { buildMatchFn as t } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as i } from "../../_lib/buildMatchPatternFn.js";
const e = /^(\d+)(th|st|nd|rd)?/i, r = /\d+/i, n = {
  narrow: /^(ق|ب)/i,
  abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?د\.?\s?م\.?|م\.?\s?|د\.?\s?م\.?)/i,
  wide: /^(قبل از میلاد|قبل از دوران مشترک|میلادی|دوران مشترک|بعد از میلاد)/i
}, s = {
  any: [/^قبل/i, /^بعد/i]
}, d = {
  narrow: /^[1234]/i,
  abbreviated: /^س‌م[1234]/i,
  wide: /^سه‌ماهه [1234]/i
}, o = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, h = {
  narrow: /^[جژفمآاماسند]/i,
  abbreviated: /^(جنو|ژانـ|ژانویه|فوریه|فور|مارس|آوریل|آپر|مه|می|ژوئن|جون|جول|جولـ|ژوئیه|اوت|آگو|سپتمبر|سپتامبر|اکتبر|اکتوبر|نوامبر|نوامـ|دسامبر|دسامـ|دسم)/i,
  wide: /^(ژانویه|جنوری|فبروری|فوریه|مارچ|مارس|آپریل|اپریل|ایپریل|آوریل|مه|می|ژوئن|جون|جولای|ژوئیه|آگست|اگست|آگوست|اوت|سپتمبر|سپتامبر|اکتبر|اکتوبر|نوامبر|نومبر|دسامبر|دسمبر)/i
}, c = {
  narrow: [
    /^(ژ|ج)/i,
    /^ف/i,
    /^م/i,
    /^(آ|ا)/i,
    /^م/i,
    /^(ژ|ج)/i,
    /^(ج|ژ)/i,
    /^(آ|ا)/i,
    /^س/i,
    /^ا/i,
    /^ن/i,
    /^د/i
  ],
  any: [
    /^ژا/i,
    /^ف/i,
    /^ما/i,
    /^آپ/i,
    /^(می|مه)/i,
    /^(ژوئن|جون)/i,
    /^(ژوئی|جول)/i,
    /^(اوت|آگ)/i,
    /^س/i,
    /^(اوک|اک)/i,
    /^ن/i,
    /^د/i
  ]
}, P = {
  narrow: /^[شیدسچپج]/i,
  short: /^(ش|ج|1ش|2ش|3ش|4ش|5ش)/i,
  abbreviated: /^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i,
  wide: /^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i
}, m = {
  narrow: [/^ی/i, /^دو/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i],
  any: [
    /^(ی|1ش|یکشنبه)/i,
    /^(د|2ش|دوشنبه)/i,
    /^(س|3ش|سه‌شنبه)/i,
    /^(چ|4ش|چهارشنبه)/i,
    /^(پ|5ش|پنجشنبه)/i,
    /^(ج|جمعه)/i,
    /^(ش|شنبه)/i
  ]
}, l = {
  narrow: /^(ب|ق|ن|ظ|ص|ب.ظ.|ع|ش)/i,
  abbreviated: /^(ق.ظ.|ب.ظ.|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i,
  wide: /^(قبل‌ازظهر|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i
}, u = {
  any: {
    am: /^(ق|ق.ظ.|قبل‌ازظهر)/i,
    pm: /^(ب|ب.ظ.|بعدازظهر)/i,
    midnight: /^(‌نیمه‌شب|ن)/i,
    noon: /^(ظ|ظهر)/i,
    morning: /(ص|صبح)/i,
    afternoon: /(ب|ب.ظ.|بعدازظهر)/i,
    evening: /(ع|عصر)/i,
    night: /(ش|شب)/i
  }
}, w = {
  ordinalNumber: i({
    matchPattern: e,
    parsePattern: r,
    valueCallback: (a) => parseInt(a, 10)
  }),
  era: t({
    matchPatterns: n,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any"
  }),
  quarter: t({
    matchPatterns: d,
    defaultMatchWidth: "wide",
    parsePatterns: o,
    defaultParseWidth: "any",
    valueCallback: (a) => a + 1
  }),
  month: t({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: c,
    defaultParseWidth: "any"
  }),
  day: t({
    matchPatterns: P,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "any"
  }),
  dayPeriod: t({
    matchPatterns: l,
    defaultMatchWidth: "wide",
    parsePatterns: u,
    defaultParseWidth: "any"
  })
};
export {
  w as match
};
