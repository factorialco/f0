import { buildLocalizeFn as n } from "../../_lib/buildLocalizeFn.js";
const i = {
  narrow: ["B", "คศ"],
  abbreviated: ["BC", "ค.ศ."],
  wide: ["ปีก่อนคริสตกาล", "คริสต์ศักราช"]
}, a = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["ไตรมาสแรก", "ไตรมาสที่สอง", "ไตรมาสที่สาม", "ไตรมาสที่สี่"]
}, o = {
  narrow: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
  short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
  abbreviated: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
  wide: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"]
}, t = {
  narrow: [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค."
  ],
  abbreviated: [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค."
  ],
  wide: [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม"
  ]
}, r = {
  narrow: {
    am: "ก่อนเที่ยง",
    pm: "หลังเที่ยง",
    midnight: "เที่ยงคืน",
    noon: "เที่ยง",
    morning: "เช้า",
    afternoon: "บ่าย",
    evening: "เย็น",
    night: "กลางคืน"
  },
  abbreviated: {
    am: "ก่อนเที่ยง",
    pm: "หลังเที่ยง",
    midnight: "เที่ยงคืน",
    noon: "เที่ยง",
    morning: "เช้า",
    afternoon: "บ่าย",
    evening: "เย็น",
    night: "กลางคืน"
  },
  wide: {
    am: "ก่อนเที่ยง",
    pm: "หลังเที่ยง",
    midnight: "เที่ยงคืน",
    noon: "เที่ยง",
    morning: "เช้า",
    afternoon: "บ่าย",
    evening: "เย็น",
    night: "กลางคืน"
  }
}, d = {
  narrow: {
    am: "ก่อนเที่ยง",
    pm: "หลังเที่ยง",
    midnight: "เที่ยงคืน",
    noon: "เที่ยง",
    morning: "ตอนเช้า",
    afternoon: "ตอนกลางวัน",
    evening: "ตอนเย็น",
    night: "ตอนกลางคืน"
  },
  abbreviated: {
    am: "ก่อนเที่ยง",
    pm: "หลังเที่ยง",
    midnight: "เที่ยงคืน",
    noon: "เที่ยง",
    morning: "ตอนเช้า",
    afternoon: "ตอนกลางวัน",
    evening: "ตอนเย็น",
    night: "ตอนกลางคืน"
  },
  wide: {
    am: "ก่อนเที่ยง",
    pm: "หลังเที่ยง",
    midnight: "เที่ยงคืน",
    noon: "เที่ยง",
    morning: "ตอนเช้า",
    afternoon: "ตอนกลางวัน",
    evening: "ตอนเย็น",
    night: "ตอนกลางคืน"
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
    values: t,
    defaultWidth: "wide"
  }),
  day: n({
    values: o,
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
