const generateTeamMember = memberData => {
    memberData.forEach(member => {
        if (member.role === 'Manager') {
            return `
            <section>
            ${member.name}
            ${member.role}
            ID: ${member.employeeID}
            <a href="mailto:${member.emailAddress}">Email: ${member.emailAddress}</a>
            Office Number: ${member.officeNumber}
            </section> 
            `;
        }
        if (member.role === 'Engineer') {
            return `
            <section>
            ${member.name}
            ${member.role}
            ID: ${member.employeeID}
            <a href="mailto:${member.emailAddress}">Email: ${member.emailAddress}</a>
            <a href="${member.githubUsername}">GitHub: ${member.githubUsername}</a>
            </section> 
            `;
        }
        if (member.role === 'Intern') {
            return `
            <section>
            ${member.name}
            ${member.role}
            ID: ${member.employeeID}
            <a href="mailto:${member.emailAddress}">Email: ${member.emailAddress}</a>
            School: ${member.school}
            </section> 
            `;
        }
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