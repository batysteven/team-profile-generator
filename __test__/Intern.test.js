const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern('Steve');
    intern.employeeID = 1;
    intern.emailAddress = 'steve@email.com';
    intern.school = 'Riverton High School';

    expect(intern.name).toBe('Steve');
    expect(intern.employeeID).toEqual(expect.any(Number));
    expect(intern.emailAddress).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('get interns role', () => {
    const intern = new Intern('Steve');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});