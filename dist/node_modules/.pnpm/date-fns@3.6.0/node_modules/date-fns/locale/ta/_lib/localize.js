import { buildLocalizeFn as n } from "../../_lib/buildLocalizeFn.js";
const i = {
  narrow: ["கி.மு.", "கி.பி."],
  abbreviated: ["கி.மு.", "கி.பி."],
  // CLDR #1624, #1626
  wide: ["கிறிஸ்துவுக்கு முன்", "அன்னோ டோமினி"]
  // CLDR #1620, #1622
}, a = {
  // CLDR #1644 - #1647
  narrow: ["1", "2", "3", "4"],
  // CLDR #1636 - #1639
  abbreviated: ["காலா.1", "காலா.2", "காலா.3", "காலா.4"],
  // CLDR #1628 - #1631
  wide: [
    "ஒன்றாம் காலாண்டு",
    "இரண்டாம் காலாண்டு",
    "மூன்றாம் காலாண்டு",
    "நான்காம் காலாண்டு"
  ]
}, o = {
  // CLDR #700 - #711
  narrow: ["ஜ", "பி", "மா", "ஏ", "மே", "ஜூ", "ஜூ", "ஆ", "செ", "அ", "ந", "டி"],
  // CLDR #1676 - #1687
  abbreviated: [
    "ஜன.",
    "பிப்.",
    "மார்.",
    "ஏப்.",
    "மே",
    "ஜூன்",
    "ஜூலை",
    "ஆக.",
    "செப்.",
    "அக்.",
    "நவ.",
    "டிச."
  ],
  // CLDR #1652 - #1663
  wide: [
    "ஜனவரி",
    // January
    "பிப்ரவரி",
    // February
    "மார்ச்",
    // March
    "ஏப்ரல்",
    // April
    "மே",
    // May
    "ஜூன்",
    // June
    "ஜூலை",
    // July
    "ஆகஸ்ட்",
    // August
    "செப்டம்பர்",
    // September
    "அக்டோபர்",
    // October
    "நவம்பர்",
    // November
    "டிசம்பர்"
    // December
  ]
}, t = {
  // CLDR #1766 - #1772
  narrow: ["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"],
  // CLDR #1752 - #1758
  short: ["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"],
  // CLDR #1738 - #1744
  abbreviated: ["ஞாயி.", "திங்.", "செவ்.", "புத.", "வியா.", "வெள்.", "சனி"],
  // CLDR #1724 - #1730
  wide: [
    "ஞாயிறு",
    // Sunday
    "திங்கள்",
    // Monday
    "செவ்வாய்",
    // Tuesday
    "புதன்",
    // Wednesday
    "வியாழன்",
    // Thursday
    "வெள்ளி",
    // Friday
    "சனி"
    // Saturday
  ]
}, r = {
  narrow: {
    am: "மு.ப",
    pm: "பி.ப",
    midnight: "நள்.",
    noon: "நண்.",
    morning: "கா.",
    afternoon: "மதி.",
    evening: "மா.",
    night: "இர."
  },
  abbreviated: {
    am: "முற்பகல்",
    pm: "பிற்பகல்",
    midnight: "நள்ளிரவு",
    noon: "நண்பகல்",
    morning: "காலை",
    afternoon: "மதியம்",
    evening: "மாலை",
    night: "இரவு"
  },
  wide: {
    am: "முற்பகல்",
    pm: "பிற்பகல்",
    midnight: "நள்ளிரவு",
    noon: "நண்பகல்",
    morning: "காலை",
    afternoon: "மதியம்",
    evening: "மாலை",
    night: "இரவு"
  }
}, d = {
  narrow: {
    am: "மு.ப",
    pm: "பி.ப",
    midnight: "நள்.",
    noon: "நண்.",
    morning: "கா.",
    afternoon: "மதி.",
    evening: "மா.",
    night: "இர."
  },
  abbreviated: {
    am: "முற்பகல்",
    pm: "பிற்பகல்",
    midnight: "நள்ளிரவு",
    noon: "நண்பகல்",
    morning: "காலை",
    afternoon: "மதியம்",
    evening: "மாலை",
    night: "இரவு"
  },
  wide: {
    am: "முற்பகல்",
    pm: "பிற்பகல்",
    midnight: "நள்ளிரவு",
    noon: "நண்பகல்",
    morning: "காலை",
    afternoon: "மதியம்",
    evening: "மாலை",
    night: "இரவு"
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
