const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee('Steve');
    employee.employeeID = 1;
    employee.emailAddress = 'steve@email.com';
    
    expect(employee.name).toBe('Steve');
    expect(employee.employeeID).toEqual(expect.any(Number));
    expect(employee.emailAddress).toBe('steve@email.com');
});