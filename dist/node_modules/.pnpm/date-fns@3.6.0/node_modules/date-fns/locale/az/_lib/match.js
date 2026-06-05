import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as t } from "../../_lib/buildMatchPatternFn.js";
const r = /^(\d+)(-?(ci|inci|nci|uncu|üncü|ncı))?/i, e = /\d+/i, n = {
  narrow: /^(b|a)$/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)$/i,
  wide: /^(bizim eradan əvvəl|bizim era)$/i
}, $ = {
  any: [/^b$/i, /^(a|c)$/i]
}, s = {
  narrow: /^[1234]$/i,
  abbreviated: /^K[1234]$/i,
  wide: /^[1234](ci)? kvartal$/i
}, d = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, c = {
  narrow: /^[(?-i)yfmaisond]$/i,
  abbreviated: /^(Yan|Fev|Mar|Apr|May|İyun|İyul|Avq|Sen|Okt|Noy|Dek)$/i,
  wide: /^(Yanvar|Fevral|Mart|Aprel|May|İyun|İyul|Avgust|Sentyabr|Oktyabr|Noyabr|Dekabr)$/i
}, m = {
  narrow: [
    /^[(?-i)y]$/i,
    /^[(?-i)f]$/i,
    /^[(?-i)m]$/i,
    /^[(?-i)a]$/i,
    /^[(?-i)m]$/i,
    /^[(?-i)i]$/i,
    /^[(?-i)i]$/i,
    /^[(?-i)a]$/i,
    /^[(?-i)s]$/i,
    /^[(?-i)o]$/i,
    /^[(?-i)n]$/i,
    /^[(?-i)d]$/i
  ],
  abbreviated: [
    /^Yan$/i,
    /^Fev$/i,
    /^Mar$/i,
    /^Apr$/i,
    /^May$/i,
    /^İyun$/i,
    /^İyul$/i,
    /^Avg$/i,
    /^Sen$/i,
    /^Okt$/i,
    /^Noy$/i,
    /^Dek$/i
  ],
  wide: [
    /^Yanvar$/i,
    /^Fevral$/i,
    /^Mart$/i,
    /^Aprel$/i,
    /^May$/i,
    /^İyun$/i,
    /^İyul$/i,
    /^Avgust$/i,
    /^Sentyabr$/i,
    /^Oktyabr$/i,
    /^Noyabr$/i,
    /^Dekabr$/i
  ]
}, o = {
  narrow: /^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,
  short: /^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,
  abbreviated: /^(Baz\.e|Çər|Çər\.a|Cüm|Cüm\.a|Şə)$/i,
  wide: /^(Bazar|Bazar ertəsi|Çərşənbə axşamı|Çərşənbə|Cümə axşamı|Cümə|Şənbə)$/i
}, y = {
  narrow: [
    /^B\.$/i,
    /^B\.e$/i,
    /^Ç\.a$/i,
    /^Ç\.$/i,
    /^C\.a$/i,
    /^C\.$/i,
    /^Ş\.$/i
  ],
  abbreviated: [
    /^Baz$/i,
    /^Baz\.e$/i,
    /^Çər\.a$/i,
    /^Çər$/i,
    /^Cüm\.a$/i,
    /^Cüm$/i,
    /^Şə$/i
  ],
  wide: [
    /^Bazar$/i,
    /^Bazar ertəsi$/i,
    /^Çərşənbə axşamı$/i,
    /^Çərşənbə$/i,
    /^Cümə axşamı$/i,
    /^Cümə$/i,
    /^Şənbə$/i
  ],
  any: [
    /^B\.$/i,
    /^B\.e$/i,
    /^Ç\.a$/i,
    /^Ç\.$/i,
    /^C\.a$/i,
    /^C\.$/i,
    /^Ş\.$/i
  ]
}, b = {
  narrow: /^(a|p|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i,
  any: /^(am|pm|a\.m\.|p\.m\.|AM|PM|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i
}, h = {
  any: {
    am: /^a$/i,
    pm: /^p$/i,
    midnight: /^gecəyarı$/i,
    noon: /^gün$/i,
    morning: /səhər$/i,
    afternoon: /gündüz$/i,
    evening: /axşam$/i,
    night: /gecə$/i
  }
}, l = {
  ordinalNumber: t({
    matchPattern: r,
    parsePattern: e,
    valueCallback: (i) => parseInt(i, 10)
  }),
  era: a({
    matchPatterns: n,
    defaultMatchWidth: "wide",
    parsePatterns: $,
    defaultParseWidth: "any"
  }),
  quarter: a({
    matchPatterns: s,
    defaultMatchWidth: "wide",
    parsePatterns: d,
    defaultParseWidth: "any",
    valueCallback: (i) => i + 1
  }),
  month: a({
    matchPatterns: c,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "narrow"
  }),
  day: a({
    matchPatterns: o,
    defaultMatchWidth: "wide",
    parsePatterns: y,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: b,
    defaultMatchWidth: "any",
    parsePatterns: h,
    defaultParseWidth: "any"
  })
};
export {
  l as match
};
