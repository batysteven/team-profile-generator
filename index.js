const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

class teamGenerator {

    // first thing when app is initiated, prompts user for manager information
    promptManager() {

        // create const of manager
        const manager = new Manager;

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
        .then(({ name, employeeID, emailAddress, officeNumber }) => {
            manager.name = name;
            manager.employeeID = employeeID;
            manager.emailAddress = emailAddress;
            manager.officeNumber = officeNumber;
        });
    }
}

new teamGenerator().promptManager();

