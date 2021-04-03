const generateTeamMember = memberData => {
    const team = memberData.map(member => {
        if (member.getRole() === 'Manager') {
            return `
            <section class="card">
            <h3><b>${member.name}</b></h3>
            <h4><p>${member.getRole()}</p></h4>
            <div class="container">
            <p>ID: ${member.employeeID}</p>
            <a href="mailto:${member.emailAddress}" class="name">Email: ${member.emailAddress}</a>
            <p>Office Number: ${member.officeNumber}</p>
            </div>
            </section> 
            `;
        }
        if (member.getRole() === 'Engineer') {
            return `
            <section class="card">
            <h3><b>${member.name}</b></h3>
            <h4><p>${member.getRole()}</p></h4>
            <div class="container">
            <p>ID: ${member.employeeID}</p>
            <a href="mailto:${member.emailAddress}" class="name">Email: ${member.emailAddress}</a>
            <p><a href="${member.githubUsername}">GitHub: ${member.githubUsername}</a></p>
            </div>
            </section> 
            `;
        }
        if (member.getRole() === 'Intern') {
            return `
            <section class="card">
            <h3><b>${member.name}</b></h3>
            <h4><p>${member.getRole()}</p></h4>
            <div class="container">
            <p>ID: ${member.employeeID}</p>
            <a href="mailto:${member.emailAddress}" class="name">Email: ${member.emailAddress}</a>
            <p>School: ${member.school}</p>
            </div>
            </section> 
            `;
        }
    });
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
        .card{background-color: rgb(36, 219, 219); text-align: left; width: 200px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); border-radius: 5px; color: rgb(194, 98, 42); padding: 2px 16px; margin: 5px;}
        .container{text-align: center; padding: 2px 16px; background-color: white; border-radius: 5px; margin-bottom: 10px;}
        .header{background-color: green; color:white; text-align: center; padding-top: 20px; padding-bottom: 20px;}
        .grid-container{display: grid; grid-auto-flow: column; grid-row-gap: 50px; grid-auto-columns: max-content;}
    </style>
    <body>
        <header class="header"><h1>My Team</h1></header>
        <div class="grid-container">
            ${generateTeamMember(teamData)}
        </div>
    </body>
    </html>
    `;
};