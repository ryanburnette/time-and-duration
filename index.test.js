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

describe('TD.minutesToDuration', function () {
  test('1 minute is 0:00', function () {
    expect(TD.minutesToDuration(1)).toEqual('00:01');
  });
  test('60 minutes is 01:00', function () {
    expect(TD.minutesToDuration(60)).toEqual('01:00');
  });
  test('90 minutes is 01:30', function () {
    expect(TD.minutesToDuration(90)).toEqual('01:30');
  });
});

describe('TD.compareTimes', function () {
  test('03:30 and 05:30', function () {
    expect(TD.compareTimes('03:30', '05:30')).toBeFalsy();
  });
  test('05:30 and 03:30', function () {
    expect(TD.compareTimes('05:30', '03:30')).toBeTruthy();
  });
});

describe('TD.isDuration', function () {
  test('00:00', function () {
    expect(TD.isDuration('00:00')).toBeTruthy();
  });
  test('01:01', function () {
    expect(TD.isDuration('01:01')).toBeTruthy();
  });
  test('00:60', function () {
    expect(TD.isDuration('00:60')).toBeFalsy();
  });
  test('48:59', function () {
    expect(TD.isDuration('48:59')).toBeTruthy();
  });
  test('128:00', function () {
    expect(TD.isDuration('128:00')).toBeTruthy();
  });
  test('-', function () {
    expect(TD.isDuration('-')).toBeFalsy();
  });
});
