import { buildMatchFn as t } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as i } from "../../_lib/buildMatchPatternFn.js";
const e = /^(\d+)\.?/i, r = /\d+/i, s = {
  narrow: /^(ie\.|isz\.)/i,
  abbreviated: /^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i,
  wide: /^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i
}, n = {
  narrow: [/ie/i, /isz/i],
  abbreviated: [/^(i\.?\s?e\.?|b\s?ce)/i, /^(i\.?\s?sz\.?|c\s?e)/i],
  any: [/előtt/i, /(szerint|i. sz.)/i]
}, d = {
  narrow: /^[1234]\.?/i,
  abbreviated: /^[1234]?\.?\s?n\.év/i,
  wide: /^([1234]|I|II|III|IV)?\.?\s?negyedév/i
}, c = {
  any: [/1|I$/i, /2|II$/i, /3|III/i, /4|IV/i]
}, o = {
  narrow: /^[jfmaásond]|sz/i,
  abbreviated: /^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i,
  wide: /^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i
}, h = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a|á/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s|sz/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^már/i,
    /^áp/i,
    /^máj/i,
    /^jún/i,
    /^júl/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, m = {
  narrow: /^([vhkpc]|sz|cs|sz)/i,
  short: /^([vhkp]|sze|cs|szo)/i,
  abbreviated: /^([vhkp]|sze|cs|szo)/i,
  wide: /^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i
}, u = {
  narrow: [/^v/i, /^h/i, /^k/i, /^sz/i, /^c/i, /^p/i, /^sz/i],
  any: [/^v/i, /^h/i, /^k/i, /^sze/i, /^c/i, /^p/i, /^szo/i]
}, l = {
  any: /^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i
}, P = {
  any: {
    am: /^de\.?/i,
    pm: /^du\.?/i,
    midnight: /^éjf/i,
    noon: /^dé/i,
    morning: /reg/i,
    afternoon: /^délu\.?/i,
    evening: /es/i,
    night: /éjj/i
  }
}, b = {
  ordinalNumber: i({
    matchPattern: e,
    parsePattern: r,
    valueCallback: (a) => parseInt(a, 10)
  }),
  era: t({
    matchPatterns: s,
    defaultMatchWidth: "wide",
    parsePatterns: n,
    defaultParseWidth: "any"
  }),
  quarter: t({
    matchPatterns: d,
    defaultMatchWidth: "wide",
    parsePatterns: c,
    defaultParseWidth: "any",
    valueCallback: (a) => a + 1
  }),
  month: t({
    matchPatterns: o,
    defaultMatchWidth: "wide",
    parsePatterns: h,
    defaultParseWidth: "any"
  }),
  day: t({
    matchPatterns: m,
    defaultMatchWidth: "wide",
    parsePatterns: u,
    defaultParseWidth: "any"
  }),
  dayPeriod: t({
    matchPatterns: l,
    defaultMatchWidth: "any",
    parsePatterns: P,
    defaultParseWidth: "any"
  })
};
export {
  b as match
};
