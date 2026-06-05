import { buildLocalizeFn as a } from "../../_lib/buildLocalizeFn.js";
const o = {
  narrow: ["πΧ", "μΧ"],
  abbreviated: ["π.Χ.", "μ.Χ."],
  wide: ["προ Χριστού", "μετά Χριστόν"]
}, d = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Τ1", "Τ2", "Τ3", "Τ4"],
  wide: ["1ο τρίμηνο", "2ο τρίμηνο", "3ο τρίμηνο", "4ο τρίμηνο"]
}, u = {
  narrow: ["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"],
  abbreviated: [
    "Ιαν",
    "Φεβ",
    "Μάρ",
    "Απρ",
    "Μάι",
    "Ιούν",
    "Ιούλ",
    "Αύγ",
    "Σεπ",
    "Οκτ",
    "Νοέ",
    "Δεκ"
  ],
  wide: [
    "Ιανουάριος",
    "Φεβρουάριος",
    "Μάρτιος",
    "Απρίλιος",
    "Μάιος",
    "Ιούνιος",
    "Ιούλιος",
    "Αύγουστος",
    "Σεπτέμβριος",
    "Οκτώβριος",
    "Νοέμβριος",
    "Δεκέμβριος"
  ]
}, l = {
  narrow: ["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"],
  abbreviated: [
    "Ιαν",
    "Φεβ",
    "Μαρ",
    "Απρ",
    "Μαΐ",
    "Ιουν",
    "Ιουλ",
    "Αυγ",
    "Σεπ",
    "Οκτ",
    "Νοε",
    "Δεκ"
  ],
  wide: [
    "Ιανουαρίου",
    "Φεβρουαρίου",
    "Μαρτίου",
    "Απριλίου",
    "Μαΐου",
    "Ιουνίου",
    "Ιουλίου",
    "Αυγούστου",
    "Σεπτεμβρίου",
    "Οκτωβρίου",
    "Νοεμβρίου",
    "Δεκεμβρίου"
  ]
}, s = {
  narrow: ["Κ", "Δ", "T", "Τ", "Π", "Π", "Σ"],
  short: ["Κυ", "Δε", "Τρ", "Τε", "Πέ", "Πα", "Σά"],
  abbreviated: ["Κυρ", "Δευ", "Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ"],
  wide: [
    "Κυριακή",
    "Δευτέρα",
    "Τρίτη",
    "Τετάρτη",
    "Πέμπτη",
    "Παρασκευή",
    "Σάββατο"
  ]
}, m = {
  narrow: {
    am: "πμ",
    pm: "μμ",
    midnight: "μεσάνυχτα",
    noon: "μεσημέρι",
    morning: "πρωί",
    afternoon: "απόγευμα",
    evening: "βράδυ",
    night: "νύχτα"
  },
  abbreviated: {
    am: "π.μ.",
    pm: "μ.μ.",
    midnight: "μεσάνυχτα",
    noon: "μεσημέρι",
    morning: "πρωί",
    afternoon: "απόγευμα",
    evening: "βράδυ",
    night: "νύχτα"
  },
  wide: {
    am: "π.μ.",
    pm: "μ.μ.",
    midnight: "μεσάνυχτα",
    noon: "μεσημέρι",
    morning: "πρωί",
    afternoon: "απόγευμα",
    evening: "βράδυ",
    night: "νύχτα"
  }
}, w = (t, i) => {
  const r = Number(t), e = i?.unit;
  let n;
  return e === "year" || e === "month" ? n = "ος" : e === "week" || e === "dayOfYear" || e === "day" || e === "hour" || e === "date" ? n = "η" : n = "ο", r + n;
}, b = {
  ordinalNumber: w,
  era: a({
    values: o,
    defaultWidth: "wide"
  }),
  quarter: a({
    values: d,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: a({
    values: u,
    defaultWidth: "wide",
    formattingValues: l,
    defaultFormattingWidth: "wide"
  }),
  day: a({
    values: s,
    defaultWidth: "wide"
  }),
  dayPeriod: a({
    values: m,
    defaultWidth: "wide"
  })
};
export {
  b as localize
};
