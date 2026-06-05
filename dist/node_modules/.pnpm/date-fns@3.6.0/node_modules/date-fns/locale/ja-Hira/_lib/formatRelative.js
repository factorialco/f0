const t = {
  lastWeek: "せんしゅうのeeeeのp",
  yesterday: "きのうのp",
  today: "きょうのp",
  tomorrow: "あしたのp",
  nextWeek: "よくしゅうのeeeeのp",
  other: "P"
}, p = (e, o, a, r) => t[e];
export {
  p as formatRelative
};
