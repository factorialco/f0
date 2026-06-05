import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as e } from "../../_lib/buildMatchPatternFn.js";
const r = /^(\d+)(\.)?/i, i = /\d+/i, n = {
  narrow: /^(fKr|fvt|eKr|vt)/i,
  abbreviated: /^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,
  wide: /^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i
}, s = {
  any: [/^f/i, /^(v|e)/i]
}, d = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]. kvt\./i,
  wide: /^[1234]\.? kvartal/i
}, o = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, m = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,
  wide: /^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i
}, c = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^maj/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, f = {
  narrow: /^[smtofl]/i,
  short: /^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,
  abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i,
  wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i
}, h = {
  narrow: [/^s/i, /^m/i, /^t/i, /^o/i, /^t/i, /^f/i, /^l/i],
  any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
}, l = {
  narrow: /^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,
  any: /^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i
}, P = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /midnat/i,
    noon: /middag/i,
    morning: /morgen/i,
    afternoon: /eftermiddag/i,
    evening: /aften/i,
    night: /nat/i
  }
}, p = {
  ordinalNumber: e({
    matchPattern: r,
    parsePattern: i,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: a({
    matchPatterns: n,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any"
  }),
  quarter: a({
    matchPatterns: d,
    defaultMatchWidth: "wide",
    parsePatterns: o,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: a({
    matchPatterns: m,
    defaultMatchWidth: "wide",
    parsePatterns: c,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: f,
    defaultMatchWidth: "wide",
    parsePatterns: h,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: l,
    defaultMatchWidth: "any",
    parsePatterns: P,
    defaultParseWidth: "any"
  })
};
export {
  p as match
};
