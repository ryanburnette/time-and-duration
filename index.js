'use strict';

const TD = {};

TD.durationToMinutes = function (d) {
  if (d.startsWith(':')) {
    return parseInt(d.replace(':', ''));
  }

  let parts = String(d).split(':');
  let hours = parseInt(parts[0]);
  let minutes = parseInt(parts[1]);
  return hours * 60 + minutes;
};

module.exports = TD;
