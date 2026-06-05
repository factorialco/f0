const u = {
  lessThanXSeconds: "តិចជាង {{count}} វិនាទី",
  xSeconds: "{{count}} វិនាទី",
  halfAMinute: "កន្លះនាទី",
  lessThanXMinutes: "តិចជាង {{count}} នាទី",
  xMinutes: "{{count}} នាទី",
  aboutXHours: "ប្រហែល {{count}} ម៉ោង",
  xHours: "{{count}} ម៉ោង",
  xDays: "{{count}} ថ្ងៃ",
  aboutXWeeks: "ប្រហែល {{count}} សប្តាហ៍",
  xWeeks: "{{count}} សប្តាហ៍",
  aboutXMonths: "ប្រហែល {{count}} ខែ",
  xMonths: "{{count}} ខែ",
  aboutXYears: "ប្រហែល {{count}} ឆ្នាំ",
  xYears: "{{count}} ឆ្នាំ",
  overXYears: "ជាង {{count}} ឆ្នាំ",
  almostXYears: "ជិត {{count}} ឆ្នាំ"
}, c = (e, n, o) => {
  let t = u[e];
  return typeof n == "number" && (t = t.replace("{{count}}", n.toString())), o?.addSuffix ? o.comparison && o.comparison > 0 ? "ក្នុងរយៈពេល " + t : t + "មុន" : t;
};
export {
  c as formatDistance
};
