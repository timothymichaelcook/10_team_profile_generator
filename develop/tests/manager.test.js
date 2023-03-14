const manager = require('../lib/manager.js');
const employee = require('../lib/employee.js');

test('Can set office number value via argument passed', () => {
  const testValue = 100;
  const e = new manager('test', 1, 'testEmail.test.com', testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('The getRole function returns "manager"', () => {
  const testValue = 'manager';
  const e = new manager('test', 1, 'testEmail.test.com', testValue);
  expect(e.getRole()).toBe(testValue);
});

test('Can get office number via getOffice function"', () => {
  const testValue = 100;
  const e = new manager('test', 1, 'testEmail.test.com', testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});

