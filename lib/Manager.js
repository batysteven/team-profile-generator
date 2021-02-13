const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, employeeID, emailAddress, officeNumber) {
        super(name, employeeID, emailAddress);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return `Manager`;
    }
}

module.exports = Manager;