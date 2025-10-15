import { View, Text } from 'react-native';
import { format } from 'date-fns';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/components/Avatars/DateAvatar/index.tsx
function getAbbreviateMonth(date) {
  return format(date, "LLL");
}
function getDayOfMonth(date) {
  return date.getDate();
}
var DateAvatar = ({ date }) => {
  const dateDay = getDayOfMonth(date);
  const month = getAbbreviateMonth(date);
  return /* @__PURE__ */ jsxs(View, { className: "flex h-10 w-10 flex-col items-center justify-center rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary", children: [
    /* @__PURE__ */ jsx(Text, { className: "pt-0.5 text-xs font-semibold uppercase leading-3 text-f1-special-highlight dark:text-f1-foreground-inverse-secondary", children: month }),
    /* @__PURE__ */ jsx(Text, { className: "flex items-center justify-center text-lg font-medium leading-tight text-f1-foreground", children: dateDay })
  ] });
};

export { DateAvatar };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map