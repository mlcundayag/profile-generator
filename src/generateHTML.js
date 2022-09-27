const generateTeam =(teamMembers) => {
    const html = []
    //render manager
    const renderManager = manager => {
        let managerHtml = `
        <div class="custom-card card border-success col-12 col-md-3 m-2 p-0">
            <div class="card-header h2 bg-success text-center">${manager.name}</div>
            <div class="card-body">
                <h5 class="card-title">Manager <i class="bi bi-cup-hot"></i></h5>
                <p class="card-text border border-success m-0 p-2">Emloyee ID: ${manager.id}</p>
                <p class="card-text border border-success m-0 p-2">Email Address: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="card-text border border-success m-0 p-2">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
        `;
        html.push(managerHtml);
    }
    //render engineer
    const renderEngineer = engineer => {
        let engineerHtml = `
        <div class="custom-card card border-success col-12 col-md-3 m-2 p-0">
            <div class="card-header h2 bg-success text-center">${engineer.name}</div>
            <div class="card-body">
                <h5 class="card-title">Engineer <i class="bi bi-eyeglasses"></i></h5>
                <p class="card-text border border-success m-0 p-2">Emloyee ID: ${engineer.id}</p>
                <p class="card-text border border-success m-0 p-2">Email Address: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="card-text border border-success m-0 p-2">GitHub username: <a href="https://github.com/${engineer.gitHub}/" target="_blank">${engineer.gitHub}</a></p>
            </div>
        </div>
        `;
        html.push(engineerHtml)
    }
    //render intern
    const renderIntern = intern => {
        let internHtml = `
        <div class="custom-card card border-success col-12 col-md-3 m-2 p-0">
            <div class="card-header h2 bg-success text-center">${intern.name}</div>
            <div class="card-body">
                <h5 class="card-title">Intern <i class="bi bi-book"></i></h5>
                <p class="card-text border border-success m-0 p-2">Emloyee ID: ${intern.id}</p>
                <p class="card-text border border-success m-0 p-2">Email Address: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="card-text border border-success m-0 p-2">School Name: ${intern.school}</p>
            </div>
        </div>
        `;
        html.push(internHtml)
    }

    //create loop for every user input of members
    for(let i = 0; i < teamMembers.length; i++ ) {
        if (teamMembers[i].getRole() === "Manager") {
            renderManager(teamMembers[i]);
        }
        if (teamMembers[i].getRole() === "Engineer") {
            renderEngineer(teamMembers[i]);
        }
        if (teamMembers[i].getRole() === "Intern") {
            renderIntern(teamMembers[i]);
        }
    }

    return html.join('');
}

module.exports = teamMembers => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
      <link rel="stylesheet" href="./style.css">
      <title>Team Profile</title>
    </head>
    <body>
        <header>
            <nav class="navbar bg-dark" id="navbar">
                <h1 class="h1 w-100 text-center text-light p-4" id="navbar-text">Team Profile</h1>
            </nav>
        </header>
    
        <main>
            <div class="jumbotron jumbotron-fluid">
                <div class="row justify-content-center mx-5">
                    
    
                    ${generateTeam(teamMembers)}
    
                    
                </div> 
            </div>
        </main>
    </body>
    </html>`
}

 