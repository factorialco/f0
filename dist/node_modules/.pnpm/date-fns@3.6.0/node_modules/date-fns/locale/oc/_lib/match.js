import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as t } from "../../_lib/buildMatchPatternFn.js";
const e = /^(\d+)(èr|nd|en)?[a]?/i, r = /\d+/i, d = {
  narrow: /^(ab\.J\.C|apr\.J\.C|apr\.J\.-C)/i,
  abbreviated: /^(ab\.J\.-C|ab\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
  wide: /^(abans Jèsus-Crist|après Jèsus-Crist)/i
}, n = {
  any: [/^ab/i, /^ap/i]
}, s = {
  narrow: /^T[1234]/i,
  abbreviated: /^[1234](èr|nd|en)? trim\.?/i,
  wide: /^[1234](èr|nd|en)? trimèstre/i
}, m = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, c = {
  narrow: /^(GN|FB|MÇ|AB|MA|JN|JL|AG|ST|OC|NV|DC)/i,
  abbreviated: /^(gen|febr|març|abr|mai|junh|jul|ag|set|oct|nov|dec)\.?/i,
  wide: /^(genièr|febrièr|març|abril|mai|junh|julhet|agost|setembre|octòbre|novembre|decembre)/i
}, o = {
  any: [
    /^g/i,
    /^f/i,
    /^ma[r?]|MÇ/i,
    /^ab/i,
    /^ma[i?]/i,
    /^ju[n?]|JN/i,
    /^ju[l?]|JL/i,
    /^ag/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, h = {
  narrow: /^d[glmcjvs]\.?/i,
  short: /^d[glmcjvs]\.?/i,
  abbreviated: /^d[glmcjvs]\.?/i,
  wide: /^(dimenge|diluns|dimars|dimècres|dijòus|divendres|dissabte)/i
}, l = {
  narrow: [/^dg/i, /^dl/i, /^dm/i, /^dc/i, /^dj/i, /^dv/i, /^ds/i],
  short: [/^dg/i, /^dl/i, /^dm/i, /^dc/i, /^dj/i, /^dv/i, /^ds/i],
  abbreviated: [/^dg/i, /^dl/i, /^dm/i, /^dc/i, /^dj/i, /^dv/i, /^ds/i],
  any: [
    /^dg|dime/i,
    /^dl|dil/i,
    /^dm|dima/i,
    /^dc|dimè/i,
    /^dj|dij/i,
    /^dv|div/i,
    /^ds|dis/i
  ]
}, p = {
  any: /(^(a\.?m|p\.?m))|(ante meridiem|post meridiem)|((del |de la |de l’)(matin|aprèp-miègjorn|vèspre|ser|nuèch))/i
}, P = {
  any: {
    am: /(^a)|ante meridiem/i,
    pm: /(^p)|post meridiem/i,
    midnight: /^mièj/i,
    noon: /^mièg/i,
    morning: /matin/i,
    afternoon: /aprèp-miègjorn/i,
    evening: /vèspre|ser/i,
    night: /nuèch/i
  }
}, g = {
  ordinalNumber: t({
    matchPattern: e,
    parsePattern: r,
    valueCallback: (i) => parseInt(i, 10)
  }),
  era: a({
    matchPatterns: d,
    defaultMatchWidth: "wide",
    parsePatterns: n,
    defaultParseWidth: "any"
  }),
  quarter: a({
    matchPatterns: s,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "any",
    valueCallback: (i) => i + 1
  }),
  month: a({
    matchPatterns: c,
    defaultMatchWidth: "wide",
    parsePatterns: o,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: l,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: p,
    defaultMatchWidth: "any",
    parsePatterns: P,
    defaultParseWidth: "any"
  })
};
export {
  g as match
};
