const employee = require('../lib/employee');

test('Can employee object be created?', () => {
  const e = new employee();
  expect(typeof(e)).toBe('object');
});

test('Can set name for employee via argument passed?', () => {
  const name = 'Bob';
  const e = new employee(name);
  expect(e.name).toBe(name);
});

test('Can set id for employee via argument passed?', () => {
  const id = '100';
  const e = new employee('test', testValue);
  expect(e.id).toBe(testValue);
});

test('Can set email for employee via argument passed?', () => {
  const testValue = 'testEmail@test.com';
  const e = new employee('test', 1, testValue);
  expect(e.email).toBe(testValue);
});

test('Can you get name via getName function?', () => {
  const testValue = 'Bob';
  const e = new intern(testValue);
  expect(e.getSchool()).toBe(testValue);
});



