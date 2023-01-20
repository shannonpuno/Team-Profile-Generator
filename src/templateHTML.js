
// Manager Card 
const managerCard = managerInfo => {
    return `
    <div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <h2 class="card-title">${managerInfo.getName()}</h2>
            <h4 class="card-subtitle">${managerInfo.getRole()}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${managerInfo.getId()}</li>
                <li class="list-group-item"> Email: ${managerInfo.getEmail()}</li>
                <li class="list-group-item"> Office Number: ${managerInfo.getOfficeNumber()}</li>
            </ul>
        </div>
    </div> `;
}
//Engineer Card
const engineerCard = engineerInfo => {
    return `
    <div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <h2 class="card-title">${engineerInfo.getName()}</h2>
            <h4 class="card-subtitle">${engineerInfo.getRole()}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${engineerInfo.getId()}</li>
                <li class="list-group-item"> Email: ${engineerInfo.getEmail()}</li>
                <li class="list-group-item"> GitHub: ${engineerInfo.getGithub()}</li>
            </ul>
        </div>
    </div> `;
}
//Intern Card
const internCard = internInfo => {
    return `
    <div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <h2 class="card-title">${internInfo.getName()}</h2>
            <h4 class="card-subtitle">${internInfo.getRole()}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${internInfo.getId()}</li>
                <li class="list-group-item"> Email: ${internInfo.getEmail()}</li>
                <li class="list-group-item"> School: ${internInfo.getSchool()}</li>
            </ul>
        </div>
    </div> `;
}

const teamPage = teamArray => {
    let page = ""

    for (let i = 0; i < teamArray.length; i++ ){
        if (teamArray[i].getRole() === "Manager"){
            page = page + managerCard(teamArray[i])
        }
        if (teamArray[i].getRole() === "Engineer"){
            page = page + engineerCard(teamArray[i])
        }
        if (teamArray[i].getRole() === "Intern"){
            page = page + internCard(teamArray[i])
        }
    }
    return page
}
//Generate HTML 
const generateRoster = data => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        <title>Team Profile Generator</title>
    </head>
    <body>
        <nav class="navbar">
            <h1>Team Profile</h1>
        </nav>

        <main>
            <div class="container">
                <div class="row justify-content-center">
                    ${teamPage(data)}
                </div>
            </div>
        </main>
        
    </body>
    </html>
    `;
}

module.exports = generateRoster;
