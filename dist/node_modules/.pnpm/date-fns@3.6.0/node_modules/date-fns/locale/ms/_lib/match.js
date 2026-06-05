import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as i } from "../../_lib/buildMatchPatternFn.js";
const e = /^ke-(\d+)?/i, r = /petama|\d+/i, n = {
  narrow: /^(sm|m)/i,
  abbreviated: /^(s\.?\s?m\.?|m\.?)/i,
  wide: /^(sebelum masihi|masihi)/i
}, s = {
  any: [/^s/i, /^(m)/i]
}, m = {
  narrow: /^[1234]/i,
  abbreviated: /^S[1234]/i,
  wide: /Suku (pertama|kedua|ketiga|keempat)/i
}, d = {
  any: [/pertama|1/i, /kedua|2/i, /ketiga|3/i, /keempat|4/i]
}, h = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mac|apr|mei|jun|jul|ogo|sep|okt|nov|dis)/i,
  wide: /^(januari|februari|mac|april|mei|jun|julai|ogos|september|oktober|november|disember)/i
}, o = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^o/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^ma/i,
    /^ap/i,
    /^me/i,
    /^jun/i,
    /^jul/i,
    /^og/i,
    /^s/i,
    /^ok/i,
    /^n/i,
    /^d/i
  ]
}, u = {
  narrow: /^[aisrkj]/i,
  short: /^(ahd|isn|sel|rab|kha|jum|sab)/i,
  abbreviated: /^(ahd|isn|sel|rab|kha|jum|sab)/i,
  wide: /^(ahad|isnin|selasa|rabu|khamis|jumaat|sabtu)/i
}, c = {
  narrow: [/^a/i, /^i/i, /^s/i, /^r/i, /^k/i, /^j/i, /^s/i],
  any: [/^a/i, /^i/i, /^se/i, /^r/i, /^k/i, /^j/i, /^sa/i]
}, p = {
  narrow: /^(am|pm|tengah malam|tengah hari|pagi|petang|malam)/i,
  any: /^([ap]\.?\s?m\.?|tengah malam|tengah hari|pagi|petang|malam)/i
}, l = {
  any: {
    am: /^a/i,
    pm: /^pm/i,
    midnight: /^tengah m/i,
    noon: /^tengah h/i,
    morning: /pa/i,
    afternoon: /tengah h/i,
    evening: /pe/i,
    night: /m/i
  }
}, g = {
  ordinalNumber: i({
    matchPattern: e,
    parsePattern: r,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: a({
    matchPatterns: n,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any"
  }),
  quarter: a({
    matchPatterns: m,
    defaultMatchWidth: "wide",
    parsePatterns: d,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: a({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: o,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: u,
    defaultMatchWidth: "wide",
    parsePatterns: c,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: p,
    defaultMatchWidth: "any",
    parsePatterns: l,
    defaultParseWidth: "any"
  })
};
export {
  g as match
};
