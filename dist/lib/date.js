'use strict';

var dateFns = require('date-fns');

// src/lib/date.ts
function formatTime(date) {
  return dateFns.format(date, "p");
}
function formatTime24Hours(date) {
  return dateFns.format(date, "HH:mm");
}
function getAbbreviateMonth(date) {
  return dateFns.format(date, "LLL");
}
function getDayOfMonth(date) {
  return date.getDate();
}
function getAgo(date, addSuffix = true) {
  return dateFns.formatDistanceToNowStrict(date, { addSuffix });
}
function getDisplayDateBasedOnDuration(date, { yesterdayRelative = true } = {}) {
  if (dateFns.isToday(date)) {
    return getAgo(date);
  }
  if (dateFns.isYesterday(date)) {
    return yesterdayRelative ? getAgo(date) : dateFns.format(date, "p");
  }
  return dateFns.format(date, "PPPp");
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
    const diffDays = Math.abs(dateFns.differenceInDays(date, /* @__PURE__ */ new Date()));
    if (dateFns.isToday(date)) {
      groups.today.push(item);
    } else if (dateFns.isYesterday(date)) {
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
  day: dateFns.startOfDay,
  month: dateFns.startOfMonth,
  week: dateFns.startOfWeek,
  year: dateFns.startOfYear
};
function setDateGranularity(date, granularity) {
  return dateGranularityFunction[granularity]?.(date) || new Error(`Invalid date granularity ${granularity}`);
}

exports.categorizeItemsByDate = categorizeItemsByDate;
exports.formatTime = formatTime;
exports.formatTime24Hours = formatTime24Hours;
exports.getAbbreviateMonth = getAbbreviateMonth;
exports.getAgo = getAgo;
exports.getDayOfMonth = getDayOfMonth;
exports.getDisplayDateBasedOnDuration = getDisplayDateBasedOnDuration;
exports.setDateGranularity = setDateGranularity;
//# sourceMappingURL=date.js.map
//# sourceMappingURL=date.js.map