const stringCap = require('./capitalize.js');

describe('Testing Capitalize', () => {
  test('test 1:', () => {
    expect(stringCap('jaime')).toBe('Jaime');
  });
  test('test 2:', () => {
    expect(stringCap('i love microverse')).toBe('I love microverse');
  });
});
