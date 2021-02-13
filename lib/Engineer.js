const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, employeeID, emailAddress, githubUsername) {
        super(name, employeeID, emailAddress);

        this.githubUsername = githubUsername;
    }

    getGithub() {
        return `${this.githubUsername}`;
    }

    getRole() {
        return `Engineer`;
    }
}

module.exports = Engineer;