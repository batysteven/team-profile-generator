const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('Steve');
    engineer.employeeID = 1;
    engineer.emailAddress = 'steve@email.com';
    engineer.gitHubUsername = 'steve@github.com';

    expect(engineer.name).toBe('Steve');
    expect(engineer.employeeID).toEqual(expect.any(Number));
    expect(engineer.emailAddress).toEqual(expect.any(String));
    expect(engineer.gitHubUsername).toEqual(expect.any(String));
});