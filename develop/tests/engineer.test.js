const engineer = require('../lib/engineer.js');

test('Can set GitHub value via argument passed?', () => {
  const testValue = 'GitHubUsername';
  const e = new engineer('test', 1, 'testEmail.test.com', testValue);
  expect(e.github).toBe(testValue);
});

test('The getRole function returns "engineer"?', () => {
  const testValue = 'engineer';
  const e = new engineer('test', 1, 'testEmail.test.com', testValue);
  expect(e.getRole()).toBe(testValue);
});

test('Can get school via getSchool function?', () => {
  const testValue = 'GitHubUsername';
  const e = new engineer('test', 1, 'testEmail.test.com', testValue);
  expect(e.getGitHub()).toBe(testValue);
});