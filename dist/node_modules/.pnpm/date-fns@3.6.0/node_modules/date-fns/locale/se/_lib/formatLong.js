import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE MMMM d. 'b.' y",
  long: "MMMM d. 'b.' y",
  medium: "MMM d. 'b.' y",
  short: "dd.MM.y"
}, d = {
  full: "'dii.' HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, e = {
  full: "{{date}} 'dii.' {{time}}",
  long: "{{date}} 'dii.' {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, i = {
  date: t({
    formats: m,
    defaultWidth: "full"
  }),
  time: t({
    formats: d,
    defaultWidth: "full"
  }),
  dateTime: t({
    formats: e,
    defaultWidth: "full"
  })
};
export {
  i as formatLong
};
