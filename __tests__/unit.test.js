// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// testing isPhone Number
test('real phone number', () => {
  expect(isPhoneNumber("(310)-888-9999")).toBe(true);
});

test('Another real phone number', () => {
  expect(isPhoneNumber("(209)-386-1063")).toBe(true);
});

test('too short', () => {
  expect(isPhoneNumber("(209)-386-106")).toBe(false);
});

test('contains illegal characters', () => {
  expect(isPhoneNumber("(209)-3&86-1069")).toBe(false);
});

//Testing isEmail
test('real email', () => {
  expect(isEmail("someone@ucsd.edu")).toBe(true);
});

test('Another real email', () => {
  expect(isEmail("some12guy@gmail.com")).toBe(true);
});

test('No @ symbol', () => {
  expect(isEmail("some12guygmail.com")).toBe(false);
});

test('No .com or other', () => {
  expect(isEmail("some12guygmail")).toBe(false);
});

//Testing isStrongPassword
test('strong Password', () => {
  expect(isStrongPassword("a56_bngiE")).toBe(true);
});

test('Another strong Password', () => {
  expect(isStrongPassword("r595gaeinE")).toBe(true);
});

test('too short', () => {
  expect(isStrongPassword("a3")).toBe(false);
});

test('contains special characters', () => {
  expect(isStrongPassword("r595ga&einE")).toBe(false);
});

//Testing isDate
test('valid date', () => {
  expect(isDate("01/02/2003")).toBe(true);
});

test('Another valid date', () => {
  expect(isDate("1/2/2003")).toBe(true);
});

test('contains letters', () => {
  expect(isDate("0e1/02/2003")).toBe(false);
});

test('does not contain year', () => {
  expect(isDate("01/02")).toBe(false);
});

//Testing isHexColor
test('valid color', () => {
  expect(isHexColor("FFFFFF")).toBe(true);
});

test('Another valid color', () => {
  expect(isHexColor("000000")).toBe(true);
});

test('contains special characters', () => {
  expect(isHexColor("@000000")).toBe(false);
});

test('too short', () => {
  expect(isHexColor("00000")).toBe(false);
});