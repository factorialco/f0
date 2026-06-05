const u = {
  lessThanXSeconds: {
    one: "أقل من ثانية",
    two: "أقل من ثانيتين",
    threeToTen: "أقل من {{count}} ثواني",
    other: "أقل من {{count}} ثانية"
  },
  xSeconds: {
    one: "ثانية",
    two: "ثانيتين",
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
    one: "حوالي ساعة",
    two: "حوالي ساعتين",
    threeToTen: "حوالي {{count}} ساعات",
    other: "حوالي {{count}} ساعة"
  },
  xHours: {
    one: "ساعة",
    two: "ساعتين",
    threeToTen: "{{count}} ساعات",
    other: "{{count}} ساعة"
  },
  xDays: {
    one: "يوم",
    two: "يومين",
    threeToTen: "{{count}} أيام",
    other: "{{count}} يوم"
  },
  aboutXWeeks: {
    one: "حوالي أسبوع",
    two: "حوالي أسبوعين",
    threeToTen: "حوالي {{count}} أسابيع",
    other: "حوالي {{count}} أسبوع"
  },
  xWeeks: {
    one: "أسبوع",
    two: "أسبوعين",
    threeToTen: "{{count}} أسابيع",
    other: "{{count}} أسبوع"
  },
  aboutXMonths: {
    one: "حوالي شهر",
    two: "حوالي شهرين",
    threeToTen: "حوالي {{count}} أشهر",
    other: "حوالي {{count}} شهر"
  },
  xMonths: {
    one: "شهر",
    two: "شهرين",
    threeToTen: "{{count}} أشهر",
    other: "{{count}} شهر"
  },
  aboutXYears: {
    one: "حوالي سنة",
    two: "حوالي سنتين",
    threeToTen: "حوالي {{count}} سنين",
    other: "حوالي {{count}} سنة"
  },
  xYears: {
    one: "عام",
    two: "عامين",
    threeToTen: "{{count}} أعوام",
    other: "{{count}} عام"
  },
  overXYears: {
    one: "أكثر من سنة",
    two: "أكثر من سنتين",
    threeToTen: "أكثر من {{count}} سنين",
    other: "أكثر من {{count}} سنة"
  },
  almostXYears: {
    one: "عام تقريبًا",
    two: "عامين تقريبًا",
    threeToTen: "{{count}} أعوام تقريبًا",
    other: "{{count}} عام تقريبًا"
  }
}, c = (r, t, n) => {
  let e;
  const o = u[r];
  return typeof o == "string" ? e = o : t === 1 ? e = o.one : t === 2 ? e = o.two : t <= 10 ? e = o.threeToTen.replace("{{count}}", String(t)) : e = o.other.replace("{{count}}", String(t)), n?.addSuffix ? n.comparison && n.comparison > 0 ? `في خلال ${e}` : `منذ ${e}` : e;
};
export {
  c as formatDistance
};
