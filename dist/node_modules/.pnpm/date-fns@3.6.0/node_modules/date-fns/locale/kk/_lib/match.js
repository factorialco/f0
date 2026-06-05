import { buildMatchFn as i } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as t } from "../../_lib/buildMatchPatternFn.js";
const e = /^(\d+)(-?(ші|шы))?/i, r = /\d+/i, n = {
  narrow: /^((б )?з\.?\s?д\.?)/i,
  abbreviated: /^((б )?з\.?\s?д\.?)/i,
  wide: /^(біздің заманымызға дейін|біздің заманымыз|біздің заманымыздан)/i
}, s = {
  any: [/^б/i, /^з/i]
}, d = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?ші)? тоқ.?/i,
  wide: /^[1234](-?ші)? тоқсан/i
}, o = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, h = {
  narrow: /^(қ|а|н|с|м|мау|ш|т|қыр|қаз|қар|ж)/i,
  abbreviated: /^(қаң|ақп|нау|сәу|мам|мау|шіл|там|қыр|қаз|қар|жел)/i,
  wide: /^(қаңтар|ақпан|наурыз|сәуір|мамыр|маусым|шілде|тамыз|қыркүйек|қазан|қараша|желтоқсан)/i
}, c = {
  narrow: [
    /^қ/i,
    /^а/i,
    /^н/i,
    /^с/i,
    /^м/i,
    /^м/i,
    /^ш/i,
    /^т/i,
    /^қ/i,
    /^қ/i,
    /^қ/i,
    /^ж/i
  ],
  abbreviated: [
    /^қаң/i,
    /^ақп/i,
    /^нау/i,
    /^сәу/i,
    /^мам/i,
    /^мау/i,
    /^шіл/i,
    /^там/i,
    /^қыр/i,
    /^қаз/i,
    /^қар/i,
    /^жел/i
  ],
  any: [
    /^қ/i,
    /^а/i,
    /^н/i,
    /^с/i,
    /^м/i,
    /^м/i,
    /^ш/i,
    /^т/i,
    /^қ/i,
    /^қ/i,
    /^қ/i,
    /^ж/i
  ]
}, P = {
  narrow: /^(ж|д|с|с|б|ж|с)/i,
  short: /^(жс|дс|сс|ср|бс|жм|сб)/i,
  wide: /^(жексенбі|дүйсенбі|сейсенбі|сәрсенбі|бейсенбі|жұма|сенбі)/i
}, m = {
  narrow: [/^ж/i, /^д/i, /^с/i, /^с/i, /^б/i, /^ж/i, /^с/i],
  short: [/^жс/i, /^дс/i, /^сс/i, /^ср/i, /^бс/i, /^жм/i, /^сб/i],
  any: [
    /^ж[ек]/i,
    /^д[үй]/i,
    /^сe[й]/i,
    /^сә[р]/i,
    /^б[ей]/i,
    /^ж[ұм]/i,
    /^се[н]/i
  ]
}, l = {
  narrow: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,
  wide: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,
  any: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i
}, u = {
  any: {
    am: /^ТД/i,
    pm: /^ТК/i,
    midnight: /^түн орта/i,
    noon: /^күндіз/i,
    morning: /таң/i,
    afternoon: /түс/i,
    evening: /кеш/i,
    night: /түн/i
  }
}, y = {
  ordinalNumber: t({
    matchPattern: e,
    parsePattern: r,
    valueCallback: (a) => parseInt(a, 10)
  }),
  era: i({
    matchPatterns: n,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any"
  }),
  quarter: i({
    matchPatterns: d,
    defaultMatchWidth: "wide",
    parsePatterns: o,
    defaultParseWidth: "any",
    valueCallback: (a) => a + 1
  }),
  month: i({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: c,
    defaultParseWidth: "any"
  }),
  day: i({
    matchPatterns: P,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "any"
  }),
  dayPeriod: i({
    matchPatterns: l,
    defaultMatchWidth: "wide",
    parsePatterns: u,
    defaultParseWidth: "any"
  })
};
export {
  y as match
};
