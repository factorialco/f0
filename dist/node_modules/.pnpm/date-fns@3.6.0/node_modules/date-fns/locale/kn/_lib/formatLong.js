import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, MMMM d, y",
  // CLDR 1816
  long: "MMMM d, y",
  // CLDR 1817
  medium: "MMM d, y",
  // CLDR 1818
  short: "d/M/yy"
  // CLDR 1819
}, a = {
  full: "hh:mm:ss a zzzz",
  // CLDR 1820
  long: "hh:mm:ss a z",
  // CLDR 1821
  medium: "hh:mm:ss a",
  // CLDR 1822
  short: "hh:mm a"
  // CLDR 1823
}, e = {
  full: "{{date}} {{time}}",
  // CLDR 1824
  long: "{{date}} {{time}}",
  // CLDR 1825
  medium: "{{date}} {{time}}",
  // CLDR 1826
  short: "{{date}} {{time}}"
  // CLDR 1827
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
