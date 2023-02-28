const calculator = require('./calculator.js');

describe('Adding numbers', () => {
  test('adding: test 1', () => {
    expect(new calculator(4, 4).add()).toBe(8);
  });
  test('adding: test 2', () => {
    expect(new calculator(9, 4).add()).toBe(13);
  });
  test('adding: test 3', () => {
    expect(new calculator(1, 4).add()).toBe(5);
  });
});


describe('Subtracting numbers', () => {
  test('subtracting: test1', () => {
    expect(new calculator(4, 4).subtract()).toBe(0);
  });
  test('subtracting: test2', () => {
    expect(new calculator(6, 4).subtract()).toBe(2);
  });
  test('subtracting: test3', () => {
    expect(new calculator(8, 4).subtract()).toBe(4);
  });
});

describe('Multiplying numbers', () => {
  test('Multiplying: test1', () => {
    expect(new calculator(4, 4).multiply()).toBe(16);
  });
  test('Multiplying: test2', () => {
    expect(new calculator(6, 4).multiply()).toBe(24);
  });
  test('Multiplying: test3', () => {
    expect(new calculator(8, 4).multiply()).toBe(32);
  });

});

describe('Dividing numbers', () => {
  test('Dividing: test1', () => {
    expect(new calculator(4, 4).divide()).toBe(1);
  });
  test('Dividing: test2', () => {
    expect(new calculator(8, 4).divide()).toBe(2);
  });
  test('Dividing: test3', () => {
    expect(new calculator(10, 5).divide()).toBe(2);
  });

});
