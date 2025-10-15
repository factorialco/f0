import { format, formatDistanceToNowStrict, isToday, isYesterday, differenceInDays, startOfYear, startOfWeek, startOfMonth, startOfDay } from 'date-fns';

// src/lib/date.ts
function formatTime(date) {
  return format(date, "p");
}
function formatTime24Hours(date) {
  return format(date, "HH:mm");
}
function getAbbreviateMonth(date) {
  return format(date, "LLL");
}
function getDayOfMonth(date) {
  return date.getDate();
}
function getAgo(date, addSuffix = true) {
  return formatDistanceToNowStrict(date, { addSuffix });
}
function getDisplayDateBasedOnDuration(date, { yesterdayRelative = true } = {}) {
  if (isToday(date)) {
    return getAgo(date);
  }
  if (isYesterday(date)) {
    return yesterdayRelative ? getAgo(date) : format(date, "p");
  }
  return format(date, "PPPp");
}
var categorizeItemsByDate = (items, dateField) => {
  const groups = {
    today: [],
    yesterday: [],
    lastWeek: [],
    lastMonth: []
  };
  items.forEach((item) => {
    const date = item[dateField];
    const diffDays = Math.abs(differenceInDays(date, /* @__PURE__ */ new Date()));
    if (isToday(date)) {
      groups.today.push(item);
    } else if (isYesterday(date)) {
      groups.yesterday.push(item);
    } else if (diffDays <= 7) {
      groups.lastWeek.push(item);
    } else if (diffDays <= 30) {
      groups.lastMonth.push(item);
    } else {
      const year = date.getFullYear();
      if (!groups[year]) {
        groups[year] = [];
      }
      groups[year].push(item);
    }
  });
  return groups;
};
var dateGranularityFunction = {
  day: startOfDay,
  month: startOfMonth,
  week: startOfWeek,
  year: startOfYear
};
function setDateGranularity(date, granularity) {
  return dateGranularityFunction[granularity]?.(date) || new Error(`Invalid date granularity ${granularity}`);
}

export { categorizeItemsByDate, formatTime, formatTime24Hours, getAbbreviateMonth, getAgo, getDayOfMonth, getDisplayDateBasedOnDuration, setDateGranularity };
//# sourceMappingURL=date.mjs.map
//# sourceMappingURL=date.mjs.map