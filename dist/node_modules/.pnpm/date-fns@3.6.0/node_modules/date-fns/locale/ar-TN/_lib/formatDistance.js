const u = {
  lessThanXSeconds: {
    one: "أقل من ثانية",
    two: "أقل من زوز ثواني",
    threeToTen: "أقل من {{count}} ثواني",
    other: "أقل من {{count}} ثانية"
  },
  xSeconds: {
    one: "ثانية",
    two: "زوز ثواني",
    threeToTen: "{{count}} ثواني",
    other: "{{count}} ثانية"
  },
  halfAMinute: "نص دقيقة",
  lessThanXMinutes: {
    one: "أقل من دقيقة",
    two: "أقل من دقيقتين",
    threeToTen: "أقل من {{count}} دقايق",
    other: "أقل من {{count}} دقيقة"
  },
  xMinutes: {
    one: "دقيقة",
    two: "دقيقتين",
    threeToTen: "{{count}} دقايق",
    other: "{{count}} دقيقة"
  },
  aboutXHours: {
    one: "ساعة تقريب",
    two: "ساعتين تقريب",
    threeToTen: "{{count}} سوايع تقريب",
    other: "{{count}} ساعة تقريب"
  },
  xHours: {
    one: "ساعة",
    two: "ساعتين",
    threeToTen: "{{count}} سوايع",
    other: "{{count}} ساعة"
  },
  xDays: {
    one: "نهار",
    two: "نهارين",
    threeToTen: "{{count}} أيام",
    other: "{{count}} يوم"
  },
  aboutXWeeks: {
    one: "جمعة تقريب",
    two: "جمعتين تقريب",
    threeToTen: "{{count}} جماع تقريب",
    other: "{{count}} جمعة تقريب"
  },
  xWeeks: {
    one: "جمعة",
    two: "جمعتين",
    threeToTen: "{{count}} جماع",
    other: "{{count}} جمعة"
  },
  aboutXMonths: {
    one: "شهر تقريب",
    two: "شهرين تقريب",
    threeToTen: "{{count}} أشهرة تقريب",
    other: "{{count}} شهر تقريب"
  },
  xMonths: {
    one: "شهر",
    two: "شهرين",
    threeToTen: "{{count}} أشهرة",
    other: "{{count}} شهر"
  },
  aboutXYears: {
    one: "عام تقريب",
    two: "عامين تقريب",
    threeToTen: "{{count}} أعوام تقريب",
    other: "{{count}} عام تقريب"
  },
  xYears: {
    one: "عام",
    two: "عامين",
    threeToTen: "{{count}} أعوام",
    other: "{{count}} عام"
  },
  overXYears: {
    one: "أكثر من عام",
    two: "أكثر من عامين",
    threeToTen: "أكثر من {{count}} أعوام",
    other: "أكثر من {{count}} عام"
  },
  almostXYears: {
    one: "عام تقريب",
    two: "عامين تقريب",
    threeToTen: "{{count}} أعوام تقريب",
    other: "{{count}} عام تقريب"
  }
}, c = (r, t, n) => {
  const o = u[r];
  let e;
  return typeof o == "string" ? e = o : t === 1 ? e = o.one : t === 2 ? e = o.two : t <= 10 ? e = o.threeToTen.replace("{{count}}", String(t)) : e = o.other.replace("{{count}}", String(t)), n?.addSuffix ? n.comparison && n.comparison > 0 ? "في " + e : "عندو " + e : e;
};
export {
  c as formatDistance
};
