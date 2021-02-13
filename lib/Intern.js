const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, employeeID, emailAddress, school) {
        super(name, employeeID, emailAddress);

        this.school = school;
    }

    getSchool() {

    }

    getRole() {
        
    }
}

module.exports = Intern;