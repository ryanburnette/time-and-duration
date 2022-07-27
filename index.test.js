'use strict';

const TD = require('./index.js');

describe('TD.durationToMinutes', function () {
  test(':01 is 1 minute', function () {
    expect(TD.durationToMinutes(':01')).toEqual(1);
  });
  test('1:30 is 90 minutes', function () {
    expect(TD.durationToMinutes('1:30')).toEqual(90);
  });
  test('10:59 is 659 minutes', function () {
    expect(TD.durationToMinutes('10:59')).toEqual(659);
  });
});
