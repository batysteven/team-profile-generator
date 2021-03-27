const generateTeamMember = memberData => {
    console.log("member data");
    console.log(memberData);
    const team = memberData.map(member => {
        if (member.getRole() === 'Manager') {
            return `
            <section>
            ${member.name}
            ${member.getRole()}
            ID: ${member.employeeID}
            <a href="mailto:${member.emailAddress}" class="name">Email: ${member.emailAddress}</a>
            Office Number: ${member.officeNumber}
            </section> 
            `;
        }
        if (member.getRole() === 'Engineer') {
            return `
            <section>
            ${member.name}
            ${member.getRole()}
            ID: ${member.employeeID}
            <a href="mailto:${member.emailAddress}">Email: ${member.emailAddress}</a>
            <a href="${member.githubUsername}">GitHub: ${member.githubUsername}</a>
            </section> 
            `;
        }
        if (member.getRole() === 'Intern') {
            return `
            <section>
            ${member.name}
            ${member.getRole()}
            ID: ${member.employeeID}
            <a href="mailto:${member.emailAddress}">Email: ${member.emailAddress}</a>
            School: ${member.school}
            </section> 
            `;
        }
    });
    console.log("after mapping");
    console.log(team);
    console.log(memberData);
    return team.join("");
}

module.exports = teamData => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    </head>
    <style>
        .name{color:red;}
    </style>
    <body>
        ${generateTeamMember(teamData)}
        
    </body>
    </html>
    `;
};