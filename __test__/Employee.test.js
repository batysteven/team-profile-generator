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

test('get employee name', () => {
    const employee = new Employee('Steve');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test('get employee id', () => {
    const employee = new Employee('Steve');
    employee.employeeID = 1;

    expect(employee.getId()).toEqual(expect.stringContaining(employee.employeeID.toString()));
});

test('get employee email address', () => {
    const employee = new Employee('Steve');
    employee.emailAddress = 'steve@email.com';

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.emailAddress));
});