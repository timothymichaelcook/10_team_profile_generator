const employee = require('../lib/employee');

test('Can set GitHub value via argument passed?', () => {
  const testValue = 'GitHubUsername';
  const e = new engineer('test', 1, 'testEmail.test.com', testValue);
  expect(e.github).toBe(testValue);
});