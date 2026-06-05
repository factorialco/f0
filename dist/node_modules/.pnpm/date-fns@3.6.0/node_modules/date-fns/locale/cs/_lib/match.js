import { buildMatchFn as e } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as a } from "../../_lib/buildMatchPatternFn.js";
const r = /^(\d+)\.?/i, n = /\d+/i, i = {
  narrow: /^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,
  abbreviated: /^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,
  wide: /^(p[řr](\.|ed) Kristem|p[řr](\.|ed) na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i
}, o = {
  any: [/^p[řr]/i, /^(po|n)/i]
}, d = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]\. [čc]tvrtlet[íi]/i,
  wide: /^[1234]\. [čc]tvrtlet[íi]/i
}, s = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, c = {
  narrow: /^[lúubdkčcszřrlp]/i,
  abbreviated: /^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i,
  wide: /^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i
}, p = {
  narrow: [
    /^l/i,
    /^[úu]/i,
    /^b/i,
    /^d/i,
    /^k/i,
    /^[čc]/i,
    /^[čc]/i,
    /^s/i,
    /^z/i,
    /^[řr]/i,
    /^l/i,
    /^p/i
  ],
  any: [
    /^led/i,
    /^[úu]n/i,
    /^b[řr]e/i,
    /^dub/i,
    /^kv[ěe]/i,
    /^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i,
    /^[čc]vc|[čc]erven(ec|ce)/i,
    /^srp/i,
    /^z[áa][řr]/i,
    /^[řr][íi]j/i,
    /^lis/i,
    /^pro/i
  ]
}, l = {
  narrow: /^[npuúsčps]/i,
  short: /^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,
  abbreviated: /^(ned|pon|[úu]te|st[rř]|[čc]tv|p[áa]t|sob)/i,
  wide: /^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i
}, u = {
  narrow: [/^n/i, /^p/i, /^[úu]/i, /^s/i, /^[čc]/i, /^p/i, /^s/i],
  any: [/^ne/i, /^po/i, /^[úu]t/i, /^st/i, /^[čc]t/i, /^p[áa]/i, /^so/i]
}, h = {
  any: /^dopoledne|dop\.?|odpoledne|odp\.?|p[ůu]lnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci?/i
}, P = {
  any: {
    am: /^dop/i,
    pm: /^odp/i,
    midnight: /^p[ůu]lnoc/i,
    noon: /^poledne/i,
    morning: /r[áa]no/i,
    afternoon: /odpoledne/i,
    evening: /ve[čc]er/i,
    night: /noc/i
  }
}, v = {
  ordinalNumber: a({
    matchPattern: r,
    parsePattern: n,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: e({
    matchPatterns: i,
    defaultMatchWidth: "wide",
    parsePatterns: o,
    defaultParseWidth: "any"
  }),
  quarter: e({
    matchPatterns: d,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: e({
    matchPatterns: c,
    defaultMatchWidth: "wide",
    parsePatterns: p,
    defaultParseWidth: "any"
  }),
  day: e({
    matchPatterns: l,
    defaultMatchWidth: "wide",
    parsePatterns: u,
    defaultParseWidth: "any"
  }),
  dayPeriod: e({
    matchPatterns: h,
    defaultMatchWidth: "any",
    parsePatterns: P,
    defaultParseWidth: "any"
  })
};
export {
  v as match
};
