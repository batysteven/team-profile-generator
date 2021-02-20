const generateTeamMember = memberData => {
    array.forEach(element => {
        role = getRole();
        name = getName();
        employeeID = getID();
        emailAddress = getEmail();
        if (role === 'Manager') {
            this.officeNumber = officeNumber;
        }
        if (role === 'Engineer') {
            githubUsername = getGithub();
        }

        if (role === 'Intern') {
            school = getSchool();
        }
    });
}

module.exports = teamData => {
    const teamArray = teamData;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    </head>
    <body>
        ${generateTeamMember(teamArray)}
        
    </body>
    </html>
    `;
};