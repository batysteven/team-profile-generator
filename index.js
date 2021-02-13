const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
var teamArray = [];
class teamGenerator {

    // first thing when app is initiated, prompts user for manager information
    promptManager() {
        // create const of manager
        const manager = new Manager;

        // prompt user for manager information
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Welcome to Team Generator, please enter your team managers name. (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your team managers name.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeID',
                message: 'Please enter the team managers ID. (Required)',
                validate: employeeIDInput => {
                    if (employeeIDInput) {
                        return true;
                    } else {
                        console.log('Please enter your team managers ID.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'emailAddress',
                message: 'Please enter the team managers email address. (Required)',
                validate: emailAddressInput => {
                    if (emailAddressInput) {
                        return true;
                    } else {
                        console.log('Please enter your team managers email address.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter the team managers office number. (Required)',
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log('Please enter your team managers office number.');
                        return false;
                    }
                }
            },
        ])
        // update const manager with user input
        .then(({ name, employeeID, emailAddress, officeNumber }) => {
            manager.name = name;
            manager.employeeID = employeeID;
            manager.emailAddress = emailAddress;
            manager.officeNumber = officeNumber;
            teamArray.push(manager);

            // take user to prompt what to do next
            this.promptQuestion();
        });
    }

    // prompt what to do next add inter, add engineer, or finished
    promptQuestion() {
        inquirer.prompt({
            type: 'list',
            name: 'questionNext',
            message: 'Would you like to do next?',
            choices: [{name :"Add Intern", value: 0}, {name: "Add Engineer", value: 1}, {name: "Finished", value: 2}]
        })
        .then((response) => {
            if (response.questionNext === 0) {
                this.promptIntern();
            }
            if (response.questionNext === 1) {
                this.promptEngineer();
            }
            if (response.questionNext === 2) {
                this.generateTeamIndex();
            }
        });
    }

    promptIntern() {
        const intern = new Intern;

        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter your interns name. (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your interns name.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeID',
                message: 'Please enter the interns ID. (Required)',
                validate: employeeIDInput => {
                    if (employeeIDInput) {
                        return true;
                    } else {
                        console.log('Please enter the interns ID.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'emailAddress',
                message: 'Please enter the interns email address. (Required)',
                validate: emailAddressInput => {
                    if (emailAddressInput) {
                        return true;
                    } else {
                        console.log('Please enter the interns email address.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'Please enter the interns school. (Required)',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('Please enter the interns school.');
                        return false;
                    }
                }
            },
        ])
        // update const intern with user input
        .then(({ name, employeeID, emailAddress, school }) => {
            intern.name = name;
            intern.employeeID = employeeID;
            intern.emailAddress = emailAddress;
            intern.school = school;
            teamArray.push(intern);
            // take user to prompt what to do next
            this.promptQuestion();
        });
    }

    promptEngineer() {
        const engineer = new Engineer;

        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter your engineers name. (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your engineers name.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeID',
                message: 'Please enter the engineers ID. (Required)',
                validate: employeeIDInput => {
                    if (employeeIDInput) {
                        return true;
                    } else {
                        console.log('Please enter the engineers ID.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'emailAddress',
                message: 'Please enter the engineers email address. (Required)',
                validate: emailAddressInput => {
                    if (emailAddressInput) {
                        return true;
                    } else {
                        console.log('Please enter the engineers email address.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'githubUsername',
                message: 'Please enter the engineers github username. (Required)',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('Please enter the engineers github username.');
                        return false;
                    }
                }
            },
        ])
        // update const engineer with user input
        .then(({ name, employeeID, emailAddress, githubUsername }) => {
            engineer.name = name;
            engineer.employeeID = employeeID;
            engineer.emailAddress = emailAddress;
            engineer.githubUsername = githubUsername;
            teamArray.push(engineer);
            // take user to prompt what to do next
            this.promptQuestion();
        });
    }

    generateTeamIndex() {

    }
    
}

new teamGenerator().promptManager();

