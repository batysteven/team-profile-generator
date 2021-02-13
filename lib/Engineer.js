const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, employeeID, emailAddress, gitHubUsername) {
        super(name, employeeID, emailAddress);

        this.gitHubUsername = gitHubUsername;
    }

    getGithub() {

    }

    getRole() {
        
    }
}

module.exports = Engineer;