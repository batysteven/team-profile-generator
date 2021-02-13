class Employee {
    constructor(name, employeeID, emailAddress) {
        this.name = name;
        this.employeeID = employeeID;
        this.emailAddress = emailAddress;
    }

    getName() {
        return `${this.name}`;
    }

    getId() {
        return `${this.employeeID}`;
    }

    getEmail() {
        return `${this.emailAddress}`;
    }
}

module.exports = Employee;