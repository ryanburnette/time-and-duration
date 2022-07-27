'use strict';

const TD = {};

TD.durationToMinutes = function (duration) {
  if (duration.startsWith(':')) {
    return parseInt(duration.replace(':', ''));
  }

  let parts = String(duration).split(':');
  let hours = parseInt(parts[0]);
  let minutes = parseInt(parts[1]);
  return hours * 60 + minutes;
};

TD.minutesToDuration = function (totalMinutes) {
  let hours = addLeadingZeros(Math.floor(totalMinutes / 60), 2);
  let minutes = addLeadingZeros(totalMinutes % 60, 2);
  return `${hours}:${minutes}`;
};

function addLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, '0');
}

TD.compareTimes = function (_a, _b) {
  let a = TD.durationToMinutes(_a);
  let b = TD.durationToMinutes(_b);
  return a > b;
};

module.exports = TD;
