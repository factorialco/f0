import { buildMatchPatternFn as i } from "../../_lib/buildMatchPatternFn.js";
import { buildMatchFn as t } from "../../_lib/buildMatchFn.js";
const n = /^(\d+)(th|st|nd|rd)?/i, e = /\d+/i, r = {
  narrow: /^(ق|ب)/i,
  abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,
  wide: /^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i
}, s = {
  any: [/^قبل/i, /^بعد/i]
}, d = {
  narrow: /^[1234]/i,
  abbreviated: /^ر[1234]/i,
  wide: /^الربع [1234]/i
}, o = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, h = {
  narrow: /^[يفمأمسند]/i,
  abbreviated: /^(ين|ف|مار|أب|ماي|يون|يول|غش|شت|أك|ن|د)/i,
  wide: /^(ين|ف|مار|أب|ماي|يون|يول|غش|شت|أك|ن|د)/i
}, c = {
  narrow: [
    /^ي/i,
    /^ف/i,
    /^م/i,
    /^أ/i,
    /^م/i,
    /^ي/i,
    /^ي/i,
    /^غ/i,
    /^ش/i,
    /^أ/i,
    /^ن/i,
    /^د/i
  ],
  any: [
    /^ين/i,
    /^فب/i,
    /^مار/i,
    /^أب/i,
    /^ماي/i,
    /^يون/i,
    /^يول/i,
    /^غشت/i,
    /^ش/i,
    /^أك/i,
    /^ن/i,
    /^د/i
  ]
}, m = {
  narrow: /^[حنثرخجس]/i,
  short: /^(أحد|إثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
  abbreviated: /^(أحد|إثن|ثلا|أرب|خمي|جمعة|سبت)/i,
  wide: /^(الأحد|الإثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
}, P = {
  narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i],
  wide: [
    /^الأحد/i,
    /^الإثنين/i,
    /^الثلاثاء/i,
    /^الأربعاء/i,
    /^الخميس/i,
    /^الجمعة/i,
    /^السبت/i
  ],
  any: [/^أح/i, /^إث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]
}, l = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, u = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, b = {
  ordinalNumber: i({
    matchPattern: n,
    parsePattern: e,
    valueCallback: (a) => parseInt(a, 10)
  }),
  era: t({
    matchPatterns: r,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any"
  }),
  quarter: t({
    matchPatterns: d,
    defaultMatchWidth: "wide",
    parsePatterns: o,
    defaultParseWidth: "any",
    valueCallback: (a) => Number(a) + 1
  }),
  month: t({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: c,
    defaultParseWidth: "any"
  }),
  day: t({
    matchPatterns: m,
    defaultMatchWidth: "wide",
    parsePatterns: P,
    defaultParseWidth: "any"
  }),
  dayPeriod: t({
    matchPatterns: l,
    defaultMatchWidth: "any",
    parsePatterns: u,
    defaultParseWidth: "any"
  })
};
export {
  b as match
};
