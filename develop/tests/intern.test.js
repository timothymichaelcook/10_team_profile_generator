const intern = require('../lib/intern.js');

test('Can set school value via argument passed?', () => {
  const testValue = 'UoR';
  const e = new intern('test', 1, 'testEmail.test.com', testValue);
  expect(e.school).toBe(testValue);
});

test('The getRole function returns "intern"?', () => {
  const testValue = 'intern';
  const e = new intern('test', 1, 'testEmail.test.com', testValue);
  expect(e.getRole()).toBe(testValue);
});

test('Can you get school via getSchool function?', () => {
  const testValue = 'UoR';
  const e = new intern('test', 1, 'testEmail.test.com', testValue);
  expect(e.getSchool()).toBe(testValue);
});