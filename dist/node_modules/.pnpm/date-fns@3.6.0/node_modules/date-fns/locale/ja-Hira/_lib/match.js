import { buildMatchFn as t } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as e } from "../../_lib/buildMatchPatternFn.js";
const r = /^だ?い?\d+(ねん|しはんき|がつ|しゅう|にち|じ|ふん|びょう)?/i, n = /\d+/i, i = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(きげん[前後]|せいれき)/i,
  wide: /^(きげん[前後]|せいれき)/i
}, s = {
  narrow: [/^B/i, /^A/i],
  any: [/^(きげんぜん)/i, /^(せいれき|きげんご)/i]
}, d = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^だい[1234一二三四１２３４]しはんき/i
}, o = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, c = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])がつ/i,
  wide: /^([123456789]|1[012])がつ/i
}, h = {
  any: [
    /^1\D/,
    /^2/,
    /^3/,
    /^4/,
    /^5/,
    /^6/,
    /^7/,
    /^8/,
    /^9/,
    /^10/,
    /^11/,
    /^12/
  ]
}, P = {
  narrow: /^(にち|げつ|か|すい|もく|きん|ど)/,
  short: /^(にち|げつ|か|すい|もく|きん|ど)/,
  abbreviated: /^(にち|げつ|か|すい|もく|きん|ど)/,
  wide: /^(にち|げつ|か|すい|もく|きん|ど)ようび/
}, m = {
  any: [/^にち/, /^げつ/, /^か/, /^すい/, /^もく/, /^きん/, /^ど/]
}, u = {
  any: /^(AM|PM|ごぜん|ごご|しょうご|しんや|まよなか|よる|あさ)/i
}, l = {
  any: {
    am: /^(A|ごぜん)/i,
    pm: /^(P|ごご)/i,
    midnight: /^しんや|まよなか/i,
    noon: /^しょうご/i,
    morning: /^あさ/i,
    afternoon: /^ごご/i,
    evening: /^よる/i,
    night: /^しんや/i
  }
}, b = {
  ordinalNumber: e({
    matchPattern: r,
    parsePattern: n,
    valueCallback: function(a) {
      return parseInt(a, 10);
    }
  }),
  era: t({
    matchPatterns: i,
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
    matchPatterns: c,
    defaultMatchWidth: "wide",
    parsePatterns: h,
    defaultParseWidth: "any"
  }),
  day: t({
    matchPatterns: P,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "any"
  }),
  dayPeriod: t({
    matchPatterns: u,
    defaultMatchWidth: "any",
    parsePatterns: l,
    defaultParseWidth: "any"
  })
};
export {
  b as match
};
