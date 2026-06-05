import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as i } from "../../_lib/buildMatchPatternFn.js";
const e = /^(\d+)((-|֊)?(ին|րդ))?/i, r = /\d+/i, n = {
  narrow: /^(Ք|Մ)/i,
  abbreviated: /^(Ք\.?\s?Ա\.?|Մ\.?\s?Թ\.?\s?Ա\.?|Մ\.?\s?Թ\.?|Ք\.?\s?Հ\.?)/i,
  wide: /^(քրիստոսից առաջ|մեր թվարկությունից առաջ|մեր թվարկության|քրիստոսից հետո)/i
}, s = {
  any: [/^ք/i, /^մ/i]
}, d = {
  narrow: /^[1234]/i,
  abbreviated: /^ք[1234]/i,
  wide: /^[1234]((-|֊)?(ին|րդ)) քառորդ/i
}, o = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, h = {
  narrow: /^[հփմաօսնդ]/i,
  abbreviated: /^(հուն|փետ|մար|ապր|մայ|հուն|հուլ|օգս|սեպ|հոկ|նոյ|դեկ)/i,
  wide: /^(հունվար|փետրվար|մարտ|ապրիլ|մայիս|հունիս|հուլիս|օգոստոս|սեպտեմբեր|հոկտեմբեր|նոյեմբեր|դեկտեմբեր)/i
}, c = {
  narrow: [
    /^հ/i,
    /^փ/i,
    /^մ/i,
    /^ա/i,
    /^մ/i,
    /^հ/i,
    /^հ/i,
    /^օ/i,
    /^ս/i,
    /^հ/i,
    /^ն/i,
    /^դ/i
  ],
  any: [
    /^հու/i,
    /^փ/i,
    /^մար/i,
    /^ա/i,
    /^մայ/i,
    /^հուն/i,
    /^հուլ/i,
    /^օ/i,
    /^ս/i,
    /^հոկ/i,
    /^ն/i,
    /^դ/i
  ]
}, P = {
  narrow: /^[եչհոշկ]/i,
  short: /^(կր|եր|եք|չք|հգ|ուր|շբ)/i,
  abbreviated: /^(կիր|երկ|երք|չոր|հնգ|ուրբ|շաբ)/i,
  wide: /^(կիրակի|երկուշաբթի|երեքշաբթի|չորեքշաբթի|հինգշաբթի|ուրբաթ|շաբաթ)/i
}, m = {
  narrow: [/^կ/i, /^ե/i, /^ե/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i],
  short: [/^կ/i, /^եր/i, /^եք/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i],
  abbreviated: [/^կ/i, /^երկ/i, /^երք/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i],
  wide: [/^կ/i, /^երկ/i, /^երե/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i]
}, l = {
  narrow: /^([ap]|կեսգշ|կեսօր|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i,
  any: /^([ap]\.?\s?m\.?|կեսգիշեր(ին)?|կեսօր(ին)?|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i
}, p = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /կեսգիշեր/i,
    noon: /կեսօր/i,
    morning: /առավոտ/i,
    afternoon: /ցերեկ/i,
    evening: /երեկո/i,
    night: /գիշեր/i
  }
}, w = {
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
    matchPatterns: d,
    defaultMatchWidth: "wide",
    parsePatterns: o,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: a({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: c,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: P,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "wide"
  }),
  dayPeriod: a({
    matchPatterns: l,
    defaultMatchWidth: "any",
    parsePatterns: p,
    defaultParseWidth: "any"
  })
};
export {
  w as match
};
