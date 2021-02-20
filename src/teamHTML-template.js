const generateTeamMember = memberData => {
    memberData.forEach(element => {
        
        return `
        <section>
        ${element.name}
        ${element.role}
        ${element.employeeID}
        ${element.emailAddress}
        ${(element.officeNumber) || (element.githubUsername) || (element.school)}
        </section> 
        `;
        // console.log(element);
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