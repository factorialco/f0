import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as e } from "../../_lib/buildMatchPatternFn.js";
const r = /^(\d+|(ראשון|שני|שלישי|רביעי|חמישי|שישי|שביעי|שמיני|תשיעי|עשירי|ראשונה|שנייה|שלישית|רביעית|חמישית|שישית|שביעית|שמינית|תשיעית|עשירית))/i, n = /^(\d+|רא|שנ|של|רב|ח|שי|שב|שמ|ת|ע)/i, s = {
  narrow: /^ל(ספירה|פנה״ס)/i,
  abbreviated: /^ל(ספירה|פנה״ס)/i,
  wide: /^ל(פני ה)?ספירה/i
}, d = {
  any: [/^לפ/i, /^לס/i]
}, o = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^רבעון [1234]/i
}, c = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, h = {
  narrow: /^\d+/i,
  abbreviated: /^(ינו|פבר|מרץ|אפר|מאי|יוני|יולי|אוג|ספט|אוק|נוב|דצמ)׳?/i,
  wide: /^(ינואר|פברואר|מרץ|אפריל|מאי|יוני|יולי|אוגוסט|ספטמבר|אוקטובר|נובמבר|דצמבר)/i
}, P = {
  narrow: [
    /^1$/i,
    /^2/i,
    /^3/i,
    /^4/i,
    /^5/i,
    /^6/i,
    /^7/i,
    /^8/i,
    /^9/i,
    /^10/i,
    /^11/i,
    /^12/i
  ],
  any: [
    /^ינ/i,
    /^פ/i,
    /^מר/i,
    /^אפ/i,
    /^מא/i,
    /^יונ/i,
    /^יול/i,
    /^אוג/i,
    /^ס/i,
    /^אוק/i,
    /^נ/i,
    /^ד/i
  ]
}, m = {
  narrow: /^[אבגדהוש]׳/i,
  short: /^[אבגדהוש]׳/i,
  abbreviated: /^(שבת|יום (א|ב|ג|ד|ה|ו)׳)/i,
  wide: /^יום (ראשון|שני|שלישי|רביעי|חמישי|שישי|שבת)/i
}, l = {
  abbreviated: [/א׳$/i, /ב׳$/i, /ג׳$/i, /ד׳$/i, /ה׳$/i, /ו׳$/i, /^ש/i],
  wide: [/ן$/i, /ני$/i, /לישי$/i, /עי$/i, /מישי$/i, /שישי$/i, /ת$/i],
  any: [/^א/i, /^ב/i, /^ג/i, /^ד/i, /^ה/i, /^ו/i, /^ש/i]
}, u = {
  any: /^(אחר ה|ב)?(חצות|צהריים|בוקר|ערב|לילה|אחה״צ|לפנה״צ)/i
}, b = {
  any: {
    am: /^לפ/i,
    pm: /^אחה/i,
    midnight: /^ח/i,
    noon: /^צ/i,
    morning: /בוקר/i,
    afternoon: /בצ|אחר/i,
    evening: /ערב/i,
    night: /לילה/i
  }
}, y = ["רא", "שנ", "של", "רב", "ח", "שי", "שב", "שמ", "ת", "ע"], w = {
  ordinalNumber: e({
    matchPattern: r,
    parsePattern: n,
    valueCallback: (t) => {
      const i = parseInt(t, 10);
      return isNaN(i) ? y.indexOf(t) + 1 : i;
    }
  }),
  era: a({
    matchPatterns: s,
    defaultMatchWidth: "wide",
    parsePatterns: d,
    defaultParseWidth: "any"
  }),
  quarter: a({
    matchPatterns: o,
    defaultMatchWidth: "wide",
    parsePatterns: c,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: a({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: P,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: m,
    defaultMatchWidth: "wide",
    parsePatterns: l,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: u,
    defaultMatchWidth: "any",
    parsePatterns: b,
    defaultParseWidth: "any"
  })
};
export {
  w as match
};
