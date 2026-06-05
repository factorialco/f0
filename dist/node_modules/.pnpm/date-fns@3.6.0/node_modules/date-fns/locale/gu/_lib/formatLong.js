import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, d MMMM, y",
  // CLDR #1825
  long: "d MMMM, y",
  // CLDR #1826
  medium: "d MMM, y",
  // CLDR #1827
  short: "d/M/yy"
  // CLDR #1828
}, a = {
  full: "hh:mm:ss a zzzz",
  // CLDR #1829
  long: "hh:mm:ss a z",
  // CLDR #1830
  medium: "hh:mm:ss a",
  // CLDR #1831
  short: "hh:mm a"
  // CLDR #1832
}, e = {
  full: "{{date}} {{time}}",
  // CLDR #1833
  long: "{{date}} {{time}}",
  // CLDR #1834
  medium: "{{date}} {{time}}",
  // CLDR #1835
  short: "{{date}} {{time}}"
  // CLDR #1836
}, d = {
  date: t({
    formats: m,
    defaultWidth: "full"
  }),
  time: t({
    formats: a,
    defaultWidth: "full"
  }),
  dateTime: t({
    formats: e,
    defaultWidth: "full"
  })
};
export {
  d as formatLong
};
