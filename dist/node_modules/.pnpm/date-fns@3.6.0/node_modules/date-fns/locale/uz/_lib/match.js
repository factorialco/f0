import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as i } from "../../_lib/buildMatchPatternFn.js";
const n = /^(\d+)(chi)?/i, e = /\d+/i, r = {
  narrow: /^(m\.a|m\.)/i,
  abbreviated: /^(m\.a\.?\s?m\.?)/i,
  wide: /^(miloddan avval|miloddan keyin)/i
}, s = {
  any: [/^b/i, /^(a|c)/i]
}, h = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](chi)? chorak/i
}, d = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, o = {
  narrow: /^[yfmasond]/i,
  abbreviated: /^(yan|fev|mar|apr|may|iyun|iyul|avg|sen|okt|noy|dek)/i,
  wide: /^(yanvar|fevral|mart|aprel|may|iyun|iyul|avgust|sentabr|oktabr|noyabr|dekabr)/i
}, y = {
  narrow: [
    /^y/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^i/i,
    /^i/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ya/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^iyun/i,
    /^iyul/i,
    /^av/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, c = {
  narrow: /^[ydschj]/i,
  short: /^(ya|du|se|cho|pa|ju|sha)/i,
  abbreviated: /^(yak|dush|sesh|chor|pay|jum|shan)/i,
  wide: /^(yakshanba|dushanba|seshanba|chorshanba|payshanba|juma|shanba)/i
}, u = {
  narrow: [/^y/i, /^d/i, /^s/i, /^ch/i, /^p/i, /^j/i, /^sh/i],
  any: [/^ya/i, /^d/i, /^se/i, /^ch/i, /^p/i, /^j/i, /^sh/i]
}, m = {
  narrow: /^(a|p|y\.t|p| (ertalab|tushdan keyin|kechqurun|tun))/i,
  any: /^([ap]\.?\s?m\.?|yarim tun|peshin| (ertalab|tushdan keyin|kechqurun|tun))/i
}, P = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^y\.t/i,
    noon: /^pe/i,
    morning: /ertalab/i,
    afternoon: /tushdan keyin/i,
    evening: /kechqurun/i,
    night: /tun/i
  }
}, b = {
  ordinalNumber: i({
    matchPattern: n,
    parsePattern: e,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: a({
    matchPatterns: r,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any"
  }),
  quarter: a({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: d,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: a({
    matchPatterns: o,
    defaultMatchWidth: "wide",
    parsePatterns: y,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: c,
    defaultMatchWidth: "wide",
    parsePatterns: u,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: m,
    defaultMatchWidth: "any",
    parsePatterns: P,
    defaultParseWidth: "any"
  })
};
export {
  b as match
};
