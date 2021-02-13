const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Steve');
    manager.employeeID = 1;
    manager.emailAddress = 'steve@email.com';
    manager.officeNumber = '123a';

    expect(manager.name).toBe('Steve');
    expect(manager.employeeID).toEqual(expect.any(Number));
    expect(manager.emailAddress).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});