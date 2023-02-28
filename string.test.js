const string = require('./string.js');
const reverseStr = require('./reverse.js');
const evalString = 'jaime';

test('Determine characters on a string', () => {
  expect(string(evalString)).toBe(5);
});

test('Less than 10?', () => {
  expect(string(evalString)).toBeLessThan(10);
});

test('At leat 1 character', () => {
  expect(string(evalString)).toBeGreaterThan(1);
});

test('Reverse string', () => {
  expect(reverseStr('jaime')).toBe('emiaj');
})
