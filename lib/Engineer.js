const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, employeeID, emailAddress, gitHubUsername) {
        super(name, employeeID, emailAddress);

        this.gitHubUsername = gitHubUsername;
    }

    getGithub() {
        return `${this.gitHubUsername}`;
    }

    getRole() {
        return `Engineer`;
    }
}

module.exports = Engineer;