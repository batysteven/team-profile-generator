const generateTeamMember = memberData => {
    memberData.forEach(member => {
        return `
        <section>
        ${member.name}
        ${member.role}
        ${member.employeeID}
        ${member.emailAddress}
        ${(member.officeNumber) || (member.githubUsername) || (member.school)}
        </section> 
        `;
    });
}

module.exports = teamData => {
    const teamArray = teamData;
    console.log(generateTeamMember(teamArray));

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