import { buildLocalizeFn as n } from "../../_lib/buildLocalizeFn.js";
const i = {
  narrow: ["ઈસપૂ", "ઈસ"],
  abbreviated: ["ઈ.સ.પૂર્વે", "ઈ.સ."],
  wide: ["ઈસવીસન પૂર્વે", "ઈસવીસન"]
}, a = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1લો ત્રિમાસ", "2જો ત્રિમાસ", "3જો ત્રિમાસ", "4થો ત્રિમાસ"]
}, o = {
  narrow: ["જા", "ફે", "મા", "એ", "મે", "જૂ", "જુ", "ઓ", "સ", "ઓ", "ન", "ડિ"],
  abbreviated: [
    "જાન્યુ",
    "ફેબ્રુ",
    "માર્ચ",
    "એપ્રિલ",
    "મે",
    "જૂન",
    "જુલાઈ",
    "ઑગસ્ટ",
    "સપ્ટે",
    "ઓક્ટો",
    "નવે",
    "ડિસે"
  ],
  wide: [
    "જાન્યુઆરી",
    "ફેબ્રુઆરી",
    "માર્ચ",
    "એપ્રિલ",
    "મે",
    "જૂન",
    "જુલાઇ",
    "ઓગસ્ટ",
    "સપ્ટેમ્બર",
    "ઓક્ટોબર",
    "નવેમ્બર",
    "ડિસેમ્બર"
  ]
}, t = {
  narrow: ["ર", "સો", "મં", "બુ", "ગુ", "શુ", "શ"],
  short: ["ર", "સો", "મં", "બુ", "ગુ", "શુ", "શ"],
  abbreviated: ["રવિ", "સોમ", "મંગળ", "બુધ", "ગુરુ", "શુક્ર", "શનિ"],
  wide: [
    "રવિવાર",
    "સોમવાર",
    "મંગળવાર",
    "બુધવાર",
    "ગુરુવાર",
    "શુક્રવાર",
    "શનિવાર"
  ]
}, r = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "મ.રાત્રિ",
    noon: "બ.",
    morning: "સવારે",
    afternoon: "બપોરે",
    evening: "સાંજે",
    night: "રાત્રે"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "​મધ્યરાત્રિ",
    noon: "બપોરે",
    morning: "સવારે",
    afternoon: "બપોરે",
    evening: "સાંજે",
    night: "રાત્રે"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "​મધ્યરાત્રિ",
    noon: "બપોરે",
    morning: "સવારે",
    afternoon: "બપોરે",
    evening: "સાંજે",
    night: "રાત્રે"
  }
}, d = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "મ.રાત્રિ",
    noon: "બપોરે",
    morning: "સવારે",
    afternoon: "બપોરે",
    evening: "સાંજે",
    night: "રાત્રે"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "મધ્યરાત્રિ",
    noon: "બપોરે",
    morning: "સવારે",
    afternoon: "બપોરે",
    evening: "સાંજે",
    night: "રાત્રે"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "​મધ્યરાત્રિ",
    noon: "બપોરે",
    morning: "સવારે",
    afternoon: "બપોરે",
    evening: "સાંજે",
    night: "રાત્રે"
  }
}, m = (e, g) => String(e), u = {
  ordinalNumber: m,
  era: n({
    values: i,
    defaultWidth: "wide"
  }),
  quarter: n({
    values: a,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: n({
    values: o,
    defaultWidth: "wide"
  }),
  day: n({
    values: t,
    defaultWidth: "wide"
  }),
  dayPeriod: n({
    values: r,
    defaultWidth: "wide",
    formattingValues: d,
    defaultFormattingWidth: "wide"
  })
};
export {
  u as localize
};
